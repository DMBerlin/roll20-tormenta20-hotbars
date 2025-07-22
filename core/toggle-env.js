const fs = require('fs');
const path = require('path');

function toggleEnvironment() {
  try {
    const testHtmlPath = path.join(__dirname, '..', 'src', 'test', 'index.html');
    const testHtmlContent = fs.readFileSync(testHtmlPath, 'utf8');

    // Verificar se está usando produção ou desenvolvimento
    const isProduction = testHtmlContent.includes('tormenta20hotbar.js');
    const isDevelopment = testHtmlContent.includes('tormenta20hotbar.dev.js');

    let newContent;
    let newEnvironment;

    if (isProduction || (!isProduction && !isDevelopment)) {
      // Mudar para desenvolvimento
      newContent = testHtmlContent.replace(
        /scriptElement\.src = `\.\.\/\.\.\/dist\/tormenta20hotbar\.js\?t=\$\{timestamp\}`;/g,
        'scriptElement.src = `../../dist/tormenta20hotbar.dev.js?t=${timestamp}`;'
      );
      newEnvironment = 'desenvolvimento';
    } else {
      // Mudar para produção
      newContent = testHtmlContent.replace(
        /scriptElement\.src = `\.\.\/\.\.\/dist\/tormenta20hotbar\.dev\.js\?t=\$\{timestamp\}`;/g,
        'scriptElement.src = `../../dist/tormenta20hotbar.js?t=${timestamp}`;'
      );
      newEnvironment = 'produção';
    }

    fs.writeFileSync(testHtmlPath, newContent);

    console.log(`✅ Ambiente alterado para: ${newEnvironment}`);
    console.log(`📁 Arquivo atualizado: ${testHtmlPath}`);

    if (newEnvironment === 'desenvolvimento') {
      console.log('💡 Agora usando arquivo não minificado para debug');
    } else {
      console.log('💡 Agora usando arquivo minificado para produção');
    }

  } catch (error) {
    console.error('❌ Erro ao alternar ambiente:', error.message);
    process.exit(1);
  }
}

// Executar a alternância
toggleEnvironment(); 