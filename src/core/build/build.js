const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const { execSync } = require('child_process');
const { generateSpellsData } = require('./generate-spells-data.js');
const { generatePotionsData } = require('./generate-potions-data.js');
const { generateConditionsData } = require('./generate-conditions-data.js');
const { generateIcons } = require('./icon-generator.js');

async function build() {
  try {
    console.log('🔨 Iniciando build do Chrome extension...');

    // Generate spells data from individual files
    generateSpellsData();

    // Generate potions data from YAML files
    generatePotionsData();

    // Generate conditions data from YAML files
    generateConditionsData();

    // Detectar branch atual
    let currentBranch = 'unknown';
    try {
      currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    } catch {
      console.log('⚠️ Não foi possível detectar a branch atual (não é um repositório git ou git não está disponível)');
    }

    console.log(`🌿 Branch atual: ${currentBranch}`);

    // Criar pasta dist/package se não existir
    const packageDir = path.join(__dirname, '..', '..', '..', 'dist', 'package');
    if (!fs.existsSync(packageDir)) {
      fs.mkdirSync(packageDir, { recursive: true });
      console.log('📁 Pasta dist/package criada');
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
    const generatedSpellsDataPath = path.join(__dirname, '..', '..', 'modules', 'grimorio', 'generated-spells-data.js');
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

    // Inline the generated potions data into the main.js content
    const generatedPotionsDataPath = path.join(__dirname, '..', '..', 'modules', 'potions', 'generated-potions-data.js');
    if (fs.existsSync(generatedPotionsDataPath)) {
      const potionsDataContent = fs.readFileSync(generatedPotionsDataPath, 'utf8');
      // Replace the require statement with the actual potions data
      finalCombinedContent = finalCombinedContent.replace(
        /const potionsData = require\('\.\/generated-potions-data\.js'\);/,
        potionsDataContent.replace('module.exports = potionsData;', '')
      );
      console.log('🧪 Dados de poções integrados ao build');
    } else {
      console.log('⚠️ Arquivo de dados de poções não encontrado, usando require original');
    }

    // Inline the generated conditions data into the main.js content
    const generatedConditionsDataPath = path.join(__dirname, '..', '..', 'modules', 'conditions', 'generated-conditions-data.js');
    if (fs.existsSync(generatedConditionsDataPath)) {
      const conditionsDataContent = fs.readFileSync(generatedConditionsDataPath, 'utf8');
      // Replace the require statement with the actual conditions data
      finalCombinedContent = finalCombinedContent.replace(
        /const conditionsData = require\('\.\/generated-conditions-data\.js'\);/,
        conditionsDataContent.replace('module.exports = conditionsData;', '')
      );
      console.log('⚡ Dados de condições integrados ao build');
    } else {
      console.log('⚠️ Arquivo de dados de condições não encontrado, usando require original');
    }

    // Minificar o código
    console.log('⚡ Minificando código...');
    const minifiedResult = await minify(finalCombinedContent, {
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

    // Salvar content.js para Chrome extension
    const contentScriptPath = path.join(packageDir, 'content.js');
    fs.writeFileSync(contentScriptPath, minifiedResult.code);
    console.log('📜 content.js criado (Chrome extension)');

    // Generate PNG icons for Chrome extension
    await generateIcons(packageDir);

    // Parse package.json para extrair informações para o Chrome extension
    const packageJsonPath = path.join(__dirname, '..', '..', '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    const extensionName = packageJson.name || 'Roll20 Hotbar Extra';
    const extensionDescription = packageJson.description || 'Adiciona uma hotbar flutuante arrastável com macros extras ao Roll20';
    const extensionVersion = packageJson.version || '1.0.0';
    const extensionAuthor = packageJson.author || 'Daniel Marinho Goncalves';

    // Criar manifest.json para Chrome extension
    const manifest = {
      manifest_version: 3,
      name: extensionName,
      version: extensionVersion,
      description: extensionDescription,
      author: extensionAuthor,
      permissions: [
        "storage",
        "activeTab"
      ],
      host_permissions: [
        "https://app.roll20.net/*"
      ],
      content_scripts: [
        {
          matches: ["https://app.roll20.net/editor/*"],
          js: ["content.js"],
          run_at: "document_end"
        }
      ],
      icons: {
        "16": "icon16.png",
        "32": "icon32.png",
        "48": "icon48.png",
        "128": "icon128.png",
        "256": "icon256.png",
        "512": "icon512.png"
      },
      action: {
        default_title: extensionName,
        default_popup: "popup.html"
      }
    };

    // Salvar manifest.json
    const manifestPath = path.join(packageDir, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('📄 manifest.json criado');

    // Criar popup.html
    const popupHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>${extensionName}</title>
   <style>
    body {
      width: 300px;
      padding: 20px;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin: 0;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .version {
      font-size: 12px;
      opacity: 0.8;
    }
    .description {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 20px;
    }
    .status {
      background: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 5px;
      text-align: center;
      font-size: 12px;
    }
    .branch {
      margin-top: 10px;
      font-size: 11px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">${extensionName}</div>
    <div class="version">v${extensionVersion}</div>
  </div>
  <div class="description">
    ${extensionDescription}
  </div>
  <div class="status">
    ✅ Plugin ativo no Roll20
    <div class="branch">Branch: ${currentBranch}</div>
  </div>
</body>
</html>`;

    const popupPath = path.join(packageDir, 'popup.html');
    fs.writeFileSync(popupPath, popupHtml);
    console.log('🪟 popup.html criado');

    // Limpar ícones antigos se existirem
    const oldIconFiles = ['icon16.ico', 'icon32.ico', 'icon48.ico', 'icon128.ico', 'icon256.ico', 'icon512.ico', 'icon16.svg', 'icon32.svg', 'icon48.svg', 'icon128.svg', 'icon256.svg', 'icon512.svg'];
    oldIconFiles.forEach(iconFile => {
      const iconPath = path.join(packageDir, iconFile);
      if (fs.existsSync(iconPath)) {
        fs.unlinkSync(iconPath);
        console.log(`🗑️ Ícone antigo ${iconFile} removido`);
      }
    });

    // Criar README.md para o package
    const readmeContent = `# ${extensionName}

## Descrição
${extensionDescription}

## Instalação

### Método 1: Carregamento Desenvolvimento
1. Abra o Chrome/Edge e vá para \`chrome://extensions/\`
2. Ative o "Modo desenvolvedor" (toggle no canto superior direito)
3. Clique em "Carregar sem compactação"
4. Selecione a pasta \`package\` deste diretório
5. O plugin será instalado e aparecerá na lista de extensões

### Método 2: Empacotamento
1. No Chrome/Edge, vá para \`chrome://extensions/\`
2. Ative o "Modo desenvolvedor"
3. Clique em "Empacotar extensão"
4. Selecione a pasta \`package\` como diretório raiz
5. Uma extensão .crx será gerada

## Uso
- Acesse o Roll20 em \`https://app.roll20.net/editor/\`
- O plugin será automaticamente ativado
- Uma hotbar flutuante aparecerá na tela

## Versão
- Versão: ${extensionVersion}
- Branch: ${currentBranch}
- Build: ${new Date().toISOString()}

## Autor
${extensionAuthor}
`;

    const readmePath = path.join(packageDir, 'README.md');
    fs.writeFileSync(readmePath, readmeContent);
    console.log('📖 README.md criado');

    // Calcular tamanhos
    const originalSize = Buffer.byteLength(finalCombinedContent, 'utf8');
    const minifiedSize = Buffer.byteLength(minifiedResult.code, 'utf8');
    const compressionRatio = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);

    console.log('✅ Build do Chrome extension concluído com sucesso!');
    console.log(`📊 Tamanho original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Tamanho minificado: ${(minifiedSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Redução: ${compressionRatio}%`);
    console.log(`📁 Chrome extension gerado em: ${packageDir}`);
    console.log('');
    console.log('📋 Arquivos criados:');
    console.log('  - manifest.json (configuração da extensão)');
    console.log('  - content.js (script principal minificado)');
    console.log('  - popup.html (interface do popup)');
    console.log('  - icon16.png, icon32.png, icon48.png, icon128.png, icon256.png, icon512.png (ícones PNG)');
    console.log('  - README.md (instruções de instalação)');
    console.log('');
    console.log('🚀 Para instalar:');
    console.log('  1. Abra chrome://extensions/');
    console.log('  2. Ative "Modo desenvolvedor"');
    console.log('  3. Clique "Carregar sem compactação"');
    console.log('  4. Selecione a pasta "package"');

    if (currentBranch === 'main') {
      console.log('🚀 Build da branch main - pronto para produção!');
    } else if (currentBranch === 'development') {
      console.log('🔧 Build da branch development - para testes');
    } else {
      console.log(`🔧 Build da branch ${currentBranch} - para desenvolvimento`);
    }

  } catch (error) {
    console.error('❌ Erro durante o build do Chrome extension:', error.message);
    process.exit(1);
  }
}

// Executar o build
build(); 