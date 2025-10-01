#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para criar uma nova release automaticamente
 * 
 * Uso:
 * node src/core/versioning/release.js [--version 1.0.0] [--message "Release message"]
 */

function getCurrentVersion() {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = fs.readFileSync(packagePath, 'utf8');
    const packageData = JSON.parse(packageContent);
    return packageData.version;
  } catch (error) {
    console.error('❌ Erro ao ler package.json:', error.message);
    process.exit(1);
  }
}

function updateVersion(newVersion) {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = fs.readFileSync(packagePath, 'utf8');
    const packageData = JSON.parse(packageContent);

    packageData.version = newVersion;

    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2) + '\n', 'utf8');
    console.log(`✅ Versão atualizada para ${newVersion} em package.json`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao atualizar package.json:', error.message);
    return false;
  }
}

function updateMainJsVersion(newVersion) {
  try {
    const mainJsPath = path.join(process.cwd(), 'src', 'main.js');
    let content = fs.readFileSync(mainJsPath, 'utf8');

    const versionRegex = /const SCRIPT_VERSION = '([^']+)'; \/\/ Última tag Git/;
    if (versionRegex.test(content)) {
      content = content.replace(versionRegex, `const SCRIPT_VERSION = '${newVersion}'; // Última tag Git`);
      fs.writeFileSync(mainJsPath, content, 'utf8');
      console.log(`✅ Versão atualizada para ${newVersion} em main.js`);
      return true;
    } else {
      console.error('❌ Não foi possível encontrar a constante SCRIPT_VERSION no arquivo main.js');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar main.js:', error.message);
    return false;
  }
}

function buildExtension() {
  try {
    console.log('🔨 Construindo extensão...');
    execSync('pnpm run build', { stdio: 'inherit' });
    console.log('✅ Build concluído');
    return true;
  } catch (error) {
    console.error('❌ Erro durante o build:', error.message);
    return false;
  }
}

function createGitCommit(version, message) {
  try {
    console.log('📝 Criando commit...');
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "Release ${version}: ${message}"`, { stdio: 'inherit' });
    console.log('✅ Commit criado');
    return true;
  } catch (error) {
    console.error('❌ Erro ao criar commit:', error.message);
    return false;
  }
}

function createGitTag(version, message) {
  try {
    console.log('🏷️ Criando tag...');
    execSync(`git tag -a v${version} -m "Release ${version}: ${message}"`, { stdio: 'inherit' });
    console.log('✅ Tag criada');
    return true;
  } catch (error) {
    console.error('❌ Erro ao criar tag:', error.message);
    return false;
  }
}

function pushToRemote() {
  try {
    console.log('📤 Fazendo push...');
    execSync('git push origin HEAD', { stdio: 'inherit' });
    execSync('git push origin --tags', { stdio: 'inherit' });
    console.log('✅ Push concluído');
    return true;
  } catch (error) {
    console.error('❌ Erro ao fazer push:', error.message);
    return false;
  }
}

function main() {
  console.log('🚀 Script de Release Automático');
  console.log('================================\n');

  // Parse arguments
  const versionArg = process.argv.find(arg => arg.startsWith('--version='));
  const messageArg = process.argv.find(arg => arg.startsWith('--message='));

  const newVersion = versionArg ? versionArg.split('=')[1] : null;
  const releaseMessage = messageArg ? messageArg.split('=')[1] : 'Nova versão com melhorias e correções';

  if (!newVersion) {
    console.error('❌ Versão não especificada. Use --version=1.0.0');
    process.exit(1);
  }

  console.log(`📦 Nova versão: ${newVersion}`);
  console.log(`📝 Mensagem: ${releaseMessage}\n`);

  // Check if there are uncommitted changes
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (status) {
      console.log('⚠️ Existem mudanças não commitadas:');
      console.log(status);
      console.log('\n💡 Recomenda-se fazer commit das mudanças antes de criar a release');

      const force = process.argv.includes('--force');
      if (!force) {
        console.log('💡 Use --force para continuar mesmo com mudanças não commitadas');
        process.exit(1);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao verificar status do Git:', error.message);
    process.exit(1);
  }

  // Update version in package.json
  if (!updateVersion(newVersion)) {
    process.exit(1);
  }

  // Update version in main.js
  if (!updateMainJsVersion(newVersion)) {
    process.exit(1);
  }

  // Build extension
  if (!buildExtension()) {
    process.exit(1);
  }

  // Create git commit
  if (!createGitCommit(newVersion, releaseMessage)) {
    process.exit(1);
  }

  // Create git tag
  if (!createGitTag(newVersion, releaseMessage)) {
    process.exit(1);
  }

  // Push to remote
  if (!pushToRemote()) {
    process.exit(1);
  }

  console.log('\n🎉 Release criada com sucesso!');
  console.log(`🏷️ Tag: v${newVersion}`);
  console.log(`📝 Mensagem: ${releaseMessage}`);
  console.log('\n🚀 A GitHub Action irá criar automaticamente a release com o arquivo ZIP!');
  console.log('📋 Verifique: https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases');
}

// Executar se for chamado diretamente
if (require.main === module) {
  main();
}

module.exports = {
  getCurrentVersion,
  updateVersion,
  updateMainJsVersion,
  buildExtension,
  createGitCommit,
  createGitTag,
  pushToRemote
};
