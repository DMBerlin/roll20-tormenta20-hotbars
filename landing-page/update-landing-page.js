#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para atualizar a landing page com informações da versão da branch main
 * 
 * Este script:
 * 1. Busca a versão da branch main
 * 2. Atualiza o arquivo index.html com a versão correta
 * 3. Copia os arquivos necessários para o GitHub Pages
 */

// Função para obter a versão da branch main
function getMainVersion() {
    try {
        // Fazer checkout para a branch main
        execSync('git checkout main', { stdio: 'pipe' });
        
        // Ler a versão do package.json
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Voltar para a branch original
        execSync('git checkout -', { stdio: 'pipe' });
        
        return packageJson.version;
    } catch (error) {
        console.error('❌ Erro ao obter versão da branch main:', error.message);
        return '0.3.1'; // Versão padrão
    }
}

// Função para obter informações do build
function getBuildInfo() {
    try {
        const buildPath = path.join(process.cwd(), 'dist', 'package', 'content.js');
        if (fs.existsSync(buildPath)) {
            const stats = fs.statSync(buildPath);
            const sizeInKB = Math.round(stats.size / 1024);
            return sizeInKB;
        }
        return 716; // Tamanho padrão
    } catch (error) {
        console.error('❌ Erro ao obter informações do build:', error.message);
        return 716;
    }
}

// Função para atualizar o HTML com a versão correta
function updateHTML(version, fileSize) {
    try {
        const htmlPath = path.join(process.cwd(), 'landing-page', 'index.html');
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // Atualizar versão
        htmlContent = htmlContent.replace(
            /<span id="current-version">[^<]+<\/span>/g,
            `<span id="current-version">${version}</span>`
        );
        
        // Atualizar tamanho do arquivo
        htmlContent = htmlContent.replace(
            /<span id="file-size">[^<]+<\/span>/g,
            `<span id="file-size">${fileSize} KB</span>`
        );
        
        // Atualizar data da última atualização
        const today = new Date().toLocaleDateString('pt-BR');
        htmlContent = htmlContent.replace(
            /<span id="last-update">[^<]+<\/span>/g,
            `<span id="last-update">${today}</span>`
        );
        
        fs.writeFileSync(htmlPath, htmlContent, 'utf8');
        console.log(`✅ HTML atualizado com versão ${version} e tamanho ${fileSize} KB`);
        return true;
    } catch (error) {
        console.error('❌ Erro ao atualizar HTML:', error.message);
        return false;
    }
}

// Função para copiar arquivos necessários
function copyAssets() {
    try {
        // Copiar ícones
        const iconSource = path.join(process.cwd(), 'dist', 'package', 'icon128.png');
        const iconDest = path.join(process.cwd(), 'landing-page', 'assets', 'icon-128.png');
        
        if (fs.existsSync(iconSource)) {
            fs.copyFileSync(iconSource, iconDest);
            console.log('✅ Ícone copiado para landing-page/assets/');
        }
        
        // Copiar arquivo da extensão para download
        const extensionSource = path.join(process.cwd(), 'dist', 'package');
        const extensionDest = path.join(process.cwd(), 'landing-page', 'package');
        
        if (fs.existsSync(extensionSource)) {
            if (fs.existsSync(extensionDest)) {
                fs.rmSync(extensionDest, { recursive: true, force: true });
            }
            fs.cpSync(extensionSource, extensionDest, { recursive: true });
            console.log('✅ Arquivos da extensão copiados para landing-page/package/');
        }
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao copiar assets:', error.message);
        return false;
    }
}

// Função para criar arquivo de configuração do GitHub Pages
function createGitHubPagesConfig() {
    try {
        const config = {
            name: "Deploy to GitHub Pages",
            on: {
                push: {
                    branches: ["main"]
                }
            },
            jobs: {
                deploy: {
                    runs_on: "ubuntu-latest",
                    steps: [
                        {
                            name: "Checkout",
                            uses: "actions/checkout@v3"
                        },
                        {
                            name: "Setup Node.js",
                            uses: "actions/setup-node@v3",
                            with: {
                                "node-version": "18"
                            }
                        },
                        {
                            name: "Install dependencies",
                            run: "npm install"
                        },
                        {
                            name: "Build extension",
                            run: "npm run build"
                        },
                        {
                            name: "Update landing page",
                            run: "node update-landing-page.js"
                        },
                        {
                            name: "Deploy to GitHub Pages",
                            uses: "peaceiris/actions-gh-pages@v3",
                            with: {
                                github_token: "${{ secrets.GITHUB_TOKEN }}",
                                publish_dir: "."
                            }
                        }
                    ]
                }
            }
        };
        
        const configPath = path.join(process.cwd(), '.github', 'workflows', 'deploy.yml');
        const configDir = path.dirname(configPath);
        
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
        
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
        console.log('✅ Configuração do GitHub Actions criada');
        return true;
    } catch (error) {
        console.error('❌ Erro ao criar configuração do GitHub Actions:', error.message);
        return false;
    }
}

// Função principal
function main() {
    console.log('🚀 Atualizando landing page para GitHub Pages');
    console.log('============================================\n');
    
    // Obter versão da branch main
    const version = getMainVersion();
    console.log(`📦 Versão da branch main: ${version}`);
    
    // Obter informações do build
    const fileSize = getBuildInfo();
    console.log(`📁 Tamanho do arquivo: ${fileSize} KB`);
    
    // Atualizar HTML
    const htmlUpdated = updateHTML(version, fileSize);
    
    // Copiar assets
    const assetsCopied = copyAssets();
    
    // Criar configuração do GitHub Actions (opcional)
    const configCreated = createGitHubPagesConfig();
    
    if (htmlUpdated && assetsCopied) {
        console.log('\n🎉 Landing page atualizada com sucesso!');
        console.log(`📝 Versão: ${version}`);
        console.log(`📁 Tamanho: ${fileSize} KB`);
        console.log('\n💡 Para publicar no GitHub Pages:');
        console.log('1. Faça commit das mudanças');
        console.log('2. Faça push para a branch main');
        console.log('3. O GitHub Actions irá fazer o deploy automaticamente');
    } else {
        console.error('\n❌ Erro ao atualizar landing page');
        process.exit(1);
    }
}

// Executar se for chamado diretamente
if (require.main === module) {
    main();
}

module.exports = {
    getMainVersion,
    getBuildInfo,
    updateHTML,
    copyAssets,
    createGitHubPagesConfig
};
