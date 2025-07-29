import Handlebars from 'handlebars';
import closeButtonTemplate from './close-button.hbs';

/**
 * Close Button Component
 * Creates a reusable close button with customizable properties
 */
export class CloseButton {
    constructor(config = {}) {
        this.config = {
            // Default values
            id: config.id || `close-btn-${Date.now()}`,
            text: config.text || '×',
            title: config.title || 'Fechar',
            color: config.color || '#ecf0f1',
            fontSize: config.fontSize || '24px',
            padding: config.padding || '8px',
            width: config.width || '40px',
            height: config.height || '40px',
            borderRadius: config.borderRadius || '4px',
            customStyles: config.customStyles || '',
            onClick: config.onClick || null,
            hoverColor: config.hoverColor || 'rgba(255, 255, 255, 0.1)',
            ...config
        };
        
        this.element = null;
    }

    /**
     * Renders the close button component
     * @returns {HTMLElement} The rendered button element
     */
    render() {
        // Compile the template
        const template = Handlebars.compile(closeButtonTemplate);
        
        // Generate HTML
        const html = template(this.config);
        
        // Create temporary container to parse HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;
        
        // Get the button element
        this.element = tempContainer.firstElementChild;
        
        // Add event listeners
        this._addEventListeners();
        
        return this.element;
    }

    /**
     * Adds event listeners to the button
     * @private
     */
    _addEventListeners() {
        if (!this.element) return;

        // Hover effects
        this.element.addEventListener('mouseover', () => {
            this.element.style.backgroundColor = this.config.hoverColor;
        });

        this.element.addEventListener('mouseout', () => {
            this.element.style.backgroundColor = 'transparent';
        });

        // Click handler
        if (this.config.onClick) {
            this.element.addEventListener('click', (e) => {
                e.preventDefault();
                this.config.onClick(e, this);
            });
        }
    }

    /**
     * Updates the component configuration and re-renders
     * @param {Object} newConfig - New configuration options
     */
    update(newConfig) {
        this.config = { ...this.config, ...newConfig };
        
        if (this.element && this.element.parentNode) {
            const newElement = this.render();
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
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
     * Destroys the component and removes event listeners
     */
    destroy() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }
}

/**
 * Factory function to create a close button quickly
 * @param {Object} config - Configuration options
 * @returns {CloseButton} Close button instance
 */
export function createCloseButton(config = {}) {
    return new CloseButton(config);
}

/**
 * Predefined close button configurations
 */
export const CloseButtonPresets = {
    // Default close button
    default: {
        text: '×',
        color: '#ecf0f1',
        fontSize: '24px'
    },
    
    // Small close button
    small: {
        text: '×',
        color: '#ecf0f1',
        fontSize: '18px',
        width: '32px',
        height: '32px',
        padding: '6px'
    },
    
    // Large close button
    large: {
        text: '×',
        color: '#ecf0f1',
        fontSize: '32px',
        width: '48px',
        height: '48px',
        padding: '12px'
    },
    
    // Red close button (for destructive actions)
    danger: {
        text: '×',
        color: '#ff6e6e',
        fontSize: '24px',
        hoverColor: 'rgba(255, 110, 110, 0.2)'
    },
    
    // Blue close button (for primary actions)
    primary: {
        text: '×',
        color: '#6ec6ff',
        fontSize: '24px',
        hoverColor: 'rgba(110, 198, 255, 0.2)'
    }
};

/**
 * Creates a close button with a preset configuration
 * @param {string} preset - Preset name
 * @param {Object} additionalConfig - Additional configuration options
 * @returns {CloseButton} Close button instance
 */
export function createCloseButtonWithPreset(preset = 'default', additionalConfig = {}) {
    const presetConfig = CloseButtonPresets[preset] || CloseButtonPresets.default;
    return new CloseButton({ ...presetConfig, ...additionalConfig });
} 