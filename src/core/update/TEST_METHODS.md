# 🧪 Test Methods for Update System

This document explains how to test the update system using browser console commands.

## 🚀 Quick Start

Open the browser console (F12) and run:

```javascript
testNewVersionAvailable()
```

This will display the "New Version Available" modal exactly as it appears in production.

## 📋 Available Test Methods

### 1. **testNewVersionAvailable()** - ⭐ **NEW**
Tests the "New Version Available" modal with realistic data:
- Shows version 0.4.4 with description
- Includes "Download Update" and "Later" buttons
- Simulates the complete user flow
- Auto-dismisses after 30 seconds

### 2. **testManualUpdateCheck()**
Tests the manual update check functionality

### 3. **testConfigInterface()**
Opens the configuration modal to test update settings

### 4. **testNotifications()**
Tests the notification system with a sample notification

### 5. **testGitHubAPI()**
Tests the connection to GitHub API for releases

### 6. **testNoReleasesScenario()**
Tests the "No Releases Available" scenario

### 7. **runAllTests()**
Executes all test methods in sequence

## 🎯 Specific Test: New Version Modal

### Basic Test
```javascript
testNewVersionAvailable()
```

### What It Does
1. **Creates a realistic modal** with:
   - Version: 0.4.4
   - Description: "Nova versão com melhorias na busca global e indexação de poderes"
   - Release URL: GitHub release page
   - Published date: Current timestamp

2. **Interactive buttons**:
   - "Baixar Atualização" → Opens installation instructions
   - "Depois" → Dismisses the modal

3. **Visual features**:
   - Slide-in animation
   - Professional styling matching production
   - Auto-dismiss after 30 seconds

### Expected Behavior
- Modal appears in top-right corner
- Smooth slide-in animation
- Buttons are clickable and functional
- Console logs show interaction details
- Installation instructions modal opens when "Download" is clicked

## 🔧 Development Usage

### Test Individual Components
```javascript
// Test just the modal
testNewVersionAvailable()

// Test the installation flow
testNewVersionAvailable()
// Then click "Baixar Atualização" to see installation instructions
```

### Test Complete Flow
```javascript
// Run all update system tests
runAllTests()
```

## 📊 Console Output

When running `testNewVersionAvailable()`, you'll see:

```
🧪 Testando modal de "nova versão disponível"...
✅ Modal de "nova versão disponível" exibido
📊 Dados da versão: {version: "0.4.4", tag: "v0.4.4", ...}
```

When clicking buttons:
```
🔗 Simulando clique em "Baixar Atualização"
📦 URL da release: https://github.com/...
🌐 Abrindo URL: https://github.com/...
📋 Instruções de instalação de teste exibidas
```

## 🎨 Visual Testing

The test modal includes:
- **Gradient background** (purple to blue)
- **Green "NEW" icon** with emoji
- **Professional typography** and spacing
- **Smooth animations** (slide-in effect)
- **Responsive design** (max-width: 350px)
- **High z-index** (10000) to appear above other elements

## 🚨 Important Notes

1. **Test Environment**: These methods only work in development mode
2. **No Real Updates**: The test doesn't actually check for real updates
3. **Safe Testing**: All interactions are simulated and logged
4. **Auto-cleanup**: Modals auto-dismiss to prevent UI clutter

## 🔍 Troubleshooting

### Modal Not Appearing
- Check if you're in development mode
- Ensure the script is loaded
- Check browser console for errors

### Buttons Not Working
- Verify the modal was created successfully
- Check for JavaScript errors in console
- Ensure event listeners are attached

### Styling Issues
- Check if CSS animations are supported
- Verify z-index isn't being overridden
- Ensure no conflicting styles

## 📝 Customization

To test with different version data, modify the `mockUpdateData` object in the `testNewVersionAvailable()` function:

```javascript
const mockUpdateData = {
  version: '0.5.0',  // Change version
  tag: 'v0.5.0',
  description: 'Your custom description here',
  html_url: 'https://github.com/...',
  // ... other properties
};
```

---

**🎉 Happy Testing!** Use these methods to ensure your update system works perfectly before releasing to users.
