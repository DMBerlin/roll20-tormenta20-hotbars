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

    // FavoritableCard Component
    function FavoritableCard(config = {}) {
        this.config = {
            // Default values
            id: config.id || `favoritable-card-${Date.now()}`,
            title: config.title || '',
            summary: config.summary || '',
            effectText: config.effectText || '',
            showFavoriteButton: config.showFavoriteButton !== false, // Default true
            isFavorite: config.isFavorite || false,
            theme: config.theme || 'orange', // 'orange', 'blue', 'red'
            customStyles: config.customStyles || '',
            onClick: config.onClick || null,
            onFavoriteToggle: config.onFavoriteToggle || null,
            ...config
        };
        
        this.element = null;
        this._setupTheme();
    }

    FavoritableCard.prototype._setupTheme = function() {
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
            }
        };

        const currentTheme = themes[this.config.theme] || themes.orange;
        this.config.borderColor = currentTheme.borderColor;
        this.config.titleColor = currentTheme.titleColor;
        this.config.hoverBorderColor = currentTheme.hoverBorderColor;
        this.config.hoverBackground = currentTheme.hoverBackground;
    };

    FavoritableCard.prototype.updateFavoriteStatus = function(isFavorite) {
        this.config.isFavorite = isFavorite;
        this.config.favoriteIcon = isFavorite ? '★' : '☆';
        this.config.favoriteIconColor = isFavorite ? this.config.titleColor : '#666';
        
        if (this.element) {
            const favoriteBtn = this.element.querySelector('.favorite-btn');
            if (favoriteBtn) {
                favoriteBtn.innerHTML = this.config.favoriteIcon;
                favoriteBtn.style.color = this.config.favoriteIconColor;
            }
        }
    };

    FavoritableCard.prototype.render = function() {
        // Set favorite icon based on current status
        this.config.favoriteIcon = this.config.isFavorite ? '★' : '☆';
        this.config.favoriteIconColor = this.config.isFavorite ? this.config.titleColor : '#666';
        
        // Create the card element
        const card = document.createElement('div');
        card.className = 'favoritable-card';
        card.style.background = '#23243a';
        card.style.border = `1px solid ${this.config.borderColor}`;
        card.style.borderRadius = '8px';
        card.style.padding = '12px 14px';
        card.style.display = 'flex';
        card.style.justifyContent = 'space-between';
        card.style.alignItems = 'center';
        card.style.gap = '10px';
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.2s';
        card.style.cssText += this.config.customStyles;

        // Card info container
        const itemInfo = document.createElement('div');
        itemInfo.className = 'card-info';
        itemInfo.style.flex = '1';
        itemInfo.style.display = 'flex';
        itemInfo.style.flexDirection = 'column';
        itemInfo.style.gap = '4px';

        // Title
        const nome = document.createElement('div');
        nome.className = 'card-title';
        nome.textContent = this.config.title;
        nome.style.color = this.config.titleColor;
        nome.style.fontWeight = 'bold';
        nome.style.fontSize = '15px';
        itemInfo.appendChild(nome);

        // Summary (if provided)
        if (this.config.summary) {
            const resumo = document.createElement('div');
            resumo.className = 'card-summary';
            const palavras = this.config.summary.split(/\s+/);
            let resumoTexto = palavras.slice(0, 10).join(' ');
            if (palavras.length > 10) resumoTexto += '...';
            resumo.textContent = resumoTexto;
            resumo.style.color = '#bdbdbd';
            resumo.style.fontSize = '12px';
            resumo.style.fontStyle = 'italic';
            itemInfo.appendChild(resumo);
        }

        // Effect text (if provided)
        if (this.config.effectText) {
            const effectField = document.createElement('div');
            effectField.className = 'card-effect';
            effectField.textContent = this.config.effectText;
            effectField.style.color = '#6ec6ff';
            effectField.style.fontSize = '13px';
            effectField.style.fontWeight = 'bold';
            itemInfo.appendChild(effectField);
        }

        card.appendChild(itemInfo);

        // Favorite button (if enabled)
        if (this.config.showFavoriteButton) {
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = this.config.favoriteIcon;
            favoriteBtn.style.background = 'none';
            favoriteBtn.style.border = 'none';
            favoriteBtn.style.color = this.config.favoriteIconColor;
            favoriteBtn.style.fontSize = '18px';
            favoriteBtn.style.cursor = 'pointer';
            favoriteBtn.style.padding = '5px';
            favoriteBtn.style.minWidth = '30px';
            favoriteBtn.style.transition = 'all 0.2s';

            card.appendChild(favoriteBtn);
        }

        this.element = card;
        this._addEventListeners();
        
        return this.element;
    };

    FavoritableCard.prototype._addEventListeners = function() {
        if (!this.element) return;

        // Hover effects for the card
        this.element.addEventListener('mouseover', () => {
            this.element.style.background = this.config.hoverBackground;
            this.element.style.borderColor = this.config.hoverBorderColor;
        });

        this.element.addEventListener('mouseout', () => {
            this.element.style.background = '#23243a';
            this.element.style.borderColor = this.config.borderColor;
        });

        // Click handler for the card
        if (this.config.onClick) {
            this.element.addEventListener('click', (e) => {
                // Don't trigger if clicking on favorite button
                if (e.target.classList.contains('favorite-btn')) {
                    return;
                }
                this.config.onClick(e, this);
            });
        }

        // Favorite button click handler
        if (this.config.showFavoriteButton) {
            const favoriteBtn = this.element.querySelector('.favorite-btn');
            if (favoriteBtn) {
                favoriteBtn.addEventListener('mouseover', () => {
                    favoriteBtn.style.background = `rgba(255, 184, 108, 0.2)`;
                    favoriteBtn.style.color = this.config.titleColor;
                });

                favoriteBtn.addEventListener('mouseout', () => {
                    favoriteBtn.style.background = 'none';
                    favoriteBtn.style.color = this.config.favoriteIconColor;
                });

                favoriteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const newFavoriteStatus = !this.config.isFavorite;
                    this.updateFavoriteStatus(newFavoriteStatus);
                    
                    if (this.config.onFavoriteToggle) {
                        this.config.onFavoriteToggle(newFavoriteStatus, this);
                    }
                });
            }
        }
    };

    FavoritableCard.prototype.update = function(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this._setupTheme();
        
        if (this.element && this.element.parentNode) {
            const newElement = this.render();
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
        }
    };

    FavoritableCard.prototype.show = function() {
        if (this.element) {
            this.element.style.display = 'flex';
        }
    };

    FavoritableCard.prototype.hide = function() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    };

    FavoritableCard.prototype.destroy = function() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
    };

    function createFavoritableCard(config = {}) {
        return new FavoritableCard(config);
    }

    function createFavoritableCardWithPreset(preset = 'default', additionalConfig = {}) {
        const presets = {
            food: {
                theme: 'orange',
                showFavoriteButton: true,
                effectText: additionalConfig.bonus || ''
            },
            drink: {
                theme: 'orange',
                showFavoriteButton: true,
                effectText: additionalConfig.efeito || ''
            },
            condition: {
                theme: 'orange',
                showFavoriteButton: false,
                effectText: additionalConfig.efeitos || ''
            }
        };

        const presetConfig = presets[preset] || presets.food;
        const finalConfig = { ...presetConfig, ...additionalConfig };

        return new FavoritableCard(finalConfig);
    }

    const FavoritableCardPresets = {
        FOOD: 'food',
        DRINK: 'drink',
        CONDITION: 'condition'
    };

    // Make components available globally
    window.Roll20Components = {
        CloseButton: CloseButton,
        createCloseButton: createCloseButton,
        createCloseButtonWithPreset: createCloseButtonWithPreset,
        CloseButtonPresets: CloseButtonPresets,
        FavoritableCard: FavoritableCard,
        createFavoritableCard: createFavoritableCard,
        createFavoritableCardWithPreset: createFavoritableCardWithPreset,
        FavoritableCardPresets: FavoritableCardPresets
    };

})(); 