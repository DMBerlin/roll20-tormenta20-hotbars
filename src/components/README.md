# Components System

This folder contains reusable UI components built with Handlebars.js for the Roll20 Tormenta20 Hotbars project.

## Overview

The components system allows you to create reusable UI elements with consistent styling and behavior. Each component consists of:

1. **Template file** (`.hbs`) - Handlebars template with HTML structure
2. **Component file** (`.js`) - JavaScript logic and behavior
3. **Export file** (`index.js`) - Centralized exports for easy importing

## 📁 File Structure

```
src/components/
├── close-button/             # Close Button component folder
│   ├── close-button.hbs      # Handlebars template
│   ├── close-button.js       # Component logic
│   └── README.md            # Component documentation
├── index.js                  # Centralized exports
├── example.js                # Usage examples
├── test-integration.js       # Integration examples
├── bundle.js                 # Self-contained bundle for main.js
├── README.md                 # This documentation
└── OVERVIEW.md               # System overview
```

## Available Components

### Close Button Component

A reusable close button with customizable properties and presets.

#### Features:

- ✅ Customizable styling (color, size, text, etc.)
- ✅ Hover effects
- ✅ Click handlers
- ✅ Preset configurations
- ✅ Responsive design
- ✅ Accessibility support

#### Usage:

```javascript
import {
  createCloseButton,
  createCloseButtonWithPreset,
} from './components/index.js';

// Basic usage
const closeBtn = createCloseButton({
  onClick: (e, component) => {
    console.log('Close button clicked!');
    // Your close logic here
  },
});

// Using presets
const dangerCloseBtn = createCloseButtonWithPreset('danger', {
  onClick: (e, component) => {
    if (confirm('Are you sure?')) {
      // Close action
    }
  },
});

// Render the button
const buttonElement = closeBtn.render();
document.body.appendChild(buttonElement);
```

#### Configuration Options:

| Property       | Type     | Default                 | Description            |
| -------------- | -------- | ----------------------- | ---------------------- |
| `id`           | string   | auto-generated          | Unique identifier      |
| `text`         | string   | '×'                     | Button text/symbol     |
| `title`        | string   | 'Fechar'                | Tooltip text           |
| `color`        | string   | '#ecf0f1'               | Text color             |
| `fontSize`     | string   | '24px'                  | Font size              |
| `padding`      | string   | '8px'                   | Button padding         |
| `width`        | string   | '40px'                  | Button width           |
| `height`       | string   | '40px'                  | Button height          |
| `borderRadius` | string   | '4px'                   | Border radius          |
| `hoverColor`   | string   | 'rgba(255,255,255,0.1)' | Hover background color |
| `onClick`      | function | null                    | Click event handler    |
| `customStyles` | string   | ''                      | Additional CSS styles  |

#### Available Presets:

- **default** - Standard close button
- **small** - Compact version
- **large** - Bigger version
- **danger** - Red styling for destructive actions
- **primary** - Blue styling for primary actions

#### Example in a Popup:

```javascript
// Create popup header with close button
const header = document.createElement('div');
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';

const title = document.createElement('h3');
title.textContent = 'My Popup';

const closeBtn = createCloseButtonWithPreset('default', {
  onClick: (e, component) => {
    popup.remove(); // Close the popup
  },
});

header.appendChild(title);
header.appendChild(closeBtn.render());
popup.appendChild(header);
```

## Adding New Components

To add a new component:

1. **Create a component folder** (`component-name/`):
   ```
   src/components/
   └── component-name/
       ├── component-name.hbs
       ├── component-name.js
       └── README.md
   ```

2. **Create the template file** (`component-name/component-name.hbs`):

```handlebars
<div class='my-component' id='{{id}}'>
  <h3>{{title}}</h3>
  <p>{{description}}</p>
  {{#if showButton}}
    <button onclick='{{onClick}}'>{{buttonText}}</button>
  {{/if}}
</div>
```

3. **Create the component file** (`component-name/component-name.js`):

```javascript
import Handlebars from 'handlebars';
import template from './component-name.hbs';

export class MyComponent {
  constructor(config = {}) {
    this.config = {
      id: config.id || `my-component-${Date.now()}`,
      title: config.title || 'Default Title',
      description: config.description || '',
      showButton: config.showButton || false,
      buttonText: config.buttonText || 'Click me',
      onClick: config.onClick || null,
      ...config,
    };
    this.element = null;
  }

  render() {
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(this.config);

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;
    this.element = tempContainer.firstElementChild;

    this._addEventListeners();
    return this.element;
  }

  _addEventListeners() {
    // Add your event listeners here
  }

  // Add other methods as needed
}

export function createMyComponent(config = {}) {
  return new MyComponent(config);
}
```

4. **Update the index file** (`index.js`):

```javascript
// Add your new component exports
export { MyComponent, createMyComponent } from './component-name/component-name.js';
```

## Best Practices

1. **Consistent Naming**: Use kebab-case for files and camelCase for classes
2. **Default Values**: Always provide sensible defaults for all configurable properties
3. **Event Handling**: Use the component instance as the second parameter in event handlers
4. **Cleanup**: Implement a `destroy()` method for proper cleanup
5. **Documentation**: Document all public methods and configuration options
6. **Testing**: Create example files to demonstrate usage

## Integration with Main.js

To use components in your main.js file:

```javascript
// Import components
import { createCloseButton } from './components/index.js';

// Use in your existing functions
function createMyPopup() {
  const popup = document.createElement('div');
  // ... popup setup ...

  const closeBtn = createCloseButton({
    onClick: (e, component) => {
      popup.remove();
    },
  });

  popup.appendChild(closeBtn.render());
  document.body.appendChild(popup);
}
```

## Future Components

Planned components to add:

- [ ] Modal/Popup Component
- [ ] Search Input Component
- [ ] Button Component
- [ ] Tooltip Component
- [ ] Notification Component
- [ ] Form Components
- [ ] List Components

## Contributing

When adding new components:

1. Follow the existing pattern
2. Include comprehensive documentation
3. Create example usage
4. Test thoroughly
5. Update this README
