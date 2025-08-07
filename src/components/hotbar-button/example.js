import { createHotbarButton, createHotbarButtonWithPreset } from './hotbar-button.js';

/**
 * Example usage of the HotbarButton component
 * This file demonstrates various ways to create and use hotbar buttons
 */

// Example 1: Basic button
export function createBasicButton() {
  return createHotbarButton({
    icon: '⚔️',
    label: 'Attack',
    onClick: () => {
      console.log('Attack button clicked!');
    }
  });
}

// Example 2: Button with badge
export function createButtonWithBadge() {
  return createHotbarButton({
    icon: '🎒',
    label: 'Inventory',
    badge: {
      text: '3',
      color: '#fff',
      backgroundColor: '#ff4444'
    },
    onClick: (e, button) => {
      console.log('Inventory button clicked!');
      // Update badge count
      button.updateBadge({ text: '2', backgroundColor: '#ff4444' });
    }
  });
}

// Example 3: Using preset configurations
export function createPresetButtons() {
  return [
    // Action button (blue theme)
    createHotbarButtonWithPreset('action', {
      label: 'Attack',
      onClick: () => console.log('Action: Attack')
    }),

    // Skill button (green theme)
    createHotbarButtonWithPreset('skill', {
      label: 'Perception',
      badge: { text: '1', backgroundColor: '#4caf50' },
      onClick: () => console.log('Skill: Perception')
    }),

    // Spell button (purple theme)
    createHotbarButtonWithPreset('spell', {
      label: 'Fireball',
      onClick: () => console.log('Spell: Fireball')
    }),

    // Item button (orange theme)
    createHotbarButtonWithPreset('item', {
      label: 'Potion',
      badge: { text: '5', backgroundColor: '#ff9800' },
      onClick: () => console.log('Item: Potion')
    })
  ];
}

// Example 4: Custom themed button
export function createCustomButton() {
  return createHotbarButton({
    icon: '🌟',
    label: 'Special',
    theme: 'custom',
    customBackground: 'rgba(255, 215, 0, 0.9)',
    customBorder: '#ffd700',
    customHoverBackground: '#ffd700',
    customHoverColor: '#222',
    customTextColor: '#fff',
    tooltip: 'Special ability',
    onClick: () => {
      console.log('Special button clicked!');
    }
  });
}

// Example 5: Different sizes
export function createSizeExamples() {
  return [
    createHotbarButton({
      icon: '⚔️',
      label: 'Small',
      size: 'small',
      onClick: () => console.log('Small button')
    }),
    createHotbarButton({
      icon: '🛡️',
      label: 'Medium',
      size: 'medium',
      onClick: () => console.log('Medium button')
    }),
    createHotbarButton({
      icon: '⚡',
      label: 'Large',
      size: 'large',
      onClick: () => console.log('Large button')
    })
  ];
}

// Example 6: Disabled button
export function createDisabledButton() {
  return createHotbarButton({
    icon: '🔒',
    label: 'Locked',
    disabled: true,
    tooltip: 'This ability is locked',
    onClick: () => {
      console.log('This should not execute');
    }
  });
}

// Example 7: Complete hotbar setup
export function createCompleteHotbar() {
  const hotbar = document.createElement('div');
  hotbar.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
    `;

  // Create various buttons
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
    }),
    createCustomButton()
  ];

  // Add buttons to hotbar
  buttons.forEach(button => {
    hotbar.appendChild(button.render());
  });

  return hotbar;
}

// Example 8: Dynamic button updates
export function createDynamicButton() {
  const button = createHotbarButton({
    icon: '⚔️',
    label: 'Attack',
    badge: { text: '3', backgroundColor: '#ff4444' },
    onClick: (e, buttonInstance) => {
      console.log('Attack executed!');

      // Dynamically update the button
      const currentBadge = buttonInstance.config.badge;
      const newCount = Math.max(0, parseInt(currentBadge.text) - 1);

      if (newCount === 0) {
        buttonInstance.updateBadge(null);
        buttonInstance.setDisabled(true);
        buttonInstance.updateLabel('No Attacks');
      } else {
        buttonInstance.updateBadge({
          text: newCount.toString(),
          backgroundColor: '#ff4444'
        });
      }
    }
  });

  return button;
}

// Example 9: Button with data attributes
export function createButtonWithData() {
  return createHotbarButton({
    icon: '🎯',
    label: 'Target',
    dataAttributes: {
      'action-type': 'target',
      'range': '30ft',
      'damage': '1d6'
    },
    onClick: (e, button) => {
      const actionType = button.element.getAttribute('data-action-type');
      const range = button.element.getAttribute('data-range');
      const damage = button.element.getAttribute('data-damage');
      console.log(`Target action: ${actionType}, Range: ${range}, Damage: ${damage}`);
    }
  });
}

// Example 10: Button with custom styles
export function createCustomStyledButton() {
  return createHotbarButton({
    icon: '✨',
    label: 'Magic',
    customStyles: `
            margin: 5px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            background: linear-gradient(135deg, rgba(138,43,226,0.9), rgba(75,0,130,0.9));
        `,
    onClick: () => {
      console.log('Magic button clicked!');
    }
  });
}

// Export all examples for easy access
export const examples = {
  basic: createBasicButton,
  withBadge: createButtonWithBadge,
  presets: createPresetButtons,
  custom: createCustomButton,
  sizes: createSizeExamples,
  disabled: createDisabledButton,
  completeHotbar: createCompleteHotbar,
  dynamic: createDynamicButton,
  withData: createButtonWithData,
  customStyled: createCustomStyledButton
}; 