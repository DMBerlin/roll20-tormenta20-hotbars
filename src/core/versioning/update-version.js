#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Função para obter a branch atual
function getCurrentBranch() {
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    return branch;
  } catch (error) {
    console.error('Erro ao obter a branch atual:', error.message);
    return null;
  }
}

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

// Função para gerar timestamp
function generateTimestamp() {
  const now = new Date();
  return now.getTime().toString();
}

// Função para formatar versão baseada na branch
function formatVersion(baseVersion, branch) {
  const versionWithoutV = baseVersion.startsWith('v') ? baseVersion.substring(1) : baseVersion;
  
  if (branch === 'develop') {
    const timestamp = generateTimestamp();
    return `${versionWithoutV}-${timestamp}`;
  }
  
  return versionWithoutV;
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

  // Obter a branch atual
  const currentBranch = getCurrentBranch();
  if (!currentBranch) {
    console.error('❌ Não foi possível obter a branch atual');
    process.exit(1);
  }

  console.log(`🌿 Branch atual: ${currentBranch}`);

  // Obter a última tag Git
  const latestTag = getLatestGitTag();
  if (!latestTag) {
    console.error('❌ Não foi possível obter a última tag Git');
    process.exit(1);
  }

  console.log(`🏷️  Última tag Git encontrada: ${latestTag}`);

  // Formatar versão baseada na branch
  const formattedVersion = formatVersion(latestTag, currentBranch);
  console.log(`📦 Versão formatada: ${formattedVersion}`);

  // Atualizar o arquivo main.js (constante SCRIPT_VERSION)
  const mainJsSuccess = updateVersionInFile(scriptPath, formattedVersion);

  // Atualizar o package.json
  const packageJsonSuccess = updatePackageJsonVersion(formattedVersion);

  if (mainJsSuccess && packageJsonSuccess) {
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

module.exports = { 
  getCurrentBranch, 
  getLatestGitTag, 
  updateVersionInFile, 
  updatePackageJsonVersion,
  formatVersion,
  generateTimestamp
}; 