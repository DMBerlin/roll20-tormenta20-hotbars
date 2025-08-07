import Handlebars from 'handlebars';
import hotbarButtonTemplate from './hotbar-button.hbs';

/**
 * HotbarButton Component
 * Creates a reusable button component for the hotbar with customizable appearance
 */
export class HotbarButton {
  constructor(config = {}) {
    this.config = {
      // Default values
      id: config.id || `hotbar-button-${Date.now()}`,
      icon: config.icon || '⚡', // Icon (emoji or text)
      label: config.label || '', // Button label
      onClick: config.onClick || null, // Click handler
      theme: config.theme || 'blue', // 'blue', 'red', 'green', 'orange', 'purple', 'custom'
      badge: config.badge || null, // { text: '1', color: '#4caf50', backgroundColor: '#fff' }
      size: config.size || 'medium', // 'small', 'medium', 'large'
      disabled: config.disabled || false,
      customStyles: config.customStyles || '',
      dataAttributes: config.dataAttributes || {}, // Additional data attributes
      tooltip: config.tooltip || null,
      ...config
    };

    this.element = null;
    this._setupTheme();
    this._setupSize();
  }

  /**
   * Sets up theme-specific colors
   * @private
   */
  _setupTheme() {
    const themes = {
      blue: {
        background: 'rgba(60,80,120,0.95)',
        border: '#6ec6ff',
        hoverBackground: '#6ec6ff',
        hoverColor: '#222',
        textColor: '#fff'
      },
      red: {
        background: 'rgba(120,60,60,0.95)',
        border: '#ff6e6e',
        hoverBackground: '#ff6e6e',
        hoverColor: '#222',
        textColor: '#fff'
      },
      green: {
        background: 'rgba(60,120,60,0.95)',
        border: '#4caf50',
        hoverBackground: '#4caf50',
        hoverColor: '#222',
        textColor: '#fff'
      },
      orange: {
        background: 'rgba(120,80,40,0.95)',
        border: '#ffb86c',
        hoverBackground: '#ffb86c',
        hoverColor: '#222',
        textColor: '#fff'
      },
      purple: {
        background: 'rgba(80,60,120,0.95)',
        border: '#9c27b0',
        hoverBackground: '#9c27b0',
        hoverColor: '#fff',
        textColor: '#fff'
      },
      custom: {
        background: this.config.customBackground || 'rgba(60,80,120,0.95)',
        border: this.config.customBorder || '#6ec6ff',
        hoverBackground: this.config.customHoverBackground || '#6ec6ff',
        hoverColor: this.config.customHoverColor || '#222',
        textColor: this.config.customTextColor || '#fff'
      }
    };

    const currentTheme = themes[this.config.theme] || themes.blue;
    this.config.background = currentTheme.background;
    this.config.border = currentTheme.border;
    this.config.hoverBackground = currentTheme.hoverBackground;
    this.config.hoverColor = currentTheme.hoverColor;
    this.config.textColor = currentTheme.textColor;
  }

  /**
   * Sets up size-specific dimensions
   * @private
   */
  _setupSize() {
    const sizes = {
      small: {
        width: '48px',
        height: '48px',
        fontSize: '11px',
        iconSize: '16px'
      },
      medium: {
        width: '64px',
        height: '64px',
        fontSize: '13px',
        iconSize: '20px'
      },
      large: {
        width: '80px',
        height: '80px',
        fontSize: '15px',
        iconSize: '24px'
      }
    };

    const currentSize = sizes[this.config.size] || sizes.medium;
    this.config.width = currentSize.width;
    this.config.height = currentSize.height;
    this.config.fontSize = currentSize.fontSize;
    this.config.iconSize = currentSize.iconSize;
  }

  /**
   * Updates the badge on the button
   * @param {Object|null} badge - Badge configuration or null to remove
   */
  updateBadge(badge) {
    this.config.badge = badge;

    if (this.element) {
      const existingBadge = this.element.querySelector('.hotbar-button-badge');
      if (existingBadge) {
        existingBadge.remove();
      }

      if (badge) {
        const newBadge = this._createBadgeElement(badge);
        this.element.appendChild(newBadge);
      }
    }
  }

  /**
   * Creates a badge element
   * @param {Object} badge - Badge configuration
   * @returns {HTMLElement} Badge element
   * @private
   */
  _createBadgeElement(badge) {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'hotbar-button-badge';
    badgeEl.textContent = badge.text;
    badgeEl.style.position = 'absolute';
    badgeEl.style.top = '-5px';
    badgeEl.style.right = '-5px';
    badgeEl.style.background = badge.backgroundColor || '#ff4444';
    badgeEl.style.color = badge.color || '#fff';
    badgeEl.style.borderRadius = '50%';
    badgeEl.style.width = '20px';
    badgeEl.style.height = '20px';
    badgeEl.style.fontSize = '10px';
    badgeEl.style.fontWeight = 'bold';
    badgeEl.style.display = 'flex';
    badgeEl.style.alignItems = 'center';
    badgeEl.style.justifyContent = 'center';
    badgeEl.style.border = '2px solid #23243a';
    badgeEl.style.zIndex = '10';

    return badgeEl;
  }

