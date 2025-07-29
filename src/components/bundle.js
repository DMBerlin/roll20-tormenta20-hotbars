// === COMPONENTS BUNDLE ===
// This file contains bundled components for use in main.js
// All components are self-contained and don't require external dependencies

(function() {
    'use strict';

    // Handlebars-like template engine (simplified for our needs)
    function compileTemplate(template) {
        return function(context) {
            let result = template;
            
            // Replace {{variable}} with context values
            result = result.replace(/\{\{([^}]+)\}\}/g, function(match, key) {
                const trimmedKey = key.trim();
                return context[trimmedKey] || '';
            });
            
            // Handle {{#if condition}}...{{/if}}
            result = result.replace(/\{\{#if\s+([^}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g, function(match, condition, content) {
                const trimmedCondition = condition.trim();
                return context[trimmedCondition] ? content : '';
            });
            
            return result;
        };
    }

    // Close Button Template
    const closeButtonTemplate = compileTemplate(`
        <button
            class="roll20-close-button"
            id="{{id}}"
            title="{{title}}"
            style="
                background: none;
                border: none;
                color: {{color}};
                font-size: {{fontSize}};
                cursor: pointer;
                padding: {{padding}};
                width: {{width}};
                height: {{height}};
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: {{borderRadius}};
                transition: background-color 0.2s;
                flex-shrink: 0;
                {{customStyles}}
            "
        >
            {{text}}
        </button>
    `);

    /**
     * Close Button Component
     * Creates a reusable close button with customizable properties
     */
    function CloseButton(config = {}) {
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
            hoverColor: config.hoverColor || 'rgba(255, 255, 255, 0.1)'
        };

        this.element = null;
    }

    CloseButton.prototype.render = function() {
        // Create element from template
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = closeButtonTemplate(this.config);
        this.element = tempDiv.firstElementChild;

        // Add event listeners
        this._addEventListeners();

        return this.element;
    };

    CloseButton.prototype._addEventListeners = function() {
        if (!this.element) return;

        // Click handler
        if (this.config.onClick) {
            this.element.addEventListener('click', (e) => {
                this.config.onClick(e, this);
            });
        }

        // Hover effects
        this.element.addEventListener('mouseover', () => {
            this.element.style.backgroundColor = this.config.hoverColor;
        });

        this.element.addEventListener('mouseout', () => {
            this.element.style.backgroundColor = 'transparent';
        });
    };

    CloseButton.prototype.update = function(newConfig) {
        this.config = { ...this.config, ...newConfig };
        if (this.element) {
            const newElement = this.render();
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
        }
    };

    CloseButton.prototype.show = function() {
        if (this.element) {
            this.element.style.display = 'flex';
        }
    };

    CloseButton.prototype.hide = function() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    };

    CloseButton.prototype.destroy = function() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
    };

    /**
     * Factory function to create a close button quickly
     * @param {Object} config - Configuration options
     * @returns {CloseButton} Close button instance
     */
    function createCloseButton(config = {}) {
        return new CloseButton(config);
    }

    // Preset configurations
    const CloseButtonPresets = {
        default: {
            text: '×',
            color: '#ecf0f1',
            fontSize: '24px',
            width: '40px',
            height: '40px'
        },
        small: {
            text: '×',
            color: '#ecf0f1',
            fontSize: '18px',
            width: '30px',
            height: '30px',
            padding: '6px'
        },
        large: {
            text: '×',
            color: '#ecf0f1',
            fontSize: '32px',
            width: '50px',
            height: '50px',
            padding: '10px'
        },
        danger: {
            text: '×',
            color: '#e74c3c',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            hoverColor: 'rgba(231, 76, 60, 0.2)'
        },
        primary: {
            text: '×',
            color: '#3498db',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            hoverColor: 'rgba(52, 152, 219, 0.2)'
        }
    };

    /**
     * Factory function to create a close button with preset configuration
     * @param {string} preset - Preset name ('default', 'small', 'large', 'danger', 'primary')
     * @param {Object} config - Additional configuration options
     * @returns {CloseButton} Close button instance
     */
    function createCloseButtonWithPreset(preset = 'default', config = {}) {
        const presetConfig = CloseButtonPresets[preset] || CloseButtonPresets.default;
        return new CloseButton({ ...presetConfig, ...config });
    }

    // Make components available globally
    window.Roll20Components = {
        CloseButton: CloseButton,
        createCloseButton: createCloseButton,
        createCloseButtonWithPreset: createCloseButtonWithPreset,
        CloseButtonPresets: CloseButtonPresets
    };

})(); 