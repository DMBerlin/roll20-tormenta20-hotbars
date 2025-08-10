import Handlebars from 'handlebars';
import spellListItemTemplate from './spell-list-item.hbs';

/**
 * SpellListItem Component
 * Creates a reusable list item component for spells in the grimoire
 */
export class SpellListItem {
  constructor(config = {}) {
    this.config = {
      // Default values
      id: config.id || `spell-list-item-${Date.now()}`,
      title: config.title || '',
      description: config.description || '',
      img: config.img || null,
      escola: config.escola || '',
      execucao: config.execucao || '',
      circulo: config.circulo || '',
      isSelected: config.isSelected || false,
      theme: config.theme || 'orange', // 'orange', 'blue', 'red', 'purple', 'green'
      customStyles: config.customStyles || '',
      onClick: config.onClick || null,
      onSelectionToggle: config.onSelectionToggle || null,
      ...config
    };

    this.element = null;
    this._setupTheme();
    this._setupColors();
  }

  /**
   * Sets up theme-specific colors
   * @private
   */
  _setupTheme() {
    const themes = {
      orange: {
        borderColor: '#ffb86c',
        titleColor: '#ffb86c',
        hoverBorderColor: '#ffc97a',
        hoverBackground: '#2d2e4a'
      },
      blue: {
        borderColor: '#6ec6ff',
        titleColor: '#6ec6ff',
        hoverBorderColor: '#7dd3ff',
        hoverBackground: '#2d2e4a'
      },
      red: {
        borderColor: '#ff6e6e',
        titleColor: '#ff6e6e',
        hoverBorderColor: '#ff7a7a',
        hoverBackground: '#2d2e4a'
      },
      purple: {
        borderColor: '#bd93f9',
        titleColor: '#bd93f9',
        hoverBorderColor: '#c9a3ff',
        hoverBackground: '#2d2e4a'
      },
      green: {
        borderColor: '#50fa7b',
        titleColor: '#50fa7b',
        hoverBorderColor: '#5aff8a',
        hoverBackground: '#2d2e4a'
      }
    };

    const currentTheme = themes[this.config.theme] || themes.orange;
    this.config.borderColor = currentTheme.borderColor;
    this.config.titleColor = currentTheme.titleColor;
    this.config.hoverBorderColor = currentTheme.hoverBorderColor;
    this.config.hoverBackground = currentTheme.hoverBackground;
  }

  /**
   * Sets up colors for chips based on spell properties
   * @private
   */
  _setupColors() {
    // Cores para escolas de magia
    const escolaColors = {
      'abj': '#ff6e6e', // Vermelho para Abjuração
      'adv': '#6ec6ff', // Azul para Adivinhação
      'con': '#50fa7b', // Verde para Convocação
      'enc': '#bd93f9', // Roxo para Encantamento
      'evo': '#ffb86c', // Laranja para Evocação
      'ilu': '#ff79c6', // Rosa para Ilusão
      'nec': '#8be9fd', // Ciano para Necromancia
      'tra': '#f1fa8c'  // Amarelo para Transmutação
    };

    // Cores para tipos de execução
    const execucaoColors = {
      'action': '#ff6e6e',      // Ação
      'bonus': '#50fa7b',       // Ação bônus
      'reacao': '#bd93f9',      // Reação
      'free': '#f1fa8c',        // Livre
      'ritual': '#8be9fd'       // Ritual
    };

    // Cores para círculos
    const circuloColors = {
      '1': '#50fa7b',   // Verde para 1º círculo
      '2': '#6ec6ff',   // Azul para 2º círculo
      '3': '#bd93f9',   // Roxo para 3º círculo
      '4': '#ffb86c',   // Laranja para 4º círculo
      '5': '#ff6e6e'    // Vermelho para 5º círculo
    };

    this.config.escolaColor = escolaColors[this.config.escola.toLowerCase()] || '#666';
    this.config.execucaoColor = execucaoColors[this.config.execucao.toLowerCase()] || '#666';
    this.config.circuloColor = circuloColors[this.config.circulo] || '#666';
  }

