# Roll20 Hotbar Extra - Chrome Extension

This Chrome extension brings the Roll20 Hotbar Extra functionality directly to your browser, specifically designed for Tormenta20 campaigns on `app.roll20.net`.

## 🚀 Installation

### Method 1: Developer Mode (Recommended for testing)

1. **Build the extension:**
   ```bash
   cd chrome-extension
   npm install
   npm run build
   ```

2. **Load in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the `chrome-extension` folder
   - The extension should now appear in your extensions list

3. **Test the extension:**
   - Navigate to `https://app.roll20.net/editor/*` (any Roll20 game)
   - The hotbar should automatically appear
   - Click the extension icon in the toolbar to see status

### Method 2: Package for Distribution

1. **Build and package:**
   ```bash
   cd chrome-extension
   npm run build
   ```

2. **Create CRX file:**
   - In Chrome, go to `chrome://extensions/`
   - Enable Developer mode
   - Click "Pack extension"
   - Select the `chrome-extension` folder
   - This creates a `.crx` file for distribution

## 📁 Extension Structure

```
chrome-extension/
├── manifest.json          # Extension manifest (v3)
├── content.js             # Main script (generated from build)
├── popup.html             # Extension popup interface
├── popup.js               # Popup functionality
├── build-extension.js     # Build script
├── package.json           # Node.js dependencies
├── icons/                 # Extension icons
│   ├── icon16.png        # 16x16 icon (toolbar)
│   ├── icon48.png        # 48x48 icon (extension management)
│   └── icon128.png       # 128x128 icon (Chrome Web Store)
└── README.md             # This file
```

## 🔧 Development

### Building from Source

The build process automatically:
1. Generates spells data from the main project
2. Adapts the Tampermonkey script for Chrome extension
3. Removes Tampermonkey-specific code
4. Adds Chrome extension compatibility layer
5. Inlines all dependencies

### Key Differences from Tampermonkey Version

- **No Tampermonkey headers**: Uses Chrome extension manifest instead
- **Content script injection**: Runs as content script rather than userscript
- **Chrome storage API**: Could be adapted to use `chrome.storage` instead of `localStorage`
- **Extension popup**: Provides status and quick access
- **Automatic updates**: Can be updated through Chrome Web Store

### Permissions Explained

- `storage`: For saving user preferences and character data
- `activeTab`: To interact with the current Roll20 tab
- `https://app.roll20.net/*`: Host permission for Roll20 domain

## 🎯 Features

All features from the original Tampermonkey script:

- ✅ Floating draggable hotbar
- ✅ Character management (avatar, name, level)
- ✅ Hunter class abilities and powers
- ✅ Spell system with 200+ spells
- ✅ Favorites system
- ✅ Effects management
- ✅ Visual feedback and animations
- ✅ Persistent settings

## 🐛 Troubleshooting

### Extension not working?

1. **Check permissions**: Ensure the extension has permission for `app.roll20.net`
2. **Reload extension**: Go to `chrome://extensions/` and click the reload button
3. **Check console**: Open DevTools (F12) and look for errors
4. **Verify URL**: Extension only works on `app.roll20.net/editor/*` pages

### Hotbar not appearing?

1. **Wait for Roll20**: The extension waits for Roll20 to fully load
2. **Check console**: Look for "Roll20 detected, initializing hotbar..." message
3. **Reload page**: Sometimes a page refresh helps
4. **Clear storage**: Clear browser data for `app.roll20.net` if needed

### Build issues?

1. **Install dependencies**: Run `npm install` in the chrome-extension directory
2. **Check Node version**: Requires Node.js 14 or higher
3. **Verify paths**: Ensure the main project structure is intact

## 🔄 Updates

To update the extension with new features from the main project:

1. Pull latest changes from the main project
2. Run `npm run build` in the chrome-extension directory
3. Reload the extension in Chrome

## 📝 License

ISC License - Same as the main project.

## 🤝 Contributing

This extension is built from the main Tampermonkey project. Contribute to the main project at the repository root, then rebuild the extension.

---

**Note**: This extension is specifically designed for Roll20 and Tormenta20. It will only activate on `app.roll20.net/editor/*` pages.
