#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Função para obter a última tag Git
function getLatestGitTag() {
  try {
    const tag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
    return tag;
  } catch (error) {
    console.error('Erro ao obter a última tag Git:', error.message);
    return null;
  }
}

// Função para atualizar a tag @version do Tampermonkey
function updateTampermonkeyVersion(filePath, newVersion) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Atualizar a tag @version do Tampermonkey (remover o 'v' do início se existir)
    const versionWithoutV = newVersion.startsWith('v') ? newVersion.substring(1) : newVersion;
    const versionRegex = /\/\/ @version\s+([^\s]+)/;

    if (versionRegex.test(content)) {
      content = content.replace(versionRegex, `// @version      ${versionWithoutV}`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Tag @version do Tampermonkey atualizada para ${versionWithoutV} em ${filePath}`);
      return true;
    } else {
      console.error('❌ Não foi possível encontrar a tag @version do Tampermonkey no arquivo');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar a tag @version do Tampermonkey:', error.message);
    return false;
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
      console.log(`✅ Versão atualizada para ${newVersion} em ${filePath}`);
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

// Função para atualizar a versão no package.json
function updatePackageJsonVersion(newVersion) {
  try {
    const packageJsonPath = path.join(__dirname, '..', '..', '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    packageJson.version = newVersion;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
    console.log(`✅ Versão atualizada para ${newVersion} em package.json`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao atualizar package.json:', error.message);
    return false;
  }
}

// Função principal
function main() {
  const scriptPath = path.join(__dirname, '..', '..', 'main.js');

  // Verificar se o arquivo existe
  if (!fs.existsSync(scriptPath)) {
    console.error('❌ Arquivo main.js não encontrado em:', scriptPath);
    process.exit(1);
  }

  // Obter a última tag Git
  const latestTag = getLatestGitTag();
  if (!latestTag) {
    console.error('❌ Não foi possível obter a última tag Git');
    process.exit(1);
  }

  console.log(`🏷️  Última tag Git encontrada: ${latestTag}`);

  // Atualizar a tag @version do Tampermonkey
  const tampermonkeySuccess = updateTampermonkeyVersion(scriptPath, latestTag);

  // Atualizar o arquivo main.js (constante SCRIPT_VERSION)
  const mainJsSuccess = updateVersionInFile(scriptPath, latestTag);

  // Atualizar o package.json
  const packageJsonSuccess = updatePackageJsonVersion(latestTag);

  if (tampermonkeySuccess && mainJsSuccess && packageJsonSuccess) {
    console.log('🎉 Atualização de versão concluída com sucesso!');
  } else {
    console.error('❌ Falha na atualização de versão');
    process.exit(1);
  }
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { getLatestGitTag, updateVersionInFile, updatePackageJsonVersion, updateTampermonkeyVersion }; 