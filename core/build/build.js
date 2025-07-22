const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

async function build() {
  try {
    console.log('🔨 Iniciando build...');

    // Criar pasta dist se não existir
    const distDir = path.join(__dirname, '..', '..', 'dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('📁 Pasta dist criada');
    }

    // Ler o arquivo main.js
    const mainJsPath = path.join(__dirname, '..', '..', 'src', 'main.js');
    const mainJsContent = fs.readFileSync(mainJsPath, 'utf8');
    console.log('📖 Arquivo main.js lido');

    // Salvar versão de desenvolvimento (não minificada)
    const devPath = path.join(distDir, 'tormenta20hotbar.dev.js');
    fs.writeFileSync(devPath, mainJsContent);
    console.log('📁 Versão de desenvolvimento salva');

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
    console.log(`📁 Arquivo de produção: ${outputPath}`);
    console.log(`📁 Arquivo de desenvolvimento: ${devPath}`);

  } catch (error) {
    console.error('❌ Erro durante o build:', error.message);
    process.exit(1);
  }
}

// Executar o build
build(); 