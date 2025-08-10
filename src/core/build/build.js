const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const { execSync } = require('child_process');
const { generateSpellsData } = require('./generate-spells-data.js');

async function build() {
  try {
    console.log('🔨 Iniciando build...');

    // Generate spells data from individual files
    generateSpellsData();

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

    // Ler o arquivo de componentes bundle
    const componentsBundlePath = path.join(__dirname, '..', '..', 'components', 'bundle.js');
    let componentsBundleContent = '';

    if (fs.existsSync(componentsBundlePath)) {
      componentsBundleContent = fs.readFileSync(componentsBundlePath, 'utf8');
      console.log('📦 Bundle de componentes carregado');
    } else {
      console.log('⚠️ Bundle de componentes não encontrado, continuando sem componentes');
    }

    // Ler o arquivo main.js
    const mainJsPath = path.join(__dirname, '..', '..', 'main.js');
    const mainJsContent = fs.readFileSync(mainJsPath, 'utf8');
    console.log('📖 Arquivo main.js lido');

    // Combinar componentes bundle com main.js
    const combinedContent = componentsBundleContent + '\n\n' + mainJsContent;
    console.log('🔗 Conteúdo combinado (componentes + main.js)');

    // Inline the generated spells data into the main.js content
    let finalCombinedContent = combinedContent;
    const generatedSpellsDataPath = path.join(__dirname, '..', '..', 'generated-spells-data.js');
    if (fs.existsSync(generatedSpellsDataPath)) {
      const spellsDataContent = fs.readFileSync(generatedSpellsDataPath, 'utf8');
      // Replace the require statement with the actual spells data
      finalCombinedContent = combinedContent.replace(
        /const spellsData = require\('\.\/generated-spells-data\.js'\);/,
        spellsDataContent.replace('module.exports = spellsData;', '')
      );
      console.log('🔮 Dados de magias integrados ao build');
    } else {
      console.log('⚠️ Arquivo de dados de magias não encontrado, usando require original');
    }

    // Extrair metadata do Tampermonkey (se presente)
    const metadataMatch = finalCombinedContent.match(/\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/);
    const metadata = metadataMatch ? metadataMatch[0] + '\n\n' : '';
    const codeWithoutMetadata = finalCombinedContent.replace(/\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\s*/, '');

    // Minificar o código (sem metadata)
    console.log('⚡ Minificando código...');
    const minifiedResult = await minify(codeWithoutMetadata, {
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

    // Combinar metadata com código minificado
    const finalContent = metadata + minifiedResult.code;

    // Salvar arquivo minificado
    const outputPath = path.join(distDir, 'tormenta20hotbar.js');
    fs.writeFileSync(outputPath, finalContent);

    // Calcular tamanhos
    const originalSize = Buffer.byteLength(finalCombinedContent, 'utf8');
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