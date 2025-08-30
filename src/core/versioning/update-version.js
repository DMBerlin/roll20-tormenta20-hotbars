#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script para sincronizar a versão do package.json com o main.js
 * 
 * Este script lê a versão definida manualmente no package.json e
 * sincroniza com a constante SCRIPT_VERSION no main.js
 */

// Função para obter a versão do package.json
function getPackageVersion() {
  try {
    const packageJsonPath = path.join(__dirname, '..', '..', '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  } catch (error) {
    console.error('❌ Erro ao ler package.json:', error.message);
    process.exit(1);
  }
}

// Função para atualizar a versão no arquivo main.js
function updateVersionInFile(filePath, newVersion) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Atualizar a constante SCRIPT_VERSION
    const versionRegex = /const SCRIPT_VERSION = '([^']+)'; \/\/ Última tag Git/;
    if (versionRegex.test(content)) {
      content = content.replace(versionRegex, `const SCRIPT_VERSION = '${newVersion}'; // Última tag Git`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Versão sincronizada para ${newVersion} em ${filePath}`);
      return true;
    } else {
      console.error('❌ Não foi possível encontrar a constante SCRIPT_VERSION no arquivo');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar o arquivo:', error.message);
    return false;
  }
}

// Função principal
function main() {
  console.log('🔄 Script de sincronização de versão');
  console.log('====================================\n');

  const scriptPath = path.join(__dirname, '..', '..', 'main.js');

  // Verificar se o arquivo existe
  if (!fs.existsSync(scriptPath)) {
    console.error('❌ Arquivo main.js não encontrado em:', scriptPath);
    process.exit(1);
  }

  // Obter a versão do package.json
  const packageVersion = getPackageVersion();
  console.log(`📦 Versão do package.json: ${packageVersion}`);

  // Sincronizar com o main.js
  const success = updateVersionInFile(scriptPath, packageVersion);

  if (success) {
    console.log('\n🎉 Sincronização de versão concluída com sucesso!');
    console.log(`📝 A versão ${packageVersion} foi sincronizada do package.json para o main.js`);
  } else {
    console.error('\n❌ Falha na sincronização de versão');
    process.exit(1);
  }
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = {
  getPackageVersion,
  updateVersionInFile
}; 