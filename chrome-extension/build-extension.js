const fs = require('fs');
const path = require('path');
// const { minify } = require('terser'); // Unused for now

// Import the spells data generator from the original project
const originalProjectPath = path.join(__dirname, '..');
const { generateSpellsData } = require(path.join(originalProjectPath, 'src/core/build/generate-spells-data.js'));

async function buildChromeExtension() {
    try {
        console.log('🔨 Building Chrome Extension...');

        // Generate spells data from individual files
        console.log('🔮 Generating spells data...');
        generateSpellsData();

        // Read the original main.js
        const mainJsPath = path.join(originalProjectPath, 'src/main.js');
        let mainJsContent = fs.readFileSync(mainJsPath, 'utf8');
        console.log('📖 Original main.js loaded');

        // Remove Tampermonkey headers and IIFE wrapper
        mainJsContent = mainJsContent
            .replace(/\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\s*/, '') // Remove Tampermonkey headers
            .replace(/^\(function \(\) \{\s*'use strict';\s*/, '') // Remove IIFE start
            .replace(/\}\)\(\);?\s*$/, ''); // Remove IIFE end

        // Add Chrome extension compatibility
        const chromeExtensionWrapper = `
// Chrome Extension Content Script for Roll20 Hotbar Extra - Tormenta20
(function() {
    'use strict';
    
    // Wait for Roll20 to be fully loaded
    function waitForRoll20() {
        if (typeof d20 !== 'undefined' && d20.Campaign) {
            console.log('Roll20 detected, initializing hotbar...');
            initializeHotbar();
        } else {
            setTimeout(waitForRoll20, 1000);
        }
    }
    
    function initializeHotbar() {
        ${mainJsContent}
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForRoll20);
    } else {
        waitForRoll20();
    }
})();
`;

        // Inline the generated spells data
        let finalContent = chromeExtensionWrapper;
        const generatedSpellsDataPath = path.join(originalProjectPath, 'src/modules/grimorio/generated-spells-data.js');
        if (fs.existsSync(generatedSpellsDataPath)) {
            const spellsDataContent = fs.readFileSync(generatedSpellsDataPath, 'utf8');
            // Replace the require statement with the actual spells data
            finalContent = chromeExtensionWrapper.replace(
                /const spellsData = require\('\.\/generated-spells-data\.js'\);/,
                spellsDataContent.replace('module.exports = spellsData;', '')
            );
            console.log('🔮 Spells data integrated into extension');
        } else {
            console.log('⚠️ Spells data file not found, extension may not work properly');
        }

        // Create extension directory structure
        const extensionDir = path.join(__dirname);
        const iconsDir = path.join(extensionDir, 'icons');

        if (!fs.existsSync(iconsDir)) {
            fs.mkdirSync(iconsDir, { recursive: true });
            console.log('📁 Icons directory created');
        }

        // Write the content script
        fs.writeFileSync(path.join(extensionDir, 'content.js'), finalContent);
        console.log('📝 Content script created');

        // Create popup.html
        const popupHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            width: 300px;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo {
            width: 48px;
            height: 48px;
            margin: 0 auto 10px;
            background: linear-gradient(45deg, #4a90e2, #357abd);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
        }
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        .version {
            font-size: 12px;
            color: #666;
        }
        .status {
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            text-align: center;
        }
        .status.active {
            background: #e8f5e8;
            color: #2d5a2d;
            border: 1px solid #4caf50;
        }
        .status.inactive {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffc107;
        }
        .info {
            font-size: 12px;
            color: #666;
            line-height: 1.4;
        }
        .link {
            color: #4a90e2;
            text-decoration: none;
        }
        .link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">R20</div>
        <div class="title">Roll20 Hotbar Extra</div>
        <div class="version">Tormenta20 v0.0.2</div>
    </div>
    
    <div id="status" class="status">
        <div id="status-text">Verificando...</div>
    </div>
    
    <div class="info">
        <p><strong>Como usar:</strong></p>
        <ul>
            <li>Acesse uma mesa no <a href="https://app.roll20.net" class="link" target="_blank">Roll20</a></li>
            <li>A hotbar aparecerá automaticamente</li>
            <li>Configure seu personagem e habilidades</li>
        </ul>
        
        <p><strong>Funciona apenas em:</strong><br>
        <code>app.roll20.net/editor/*</code></p>
    </div>

    <script src="popup.js"></script>
</body>
</html>
`;

        fs.writeFileSync(path.join(extensionDir, 'popup.html'), popupHtml);
        console.log('📄 Popup HTML created');

        // Create popup.js
        const popupJs = `
// Check if we're on a Roll20 page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    const statusDiv = document.getElementById('status');
    const statusText = document.getElementById('status-text');
    
    if (currentTab.url && currentTab.url.includes('app.roll20.net/editor/')) {
        statusDiv.className = 'status active';
        statusText.textContent = '✅ Ativo no Roll20';
    } else {
        statusDiv.className = 'status inactive';
        statusText.textContent = '⚠️ Acesse uma mesa do Roll20';
    }
});
`;

        fs.writeFileSync(path.join(extensionDir, 'popup.js'), popupJs);
        console.log('📄 Popup script created');

        // Create basic icons (placeholder - user should replace with actual icons)
        // eslint-disable-next-line no-unused-vars
        const createPlaceholderIcon = (size) => {
            const canvas = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="#4a90e2"/>
        <text x="50%" y="50%" font-family="Arial" font-size="${Math.floor(size / 3)}" fill="white" text-anchor="middle" dy=".3em">R20</text>
      </svg>`;
            return `data:image/svg+xml;base64,${Buffer.from(canvas).toString('base64')}`;
        };

        // Note: These are placeholder icons. For production, replace with actual PNG files.
        console.log('📦 Extension built successfully!');
        console.log('');
        console.log('📋 Next steps:');
        console.log('1. Replace placeholder icons in chrome-extension/icons/ with actual PNG files');
        console.log('2. Load the chrome-extension folder in Chrome Developer Mode');
        console.log('3. Navigate to app.roll20.net/editor/* to test');
        console.log('');
        console.log('🔧 To load in Chrome:');
        console.log('1. Open Chrome and go to chrome://extensions/');
        console.log('2. Enable "Developer mode" in the top right');
        console.log('3. Click "Load unpacked" and select the chrome-extension folder');

    } catch (error) {
        console.error('❌ Error building Chrome extension:', error.message);
        process.exit(1);
    }
}

// Run the build
buildChromeExtension();
