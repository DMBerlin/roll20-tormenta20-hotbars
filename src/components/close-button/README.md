# 🎯 Close Button Component

This folder contains the Close Button component files organized in their own directory for better structure and maintainability.

## 📁 File Structure

```
close-button/
├── close-button.hbs    # Handlebars template
├── close-button.js     # Component logic and exports
└── README.md          # This file
```

## 🔧 Files Description

### `close-button.hbs`
- **Purpose**: Handlebars template for the close button HTML structure
- **Features**: 
  - Dynamic styling with Handlebars variables
  - Conditional rendering support
  - Customizable properties

### `close-button.js`
- **Purpose**: Component logic, class definition, and factory functions
- **Exports**:
  - `CloseButton` class
  - `createCloseButton()` factory function
  - `createCloseButtonWithPreset()` factory function
  - `CloseButtonPresets` configuration object

## 🚀 Usage

### Import from Components Index
```javascript
import { createCloseButton, createCloseButtonWithPreset } from '../index.js';
```

### Direct Import (if needed)
```javascript
import { createCloseButton } from './close-button.js';
```

## 🎨 Available Presets

| Preset    | Description           | Use Case                  |
| --------- | --------------------- | ------------------------- |
| `default` | Standard close button | General popups and modals |
| `small`   | Compact version       | Notifications, tooltips   |
| `large`   | Bigger version        | Important dialogs         |
| `danger`  | Red styling           | Destructive actions       |
| `primary` | Blue styling          | Primary actions           |

## 🔄 Integration

This component is automatically included in the build process via:
- `src/components/bundle.js` - Self-contained bundle for main.js
- `src/components/index.js` - Centralized exports
- `src/main.js` - Integration with existing `applyCloseButtonStyle` function

## 📝 Example Usage

```javascript
// Basic usage
const closeBtn = createCloseButton({
    onClick: (e, component) => {
        console.log('Close button clicked!');
    }
});

// With preset
const dangerCloseBtn = createCloseButtonWithPreset('danger', {
    onClick: (e, component) => {
        if (confirm('Are you sure?')) {
            // Close action
        }
    }
});

// Render and use
const element = closeBtn.render();
document.body.appendChild(element);
```

## 🎯 Benefits of This Structure

1. **Organization**: Each component has its own folder
2. **Maintainability**: Easy to find and modify component files
3. **Scalability**: Easy to add more components following the same pattern
4. **Isolation**: Component files are self-contained
5. **Documentation**: Each component can have its own README

## 🔗 Related Files

- `src/components/index.js` - Centralized exports
- `src/components/bundle.js` - Build bundle
- `src/main.js` - Integration with existing code
- `src/components/example.js` - Usage examples
- `src/components/test-integration.js` - Integration examples 