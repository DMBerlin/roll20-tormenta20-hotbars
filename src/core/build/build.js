const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const { execSync } = require('child_process');

async function build() {
  try {
    console.log('🔨 Iniciando build...');

    // Detectar branch atual
    let currentBranch = 'unknown';
    try {
      currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    } catch {
      console.log('⚠️ Não foi possível detectar a branch atual (não é um repositório git ou git não está disponível)');
    }

    console.log(`🌿 Branch atual: ${currentBranch}`);

    // Criar pasta dist se não existir
    const distDir = path.join(__dirname, '..', '..', '..', 'dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('📁 Pasta dist criada');
    }

    // Ler o arquivo main.js
    const mainJsPath = path.join(__dirname, '..', '..', 'main.js');
    const mainJsContent = fs.readFileSync(mainJsPath, 'utf8');
    console.log('📖 Arquivo main.js lido');

    // Minificar o código
    console.log('⚡ Minificando código...');
    const minifiedResult = await minify(mainJsContent, {
      compress: {
        drop_console: false, // Manter console.log para debug
        drop_debugger: true,
        pure_funcs: ['console.log'], // Remove console.log em produção se necessário
        passes: 2
      },
      mangle: {
        toplevel: false, // Não mangle nomes de funções globais importantes
        reserved: ['GM_addStyle', 'GM_setValue', 'GM_getValue', 'GM_listValues', 'GM_deleteValue']
      },
      format: {
        comments: false
      }
    });

    if (minifiedResult.error) {
      throw new Error(`Erro na minificação: ${minifiedResult.error}`);
    }

    // Salvar arquivo minificado
    const outputPath = path.join(distDir, 'tormenta20hotbar.js');
    fs.writeFileSync(outputPath, minifiedResult.code);

    // Calcular tamanhos
    const originalSize = Buffer.byteLength(mainJsContent, 'utf8');
    const minifiedSize = Buffer.byteLength(minifiedResult.code, 'utf8');
    const compressionRatio = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);

    console.log('✅ Build concluído com sucesso!');
    console.log(`📊 Tamanho original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Tamanho minificado: ${(minifiedSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Redução: ${compressionRatio}%`);
    console.log(`📁 Arquivo gerado: ${outputPath}`);

    if (currentBranch === 'main') {
      console.log('🚀 Build da branch main - pronto para produção!');
    } else if (currentBranch === 'development') {
      console.log('🔧 Build da branch development - para testes');
    } else {
      console.log(`🔧 Build da branch ${currentBranch} - para desenvolvimento`);
    }

  } catch (error) {
    console.error('❌ Erro durante o build:', error.message);
    process.exit(1);
  }
}

// Executar o build
build(); 