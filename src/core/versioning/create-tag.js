#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para criar uma nova tag Git baseada na versão do package.json
 * 
 * Uso:
 * node src/core/versioning/create-tag.js [--message "Mensagem personalizada"]
 */

function getPackageVersion() {
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

function getCurrentBranch() {
    try {
        return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    } catch (error) {
        console.error('❌ Erro ao obter branch atual:', error.message);
        process.exit(1);
    }
}

function getLatestTag() {
    try {
        const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf8' }).trim();
        return tags.split('\n')[0] || 'Nenhuma tag encontrada';
    } catch (error) {
        return 'Nenhuma tag encontrada';
    }
}

function createGitTag(version, message) {
    try {
        // Verificar se já existe uma tag com essa versão
        const existingTags = execSync('git tag', { encoding: 'utf8' }).trim();
        if (existingTags.includes(version)) {
            console.log(`⚠️  Tag ${version} já existe!`);
            const overwrite = process.argv.includes('--force');
            if (!overwrite) {
                console.log('💡 Use --force para sobrescrever a tag existente');
                return false;
            }
            console.log('🔄 Removendo tag existente...');
            execSync(`git tag -d ${version}`, { stdio: 'inherit' });
        }

        // Criar a nova tag
        console.log(`🏷️  Criando tag: ${version}`);
        execSync(`git tag -a ${version} -m "${message}"`, { stdio: 'inherit' });
        
        // Fazer push da tag para o repositório remoto
        console.log('📤 Fazendo push da tag...');
        execSync(`git push origin ${version}`, { stdio: 'inherit' });
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao criar tag:', error.message);
        return false;
    }
}

function main() {
    console.log('🚀 Script de criação de tag Git');
    console.log('================================\n');

    // Obter versão do package.json
    const version = getPackageVersion();
    console.log(`📦 Versão do package.json: ${version}`);

    // Obter branch atual
    const currentBranch = getCurrentBranch();
    console.log(`🌿 Branch atual: ${currentBranch}`);

    // Obter última tag
    const latestTag = getLatestTag();
    console.log(`🏷️  Última tag: ${latestTag}\n`);

    // Verificar se há mudanças não commitadas
    try {
        const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
        if (status) {
            console.log('⚠️  Existem mudanças não commitadas:');
            console.log(status);
            console.log('\n💡 Recomenda-se fazer commit das mudanças antes de criar a tag');
            
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

    // Gerar mensagem da tag
    const customMessage = process.argv.find(arg => arg.startsWith('--message='));
    const message = customMessage 
        ? customMessage.split('=')[1] 
        : `Release ${version} - ${new Date().toISOString().split('T')[0]}`;

    console.log(`📝 Mensagem da tag: ${message}\n`);

    // Confirmar criação da tag
    if (!process.argv.includes('--yes')) {
        console.log('❓ Deseja criar a tag? (y/N)');
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('', (answer) => {
            rl.close();
            if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
                createTag();
            } else {
                console.log('❌ Operação cancelada');
                process.exit(0);
            }
        });
    } else {
        createTag();
    }

    function createTag() {
        const success = createGitTag(version, message);
        if (success) {
            console.log('\n✅ Tag criada com sucesso!');
            console.log(`🏷️  Tag: ${version}`);
            console.log(`📝 Mensagem: ${message}`);
            console.log('\n🎉 Release pronto!');
        } else {
            console.log('\n❌ Falha ao criar tag');
            process.exit(1);
        }
    }
}

// Executar se for chamado diretamente
if (require.main === module) {
    main();
}

module.exports = { getPackageVersion, createGitTag };
