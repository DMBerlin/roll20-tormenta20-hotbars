# Hotbar Button Component

A reusable button component designed specifically for hotbar interfaces with customizable appearance, badges, and themes.

## Features

- **Customizable Themes**: Pre-built themes (blue, red, green, orange, purple) or custom colors
- **Multiple Sizes**: Small (48px), Medium (64px), Large (80px)
- **Badge Support**: Optional badges with customizable colors and positioning
- **Icon & Label Support**: Flexible icon and label display
- **Hover Effects**: Smooth transitions and scale effects
- **Disabled State**: Visual feedback for disabled buttons
- **Tooltip Support**: Optional tooltips for better UX
- **Data Attributes**: Support for custom data attributes

## Usage

### Basic Usage

```javascript
import { createHotbarButton } from './hotbar-button.js';

const button = createHotbarButton({
    icon: '⚔️',
    label: 'Attack',
    onClick: (e, button) => {
        console.log('Button clicked!');
    }
});

document.body.appendChild(button.render());
```

### With Preset Configuration

```javascript
import { createHotbarButtonWithPreset } from './hotbar-button.js';

// Create a skill button with green theme
const skillButton = createHotbarButtonWithPreset('skill', {
    label: 'Perception',
    onClick: () => console.log('Perception check')
});

// Create a spell button with purple theme
const spellButton = createHotbarButtonWithPreset('spell', {
    label: 'Fireball',
    onClick: () => console.log('Cast fireball')
});
```

### With Badge

```javascript
const buttonWithBadge = createHotbarButton({
    icon: '🎒',
    label: 'Inventory',
    badge: {
        text: '3',
        color: '#fff',
        backgroundColor: '#ff4444'
    },
    onClick: () => console.log('Open inventory')
});
```

### Custom Theme

```javascript
const customButton = createHotbarButton({
    icon: '🌟',
    label: 'Special',
    theme: 'custom',
    customBackground: 'rgba(255, 215, 0, 0.9)',
    customBorder: '#ffd700',
    customHoverBackground: '#ffd700',
    customHoverColor: '#222',
    customTextColor: '#fff'
});
```

## Configuration Options

### Basic Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | string | auto-generated | Unique identifier for the button |
| `icon` | string | '⚡' | Icon to display (emoji or text) |
| `label` | string | '' | Button label text |
| `onClick` | function | null | Click event handler |
| `theme` | string | 'blue' | Color theme |
| `size` | string | 'medium' | Button size |
| `disabled` | boolean | false | Whether button is disabled |
| `tooltip` | string | null | Tooltip text |

### Theme Options

- `blue` - Blue theme with cyan accents
- `red` - Red theme with red accents
- `green` - Green theme with green accents
- `orange` - Orange theme with orange accents
- `purple` - Purple theme with purple accents
- `custom` - Custom colors (requires custom color properties)

### Size Options

- `small` - 48x48px
- `medium` - 64x64px
- `large` - 80x80px

### Badge Configuration

```javascript
badge: {
    text: '1',                    // Badge text
    color: '#fff',               // Text color
    backgroundColor: '#ff4444'   // Background color
}
```

### Custom Theme Properties

When using `theme: 'custom'`, you can specify:

- `customBackground` - Button background color
- `customBorder` - Button border color
- `customHoverBackground` - Hover background color
- `customHoverColor` - Hover text color
- `customTextColor` - Normal text color

## Preset Configurations

### Available Presets

- `action` - Blue theme, medium size, ⚔️ icon
- `skill` - Green theme, medium size, 🎯 icon
- `spell` - Purple theme, medium size, ✨ icon
- `item` - Orange theme, medium size, 🎒 icon

## API Methods

### Instance Methods

#### `render()`
Renders the button and returns the DOM element.

#### `update(newConfig)`
Updates the button configuration and re-renders.

```javascript
button.update({
    label: 'New Label',
    theme: 'red'
});
```

#### `updateBadge(badge)`
Updates or removes the badge.

```javascript
// Add/update badge
button.updateBadge({ text: '5', color: '#fff', backgroundColor: '#ff4444' });

// Remove badge
button.updateBadge(null);
```

#### `setDisabled(disabled)`
Enables or disables the button.

```javascript
button.setDisabled(true);  // Disable
button.setDisabled(false); // Enable
```

#### `updateIcon(icon)`
Updates the button icon.

```javascript
button.updateIcon('🛡️');
```

#### `updateLabel(label)`
Updates the button label.

```javascript
button.updateLabel('Defend');
```

#### `show()`
Shows the button (sets display to flex).

#### `hide()`
Hides the button (sets display to none).

#### `destroy()`
Removes the button from DOM and cleans up.

## Styling

The component uses inline styles for maximum compatibility. You can override styles using the `customStyles` property:

```javascript
const button = createHotbarButton({
    icon: '⚔️',
    label: 'Attack',
    customStyles: 'margin: 5px; border-radius: 12px;'
});
```

## Event Handling

The `onClick` handler receives the event and button instance:

```javascript
const button = createHotbarButton({
    icon: '⚔️',
    label: 'Attack',
    onClick: (event, buttonInstance) => {
        console.log('Button clicked:', event);
        console.log('Button instance:', buttonInstance);
        
        // You can update the button from within the handler
        buttonInstance.updateBadge({ text: '2', backgroundColor: '#ff4444' });
    }
});
```

## Examples

### Complete Hotbar Example

```javascript
import { createHotbarButtonWithPreset } from './hotbar-button.js';

// Create hotbar container
const hotbar = document.createElement('div');
hotbar.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 1000;
`;

// Create buttons
const buttons = [
    createHotbarButtonWithPreset('action', {
        label: 'Attack',
        onClick: () => console.log('Attack action')
    }),
    createHotbarButtonWithPreset('skill', {
        label: 'Perception',
        badge: { text: '1', backgroundColor: '#4caf50' },
        onClick: () => console.log('Perception check')
    }),
    createHotbarButtonWithPreset('spell', {
        label: 'Fireball',
        onClick: () => console.log('Cast fireball')
    }),
    createHotbarButtonWithPreset('item', {
        label: 'Potion',
        badge: { text: '3', backgroundColor: '#ff9800' },
        onClick: () => console.log('Use potion')
    })
];

// Add buttons to hotbar
buttons.forEach(button => {
    hotbar.appendChild(button.render());
});

// Add hotbar to page
document.body.appendChild(hotbar);
```

This component provides a flexible and reusable solution for creating consistent hotbar buttons with rich customization options. 