  /**
   * Updates the button's disabled state
   * @param {boolean} disabled - Whether the button should be disabled
   */
  setDisabled(disabled) {
    this.config.disabled = disabled;

    if (this.element) {
      this.element.disabled = disabled;
      if (disabled) {
        this.element.style.opacity = '0.5';
        this.element.style.cursor = 'not-allowed';
      } else {
        this.element.style.opacity = '1';
        this.element.style.cursor = 'pointer';
      }
    }
  }

  /**
   * Updates the button's icon
   * @param {string} icon - New icon
   */
  updateIcon(icon) {
    this.config.icon = icon;

    if (this.element) {
      const iconEl = this.element.querySelector('.hotbar-button-icon');
      if (iconEl) {
        iconEl.textContent = icon;
      }
    }
  }

  /**
   * Updates the button's label
   * @param {string} label - New label
   */
  updateLabel(label) {
    this.config.label = label;

    if (this.element) {
      const labelEl = this.element.querySelector('.hotbar-button-label');
      if (labelEl) {
        labelEl.textContent = label;
      }
    }
  }

  /**
   * Renders the hotbar button component
   * @returns {HTMLElement} The rendered button element
   */
  render() {
    // Compile the template
    const template = Handlebars.compile(hotbarButtonTemplate);

    // Generate HTML
    const html = template(this.config);

    // Create temporary container to parse HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    // Get the button element
    this.element = tempContainer.firstElementChild;

    // Add event listeners
    this._addEventListeners();

    // Add badge if specified
    if (this.config.badge) {
      const badgeEl = this._createBadgeElement(this.config.badge);
      this.element.appendChild(badgeEl);
    }

    // Set disabled state if needed
    if (this.config.disabled) {
      this.setDisabled(true);
    }

    return this.element;
  }

  /**
   * Adds event listeners to the button
   * @private
   */
  _addEventListeners() {
    if (!this.element) return;

    // Click handler
    if (this.config.onClick && typeof this.config.onClick === 'function') {
      this.element.addEventListener('click', (e) => {
        if (!this.config.disabled) {
          this.config.onClick(e, this);
        }
      });
    }

    // Hover effects
    this.element.addEventListener('mouseenter', () => {
      if (!this.config.disabled) {
        this.element.style.background = this.config.hoverBackground;
        this.element.style.color = this.config.hoverColor;
        this.element.style.transform = 'scale(1.08)';
      }
    });

    this.element.addEventListener('mouseleave', () => {
      if (!this.config.disabled) {
        this.element.style.background = this.config.background;
        this.element.style.color = this.config.textColor;
        this.element.style.transform = 'scale(1)';
      }
    });
  }

  /**
   * Updates the button configuration
   * @param {Object} newConfig - New configuration
   */
  update(newConfig) {
    this.config = { ...this.config, ...newConfig };

    if (this.element) {
      // Re-render the button with new config
      const parent = this.element.parentNode;
      if (parent) {
        parent.replaceChild(this.render(), this.element);
      }
    }
  }

  /**
   * Shows the button
   */
  show() {
    if (this.element) {
      this.element.style.display = 'flex';
    }
  }

  /**
   * Hides the button
   */
  hide() {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }

  /**
   * Destroys the button and removes it from DOM
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }
}

/**
 * Factory function to create a hotbar button
 * @param {Object} config - Button configuration
 * @returns {HotbarButton} Hotbar button instance
 */
export function createHotbarButton(config = {}) {
  return new HotbarButton(config);
}

/**
 * Factory function to create a hotbar button with preset configurations
 * @param {string} preset - Preset name ('action', 'skill', 'spell', 'item')
 * @param {Object} additionalConfig - Additional configuration
 * @returns {HotbarButton} Hotbar button instance
 */
export function createHotbarButtonWithPreset(preset = 'action', additionalConfig = {}) {
  const presets = {
    action: {
      theme: 'blue',
      size: 'medium',
      icon: '⚔️'
    },
    skill: {
      theme: 'green',
      size: 'medium',
      icon: '🎯'
    },
    spell: {
      theme: 'purple',
      size: 'medium',
      icon: '✨'
    },
    item: {
      theme: 'orange',
      size: 'medium',
      icon: '🎒'
    }
  };

  const presetConfig = presets[preset] || presets.action;
  return new HotbarButton({ ...presetConfig, ...additionalConfig });
} 