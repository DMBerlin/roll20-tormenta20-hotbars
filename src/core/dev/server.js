const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

function openDevServer() {
  try {
    // Obter o caminho absoluto do diretório do projeto
    const projectRoot = path.resolve(__dirname, '..', '..', '..');
    const htmlPath = path.join(projectRoot, 'src', 'playground', 'index.html');
    const buildPath = path.join(projectRoot, 'dist', 'package', 'content.js');
    
    // Verificar se o arquivo HTML existe
    if (!fs.existsSync(htmlPath)) {
      console.error('❌ Arquivo HTML não encontrado:', htmlPath);
      process.exit(1);
    }

    // Verificar se o build existe
    if (!fs.existsSync(buildPath)) {
      console.error('❌ Build não encontrado!');
      console.error(`📁 Arquivo esperado: ${buildPath}`);
      console.error('💡 Execute o comando de build primeiro: npm run build');
      process.exit(1);
    }

    console.log('🚀 Abrindo servidor de desenvolvimento...');
    console.log(`📁 Caminho do projeto: ${projectRoot}`);
    console.log(`🌐 Arquivo HTML: ${htmlPath}`);
    console.log(`✅ Build encontrado: ${buildPath}`);

    // Detectar o sistema operacional e abrir o navegador apropriado
    const platform = process.platform;
    let command;

    if (platform === 'win32') {
      // Windows - tentar Microsoft Edge primeiro, depois Chrome
      command = `start msedge "file:///${htmlPath.replace(/\\/g, '/')}"`;
    } else if (platform === 'darwin') {
      // macOS
      command = `open -a "Microsoft Edge" "file://${htmlPath}"`;
    } else {
      // Linux
      command = `xdg-open "file://${htmlPath}"`;
    }

    console.log(`💻 Comando: ${command}`);

    exec(command, (error) => {
      if (error) {
        console.error('❌ Erro ao abrir o navegador:', error.message);
        
        // Fallback: tentar com Chrome se Edge falhar
        if (platform === 'win32') {
          console.log('🔄 Tentando com Chrome...');
          const chromeCommand = `start chrome "file:///${htmlPath.replace(/\\/g, '/')}"`;
          exec(chromeCommand, (chromeError) => {
            if (chromeError) {
              console.error('❌ Erro ao abrir Chrome:', chromeError.message);
              console.log('💡 Dica: Abra manualmente o arquivo:', htmlPath);
            } else {
              console.log('✅ Arquivo aberto no Chrome!');
            }
          });
        } else {
          console.log('💡 Dica: Abra manualmente o arquivo:', htmlPath);
        }
        return;
      }
      
      console.log('✅ Arquivo aberto no Microsoft Edge!');
    });

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

// Executar o servidor de desenvolvimento
openDevServer();