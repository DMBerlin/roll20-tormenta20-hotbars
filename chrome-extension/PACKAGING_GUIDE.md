# 📦 Chrome Extension Packaging & Distribution Guide

This guide shows you how to create distributable packages of your Roll20 Chrome extension.

## 🚀 Quick Start - Create Package

```bash
cd chrome-extension
npm run package
```

This creates:
- `dist/roll20-hotbar-extension.zip` - Ready for distribution
- `dist/package/` - Clean directory for Chrome packaging

## 📋 Distribution Methods

### Method 1: ZIP File Distribution (Easiest)

**Create the package:**
```bash
npm run package
```

**Share with others:**
1. Send them `dist/roll20-hotbar-extension.zip`
2. They extract it anywhere
3. They load it in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the extracted folder

### Method 2: CRX File (Chrome Package)

**Create CRX file:**
1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Pack extension"
4. **Extension root directory:** Select `dist/package/` folder
5. **Private key:** Leave empty (first time)
6. Click "Pack Extension"

This creates:
- `package.crx` - Installable Chrome extension
- `package.pem` - Private key (keep safe for updates!)

**Install CRX file:**
- Double-click the `.crx` file
- Chrome asks "Add extension?" → Click "Add extension"

### Method 3: Chrome Web Store (Professional)

**Prepare for store:**
1. Create proper icons (see Icons section below)
2. Test thoroughly
3. Update version in `manifest.json`
4. Run `npm run package`

**Submit to store:**
1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Pay one-time $5 developer fee
3. Upload the ZIP file from `dist/`
4. Fill out store listing
5. Submit for review

## 🎨 Adding Icons (Important!)

Your extension needs proper icons for professional appearance:

**Required sizes:**
- `icons/icon16.png` - 16×16 pixels (toolbar)
- `icons/icon48.png` - 48×48 pixels (extension management)
- `icons/icon128.png` - 128×128 pixels (Chrome Web Store)

**Create icons:**
1. Design your icon (Roll20/D20 theme recommended)
2. Save as PNG files in the `icons/` folder
3. Run `npm run package` to include them

**Icon tips:**
- Use simple, recognizable design
- High contrast colors
- Avoid text (too small to read)
- Test on light and dark backgrounds

## 📁 Package Contents

The packaged extension includes only essential files:

```
package/
├── manifest.json     # Extension configuration
├── content.js        # Main functionality (minified)
├── popup.html        # Extension popup
├── popup.js          # Popup functionality
└── icons/           # Extension icons (if present)
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

**Excluded from package:**
- `node_modules/`
- `build-extension.js`
- `package.json`
- Development files

## 🔄 Updating Your Extension

**For CRX distribution:**
1. Make changes to your code
2. Update version in `manifest.json`
3. Run `npm run package`
4. Use the SAME `.pem` file when packing
5. Distribute the new `.crx` file

**For Chrome Web Store:**
1. Update version in `manifest.json`
2. Run `npm run package`
3. Upload new ZIP to developer dashboard
4. Users get automatic updates

## 🔐 Security & Permissions

**Your extension requests:**
- `storage` - Save user preferences
- `activeTab` - Interact with current tab
- `https://app.roll20.net/*` - Only works on Roll20

**Security features:**
- Only runs on Roll20 domain
- No external network requests
- No access to other websites
- Chrome's built-in security model

## 🐛 Troubleshooting Packaging

### "Extension could not be loaded"
- Check `manifest.json` syntax
- Ensure all referenced files exist
- Look for console errors

### "Package is invalid"
- Verify manifest version (should be 3)
- Check file paths in manifest
- Ensure icons are proper PNG format

### Users can't install CRX
- Chrome blocks unsigned extensions by default
- Use "Load unpacked" method instead
- Or publish to Chrome Web Store for signed distribution

## 📊 File Sizes

Typical package sizes:
- ZIP file: ~175 KB
- CRX file: ~175 KB
- Uncompressed: ~500 KB

The extension is lightweight and loads quickly!

## 🎯 Distribution Checklist

Before sharing your extension:

- [ ] Test on fresh Chrome installation
- [ ] Add proper icons (16, 48, 128 px)
- [ ] Update version number
- [ ] Test on actual Roll20 game
- [ ] Create installation instructions
- [ ] Package using `npm run package`
- [ ] Test the packaged version

## 📞 Support for Users

Include these instructions when sharing:

**Installation (ZIP method):**
1. Download and extract the ZIP file
2. Open `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the extracted folder

**Installation (CRX method):**
1. Download the `.crx` file
2. Double-click to install
3. Click "Add extension" when prompted

**Usage:**
1. Go to `https://app.roll20.net/editor/*`
2. The hotbar appears automatically
3. Click extension icon to check status

---

🎉 **Your extension is now ready for distribution!** Share the ZIP file or CRX with other Roll20 players to enhance their gaming experience.
