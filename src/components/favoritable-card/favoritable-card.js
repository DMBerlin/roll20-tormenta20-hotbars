import Handlebars from 'handlebars';
import favoritableCardTemplate from './favoritable-card.hbs';

/**
 * FavoritableCard Component
 * Creates a reusable card component for items that can be favorited
 */
export class FavoritableCard {
    constructor(config = {}) {
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
            }
        };

        const currentTheme = themes[this.config.theme] || themes.orange;
        this.config.borderColor = currentTheme.borderColor;
        this.config.titleColor = currentTheme.titleColor;
        this.config.hoverBorderColor = currentTheme.hoverBorderColor;
        this.config.hoverBackground = currentTheme.hoverBackground;
    }

    /**
     * Updates favorite status and icon
     * @param {boolean} isFavorite - Whether the item is now favorited
     */
    updateFavoriteStatus(isFavorite) {
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
    }

    /**
     * Renders the favoritable card component
     * @returns {HTMLElement} The rendered card element
     */
    render() {
        // Set favorite icon based on current status
        this.config.favoriteIcon = this.config.isFavorite ? '★' : '☆';
        this.config.favoriteIconColor = this.config.isFavorite ? this.config.titleColor : '#666';
        
        // Compile the template
        const template = Handlebars.compile(favoritableCardTemplate);
        
        // Generate HTML
        const html = template(this.config);
        
        // Create temporary container to parse HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;
        
        // Get the card element
        this.element = tempContainer.firstElementChild;
        
        // Add event listeners
        this._addEventListeners();
        
        return this.element;
    }

    /**
     * Adds event listeners to the card
     * @private
     */
    _addEventListeners() {
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
    }

    /**
     * Updates the component configuration and re-renders
     * @param {Object} newConfig - New configuration options
     */
    update(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this._setupTheme();
        
        if (this.element && this.element.parentNode) {
            const newElement = this.render();
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
        }
    }

    /**
     * Shows the card
     */
    show() {
        if (this.element) {
            this.element.style.display = 'flex';
        }
    }

    /**
     * Hides the card
     */
    hide() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    }

    /**
     * Destroys the component and removes it from DOM
     */
    destroy() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
    }
}

/**
 * Factory function to create a FavoritableCard component
 * @param {Object} config - Configuration options
 * @returns {FavoritableCard} The created component instance
 */
export function createFavoritableCard(config = {}) {
    return new FavoritableCard(config);
}

/**
 * Factory function to create a FavoritableCard with preset configurations
 * @param {string} preset - Preset type ('food', 'drink', 'condition')
 * @param {Object} additionalConfig - Additional configuration options
 * @returns {FavoritableCard} The created component instance
 */
export function createFavoritableCardWithPreset(preset = 'default', additionalConfig = {}) {
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

/**
 * Preset configurations for common use cases
 */
export const FavoritableCardPresets = {
    FOOD: 'food',
    DRINK: 'drink',
    CONDITION: 'condition'
}; 