  /**
   * Updates selection status
   * @param {boolean} isSelected - Whether the spell is now selected
   */
  updateSelectionStatus(isSelected) {
    this.config.isSelected = isSelected;

    if (this.element) {
      const checkbox = this.element.querySelector('.spell-checkbox');
      if (checkbox) {
        checkbox.style.background = isSelected ? '#2d2e4a' : 'transparent';

        const checkmark = checkbox.querySelector('div');
        if (isSelected && !checkmark) {
          const newCheckmark = document.createElement('div');
          newCheckmark.style.cssText = `
                        width: 12px;
                        height: 12px;
                        background: ${this.config.titleColor};
                        border-radius: 2px;
                    `;
          checkbox.appendChild(newCheckmark);
        } else if (!isSelected && checkmark) {
          checkmark.remove();
        }
      }
    }
  }

  /**
   * Renders the spell list item component
   * @returns {HTMLElement} The rendered list item element
   */
  render() {
    // Compile the template
    const template = Handlebars.compile(spellListItemTemplate);

    // Generate HTML
    const html = template(this.config);

    // Create temporary container to parse HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = html;

    // Get the list item element
    this.element = tempContainer.firstElementChild;

    // Add event listeners
    this._addEventListeners();

    return this.element;
  }

  /**
   * Adds event listeners to the component
   * @private
   */
  _addEventListeners() {
    if (!this.element) return;

    // Click event for the entire item
    this.element.addEventListener('click', (e) => {
      // Don't trigger if clicking on the checkbox
      if (e.target.closest('.spell-checkbox')) {
        return;
      }

      if (this.config.onClick && typeof this.config.onClick === 'function') {
        this.config.onClick(this.config, this.element);
      }
    });

    // Click event for the checkbox
    const checkbox = this.element.querySelector('.spell-checkbox');
    if (checkbox) {
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();

        const newSelectionStatus = !this.config.isSelected;
        this.updateSelectionStatus(newSelectionStatus);

        if (this.config.onSelectionToggle && typeof this.config.onSelectionToggle === 'function') {
          this.config.onSelectionToggle(newSelectionStatus, this.config, this.element);
        }
      });
    }

    // Hover effects
    this.element.addEventListener('mouseenter', () => {
      this.element.style.borderColor = this.config.hoverBorderColor;
      this.element.style.background = this.config.hoverBackground;
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.borderColor = this.config.borderColor;
      this.element.style.background = '#23243a';
    });
  }

  /**
   * Updates the component with new configuration
   * @param {Object} newConfig - New configuration object
   */
  update(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this._setupColors();

    if (this.element) {
      // Re-render the component
      const newElement = this.render();
      if (this.element.parentNode) {
        this.element.parentNode.replaceChild(newElement, this.element);
      }
    }
  }

  /**
   * Shows the component
   */
  show() {
    if (this.element) {
      this.element.style.display = 'flex';
    }
  }

  /**
   * Hides the component
   */
  hide() {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }

  /**
   * Destroys the component and removes event listeners
   */
  destroy() {
    if (this.element) {
      // Remove event listeners
      this.element.replaceWith(this.element.cloneNode(true));
      this.element = null;
    }
  }
}

/**
 * Factory function to create a SpellListItem
 * @param {Object} config - Configuration object
 * @returns {SpellListItem} The created SpellListItem instance
 */
export function createSpellListItem(config = {}) {
  return new SpellListItem(config);
}

/**
 * Factory function to create a SpellListItem with preset configuration
 * @param {string} preset - Preset name ('default', 'compact', 'detailed')
 * @param {Object} additionalConfig - Additional configuration to merge
 * @returns {SpellListItem} The created SpellListItem instance
 */
export function createSpellListItemWithPreset(preset = 'default', additionalConfig = {}) {
  const presets = {
    default: {
      theme: 'orange',
      customStyles: ''
    },
    compact: {
      theme: 'blue',
      customStyles: 'padding: 8px 10px;'
    },
    detailed: {
      theme: 'purple',
      customStyles: 'padding: 16px 18px;'
    }
  };

  const presetConfig = presets[preset] || presets.default;
  const finalConfig = { ...presetConfig, ...additionalConfig };

  return new SpellListItem(finalConfig);
}

/**
 * Preset configurations for SpellListItem
 */
export const SpellListItemPresets = {
  DEFAULT: 'default',
  COMPACT: 'compact',
  DETAILED: 'detailed'
};
