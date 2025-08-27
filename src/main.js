// ==UserScript==
// @name         Roll20 Hotbar Extra - Caçador
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  Adiciona uma hotbar flutuante arrastável com macros extras ao Roll20 - Especializada para Caçadores
// @author       Você
// @match        https://app.roll20.net/editor/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';



    // Sistema de favoritos para skills
    const FAVORITES_KEY = 'roll20-hotbar-favorites';
    // Sistema de avatar do personagem
    const AVATAR_KEY = 'roll20-hotbar-avatar';
    // Sistema de nome do personagem
    const CHAR_NAME_KEY = 'roll20-hotbar-charname';
    // Sistema de habilidades aprendidas do Caçador
    const HUNTER_ABILITIES_KEY = 'roll20-hotbar-hunter-abilities';
    // Sistema de poderes de destino aprendidos
    const DESTINY_POWERS_KEY = 'roll20-hotbar-destiny-powers';
    // Sistema de raça selecionada
    const SELECTED_RACE_KEY = 'roll20-hotbar-selected-race';
    // Sistema de tipo de raça selecionado (para raças com subtipos)
    const SELECTED_RACE_TYPE_KEY = 'roll20-hotbar-selected-race-type';
    // Sistema de magias aprendidas
    const LEARNED_SPELLS_KEY = 'roll20-hotbar-learned-spells';

    // NOVO: Sistema de cache de imagens
    const IMAGE_CACHE_KEY = 'roll20-hotbar-image-cache';
    const IMAGE_CACHE_VERSION = '1.0'; // Para invalidação de cache quando necessário

    // Sistema de fallback para ícones de magias
    const TORMENTA20_ICONS_BASE_URL = 'https://gitlab.com/vizael/Tormenta20/-/raw/master/icons/magias/';
    const DEFAULT_ICON = 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg';

    // Sistema de versão do script (atualizar manualmente conforme as tags Git)
    const SCRIPT_VERSION = 'v0.0.2'; // Última tag Git


    // Funções para gerenciamento de ícones com fallback
    function getSpellIconCache() {
        try {
            const cached = localStorage.getItem(IMAGE_CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (parsed.version === IMAGE_CACHE_VERSION) {
                    return parsed.data || {};
                }
            }
        } catch (error) {
            console.warn('Erro ao carregar cache de ícones de magias:', error);
        }
        return {};
    }

    function saveSpellIconCache(cache) {
        try {
            localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify({
                version: IMAGE_CACHE_VERSION,
                data: cache,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.warn('Erro ao salvar cache de ícones de magias:', error);
        }
    }

    function normalizeSpellName(spellName) {
        // Normaliza o nome da magia para corresponder ao nome do arquivo no GitLab
        return spellName
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/-+/g, '-') // Remove hífens duplicados
            .replace(/^-|-$/g, ''); // Remove hífens no início e fim
    }

    function getTormenta20IconUrl(spellName) {
        const normalizedName = normalizeSpellName(spellName);
        return `${TORMENTA20_ICONS_BASE_URL}${normalizedName}.webp`;
    }

    function testImageUrl(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
            // Timeout de 5 segundos
            setTimeout(() => resolve(false), 5000);
        });
    }

    async function loadSpellIcon(spellName, originalIconUrl) {
        const cache = getSpellIconCache();
        const cacheKey = `spell_${spellName}`;

        // Verificar se já temos o ícone em cache
        if (cache[cacheKey]) {
            return cache[cacheKey];
        }

        let finalIconUrl = DEFAULT_ICON;

        try {
            // Verificar se o ícone original é um caminho relativo do Tormenta20
            const isTormenta20RelativePath = originalIconUrl &&
                originalIconUrl.startsWith('systems/tormenta20/icons/magias/') &&
                originalIconUrl.endsWith('.webp');

            if (isTormenta20RelativePath) {
                // Se é um caminho relativo do Tormenta20, converter para URL completa
                const iconName = originalIconUrl.replace('systems/tormenta20/icons/magias/', '').replace('.webp', '');
                const tormenta20Url = `${TORMENTA20_ICONS_BASE_URL}${iconName}.webp`;

                const tormenta20Works = await testImageUrl(tormenta20Url);
                if (tormenta20Works) {
                    finalIconUrl = tormenta20Url;
                } else {
                    // Se falhar, tentar com o nome normalizado da magia
                    const normalizedUrl = getTormenta20IconUrl(spellName);
                    const normalizedWorks = await testImageUrl(normalizedUrl);
                    if (normalizedWorks) {
                        finalIconUrl = normalizedUrl;
                    }
                }
            } else if (originalIconUrl && originalIconUrl !== DEFAULT_ICON) {
                // Se é uma URL do Wowhead ou outra fonte
                const originalWorks = await testImageUrl(originalIconUrl);
                if (originalWorks) {
                    finalIconUrl = originalIconUrl;
                } else {
                    // Se falhar, tentar o ícone do Tormenta20
                    const tormenta20Url = getTormenta20IconUrl(spellName);
                    const tormenta20Works = await testImageUrl(tormenta20Url);
                    if (tormenta20Works) {
                        finalIconUrl = tormenta20Url;
                    }
                }
            } else {
                // Se não há ícone original, tentar diretamente o Tormenta20
                const tormenta20Url = getTormenta20IconUrl(spellName);
                const tormenta20Works = await testImageUrl(tormenta20Url);
                if (tormenta20Works) {
                    finalIconUrl = tormenta20Url;
                }
            }

            // Salvar no cache
            cache[cacheKey] = finalIconUrl;
            saveSpellIconCache(cache);

        } catch (error) {
            console.warn(`Erro ao carregar ícone para magia "${spellName}":`, error);
        }

        return finalIconUrl;
    }


    // Componente reutilizável para botões da hotbar
    function createHotbarButton(config) {
        const {
            icon,           // Ícone do botão (emoji ou texto)
            label,          // Nome/texto do botão
            onClick,        // Função de callback para o clique
            theme = 'blue', // Tema: 'blue' ou 'red'
            badge = null,   // Badge opcional: { text: '1', color: '#4caf50' }
            dataLabel = null // Atributo data-label opcional
        } = config;

        // Configurações de tema
        const themes = {
            blue: {
                background: 'rgba(60,80,120,0.95)',
                border: '#6ec6ff',
                hoverBackground: '#6ec6ff',
                hoverColor: '#222'
            },
            red: {
                background: 'rgba(120,60,60,0.95)',
                border: '#ff6e6e',
                hoverBackground: '#ff6e6e',
                hoverColor: '#222'
            }
        };

        const currentTheme = themes[theme] || themes.blue;

        // Cria o botão principal
        const btn = document.createElement('button');
        btn.style.display = 'flex';
        btn.style.flexDirection = 'column';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.padding = '0';
        btn.style.background = currentTheme.background;
        btn.style.color = '#fff';
        btn.style.border = `2px solid ${currentTheme.border}`;
        btn.style.borderRadius = '8px';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '13px';
        btn.style.fontWeight = 'bold';
        btn.style.width = '64px';
        btn.style.height = '64px';
        btn.style.transition = 'all 0.2s';
        btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        btn.style.textAlign = 'center';
        btn.style.lineHeight = '1.1';
        btn.style.position = 'relative'; // Para posicionar o badge

        // Efeitos hover
        btn.onmouseover = () => {
            btn.style.background = currentTheme.hoverBackground;
            btn.style.color = currentTheme.hoverColor;
            btn.style.transform = 'scale(1.08)';
        };
        btn.onmouseout = () => {
            btn.style.background = currentTheme.background;
            btn.style.color = '#fff';
            btn.style.transform = 'scale(1)';
        };

        // Ícone
        const iconElement = document.createElement('span');
        iconElement.textContent = icon;
        iconElement.style.fontSize = '26px';
        iconElement.style.marginBottom = '2px';
        btn.appendChild(iconElement);

        // Texto
        const labelElement = document.createElement('span');
        labelElement.textContent = label;
        labelElement.style.fontSize = '12px';
        labelElement.style.marginTop = '2px';
        btn.appendChild(labelElement);

        // Evento de clique
        if (onClick) {
            btn.onclick = onClick;
        }

        // Adicionar atributo data-label se fornecido
        if (dataLabel) {
            btn.setAttribute('data-label', dataLabel);
        }

        // Adicionar badge se fornecido
        if (badge) {
            const badgeElement = document.createElement('div');
            badgeElement.className = 'hotbar-button-badge';
            badgeElement.style.position = 'absolute';
            badgeElement.style.top = '-2px';
            badgeElement.style.right = '-2px';
            badgeElement.style.background = badge.color || '#4caf50';
            badgeElement.style.color = '#fff';
            badgeElement.style.borderRadius = '50%';
            badgeElement.style.width = '16px';
            badgeElement.style.height = '16px';
            badgeElement.style.fontSize = '10px';
            badgeElement.style.fontWeight = 'bold';
            badgeElement.style.display = 'flex';
            badgeElement.style.alignItems = 'center';
            badgeElement.style.justifyContent = 'center';
            badgeElement.style.border = '2px solid #23243a';
            badgeElement.style.zIndex = '1000';
            badgeElement.textContent = badge.text;
            btn.appendChild(badgeElement);
        }

        return btn;
    }

    // Componente reutilizável para inputs de search
    function createSearchInput(config) {
        const {
            placeholder = 'Filtrar...',           // Placeholder do input
            onInput = null,                       // Função de callback para o evento input
            onClear = null,                       // Função de callback para limpar o input
            theme = 'blue',                       // Tema: 'blue', 'orange', 'purple', 'green', 'red'
            width = '100%',                       // Largura do container
            marginBottom = '10px',                // Margem inferior
            fontSize = '15px',                    // Tamanho da fonte
            showClearButton = true,               // Se deve mostrar o botão de limpar
            autoFocus = false                     // Se deve focar automaticamente
        } = config;

        // Configurações de tema
        const themes = {
            blue: {
                border: '#6ec6ff',
                color: '#6ec6ff',
                background: '#23243a'
            },
            orange: {
                border: '#ffb86c',
                color: '#ffb86c',
                background: '#23243a'
            },
            purple: {
                border: '#9c27b0',
                color: '#9c27b0',
                background: '#23243a'
            },
            green: {
                border: '#4caf50',
                color: '#4caf50',
                background: '#23243a'
            },
            red: {
                border: '#f44336',
                color: '#f44336',
                background: '#23243a'
            }
        };

        const currentTheme = themes[theme] || themes.blue;

        // Container principal
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = marginBottom;
        filterContainer.style.width = width;

        // Input principal
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = placeholder;
        filterInput.style.width = '100%';
        filterInput.style.padding = '10px 28px 10px 12px';
        filterInput.style.borderRadius = '8px';
        filterInput.style.border = `1px solid ${currentTheme.border}`;
        filterInput.style.background = currentTheme.background;
        filterInput.style.color = '#fff';
        filterInput.style.fontSize = fontSize;
        filterInput.style.outline = 'none';
        filterInput.style.boxSizing = 'border-box';
        filterInput.style.transition = 'border-color 0.2s ease';

        // Efeitos hover e focus
        filterInput.onmouseover = () => {
            filterInput.style.borderColor = currentTheme.color;
        };
        filterInput.onmouseout = () => {
            if (document.activeElement !== filterInput) {
                filterInput.style.borderColor = currentTheme.border;
            }
        };
        filterInput.onfocus = () => {
            filterInput.style.borderColor = currentTheme.color;
            filterInput.style.boxShadow = `0 0 0 2px ${currentTheme.color}20`;
        };
        filterInput.onblur = () => {
            filterInput.style.borderColor = currentTheme.border;
            filterInput.style.boxShadow = 'none';
        };

        // Botão X para limpar (opcional)
        let clearBtn = null;
        if (showClearButton) {
            clearBtn = document.createElement('span');
            clearBtn.textContent = '×';
            clearBtn.style.position = 'absolute';
            clearBtn.style.right = '8px';
            clearBtn.style.top = '50%';
            clearBtn.style.transform = 'translateY(-50%)';
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.color = currentTheme.color;
            clearBtn.style.fontSize = '18px';
            clearBtn.style.display = 'none';
            clearBtn.style.transition = 'all 0.2s ease';
            clearBtn.style.width = '20px';
            clearBtn.style.height = '20px';
            clearBtn.style.display = 'flex';
            clearBtn.style.alignItems = 'center';
            clearBtn.style.justifyContent = 'center';
            clearBtn.style.borderRadius = '50%';

            // Efeitos hover do botão de limpar
            clearBtn.onmouseover = () => {
                clearBtn.style.background = `${currentTheme.color}20`;
                clearBtn.style.color = currentTheme.color;
            };
            clearBtn.onmouseout = () => {
                clearBtn.style.background = 'transparent';
                clearBtn.style.color = currentTheme.color;
            };

            clearBtn.onclick = () => {
                filterInput.value = '';
                filterInput.dispatchEvent(new Event('input'));
                filterInput.focus();
                if (onClear) onClear();
            };
        }

        // Event listener para filtrar enquanto o usuário digita
        filterInput.oninput = () => {
            if (showClearButton && clearBtn) {
                if (filterInput.value.length > 0) {
                    clearBtn.style.display = 'flex';
                } else {
                    clearBtn.style.display = 'none';
                }
            }
            if (onInput) onInput(filterInput.value);
        };

        // Adiciona elementos ao container
        filterContainer.appendChild(filterInput);
        if (showClearButton && clearBtn) {
            filterContainer.appendChild(clearBtn);
        }

        // Foca automaticamente se solicitado
        if (autoFocus) {
            setTimeout(() => {
                filterInput.focus();
            }, 100);
        }

        // Retorna o objeto com elementos e métodos úteis
        return {
            container: filterContainer,
            input: filterInput,
            clearButton: clearBtn,
            clear: () => {
                filterInput.value = '';
                filterInput.dispatchEvent(new Event('input'));
                if (onClear) onClear();
            },
            focus: () => filterInput.focus(),
            blur: () => filterInput.blur(),
            getValue: () => filterInput.value,
            setValue: (value) => {
                filterInput.value = value;
                filterInput.dispatchEvent(new Event('input'));
            },
            setPlaceholder: (newPlaceholder) => {
                filterInput.placeholder = newPlaceholder;
            },
            setTheme: (newTheme) => {
                const newThemeColors = themes[newTheme] || themes.blue;
                filterInput.style.borderColor = newThemeColors.border;
                if (clearBtn) {
                    clearBtn.style.color = newThemeColors.color;
                }
            }
        };
    }
    // Componente reutilizável para tooltips
    function createTooltip(config) {
        const {
            title,           // Título do tooltip
            description,     // Descrição principal
            tags = [],       // Array de tags: [{ text: 'Tag', color: '#color', bgColor: '#bgcolor' }]
            theme = 'blue',  // Tema: 'blue', 'red', 'green', 'purple'
            position = 'right', // Posição: 'right', 'left', 'top', 'bottom'
            maxWidth = 320,  // Largura máxima
            minWidth = 280   // Largura mínima
        } = config;

        // Configurações de tema
        const themes = {
            blue: {
                border: '#6ec6ff',
                titleColor: '#6ec6ff',
                background: 'rgba(20,20,30,0.98)'
            },
            red: {
                border: '#ff6e6e',
                titleColor: '#ff6e6e',
                background: 'rgba(20,20,30,0.98)'
            },
            green: {
                border: '#4caf50',
                titleColor: '#4caf50',
                background: 'rgba(20,20,30,0.98)'
            },
            purple: {
                border: '#9c27b0',
                titleColor: '#9c27b0',
                background: 'rgba(20,20,30,0.98)'
            }
        };

        const currentTheme = themes[theme] || themes.blue;

        // Cria o elemento tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'roll20-tooltip';
        tooltip.style.position = 'fixed';
        tooltip.style.background = currentTheme.background;
        tooltip.style.border = `2px solid ${currentTheme.border}`;
        tooltip.style.borderRadius = '8px';
        tooltip.style.padding = '12px';
        tooltip.style.minWidth = `${minWidth}px`;
        tooltip.style.maxWidth = `${maxWidth}px`;
        tooltip.style.zIndex = '10004';
        tooltip.style.boxShadow = '0 4px 16px rgba(0,0,0,0.8)';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.2s ease';

        // Conteúdo do tooltip
        const tooltipContent = document.createElement('div');
        tooltipContent.style.display = 'flex';
        tooltipContent.style.flexDirection = 'column';
        tooltipContent.style.gap = '8px';

        // Título
        if (title) {
            const tooltipTitle = document.createElement('div');
            tooltipTitle.textContent = title;
            tooltipTitle.style.color = currentTheme.titleColor;
            tooltipTitle.style.fontSize = '16px';
            tooltipTitle.style.fontWeight = 'bold';
            tooltipTitle.style.marginBottom = '4px';
            tooltipContent.appendChild(tooltipTitle);
        }

        // Tags
        tags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.textContent = tag.text;
            tagElement.style.background = tag.bgColor || currentTheme.titleColor;
            tagElement.style.color = tag.color || '#23243a';
            tagElement.style.fontSize = '11px';
            tagElement.style.fontWeight = 'bold';
            tagElement.style.borderRadius = '4px';
            tagElement.style.padding = '2px 8px';
            tagElement.style.display = 'inline-block';
            tagElement.style.width = 'fit-content';
            tagElement.style.marginTop = '2px';
            tooltipContent.appendChild(tagElement);
        });

        // Descrição
        if (description) {
            const tooltipDesc = document.createElement('div');
            tooltipDesc.textContent = description;
            tooltipDesc.style.color = '#ecf0f1';
            tooltipDesc.style.fontSize = '13px';
            tooltipDesc.style.lineHeight = '1.4';
            tooltipDesc.style.marginTop = '6px';
            tooltipContent.appendChild(tooltipDesc);
        }

        tooltip.appendChild(tooltipContent);

        // Função para posicionar o tooltip
        function positionTooltip(element) {
            const elementRect = element.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            let left, top;

            switch (position) {
                case 'right':
                    left = elementRect.right + 10;
                    top = elementRect.top;
                    break;
                case 'left':
                    left = elementRect.left - tooltipRect.width - 10;
                    top = elementRect.top;
                    break;
                case 'top':
                    left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                    top = elementRect.top - tooltipRect.height - 10;
                    break;
                case 'bottom':
                    left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                    top = elementRect.bottom + 10;
                    break;
                default:
                    left = elementRect.right + 10;
                    top = elementRect.top;
            }

            // Ajustar se sair da tela
            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            if (top < 10) {
                top = elementRect.bottom + 10;
            }
            if (top + tooltipRect.height > window.innerHeight - 10) {
                top = elementRect.top - tooltipRect.height - 10;
            }

            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
        }

        // Função para mostrar o tooltip
        function showTooltip(element) {
            document.body.appendChild(tooltip);
            positionTooltip(element);
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        }

        // Função para esconder o tooltip
        function hideTooltip() {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 200);
        }

        return {
            element: tooltip,
            show: showTooltip,
            hide: hideTooltip,
            position: positionTooltip
        };
    }

    // Função para adicionar tooltip a um elemento
    // Esta função é usada para facilitar a adição de tooltips a elementos existentes
    function addTooltipToElement(element, tooltipConfig) {
        let tooltipInstance = null;
        let tooltipTimeout = null;

        element.addEventListener('mouseenter', () => {
            // Criar tooltip após delay
            tooltipTimeout = setTimeout(() => {
                tooltipInstance = createTooltip(tooltipConfig);
                tooltipInstance.show(element);
            }, tooltipConfig.delay || 300);
        });

        element.addEventListener('mouseleave', () => {
            // Limpar timeout e esconder tooltip
            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
                tooltipTimeout = null;
            }
            if (tooltipInstance) {
                tooltipInstance.hide();
                tooltipInstance = null;
            }
        });

        element.addEventListener('click', () => {
            // Esconder tooltip ao clicar
            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
                tooltipTimeout = null;
            }
            if (tooltipInstance) {
                tooltipInstance.hide();
                tooltipInstance = null;
            }
        });

        return {
            element: element,
            tooltip: tooltipInstance,
            show: () => tooltipInstance?.show(element),
            hide: () => tooltipInstance?.hide()
        };
    }

    // Exportar a função para uso global (para evitar erro de linting)
    if (typeof window !== 'undefined') {
        window.addTooltipToElement = addTooltipToElement;
    }

    // Função para criar popup de condições
    function createConditionsPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('conditions-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('conditions-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'conditions-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'conditions-popup';
        popup.className = 'roll20-popup roll20-popup-orange';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #ffb86c';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '450px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';

        const title = document.createElement('h3');
        title.textContent = 'Condições';
        title.style.color = '#ffb86c';
        title.style.margin = '0';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ffb86c',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('conditions-overlay');
                if (overlay) overlay.remove();
            }
        });
        header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Campo de busca
        const searchInput = createSearchInput({
            placeholder: 'Buscar condições...',
            theme: 'orange',
            marginBottom: '12px',
            onInput: (value) => {
                filterConditions(value);
            }
        });
        popup.appendChild(searchInput.container);

        // Lista de condições
        const conditionsList = document.createElement('div');
        conditionsList.id = 'conditions-list';
        conditionsList.style.display = 'flex';
        conditionsList.style.flexDirection = 'column';
        conditionsList.style.gap = '8px';

        // Função para filtrar condições
        function filterConditions(searchTerm) {
            const conditions = getConditionsList();
            const filteredConditions = conditions.filter(condition => {
                const matchesSearch = !searchTerm ||
                    condition.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    condition.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    condition.efeitos.toLowerCase().includes(searchTerm.toLowerCase());

                return matchesSearch;
            });

            // Limpa a lista atual
            conditionsList.innerHTML = '';

            // Adiciona as condições filtradas usando o componente FavoritableCard
            filteredConditions.forEach(condition => {
                const conditionCard = window.Roll20Components.createFavoritableCardWithPreset('condition', {
                    title: condition.nome,
                    summary: condition.descricao,
                    efeitos: condition.efeitos,
                    onClick: () => {
                        showConditionDetailsPopup(condition);
                    }
                });

                conditionsList.appendChild(conditionCard.render());
            });
        }

        // Inicializa com todas as condições
        filterConditions('');

        popup.appendChild(conditionsList);
        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'orange');
    }

    // Função para mostrar popup detalhado de uma condição específica
    function showConditionDetailsPopup(conditionData) {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('condition-details-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('condition-details-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'condition-details-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'condition-details-popup';
        popup.className = 'roll20-popup roll20-popup-orange';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #ffb86c';
        popup.style.borderRadius = '12px';
        popup.style.padding = '20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '500px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '20px';

        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.gap = '12px';

        const conditionIcon = document.createElement('div');
        conditionIcon.style.width = '32px';
        conditionIcon.style.height = '32px';
        conditionIcon.style.borderRadius = '6px';
        conditionIcon.style.border = '2px solid #ff6e6e';
        conditionIcon.style.background = '#23243a';
        conditionIcon.style.overflow = 'hidden';
        conditionIcon.style.flexShrink = '0';

        // Usa o sistema de cache para carregar a imagem
        const iconUrl = conditionData.iconeUrl || 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg';

        const cachedImageElement = createCachedImageElement(
            iconUrl,
            conditionData.nome,
            conditionData.icone || '⚠️',
            {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
                objectFit: 'cover',
                showSkeleton: true
            }
        );

        conditionIcon.appendChild(cachedImageElement);

        const title = document.createElement('h3');
        title.textContent = conditionData.nome;
        title.style.color = '#ffb86c';
        title.style.margin = '0';
        title.style.fontSize = '20px';
        title.style.fontWeight = 'bold';

        titleContainer.appendChild(conditionIcon);
        titleContainer.appendChild(title);

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ffb86c',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('condition-details-overlay');
                if (overlay) overlay.remove();
            }
        });

        header.appendChild(titleContainer);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Conteúdo
        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.gap = '16px';

        // Categoria
        if (conditionData.categoria) {
            const categoryDiv = document.createElement('div');
            categoryDiv.style.display = 'flex';
            categoryDiv.style.alignItems = 'center';
            categoryDiv.style.gap = '8px';

            const categoryLabel = document.createElement('span');
            categoryLabel.textContent = 'Categoria:';
            categoryLabel.style.color = '#ffb86c';
            categoryLabel.style.fontWeight = 'bold';
            categoryLabel.style.fontSize = '14px';

            const categoryValue = document.createElement('span');
            categoryValue.textContent = conditionData.categoria;
            categoryValue.style.color = '#ecf0f1';
            categoryValue.style.fontSize = '14px';

            categoryDiv.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryValue);
            content.appendChild(categoryDiv);
        }

        // Descrição completa
        if (conditionData.descricaoCompleta) {
            const descriptionDiv = document.createElement('div');

            const descriptionLabel = document.createElement('div');
            descriptionLabel.textContent = 'Descrição Completa:';
            descriptionLabel.style.color = '#ffb86c';
            descriptionLabel.style.fontWeight = 'bold';
            descriptionLabel.style.fontSize = '14px';
            descriptionLabel.style.marginBottom = '8px';

            const descriptionText = document.createElement('div');
            descriptionText.innerHTML = conditionData.descricaoCompleta.replace(/\*(.*?)\*/g, '<em>$1</em>');
            descriptionText.style.color = '#ecf0f1';
            descriptionText.style.fontSize = '14px';
            descriptionText.style.lineHeight = '1.5';
            descriptionText.style.padding = '12px';
            descriptionText.style.background = 'rgba(255,184,108,0.1)';
            descriptionText.style.borderRadius = '6px';
            descriptionText.style.border = '1px solid rgba(255,184,108,0.3)';

            descriptionDiv.appendChild(descriptionLabel);
            descriptionDiv.appendChild(descriptionText);
            content.appendChild(descriptionDiv);
        }

        // Efeitos
        if (conditionData.efeitos) {
            const effectsDiv = document.createElement('div');

            const effectsLabel = document.createElement('div');
            effectsLabel.textContent = 'Efeitos:';
            effectsLabel.style.color = '#ffb86c';
            effectsLabel.style.fontWeight = 'bold';
            effectsLabel.style.fontSize = '14px';
            effectsLabel.style.marginBottom = '8px';

            const effectsText = document.createElement('div');
            effectsText.textContent = conditionData.efeitos;
            effectsText.style.color = '#ecf0f1';
            effectsText.style.fontSize = '13px';
            effectsText.style.lineHeight = '1.4';

            effectsDiv.appendChild(effectsLabel);
            effectsDiv.appendChild(effectsText);
            content.appendChild(effectsDiv);
        }

        // Regras gerais
        const rulesDiv = document.createElement('div');
        rulesDiv.style.marginTop = '16px';
        rulesDiv.style.padding = '12px';
        rulesDiv.style.background = 'rgba(255,184,108,0.05)';
        rulesDiv.style.borderRadius = '6px';
        rulesDiv.style.border = '1px solid rgba(255,184,108,0.2)';

        const rulesTitle = document.createElement('div');
        rulesTitle.textContent = 'Regras Gerais das Condições:';
        rulesTitle.style.color = '#ffb86c';
        rulesTitle.style.fontWeight = 'bold';
        rulesTitle.style.fontSize = '13px';
        rulesTitle.style.marginBottom = '8px';

        const rulesText = document.createElement('div');
        rulesText.innerHTML = `
            <div style="color: #ecf0f1; font-size: 12px; line-height: 1.4; margin-bottom: 6px;">
                • <strong>Condições com os mesmos efeitos não se acumulam;</strong> aplique apenas os mais severos.
            </div>
            <div style="color: #ecf0f1; font-size: 12px; line-height: 1.4; margin-bottom: 6px;">
                • <strong>A menos que especificado o contrário, condições terminam no fim da cena.</strong>
            </div>
            <div style="color: #ecf0f1; font-size: 12px; line-height: 1.4;">
                • Algumas condições possuem um tipo de efeito (em <em>itálico</em>).
            </div>
        `;

        rulesDiv.appendChild(rulesTitle);
        rulesDiv.appendChild(rulesText);
        content.appendChild(rulesDiv);

        // Botões
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.gap = '10px';
        buttonsContainer.style.marginTop = '20px';

        // Botão Compartilhar
        const shareBtn = document.createElement('button');
        shareBtn.textContent = 'Compartilhar';
        shareBtn.style.flex = '1';
        shareBtn.style.padding = '10px 15px';
        shareBtn.style.background = '#2c3e50';
        shareBtn.style.border = '1px solid #34495e';
        shareBtn.style.borderRadius = '6px';
        shareBtn.style.color = '#ecf0f1';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.fontSize = '14px';
        shareBtn.onclick = () => {
            // Envia condição para o chat
            sendConditionToChat(conditionData.nome);
            showSuccessNotification(`Condição "${conditionData.nome}" compartilhada no chat!`);
            // Fechar todos os popups abertos
            closeAllPopups();
        };
        buttonsContainer.appendChild(shareBtn);

        // Botão Aplicar
        const applyBtn = document.createElement('button');
        applyBtn.textContent = 'Aplicar Condição';
        applyBtn.style.flex = '1';
        applyBtn.style.padding = '10px 15px';
        applyBtn.style.background = '#27ae60';
        applyBtn.style.border = '1px solid #2ecc71';
        applyBtn.style.borderRadius = '6px';
        applyBtn.style.color = '#ecf0f1';
        applyBtn.style.cursor = 'pointer';
        applyBtn.style.fontSize = '14px';
        applyBtn.onclick = () => {
            // Aplica a condição
            toggleCondition(conditionData.nome);

            // Fecha todos os popups relacionados às condições para limpar a cena
            const conditionsPopup = document.getElementById('conditions-popup');
            if (conditionsPopup) conditionsPopup.remove();
            const conditionsOverlay = document.getElementById('conditions-overlay');
            if (conditionsOverlay) conditionsOverlay.remove();

            // Fecha o popup de detalhes
            popup.remove();
            const overlay = document.getElementById('condition-details-overlay');
            if (overlay) overlay.remove();
        };
        buttonsContainer.appendChild(applyBtn);

        content.appendChild(buttonsContainer);

        popup.appendChild(content);
        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'orange');
    }

    // Função para criar tooltip de efeito no hover
    function createEffectHoverTooltip(element, data, type) {
        // Remove tooltip existente
        hideEffectTooltip();

        const tooltip = document.createElement('div');
        tooltip.id = 'effect-hover-tooltip';
        tooltip.style.position = 'fixed';
        tooltip.style.background = 'rgba(30,30,40,0.95)';
        tooltip.style.border = '1px solid #6ec6ff';
        tooltip.style.borderRadius = '6px';
        tooltip.style.padding = '8px 12px';
        tooltip.style.color = '#ecf0f1';
        tooltip.style.fontSize = '12px';
        tooltip.style.maxWidth = '250px';
        tooltip.style.zIndex = '10004';
        tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
        tooltip.style.pointerEvents = 'none';

        let title, description;
        if (type === 'food') {
            title = data.nome;
            description = data.descricao || 'Efeito de comida ativo.';
        } else if (type === 'drink') {
            title = data.nome;
            description = data.descricao || 'Efeito de bebida ativo.';
        } else if (type === 'condition') {
            title = data.nome;
            description = data.descricao || 'Condição ativa.';
        } else if (type === 'item') {
            title = data.name;
            description = data.description || 'Efeito de item ativo.';
        } else if (type === 'potion') {
            title = data.nome;
            description = data.descricao || 'Efeito de poção ativo.';
        }

        tooltip.innerHTML = `
                <div style="font-weight: bold; color: #6ec6ff; margin-bottom: 4px;">${title}</div>
                <div style="color: #ecf0f1;">${description}</div>
            `;

        document.body.appendChild(tooltip);

        // Posicionar tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = (rect.right + 10) + 'px';
        tooltip.style.top = (rect.top - 5) + 'px';
    }

    // Função para esconder tooltip de efeito
    function hideEffectTooltip() {
        const tooltip = document.getElementById('effect-hover-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    // Função para criar ícone indicador de efeito de item
    function createItemEffectIndicatorIcon(itemEffectData) {
        const effectsContainer = document.getElementById('effects-icons-container');
        if (!effectsContainer) return;

        // Container principal do indicador
        const indicator = document.createElement('div');
        indicator.className = 'item-effect-indicator';
        indicator.style.position = 'relative';
        indicator.style.width = '32px';
        indicator.style.height = '32px';
        indicator.style.borderRadius = '6px';
        indicator.style.border = '2px solid #9c27b0'; // Borda roxa para itens
        indicator.style.background = '#23243a';
        indicator.style.cursor = 'pointer';
        indicator.style.transition = 'all 0.2s';
        indicator.style.overflow = 'hidden';

        // Efeitos de hover
        indicator.onmouseover = () => {
            indicator.style.transform = 'scale(1.1)';
            indicator.style.borderColor = '#ba68c8'; // Roxo mais claro no hover
            createEffectHoverTooltip(indicator, itemEffectData, 'item');
        };

        indicator.onmouseout = () => {
            indicator.style.transform = 'scale(1)';
            indicator.style.borderColor = '#9c27b0'; // Volta para roxo normal
            hideEffectTooltip();
        };

        // Click handler para remover o efeito
        indicator.onclick = () => {
            hideEffectTooltip();
            toggleEffect(itemEffectData.effectKey, true); // Modo silencioso
            removeEffectFromOrder(itemEffectData.effectKey, 'item');
        };

        // Usa o sistema de cache para carregar a imagem
        const iconUrl = itemEffectData.iconeUrl || 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg';

        const cachedImageElement = createCachedImageElement(
            iconUrl,
            itemEffectData.name,
            itemEffectData.icone || '⚔️',
            {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
                objectFit: 'cover',
                showSkeleton: true
            }
        );

        indicator.appendChild(cachedImageElement);
        effectsContainer.appendChild(indicator);
    }
    // Sistema de scrollbars customizadas
    function createCustomScrollbarStyles() {
        const style = document.createElement('style');
        style.id = 'roll20-custom-scrollbar-styles';
        style.textContent = `
                /* Scrollbars customizadas para todos os elementos do script */
                #roll20-hotbar *::-webkit-scrollbar,
                .roll20-popup *::-webkit-scrollbar,
                .roll20-modal *::-webkit-scrollbar,
                #roll20-notification-container *::-webkit-scrollbar,
                #skills-popup *::-webkit-scrollbar,
                #spells-popup *::-webkit-scrollbar,
                #misc-popup *::-webkit-scrollbar,
                #avatar-popup *::-webkit-scrollbar,
                #spell-cast-popup *::-webkit-scrollbar,
                #pratos-popup *::-webkit-scrollbar,
                #bebidas-popup *::-webkit-scrollbar,
                #pocoes-popup *::-webkit-scrollbar,
                #conditions-popup *::-webkit-scrollbar,
                #hunter-class-modal *::-webkit-scrollbar,
                #skill-detail-modal *::-webkit-scrollbar {
                    width: 8px !important;
                    height: 8px !important;
                }

                #roll20-hotbar *::-webkit-scrollbar-track,
                .roll20-popup *::-webkit-scrollbar-track,
                .roll20-modal *::-webkit-scrollbar-track,
                #roll20-notification-container *::-webkit-scrollbar-track,
                #skills-popup *::-webkit-scrollbar-track,
                #spells-popup *::-webkit-scrollbar-track,
                #misc-popup *::-webkit-scrollbar-track,
                #avatar-popup *::-webkit-scrollbar-track,
                #spell-cast-popup *::-webkit-scrollbar-track,
                #pratos-popup *::-webkit-scrollbar-track,
                #bebidas-popup *::-webkit-scrollbar-track,
                #pocoes-popup *::-webkit-scrollbar-track,
                #conditions-popup *::-webkit-scrollbar-track,
                #hunter-class-modal *::-webkit-scrollbar-track,
                #skill-detail-modal *::-webkit-scrollbar-track {
                    background: rgba(35, 36, 58, 0.3) !important;
                    border-radius: 4px !important;
                    margin: 2px !important;
                }

                #roll20-hotbar *::-webkit-scrollbar-thumb,
                .roll20-popup *::-webkit-scrollbar-thumb,
                .roll20-modal *::-webkit-scrollbar-thumb,
                #roll20-notification-container *::-webkit-scrollbar-thumb,
                #skills-popup *::-webkit-scrollbar-thumb,
                #spells-popup *::-webkit-scrollbar-thumb,
                #misc-popup *::-webkit-scrollbar-thumb,
                #avatar-popup *::-webkit-scrollbar-thumb,
                #spell-cast-popup *::-webkit-scrollbar-thumb,
                #pratos-popup *::-webkit-scrollbar-thumb,
                #bebidas-popup *::-webkit-scrollbar-thumb,
                #pocoes-popup *::-webkit-scrollbar-thumb,
                #conditions-popup *::-webkit-scrollbar-thumb,
                #hunter-class-modal *::-webkit-scrollbar-thumb,
                #skill-detail-modal *::-webkit-scrollbar-thumb {
                    background: rgba(110, 198, 255, 0.6) !important;
                    border-radius: 4px !important;
                    border: 1px solid rgba(110, 198, 255, 0.2) !important;
                    transition: all 0.2s ease !important;
                }

                #roll20-hotbar *::-webkit-scrollbar-thumb:hover,
                .roll20-popup *::-webkit-scrollbar-thumb:hover,
                .roll20-modal *::-webkit-scrollbar-thumb:hover,
                #roll20-notification-container *::-webkit-scrollbar-thumb:hover,
                #skills-popup *::-webkit-scrollbar-thumb:hover,
                #spells-popup *::-webkit-scrollbar-thumb:hover,
                #misc-popup *::-webkit-scrollbar-thumb:hover,
                #avatar-popup *::-webkit-scrollbar-thumb:hover,
                #spell-cast-popup *::-webkit-scrollbar-thumb:hover,
                #pratos-popup *::-webkit-scrollbar-thumb:hover,
                #bebidas-popup *::-webkit-scrollbar-thumb:hover,
                #pocoes-popup *::-webkit-scrollbar-thumb:hover,
                #conditions-popup *::-webkit-scrollbar-thumb:hover,
                #hunter-class-modal *::-webkit-scrollbar-thumb:hover,
                #skill-detail-modal *::-webkit-scrollbar-thumb:hover {
                    background: rgba(110, 198, 255, 0.8) !important;
                    border-color: rgba(110, 198, 255, 0.4) !important;
                }

                #roll20-hotbar *::-webkit-scrollbar-thumb:active,
                .roll20-popup *::-webkit-scrollbar-thumb:active,
                .roll20-modal *::-webkit-scrollbar-thumb:active,
                #roll20-notification-container *::-webkit-scrollbar-thumb:active,
                #skills-popup *::-webkit-scrollbar-thumb:active,
                #spells-popup *::-webkit-scrollbar-thumb:active,
                #misc-popup *::-webkit-scrollbar-thumb:active,
                #avatar-popup *::-webkit-scrollbar-thumb:active,
                #spell-cast-popup *::-webkit-scrollbar-thumb:active,
                #pratos-popup *::-webkit-scrollbar-thumb:active,
                #bebidas-popup *::-webkit-scrollbar-thumb:active,
                #pocoes-popup *::-webkit-scrollbar-thumb:active,
                #conditions-popup *::-webkit-scrollbar-thumb:active,
                #hunter-class-modal *::-webkit-scrollbar-thumb:active,
                #skill-detail-modal *::-webkit-scrollbar-thumb:active {
                    background: rgba(110, 198, 255, 1) !important;
                    border-color: rgba(110, 198, 255, 0.6) !important;
                }

                #roll20-hotbar *::-webkit-scrollbar-corner,
                .roll20-popup *::-webkit-scrollbar-corner,
                .roll20-modal *::-webkit-scrollbar-corner,
                #roll20-notification-container *::-webkit-scrollbar-corner,
                #skills-popup *::-webkit-scrollbar-corner,
                #spells-popup *::-webkit-scrollbar-corner,
                #misc-popup *::-webkit-scrollbar-corner,
                #avatar-popup *::-webkit-scrollbar-corner,
                #spell-cast-popup *::-webkit-scrollbar-corner,
                #pratos-popup *::-webkit-scrollbar-corner,
                #bebidas-popup *::-webkit-scrollbar-corner,
                #pocoes-popup *::-webkit-scrollbar-corner,
                #conditions-popup *::-webkit-scrollbar-corner,
                #hunter-class-modal *::-webkit-scrollbar-corner,
                #skill-detail-modal *::-webkit-scrollbar-corner {
                    background: rgba(35, 36, 58, 0.3) !important;
                    border-radius: 4px !important;
                }

                /* Scrollbars para Firefox */
                #roll20-hotbar *,
                .roll20-popup *,
                .roll20-modal *,
                #roll20-notification-container *,
                #skills-popup *,
                #spells-popup *,
                #misc-popup *,
                #avatar-popup *,
                #spell-cast-popup *,
                #pratos-popup *,
                #bebidas-popup *,
                #conditions-popup *,
                #hunter-class-modal *,
                #skill-detail-modal * {
                    scrollbar-width: thin !important;
                    scrollbar-color: rgba(110, 198, 255, 0.6) rgba(35, 36, 58, 0.3) !important;
                }

                /* Scrollbars para elementos específicos com cores diferentes */
                .roll20-popup-orange *::-webkit-scrollbar-thumb,
                #misc-popup *::-webkit-scrollbar-thumb,
                #pratos-popup *::-webkit-scrollbar-thumb,
                #bebidas-popup *::-webkit-scrollbar-thumb {
                    background: rgba(255, 184, 108, 0.6) !important;
                    border-color: rgba(255, 184, 108, 0.2) !important;
                }

                .roll20-popup-orange *::-webkit-scrollbar-thumb:hover,
                #misc-popup *::-webkit-scrollbar-thumb:hover,
                #pratos-popup *::-webkit-scrollbar-thumb:hover,
                #bebidas-popup *::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 184, 108, 0.8) !important;
                    border-color: rgba(255, 184, 108, 0.4) !important;
                }

                .roll20-popup-orange *::-webkit-scrollbar-thumb:active,
                #misc-popup *::-webkit-scrollbar-thumb:active,
                #pratos-popup *::-webkit-scrollbar-thumb:active,
                #bebidas-popup *::-webkit-scrollbar-thumb:active {
                    background: rgba(255, 184, 108, 1) !important;
                    border-color: rgba(255, 184, 108, 0.6) !important;
                }

                .roll20-popup-orange *,
                #misc-popup *,
                #pratos-popup *,
                #bebidas-popup * {
                    scrollbar-color: rgba(255, 184, 108, 0.6) rgba(35, 36, 58, 0.3) !important;
                }

                /* Scrollbars para elementos com tema verde */
                .roll20-popup-green *::-webkit-scrollbar-thumb,
                #hunter-class-modal *::-webkit-scrollbar-thumb {
                    background: rgba(76, 175, 80, 0.6) !important;
                    border-color: rgba(76, 175, 80, 0.2) !important;
                }

                .roll20-popup-green *::-webkit-scrollbar-thumb:hover,
                #hunter-class-modal *::-webkit-scrollbar-thumb:hover {
                    background: rgba(76, 175, 80, 0.8) !important;
                    border-color: rgba(76, 175, 80, 0.4) !important;
                }

                .roll20-popup-green *::-webkit-scrollbar-thumb:active,
                #hunter-class-modal *::-webkit-scrollbar-thumb:active {
                    background: rgba(76, 175, 80, 1) !important;
                    border-color: rgba(76, 175, 80, 0.6) !important;
                }

                .roll20-popup-green *,
                #hunter-class-modal * {
                    scrollbar-color: rgba(76, 175, 80, 0.6) rgba(35, 36, 58, 0.3) !important;
                }

                /* Scrollbars para elementos com tema roxo */
                .roll20-popup-purple *::-webkit-scrollbar-thumb,
                #spells-popup *::-webkit-scrollbar-thumb,
                #spell-cast-popup *::-webkit-scrollbar-thumb {
                    background: rgba(156, 39, 176, 0.6) !important;
                    border-color: rgba(156, 39, 176, 0.2) !important;
                }

                .roll20-popup-purple *::-webkit-scrollbar-thumb:hover,
                #spells-popup *::-webkit-scrollbar-thumb:hover,
                #spell-cast-popup *::-webkit-scrollbar-thumb:hover {
                    background: rgba(156, 39, 176, 0.8) !important;
                    border-color: rgba(156, 39, 176, 0.4) !important;
                }

                .roll20-popup-purple *::-webkit-scrollbar-thumb:active,
                #spells-popup *::-webkit-scrollbar-thumb:active,
                #spell-cast-popup *::-webkit-scrollbar-thumb:active {
                    background: rgba(156, 39, 176, 1) !important;
                    border-color: rgba(156, 39, 176, 0.6) !important;
                }

                .roll20-popup-purple *,
                #spells-popup *,
                #spell-cast-popup * {
                    scrollbar-color: rgba(156, 39, 176, 0.6) rgba(35, 36, 58, 0.3) !important;
                }

                /* Scrollbars para elementos com tema vermelho */
                .roll20-popup-red *::-webkit-scrollbar-thumb,
                #conditions-popup *::-webkit-scrollbar-thumb {
                    background: rgba(244, 67, 54, 0.6) !important;
                    border-color: rgba(244, 67, 54, 0.2) !important;
                }

                .roll20-popup-red *::-webkit-scrollbar-thumb:hover,
                #conditions-popup *::-webkit-scrollbar-thumb:hover {
                    background: rgba(244, 67, 54, 0.8) !important;
                    border-color: rgba(244, 67, 54, 0.4) !important;
                }

                .roll20-popup-red *::-webkit-scrollbar-thumb:active,
                #conditions-popup *::-webkit-scrollbar-thumb:active {
                    background: rgba(244, 67, 54, 1) !important;
                    border-color: rgba(244, 67, 54, 0.6) !important;
                }

                .roll20-popup-red *,
                #conditions-popup * {
                    scrollbar-color: rgba(244, 67, 54, 0.6) rgba(35, 36, 58, 0.3) !important;
                }

                /* Animações suaves para scrollbars */
                #roll20-hotbar *::-webkit-scrollbar-thumb,
                .roll20-popup *::-webkit-scrollbar-thumb,
                .roll20-modal *::-webkit-scrollbar-thumb,
                #roll20-notification-container *::-webkit-scrollbar-thumb {
                    transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease !important;
                }

                /* Scrollbars mais finas para elementos pequenos */
                .roll20-scrollbar-thin *::-webkit-scrollbar {
                    width: 6px !important;
                    height: 6px !important;
                }

                .roll20-scrollbar-thin *::-webkit-scrollbar-thumb {
                    border-radius: 3px !important;
                }

                .roll20-scrollbar-thin *::-webkit-scrollbar-track {
                    border-radius: 3px !important;
                    margin: 1px !important;
                }

                /* Scrollbars mais grossas para elementos grandes */
                .roll20-scrollbar-thick *::-webkit-scrollbar {
                    width: 12px !important;
                    height: 12px !important;
                }
                .roll20-scrollbar-thick *::-webkit-scrollbar-thumb {
                    border-radius: 6px !important;
                }
                .roll20-scrollbar-thick *::-webkit-scrollbar-track {
                    border-radius: 6px !important;
                    margin: 3px !important;
                }

                /* Esconder scrollbars quando não necessário */
                .roll20-scrollbar-auto *::-webkit-scrollbar {
                    width: 8px !important;
                    height: 8px !important;
                }

                .roll20-scrollbar-auto *::-webkit-scrollbar-thumb {
                    background: rgba(110, 198, 255, 0.3) !important;
                }

                .roll20-scrollbar-auto *:hover::-webkit-scrollbar-thumb {
                    background: rgba(110, 198, 255, 0.6) !important;
                }
            `;
        document.head.appendChild(style);
    }

    // Componente reutilizável para aviso de CTRL
    function createCtrlTipMessage(type = 'item') {
        const tipMessages = {
            'skill': '💡 Segure CTRL + Clique para ver detalhes da perícia',
            'spell': '💡 Segure CTRL + Clique para ver detalhes da magia',
            'power': '💡 Segure CTRL + Clique para ver detalhes do poder',
            'item': '💡 Segure CTRL + Clique para ver detalhes do item'
        };

        const tip = document.createElement('div');
        tip.textContent = tipMessages[type] || tipMessages.item;
        tip.style.fontSize = '11px';
        tip.style.color = '#6ec6ff';
        tip.style.marginBottom = '10px';
        tip.style.fontStyle = 'italic';
        tip.style.textAlign = 'center';
        tip.style.width = '100%';

        return tip;
    }

    // Função para aplicar scrollbars diretamente nos elementos scrolláveis
    function applyDirectScrollbarStyles(popup, theme = 'blue') {
        const scrollbarColors = {
            blue: {
                thumb: 'rgba(110, 198, 255, 0.6)',
                thumbHover: 'rgba(110, 198, 255, 0.8)',
                thumbActive: 'rgba(110, 198, 255, 1)',
                border: 'rgba(110, 198, 255, 0.2)',
                borderHover: 'rgba(110, 198, 255, 0.4)',
                borderActive: 'rgba(110, 198, 255, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            },
            orange: {
                thumb: 'rgba(255, 184, 108, 0.6)',
                thumbHover: 'rgba(255, 184, 108, 0.8)',
                thumbActive: 'rgba(255, 184, 108, 1)',
                border: 'rgba(255, 184, 108, 0.2)',
                borderHover: 'rgba(255, 184, 108, 0.4)',
                borderActive: 'rgba(255, 184, 108, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            },
            purple: {
                thumb: 'rgba(156, 39, 176, 0.6)',
                thumbHover: 'rgba(156, 39, 176, 0.8)',
                thumbActive: 'rgba(156, 39, 176, 1)',
                border: 'rgba(156, 39, 176, 0.2)',
                borderHover: 'rgba(156, 39, 176, 0.4)',
                borderActive: 'rgba(156, 39, 176, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            },
            green: {
                thumb: 'rgba(76, 175, 80, 0.6)',
                thumbHover: 'rgba(76, 175, 80, 0.8)',
                thumbActive: 'rgba(76, 175, 80, 1)',
                border: 'rgba(76, 175, 80, 0.2)',
                borderHover: 'rgba(76, 175, 80, 0.4)',
                borderActive: 'rgba(76, 175, 80, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            },
            red: {
                thumb: 'rgba(244, 67, 54, 0.6)',
                thumbHover: 'rgba(244, 67, 54, 0.8)',
                thumbActive: 'rgba(244, 67, 54, 1)',
                border: 'rgba(244, 67, 54, 0.2)',
                borderHover: 'rgba(244, 67, 54, 0.4)',
                borderActive: 'rgba(244, 67, 54, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            },
            brown: {
                thumb: 'rgba(139, 69, 19, 0.6)',
                thumbHover: 'rgba(139, 69, 19, 0.8)',
                thumbActive: 'rgba(139, 69, 19, 1)',
                border: 'rgba(139, 69, 19, 0.2)',
                borderHover: 'rgba(139, 69, 19, 0.4)',
                borderActive: 'rgba(139, 69, 19, 0.6)',
                track: 'rgba(35, 36, 58, 0.3)'
            }
        };

        const colors = scrollbarColors[theme] || scrollbarColors.blue;

        // Encontra todos os elementos scrolláveis dentro do popup
        const scrollableElements = popup.querySelectorAll('*');

        scrollableElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const overflowY = computedStyle.overflowY;
            const overflow = computedStyle.overflow;

            // Verifica se o elemento é scrollável
            if (overflowY === 'auto' || overflowY === 'scroll' ||
                overflow === 'auto' || overflow === 'scroll') {

                console.log('Found scrollable element:', element.id || element.className, 'in popup:', popup.id);

                // Aplica estilos diretamente no elemento
                element.style.setProperty('scrollbar-width', 'thin', 'important');
                element.style.setProperty('scrollbar-color', `${colors.thumb} ${colors.track}`, 'important');

                // Cria um estilo específico para este elemento
                const elementId = element.id || `scrollable-${Math.random().toString(36).substr(2, 9)}`;
                if (!element.id) element.id = elementId;

                const scrollbarStyle = document.createElement('style');
                scrollbarStyle.textContent = `
                        #${elementId}::-webkit-scrollbar {
                            width: 8px !important;
                            height: 8px !important;
                        }
                        #${elementId}::-webkit-scrollbar-track {
                            background: ${colors.track} !important;
                            border-radius: 4px !important;
                            margin: 2px !important;
                        }
                        #${elementId}::-webkit-scrollbar-thumb {
                            background: ${colors.thumb} !important;
                            border-radius: 4px !important;
                            border: 1px solid ${colors.border} !important;
                            transition: all 0.2s ease !important;
                        }
                        #${elementId}::-webkit-scrollbar-thumb:hover {
                            background: ${colors.thumbHover} !important;
                            border-color: ${colors.borderHover} !important;
                        }
                        #${elementId}::-webkit-scrollbar-thumb:active {
                            background: ${colors.thumbActive} !important;
                            border-color: ${colors.borderActive} !important;
                        }
                        #${elementId}::-webkit-scrollbar-corner {
                            background: ${colors.track} !important;
                            border-radius: 4px !important;
                        }
                    `;
                document.head.appendChild(scrollbarStyle);
            }
        });

        // Também aplica no próprio popup se ele for scrollável
        const popupComputedStyle = window.getComputedStyle(popup);
        if (popupComputedStyle.overflowY === 'auto' || popupComputedStyle.overflowY === 'scroll') {
            console.log('Popup itself is scrollable:', popup.id);

            popup.style.setProperty('scrollbar-width', 'thin', 'important');
            popup.style.setProperty('scrollbar-color', `${colors.thumb} ${colors.track}`, 'important');

            const popupScrollbarStyle = document.createElement('style');
            popupScrollbarStyle.textContent = `
                    #${popup.id}::-webkit-scrollbar {
                        width: 8px !important;
                        height: 8px !important;
                    }
                    #${popup.id}::-webkit-scrollbar-track {
                        background: ${colors.track} !important;
                        border-radius: 4px !important;
                        margin: 2px !important;
                    }
                    #${popup.id}::-webkit-scrollbar-thumb {
                        background: ${colors.thumb} !important;
                        border-radius: 4px !important;
                        border: 1px solid ${colors.border} !important;
                        transition: all 0.2s ease !important;
                    }
                    #${popup.id}::-webkit-scrollbar-thumb:hover {
                        background: ${colors.thumbHover} !important;
                        border-color: ${colors.borderHover} !important;
                    }
                    #${popup.id}::-webkit-scrollbar-thumb:active {
                        background: ${colors.thumbActive} !important;
                        border-color: ${colors.borderActive} !important;
                    }
                    #${popup.id}::-webkit-scrollbar-corner {
                        background: ${colors.track} !important;
                        border-radius: 4px !important;
                    }
                `;
            document.head.appendChild(popupScrollbarStyle);
        }
    }

    // Sistema de notificações customizadas
    let notificationContainer = null;

    // Função para criar o container de notificações
    function createNotificationContainer() {
        if (notificationContainer) return notificationContainer;

        notificationContainer = document.createElement('div');
        notificationContainer.id = 'roll20-notification-container';
        notificationContainer.className = 'roll20-scrollbar-thin';
        notificationContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10005;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `;

        document.body.appendChild(notificationContainer);
        return notificationContainer;
    }

    // Função para criar uma notificação
    function createNotification(message, type = 'info', duration = 5000) {
        const container = createNotificationContainer();

        const notification = document.createElement('div');
        notification.className = `roll20-notification roll20-notification-${type}`;
        notification.style.cssText = `
                background: ${getNotificationBackground(type)};
                border: 1px solid ${getNotificationBorder(type)};
                border-radius: 8px;
                padding: 12px 16px;
                margin-bottom: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 300px;
                max-width: 400px;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
                pointer-events: auto;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                color: ${getNotificationTextColor(type)};
            `;

        // Ícone
        const icon = document.createElement('div');
        icon.innerHTML = getNotificationIcon(type);
        icon.style.cssText = `
                font-size: 18px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
            `;
        notification.appendChild(icon);

        // Mensagem
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
                flex: 1;
                line-height: 1.4;
            `;
        notification.appendChild(messageDiv);

        // Botão de fechar usando componente
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '20px',
            width: '24px',
            height: '24px',
            padding: '0',
            customStyles: 'opacity: 0.7; transition: opacity 0.2s ease;',
            onClick: () => removeNotification(notification)
        });
        notification.appendChild(closeBtn.render());

        container.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Auto-remover após duração
        if (duration > 0) {
            setTimeout(() => {
                removeNotification(notification);
            }, duration);
        }

        return notification;
    }

    // Função para remover notificação
    function removeNotification(notification) {
        if (!notification || !notification.parentNode) return;

        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Função para obter cor de fundo baseada no tipo
    function getNotificationBackground(type) {
        switch (type) {
            case 'success':
                return '#d4edda';
            case 'warning':
                return '#fff3cd';
            case 'error':
                return '#f8d7da';
            default:
                return '#d1ecf1';
        }
    }

    // Função para obter cor da borda baseada no tipo
    function getNotificationBorder(type) {
        switch (type) {
            case 'success':
                return '#c3e6cb';
            case 'warning':
                return '#ffeaa7';
            case 'error':
                return '#f5c6cb';
            default:
                return '#bee5eb';
        }
    }

    // Função para obter cor do texto baseada no tipo
    function getNotificationTextColor(type) {
        switch (type) {
            case 'success':
                return '#155724';
            case 'warning':
                return '#856404';
            case 'error':
                return '#721c24';
            default:
                return '#0c5460';
        }
    }

    // Função para obter ícone baseado no tipo
    function getNotificationIcon(type) {
        switch (type) {
            case 'success':
                return '✓';
            case 'warning':
                return '⚠';
            case 'error':
                return '✗';
            default:
                return 'ℹ';
        }
    }

    function showSuccessNotification(message, duration = 5000) {
        return createNotification(message, 'success', duration);
    }

    function showWarningNotification(message, duration = 5000) {
        return createNotification(message, 'warning', duration);
    }

    function showErrorNotification(message, duration = 5000) {
        return createNotification(message, 'error', duration);
    }

    // Função global para obter o nome do personagem
    function getCharacterName() {
        return localStorage.getItem(CHAR_NAME_KEY) || 'Nome do Personagem';
    }

    // Função para obter o nome do personagem sem aspas para uso em macros
    function getCharacterNameForMacro() {
        const name = getCharacterName();
        // Remove aspas simples e duplas do nome
        return name.replace(/['"]/g, '');
    }

    function getFavorites() {
        try {
            const favorites = localStorage.getItem(FAVORITES_KEY);
            return favorites ? JSON.parse(favorites) : [];
        } catch (error) {
            console.log('Erro ao carregar favoritos:', error);
            return [];
        }
    }

    function saveFavorites(favorites) {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        } catch (error) {
            console.log('Erro ao salvar favoritos:', error);
        }
    }

    function getAvatarUrl() {
        try {
            return localStorage.getItem(AVATAR_KEY) || null;
        } catch (error) {
            console.log('Erro ao carregar avatar:', error);
            return null;
        }
    }

    function saveAvatarUrl(url) {
        try {
            localStorage.setItem(AVATAR_KEY, url);
        } catch (error) {
            console.log('Erro ao salvar avatar:', error);
        }
    }

    // Funções para gerenciar habilidades aprendidas
    function getLearnedAbilities() {
        try {
            const abilities = localStorage.getItem(HUNTER_ABILITIES_KEY);
            return abilities ? JSON.parse(abilities) : [];
        } catch (error) {
            console.log('Erro ao carregar habilidades aprendidas:', error);
            return [];
        }
    }

    function saveLearnedAbilities(abilities) {
        try {
            localStorage.setItem(HUNTER_ABILITIES_KEY, JSON.stringify(abilities));
        } catch (error) {
            console.log('Erro ao salvar habilidades aprendidas:', error);
        }
    }

    function toggleLearnedAbility(abilityName) {
        const learnedAbilities = getLearnedAbilities();
        const index = learnedAbilities.indexOf(abilityName);

        if (index > -1) {
            learnedAbilities.splice(index, 1);
            showWarningNotification(`Habilidade "${abilityName}" removida da lista de aprendidas.`);
        } else {
            learnedAbilities.push(abilityName);
            showSuccessNotification(`Habilidade "${abilityName}" adicionada à lista de aprendidas!`);
        }

        saveLearnedAbilities(learnedAbilities);
        return learnedAbilities;
    }

    // Função para obter habilidades automáticas (sempre possuídas)
    function getAutomaticAbilities() {
        return ['Marca da Presa', 'Rastreador'];
    }
    // Função para obter poderes disponíveis baseado no nível
    function getAvailablePowersByLevel(level) {
        const powersByLevel = {
            2: 1,   // 2º nível: 1 poder
            3: 2,   // 3º nível: 2 poderes (Explorador + 1 poder)
            4: 3,   // 4º nível: 3 poderes
            5: 4,   // 5º nível: 4 poderes (Caminho do Explorador + 3 poderes)
            6: 5,   // 6º nível: 5 poderes
            7: 6,   // 7º nível: 6 poderes (Explorador + 5 poderes)
            8: 7,   // 8º nível: 7 poderes
            9: 8,   // 9º nível: 8 poderes
            10: 9,  // 10º nível: 9 poderes
            11: 10, // 11º nível: 10 poderes (Explorador + 9 poderes)
            12: 11, // 12º nível: 11 poderes
            13: 12, // 13º nível: 12 poderes
            14: 13, // 14º nível: 13 poderes
            15: 14, // 15º nível: 14 poderes (Explorador + 13 poderes)
            16: 15, // 16º nível: 15 poderes
            17: 16, // 17º nível: 16 poderes
            18: 17, // 18º nível: 17 poderes
            19: 18, // 19º nível: 18 poderes (Explorador + 17 poderes)
            20: 19  // 20º nível: 19 poderes (Mestre Caçador + 18 poderes)
        };

        return powersByLevel[level] || 0;
    }

    // Função para obter habilidades especiais por nível
    function getSpecialAbilitiesByLevel(level) {
        const specialAbilities = [];

        if (level >= 3) specialAbilities.push('Explorador');
        if (level >= 5) specialAbilities.push('Caminho do Explorador');
        if (level >= 20) specialAbilities.push('Mestre Caçador');

        return specialAbilities;
    }
    // Função para verificar se uma habilidade está disponível no nível atual
    function isAbilityAvailableAtLevel(abilityName, level) {
        // Habilidades automáticas sempre disponíveis
        if (getAutomaticAbilities().includes(abilityName)) {
            return true;
        }

        // Habilidades especiais baseadas no nível
        if (getSpecialAbilitiesByLevel(level).includes(abilityName)) {
            return true;
        }

        // Poderes de Caçador - verifica se o jogador já escolheu poderes suficientes
        const learnedAbilities = getLearnedAbilities();
        const availablePowers = getAvailablePowersByLevel(level);
        const learnedPowers = learnedAbilities.filter(ability =>
            !getAutomaticAbilities().includes(ability) &&
            !getSpecialAbilitiesByLevel(level).includes(ability)
        ).length;

        // Se ainda há poderes disponíveis para escolher
        return learnedPowers < availablePowers;
    }

    // Funções para gerenciar magias aprendidas
    function getLearnedSpells() {
        try {
            const spells = localStorage.getItem(LEARNED_SPELLS_KEY);
            return spells ? JSON.parse(spells) : [];
        } catch (error) {
            console.log('Erro ao carregar magias aprendidas:', error);
            return [];
        }
    }

    function saveLearnedSpells(spells) {
        try {
            localStorage.setItem(LEARNED_SPELLS_KEY, JSON.stringify(spells));
        } catch (error) {
            console.log('Erro ao salvar magias aprendidas:', error);
        }
    }

    function toggleLearnedSpell(spellName) {
        const learnedSpells = getLearnedSpells();
        const index = learnedSpells.indexOf(spellName);

        if (index > -1) {
            learnedSpells.splice(index, 1);
            showWarningNotification(`Magia "${spellName}" removida da lista de aprendidas.`);
        } else {
            learnedSpells.push(spellName);
            showSuccessNotification(`Magia "${spellName}" adicionada à lista de aprendidas!`);
        }

        saveLearnedSpells(learnedSpells);
        return learnedSpells;
    }

    function isSpellLearned(spellName) {
        const learnedSpells = getLearnedSpells();
        return learnedSpells.includes(spellName);
    }

    // Função utilitária para verificar se o personagem possui uma habilidade
    function hasAbility(abilityName) {
        const learnedAbilities = getLearnedAbilities();
        const automaticAbilities = getAutomaticAbilities();

        // Habilidades automáticas sempre possuídas
        if (automaticAbilities.includes(abilityName)) {
            return true;
        }

        return learnedAbilities.includes(abilityName);
    }

    // Função para inicializar habilidades automáticas (chamada uma vez)
    function initializeAutomaticAbilities() {
        const learnedAbilities = getLearnedAbilities();
        const automaticAbilities = getAutomaticAbilities();

        // Adiciona habilidades automáticas se não existirem
        let updated = false;
        automaticAbilities.forEach(ability => {
            if (!learnedAbilities.includes(ability)) {
                learnedAbilities.push(ability);
                updated = true;
            }
        });

        if (updated) {
            saveLearnedAbilities(learnedAbilities);
        }
    }

    function toggleFavorite(skillName) {
        const favorites = getFavorites();
        const index = favorites.indexOf(skillName);

        if (index > -1) {
            favorites.splice(index, 1);
            showWarningNotification(`Skill "${skillName}" removida dos favoritos.`);
        } else {
            favorites.push(skillName);
            showSuccessNotification(`Skill "${skillName}" adicionada aos favoritos!`);
        }

        saveFavorites(favorites);
        return favorites;
    }

    // Função para criar popup de configuração de avatar
    function createAvatarPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('avatar-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('avatar-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'avatar-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'avatar-popup';
        popup.className = 'roll20-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '400px';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('avatar-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Configurar Avatar';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold'; header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Preview do avatar atual
        const previewContainer = document.createElement('div');
        previewContainer.style.display = 'flex';
        previewContainer.style.justifyContent = 'center';
        previewContainer.style.marginBottom = '15px';

        const currentAvatarUrl = getAvatarUrl();
        const previewAvatar = document.createElement('div');
        previewAvatar.style.width = '80px';
        previewAvatar.style.height = '80px';
        previewAvatar.style.borderRadius = '50%';
        previewAvatar.style.border = '3px solid #6ec6ff';
        previewAvatar.style.display = 'flex';
        previewAvatar.style.alignItems = 'center';
        previewAvatar.style.justifyContent = 'center';
        previewAvatar.style.fontSize = '24px';
        previewAvatar.style.fontWeight = 'bold';
        previewAvatar.style.color = '#ecf0f1';
        previewAvatar.style.background = '#23243a';
        previewAvatar.style.overflow = 'hidden';

        if (currentAvatarUrl) {
            previewAvatar.style.background = `url(${currentAvatarUrl}) center/cover`;
            previewAvatar.textContent = '';
        } else {
            previewAvatar.textContent = 'EE';
        }

        previewContainer.appendChild(previewAvatar);
        popup.appendChild(previewContainer);

        // Campo de URL
        const urlLabel = document.createElement('label');
        urlLabel.textContent = 'URL da imagem:';
        urlLabel.style.color = '#ecf0f1';
        urlLabel.style.fontSize = '14px';
        urlLabel.style.fontWeight = 'bold';
        urlLabel.style.marginBottom = '8px';
        popup.appendChild(urlLabel);

        const urlInput = document.createElement('input');
        urlInput.type = 'url';
        urlInput.placeholder = 'https://exemplo.com/imagem.jpg';
        urlInput.value = currentAvatarUrl || '';
        urlInput.style.width = '100%';
        urlInput.style.padding = '10px';
        urlInput.style.borderRadius = '6px';
        urlInput.style.border = '1px solid #6ec6ff';
        urlInput.style.background = '#23243a';
        urlInput.style.color = '#fff';
        urlInput.style.fontSize = '14px';
        urlInput.style.outline = 'none';
        urlInput.style.boxSizing = 'border-box';
        urlInput.style.marginBottom = '15px';
        popup.appendChild(urlInput);

        // Botões
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Salvar';
        saveBtn.style.flex = '1';
        saveBtn.style.padding = '10px';
        saveBtn.style.background = '#6ec6ff';
        saveBtn.style.color = '#23243a';
        saveBtn.style.border = 'none';
        saveBtn.style.borderRadius = '6px';
        saveBtn.style.fontSize = '14px';
        saveBtn.style.fontWeight = 'bold';
        saveBtn.style.cursor = 'pointer';
        saveBtn.style.transition = 'all 0.2s';

        saveBtn.onmouseover = () => {
            saveBtn.style.background = '#5bb8ff';
        };
        saveBtn.onmouseout = () => {
            saveBtn.style.background = '#6ec6ff';
        };

        saveBtn.onclick = () => {
            const url = urlInput.value.trim();
            if (url) {
                saveAvatarUrl(url);
                // Atualiza o avatar na hotbar
                updateCharacterAvatar();
                showSuccessNotification('Avatar do personagem atualizado!');
            }
            popup.remove();
            const overlay = document.getElementById('avatar-overlay');
            if (overlay) overlay.remove();
        };

        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Limpar';
        clearBtn.style.flex = '1';
        clearBtn.style.padding = '10px';
        clearBtn.style.background = '#444';
        clearBtn.style.color = '#ecf0f1';
        clearBtn.style.border = 'none';
        clearBtn.style.borderRadius = '6px';
        clearBtn.style.fontSize = '14px';
        clearBtn.style.fontWeight = 'bold';
        clearBtn.style.cursor = 'pointer';
        clearBtn.style.transition = 'all 0.2s';

        clearBtn.onmouseover = () => {
            clearBtn.style.background = '#555';
        };
        clearBtn.onmouseout = () => {
            clearBtn.style.background = '#444';
        };

        clearBtn.onclick = () => {
            saveAvatarUrl('');
            updateCharacterAvatar();
            showWarningNotification('Avatar do personagem removido.');
            popup.remove();
            const overlay = document.getElementById('avatar-overlay');
            if (overlay) overlay.remove();
        };

        buttonContainer.appendChild(saveBtn);
        buttonContainer.appendChild(clearBtn);
        popup.appendChild(buttonContainer);

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }

    // Função para atualizar o avatar do personagem na hotbar
    function updateCharacterAvatar() {
        const avatarElement = document.getElementById('character-avatar');
        if (!avatarElement) return;

        const avatarUrl = getAvatarUrl();
        if (avatarUrl) {
            avatarElement.style.background = `url(${avatarUrl}) center/cover`;
            avatarElement.textContent = '';
        } else {
            avatarElement.style.background = '#23243a';
            avatarElement.textContent = 'EE';
        }
    }

    // Aguarda a página carregar completamente
    function waitForElement(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    // Função para enviar comando para o chat
    function sendToChat(command) {
        const textarea = document.querySelector('#textchat-input textarea');
        const sendButton = document.querySelector('#chatSendBtn');

        if (textarea && sendButton) {
            // Limpa quebras de linha e espaços extras
            let cleanCommand = command.replace(/\s+/g, ' ').trim();
            textarea.value = cleanCommand;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            textarea.dispatchEvent(new Event('change', { bubbles: true }));
            sendButton.click();
        }
    }
    // Função para criar o popup de skills
    function createSkillsPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('skills-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('skills-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'skills-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            // Remove todos os tooltips antes de fechar
            const existingTooltips = document.querySelectorAll('[style*="z-index: 10002"]');
            existingTooltips.forEach(tooltip => {
                if (tooltip.style.position === 'fixed' && tooltip.style.background.includes('rgba(0, 0, 0, 0.9)')) {
                    tooltip.remove();
                }
            });

            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'skills-popup';
        popup.className = 'roll20-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '340px';
        popup.style.maxHeight = '480px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '10px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                // Remove todos os tooltips antes de fechar
                const existingTooltips = document.querySelectorAll('[style*="z-index: 10002"]');
                existingTooltips.forEach(tooltip => {
                    if (tooltip.style.position === 'fixed' && tooltip.style.background.includes('rgba(0, 0, 0, 0.9)')) {
                        tooltip.remove();
                    }
                });

                popup.remove();
                const overlay = document.getElementById('skills-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Perícias';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold'; header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Barra de filtro usando o componente reutilizável
        const searchComponent = createSearchInput({
            placeholder: 'Filtrar perícias...',
            theme: 'blue',
            onInput: () => {
                updateSkillList();
            },
            onClear: () => {
                updateSkillList();
            }
        });
        popup.appendChild(searchComponent.container);

        // Dica sobre o sistema de CTRL
        const skillTip = createCtrlTipMessage('skill');
        popup.appendChild(skillTip);

        // Lista de skills (nome, comando)
        const skills = [
            { nome: 'Acrobacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Acrobacia}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|acrobaciatotal}]]]]}}` },
            { nome: 'Adestramento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Adestramento}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|adestramentototal}]]]]}}` },
            { nome: 'Atletismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atletismo}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atletismototal}]]]]}}` },
            { nome: 'Atuação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atuação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atuacaototal}]]]]}}` },
            { nome: 'Cavalgar', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cavalgar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|cavalgartotal}]]]]}}` },
            { nome: 'Conhecimento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Conhecimento}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|conhecimentototal}]]]]}}` },
            { nome: 'Cura', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cura}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|curatotal}]]]]}}` },
            { nome: 'Diplomacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Diplomacia}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|diplomaciatotal}]]]]}}` },
            { nome: 'Enganação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Enganação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|enganacaototal}]]]]}}` },
            { nome: 'Fortitude', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Fortitude}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|fortitudetotal}]]]]}}` },
            { nome: 'Furtividade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Furtividade}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|furtividadetotal}]]]]}}` },
            { nome: 'Guerra', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Guerra}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|guerratotal}]]]]}}` },
            { nome: 'Iniciativa', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Iniciativa}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|iniciativatotal}]] &{tracker}]]}}` },
            { nome: 'Intimidação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intimidação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intimidacaototal}]]]]}}` },
            { nome: 'Intuição', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intuição}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intuicaototal}]]]]}}` },
            { nome: 'Investigação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Investigação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|investigacaototal}]]]]}}` },
            { nome: 'Jogatina', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Jogatina}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|jogatinatotal}]]]]}}` },
            { nome: 'Ladinagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ladinagem}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|ladinagemtotal}]]]]}}` },
            { nome: 'Luta', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Luta}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}` },
            { nome: 'Misticismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Misticismo}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|misticismototal}]]]]}}` },
            { nome: 'Nobreza', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Nobreza}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|nobrezatotal}]]]]}}` },
            { nome: 'Ofício', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ofício @{${getCharacterNameForMacro()}|oficionome}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|oficiototal}]]]]}}` },
            { nome: 'Percepção', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Percepção}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|percepcaototal}]]]]}}` },
            { nome: 'Pilotagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pilotagem}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pilotagemtotal}]]]]}}` },
            { nome: 'Pontaria', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pontaria}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pontariatotal}]]]]}}` },
            { nome: 'Reflexos', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Reflexos}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|reflexostotal}]]]]}}` },
            { nome: 'Religião', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Religião}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|religiaototal}]]]]}}` },
            { nome: 'Sobrevivência', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Sobrevivência}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|sobrevivenciatotal}]]]]}}` },
            { nome: 'Vontade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Vontade}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|vontadetotal}]]]]}}` }
        ];

        // Lista visual
        const skillList = document.createElement('div');
        skillList.style.display = 'flex';
        skillList.style.flexDirection = 'column';
        skillList.style.gap = '6px';
        skillList.style.marginTop = '2px';
        popup.appendChild(skillList);

        function updateSkillList() {
            // Remove todos os tooltips existentes antes de atualizar a lista
            const existingTooltips = document.querySelectorAll('[style*="z-index: 10002"]');
            existingTooltips.forEach(tooltip => {
                if (tooltip.style.position === 'fixed' && tooltip.style.background.includes('rgba(0, 0, 0, 0.9)')) {
                    tooltip.remove();
                }
            });

            const filter = searchComponent.getValue().trim().toLowerCase();
            const favorites = getFavorites();

            // Filtra e ordena as skills
            let filteredSkills = skills.filter(s => s.nome.toLowerCase().includes(filter));

            // Separa favoritos e não-favoritos
            const favoriteSkills = filteredSkills.filter(s => favorites.includes(s.nome));
            const nonFavoriteSkills = filteredSkills.filter(s => !favorites.includes(s.nome));

            // Combina as listas com favoritos no topo
            const orderedSkills = [...favoriteSkills, ...nonFavoriteSkills];

            skillList.innerHTML = '';

            // Verifica se não há skills encontradas durante a filtragem
            if (orderedSkills.length === 0 && filter.length > 0) {
                const noResultsMessage = createNoResultsMessage(filter, 'perícia', 'blue');
                skillList.appendChild(noResultsMessage);
                return;
            }

            orderedSkills.forEach(skill => {
                const isFavorite = favorites.includes(skill.nome);

                const skillContainer = document.createElement('div');
                skillContainer.style.display = 'flex';
                skillContainer.style.alignItems = 'center';
                skillContainer.style.gap = '8px';
                skillContainer.style.background = isFavorite ? 'rgba(110, 198, 255, 0.1)' : 'transparent';
                skillContainer.style.borderRadius = '6px';
                skillContainer.style.padding = '2px';

                // Botão principal da skill
                const btn = document.createElement('button');



                // Cria o conteúdo do botão centralizado
                const btnContent = document.createElement('div');
                btnContent.style.display = 'flex';
                btnContent.style.alignItems = 'center';
                btnContent.style.justifyContent = 'center';
                btnContent.style.width = '100%';
                btnContent.style.padding = '0 8px';

                const skillName = document.createElement('span');
                skillName.textContent = skill.nome;
                skillName.style.textAlign = 'center';
                skillName.style.fontWeight = 'bold';
                btnContent.appendChild(skillName);

                btn.appendChild(btnContent);
                btn.style.flex = '1';
                btn.style.background = '#23243a';
                btn.style.color = '#fff';
                btn.style.border = '1px solid #6ec6ff';
                btn.style.borderRadius = '6px';
                btn.style.padding = '8px 0';
                btn.style.fontSize = '15px';
                btn.style.fontWeight = 'bold';
                btn.style.cursor = 'pointer';
                btn.style.transition = 'all 0.2s';
                btn.onmouseover = () => {
                    btn.style.background = '#6ec6ff';
                    btn.style.color = '#23243a';
                };
                btn.onmouseout = () => {
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';
                };

                // Adiciona hover com tooltip detalhado da skill
                let tooltipInstance = null;
                let tooltipTimeout = null;

                btn.onmouseenter = () => {
                    // Verifica se existe descrição para esta skill
                    const skillData = SKILLS_DATA[skill.nome];
                    if (!skillData || !skillData.descricao) return;

                    // Remove tooltip existente
                    if (tooltipInstance) {
                        tooltipInstance.hide();
                        tooltipInstance = null;
                    }

                    // Limpa timeout existente
                    if (tooltipTimeout) {
                        clearTimeout(tooltipTimeout);
                        tooltipTimeout = null;
                    }

                    // Prepara dados para o tooltip - apenas a descrição
                    const description = skillData.descricao;

                    const tooltipConfig = {
                        title: skill.nome,
                        description: description,
                        theme: 'blue',
                        tags: [
                            { text: 'Perícia', bgColor: '#6ec6ff', color: '#23243a' }
                        ]
                    };

                    // Cria o tooltip usando o componente
                    tooltipInstance = createTooltip(tooltipConfig);
                    tooltipInstance.show(btn);
                };

                btn.onmouseleave = () => {
                    if (tooltipInstance) {
                        tooltipInstance.hide();
                        tooltipInstance = null;
                    }
                };

                btn.onclick = (e) => {
                    // Remove tooltip se existir
                    if (tooltipInstance) {
                        tooltipInstance.hide();
                        tooltipInstance = null;
                    }

                    // Se CTRL está pressionado, abre o modal de detalhamento
                    if (e.ctrlKey) {
                        createSkillDetailModal(skill.nome);
                    } else {
                        // Comportamento padrão: faz a rolagem normal
                        sendToChat(skill.comando);
                        popup.remove();
                        const overlay = document.getElementById('skills-overlay');
                        if (overlay) overlay.remove();
                    }
                };

                // Botão de pin/favorito
                const pinBtn = document.createElement('button');
                pinBtn.innerHTML = isFavorite ? '📌' : '📍';
                pinBtn.style.background = 'none';
                pinBtn.style.border = 'none';
                pinBtn.style.color = isFavorite ? '#6ec6ff' : '#666';
                pinBtn.style.fontSize = '14px';
                pinBtn.style.cursor = 'pointer';
                pinBtn.style.padding = '4px';
                pinBtn.style.borderRadius = '4px';
                pinBtn.style.transition = 'all 0.2s';
                pinBtn.style.minWidth = '24px';
                pinBtn.style.height = '24px';
                pinBtn.style.display = 'flex';
                pinBtn.style.alignItems = 'center';
                pinBtn.style.justifyContent = 'center';
                pinBtn.title = isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';

                pinBtn.onmouseover = () => {
                    pinBtn.style.background = 'rgba(110, 198, 255, 0.2)';
                    pinBtn.style.color = '#6ec6ff';
                };
                pinBtn.onmouseout = () => {
                    pinBtn.style.background = 'none';
                    pinBtn.style.color = isFavorite ? '#6ec6ff' : '#666';
                };
                pinBtn.onclick = (e) => {
                    e.stopPropagation(); // Previne que o botão principal seja clicado
                    toggleFavorite(skill.nome);
                    updateSkillList(); // Atualiza a lista para refletir as mudanças
                };

                skillContainer.appendChild(btn);
                skillContainer.appendChild(pinBtn);
                skillList.appendChild(skillContainer);
            });
        }
        updateSkillList();

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }

    // Templates reutilizáveis para Spells
    const spellTemplates = {
        createSpell: (spellData) => {
            return {
                nome: spellData.nome,
                comando: spellData.comando,
                onClick: () => createSpellCastPopup(spellData.nome, spellData.nome, spellData.comando)
            };
        }
    };
    // Função para criar popup de Miscelâneos
    function createMiscPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('misc-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('misc-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'misc-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'misc-popup';
        popup.className = 'roll20-popup roll20-popup-orange';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #ffb86c';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '400px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ffb86c',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('misc-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Miscelâneos';
        title.style.color = '#ffb86c';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold'; header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Lista de módulos (cards)
        const modulesList = document.createElement('div');
        modulesList.style.display = 'flex';
        modulesList.style.flexDirection = 'column';
        modulesList.style.gap = '16px';
        modulesList.style.marginTop = '10px';
        popup.appendChild(modulesList);

        // Card: Pratos Especiais
        const pratosCard = document.createElement('div');
        pratosCard.style.background = '#23243a';
        pratosCard.style.border = '1.5px solid #ffb86c';
        pratosCard.style.borderRadius = '8px';
        pratosCard.style.padding = '16px';
        pratosCard.style.cursor = 'pointer';
        pratosCard.style.transition = 'all 0.2s';
        pratosCard.onmouseover = () => {
            pratosCard.style.background = '#2d2e4a';
        };
        pratosCard.onmouseout = () => {
            pratosCard.style.background = '#23243a';
        };
        pratosCard.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('misc-overlay');
            if (overlay) overlay.remove();
            createPratosEspeciaisPopup();
        };
        const pratosTitle = document.createElement('div');
        pratosTitle.textContent = 'Pratos Especiais';
        pratosTitle.style.color = '#ffb86c';
        pratosTitle.style.fontSize = '16px';
        pratosTitle.style.fontWeight = 'bold';
        pratosTitle.style.marginBottom = '6px';
        pratosCard.appendChild(pratosTitle);
        const pratosDesc = document.createElement('div');
        pratosDesc.textContent = 'Comidas raras que concedem bônus únicos. Disponibilidade e efeitos definidos pelo mestre.';
        pratosDesc.style.color = '#ecf0f1';
        pratosDesc.style.fontSize = '13px';
        pratosCard.appendChild(pratosDesc);
        modulesList.appendChild(pratosCard);

        // Card: Bebidas Artonianas
        const bebidasCard = document.createElement('div');
        bebidasCard.style.background = '#23243a';
        bebidasCard.style.border = '1.5px solid #ffb86c';
        bebidasCard.style.borderRadius = '8px';
        bebidasCard.style.padding = '16px';
        bebidasCard.style.cursor = 'pointer';
        bebidasCard.style.transition = 'all 0.2s';
        bebidasCard.onmouseover = () => {
            bebidasCard.style.background = '#2d2e4a';
        };
        bebidasCard.onmouseout = () => {
            bebidasCard.style.background = '#23243a';
        };
        bebidasCard.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('misc-overlay');
            if (overlay) overlay.remove();
            createBebidasArtonianasPopup();
        };
        const bebidasTitle = document.createElement('div');
        bebidasTitle.textContent = 'Bebidas Artonianas';
        bebidasTitle.style.color = '#ffb86c';
        bebidasTitle.style.fontSize = '16px';
        bebidasTitle.style.fontWeight = 'bold';
        bebidasTitle.style.marginBottom = '6px';
        bebidasCard.appendChild(bebidasTitle);
        const bebidasDesc = document.createElement('div');
        bebidasDesc.textContent = 'Bebidas alcoólicas e não alcoólicas que concedem bônus únicos. Efeitos duram 24 horas.';
        bebidasDesc.style.color = '#ecf0f1';
        bebidasDesc.style.fontSize = '13px';
        bebidasCard.appendChild(bebidasDesc);
        modulesList.appendChild(bebidasCard);

        // Card: Lista de Condições
        const conditionsCard = document.createElement('div');
        conditionsCard.style.background = '#23243a';
        conditionsCard.style.border = '1.5px solid #ffb86c';
        conditionsCard.style.borderRadius = '8px';
        conditionsCard.style.padding = '16px';
        conditionsCard.style.cursor = 'pointer';
        conditionsCard.style.transition = 'all 0.2s';
        conditionsCard.onmouseover = () => {
            conditionsCard.style.background = '#2d2e4a';
        };
        conditionsCard.onmouseout = () => {
            conditionsCard.style.background = '#23243a';
        };
        conditionsCard.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('misc-overlay');
            if (overlay) overlay.remove();
            createConditionsPopup();
        };
        const conditionsTitle = document.createElement('div');
        conditionsTitle.textContent = 'Lista de Condições';
        conditionsTitle.style.color = '#ffb86c';
        conditionsTitle.style.fontSize = '16px';
        conditionsTitle.style.fontWeight = 'bold';
        conditionsTitle.style.marginBottom = '6px';
        conditionsCard.appendChild(conditionsTitle);
        const conditionsDesc = document.createElement('div');
        conditionsDesc.textContent = 'Condições que afetam o personagem.';
        conditionsDesc.style.color = '#ecf0f1';
        conditionsDesc.style.fontSize = '13px';
        conditionsCard.appendChild(conditionsDesc);
        modulesList.appendChild(conditionsCard);

        // Card: Poções
        const potionsCard = document.createElement('div');
        potionsCard.style.background = '#23243a';
        potionsCard.style.border = '1.5px solid #ffb86c';
        potionsCard.style.borderRadius = '8px';
        potionsCard.style.padding = '16px';
        potionsCard.style.cursor = 'pointer';
        potionsCard.style.transition = 'all 0.2s';
        potionsCard.onmouseover = () => {
            potionsCard.style.background = '#2d2e4a';
        };
        potionsCard.onmouseout = () => {
            potionsCard.style.background = '#23243a';
        };
        potionsCard.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('misc-overlay');
            if (overlay) overlay.remove();
            createPocoesPopup();
        };
        const potionsTitle = document.createElement('div');
        potionsTitle.textContent = 'Poções';
        potionsTitle.style.color = '#ffb86c';
        potionsTitle.style.fontSize = '16px';
        potionsTitle.style.fontWeight = 'bold';
        potionsTitle.style.marginBottom = '6px';
        potionsCard.appendChild(potionsTitle);
        const potionsDesc = document.createElement('div');
        potionsDesc.textContent = 'Poções mágicas que concedem efeitos temporários. Efeitos duram por cena.';
        potionsDesc.style.color = '#ecf0f1';
        potionsDesc.style.fontSize = '13px';
        potionsCard.appendChild(potionsDesc);
        modulesList.appendChild(potionsCard);

        // Card: Grimório de Magias
        const grimorioCard = document.createElement('div');
        grimorioCard.style.background = '#23243a';
        grimorioCard.style.border = '1.5px solid #ffb86c';
        grimorioCard.style.borderRadius = '8px';
        grimorioCard.style.padding = '16px';
        grimorioCard.style.cursor = 'pointer';
        grimorioCard.style.transition = 'all 0.2s';
        grimorioCard.onmouseover = () => {
            grimorioCard.style.background = '#2d2e4a';
        };
        grimorioCard.onmouseout = () => {
            grimorioCard.style.background = '#23243a';
        };
        grimorioCard.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('misc-overlay');
            if (overlay) overlay.remove();
            createGrimorioPopup();
        };
        const grimorioTitle = document.createElement('div');
        grimorioTitle.textContent = 'Grimório de Magias';
        grimorioTitle.style.color = '#ffb86c';
        grimorioTitle.style.fontSize = '16px';
        grimorioTitle.style.fontWeight = 'bold';
        grimorioTitle.style.marginBottom = '6px';
        grimorioCard.appendChild(grimorioTitle);
        const grimorioDesc = document.createElement('div');
        grimorioDesc.textContent = 'Catálogo completo de magias organizadas por tradições e círculos.';
        grimorioDesc.style.color = '#ecf0f1';
        grimorioDesc.style.fontSize = '13px';
        grimorioCard.appendChild(grimorioDesc);
        modulesList.appendChild(grimorioCard);

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'orange');
    }

    // Função para carregar magias diretamente
    async function loadSpellsDirectly() {
        const spells = [];

        // Mapeamento de escolas
        const escolaMap = {
            'abj': 'Abjuração',
            'adv': 'Adivinhação',
            'con': 'Conjuração',
            'enc': 'Encantamento',
            'evo': 'Evocação',
            'ilu': 'Ilusão',
            'nec': 'Necromancia',
            'tra': 'Transmutação'
        };

        // Mapeamento de execução
        const execucaoMap = {
            'acao': 'Ação',
            'action': 'Ação',
            'bonus': 'Ação Bônus',
            'reacao': 'Reação',
            'reaction': 'Reação',
            'free': 'Livre',
            'full': 'Ação Completa',
            'minute': '1 Minuto',
            'hour': '1 Hora',
            'move': 'Movimento',
            'special': 'Especial',
            'ritual': 'Ritual'
        };

        // Mapeamento de círculos
        const circuloMap = {
            '1': '1º Círculo',
            '2': '2º Círculo',
            '3': '3º Círculo',
            '4': '4º Círculo',
            '5': '5º Círculo'
        };

        // Dados de magias gerados dinamicamente durante o build
        const spellsData = require('./generated-spells-data.js');

        // Processar dados embutidos
        for (const tradition in spellsData) {
            for (const circle in spellsData[tradition]) {
                for (const school in spellsData[tradition][circle]) {
                    for (const spellKey in spellsData[tradition][circle][school]) {
                        const spell = spellsData[tradition][circle][school][spellKey];
                        if (spell.system && spell.system.circulo) {
                            spells.push({
                                ...spell,
                                tradition: tradition,
                                escola: escolaMap[spell.system.escola] || spell.system.escola,
                                execucao: execucaoMap[spell.system.ativacao?.execução] || spell.system.ativacao?.execução || '',
                                circulo: spell.system.circulo,
                                circuloDisplay: circuloMap[spell.system.circulo] || `${spell.system.circulo}º Círculo`
                            });
                        }
                    }
                }
            }
        }

        console.log(`Carregadas ${spells.length} magias do arquivo JSON`);
        return spells;
    }



    // Função para mostrar detalhes da magia (global)
    function showSpellDetails(spell) {
        // Overlay para fechar
        const spellDetailsOverlay = document.createElement('div');
        spellDetailsOverlay.style.position = 'fixed';
        spellDetailsOverlay.style.top = '0';
        spellDetailsOverlay.style.left = '0';
        spellDetailsOverlay.style.width = '100%';
        spellDetailsOverlay.style.height = '100%';
        spellDetailsOverlay.style.background = 'rgba(0,0,0,0.5)';
        spellDetailsOverlay.style.zIndex = '10001';

        // Criar popup de detalhes da magia
        const detailsPopup = document.createElement('div');
        detailsPopup.style.position = 'fixed';
        detailsPopup.style.top = '50%';
        detailsPopup.style.left = '50%';
        detailsPopup.style.transform = 'translate(-50%, -50%)';
        detailsPopup.style.background = 'rgba(30, 30, 40, 0.98)';
        detailsPopup.style.border = '2px solid #9c27b0';
        detailsPopup.style.borderRadius = '12px';
        detailsPopup.style.padding = '24px';
        detailsPopup.style.zIndex = '10002';
        detailsPopup.style.maxWidth = '600px';
        detailsPopup.style.maxHeight = '80vh';
        detailsPopup.style.overflowY = 'auto';
        detailsPopup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';

        // Função para fechar o popup
        function closePopup() {
            spellDetailsOverlay.remove();
            detailsPopup.remove();
        }

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '20px';

        // Container para título e ícone
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.flex = '1';

        // Ícone da magia com fallback
        const icon = document.createElement('img');
        icon.style.width = '48px';
        icon.style.height = '48px';
        icon.style.borderRadius = '6px';
        icon.style.marginRight = '16px';
        icon.style.border = '2px solid #9c27b0';

        // Carregar ícone com fallback
        loadSpellIcon(spell.name, spell.img).then(iconUrl => {
            icon.src = iconUrl;
        }).catch(error => {
            console.warn(`Erro ao carregar ícone para "${spell.name}":`, error);
            icon.src = DEFAULT_ICON;
        });

        const title = document.createElement('h3');
        title.textContent = spell.name;
        title.style.color = '#9c27b0';
        title.style.margin = '0';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';

        titleContainer.appendChild(icon);
        titleContainer.appendChild(title);

        // Usar o componente de close button
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#9c27b0',
            onClick: closePopup
        });

        header.appendChild(titleContainer);
        header.appendChild(closeBtn.render());

        // Informações da magia
        const info = document.createElement('div');
        info.style.display = 'flex';
        info.style.gap = '8px';
        info.style.marginBottom = '16px';
        info.style.flexWrap = 'wrap';

        const circleChip = document.createElement('span');
        circleChip.textContent = spell.circuloDisplay || `${spell.circulo}º Círculo`;
        circleChip.style.background = '#9c27b0';
        circleChip.style.color = '#fff';
        circleChip.style.padding = '6px 12px';
        circleChip.style.borderRadius = '16px';
        circleChip.style.fontSize = '14px';
        circleChip.style.fontWeight = 'bold';

        const schoolChip = document.createElement('span');
        schoolChip.textContent = spell.escola;
        schoolChip.style.background = '#4caf50';
        schoolChip.style.color = '#fff';
        schoolChip.style.padding = '6px 12px';
        schoolChip.style.borderRadius = '16px';
        schoolChip.style.fontSize = '14px';
        schoolChip.style.fontWeight = 'bold';

        const executionChip = document.createElement('span');
        executionChip.textContent = spell.system?.ativacao?.execucao || 'N/A';
        executionChip.style.background = '#ff9800';
        executionChip.style.color = '#fff';
        executionChip.style.padding = '6px 12px';
        executionChip.style.borderRadius = '16px';
        executionChip.style.fontSize = '14px';
        executionChip.style.fontWeight = 'bold';

        info.appendChild(circleChip);
        info.appendChild(schoolChip);
        info.appendChild(executionChip);

        // Informações detalhadas da magia
        const detailsContainer = document.createElement('div');
        detailsContainer.style.marginBottom = '20px';

        const detailsGrid = document.createElement('div');
        detailsGrid.style.display = 'grid';
        detailsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        detailsGrid.style.gap = '12px';
        detailsGrid.style.marginBottom = '16px';

        // Alcance
        if (spell.system?.alcance) {
            const rangeItem = createDetailItem('Alcance', spell.system.alcance);
            detailsGrid.appendChild(rangeItem);
        }

        // Duração
        if (spell.system?.duracao) {
            const durationItem = createDetailItem('Duração', spell.system.duracao);
            detailsGrid.appendChild(durationItem);
        }

        // Alvo/Área
        if (spell.system?.alvo) {
            const targetItem = createDetailItem('Alvo/Área', spell.system.alvo);
            detailsGrid.appendChild(targetItem);
        }

        // Resistência
        if (spell.system?.resistencia) {
            const resistanceItem = createDetailItem('Resistência', spell.system.resistencia);
            detailsGrid.appendChild(resistanceItem);
        }

        // Custo de PM
        if (spell.system?.custo) {
            const costItem = createDetailItem('Custo PM', spell.system.custo);
            detailsGrid.appendChild(costItem);
        }

        // Tradição
        const traditionItem = createDetailItem('Tradição', spell.tradition.charAt(0).toUpperCase() + spell.tradition.slice(1));
        detailsGrid.appendChild(traditionItem);

        detailsContainer.appendChild(detailsGrid);

        // Descrição completa
        const description = document.createElement('div');
        description.innerHTML = spell.system?.description?.value || 'Descrição não disponível';
        description.style.color = '#fff';
        description.style.fontSize = '16px';
        description.style.lineHeight = '1.6';
        description.style.marginBottom = '16px';

        // Função auxiliar para criar itens de detalhes
        function createDetailItem(label, value) {
            const item = document.createElement('div');
            item.style.background = 'rgba(35, 36, 58, 0.8)';
            item.style.border = '1px solid #9c27b0';
            item.style.borderRadius = '8px';
            item.style.padding = '12px';

            const labelElement = document.createElement('div');
            labelElement.textContent = label;
            labelElement.style.color = '#9c27b0';
            labelElement.style.fontSize = '12px';
            labelElement.style.fontWeight = 'bold';
            labelElement.style.marginBottom = '4px';
            labelElement.style.textTransform = 'uppercase';

            const valueElement = document.createElement('div');
            valueElement.textContent = value;
            valueElement.style.color = '#fff';
            valueElement.style.fontSize = '14px';

            item.appendChild(labelElement);
            item.appendChild(valueElement);
            return item;
        }

        detailsPopup.appendChild(header);
        detailsPopup.appendChild(info);
        detailsPopup.appendChild(detailsContainer);
        detailsPopup.appendChild(description);

        // Seção de Aprimoramentos
        if (spell.aprimoramentos && spell.aprimoramentos.length > 0) {
            const aprimoramentosSection = document.createElement('div');
            aprimoramentosSection.style.marginBottom = '20px';

            const aprimoramentosTitle = document.createElement('h4');
            aprimoramentosTitle.textContent = 'Aprimoramentos';
            aprimoramentosTitle.style.color = '#ff9800';
            aprimoramentosTitle.style.fontSize = '18px';
            aprimoramentosTitle.style.fontWeight = 'bold';
            aprimoramentosTitle.style.marginBottom = '12px';
            aprimoramentosTitle.style.borderBottom = '2px solid #ff9800';
            aprimoramentosTitle.style.paddingBottom = '8px';

            aprimoramentosSection.appendChild(aprimoramentosTitle);

            // Lista de aprimoramentos
            spell.aprimoramentos.forEach((aprimoramento) => {
                const aprimoramentoItem = document.createElement('div');
                aprimoramentoItem.style.background = 'rgba(35, 36, 58, 0.8)';
                aprimoramentoItem.style.border = '1px solid #ff9800';
                aprimoramentoItem.style.borderRadius = '8px';
                aprimoramentoItem.style.padding = '12px';
                aprimoramentoItem.style.marginBottom = '8px';

                // Cabeçalho do aprimoramento
                const aprimoramentoHeader = document.createElement('div');
                aprimoramentoHeader.style.display = 'flex';
                aprimoramentoHeader.style.justifyContent = 'space-between';
                aprimoramentoHeader.style.alignItems = 'center';
                aprimoramentoHeader.style.marginBottom = '8px';

                // Custo do aprimoramento
                const custoElement = document.createElement('span');
                custoElement.textContent = `+${aprimoramento.custo} PM`;
                custoElement.style.background = '#ff9800';
                custoElement.style.color = '#fff';
                custoElement.style.padding = '4px 8px';
                custoElement.style.borderRadius = '12px';
                custoElement.style.fontSize = '12px';
                custoElement.style.fontWeight = 'bold';

                // Tipo do aprimoramento
                const tipoElement = document.createElement('span');
                tipoElement.textContent = aprimoramento.aumenta ? 'Aumenta Custo' : 'Modifica Efeito';
                tipoElement.style.background = aprimoramento.aumenta ? '#e91e63' : '#2196f3';
                tipoElement.style.color = '#fff';
                tipoElement.style.padding = '4px 8px';
                tipoElement.style.borderRadius = '12px';
                tipoElement.style.fontSize = '11px';
                tipoElement.style.fontWeight = 'bold';

                aprimoramentoHeader.appendChild(custoElement);
                aprimoramentoHeader.appendChild(tipoElement);

                // Descrição do aprimoramento
                const descricaoElement = document.createElement('div');
                descricaoElement.textContent = aprimoramento.descricao;
                descricaoElement.style.color = '#fff';
                descricaoElement.style.fontSize = '14px';
                descricaoElement.style.lineHeight = '1.4';

                aprimoramentoItem.appendChild(aprimoramentoHeader);
                aprimoramentoItem.appendChild(descricaoElement);

                aprimoramentosSection.appendChild(aprimoramentoItem);
            });

            detailsPopup.appendChild(aprimoramentosSection);
        }

        // Container para botões
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '20px';

        // Verificar se a magia já foi aprendida
        const isLearned = isSpellLearned(spell.name);

        // Botão Aprender/Esquecer
        const learnButton = document.createElement('button');
        learnButton.textContent = isLearned ? 'Esquecer' : 'Aprender';
        learnButton.style.background = isLearned ? '#f44336' : '#2196f3';
        learnButton.style.color = '#fff';
        learnButton.style.border = 'none';
        learnButton.style.borderRadius = '8px';
        learnButton.style.padding = '12px 20px';
        learnButton.style.fontSize = '14px';
        learnButton.style.fontWeight = 'bold';
        learnButton.style.cursor = 'pointer';
        learnButton.style.flex = '1';
        learnButton.style.transition = 'all 0.2s ease';

        learnButton.onmouseover = () => {
            learnButton.style.background = isLearned ? '#d32f2f' : '#1976d2';
            learnButton.style.transform = 'translateY(-1px)';
        };

        learnButton.onmouseout = () => {
            learnButton.style.background = isLearned ? '#f44336' : '#2196f3';
            learnButton.style.transform = 'translateY(0)';
        };

        learnButton.onclick = () => {
            toggleLearnedSpell(spell.name);
            closePopup(); // Fechar o popup de detalhes
        };

        // Botão de compartilhar
        const shareButton = document.createElement('button');
        shareButton.textContent = 'Compartilhar';
        shareButton.style.background = '#4caf50';
        shareButton.style.color = '#fff';
        shareButton.style.border = 'none';
        shareButton.style.borderRadius = '8px';
        shareButton.style.padding = '12px 20px';
        shareButton.style.fontSize = '14px';
        shareButton.style.fontWeight = 'bold';
        shareButton.style.cursor = 'pointer';
        shareButton.style.flex = '1';
        shareButton.style.transition = 'all 0.2s ease';

        shareButton.onmouseover = () => {
            shareButton.style.background = '#45a049';
            shareButton.style.transform = 'translateY(-1px)';
        };

        shareButton.onmouseout = () => {
            shareButton.style.background = '#4caf50';
            shareButton.style.transform = 'translateY(0)';
        };

        shareButton.onclick = () => {
            shareSpellToChat(spell);
            // Fechar todos os popups abertos
            closeAllPopups();
        };

        buttonContainer.appendChild(learnButton);
        buttonContainer.appendChild(shareButton);
        detailsPopup.appendChild(buttonContainer);

        // Configurar overlay para fechar ao clicar
        spellDetailsOverlay.onclick = closePopup;

        document.body.appendChild(spellDetailsOverlay);
        document.body.appendChild(detailsPopup);
    }

    // Função para compartilhar magia no chat usando template T20 (global)
    function shareSpellToChat(spell) {
        try {
            // Obter nome do personagem usando a mesma função do sistema existente
            const charName = getCharacterName();

            // Preparar dados da magia
            const spellData = {
                name: spell.name,
                type: spell.tradition.charAt(0).toUpperCase() + spell.tradition.slice(1),
                execution: spell.system?.ativacao?.type || 'Padrão',
                duration: spell.system?.duracao || 'Cena',
                range: spell.system?.alcance || 'Curto',
                target: spell.system?.alvo || '1 Alvo',
                resistance: spell.system?.resistencia || 'Nenhuma',
                description: spell.system?.description?.value || 'Descrição não disponível'
            };

            // Criar template T20 usando o mesmo formato do sistema existente
            const msg = `&{template:spell}{{character=@{${charName}|character_name}}}{{spellname=${spellData.name}}}{{type=${spellData.type}}}{{execution=${spellData.execution}}}{{duration=${spellData.duration}}}{{range=${spellData.range}}}{{targetarea=${spellData.target}}}{{resistance=${spellData.resistance}}}{{description=${spellData.description}}}{{cd=[[@{${charName}|cdtotal}+0]]}}`;

            // Enviar para o chat usando a mesma função do sistema existente
            sendToChat(msg);

            // Feedback visual
            const shareButton = document.querySelector('button[onclick*="shareSpellToChat"]');
            if (shareButton) {
                const originalText = shareButton.textContent;
                shareButton.textContent = '✅ Enviado!';
                shareButton.style.background = '#4caf50';
                setTimeout(() => {
                    shareButton.textContent = originalText;
                }, 2000);
            }

        } catch (error) {
            console.error('Erro ao compartilhar magia:', error);
            alert('Erro ao compartilhar magia no chat. Verifique o console para mais detalhes.');
        }
    }

    // Função para criar popup do Grimório de Magias
    async function createGrimorioPopup() {


        // Remove popup existente se houver
        const existingPopup = document.getElementById('grimorio-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('grimorio-overlay');
        if (existingOverlay) existingOverlay.remove();

        // CARREGA AS MAGIAS AQUI - ADICIONAR ESTE BLOCO
        if (!window.grimorioSpellsCache) {
            console.log('Carregando todas as magias...');

            // Mostrar indicador de carregamento
            const loadingIndicator = document.createElement('div');
            loadingIndicator.id = 'grimorio-loading';
            loadingIndicator.style.position = 'fixed';
            loadingIndicator.style.top = '50%';
            loadingIndicator.style.left = '50%';
            loadingIndicator.style.transform = 'translate(-50%, -50%)';
            loadingIndicator.style.background = 'rgba(30, 30, 40, 0.98)';
            loadingIndicator.style.border = '2px solid #9c27b0';
            loadingIndicator.style.borderRadius = '12px';
            loadingIndicator.style.padding = '40px';
            loadingIndicator.style.zIndex = '10003';
            loadingIndicator.style.textAlign = 'center';
            loadingIndicator.style.color = '#9c27b0';
            loadingIndicator.style.fontSize = '18px';
            loadingIndicator.style.fontWeight = 'bold';

            loadingIndicator.innerHTML = `
                <div style="margin-bottom: 20px;">🔄</div>
                <div>Carregando Grimório de Magias...</div>
                <div style="font-size: 14px; margin-top: 10px; color: #ccc;">Isso pode levar alguns segundos</div>
            `;

            document.body.appendChild(loadingIndicator);

            try {
                // Carregar magias diretamente usando fetch
                window.grimorioSpellsCache = await loadSpellsDirectly();
                console.log(`Carregadas ${window.grimorioSpellsCache.length} magias no total`);
            } catch (error) {
                console.error('Erro ao carregar magias:', error);
                window.grimorioSpellsCache = [];
            } finally {
                // Remover indicador de carregamento
                const loadingElement = document.getElementById('grimorio-loading');
                if (loadingElement) {
                    loadingElement.remove();
                }
            }
        }

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'grimorio-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'grimorio-popup';
        popup.className = 'roll20-popup roll20-popup-purple';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #9c27b0';
        popup.style.borderRadius = '12px';
        popup.style.padding = '20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '800px';
        popup.style.maxHeight = '700px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '20px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#9c27b0',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('grimorio-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Grimório de Magias';
        title.style.color = '#9c27b0';
        title.style.margin = '0';
        title.style.fontSize = '20px';
        title.style.fontWeight = 'bold';
        title.title = 'Atalho: Ctrl + G';



        // Container para título e atalho
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.flexDirection = 'column';
        titleContainer.style.alignItems = 'flex-start';

        const shortcutText = document.createElement('div');
        shortcutText.textContent = 'Atalho: Ctrl + G';
        shortcutText.style.color = '#666';
        shortcutText.style.fontSize = '12px';
        shortcutText.style.marginTop = '2px';

        titleContainer.appendChild(title);
        titleContainer.appendChild(shortcutText);

        header.appendChild(titleContainer);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Campo de busca principal
        const searchInput = createSearchInput({
            placeholder: 'Filtrar magias por nome...',
            theme: 'purple',
            marginBottom: '15px',
            onInput: (value) => {
                filterSpells(value);
            }
        });
        popup.appendChild(searchInput.container);

        // Filtros por chips selecionáveis


        // Abas para tradições
        const tabsContainer = document.createElement('div');
        tabsContainer.style.display = 'flex';
        tabsContainer.style.marginBottom = '20px';
        tabsContainer.style.borderBottom = '2px solid #9c27b0';

        const traditions = [
            { id: 'todas', name: 'Todas', color: '#ffffff' },
            { id: 'arcana', name: 'Arcana', color: '#9c27b0' },
            { id: 'divina', name: 'Divina', color: '#4caf50' },
            { id: 'universal', name: 'Universal', color: '#ff9800' }
        ];

        let activeTab = 'todas';

        traditions.forEach(tradition => {
            const tab = document.createElement('div');
            tab.id = `tab-${tradition.id}`;
            tab.textContent = tradition.name;
            tab.style.padding = '12px 20px';
            tab.style.cursor = 'pointer';
            tab.style.borderBottom = `3px solid transparent`;
            tab.style.color = tradition.id === activeTab ? tradition.color : '#666';
            tab.style.fontWeight = tradition.id === activeTab ? tradition.color : 'normal';
            tab.style.transition = 'all 0.2s';
            tab.style.borderRadius = '6px 6px 0 0';

            tab.onclick = () => {
                // Remove active de todas as abas
                traditions.forEach(t => {
                    const tabElement = document.getElementById(`tab-${t.id}`);
                    if (tabElement) {
                        tabElement.style.color = '#666';
                        tabElement.style.fontWeight = 'normal';
                        tabElement.style.borderBottom = '3px solid transparent';
                    }
                });

                // Ativa a aba clicada
                tab.style.color = tradition.color;
                tab.style.fontWeight = 'bold';
                tab.style.borderBottom = `3px solid ${tradition.color}`;
                activeTab = tradition.id;

                // Atualiza o conteúdo da aba
                updateTabContent(tradition.id);
            };

            if (tradition.id === activeTab) {
                tab.style.color = tradition.color;
                tab.style.fontWeight = 'bold';
                tab.style.borderBottom = `3px solid ${tradition.color}`;
            }

            tabsContainer.appendChild(tab);
        });

        popup.appendChild(tabsContainer);

        // Conteúdo das abas
        const tabContent = document.createElement('div');
        tabContent.id = 'grimorio-tab-content';
        tabContent.style.flex = '1';
        tabContent.style.overflowY = 'auto';

        // Função para criar card de magia
        function createSpellCard(spell) {
            const card = document.createElement('div');
            card.style.background = 'rgba(35, 36, 58, 0.8)';
            card.style.border = '1px solid #9c27b0';
            card.style.borderRadius = '8px';
            card.style.padding = '16px';
            card.style.cursor = 'pointer';
            card.style.transition = 'all 0.2s';
            card.style.marginBottom = '8px';

            card.onmouseover = () => {
                card.style.background = 'rgba(45, 46, 74, 0.9)';
                card.style.borderColor = '#ba68c8';
                card.style.transform = 'translateY(-2px)';
            };

            card.onmouseout = () => {
                card.style.background = 'rgba(35, 36, 58, 0.8)';
                card.style.borderColor = '#9c27b0';
                card.style.transform = 'translateY(0)';
            };

            card.onclick = () => {
                showSpellDetails(spell);
            };

            // Cabeçalho da magia
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.alignItems = 'center';
            header.style.marginBottom = '12px';

            // Nome da magia
            const name = document.createElement('div');
            name.textContent = spell.name;
            name.style.color = '#fff';
            name.style.fontSize = '16px';
            name.style.fontWeight = 'bold';
            name.style.flex = '1';

            header.appendChild(name);

            // Informações da magia
            const info = document.createElement('div');
            info.style.display = 'flex';
            info.style.gap = '8px';
            info.style.marginBottom = '8px';
            info.style.flexWrap = 'wrap';

            // Círculo
            const circleChip = document.createElement('span');
            circleChip.textContent = spell.circuloDisplay || `${spell.circulo}º Círculo`;
            circleChip.style.background = '#9c27b0';
            circleChip.style.color = '#fff';
            circleChip.style.padding = '4px 8px';
            circleChip.style.borderRadius = '12px';
            circleChip.style.fontSize = '12px';
            circleChip.style.fontWeight = 'bold';

            // Escola
            const schoolChip = document.createElement('span');
            schoolChip.textContent = spell.escola;
            schoolChip.style.background = '#4caf50';
            schoolChip.style.color = '#fff';
            schoolChip.style.padding = '4px 8px';
            schoolChip.style.borderRadius = '12px';
            schoolChip.style.fontSize = '12px';
            schoolChip.style.fontWeight = 'bold';

            // Execução
            const executionChip = document.createElement('span');
            executionChip.textContent = spell.system?.ativacao?.execucao || 'N/A';
            executionChip.style.background = '#ff9800';
            executionChip.style.color = '#fff';
            executionChip.style.padding = '4px 8px';
            executionChip.style.borderRadius = '12px';
            executionChip.style.fontSize = '12px';
            executionChip.style.fontWeight = 'bold';

            info.appendChild(circleChip);
            info.appendChild(schoolChip);
            info.appendChild(executionChip);

            // Descrição resumida
            const description = document.createElement('div');
            const descText = spell.system?.description?.value || 'Descrição não disponível';
            description.textContent = descText.length > 150 ? descText.substring(0, 150) + '...' : descText;
            description.style.color = '#ccc';
            description.style.fontSize = '14px';
            description.style.lineHeight = '1.4';

            // Indicador de aprimoramentos
            if (spell.aprimoramentos && spell.aprimoramentos.length > 0) {
                const aprimoramentosIndicator = document.createElement('div');
                aprimoramentosIndicator.style.display = 'flex';
                aprimoramentosIndicator.style.alignItems = 'center';
                aprimoramentosIndicator.style.gap = '6px';
                aprimoramentosIndicator.style.marginTop = '8px';
                aprimoramentosIndicator.style.padding = '6px 10px';
                aprimoramentosIndicator.style.background = 'rgba(255, 152, 0, 0.1)';
                aprimoramentosIndicator.style.border = '1px solid rgba(255, 152, 0, 0.3)';
                aprimoramentosIndicator.style.borderRadius = '6px';

                const aprimoramentosIcon = document.createElement('span');
                aprimoramentosIcon.textContent = '⚡';
                aprimoramentosIcon.style.fontSize = '14px';

                const aprimoramentosText = document.createElement('span');
                aprimoramentosText.textContent = `${spell.aprimoramentos.length} aprimoramento${spell.aprimoramentos.length > 1 ? 's' : ''} disponível${spell.aprimoramentos.length > 1 ? 'eis' : ''}`;
                aprimoramentosText.style.color = '#ff9800';
                aprimoramentosText.style.fontSize = '12px';
                aprimoramentosText.style.fontWeight = 'bold';

                aprimoramentosIndicator.appendChild(aprimoramentosIcon);
                aprimoramentosIndicator.appendChild(aprimoramentosText);

                card.appendChild(header);
                card.appendChild(info);
                card.appendChild(description);
                card.appendChild(aprimoramentosIndicator);
            } else {
                card.appendChild(header);
                card.appendChild(info);
                card.appendChild(description);
            }

            return card;
        }



        // Função para atualizar o conteúdo da aba
        function updateTabContent(traditionId) {
            console.log(`Atualizando conteúdo da aba: ${traditionId}`);
            const content = tabContent;
            content.innerHTML = '';

            // Verificar se temos magias carregadas
            const spellsCache = window.grimorioSpellsCache || [];
            if (!spellsCache || spellsCache.length === 0) {
                // Placeholder para quando não há magias
                const placeholder = document.createElement('div');
                placeholder.style.display = 'flex';
                placeholder.style.flexDirection = 'column';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.padding = '40px 20px';
                placeholder.style.color = '#666';
                placeholder.style.textAlign = 'center';

                const placeholderIcon = document.createElement('div');
                placeholderIcon.textContent = '📚';
                placeholderIcon.style.fontSize = '48px';
                placeholderIcon.style.marginBottom = '15px';

                const placeholderTitle = document.createElement('div');
                placeholderTitle.textContent = 'Nenhuma magia registrada ainda';
                placeholderTitle.style.fontSize = '18px';
                placeholderTitle.style.fontWeight = 'bold';
                placeholderTitle.style.marginBottom = '8px';

                const placeholderDesc = document.createElement('div');
                placeholderDesc.textContent = 'As magias desta tradição serão exibidas aqui quando forem adicionadas ao sistema.';
                placeholderDesc.style.fontSize = '14px';
                placeholderDesc.style.lineHeight = '1.4';

                placeholder.appendChild(placeholderIcon);
                placeholder.appendChild(placeholderTitle);
                placeholder.appendChild(placeholderDesc);
                content.appendChild(placeholder);
                return;
            }

            // Filtrar magias por tradição
            let traditionSpells;
            if (traditionId === 'todas') {
                traditionSpells = spellsCache;
                console.log(`Encontradas ${traditionSpells.length} magias no total`);
            } else {
                traditionSpells = spellsCache.filter(spell => spell.tradition === traditionId);
                console.log(`Encontradas ${traditionSpells.length} magias para tradição ${traditionId}`);
            }

            if (traditionSpells.length === 0) {
                // Placeholder para tradição sem magias
                const placeholder = document.createElement('div');
                placeholder.style.display = 'flex';
                placeholder.style.flexDirection = 'column';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.padding = '40px 20px';
                placeholder.style.color = '#666';
                placeholder.style.textAlign = 'center';

                const placeholderIcon = document.createElement('div');
                placeholderIcon.textContent = '🔮';
                placeholderIcon.style.fontSize = '48px';
                placeholderIcon.style.marginBottom = '15px';

                const placeholderTitle = document.createElement('div');
                placeholderTitle.textContent = 'Nenhuma magia nesta tradição';
                placeholderTitle.style.fontSize = '18px';
                placeholderTitle.style.fontWeight = 'bold';
                placeholderTitle.style.marginBottom = '8px';

                const placeholderDesc = document.createElement('div');
                placeholderDesc.textContent = `Não há magias registradas para a tradição ${traditionId}.`;
                placeholderDesc.style.fontSize = '14px';
                placeholderDesc.style.lineHeight = '1.4';

                placeholder.appendChild(placeholderIcon);
                placeholder.appendChild(placeholderTitle);
                placeholder.appendChild(placeholderDesc);
                content.appendChild(placeholder);
                return;
            }

            // Contador de magias
            const spellCounter = document.createElement('div');
            spellCounter.style.color = '#9c27b0';
            spellCounter.style.fontSize = '14px';
            spellCounter.style.fontWeight = 'bold';
            spellCounter.style.marginBottom = '15px';
            spellCounter.style.textAlign = 'center';
            spellCounter.textContent = `${traditionSpells.length} magia${traditionSpells.length !== 1 ? 's' : ''} encontrada${traditionSpells.length !== 1 ? 's' : ''}`;
            content.appendChild(spellCounter);

            // Criar lista de magias
            const spellsList = document.createElement('div');
            spellsList.style.display = 'flex';
            spellsList.style.flexDirection = 'column';
            spellsList.style.gap = '10px';

            traditionSpells.forEach(spell => {
                const spellCard = createSpellCard(spell);
                spellsList.appendChild(spellCard);
            });

            content.appendChild(spellsList);
        }

        // Inicializa com a primeira aba
        updateTabContent(activeTab);

        // Função para recarregar o conteúdo do grimório
        function reloadGrimorioContent() {
            console.log('🔄 Recarregando conteúdo do grimório...');
            updateTabContent(activeTab);
        }

        // Função para filtrar magias
        function filterSpells(searchTerm) {
            console.log(`Filtrando magias por: ${searchTerm}`);

            // Filtrar magias localmente
            const spellsCache = window.grimorioSpellsCache || [];
            if (spellsCache && spellsCache.length > 0) {
                let filteredSpells = [...spellsCache];

                // Filtrar por tradição
                if (activeTab && activeTab !== 'todas') {
                    filteredSpells = filteredSpells.filter(spell => spell.tradition === activeTab);
                }

                // Filtrar por termo de busca
                if (searchTerm) {
                    const term = searchTerm.toLowerCase();
                    filteredSpells = filteredSpells.filter(spell =>
                        spell.name.toLowerCase().includes(term) ||
                        spell.escola.toLowerCase().includes(term) ||
                        (spell.system?.description?.value &&
                            spell.system.description.value.toLowerCase().includes(term))
                    );
                }

                // Ordenar magias por nome (padrão)
                filteredSpells.sort((a, b) => a.name.localeCompare(b.name));

                // Atualizar o cache temporariamente com as magias filtradas
                const originalCache = window.grimorioSpellsCache;
                window.grimorioSpellsCache = filteredSpells;
                reloadGrimorioContent();
                window.grimorioSpellsCache = originalCache;
            } else {
                reloadGrimorioContent();
            }
        }

        popup.appendChild(tabContent);
        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'purple');


    }

    // Função para criar o popup de spells
    function createSpellsPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('spells-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('spells-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'spells-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'spells-popup';
        popup.className = 'roll20-popup roll20-popup-purple';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '340px';
        popup.style.maxHeight = '480px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('spells-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Magias';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold'; header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Barra de filtro usando o componente reutilizável
        const searchComponent = createSearchInput({
            placeholder: 'Filtrar magias...',
            theme: 'blue',
            onInput: () => {
                updateSpellList();
            },
            onClear: () => {
                updateSpellList();
            }
        });
        popup.appendChild(searchComponent.container);

        // Dica sobre o sistema de CTRL
        const spellTip = createCtrlTipMessage('spell');
        popup.appendChild(spellTip);

        // Lista de spells (nome, comando)
        const spells = [
            spellTemplates.createSpell({
                nome: 'Sombras Profanas',
                comando: `&{template:spell}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{spellname=Sombras Profanas}}{{type=Universal}}{{execution=Padrão}}{{duration=Cena}}{{range=Curto}}{{targetarea=1 Objeto}}{{resistance=Vontade}}{{description=O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.

    +1 PM: aumenta a área da escuridão em +1,5m de raio.

    +2 PM: muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.

    +2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.

    +3 PM: muda a duração para um dia.

    +5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo.

    JdA:193}}{{cd=[[@{${getCharacterNameForMacro()}|cdtotal}+0]]}}`
            }),
            spellTemplates.createSpell({
                nome: 'Luz Sagrada',
                comando: `&{template:spell}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{spellname=Luz Sagrada}}{{type=Universal}}{{execution=Padrão}}{{duration=Cena}}{{range=Curto}}{{targetarea=1 Objeto}}{{resistance=Vontade}}{{description=O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.

    +1 PM: aumenta a área iluminada em +3m de raio.

    +2 PM: muda a duração para um dia.
    +2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2º círculo.
    +0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.
    +2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.
    +2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostas à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.
    +5 PM (Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2º círculo.
    JdA:193}}{{cd=[[@{${getCharacterNameForMacro()}|cdtotal}+0]]}}`
            })
        ];

        // Lista visual
        const spellList = document.createElement('div');
        spellList.id = 'spells-list';
        spellList.style.display = 'flex';
        spellList.style.flexDirection = 'column';
        spellList.style.gap = '6px';
        spellList.style.marginTop = '2px';
        popup.appendChild(spellList);

        function updateSpellList() {
            const filter = searchComponent.getValue().trim().toLowerCase();
            spellList.innerHTML = '';

            // Obter magias aprendidas do grimório
            const learnedSpells = getLearnedSpells();
            const spellsCache = window.grimorioSpellsCache || [];

            // Criar lista de magias aprendidas do grimório
            const learnedSpellItems = learnedSpells.map(spellName => {
                const fullSpell = spellsCache.find(spell => spell.name === spellName);
                if (fullSpell) {
                    return {
                        nome: fullSpell.name,
                        comando: `&{template:spell}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{spellname=${fullSpell.name}}}{{type=${fullSpell.tradition.charAt(0).toUpperCase() + fullSpell.tradition.slice(1)}}}{{execution=${fullSpell.execucao || 'Padrão'}}}{{duration=${fullSpell.system?.duracao || 'Cena'}}}{{range=${fullSpell.system?.alcance || 'Curto'}}}{{targetarea=${fullSpell.system?.alvo || '1 Alvo'}}}{{resistance=${fullSpell.system?.resistencia || 'Nenhuma'}}}{{description=${fullSpell.system?.description?.value || 'Descrição não disponível'}}}{{cd=[[@{${getCharacterNameForMacro()}|cdtotal}+0]]}}`,
                        onClick: () => showSpellDetails(fullSpell)
                    };
                }
                return null;
            }).filter(item => item !== null);

            // Filtra spells baseado na raça selecionada
            const raceSpells = spells.filter(spell => {
                // Mostra Sombras Profanas apenas se for Suraggel Sulfure
                if (spell.nome === 'Sombras Profanas') {
                    return hasRacePower('Sombras Profanas');
                }

                // Mostra Luz Sagrada apenas se for Suraggel Aggelus
                if (spell.nome === 'Luz Sagrada') {
                    return hasRacePower('Luz Sagrada');
                }

                return false;
            });

            // Combinar magias de raça e magias aprendidas
            const allSpells = [...raceSpells, ...learnedSpellItems];
            const filteredSpells = allSpells.filter(s => s.nome.toLowerCase().includes(filter));

            if (filteredSpells.length === 0) {
                const noSpellsMessage = document.createElement('div');
                noSpellsMessage.style.textAlign = 'center';
                noSpellsMessage.style.padding = '20px';
                noSpellsMessage.style.color = '#999';
                noSpellsMessage.style.fontSize = '14px';
                noSpellsMessage.style.fontStyle = 'italic';

                if (filter.length > 0) {
                    // Mensagem quando há filtro mas nenhum resultado
                    const noResultsMessage = createNoResultsMessage(filter, 'magia', 'blue');
                    spellList.appendChild(noResultsMessage);
                    return;
                } else {
                    // Mensagem quando não há magias disponíveis
                    const selectedRace = getSelectedRace();
                    const selectedRaceType = getSelectedRaceType();

                    noSpellsMessage.style.background = 'rgba(110, 198, 255, 0.1)';
                    noSpellsMessage.style.border = '1px solid rgba(110, 198, 255, 0.3)';
                    noSpellsMessage.style.borderRadius = '8px';
                    noSpellsMessage.style.marginTop = '10px';
                    noSpellsMessage.style.color = '#6ec6ff';

                    if (!selectedRace && learnedSpells.length === 0) {
                        noSpellsMessage.innerHTML = '🔮<br/>Nenhuma magia disponível<br><small>Selecione uma raça para obter magias especiais ou aprenda magias no grimório</small>';
                    } else if (!selectedRaceType && learnedSpells.length === 0) {
                        noSpellsMessage.innerHTML = '🔮<br/>Nenhuma magia disponível<br><small>Defina o tipo da sua raça para obter magias especiais ou aprenda magias no grimório</small>';
                    } else if (learnedSpells.length === 0) {
                        noSpellsMessage.innerHTML = '🔮<br/>Nenhuma magia disponível<br><small>Use o grimório para aprender magias</small>';
                    } else {
                        noSpellsMessage.innerHTML = '🔮<br/>Nenhuma magia disponível<br><small>Esta raça não possui magias especiais</small>';
                    }
                }

                spellList.appendChild(noSpellsMessage);
                return;
            }

            filteredSpells.forEach(spell => {
                const btn = document.createElement('button');
                btn.textContent = spell.nome;
                btn.style.width = '100%';
                btn.style.background = '#23243a';
                btn.style.color = '#fff';
                btn.style.border = '1px solid #6ec6ff';
                btn.style.borderRadius = '6px';
                btn.style.padding = '8px 0';
                btn.style.fontSize = '15px';
                btn.style.fontWeight = 'bold';
                btn.style.cursor = 'pointer';
                btn.style.transition = 'all 0.2s';
                btn.style.position = 'relative';

                // Tooltip container
                let tooltip = null;
                let tooltipTimeout = null;

                btn.onmouseover = () => {
                    btn.style.background = '#6ec6ff';
                    btn.style.color = '#23243a';

                    // Criar tooltip após um pequeno delay
                    tooltipTimeout = setTimeout(() => {
                        // Remover tooltip existente se houver
                        if (tooltip) tooltip.remove();

                        tooltip = document.createElement('div');
                        tooltip.style.position = 'fixed';
                        tooltip.style.background = 'rgba(20,20,30,0.98)';
                        tooltip.style.border = '2px solid #6ec6ff';
                        tooltip.style.borderRadius = '8px';
                        tooltip.style.padding = '12px';
                        tooltip.style.minWidth = '280px';
                        tooltip.style.maxWidth = '320px';
                        tooltip.style.zIndex = '10004';
                        tooltip.style.boxShadow = '0 4px 16px rgba(0,0,0,0.8)';
                        tooltip.style.pointerEvents = 'none';

                        // Calcular posição baseada na posição do botão
                        const btnRect = btn.getBoundingClientRect();
                        tooltip.style.left = (btnRect.right + 10) + 'px';
                        tooltip.style.top = btnRect.top + 'px';

                        // Conteúdo do tooltip
                        const tooltipContent = document.createElement('div');
                        tooltipContent.style.display = 'flex';
                        tooltipContent.style.flexDirection = 'column';
                        tooltipContent.style.gap = '8px';

                        // Título da magia
                        const tooltipTitle = document.createElement('div');
                        tooltipTitle.textContent = spell.nome;
                        tooltipTitle.style.color = '#6ec6ff';
                        tooltipTitle.style.fontSize = '16px';
                        tooltipTitle.style.fontWeight = 'bold';
                        tooltipTitle.style.marginBottom = '4px';
                        tooltipContent.appendChild(tooltipTitle);

                        // Tag de classificação
                        const classificationTag = document.createElement('div');
                        classificationTag.textContent = 'Magia Arcana';
                        classificationTag.style.background = '#6ec6ff';
                        classificationTag.style.color = '#23243a';
                        classificationTag.style.fontSize = '11px';
                        classificationTag.style.fontWeight = 'bold';
                        classificationTag.style.borderRadius = '4px';
                        classificationTag.style.padding = '2px 8px';
                        classificationTag.style.display = 'inline-block';
                        classificationTag.style.width = 'fit-content';
                        tooltipContent.appendChild(classificationTag);

                        // Tag de ciclo
                        const cycleTag = document.createElement('div');
                        cycleTag.textContent = '1º Ciclo';
                        cycleTag.style.background = '#9b59b6';
                        cycleTag.style.color = '#fff';
                        cycleTag.style.fontSize = '11px';
                        cycleTag.style.fontWeight = 'bold';
                        cycleTag.style.borderRadius = '4px';
                        cycleTag.style.padding = '2px 8px';
                        cycleTag.style.display = 'inline-block';
                        cycleTag.style.width = 'fit-content';
                        cycleTag.style.marginTop = '2px';
                        tooltipContent.appendChild(cycleTag);

                        // Tag de escola
                        const schoolTag = document.createElement('div');
                        if (spell.nome === 'Luz Sagrada') {
                            schoolTag.textContent = 'Evocação';
                        } else if (spell.nome === 'Sombras Profanas') {
                            schoolTag.textContent = 'Necromancia';
                        }
                        schoolTag.style.background = '#e74c3c';
                        schoolTag.style.color = '#fff';
                        schoolTag.style.fontSize = '11px';
                        schoolTag.style.fontWeight = 'bold';
                        schoolTag.style.borderRadius = '4px';
                        schoolTag.style.padding = '2px 8px';
                        schoolTag.style.display = 'inline-block';
                        schoolTag.style.width = 'fit-content';
                        schoolTag.style.marginTop = '2px';
                        tooltipContent.appendChild(schoolTag);

                        // Descrição resumida
                        const tooltipDesc = document.createElement('div');
                        if (spell.nome === 'Luz Sagrada') {
                            tooltipDesc.textContent = 'Ação padrão: Objeto emite luz de 6m de raio. A luz não produz calor e pode ser interrompida guardando o objeto. Luz anula Escuridão.';
                        } else if (spell.nome === 'Sombras Profanas') {
                            tooltipDesc.textContent = 'Ação padrão: Objeto emana sombras de 6m de raio. Criaturas na área recebem camuflagem leve. Sombras não podem ser iluminadas por luz natural.';
                        }
                        tooltipDesc.style.color = '#ecf0f1';
                        tooltipDesc.style.fontSize = '13px';
                        tooltipDesc.style.lineHeight = '1.4';
                        tooltipDesc.style.marginTop = '6px';
                        tooltipContent.appendChild(tooltipDesc);

                        tooltip.appendChild(tooltipContent);
                        document.body.appendChild(tooltip);
                    }, 300); // Delay de 300ms antes de mostrar o tooltip
                };

                btn.onmouseout = () => {
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';

                    // Limpar timeout e remover tooltip
                    if (tooltipTimeout) {
                        clearTimeout(tooltipTimeout);
                        tooltipTimeout = null;
                    }
                    if (tooltip) {
                        tooltip.remove();
                        tooltip = null;
                    }
                };

                btn.onclick = spell.onClick;
                spellList.appendChild(btn);
            });
        }
        updateSpellList();

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }

    // Função para obter dados das magias
    function getSpellData(spellName) {
        const spellDatabase = {
            'Luz Sagrada': {
                tipo: 'Divina',
                ciclo: 1,
                escola: 'Evocação'
            },
            'Sombras Profanas': {
                tipo: 'Universal',
                ciclo: 1,
                escola: 'Necromancia'
            },
            'Cura Ferimentos Leves': {
                tipo: 'Divina',
                ciclo: 1,
                escola: 'Cura'
            },
            'Proteção Divina': {
                tipo: 'Divina',
                ciclo: 1,
                escola: 'Abjuração'
            },
            'Bênção': {
                tipo: 'Divina',
                ciclo: 1,
                escola: 'Encantamento'
            },
            'Raio de Energia': {
                tipo: 'Arcana',
                ciclo: 1,
                escola: 'Evocação'
            },
            'Escudo Mágico': {
                tipo: 'Arcana',
                ciclo: 1,
                escola: 'Abjuração'
            },
            'Disfarce Ilusório': {
                tipo: 'Arcana',
                ciclo: 1,
                escola: 'Ilusão'
            },
            'Detectar Magia': {
                tipo: 'Universal',
                ciclo: 1,
                escola: 'Adivinhação'
            },
            'Compreender Idiomas': {
                tipo: 'Universal',
                ciclo: 1,
                escola: 'Adivinhação'
            },
            'Cura Ferimentos Moderados': {
                tipo: 'Divina',
                ciclo: 2,
                escola: 'Cura'
            },
            'Silêncio': {
                tipo: 'Divina',
                ciclo: 2,
                escola: 'Ilusão'
            },
            'Bola de Fogo': {
                tipo: 'Arcana',
                ciclo: 3,
                escola: 'Evocação'
            },
            'Relâmpago': {
                tipo: 'Arcana',
                ciclo: 3,
                escola: 'Evocação'
            },
            'Invisibilidade': {
                tipo: 'Arcana',
                ciclo: 2,
                escola: 'Ilusão'
            },
            'Sugestão': {
                tipo: 'Arcana',
                ciclo: 2,
                escola: 'Encantamento'
            },
            'Dissipar Magia': {
                tipo: 'Universal',
                ciclo: 3,
                escola: 'Abjuração'
            },
            'Voo': {
                tipo: 'Arcana',
                ciclo: 3,
                escola: 'Transmutação'
            },
            'Teleporte': {
                tipo: 'Arcana',
                ciclo: 4,
                escola: 'Conjuração'
            },
            'Ressurreição': {
                tipo: 'Divina',
                ciclo: 5,
                escola: 'Cura'
            },
            'Meteoro': {
                tipo: 'Arcana',
                ciclo: 6,
                escola: 'Evocação'
            }
        };

        return spellDatabase[spellName] || {};
    }
    // Função para criar popup de detalhes de spell
    function createSpellCastPopup(spellName, spellDisplayName) {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('spell-cast-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('spell-cast-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'spell-cast-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'spell-cast-popup';
        popup.className = 'roll20-modal roll20-popup-purple';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '20px';
        popup.style.zIndex = '10003';
        popup.style.maxWidth = '500px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.flexDirection = 'column';
        titleContainer.style.alignItems = 'flex-start';
        titleContainer.style.gap = '2px';

        const title = document.createElement('h3');
        title.textContent = spellDisplayName;
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';
        titleContainer.appendChild(title);

        // Container para chips
        const chipsContainer = document.createElement('div');
        chipsContainer.style.display = 'flex';
        chipsContainer.style.flexWrap = 'wrap';
        chipsContainer.style.gap = '6px';
        chipsContainer.style.marginTop = '8px';

        // Função para criar chip
        function createChip(text, color, bgColor) {
            const chip = document.createElement('span');
            chip.textContent = text;
            chip.style.background = bgColor;
            chip.style.color = color;
            chip.style.fontSize = '11px';
            chip.style.fontWeight = 'bold';
            chip.style.borderRadius = '12px';
            chip.style.padding = '3px 8px';
            chip.style.display = 'inline-block';
            chip.style.letterSpacing = '0.3px';
            chip.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
            chip.style.border = '1px solid rgba(255,255,255,0.1)';
            return chip;
        }

        // Dados das magias
        const spellData = getSpellData(spellName);

        // Chip de Tipo (Arcana/Divina)
        if (spellData.tipo) {
            const tipoChip = createChip(
                spellData.tipo,
                '#23243a',
                spellData.tipo === 'Arcana' ? '#9c27b0' : '#ff9800'
            );
            chipsContainer.appendChild(tipoChip);
        }

        // Chip de Ciclo
        if (spellData.ciclo) {
            const cicloChip = createChip(
                `${spellData.ciclo}º Círculo`,
                '#23243a',
                '#2196f3'
            );
            chipsContainer.appendChild(cicloChip);
        }

        // Chip de Escola
        if (spellData.escola) {
            const escolaChip = createChip(
                spellData.escola,
                '#23243a',
                '#4caf50'
            );
            chipsContainer.appendChild(escolaChip);
        }

        // Tag de origem (mantida para compatibilidade)
        if (spellName === 'Luz Sagrada') {
            const originTag = createChip('Aggelus', '#23243a', '#6ec6ff');
            chipsContainer.appendChild(originTag);
        } else if (spellName === 'Sombras Profanas') {
            const originTag = createChip('Sulfure', '#23243a', '#6ec6ff');
            chipsContainer.appendChild(originTag);
        }

        titleContainer.appendChild(chipsContainer);

        header.appendChild(titleContainer);        // Botão de fechar
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('spell-cast-overlay');
                if (overlay) overlay.remove();
            }
        });
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Características da spell
        const characteristicsContainer = document.createElement('div');
        characteristicsContainer.style.background = '#1a1a2e';
        characteristicsContainer.style.border = '1px solid #6ec6ff';
        characteristicsContainer.style.borderRadius = '8px';
        characteristicsContainer.style.padding = '12px';
        characteristicsContainer.style.marginBottom = '15px';
        characteristicsContainer.style.display = 'grid';
        characteristicsContainer.style.gridTemplateColumns = '1fr 1fr';
        characteristicsContainer.style.gap = '8px';

        const characteristics = [
            { label: 'Tipo', value: 'Universal' },
            { label: 'Execução', value: 'Padrão' },
            { label: 'Duração', value: 'Cena' },
            { label: 'Alcance', value: 'Curto' },
            { label: 'Área/Alvo', value: '1 Objeto' },
            { label: 'Resistência', value: 'Vontade' }
        ];

        characteristics.forEach(char => {
            const charItem = document.createElement('div');
            charItem.style.display = 'flex';
            charItem.style.flexDirection = 'column';
            charItem.style.gap = '2px';

            const charLabel = document.createElement('span');
            charLabel.textContent = char.label;
            charLabel.style.color = '#6ec6ff';
            charLabel.style.fontSize = '11px';
            charLabel.style.fontWeight = 'bold';
            charLabel.style.textTransform = 'uppercase';

            const charValue = document.createElement('span');
            charValue.textContent = char.value;
            charValue.style.color = '#ecf0f1';
            charValue.style.fontSize = '13px';
            charValue.style.fontWeight = 'bold';

            charItem.appendChild(charLabel);
            charItem.appendChild(charValue);
            characteristicsContainer.appendChild(charItem);
        });

        popup.appendChild(characteristicsContainer);

        // Descrição da spell em uma box
        const descBox = document.createElement('div');
        descBox.style.background = '#1a1a2e';
        descBox.style.border = '1px solid #6ec6ff';
        descBox.style.borderRadius = '8px';
        descBox.style.padding = '12px';
        descBox.style.marginBottom = '15px';
        descBox.style.display = 'flex';
        descBox.style.flexDirection = 'column';
        descBox.style.gap = '6px';

        const descHeader = document.createElement('div');
        descHeader.textContent = 'Descrição';
        descHeader.style.color = '#6ec6ff';
        descHeader.style.fontSize = '13px';
        descHeader.style.fontWeight = 'bold';
        descHeader.style.marginBottom = '2px';
        descBox.appendChild(descHeader);

        const description = document.createElement('div');
        description.style.color = '#ecf0f1';
        description.style.fontSize = '14px';
        description.style.lineHeight = '1.4';

        if (spellName === 'Luz Sagrada') {
            description.textContent = 'O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.';
        } else if (spellName === 'Sombras Profanas') {
            description.textContent = 'O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.';
        }

        descBox.appendChild(description);

        // Aprimoramentos
        let upgrades = [];
        if (spellName === 'Luz Sagrada') {
            upgrades = [
                { label: '+1 PM: aumenta a área iluminada em +3m de raio.', cost: 1 },
                { label: '+2 PM: muda a duração para um dia.', cost: 2 },
                { label: '+2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2º círculo.', cost: 2 },
                { label: '+0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.', cost: 0 },
                { label: '+2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.', cost: 2 },
                { label: '+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostas à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.', cost: 2 },
                { label: '+5 PM (Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2º círculo.', cost: 5 }
            ];
        } else if (spellName === 'Sombras Profanas') {
            upgrades = [
                { label: '+1 PM: aumenta a área da escuridão em +1,5m de raio.', cost: 1 },
                { label: '+2 PM: camuflagem total por escuridão total.', cost: 2 },
                { label: '+2 PM: alvo 1 criatura, resistência Fortitude parcial, cego pela cena (requer 2º círculo).', cost: 2 },
                { label: '+3 PM: duração de um dia.', cost: 3 },
                { label: '+5 PM: alcance pessoal, alvo você, +10 Furtividade/camuflagem (requer 2º círculo).', cost: 5 }
            ];
        }
        const upgradesHeader = document.createElement('div');
        upgradesHeader.textContent = 'Aprimoramentos:';
        upgradesHeader.style.color = '#6ec6ff';
        upgradesHeader.style.fontSize = '13px';
        upgradesHeader.style.fontWeight = 'bold';
        upgradesHeader.style.margin = '10px 0 4px 0';
        descBox.appendChild(upgradesHeader);
        const upgradesList = document.createElement('div');
        upgradesList.style.display = 'flex';
        upgradesList.style.flexDirection = 'column';
        upgradesList.style.gap = '4px';
        const upgradeCheckboxes = [];
        upgrades.forEach((upg, idx) => {
            const upgDiv = document.createElement('label');
            upgDiv.style.display = 'flex';
            upgDiv.style.alignItems = 'center';
            upgDiv.style.gap = '8px';
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.value = idx;
            upgradeCheckboxes.push(cb);
            upgDiv.appendChild(cb);
            const span = document.createElement('span');
            span.textContent = upg.label;
            span.style.color = '#ecf0f1';
            span.style.fontSize = '13px';
            upgDiv.appendChild(span);
            upgradesList.appendChild(upgDiv);
        });
        descBox.appendChild(upgradesList);

        // Custo total
        const costDiv = document.createElement('div');
        costDiv.style.color = '#6ec6ff';
        costDiv.style.fontWeight = 'bold';
        costDiv.style.marginTop = '10px';
        function updateTotalCost() {
            let total = 1;
            upgradeCheckboxes.forEach((cb, idx) => {
                if (cb.checked) total += upgrades[idx].cost;
            });
            costDiv.textContent = `Custo total: ${total} PM`;
        }
        upgradeCheckboxes.forEach(cb => {
            cb.onchange = updateTotalCost;
        });
        updateTotalCost();
        descBox.appendChild(costDiv);

        // Botão compartilhar dentro da box
        const shareBtn = document.createElement('button');
        shareBtn.textContent = 'Compartilhar';
        shareBtn.style.background = 'none';
        shareBtn.style.border = '1px solid #6ec6ff';
        shareBtn.style.color = '#6ec6ff';
        shareBtn.style.fontSize = '14px';
        shareBtn.style.fontWeight = 'bold';
        shareBtn.style.borderRadius = '6px';
        shareBtn.style.padding = '8px 0';
        shareBtn.style.marginTop = '10px';
        shareBtn.style.width = '100%';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.transition = 'all 0.2s';
        shareBtn.onmouseover = () => {
            shareBtn.style.background = '#6ec6ff';
            shareBtn.style.color = '#23243a';
        };
        shareBtn.onmouseout = () => {
            shareBtn.style.background = 'none';
            shareBtn.style.color = '#6ec6ff';
        };
        shareBtn.onclick = () => {
            const charName = getCharacterName();
            let spellDescription = '';

            if (spellName === 'Luz Sagrada') {
                spellDescription = `${description.textContent}

    +1 PM: aumenta a área iluminada em +3m de raio.

    +2 PM: muda a duração para um dia.

    +2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2º círculo.

    +0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.

    +2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.

    +2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostas à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.

    +5 PM (Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2º círculo.`;
            } else if (spellName === 'Sombras Profanas') {
                spellDescription = `${description.textContent}

    +1 PM: aumenta a área da escuridão em +1,5m de raio.

    +2 PM: muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.

    +2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.

    +3 PM: muda a duração para um dia.

    +5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo.`;
            }

            const msg = `&{template:spell}{{character=@{${charName}|character_name}}}{{spellname=${spellName}}}{{type=Universal}}{{execution=Padrão}}{{duration=Cena}}{{range=Curto}}{{targetarea=1 Objeto}}{{resistance=Vontade}}{{description=${spellDescription}
    JdA:193}}{{cd=[[@{${charName}|cdtotal}+0]]}}`;
            sendToChat(msg);
        };
        descBox.appendChild(shareBtn);
        popup.appendChild(descBox);

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }

    // Funções auxiliares para pratos especiais
    function getPratosFavoritos() {
        return JSON.parse(localStorage.getItem('roll20-hotbar-pratos-favoritos') || '[]');
    }

    function savePratosFavoritos(favoritos) {
        localStorage.setItem('roll20-hotbar-pratos-favoritos', JSON.stringify(favoritos));
    }

    function togglePratoFavorito(nomePrato) {
        let favoritos = getPratosFavoritos();
        const index = favoritos.indexOf(nomePrato);
        if (index > -1) {
            favoritos.splice(index, 1);
            showWarningNotification(`Prato "${nomePrato}" removido dos favoritos.`);
        } else {
            favoritos.push(nomePrato);
            showSuccessNotification(`Prato "${nomePrato}" adicionado aos favoritos!`);
        }
        savePratosFavoritos(favoritos);
    }

    function isPratoFavorito(nomePrato) {
        const favoritos = getPratosFavoritos();
        return favoritos.includes(nomePrato);
    }

    // Funções auxiliares para bebidas artonianas
    function getBebidasFavoritas() {
        return JSON.parse(localStorage.getItem('roll20-hotbar-bebidas-favoritas') || '[]');
    }

    function saveBebidasFavoritas(favoritas) {
        localStorage.setItem('roll20-hotbar-bebidas-favoritas', JSON.stringify(favoritas));
    }

    function toggleBebidaFavorita(nomeBebida) {
        let favoritas = getBebidasFavoritas();
        const index = favoritas.indexOf(nomeBebida);
        if (index > -1) {
            favoritas.splice(index, 1);
            showWarningNotification(`Bebida "${nomeBebida}" removida dos favoritos.`);
        } else {
            favoritas.push(nomeBebida);
            showSuccessNotification(`Bebida "${nomeBebida}" adicionada aos favoritos!`);
        }
        saveBebidasFavoritas(favoritas);
    }

    function isBebidaFavorita(nomeBebida) {
        const favoritas = getBebidasFavoritas();
        return favoritas.includes(nomeBebida);
    }

    // Funções auxiliares para poções
    function getPocoesFavoritas() {
        return JSON.parse(localStorage.getItem('roll20-hotbar-pocoes-favoritas') || '[]');
    }

    function savePocoesFavoritas(favoritas) {
        localStorage.setItem('roll20-hotbar-pocoes-favoritas', JSON.stringify(favoritas));
    }

    function togglePocaoFavorita(nomePocao) {
        let favoritas = getPocoesFavoritas();
        const index = favoritas.indexOf(nomePocao);
        if (index > -1) {
            favoritas.splice(index, 1);
            showWarningNotification(`Poção "${nomePocao}" removida dos favoritos.`);
        } else {
            favoritas.push(nomePocao);
            showSuccessNotification(`Poção "${nomePocao}" adicionada aos favoritos!`);
        }
        savePocoesFavoritas(favoritas);
    }

    function isPocaoFavorita(nomePocao) {
        const favoritas = getPocoesFavoritas();
        return favoritas.includes(nomePocao);
    }

    // Dados completos dos pratos baseados no arquivo MD
    function getPratosCompletos() {
        return [
            {
                nome: 'Assado de Carnes',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_60.jpg', // Roasted Clefthoof
                raridade: 'Comum',
                descricao: 'Um prato muito apreciado no Reinado, mas mal visto no Império de Tauron. Pura proteína, deixa qualquer um mais forte.',
                bonus: '+2 em rolagens de dano corpo a corpo.',
                preco: 'T$ 30',
                ingredientes: 'Carne, carne de caça, porco',
                custoIngredientes: 'T$ 56',
                cdTeste: '20',
                icone: '🥩'
            },
            {
                nome: 'Balinhas',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/achievement_halloween_candy_01.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Balas coloridas e doces. Arcanistas gostam — dizem que o açúcar feérico usado nas balinhas potencializa suas magias.',
                bonus: '+2 em rolagens de dano de magias.',
                preco: 'T$ 30',
                ingredientes: 'Açúcar das fadas, fruta',
                custoIngredientes: 'T$ 53',
                cdTeste: '20',
                icone: '🍬'
            },
            {
                nome: 'Banquete dos Heróis',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_cauldron_frost.jpg', // Feast of Friends
                raridade: 'Comum',
                descricao: 'Uma mesa repleta das melhores comidas que o dinheiro pode pagar.',
                bonus: '+1 em um atributo a sua escolha. Esse aumento não oferece PV, PM e perícias adicionais.',
                preco: 'T$ 150',
                ingredientes: 'Carne de caça, ovo de monstro, avelã de Norba',
                custoIngredientes: 'T$ 82',
                cdTeste: '25',
                icone: '🍽️'
            },
            {
                nome: 'Batata Valkariana',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_103_potatobread.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Batatas cortadas em tiras e mergulhadas em óleo fervente. Gordurentas e pouco nutritivas, são o tipo de prato que só é servido numa metrópole como Valkaria. Apesar disso, são saborosas e deixam qualquer um empolgado.',
                bonus: '+1d6 em um teste a sua escolha realizado até o fim do dia.',
                preco: 'T$ 2',
                ingredientes: 'Óleo, legume',
                custoIngredientes: 'T$ 4',
                cdTeste: '15',
                icone: '🍟'
            },
            {
                nome: 'Bolo de Cenoura',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_fishcake.jpg', // Carrot Cake
                raridade: 'Comum',
                descricao: 'Uma sobremesa simples, que "faz bem para a vista", segundo anciões de todo o Reinado. Aparentemente, os anciões estão certos, pois o bolo de cenoura fornece +2 em testes de Percepção.',
                bonus: '+2 em testes de Percepção.',
                preco: 'T$ 4',
                ingredientes: 'Farinha, fruta, óleo',
                custoIngredientes: 'T$ 7',
                cdTeste: '15',
                icone: '🍰'
            },
            {
                nome: 'Bolo do Panteão',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_144_cakeslice.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Uma sobremesa divina! Este bolo de gorad é preparado com os melhores ingredientes, por isso é caríssimo, servido apenas em banquetes reais — ou em tavernas que atendem aventureiros famosos. Dizem que o gorad usado no bolo é uma das fontes de energia do Panteão.',
                bonus: 'Seu custo para ativar habilidades e lançar magias diminui em -1 PM (mínimo 1).',
                preco: 'T$ 150',
                ingredientes: 'Açúcar das fadas, avelã de Norba, farinha, gorad',
                custoIngredientes: 'T$ 121',
                cdTeste: '25',
                icone: '🍰'
            },
            {
                nome: 'Ensopado Reforçado',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_swirlingmistsoup.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um prato nutritivo, mas pesado.',
                bonus: '+20 PV temporários, mas seu deslocamento diminui em –1,5m.',
                preco: 'T$ 6',
                ingredientes: 'Cereal, porco, verdura',
                custoIngredientes: 'T$ 10',
                cdTeste: '15',
                icone: '🍲'
            },
            {
                nome: 'Estrogonofe',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_sauteedcarrots.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Essa iguaria deliciosa foi inventada nas cortes do antigo Reino de Yudennach — dizem que é uma das poucas coisas boas a sair daquele lugar. Comer estrogonofe deixa você firme em suas convicções.',
                bonus: '+2 em testes de Vontade.',
                preco: 'T$ 12',
                ingredientes: 'Carne, cogumelo, leite',
                custoIngredientes: 'T$ 22',
                cdTeste: '15',
                icone: '🍲'
            },
            {
                nome: 'Fritada Monstruosa',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_06.jpg', // Candy
                raridade: 'Comum',
                descricao: 'A receita é simples — o segredo está nos ingredientes. Feita com ovos de monstros, esta omelete é extremamente nutritiva.',
                bonus: '+10 PV temporários.',
                preco: 'T$ 30',
                ingredientes: 'Ovo de monstro, óleo',
                custoIngredientes: 'T$ 53',
                cdTeste: '20',
                icone: '🍳'
            },
            {
                nome: 'Futomaki',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_161_fish_white.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Criado no Império de Jade, este prato consiste em um rolo de arroz recheado com peixes, folhas e raízes. Uma refeição elegante, que deixa todos dispostos a dialogar.',
                bonus: '+2 em testes de Diplomacia.',
                preco: 'T$ 12',
                ingredientes: 'Cereal, peixe',
                custoIngredientes: 'T$ 8',
                cdTeste: '15',
                icone: '🍣'
            },
            {
                nome: 'Gorad Quente',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_meat_cooked_08.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Gorad e leite, servidos fumegando. Não tem erro. O gorad ativa o cérebro.',
                bonus: '+2 PM temporários.',
                preco: 'T$ 18',
                ingredientes: 'Gorad, leite',
                custoIngredientes: 'T$ 31',
                cdTeste: '20',
                icone: '🥛'
            },
            {
                nome: 'Gorvelã',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_cask_04.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Gorad com avelã de Norba. É uma sobremesa cara, mas deliciosa.',
                bonus: '+5 PM temporários.',
                preco: 'T$ 42',
                ingredientes: 'Gorad, avelã de Norba',
                custoIngredientes: 'T$ 70',
                cdTeste: '25',
                icone: '🍰'
            },
            {
                nome: 'Macarrão de Yuvalin',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_cooking_90_cinnamonbonefishstew.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Yuvalin é uma cidade mineradora em Zakharov, na fronteira com as Montanhas Uivantes. Seus habitantes criaram este prato reforçado (macarrão, bacon e creme de leite) para encarar suas árduas jornadas de trabalho nas minas. Deliciosa, a receita se espalhou por outras cidades e reinos.',
                bonus: '+5 PV temporários.',
                preco: 'T$ 6',
                ingredientes: 'Farinha, leite, porco',
                custoIngredientes: 'T$ 10',
                cdTeste: '15',
                icone: '🍝'
            },
            {
                nome: 'Pão de Queijo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_orchardfruit01.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um bom pão de queijo deixa qualquer aventureiro bem nutrido e saudável.',
                bonus: '+2 em testes de Fortitude.',
                preco: 'T$ 10',
                ingredientes: 'Farinha, queijo',
                custoIngredientes: 'T$ 7',
                cdTeste: '15',
                icone: '🥨'
            },
            {
                nome: 'Pizza',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_deliciouspizza.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um disco de massa coberto com molho de tomate e queijo, este prato foi criado por Guido Venusto, um nobre de Ahlen que queria ascender socialmente. Inepto nas artes da intriga, Venusto resolveu manipular a corte pela barriga. Funcionou — o prato foi um sucesso e o nobre cozinheiro teve muita influência por anos. Certa noite, um espião conseguiu roubar a receita. O segredo da pizza se espalhou e, sem seu trunfo, Venusto foi assassinado logo depois. Comer uma pizza deixa-o pronto para encarar qualquer perigo.',
                bonus: '+1 em todos os testes de resistência.',
                preco: 'T$ 6',
                ingredientes: 'Farinha, fruta, queijo',
                custoIngredientes: 'T$ 10',
                cdTeste: '15',
                icone: '🍕'
            },
            {
                nome: 'Porco Assado',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_123_roast.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um prato típico e popular em Deheon, que já se alastrou pelo Reinado. Comer um porco assado o deixa valente e brigão.',
                bonus: '+1 em testes de Luta.',
                preco: 'T$ 36',
                ingredientes: 'Porco, frutas, legume',
                custoIngredientes: 'T$ 12',
                cdTeste: '15',
                icone: '🍖'
            },
            {
                nome: 'Prato do Aventureiro',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_fish_18.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um cozido de frango com legumes, esta é uma refeição simples, mas mantém qualquer um bem alimentado.',
                bonus: 'Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de vida em +1 por nível.',
                preco: 'T$ 2',
                ingredientes: 'Ave, legume',
                custoIngredientes: 'T$ 5',
                cdTeste: '10',
                icone: '🍲'
            },
            {
                nome: 'Salada de Salistick',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_goldcarpconsomme.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Com folhas e carne de frango, esta salada foi criada no Reino dos Médicos, onde a saúde é uma grande preocupação. Uma alimentação leve, mas nutritiva.',
                bonus: 'Aumenta seu deslocamento em +1,5m (1 quadrado).',
                preco: 'T$ 4',
                ingredientes: 'Ave, fruta, legume',
                custoIngredientes: 'T$ 8',
                cdTeste: '15',
                icone: '🥗'
            },
            {
                nome: 'Salada Élfica',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_swirlingmistsoup.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Esta salada vegetariana leva uma mistura de folhas, frutas e legumes. Segundo os relatos, a receita foi inventada em Lenórienn e passada aos reinos humanos de Lamnor, antes do isolamento dos povos. Felizmente, a salada se espalhou por Arton antes da queda do continente. Um prato leve e equilibrado, inspira disparos precisos.',
                bonus: '+1 em testes de Pontaria.',
                preco: 'T$ 4',
                ingredientes: 'Fruta, legume, verdura',
                custoIngredientes: 'T$ 5',
                cdTeste: '15',
                icone: '🥗'
            },
            {
                nome: 'Salada Imperial',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_braisedturtle.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Uma mistura de folhas com bacon e queijo, esta salada é leve, mas empolgante.',
                bonus: '+2 em testes de Iniciativa.',
                preco: 'T$ 6',
                ingredientes: 'Porco, queijo, verdura',
                custoIngredientes: 'T$ 15',
                cdTeste: '15',
                icone: '🥗'
            },
            {
                nome: 'Sashimi',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_valleystirfry.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Uma iguaria da culinária tamuraniana, este prato consiste de peixes e frutos do mar fatiados em pequenos pedaços e servidos com um molho típico do Império de Jade. Uma refeição refinada, leve e equilibrada.',
                bonus: '+2 em rolagens de dano à distância.',
                preco: 'T$ 22',
                ingredientes: 'Peixe, molho tamuraniano',
                custoIngredientes: 'T$ 37',
                cdTeste: '20',
                icone: '🍣'
            },
            {
                nome: 'Sopa de Cogumelos',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_slime_02.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Esta sopa expande sua percepção mística.',
                bonus: '+2 em testes de Misticismo.',
                preco: 'T$ 6',
                ingredientes: 'Cogumelo, legume, verdura',
                custoIngredientes: 'T$ 7',
                cdTeste: '15',
                icone: '🍲'
            },
            {
                nome: 'Sopa de Peixe',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_63.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Um cozido de peixe com verduras, é um prato simples e humilde, mas garante descanso relaxante.',
                bonus: 'Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de mana em +1 por nível.',
                preco: 'T$ 3',
                ingredientes: 'Verdura, peixe',
                custoIngredientes: 'T$ 8',
                cdTeste: '10',
                icone: '🍲'
            },
            {
                nome: 'Torta de Maçã',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_10.jpg', // Candy
                raridade: 'Comum',
                descricao: 'Dizem que, após uma bruxa usar uma maçã envenenada para matar uma princesa, Thantalla-Dhaedelin, a Rainha das Fadas, decretou que maçãs nunca mais fariam mal a ninguém. Se a lenda é verdade, ou se maçãs são simplesmente saudáveis, ninguém sabe dizer, mas comer este prato fornece resistência a veneno +5.',
                bonus: 'Resistência a veneno +5.',
                preco: 'T$ 2',
                ingredientes: 'Farinha, fruta',
                custoIngredientes: 'T$ 4',
                cdTeste: '15',
                icone: '🍰'
            },
            {
                nome: 'Baga Celeste Cozida',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_goldcarpconsomme.jpg', // Starlight Rose
                raridade: 'Comum',
                descricao: 'Encontradas originalmente nas encostas invertidas de Vectora, estas bagas se espalharam por toda Arton. Quando preparadas adequadamente, fornecem qualidades místicas de flutuação.',
                bonus: 'Todo dano de queda que você sofre é reduzido em −1d6.',
                preco: 'T$ 25',
                ingredientes: 'Fruta, especiaria',
                custoIngredientes: 'T$ 35',
                cdTeste: '20',
                icone: '🌟'
            },
            {
                nome: 'Cozido de Pimenta',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_159_fish_82.jpg', // Spicy Stew
                raridade: 'Comum',
                descricao: 'Um prato forte, capaz de trazer lágrimas aos olhos do mais resistente dos comensais.',
                bonus: '+1 em Fortitude (cumulativo com outros itens) e +1 na rolagem do D20 para testes da perícia Fortitude.',
                preco: 'T$ 15',
                ingredientes: 'Legume, especiaria',
                custoIngredientes: 'T$ 12',
                cdTeste: '18',
                icone: '🌶️'
            },
            {
                nome: 'Manjar de Sombras',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_cooking_80_ravenberrytart.jpg', // Shadowberry Tart
                raridade: 'Comum',
                descricao: 'A origem da receita original deste prato se perdeu, mas sua essência se manteve inalterada. Consiste de um manjar com ingredientes cultivados em terras próximas de cemitérios, que protege o corpo contra energias sombrias.',
                bonus: 'Você ignora os próximos 10 pontos de dano de trevas que sofrer.',
                preco: 'T$ 40',
                ingredientes: 'Cereal, especiaria, verdura',
                custoIngredientes: 'T$ 28',
                cdTeste: '22',
                icone: '🌑'
            }
        ];
    }
    // Dados completos das bebidas baseados no arquivo MD
    function getBebidasCompletas() {
        return [
            {
                nome: 'Baba de Troll',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_potion_136.jpg', // Milk
                tipo: 'Não alcoólica',
                descricao: 'Uma bebida sem álcool, à base de leite, castanhas, nozes e mel.',
                efeito: '+1d4 em um teste à sua escolha até o fim do dia.',
                cd: '—',
                icone: '🧃'
            },
            {
                nome: 'Barba Queimada',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_05.jpg', // Beer
                tipo: 'Alcoólica',
                descricao: 'Forte e amarga, esta cerveja anã fortalece o corpo e o espírito.',
                efeito: 'Redução de Dano 2.',
                cd: '20',
                icone: '🍺'
            },
            {
                nome: 'Cerveja Deheoni',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_08.jpg', // Beer
                tipo: 'Alcoólica',
                descricao: 'A bebida mais comum nas tavernas do Reinado.',
                efeito: '+1 em testes de resistência.',
                cd: '15',
                icone: '🍻'
            },
            {
                nome: 'Dilínio',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_11.jpg', // Whiskey
                tipo: 'Alcoólica',
                descricao: 'Destilado tradicional de Mortenstenn, feito com um cereal que só cresce no continente sul. A receita se perdeu após as invasões duyshidakk, e poucos barris chegaram ao Reinado.',
                efeito: 'O limite de gasto de PM aumenta em +1.',
                cd: '20',
                observacao: 'Não pode ser fabricado',
                icone: '🥃'
            },
            {
                nome: 'Grogue Negro',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_12.jpg', // Rum
                tipo: 'Alcoólica',
                descricao: 'Rum misturado com especiarias. Seu nome vem de sua origem — piratas do Conclave, que atuam no Mar Negro — e não da cor da bebida, que é dourada clara.',
                efeito: 'Quando você usa Audácia, o bônus fornecido pelo poder aumenta em +1.',
                cd: '15',
                icone: '🏴‍☠️'
            },
            {
                nome: 'Grogue Rubro',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_13.jpg', // Spiced Rum
                tipo: 'Alcoólica',
                descricao: 'Variação do grogue negro, com especiarias picantes que fazem a bebida adquirir uma coloração avermelhada — e quem a bebe, certa inclinação para a violência.',
                efeito: 'Você pode usar Audácia para testes de ataque.',
                cd: '20',
                icone: '🔥'
            },
            {
                nome: 'Hidromel Uivante',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_14.jpg', // Mead
                tipo: 'Alcoólica',
                descricao: 'Fabricada nas montanhas geladas, esta bebida aquece e incita.',
                efeito: '+2 em rolagens de dano corpo a corpo.',
                cd: '20',
                icone: '❄️'
            },
            {
                nome: 'Licor Feérico',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_15.jpg', // Fairy Wine
                tipo: 'Alcoólica',
                descricao: 'De aparência enevoada e gosto adocicado, dizem que é feito na Pondsmânia e trazido com dificuldade ao Reinado. Alguns acham que é invenção dos taverneiros, até provarem uma dose.',
                efeito: 'Escolha uma habilidade. O custo para ativá-la diminui em –1 PM.',
                cd: '25',
                icone: '✨'
            },
            {
                nome: 'Sidra Ahleniense',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_16.jpg', // Cider
                tipo: 'Alcoólica',
                descricao: 'Esta bebida doce deixa qualquer um mais falante.',
                efeito: '+2 em testes de perícias originalmente baseadas em Carisma.',
                cd: '15',
                icone: '🍏'
            },
            {
                nome: 'Vinho Pruss',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_17.jpg', // Wine
                tipo: 'Alcoólica',
                descricao: 'Batizado em homenagem ao antigo Rei-Imperador Thormy — dizem que era o favorito do monarca.',
                efeito: 'Concede 3 pontos de mana temporários.',
                cd: '15',
                icone: '🍷'
            },
            {
                nome: 'Vinho Élfico',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_drink_18.jpg', // Elven Wine
                tipo: 'Alcoólica',
                descricao: 'De sabor complexo, aguça a mente.',
                efeito: '+1 na CD para resistir às suas habilidades.',
                cd: '20',
                icone: '🌿'
            }
        ];
    }

    // Dados completos das poções baseados no arquivo MD
    function getPocoesCompletas() {
        // Use generated potions data if available, otherwise fall back to hardcoded data
        try {
            const potionsData = require('./generated-potions-data.js');
            return potionsData;
        } catch {
            console.warn('Generated potions data not available, using hardcoded data');
            return [];
        }
    }

    function createPratoDetailModal(prato) {
        // Remove modal existente se houver
        const existingModal = document.getElementById('prato-detail-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('prato-detail-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'prato-detail-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };
        document.body.appendChild(overlay);

        // Modal
        const modal = document.createElement('div');
        modal.id = 'prato-detail-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #ffb86c';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.zIndex = '10003';
        modal.style.maxWidth = '500px';
        modal.style.maxHeight = '80vh';
        modal.style.overflowY = 'auto';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.8)';

        // Cabeçalho com ícone, nome e raridade
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'flex-start';
        header.style.marginBottom = '15px';

        // Container do ícone e informações do prato
        const pratoInfo = document.createElement('div');
        pratoInfo.style.display = 'flex';
        pratoInfo.style.alignItems = 'center';
        pratoInfo.style.gap = '12px';
        pratoInfo.style.flex = '1';

        // Ícone do prato com borda (usando cache)
        if (prato.iconeUrl) {
            const iconeContainer = document.createElement('div');
            iconeContainer.style.position = 'relative';
            iconeContainer.style.width = '3rem';
            iconeContainer.style.height = '3rem';
            iconeContainer.style.display = 'flex';
            iconeContainer.style.alignItems = 'center';
            iconeContainer.style.justifyContent = 'center';
            iconeContainer.style.border = '2px solid #ffb86c';
            iconeContainer.style.borderRadius = '8px';
            iconeContainer.style.padding = '2px';
            iconeContainer.style.backgroundColor = '#23243a';

            // Usa o sistema de cache para carregar a imagem
            const cachedImageElement = createCachedImageElement(
                prato.iconeUrl,
                prato.nome,
                prato.icone || '🍲',
                {
                    width: '100%',
                    height: '100%',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    showSkeleton: true
                }
            );

            iconeContainer.appendChild(cachedImageElement);
            pratoInfo.appendChild(iconeContainer);
        }

        // Container do nome e raridade
        const nomeRaridade = document.createElement('div');
        nomeRaridade.style.display = 'flex';
        nomeRaridade.style.flexDirection = 'column';
        nomeRaridade.style.gap = '4px';

        // Nome do prato
        const pratoTitle = document.createElement('div');
        pratoTitle.textContent = prato.nome;
        pratoTitle.style.color = '#ffb86c';
        pratoTitle.style.fontSize = '18px';
        pratoTitle.style.fontWeight = 'bold';
        nomeRaridade.appendChild(pratoTitle);

        // Raridade
        const raridade = document.createElement('div');
        raridade.textContent = `Raridade: ${prato.raridade || 'Comum'}`;
        raridade.style.color = '#6ec6ff';
        raridade.style.fontSize = '14px';
        nomeRaridade.appendChild(raridade);

        pratoInfo.appendChild(nomeRaridade);
        header.appendChild(pratoInfo);        // Botão de fechar
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                modal.remove();
                overlay.remove();
            }
        });
        header.appendChild(closeBtn.render());
        modal.appendChild(header);

        // Descrição
        const descSection = document.createElement('div');
        descSection.style.marginBottom = '15px';
        const descTitle = document.createElement('h3');
        descTitle.textContent = 'Descrição';
        descTitle.style.color = '#6ec6ff';
        descTitle.style.fontSize = '16px';
        descTitle.style.margin = '0 0 8px 0';
        descSection.appendChild(descTitle);
        const descText = document.createElement('p');
        descText.textContent = prato.descricao;
        descText.style.color = '#ecf0f1';
        descText.style.fontSize = '14px';
        descText.style.margin = '0';
        descText.style.lineHeight = '1.4';
        descSection.appendChild(descText);
        modal.appendChild(descSection);

        // Benefício
        const bonusSection = document.createElement('div');
        bonusSection.style.marginBottom = '15px';
        const bonusTitle = document.createElement('h3');
        bonusTitle.textContent = 'Benefício';
        bonusTitle.style.color = '#6ec6ff';
        bonusTitle.style.fontSize = '16px';
        bonusTitle.style.margin = '0 0 8px 0';
        bonusSection.appendChild(bonusTitle);
        const bonusText = document.createElement('p');
        bonusText.textContent = prato.bonus;
        bonusText.style.color = '#ffb86c';
        bonusText.style.fontSize = '14px';
        bonusText.style.fontWeight = 'bold';
        bonusText.style.margin = '0';
        bonusSection.appendChild(bonusText);
        modal.appendChild(bonusSection);

        // Duração do Efeito
        const duracaoSection = document.createElement('div');
        duracaoSection.style.marginBottom = '15px';
        const duracaoTitle = document.createElement('h3');
        duracaoTitle.textContent = 'Duração do Efeito';
        duracaoTitle.style.color = '#6ec6ff';
        duracaoTitle.style.fontSize = '16px';
        duracaoTitle.style.margin = '0 0 8px 0';
        duracaoSection.appendChild(duracaoTitle);

        const duracaoText = document.createElement('p');
        // Determina a duração baseada no nome do prato
        let duracao = '1 dia (24 horas)';
        if (prato.nome === 'Batata Valkariana') {
            duracao = 'Até o bônus ser aplicado (consumível)';
        }
        duracaoText.textContent = duracao;
        duracaoText.style.color = '#27ae60';
        duracaoText.style.fontSize = '14px';
        duracaoText.style.fontWeight = 'bold';
        duracaoText.style.margin = '0';
        duracaoText.style.padding = '8px 12px';
        duracaoText.style.background = '#1a1a2e';
        duracaoText.style.border = '1px solid #27ae60';
        duracaoText.style.borderRadius = '6px';
        duracaoSection.appendChild(duracaoText);
        modal.appendChild(duracaoSection);

        // Informações de Culinária
        const culinariaSection = document.createElement('div');
        culinariaSection.style.marginBottom = '20px';
        const culinariaTitle = document.createElement('h3');
        culinariaTitle.textContent = 'Informações de Culinária';
        culinariaTitle.style.color = '#6ec6ff';
        culinariaTitle.style.fontSize = '16px';
        culinariaTitle.style.margin = '0 0 8px 0';
        culinariaSection.appendChild(culinariaTitle);

        const culinariaGrid = document.createElement('div');
        culinariaGrid.style.display = 'grid';
        culinariaGrid.style.gridTemplateColumns = '1fr 1fr';
        culinariaGrid.style.gap = '10px';

        const infoItems = [
            { label: 'Preço', value: prato.preco, color: '#ffb86c' },
            { label: 'CD do Teste', value: prato.cdTeste, color: '#ffb86c' },
            { label: 'Ingredientes', value: prato.ingredientes, color: '#ecf0f1' },
            { label: 'Custo dos Ingredientes', value: prato.custoIngredientes, color: '#ecf0f1' }
        ];

        infoItems.forEach(item => {
            const infoItem = document.createElement('div');
            infoItem.style.background = '#23243a';
            infoItem.style.padding = '8px 10px';
            infoItem.style.borderRadius = '6px';
            infoItem.style.border = '1px solid #444';

            const label = document.createElement('div');
            label.textContent = item.label;
            label.style.color = '#888';
            label.style.fontSize = '12px';
            label.style.marginBottom = '2px';
            infoItem.appendChild(label);

            const value = document.createElement('div');
            value.textContent = item.value;
            value.style.color = item.color;
            value.style.fontSize = '13px';
            value.style.fontWeight = 'bold';
            infoItem.appendChild(value);

            culinariaGrid.appendChild(infoItem);
        });

        culinariaSection.appendChild(culinariaGrid);
        modal.appendChild(culinariaSection);

        // Botões
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.gap = '10px';
        buttonsContainer.style.marginTop = '20px';

        // Botão Compartilhar
        const shareBtn = document.createElement('button');
        shareBtn.textContent = 'Compartilhar';
        shareBtn.style.flex = '1';
        shareBtn.style.padding = '10px 15px';
        shareBtn.style.background = '#2c3e50';
        shareBtn.style.border = '1px solid #34495e';
        shareBtn.style.borderRadius = '6px';
        shareBtn.style.color = '#ecf0f1';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.fontSize = '14px';
        shareBtn.onclick = () => {
            const template = `&{template:t20-info}{{infoname=${prato.nome}}}{{description=${prato.descricao} ${prato.bonus}}}`;
            sendToChat(template);
            showSuccessNotification(`Prato "${prato.nome}" compartilhado no chat!`);
            // Fechar todos os popups abertos
            closeAllPopups();
        };
        buttonsContainer.appendChild(shareBtn);

        // Botão Usar
        const useBtn = document.createElement('button');
        useBtn.textContent = 'Consumir Prato';
        useBtn.style.flex = '1';
        useBtn.style.padding = '10px 15px';
        useBtn.style.background = '#27ae60';
        useBtn.style.border = '1px solid #2ecc71';
        useBtn.style.borderRadius = '6px';
        useBtn.style.color = '#ecf0f1';
        useBtn.style.cursor = 'pointer';
        useBtn.style.fontSize = '14px';
        useBtn.onclick = () => {
            const effectKey = 'prato_' + prato.nome.toLowerCase().replace(/[^a-z0-9]+/g, '_');
            const effect = {
                name: prato.nome,
                description: prato.descricao + ' ' + prato.bonus,
                type: 'Comida',
                effectKey: effectKey
            };

            let activeEffects = getActiveEffects();
            if (!activeEffects.includes(effectKey)) {
                let comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                comidaEffects = comidaEffects.filter(e => e.effectKey !== effectKey);
                comidaEffects.push(effect);
                localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));
                activeEffects.push(effectKey);

                // Adiciona à ordem dos efeitos
                addEffectToOrder(effectKey, 'food');

                showSuccessNotification(`Prato "${prato.nome}" consumido! Efeito ativo por 1 dia (24 horas).`);
                saveActiveEffects(activeEffects);
                updateEffectsBadge();
                updateEffectsVisualIndicators(); // NOVO: Atualiza indicadores visuais unificados

                // Enviar mensagem no chat informando que o personagem consumiu o prato
                const emoteMessage = `/em ${getCharacterName()} consumiu **${prato.nome}** ${prato.icone || '🍽️'}`;
                sendToChat(emoteMessage);
            } else {
                showWarningNotification(`Prato "${prato.nome}" já está ativo nos efeitos!`);
            }

            // Fechar todos os popups relacionados aos pratos especiais para limpar a cena
            const pratosPopup = document.getElementById('pratos-popup');
            if (pratosPopup) pratosPopup.remove();
            const pratosOverlay = document.getElementById('pratos-overlay');
            if (pratosOverlay) pratosOverlay.remove();
            const miscPopup = document.getElementById('misc-popup');
            if (miscPopup) miscPopup.remove();
            const miscOverlay = document.getElementById('misc-overlay');
            if (miscOverlay) miscOverlay.remove();

            modal.remove();
            overlay.remove();
        };
        buttonsContainer.appendChild(useBtn);

        modal.appendChild(buttonsContainer);
        document.body.appendChild(modal);
    }
    // Função para criar modal de detalhes da bebida
    function createBebidaDetailModal(bebida) {
        // Remove modal existente se houver
        const existingModal = document.getElementById('bebida-detail-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('bebida-detail-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'bebida-detail-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };
        document.body.appendChild(overlay);

        // Modal
        const modal = document.createElement('div');
        modal.id = 'bebida-detail-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #ffb86c';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.zIndex = '10003';
        modal.style.maxWidth = '500px';
        modal.style.maxHeight = '80vh';
        modal.style.overflowY = 'auto';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.8)';

        // Cabeçalho com ícone, nome e tipo
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'flex-start';
        header.style.marginBottom = '15px';

        // Container do ícone e informações da bebida
        const bebidaInfo = document.createElement('div');
        bebidaInfo.style.display = 'flex';
        bebidaInfo.style.alignItems = 'center';
        bebidaInfo.style.gap = '12px';
        bebidaInfo.style.flex = '1';

        // Ícone da bebida com borda (usando cache)
        if (bebida.iconeUrl) {
            const iconeContainer = document.createElement('div');
            iconeContainer.style.position = 'relative';
            iconeContainer.style.width = '3rem';
            iconeContainer.style.height = '3rem';
            iconeContainer.style.display = 'flex';
            iconeContainer.style.alignItems = 'center';
            iconeContainer.style.justifyContent = 'center';
            iconeContainer.style.border = '2px solid #ffb86c';
            iconeContainer.style.borderRadius = '8px';
            iconeContainer.style.padding = '2px';
            iconeContainer.style.backgroundColor = '#23243a';

            // Usa o sistema de cache para carregar a imagem
            const cachedImageElement = createCachedImageElement(
                bebida.iconeUrl,
                bebida.nome,
                bebida.icone || '🍺',
                {
                    width: '100%',
                    height: '100%',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    showSkeleton: true
                }
            );

            iconeContainer.appendChild(cachedImageElement);
            bebidaInfo.appendChild(iconeContainer);
        }

        // Container do nome e tipo
        const nomeTipo = document.createElement('div');
        nomeTipo.style.display = 'flex';
        nomeTipo.style.flexDirection = 'column';
        nomeTipo.style.gap = '4px';

        // Nome da bebida
        const bebidaTitle = document.createElement('div');
        bebidaTitle.textContent = bebida.nome;
        bebidaTitle.style.color = '#ffb86c';
        bebidaTitle.style.fontSize = '18px';
        bebidaTitle.style.fontWeight = 'bold';
        nomeTipo.appendChild(bebidaTitle);

        // Tipo
        const tipo = document.createElement('div');
        tipo.textContent = `Tipo: ${bebida.tipo}`;
        tipo.style.color = '#6ec6ff';
        tipo.style.fontSize = '14px';
        nomeTipo.appendChild(tipo);

        bebidaInfo.appendChild(nomeTipo);
        header.appendChild(bebidaInfo);        // Botão de fechar
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                modal.remove();
                overlay.remove();
            }
        });
        header.appendChild(closeBtn.render());
        modal.appendChild(header);

        // Descrição
        const descSection = document.createElement('div');
        descSection.style.marginBottom = '15px';
        const descTitle = document.createElement('h3');
        descTitle.textContent = 'Descrição';
        descTitle.style.color = '#6ec6ff';
        descTitle.style.fontSize = '16px';
        descTitle.style.margin = '0 0 8px 0';
        descSection.appendChild(descTitle);
        const descText = document.createElement('p');
        descText.textContent = bebida.descricao;
        descText.style.color = '#ecf0f1';
        descText.style.fontSize = '14px';
        descText.style.margin = '0';
        descText.style.lineHeight = '1.4';
        descSection.appendChild(descText);
        modal.appendChild(descSection);

        // Efeito
        const efeitoSection = document.createElement('div');
        efeitoSection.style.marginBottom = '15px';
        const efeitoTitle = document.createElement('h3');
        efeitoTitle.textContent = 'Efeito';
        efeitoTitle.style.color = '#6ec6ff';
        efeitoTitle.style.fontSize = '16px';
        efeitoTitle.style.margin = '0 0 8px 0';
        efeitoSection.appendChild(efeitoTitle);
        const efeitoText = document.createElement('p');
        efeitoText.textContent = bebida.efeito;
        efeitoText.style.color = '#ffb86c';
        efeitoText.style.fontSize = '14px';
        efeitoText.style.fontWeight = 'bold';
        efeitoText.style.margin = '0';
        efeitoSection.appendChild(efeitoText);
        modal.appendChild(efeitoSection);

        // Duração do Efeito
        const duracaoSection = document.createElement('div');
        duracaoSection.style.marginBottom = '15px';
        const duracaoTitle = document.createElement('h3');
        duracaoTitle.textContent = 'Duração do Efeito';
        duracaoTitle.style.color = '#6ec6ff';
        duracaoTitle.style.fontSize = '16px';
        duracaoTitle.style.margin = '0 0 8px 0';
        duracaoSection.appendChild(duracaoTitle);

        const duracaoText = document.createElement('p');
        // Determina a duração baseada no nome da bebida
        let duracao = '1 dia (24 horas)';
        if (bebida.nome === 'Baba de Troll') {
            duracao = 'Até o bônus ser aplicado (consumível)';
        }
        duracaoText.textContent = duracao;
        duracaoText.style.color = '#27ae60';
        duracaoText.style.fontSize = '14px';
        duracaoText.style.fontWeight = 'bold';
        duracaoText.style.margin = '0';
        duracaoText.style.padding = '8px 12px';
        duracaoText.style.background = '#1a1a2e';
        duracaoText.style.border = '1px solid #27ae60';
        duracaoText.style.borderRadius = '6px';
        duracaoSection.appendChild(duracaoText);
        modal.appendChild(duracaoSection);

        // Informações de Bebida
        const bebidaInfoSection = document.createElement('div');
        bebidaInfoSection.style.marginBottom = '20px';
        const bebidaInfoTitle = document.createElement('h3');
        bebidaInfoTitle.textContent = 'Informações da Bebida';
        bebidaInfoTitle.style.color = '#6ec6ff';
        bebidaInfoTitle.style.fontSize = '16px';
        bebidaInfoTitle.style.margin = '0 0 8px 0';
        bebidaInfoSection.appendChild(bebidaInfoTitle);

        const bebidaInfoGrid = document.createElement('div');
        bebidaInfoGrid.style.display = 'grid';
        bebidaInfoGrid.style.gridTemplateColumns = '1fr 1fr';
        bebidaInfoGrid.style.gap = '10px';

        const infoItems = [
            { label: 'CD Fortitude', value: bebida.cd, color: '#ffb86c' }
        ];

        // Adiciona observação se existir
        if (bebida.observacao) {
            infoItems.push({ label: 'Observação', value: bebida.observacao, color: '#ecf0f1' });
        }

        infoItems.forEach(item => {
            const infoItem = document.createElement('div');
            infoItem.style.background = '#23243a';
            infoItem.style.padding = '8px 10px';
            infoItem.style.borderRadius = '6px';
            infoItem.style.border = '1px solid #444';

            const label = document.createElement('div');
            label.textContent = item.label;
            label.style.color = '#888';
            label.style.fontSize = '12px';
            label.style.marginBottom = '2px';
            infoItem.appendChild(label);

            const value = document.createElement('div');
            value.textContent = item.value;
            value.style.color = item.color;
            value.style.fontSize = '13px';
            value.style.fontWeight = 'bold';
            infoItem.appendChild(value);

            bebidaInfoGrid.appendChild(infoItem);
        });

        bebidaInfoSection.appendChild(bebidaInfoGrid);
        modal.appendChild(bebidaInfoSection);

        // Botões
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.gap = '10px';
        buttonsContainer.style.marginTop = '20px';

        // Botão Compartilhar
        const shareBtn = document.createElement('button');
        shareBtn.textContent = 'Compartilhar';
        shareBtn.style.flex = '1';
        shareBtn.style.padding = '10px 15px';
        shareBtn.style.background = '#2c3e50';
        shareBtn.style.border = '1px solid #34495e';
        shareBtn.style.borderRadius = '6px';
        shareBtn.style.color = '#ecf0f1';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.fontSize = '14px';
        shareBtn.onclick = () => {
            const template = `&{template:t20-info}{{infoname=${bebida.nome}}}{{description=${bebida.descricao} ${bebida.efeito}}}`;
            sendToChat(template);
            showSuccessNotification(`Bebida "${bebida.nome}" compartilhada no chat!`);
            // Fechar todos os popups abertos
            closeAllPopups();
        };
        buttonsContainer.appendChild(shareBtn);

        // Botão Usar
        const useBtn = document.createElement('button');
        useBtn.textContent = 'Consumir Bebida';
        useBtn.style.flex = '1';
        useBtn.style.padding = '10px 15px';
        useBtn.style.background = '#27ae60';
        useBtn.style.border = '1px solid #2ecc71';
        useBtn.style.borderRadius = '6px';
        useBtn.style.color = '#ecf0f1';
        useBtn.style.cursor = 'pointer';
        useBtn.style.fontSize = '14px';
        useBtn.onclick = () => {
            const effectKey = 'bebida_' + bebida.nome.toLowerCase().replace(/[^a-z0-9]+/g, '_');
            const effect = {
                name: bebida.nome,
                description: bebida.descricao + ' ' + bebida.efeito,
                type: 'Bebida',
                effectKey: effectKey
            };

            let activeEffects = getActiveEffects();
            if (!activeEffects.includes(effectKey)) {
                let bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                bebidaEffects = bebidaEffects.filter(e => e.effectKey !== effectKey);
                bebidaEffects.push(effect);
                localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));
                activeEffects.push(effectKey);

                // Adiciona à ordem dos efeitos
                addEffectToOrder(effectKey, 'drink');

                // Mensagem personalizada baseada no tipo de bebida
                let notificationMessage = `Bebida "${bebida.nome}" consumida! Efeito ativo por 1 dia (24 horas).`;
                if (bebida.nome === 'Baba de Troll') {
                    notificationMessage = `Bebida "${bebida.nome}" consumida! Bônus disponível para uso.`;
                }
                showSuccessNotification(notificationMessage);
                saveActiveEffects(activeEffects);
                updateEffectsBadge();
                updateEffectsVisualIndicators(); // NOVO: Atualiza indicadores visuais unificados

                // Enviar mensagem no chat informando que o personagem consumiu a bebida
                const emoteMessage = `/em ${getCharacterName()} consumiu **${bebida.nome}** ${bebida.icone || '🍺'}`;
                sendToChat(emoteMessage);
            } else {
                showWarningNotification(`Bebida "${bebida.nome}" já está ativa nos efeitos!`);
            }

            // Fechar todos os popups relacionados às bebidas para limpar a cena
            const bebidasPopup = document.getElementById('bebidas-popup');
            if (bebidasPopup) bebidasPopup.remove();
            const bebidasOverlay = document.getElementById('bebidas-overlay');
            if (bebidasOverlay) bebidasOverlay.remove();
            const miscPopup = document.getElementById('misc-popup');
            if (miscPopup) miscPopup.remove();
            const miscOverlay = document.getElementById('misc-overlay');
            if (miscOverlay) miscOverlay.remove();

            modal.remove();
            overlay.remove();
        };
        buttonsContainer.appendChild(useBtn);

        modal.appendChild(buttonsContainer);
        document.body.appendChild(modal);
    }

    // Função para criar modal de detalhes da poção
    function createPocaoDetailModal(pocao) {
        // Remove modal existente se houver
        const existingModal = document.getElementById('pocao-detail-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('pocao-detail-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'pocao-detail-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };
        document.body.appendChild(overlay);

        // Modal
        const modal = document.createElement('div');
        modal.id = 'pocao-detail-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #ffb86c';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.zIndex = '10003';
        modal.style.maxWidth = '600px';
        modal.style.maxHeight = '85vh';
        modal.style.overflowY = 'auto';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.8)';

        // Cabeçalho com ícone, nome e tipo
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'flex-start';
        header.style.marginBottom = '20px';

        // Container do ícone e informações da poção
        const pocaoInfo = document.createElement('div');
        pocaoInfo.style.display = 'flex';
        pocaoInfo.style.alignItems = 'center';
        pocaoInfo.style.gap = '12px';
        pocaoInfo.style.flex = '1';

        // Ícone da poção com borda (usando cache)
        if (pocao.iconeUrl) {
            const iconeContainer = document.createElement('div');
            iconeContainer.style.position = 'relative';
            iconeContainer.style.width = '3rem';
            iconeContainer.style.height = '3rem';
            iconeContainer.style.display = 'flex';
            iconeContainer.style.alignItems = 'center';
            iconeContainer.style.justifyContent = 'center';
            iconeContainer.style.border = '2px solid #ffb86c';
            iconeContainer.style.borderRadius = '8px';
            iconeContainer.style.padding = '2px';
            iconeContainer.style.backgroundColor = '#23243a';

            // Usa o sistema de cache para carregar a imagem
            const cachedImageElement = createCachedImageElement(
                pocao.iconeUrl,
                pocao.nome,
                pocao.icone || '🧪',
                {
                    width: '100%',
                    height: '100%',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    showSkeleton: true
                }
            );

            iconeContainer.appendChild(cachedImageElement);
            pocaoInfo.appendChild(iconeContainer);
        }

        // Container do nome e tipo
        const nomeTipo = document.createElement('div');
        nomeTipo.style.display = 'flex';
        nomeTipo.style.flexDirection = 'column';
        nomeTipo.style.gap = '4px';

        // Nome da poção
        const pocaoTitle = document.createElement('div');
        pocaoTitle.textContent = pocao.nome;
        pocaoTitle.style.color = '#ffb86c';
        pocaoTitle.style.fontSize = '18px';
        pocaoTitle.style.fontWeight = 'bold';
        nomeTipo.appendChild(pocaoTitle);

        // Tipo
        const tipo = document.createElement('div');
        tipo.textContent = `Tipo: ${pocao.tipo}`;
        tipo.style.color = '#6ec6ff';
        tipo.style.fontSize = '14px';
        nomeTipo.appendChild(tipo);

        pocaoInfo.appendChild(nomeTipo);
        header.appendChild(pocaoInfo);

        // Botão de fechar
        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                modal.remove();
                overlay.remove();
            }
        });
        header.appendChild(closeBtn.render());
        modal.appendChild(header);

        // Chips informativos
        const chipsContainer = document.createElement('div');
        chipsContainer.style.display = 'flex';
        chipsContainer.style.flexWrap = 'wrap';
        chipsContainer.style.gap = '8px';
        chipsContainer.style.marginBottom = '20px';

        // Função para criar chip
        const createChip = (text, color, bgColor) => {
            const chip = document.createElement('div');
            chip.textContent = text;
            chip.style.padding = '4px 8px';
            chip.style.borderRadius = '12px';
            chip.style.fontSize = '12px';
            chip.style.fontWeight = 'bold';
            chip.style.color = color;
            chip.style.backgroundColor = bgColor;
            chip.style.border = `1px solid ${color}`;
            return chip;
        };

        // Chips baseados nas informações disponíveis
        if (pocao.preco) {
            chipsContainer.appendChild(createChip(pocao.preco, '#ffb86c', 'rgba(255,184,108,0.1)'));
        }
        if (pocao.system?.alcance) {
            chipsContainer.appendChild(createChip(`Alcance: ${pocao.system.alcance}`, '#6ec6ff', 'rgba(110,198,255,0.1)'));
        }
        if (pocao.system?.alvo) {
            chipsContainer.appendChild(createChip(`Alvo: ${pocao.system.alvo}`, '#a78bfa', 'rgba(167,139,250,0.1)'));
        }
        if (pocao.system?.duracao) {
            chipsContainer.appendChild(createChip(`Duração: ${pocao.system.duracao}`, '#27ae60', 'rgba(39,174,96,0.1)'));
        }
        if (pocao.system?.resistencia && pocao.system.resistencia !== 'Nenhuma') {
            chipsContainer.appendChild(createChip(`Resistência: ${pocao.system.resistencia}`, '#e74c3c', 'rgba(231,76,60,0.1)'));
        }
        if (pocao.system?.ativacao) {
            chipsContainer.appendChild(createChip(`Ativação: ${pocao.system.ativacao}`, '#f39c12', 'rgba(243,156,18,0.1)'));
        }

        modal.appendChild(chipsContainer);

        // Efeito Principal (destaque)
        if (pocao.efeito) {
            const efeitoSection = document.createElement('div');
            efeitoSection.style.marginBottom = '20px';
            efeitoSection.style.padding = '15px';
            efeitoSection.style.background = 'rgba(255,184,108,0.05)';
            efeitoSection.style.border = '1px solid rgba(255,184,108,0.2)';
            efeitoSection.style.borderRadius = '8px';

            const efeitoTitle = document.createElement('h3');
            efeitoTitle.textContent = '🎯 Efeito Principal';
            efeitoTitle.style.color = '#ffb86c';
            efeitoTitle.style.fontSize = '16px';
            efeitoTitle.style.margin = '0 0 10px 0';
            efeitoTitle.style.fontWeight = 'bold';
            efeitoSection.appendChild(efeitoTitle);

            const efeitoText = document.createElement('p');
            efeitoText.textContent = pocao.efeito;
            efeitoText.style.color = '#ecf0f1';
            efeitoText.style.fontSize = '15px';
            efeitoText.style.fontWeight = 'bold';
            efeitoText.style.margin = '0';
            efeitoText.style.lineHeight = '1.4';
            efeitoSection.appendChild(efeitoText);
            modal.appendChild(efeitoSection);
        }

        // Descrição Detalhada
        if (pocao.descricao) {
            const descSection = document.createElement('div');
            descSection.style.marginBottom = '20px';
            const descTitle = document.createElement('h3');
            descTitle.textContent = '📖 Descrição';
            descTitle.style.color = '#6ec6ff';
            descTitle.style.fontSize = '16px';
            descTitle.style.margin = '0 0 10px 0';
            descTitle.style.fontWeight = 'bold';
            descSection.appendChild(descTitle);
            const descText = document.createElement('p');
            descText.textContent = pocao.descricao;
            descText.style.color = '#ecf0f1';
            descText.style.fontSize = '14px';
            descText.style.margin = '0';
            descText.style.lineHeight = '1.5';
            descSection.appendChild(descText);
            modal.appendChild(descSection);
        }

        // Informações Técnicas (se disponíveis)
        const technicalInfo = [];
        if (pocao.system?.peso) technicalInfo.push({ label: 'Peso', value: `${pocao.system.peso} kg` });
        if (pocao.system?.espacos) technicalInfo.push({ label: 'Espaços', value: pocao.system.espacos });
        if (pocao.system?.source) technicalInfo.push({ label: 'Fonte', value: pocao.system.source });

        if (technicalInfo.length > 0) {
            const techSection = document.createElement('div');
            techSection.style.marginBottom = '20px';
            const techTitle = document.createElement('h3');
            techTitle.textContent = '⚙️ Informações Técnicas';
            techTitle.style.color = '#6ec6ff';
            techTitle.style.fontSize = '16px';
            techTitle.style.margin = '0 0 10px 0';
            techTitle.style.fontWeight = 'bold';
            techSection.appendChild(techTitle);

            const techGrid = document.createElement('div');
            techGrid.style.display = 'grid';
            techGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
            techGrid.style.gap = '10px';

            technicalInfo.forEach(item => {
                const infoItem = document.createElement('div');
                infoItem.style.background = '#23243a';
                infoItem.style.padding = '8px 12px';
                infoItem.style.borderRadius = '6px';
                infoItem.style.border = '1px solid #444';

                const label = document.createElement('div');
                label.textContent = item.label;
                label.style.color = '#888';
                label.style.fontSize = '12px';
                label.style.marginBottom = '2px';
                infoItem.appendChild(label);

                const value = document.createElement('div');
                value.textContent = item.value;
                value.style.color = '#ecf0f1';
                value.style.fontSize = '13px';
                value.style.fontWeight = 'bold';
                infoItem.appendChild(value);

                techGrid.appendChild(infoItem);
            });

            techSection.appendChild(techGrid);
            modal.appendChild(techSection);
        }

        // Botões
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.gap = '10px';
        buttonsContainer.style.marginTop = '20px';

        // Botão Compartilhar
        const shareBtn = document.createElement('button');
        shareBtn.textContent = '📤 Compartilhar';
        shareBtn.style.flex = '1';
        shareBtn.style.padding = '12px 15px';
        shareBtn.style.background = '#2c3e50';
        shareBtn.style.border = '1px solid #34495e';
        shareBtn.style.borderRadius = '6px';
        shareBtn.style.color = '#ecf0f1';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.fontSize = '14px';
        shareBtn.style.fontWeight = 'bold';
        shareBtn.onclick = () => {
            const template = `&{template:t20-info}{{infoname=${pocao.nome}}}{{description=${pocao.descricao} ${pocao.efeito}}}`;
            sendToChat(template);
            showSuccessNotification(`Poção "${pocao.nome}" compartilhada no chat!`);
            // Fechar todos os popups abertos
            closeAllPopups();
        };
        buttonsContainer.appendChild(shareBtn);

        // Botão Usar
        const useBtn = document.createElement('button');
        useBtn.textContent = '🧪 Usar Poção';
        useBtn.style.flex = '1';
        useBtn.style.padding = '12px 15px';
        useBtn.style.background = '#27ae60';
        useBtn.style.border = '1px solid #2ecc71';
        useBtn.style.borderRadius = '6px';
        useBtn.style.color = '#ecf0f1';
        useBtn.style.cursor = 'pointer';
        useBtn.style.fontSize = '14px';
        useBtn.style.fontWeight = 'bold';
        useBtn.onclick = () => {
            const effectKey = 'pocao_' + pocao.nome.toLowerCase().replace(/[^a-z0-9]+/g, '_');
            const effect = {
                name: pocao.nome,
                description: pocao.descricao + ' ' + pocao.efeito,
                type: 'Poção',
                effectKey: effectKey
            };

            let activeEffects = getActiveEffects();
            if (!activeEffects.includes(effectKey)) {
                let pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
                pocaoEffects = pocaoEffects.filter(e => e.effectKey !== effectKey);
                pocaoEffects.push(effect);
                localStorage.setItem('roll20-hotbar-pocao-effects', JSON.stringify(pocaoEffects));
                activeEffects.push(effectKey);

                // Adiciona à ordem dos efeitos
                addEffectToOrder(effectKey, 'potion');

                showSuccessNotification(`Poção "${pocao.nome}" usada! Efeito ativo por cena.`);
                saveActiveEffects(activeEffects);
                updateEffectsBadge();
                updateEffectsVisualIndicators();

                // Enviar mensagem no chat informando que o personagem usou a poção
                const emoteMessage = `/em ${getCharacterName()} usou **${pocao.nome}** ${pocao.icone || '🧪'}`;
                sendToChat(emoteMessage);
            } else {
                showWarningNotification(`Poção "${pocao.nome}" já está ativa nos efeitos!`);
            }

            // Fechar todos os popups relacionados às poções para limpar a cena
            const pocoesPopup = document.getElementById('pocoes-popup');
            if (pocoesPopup) pocoesPopup.remove();
            const pocoesOverlay = document.getElementById('pocoes-overlay');
            if (pocoesOverlay) pocoesOverlay.remove();
            const miscPopup = document.getElementById('misc-popup');
            if (miscPopup) miscPopup.remove();
            const miscOverlay = document.getElementById('misc-overlay');
            if (miscOverlay) miscOverlay.remove();

            modal.remove();
            overlay.remove();
        };
        buttonsContainer.appendChild(useBtn);

        modal.appendChild(buttonsContainer);
        document.body.appendChild(modal);
    }

    // Template reutilizável para itens de lista usando o componente FavoritableCard
    function createListItemCard(item, itemType, onFavoriteToggle) {
        const preset = itemType === 'food' ? 'food' :
            itemType === 'drink' ? 'drink' :
                itemType === 'potion' ? 'potion' : 'condition';

        // Para poções, limitar o tamanho da descrição e adicionar chips informativos
        let summary = item.descricao;
        let additionalInfo = null;

        if (itemType === 'potion') {
            // Limitar descrição a 120 caracteres
            if (summary && summary.length > 120) {
                summary = summary.substring(0, 120) + '...';
            }

            // Criar chips informativos para poções
            const chips = [];
            if (item.preco) chips.push({ text: item.preco, color: '#ffb86c' });
            if (item.system?.alcance) chips.push({ text: `Alcance: ${item.system.alcance}`, color: '#6ec6ff' });
            if (item.system?.duracao) chips.push({ text: `Duração: ${item.system.duracao}`, color: '#27ae60' });
            if (item.system?.resistencia && item.system.resistencia !== 'Nenhuma') {
                chips.push({ text: `Resistência: ${item.system.resistencia}`, color: '#e74c3c' });
            }

            if (chips.length > 0) {
                additionalInfo = chips;
            }
        }

        const card = window.Roll20Components.createFavoritableCardWithPreset(preset, {
            title: item.nome,
            summary: summary,
            // Adiciona os efeitos específicos para cada tipo de item
            bonus: itemType === 'food' ? item.bonus : undefined,
            efeito: (itemType === 'drink' || itemType === 'potion') ? item.efeito : undefined,
            efeitos: itemType === 'condition' ? item.efeitos : undefined,
            additionalInfo: additionalInfo, // Chips informativos para poções
            isFavorite: itemType === 'food' ? isPratoFavorito(item.nome) :
                itemType === 'drink' ? isBebidaFavorita(item.nome) :
                    itemType === 'potion' ? isPocaoFavorita(item.nome) : false,
            onClick: () => {
                if (itemType === 'food') {
                    createPratoDetailModal(item);
                } else if (itemType === 'drink') {
                    createBebidaDetailModal(item);
                } else if (itemType === 'potion') {
                    createPocaoDetailModal(item);
                }
            },
            onFavoriteToggle: () => {
                if (itemType === 'food') {
                    togglePratoFavorito(item.nome);
                } else if (itemType === 'drink') {
                    toggleBebidaFavorita(item.nome);
                } else if (itemType === 'potion') {
                    togglePocaoFavorita(item.nome);
                }
                if (onFavoriteToggle) onFavoriteToggle();
            }
        });

        return card.render();
    }
    // Função para criar modal de configurações
    function createConfigModal() {
        // Remove modal existente se houver
        const existingModal = document.getElementById('config-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('config-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'config-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };
        document.body.appendChild(overlay);

        // Modal
        const modal = document.createElement('div');
        modal.id = 'config-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #ffb86c';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.zIndex = '10003';
        modal.style.maxWidth = '500px';
        modal.style.maxHeight = '80vh';
        modal.style.overflowY = 'auto';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.8)';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '20px';
        header.style.paddingBottom = '15px';
        header.style.borderBottom = '1px solid rgba(255,184,108,0.3)';

        const title = document.createElement('h2');
        title.textContent = '⚙️ Configurações';
        title.style.color = '#ffb86c';
        title.style.margin = '0';
        title.style.fontSize = '20px';
        title.style.fontWeight = 'bold';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ffb86c',
            onClick: () => {
                overlay.remove();
                modal.remove();
            }
        }); header.appendChild(title);
        header.appendChild(closeBtn.render());

        // Conteúdo simples
        const content = document.createElement('div');
        content.style.color = '#ecf0f1';
        content.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <h3 style="color: #ffb86c; margin-bottom: 10px;">Informações do Script</h3>
                    <p><strong>Versão:</strong> ${getGitVersion()}</p>
                    <p><strong>Autor:</strong> Daniel Marinho Goncalves</p>
                    <p><strong>Última atualização:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: center;">
                        <button id="clear-all-data-btn" style="width: 100%; padding: 12px 20px; border: 1px solid #ff6e6e; border-radius: 6px; background: transparent; color: #ff6e6e; cursor: pointer; font-size: 14px; font-weight: bold; transition: all 0.2s ease;" title="Remove todos os dados salvos (cache de imagens, efeitos ativos, configurações, etc.) e recarrega a página">Limpar Dados</button>
                    </div>
                </div>
            `;

        // Evento do botão único
        const clearButton = content.querySelector('#clear-all-data-btn');

        // Efeitos de hover
        clearButton.onmouseover = () => {
            clearButton.style.background = 'rgba(255, 110, 110, 0.1)';
            clearButton.style.borderColor = '#ff8e8e';
            clearButton.style.color = '#ff8e8e';
            clearButton.style.transform = 'scale(1.02)';
        };

        clearButton.onmouseout = () => {
            clearButton.style.background = 'transparent';
            clearButton.style.borderColor = '#ff6e6e';
            clearButton.style.color = '#ff6e6e';
            clearButton.style.transform = 'scale(1)';
        };

        clearButton.onclick = () => {
            if (confirm('Tem certeza que deseja limpar todos os dados salvos? Esta ação irá remover o cache de imagens, efeitos ativos, configurações e outros dados. Esta ação não pode ser desfeita.')) {
                // Limpar cache de imagens
                clearImageCache();

                // Limpar todos os dados do localStorage
                localStorage.clear();

                // Notificação de sucesso
                createNotification('Todos os dados foram limpos com sucesso!', 'success', 3000);

                // Recarregar a página após 1 segundo
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        };

        modal.appendChild(header);
        modal.appendChild(content);
        document.body.appendChild(modal);

        // Aplicar scrollbars customizadas
        applyDirectScrollbarStyles(modal, 'orange');
    }

    // Componente padronizado para mensagens de "nenhum resultado encontrado"
    function createNoResultsMessage(filterText, itemName, theme = 'blue') {
        const themes = {
            blue: '#6ec6ff',
            orange: '#ffb86c',
            purple: '#9c27b0',
            green: '#4caf50',
            red: '#ff6b6b',
            brown: '#8B4513'
        };

        const themeColor = themes[theme] || themes.blue;

        const noResultsMessage = document.createElement('div');
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.padding = '20px';
        noResultsMessage.style.color = '#999';
        noResultsMessage.style.fontSize = '14px';
        noResultsMessage.style.fontStyle = 'italic';
        noResultsMessage.innerHTML = `
                <div style="margin-bottom: 8px;">🔍</div>
                <div>Nenhum ${itemName} encontrado para "<strong style="color: ${themeColor};">${filterText}</strong>"</div>
                <div style="margin-top: 8px; font-size: 12px;">Tente um termo diferente ou limpe o filtro</div>
            `;
        return noResultsMessage;
    }
    function createPratosEspeciaisPopup() {
        console.log('Abrindo Pratos Especiais');
        try {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('pratos-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('pratos-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'pratos-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10000';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'pratos-popup';
            popup.className = 'roll20-popup roll20-popup-orange';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ffb86c';
            popup.style.borderRadius = '12px';
            popup.style.padding = '18px 20px 16px 20px';
            popup.style.zIndex = '10001';
            popup.style.maxWidth = '480px';
            popup.style.maxHeight = '600px';
            popup.style.overflowY = 'auto';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';        // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '15px';
            header.style.width = '100%';

            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ffb86c',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('pratos-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h3');
            title.textContent = 'Pratos Especiais';
            title.style.color = '#ffb86c';
            title.style.margin = '0';
            title.style.fontSize = '17px';
            title.style.fontWeight = 'bold'; header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Campo de filtro
            const filterContainer = document.createElement('div');
            filterContainer.style.position = 'relative';
            filterContainer.style.marginBottom = '10px';
            const filterInput = document.createElement('input');
            filterInput.type = 'text';
            filterInput.placeholder = 'Filtrar pratos...';
            filterInput.style.width = '100%';
            filterInput.style.padding = '10px 12px';
            filterInput.style.borderRadius = '8px';
            filterInput.style.border = '1px solid #ffb86c';
            filterInput.style.background = '#23243a';
            filterInput.style.color = '#fff';
            filterInput.style.fontSize = '14px';
            filterInput.style.outline = 'none';
            filterInput.style.boxSizing = 'border-box';
            filterInput.style.fontSize = '15px';
            filterContainer.appendChild(filterInput);
            popup.appendChild(filterContainer);



            // Lista de pratos (cards)
            const pratosList = document.createElement('div');
            pratosList.style.display = 'flex';
            pratosList.style.flexDirection = 'column';
            pratosList.style.gap = '14px';
            pratosList.style.marginTop = '10px';
            popup.appendChild(pratosList);

            // Dados dos pratos
            const pratos = getPratosCompletos();



            function renderPratosList(filterText = '') {
                pratosList.innerHTML = '';
                const filtered = pratos.filter(prato =>
                    prato.nome.toLowerCase().includes(filterText.toLowerCase()) ||
                    prato.descricao.toLowerCase().includes(filterText.toLowerCase()) ||
                    prato.bonus.toLowerCase().includes(filterText.toLowerCase())
                );

                // Ordena favoritos primeiro
                const favoritos = getPratosFavoritos();
                filtered.sort((a, b) => {
                    const aFavorito = favoritos.includes(a.nome);
                    const bFavorito = favoritos.includes(b.nome);
                    if (aFavorito && !bFavorito) return -1;
                    if (!aFavorito && bFavorito) return 1;
                    return a.nome.localeCompare(b.nome);
                });

                filtered.forEach(prato => {
                    const card = createListItemCard(prato, 'food', () => renderPratosList(filterInput.value));
                    pratosList.appendChild(card);
                });

                // Verifica se não há pratos encontrados durante a filtragem
                if (filtered.length === 0 && filterText.length > 0) {
                    const noResultsMessage = createNoResultsMessage(filterText, 'prato especial', 'orange');
                    pratosList.appendChild(noResultsMessage);
                }
            }

            // Atualiza a lista ao digitar
            filterInput.addEventListener('input', () => {
                renderPratosList(filterInput.value);
            });

            // Render inicial
            renderPratosList();

            // Adiciona o popup ao body
            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'orange');
        } catch (e) {
            console.error('Erro ao abrir Pratos Especiais:', e);
            alert('Erro ao abrir Pratos Especiais. Veja o console para detalhes.');
        }
    }

    // Função para criar popup de Bebidas Artonianas
    function createBebidasArtonianasPopup() {
        console.log('Abrindo Bebidas Artonianas');
        try {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('bebidas-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('bebidas-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'bebidas-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10000';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'bebidas-popup';
            popup.className = 'roll20-popup roll20-popup-orange';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ffb86c';
            popup.style.borderRadius = '12px';
            popup.style.padding = '18px 20px 16px 20px';
            popup.style.zIndex = '10001';
            popup.style.maxWidth = '480px';
            popup.style.maxHeight = '600px';
            popup.style.overflowY = 'auto';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';        // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '15px';
            header.style.width = '100%';

            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ffb86c',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('bebidas-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h3');
            title.textContent = 'Bebidas Artonianas';
            title.style.color = '#ffb86c';
            title.style.margin = '0';
            title.style.fontSize = '17px';
            title.style.fontWeight = 'bold'; header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Campo de filtro
            const filterContainer = document.createElement('div');
            filterContainer.style.position = 'relative';
            filterContainer.style.marginBottom = '10px';
            const filterInput = document.createElement('input');
            filterInput.type = 'text';
            filterInput.placeholder = 'Filtrar bebidas...';
            filterInput.style.width = '100%';
            filterInput.style.padding = '10px 12px';
            filterInput.style.borderRadius = '8px';
            filterInput.style.border = '1px solid #ffb86c';
            filterInput.style.background = '#23243a';
            filterInput.style.color = '#fff';
            filterInput.style.fontSize = '14px';
            filterInput.style.outline = 'none';
            filterInput.style.boxSizing = 'border-box';
            filterInput.style.fontSize = '15px';
            filterContainer.appendChild(filterInput);
            popup.appendChild(filterContainer);



            // Lista de bebidas (cards)
            const bebidasList = document.createElement('div');
            bebidasList.style.display = 'flex';
            bebidasList.style.flexDirection = 'column';
            bebidasList.style.gap = '14px';
            bebidasList.style.marginTop = '10px';
            popup.appendChild(bebidasList);

            // Dados das bebidas
            const bebidas = getBebidasCompletas();

            function renderBebidasList(filterText = '') {
                bebidasList.innerHTML = '';
                const filtered = bebidas.filter(bebida =>
                    bebida.nome.toLowerCase().includes(filterText.toLowerCase()) ||
                    bebida.descricao.toLowerCase().includes(filterText.toLowerCase()) ||
                    bebida.efeito.toLowerCase().includes(filterText.toLowerCase())
                );

                // Ordena favoritos primeiro
                const favoritas = getBebidasFavoritas();
                filtered.sort((a, b) => {
                    const aFavorita = favoritas.includes(a.nome);
                    const bFavorita = favoritas.includes(b.nome);
                    if (aFavorita && !bFavorita) return -1;
                    if (!aFavorita && bFavorita) return 1;
                    return a.nome.localeCompare(b.nome);
                });

                filtered.forEach(bebida => {
                    const card = createListItemCard(bebida, 'drink', () => renderBebidasList(filterInput.value));
                    bebidasList.appendChild(card);
                });

                // Verifica se não há bebidas encontradas durante a filtragem
                if (filtered.length === 0 && filterText.length > 0) {
                    const noResultsMessage = createNoResultsMessage(filterText, 'bebida artoniana', 'orange');
                    bebidasList.appendChild(noResultsMessage);
                }
            }

            // Atualiza a lista ao digitar
            filterInput.addEventListener('input', () => {
                renderBebidasList(filterInput.value);
            });

            // Render inicial
            renderBebidasList();

            // Adiciona o popup ao body
            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'orange');
        } catch (e) {
            console.error('Erro ao abrir Bebidas Artonianas:', e);
            alert('Erro ao abrir Bebidas Artonianas. Veja o console para detalhes.');
        }
    }

    // Função para criar popup de Poções
    function createPocoesPopup() {
        console.log('Abrindo Poções');
        try {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('pocoes-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('pocoes-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'pocoes-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10000';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'pocoes-popup';
            popup.className = 'roll20-popup roll20-popup-orange';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ffb86c';
            popup.style.borderRadius = '12px';
            popup.style.padding = '18px 20px 16px 20px';
            popup.style.zIndex = '10001';
            popup.style.maxWidth = '480px';
            popup.style.maxHeight = '600px';
            popup.style.overflowY = 'auto';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '15px';
            header.style.width = '100%';

            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ffb86c',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('pocoes-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h3');
            title.textContent = 'Poções';
            title.style.color = '#ffb86c';
            title.style.margin = '0';
            title.style.fontSize = '17px';
            title.style.fontWeight = 'bold';
            header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Campo de filtro
            const filterContainer = document.createElement('div');
            filterContainer.style.position = 'relative';
            filterContainer.style.marginBottom = '10px';
            const filterInput = document.createElement('input');
            filterInput.type = 'text';
            filterInput.placeholder = 'Filtrar poções...';
            filterInput.style.width = '100%';
            filterInput.style.padding = '10px 12px';
            filterInput.style.borderRadius = '8px';
            filterInput.style.border = '1px solid #ffb86c';
            filterInput.style.background = '#23243a';
            filterInput.style.color = '#fff';
            filterInput.style.fontSize = '14px';
            filterInput.style.outline = 'none';
            filterInput.style.boxSizing = 'border-box';
            filterInput.style.fontSize = '15px';
            filterContainer.appendChild(filterInput);
            popup.appendChild(filterContainer);

            // Lista de poções (cards)
            const pocoesList = document.createElement('div');
            pocoesList.style.display = 'flex';
            pocoesList.style.flexDirection = 'column';
            pocoesList.style.gap = '14px';
            pocoesList.style.marginTop = '10px';
            popup.appendChild(pocoesList);

            // Dados das poções
            const pocoes = getPocoesCompletas();

            function renderPocoesList(filterText = '') {
                pocoesList.innerHTML = '';
                const filtered = pocoes.filter(pocao =>
                    pocao.nome.toLowerCase().includes(filterText.toLowerCase()) ||
                    pocao.descricao.toLowerCase().includes(filterText.toLowerCase()) ||
                    pocao.efeito.toLowerCase().includes(filterText.toLowerCase()) ||
                    pocao.tipo.toLowerCase().includes(filterText.toLowerCase())
                );

                // Ordena favoritos primeiro
                const favoritas = getPocoesFavoritas();
                filtered.sort((a, b) => {
                    const aFavorita = favoritas.includes(a.nome);
                    const bFavorita = favoritas.includes(b.nome);
                    if (aFavorita && !bFavorita) return -1;
                    if (!aFavorita && bFavorita) return 1;
                    return a.nome.localeCompare(b.nome);
                });

                filtered.forEach(pocao => {
                    const card = createListItemCard(pocao, 'potion', () => renderPocoesList(filterInput.value));
                    pocoesList.appendChild(card);
                });

                // Verifica se não há poções encontradas durante a filtragem
                if (filtered.length === 0 && filterText.length > 0) {
                    const noResultsMessage = createNoResultsMessage(filterText, 'poção', 'orange');
                    pocoesList.appendChild(noResultsMessage);
                }
            }

            // Atualiza a lista ao digitar
            filterInput.addEventListener('input', () => {
                renderPocoesList(filterInput.value);
            });

            // Render inicial
            renderPocoesList();

            // Adiciona o popup ao body
            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'orange');
        } catch (e) {
            console.error('Erro ao abrir Poções:', e);
            alert('Erro ao abrir Poções. Veja o console para detalhes.');
        }
    }

    // Função para mostrar efeito de cura
    function showHealingEffect() {
        // Remove efeito anterior se existir
        const existingEffect = document.getElementById('healing-effect');
        if (existingEffect) existingEffect.remove();

        // Toca o áudio de cura
        playHealingSound();

        // Container principal do efeito
        const effectContainer = document.createElement('div');
        effectContainer.id = 'healing-effect';
        effectContainer.style.position = 'fixed';
        effectContainer.style.bottom = '0';
        effectContainer.style.left = '0';
        effectContainer.style.width = '100%';
        effectContainer.style.height = '15vh';
        effectContainer.style.background = 'linear-gradient(to top, rgba(76, 255, 80, 0.45), transparent 80%)';
        effectContainer.style.zIndex = '9998';
        effectContainer.style.pointerEvents = 'none';
        effectContainer.style.overflow = 'hidden';

        // Cria múltiplas folhas
        for (let i = 0; i < 15; i++) {
            const leaf = document.createElement('div');
            leaf.style.position = 'absolute';
            leaf.style.bottom = '10px';
            leaf.left = '-50px';
            leaf.style.width = '20px';
            leaf.style.height = '20px';
            leaf.style.background = 'radial-gradient(circle, #4CAF50 0%, #388E3C 70%, #2E7D32 100%)';
            leaf.style.borderRadius = '50% 0 50% 0';
            leaf.style.transform = 'rotate(45deg)';
            leaf.style.opacity = '0.8';
            leaf.style.animation = `leafFloat 1.5s linear`;
            leaf.style.animationDelay = `${Math.random()}s`;
            const amplitude = 10 + Math.random() * 20;
            leaf.style.setProperty('--leaf-amplitude', `${amplitude}px`);
            effectContainer.appendChild(leaf);
        }

        // Adiciona CSS para animação das folhas
        if (!document.getElementById('healing-effect-styles')) {
            const style = document.createElement('style');
            style.id = 'healing-effect-styles';
            style.textContent = `
                    @keyframes leafFloat {
                        0% {
                            transform: translateX(-50px) translateY(0px) rotate(45deg);
                            opacity: 0;
                        }
                        10% {
                            opacity: 0.8;
                        }
                        20% {
                            transform: translateX(20vw) translateY(calc(var(--leaf-amplitude) * -1)) rotate(45deg);
                        }
                        40% {
                            transform: translateX(40vw) translateY(calc(var(--leaf-amplitude) * 1)) rotate(45deg);
                        }
                        60% {
                            transform: translateX(60vw) translateY(calc(var(--leaf-amplitude) * -1)) rotate(45deg);
                        }
                        80% {
                            transform: translateX(80vw) translateY(calc(var(--leaf-amplitude) * 1)) rotate(45deg);
                        }
                        100% {
                            transform: translateX(calc(100vw + 50px)) translateY(0px) rotate(45deg);
                            opacity: 0;
                        }
                    }
                `;
            document.head.appendChild(style);
        }

        document.body.appendChild(effectContainer);

        // Remove o efeito após 2 segundos (sincronizado com o áudio)
        setTimeout(() => {
            if (effectContainer.parentNode) {
                effectContainer.remove();
            }
        }, 2000);
    }

    // Função para tocar som de cura
    function playHealingSound() {
        try {
            // Cria elemento de áudio
            const audio = new Audio();

            // URL do áudio do Wowhead (ID 1687888) - arquivo OGG
            audio.src = `https://wow.zamimg.com/sound-ids/live/enus/80/1687888/Spell_DR_Revamp_Nature_Cast_Small06.ogg`;

            // Configurações do áudio
            audio.volume = 0.6; // Volume em 60%
            audio.preload = 'auto';

            // Tenta tocar o áudio
            audio.play();

        } catch (error) {
            console.log('Erro ao criar áudio de cura:', error);
            // Fallback: tenta tocar um beep simples
            playFallbackSound();
        }
    }

    // Função de fallback para som simples
    function playFallbackSound() {
        try {
            // Cria um contexto de áudio para gerar um beep simples
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Frequência de 800Hz
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime); // Volume baixo
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);

        } catch (error) {
            console.log('Erro ao tocar som de fallback:', error);
        }
    }

    // Função para tocar som de ataque de espada
    function playSwordAttackSound() {
        try {
            const audio = new Audio('https://wow.zamimg.com/sound-ids/live/enus/107/567915/m2hSwordHitFlesh1c.ogg');
            audio.volume = 0.6;
            audio.preload = 'auto';
            audio.play();
        } catch (e) {
            console.log('Erro ao criar áudio de ataque:', e);
            // Fallback: tenta tocar um beep simples
            playFallbackSound();
        }
    }

    // Função para executar ataque com efeito de sangue
    function executeAttackWithBloodEffect(macro) {
        // Primeiro executa o efeito de sangue no token selecionado
        sendToChat('/fx splatter-blood @{target|token_id}');

        // Aguarda um pequeno delay para o efeito ser processado
        setTimeout(() => {
            // Depois executa a macro de ataque
            sendToChat(macro);

            // Por último toca o som de ataque
            setTimeout(() => {
                playSwordAttackSound();
            }, 100);
        }, 200);
    }

    // Função para executar poder de cura com efeito holy
    function executeHealingPowerWithHolyEffect(rollCommand, message) {
        // Primeiro executa o efeito holy no token selecionado
        sendToChat('/fx nova-holy @{target|token_id}');

        // Aguarda um pequeno delay para o efeito ser processado
        setTimeout(() => {
            // Depois executa o comando de rolagem
            sendToChat(rollCommand);

            // Envia a mensagem de descrição
            sendToChat(message);

            // Por último mostra o efeito de cura e toca o som
            setTimeout(() => {
                showHealingEffect();
            }, 100);
        }, 200);
    }
    // Função para tornar elemento arrastável
    function makeDraggable(element, handle) {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        handle.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        function dragStart(e) {
            e.preventDefault();
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            isDragging = true;
            handle.style.cursor = 'grabbing';
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();

                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, element);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }

        function dragEnd() {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            handle.style.cursor = 'grab';
        }
    }
    // Dados das Perícias do Tormenta 20
    const SKILLS_DATA = {
        'Acrobacia': {
            descricao: 'Você consegue fazer proezas acrobáticas.',
            usos: [
                {
                    titulo: 'Amortecer Queda',
                    descricao: 'Reduz o dano de queda (reação). Reduz 1d6 + 1d6 por 5 pontos acima da CD. Se reduzir a 0, cai de pé.',
                    cd: 'CD 15, Apenas Treinado'
                },
                {
                    titulo: 'Equilíbrio',
                    descricao: 'Andar sobre superfícies precárias (CD 10 a 20). Pode avançar total com –5. Se sofrer dano, deve fazer novo teste ou cai.',
                    cd: 'CD 10 para piso escorregadio, CD 15 para superfície estreita, CD 20 para superfície muito estreita'
                },
                {
                    titulo: 'Escapar',
                    descricao: 'Fugir de amarras (corda, rede, algemas; CD 20 a 30). Ação completa.',
                    cd: 'CD 20 para redes, CD 30 para algemas'
                },
                {
                    titulo: 'Levantar-se Rapidamente',
                    descricao: 'Levanta como ação livre com sucesso. Se falhar, gasta a ação e continua caído.',
                    cd: 'CD 20, Apenas Treinado'
                },
                {
                    titulo: 'Passar por Espaço Apertado',
                    descricao: 'Ação completa. Move-se por espaços para criaturas uma categoria menor.',
                    cd: 'CD 25, Apenas Treinado'
                },
                {
                    titulo: 'Passar por Inimigo',
                    descricao: 'Teste oposto (Acrobacia/Iniciativa/Luta). Se vencer, atravessa espaço ocupado (terreno difícil).',
                    cd: 'Teste oposto'
                }
            ]
        },
        'Adestramento': {
            descricao: 'Você sabe lidar com animais.',
            usos: [
                {
                    titulo: 'Acalmar Animal',
                    descricao: 'Ação completa. Acalma um animal nervoso/agressivo.',
                    cd: 'CD 25'
                },
                {
                    titulo: 'Manejar Animal',
                    descricao: 'Faz um animal executar tarefa treinada. Também usado como Pilotagem para veículos de tração animal. Ação de movimento.',
                    cd: 'CD 15'
                }
            ]
        },
        'Atletismo': {
            descricao: 'Você pode realizar façanhas atléticas.',
            usos: [
                {
                    titulo: 'Corrida',
                    descricao: 'Ação completa. Move 1,5m por ponto no teste. Modificador ±2 por cada 1,5m de deslocamento acima/abaixo de 9m. Pode correr por (1 + Constituição) rodadas. Depois, teste de Fortitude por rodada (CD crescente) ou fica fatigado.',
                    cd: 'CD baseada na distância'
                },
                {
                    titulo: 'Escalar',
                    descricao: 'Ação de movimento. CD 10 (apoios), 15 (árvore), 20 (ruína), 25 (muro liso). Falha por 5+ = queda. Pode sofrer –5 para avançar total. Se sofrer dano ou aliado cair próximo, novo teste.',
                    cd: 'CD 10 para superfícies com apoios, CD 15 para árvore, CD 20 para muro com reentrâncias, CD 25 para muro liso'
                },
                {
                    titulo: 'Natação',
                    descricao: 'Ação de movimento. CD 10 (calma), 15 (agitada), 20+ (tempestuosa). Falha por 5+ = afunda. Pode fazer segundo teste com nova ação de movimento.',
                    cd: 'CD 10 para água calma, CD 15 para agitada, CD 20 ou mais para tempestuosa'
                },
                {
                    titulo: 'Saltar',
                    descricao: 'Longo (CD 5 por 1,5m) ou altura (CD 15 por 1,5m). Sem impulso (6m), +10 na CD. Parte do movimento.',
                    cd: 'CD 5 por 1,5m para salto longo, CD 15 por 1,5m para salto em altura'
                }
            ]
        },
        'Atuação': {
            descricao: 'Você sabe fazer apresentações artísticas, como música, dança ou teatro.',
            usos: [
                {
                    titulo: 'Apresentação',
                    descricao: 'Teste para ganhar dinheiro (T$ 1d6 + 1d6 por 5 pontos acima). Leva um dia. Lugar propício (festival) dobra valor; inadequado (rua) reduz pela metade.',
                    cd: 'CD 20'
                },
                {
                    titulo: 'Impressão',
                    descricao: 'Teste oposto contra Vontade. Sucesso = +2 em Carisma contra o alvo. Falha = –2. Não pode repetir no mesmo dia. Se múltiplos alvos, o mestre faz teste único.',
                    cd: 'Teste oposto contra Vontade'
                }
            ]
        },
        'Cavalgar': {
            descricao: 'Você sabe conduzir animais de montaria (como cavalos, trobos e grifos).',
            usos: [
                {
                    titulo: 'Conduzir',
                    descricao: 'Teste para obstáculos. CD 15 (ruins), 25 (perigosos). Falha = queda e 1d6 dano.',
                    cd: 'CD 15 para obstáculos ruins, CD 25 para perigosos'
                },
                {
                    titulo: 'Galopar',
                    descricao: 'Ação completa. Move 1,5m por ponto no teste. Modificador ±2 por cada 1,5m além/aquém de 9m.',
                    cd: 'CD baseada na distância'
                },
                {
                    titulo: 'Montar Rapidamente',
                    descricao: 'Monta ou desmonta como ação livre. Falha por 5+ = cai. Nota: sem sela = –5 no teste.',
                    cd: 'CD 20'
                }
            ]
        },
        'Conhecimento': {
            descricao: 'Você estudou diversos campos do saber, como aritmética, astronomia, dialética, geografia, história.',
            usos: [
                {
                    titulo: 'Idiomas',
                    descricao: 'Você pode entender idiomas desconhecidos. Se falhar por 5 ou mais, você tira uma conclusão falsa. Idiomas exóticos ou muito antigos têm CD 30.',
                    cd: 'CD 20, idiomas exóticos CD 30'
                },
                {
                    titulo: 'Informação',
                    descricao: 'Você responde dúvidas gerais. Questões simples, como o ano de fundação de um reino, não exigem testes. Questões complexas, como saber o antídoto de um veneno, tem CD 20. Por fim, mistérios e enigmas, como a origem de uma antiga maldição, tem CD 30.',
                    cd: 'CD 20 para questões complexas, CD 30 para mistérios'
                }
            ]
        },
        'Cura': {
            descricao: 'Você sabe tratar ferimentos, doenças e venenos.',
            usos: [
                {
                    titulo: 'Cuidados Prolongados',
                    descricao: 'Você trata uma pessoa para que ela se recupere mais rapidamente. Se passar, ela aumenta sua recuperação de PV em +1 por nível nesse dia. Este uso leva uma hora e o número máximo de pessoas que você pode cuidar é igual ao seu nível.',
                    cd: 'CD 15, Apenas Treinado'
                },
                {
                    titulo: 'Necropsia',
                    descricao: 'Você examina um cadáver para determinar a causa e o momento aproximado da morte. Causas raras ou extraordinárias, como um veneno ou maldição, possuem CD 30. Este uso leva dez minutos.',
                    cd: 'CD 20, Apenas Treinado. Causas raras CD 30'
                },
                {
                    titulo: 'Primeiros Socorros',
                    descricao: 'Você estabiliza um personagem adjacente que esteja sangrando. Este uso gasta uma ação padrão.',
                    cd: 'CD 15'
                },
                {
                    titulo: 'Tratamento',
                    descricao: 'Você ajuda a vítima de uma doença ou veneno com efeito contínuo. Gaste uma ação completa e faça um teste de Cura contra a CD da doença ou veneno. Se você passar, o paciente recebe +5 em seu próximo teste de Fortitude contra esse efeito. Esta perícia exige uma maleta de medicamentos. Sem ela, você sofre –5 no teste. Você pode usar a perícia Cura em si mesmo, mas sofre –5 no teste.',
                    cd: 'CD da doença ou veneno, Apenas Treinado'
                }
            ]
        },
        'Diplomacia': {
            descricao: 'Você convence pessoas com lábia e argumentação. Usos de Diplomacia são efeitos mentais.',
            usos: [
                {
                    titulo: 'Barganha',
                    descricao: 'Comprando ou vendendo algo, você pode barganhar. Seu teste de Diplomacia é oposto pelo teste de Vontade do negociante. Se passar, você muda o preço em 10% a seu favor. Se passar por 10 ou mais, muda em 20%. Se falhar por 5 ou mais, você ofende o negociante — ele não voltará a tratar com você durante pelo menos uma semana.',
                    cd: 'Teste oposto contra Vontade'
                },
                {
                    titulo: 'Mudar Atitude',
                    descricao: 'Você muda a categoria de atitude de um NPC em relação a você ou a outra pessoa. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você passar, muda a atitude dele em uma categoria para cima ou para baixo, à sua escolha (ou, se passar por 10 ou mais, em duas categorias). Se falhar por 5 ou mais, a atitude do alvo muda uma categoria na direção oposta.',
                    cd: 'Teste oposto contra Vontade'
                },
                {
                    titulo: 'Persuasão',
                    descricao: 'Você convence uma pessoa a fazer algo, como responder uma pergunta ou prestar um favor. Se essa coisa for custosa você sofre –5 em seu teste. Se for perigosa você sofre –10 ou falha automaticamente.',
                    cd: 'CD 20'
                }
            ]
        },
        'Enganação': {
            descricao: 'Você manipula pessoas com blefes e trapaças.',
            usos: [
                {
                    titulo: 'Disfarce',
                    descricao: 'Você muda sua aparência ou a de outra pessoa. Faça um teste de Enganação oposto pelo teste de Percepção de quem prestar atenção no disfarçado. Se você passar, a pessoa acredita no disfarce; caso contrário, percebe que há algo errado. Disfarces muito complexos (como uma raça diferente) impõem –5 no seu teste.',
                    cd: 'Teste oposto contra Percepção'
                },
                {
                    titulo: 'Falsificação',
                    descricao: 'Você falsifica um documento. Faça um teste de Enganação oposto pelo teste de Percepção de quem examinar o documento. Se você passar, a pessoa acredita na falsificação; caso contrário, percebe que é falso. Se o documento é muito complexo, ou inclui uma assinatura ou carimbo específico, você sofre –10 no teste.',
                    cd: 'Teste oposto contra Percepção'
                },
                {
                    titulo: 'Fintar',
                    descricao: 'Você pode gastar uma ação padrão e fazer um teste de Enganação oposto a um teste de Reflexos de um ser em alcance curto. Se você passar, ele fica desprevenido contra seu próximo ataque, se realizado até o fim de seu próximo turno.',
                    cd: 'Teste oposto contra Reflexos'
                },
                {
                    titulo: 'Insinuação',
                    descricao: 'Você fala algo para alguém sem que outras pessoas entendam do que você está falando. Se você passar, o receptor entende sua mensagem. Se você falhar por 5 ou mais, ele entende algo diferente do que você queria.',
                    cd: 'CD 20'
                },
                {
                    titulo: 'Intriga',
                    descricao: 'Você espalha uma fofoca. Por exemplo, pode dizer que o dono da taverna está aguando a cerveja, para enfurecer o povo contra ele. Intrigas muito improváveis têm CD 30.',
                    cd: 'CD 20, intrigas improváveis CD 30'
                },
                {
                    titulo: 'Mentir',
                    descricao: 'Você faz uma pessoa acreditar em algo que não é verdade. Seu teste é oposto pelo teste de Intuição da vítima. Mentiras muito implausíveis impõem uma penalidade de –10 em seu teste.',
                    cd: 'Teste oposto contra Intuição'
                }
            ]
        },
        'Fortitude': {
            descricao: 'Você usa esta perícia para resistir a efeitos que exigem vitalidade, como doenças e venenos. A CD é determinada pelo efeito. Você também usa Fortitude para manter seu fôlego quando está correndo ou sem respirar. A CD é 15 +1 por teste anterior.',
            usos: [
                {
                    titulo: 'Resistir Veneno',
                    descricao: 'Para resistir aos efeitos de venenos.',
                    cd: 'CD igual ao veneno'
                },
                {
                    titulo: 'Resistir Doença',
                    descricao: 'Para resistir aos efeitos de doenças.',
                    cd: 'CD 15 para doenças leves, CD 20+ para doenças graves'
                },
                {
                    titulo: 'Resistir Fadiga',
                    descricao: 'Para resistir à fadiga extrema ou condições adversas.',
                    cd: 'CD 15 para condições normais, CD 20+ para condições extremas'
                }
            ]
        },
        'Furtividade': {
            descricao: 'Você sabe ser discreto e sorrateiro.',
            usos: [
                {
                    titulo: 'Esconder-se',
                    descricao: 'Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Todos que falharem não conseguem percebê-lo (você tem camuflagem total contra eles). Esconder-se é uma ação livre que você só pode fazer no final do seu turno.',
                    cd: 'Teste oposto contra Percepção'
                },
                {
                    titulo: 'Seguir',
                    descricao: 'Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como uma descampado ou rua deserta.',
                    cd: 'Teste oposto contra Percepção'
                }
            ]
        },
        'Guerra': {
            descricao: 'Você foi educado em tática, estratégia e logística.',
            usos: [
                {
                    titulo: 'Analisar Terreno',
                    descricao: 'Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver.',
                    cd: 'CD 20'
                },
                {
                    titulo: 'Plano de Ação',
                    descricao: 'Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se ele ficar com uma Iniciativa maior do que a sua e ainda não tiver agido nesta rodada, age imediatamente após seu turno.',
                    cd: 'CD 20'
                }
            ]
        },
        'Iniciativa': {
            descricao: 'Esta perícia determina sua velocidade de reação em situações de perigo. Quando uma cena de ação começa, cada personagem envolvido faz um teste de Iniciativa. Eles então agem em ordem decrescente dos resultados.',
            usos: [
                {
                    titulo: 'Ordem de Combate',
                    descricao: 'Para determinar quem age primeiro em combate.',
                    cd: 'Teste oposto contra outros combatentes'
                }
            ]
        },
        'Intimidação': {
            descricao: 'Você pode assustar ou coagir outras pessoas. Usos de Intimidação são efeitos de medo.',
            usos: [
                {
                    titulo: 'Assustar',
                    descricao: 'Gaste uma ação padrão e faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura em alcance curto. Se você passar, ela fica abalada pelo resto da cena. Se você passar por 10 ou mais, ela fica apavorada por uma rodada e então abalada pelo resto da cena.',
                    cd: 'Teste oposto contra Vontade'
                },
                {
                    titulo: 'Coagir',
                    descricao: 'Faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura inteligente (Int –3 ou maior) adjacente. Se você passar, ela obedece uma ordem sua (como fazer uma pequena tarefa, deixar que você passe por um lugar que ela estava protegendo...). Se você mandá-la fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou passa automaticamente.',
                    cd: 'Teste oposto contra Vontade'
                }
            ]
        },
        'Intuição': {
            descricao: 'Esta perícia mede sua empatia e "sexto sentido".',
            usos: [
                {
                    titulo: 'Perceber Mentira',
                    descricao: 'Você descobre se alguém está mentindo (veja a perícia Enganação).',
                    cd: 'Teste oposto contra Enganação'
                },
                {
                    titulo: 'Pressentimento',
                    descricao: 'Você analisa uma pessoa, para ter uma noção de sua índole ou caráter, ou uma situação, para saber se há algo anormal (por exemplo, se os habitantes de uma vila estão agindo de forma estranha). Este uso apenas indica se há algo anormal, mas não revela a causa.',
                    cd: 'CD 20, Apenas Treinado'
                }
            ]
        },
        'Investigação': {
            descricao: 'Você sabe encontrar pistas e informações.',
            usos: [
                {
                    titulo: 'Interrogar',
                    descricao: 'Você descobre informações perguntando ou indo para um lugar movimentado e mantendo os ouvidos atentos. Informações gerais ("Quem é o guerreiro mais forte da aldeia?") não exigem teste. Informações restritas, que poucas pessoas conhecem ("Quem é o ancião que está sempre ao lado do rei?"), têm CD 20. Informações confidenciais ou que podem colocar em risco quem falar sobre elas ("Quem é o líder da guilda dos ladrões?"), têm CD 30. Este uso gasta uma hora e T$ 3d6 (para comprar bebidas, subornar oficiais etc.), mas esses valores podem variar de acordo com o mestre.',
                    cd: 'CD 20 para informações restritas, CD 30 para informações confidenciais'
                },
                {
                    titulo: 'Procurar',
                    descricao: 'Você examina um local em busca de algo. A CD varia: 15 para um item ou no meio de uma bagunça, mas não necessariamente escondido; 20 para um item escondido (cofre atrás de um quadro, documento no fundo falso de uma gaveta); 30 para um item muito bem escondido (passagem secreta ativada por um botão, documento escrito com tinta invisível). Este uso gasta desde uma ação completa (examinar uma escrivaninha) até um dia (pesquisar uma biblioteca).',
                    cd: 'CD 15 para item em bagunça, CD 20 para item escondido, CD 30 para item muito bem escondido'
                }
            ]
        },
        'Jogatina': {
            descricao: 'Você sabe jogar jogos de azar.',
            usos: [
                {
                    titulo: 'Apostar',
                    descricao: 'Para resolver uma noite de jogatina, pague T$ 1d10, faça um teste de perícia e consulte a tabela para determinar quanto você ganha. O mestre pode variar o valor da aposta básica. De T$ 1d3, para uma taverna no porto frequentada por marujos e estivadores, a 1d10 x T$ 1.000, para um cassino de luxo em Valkaria.',
                    cd: 'CD variável conforme o jogo',
                    tabela: {
                        titulo: 'Tabela de Lucros da Jogatina',
                        linhas: [
                            { teste: '9 ou menos', ganho: 'Nenhum.' },
                            { teste: '10 a 14', ganho: 'Metade da aposta.' },
                            { teste: '15 a 19', ganho: 'Valor da aposta (você "empata").' },
                            { teste: '20 a 29', ganho: 'Dobro da aposta.' },
                            { teste: '30 a 39', ganho: 'Triplo da aposta.' },
                            { teste: '40 ou mais', ganho: 'Quíntuplo da aposta.' }
                        ]
                    }
                }
            ]
        },
        'Ladinagem': {
            descricao: 'Você sabe exercer atividades ilícitas.',
            usos: [
                {
                    titulo: 'Abrir Fechadura',
                    descricao: 'Você abre uma fechadura trancada. A CD é 20 para fechaduras simples (porta de loja), 25 para fechaduras médias (prisão, baú) e 30 para fechaduras superiores (cofre, câmara do tesouro). Este uso exige uma ação completa e uma gazua. Sem ela, você sofre –5 em seu teste.',
                    cd: 'CD 20 para fechaduras simples, CD 25 para médias, CD 30 para superiores'
                },
                {
                    titulo: 'Ocultar',
                    descricao: 'Você esconde um objeto em você mesmo. Gaste uma ação padrão e faça um teste de Ladinagem oposto pelo teste de Percepção de qualquer um que possa vê-lo. Objetos discretos ou pequenos fornecem +5 no teste; objetos desajeitados ou grandes impõem –5.',
                    cd: 'Teste oposto contra Percepção'
                },
                {
                    titulo: 'Punga',
                    descricao: 'Você pega um objeto de outra pessoa (ou planta um objeto nas posses dela). Gaste uma ação padrão e faça um teste de Ladinagem. Se passar, você pega (ou coloca) o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem).',
                    cd: 'CD 20'
                },
                {
                    titulo: 'Sabotar',
                    descricao: 'Você desabilita um dispositivo mecânico. Uma ação simples (emperrar uma fechadura, desativar uma armadilha básica, sabotar uma roda de carroça para que quebre 1d4 rodadas após o uso) tem CD 20. Uma ação complexa (desativar uma armadilha avançada, sabotar um canhão para explodir quando utilizado) tem CD 30.',
                    cd: 'CD 20 para ações simples, CD 30 para ações complexas'
                }
            ]
        },
        'Luta': {
            descricao: 'Você usa Luta para fazer ataques corpo a corpo. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada. Veja o Capítulo 5: Jogando para as regras completas de combate.',
            usos: [
                {
                    titulo: 'Ataque Corpo a Corpo',
                    descricao: 'Para atacar com armas brancas ou desarmado.',
                    cd: 'CD igual à Defesa do oponente'
                }
            ]
        },
        'Misticismo': {
            descricao: 'Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.',
            usos: [
                {
                    titulo: 'Detectar Magia',
                    descricao: 'Como uma ação completa, você detecta a presença e intensidade de auras mágicas em alcance curto (mas não suas localizações exatas). A intensidade de uma aura depende do círculo da magia ou categoria do item mágico que a gerou.',
                    cd: 'CD 15'
                },
                {
                    titulo: 'Identificar Criatura',
                    descricao: 'Você analisa uma criatura mágica (construto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica.',
                    cd: 'CD 15 + ND da Criatura'
                },
                {
                    titulo: 'Identificar Item Mágico',
                    descricao: 'Você estuda um item mágico para identificar seus poderes. A CD é 20 para itens mágicos menores, 25 para médios e 30 para itens mágicos maiores. Este uso gasta uma hora.',
                    cd: 'CD 20 para itens menores, CD 25 para médios, CD 30 para maiores'
                },
                {
                    titulo: 'Identificar Magia',
                    descricao: 'Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.',
                    cd: 'CD 15 + Custo em PM da Magia'
                },
                {
                    titulo: 'Informação',
                    descricao: 'Você responde dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
                    cd: 'CD 20 para questões complexas, CD 30 para mistérios'
                },
                {
                    titulo: 'Lançar Magia de Armadura',
                    descricao: 'Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.',
                    cd: 'CD 20 + Custo em PM da Magia'
                }
            ]
        },
        'Nobreza': {
            descricao: 'Você recebeu a educação de um nobre.',
            usos: [
                {
                    titulo: 'Etiqueta',
                    descricao: 'Você sabe se portar em ambientes aristocráticos, como bailes e audiências.',
                    cd: 'CD 15'
                },
                {
                    titulo: 'Informação',
                    descricao: 'Você responde dúvidas relativas a leis, tradições, linhagens e heráldica. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
                    cd: 'CD 20 para questões complexas, CD 30 para mistérios'
                }
            ]
        },
        'Ofício': {
            descricao: 'Ofício na verdade são várias perícias diferentes. Cada uma permite fabricar itens de certas categorias: Armeiro (armas e armaduras), Artesão (equipamento de aventura, ferramentas, esotéricos e veículos), Alquimista (alquímicos), Cozinheiro (alimentação), Alfaiate (vestuário).',
            usos: [
                {
                    titulo: 'Consertar',
                    descricao: 'Reparar um item destruído tem a mesma CD para fabricá-lo. Cada tentativa consome uma hora de trabalho e um décimo do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos (mas você pode tentar novamente).',
                    cd: 'CD igual à fabricação'
                },
                {
                    titulo: 'Fabricar',
                    descricao: 'Você produz um item gastando matéria-prima e tempo de trabalho. A matéria-prima custa um terço do preço do item. O tempo de trabalho depende do tipo de item: um dia para consumíveis, uma semana para não consumíveis comuns e um mês para não consumíveis superiores e/ou mágicos.',
                    cd: 'CD 15 para itens simples, CD 20 para itens complexos'
                },
                {
                    titulo: 'Identificar',
                    descricao: 'Você pode identificar itens raros e exóticos ligados ao seu Ofício. Se passar, descobre as propriedades do item e seu preço. Este uso gasta uma ação completa.',
                    cd: 'CD 20'
                },
                {
                    titulo: 'Sustento',
                    descricao: 'Com uma semana de trabalho e um teste de Ofício, você ganha T$ 1, mais T$ 1 por ponto que seu teste exceder a CD. Por exemplo, com um resultado 20, ganha T$ 6 pela semana de trabalho.',
                    cd: 'CD 15'
                }
            ]
        },
        'Percepção': {
            descricao: 'Você nota coisas usando seus sentidos.',
            usos: [
                {
                    titulo: 'Observar',
                    descricao: 'Você vê coisas discretas ou escondidas. A CD varia de 15, para algo difícil de ser visto (um livro específico em uma estante) a 30, para algo quase invisível (uma gota de sangue em uma folha no meio de uma floresta à noite). Para pessoas ou itens escondidos, a CD é o resultado do teste de Furtividade ou Ladinagem feito para esconder a pessoa ou o item. Você também pode ler lábios (CD 20).',
                    cd: 'CD 15 para algo difícil de ver, CD 20 para item escondido, CD 30 para algo quase invisível'
                },
                {
                    titulo: 'Ouvir',
                    descricao: 'Você escuta barulhos sutis. Uma conversa casual próxima tem CD 0 — ou seja, a menos que exista alguma penalidade, você passa automaticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +10. Você pode fazer testes de Percepção para ouvir mesmo que esteja dormindo, mas sofre –10 no teste; um sucesso faz você acordar.',
                    cd: 'CD 0 para conversa casual, CD 15 para sussurros, CD 20 para criaturas invisíveis'
                }
            ]
        },
        'Pilotagem': {
            descricao: 'Você sabe operar veículos como carroças, barcos e balões. Ações simples não exigem testes — você pode atrelhar seus trobos a sua carroça e conduzi-la pela estrada, ou levantar âncora e velejar seu navio em águas tranquilas, automaticamente.',
            usos: [
                {
                    titulo: 'Conduzir em Situações Difíceis',
                    descricao: 'Conduzir um veículo em situações ruins (terreno acidentado para veículos terrestres, chuva ou ventania para veículos aquáticos ou aéreos, ou aéreos) exige uma ação de movimento e um teste de Pilotagem contra CD 15 por turno ou cena, de acordo com o mestre. Se falhar, você avança metade do deslocamento. Se falhar por 5 ou mais, se acidenta de alguma forma. Situações extremas (terreno com obstáculos, tempestade...) aumentam a CD para 25.',
                    cd: 'CD 15 para situações ruins, CD 25 para situações extremas'
                }
            ]
        },
        'Pontaria': {
            descricao: 'Você usa Pontaria para fazer ataques à distância. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada. Veja o Capítulo 5: Jogando para as regras completas de ataque.',
            usos: [
                {
                    titulo: 'Ataque à Distância',
                    descricao: 'Para atacar com armas de longo alcance.',
                    cd: 'CD igual à Defesa do oponente'
                }
            ]
        },
        'Reflexos': {
            descricao: 'Você usa esta perícia para resistir a efeitos que exigem reação rápida, como armadilhas e explosões. A CD é determinada pelo efeito. Você também usa Reflexos para evitar fintas.',
            usos: [
                {
                    titulo: 'Esquivar',
                    descricao: 'Para se esquivar de ataques ou perigos.',
                    cd: 'CD igual ao ataque ou perigo'
                },
                {
                    titulo: 'Reação Rápida',
                    descricao: 'Para reagir rapidamente a situações inesperadas.',
                    cd: 'CD 15 para reações normais, CD 20+ para reações complexas'
                },
                {
                    titulo: 'Agarrar',
                    descricao: 'Para agarrar objetos em queda ou em movimento.',
                    cd: 'CD 15 para objetos lentos, CD 20+ para objetos rápidos'
                }
            ]
        },
        'Religião': {
            descricao: 'Você possui conhecimento sobre os deuses e as religiões de Arton.',
            usos: [
                {
                    titulo: 'Identificar Criatura',
                    descricao: 'Você pode identificar uma criatura com origem divina (anjos, demônios, alguns mortos-vivos e construtos etc.). Veja a perícia Misticismo.',
                    cd: 'CD 15 + ND da Criatura'
                },
                {
                    titulo: 'Identificar Item Mágico',
                    descricao: 'Você pode identificar um item mágico de origem divina. Veja a perícia Misticismo.',
                    cd: 'CD 20 para itens menores, CD 25 para médios, CD 30 para maiores'
                },
                {
                    titulo: 'Informação',
                    descricao: 'Você responde dúvidas relativas a deuses, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
                    cd: 'CD 20 para questões complexas, CD 30 para mistérios'
                },
                {
                    titulo: 'Rito',
                    descricao: 'Você realiza uma cerimônia religiosa, como um batizado, casamento ou funeral. Isso inclui a cerimônia de penitência para redimir um devoto que tenha descumprido as Obrigações & Restrições de sua divindade. Uma cerimônia de penitência exige um sacrifício de T$ 100 por nível de personagem do devoto ou a realização de uma missão sagrada, de acordo com o mestre.',
                    cd: 'CD 20'
                }
            ]
        },
        'Sobrevivência': {
            descricao: 'Você está em casa nos ermos.',
            usos: [
                {
                    titulo: 'Acampamento',
                    descricao: 'Você consegue abrigo e alimento para você e seu grupo por um dia (caçando, pescando, colhendo frutos...). A CD depende do terreno: 15 para planícies e colinas, 20 para florestas e pântanos, 25 para desertos ou montanhas e 30 para regiões planares perigosas ou áreas de Tormenta. Regiões muito áridas ou estéreis e clima ruim (neve, tempestade etc.) impõem penalidade cumulativa de –5. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM. Este uso exige equipamento de viagem. Sem ele, você sofre –5 em seu teste.',
                    cd: 'CD 15 para planícies e colinas, CD 20 para florestas e pântanos, CD 25 para desertos ou montanhas, CD 30 para regiões planares perigosas'
                },
                {
                    titulo: 'Identificar Criatura',
                    descricao: 'Você pode identificar um animal ou monstro. Veja a perícia Misticismo.',
                    cd: 'CD 15 + ND da Criatura'
                },
                {
                    titulo: 'Orientar-se',
                    descricao: 'Um personagem viajando pelos ermos precisa fazer um teste de Sobrevivência por dia para avançar. A CD depende do tipo de terreno (veja em "Acampamento"). Se passar, você avança seu deslocamento normal. Se falhar, avança apenas metade. Se falhar por 5 ou mais, se perde e não avança pelo dia. Num grupo, um personagem deve ser escolhido como guia. Personagens treinados em Sobrevivência podem ajudá-lo. Entretanto, se mais de um personagem quiser fazer o teste por si só, todos deverão rolar em segredo. Os jogadores devem decidir qual guia seguir antes de verem o resultado! Este teste é exigido apenas em jornadas perigosas (de acordo com o mestre).',
                    cd: 'CD 15 para planícies e colinas, CD 20 para florestas e pântanos, CD 25 para desertos ou montanhas, CD 30 para regiões planares perigosas'
                },
                {
                    titulo: 'Rastrear',
                    descricao: 'Você pode identificar e seguir rastros. A CD é 15 para solo macio (neve, lama), 20 para solo comum (grama, terra) e 25 para solo duro (rocha ou piso de interiores). A CD diminui em –5 se você estiver rastreando um grupo grande (dez ou mais indivíduos) ou criaturas Enormes ou Colossais, mas aumenta em +5 em visibilidade precária (noite, chuva, neblina...). Enquanto rastreia, seu deslocamento é reduzido à metade. Se falhar, pode tentar novamente gastando mais um dia. Porém, a cada dia desde a criação dos rastros, a CD aumenta em +1.',
                    cd: 'CD 15 para solo macio, CD 20 para solo comum, CD 25 para solo duro, Apenas Treinado'
                }
            ]
        },
        'Vontade': {
            descricao: 'Você usa esta perícia para resistir a efeitos que exigem determinação, como intimidação e encantamentos. A CD é determinada pelo efeito. Testes de Vontade são testes de resistência.',
            usos: [
                {
                    titulo: 'Resistir Encantamento',
                    descricao: 'Para resistir a magias de encantamento.',
                    cd: 'CD igual à magia'
                },
                {
                    titulo: 'Resistir Ilusão',
                    descricao: 'Para resistir a magias de ilusão.',
                    cd: 'CD igual à magia'
                },
                {
                    titulo: 'Resistir Medo',
                    descricao: 'Para resistir a efeitos de medo ou terror.',
                    cd: 'CD 15 para medo simples, CD 20+ para terror extremo'
                }
            ]
        }
    };





    // Função para fechar todos os popups de skills
    function closeAllSkillPopups() {
        const skillsPopup = document.getElementById('skills-popup');
        if (skillsPopup) {
            skillsPopup.remove();
        }
        const skillsOverlay = document.getElementById('skills-overlay');
        if (skillsOverlay) {
            skillsOverlay.remove();
        }
        const skillDetailModal = document.getElementById('skill-detail-modal');
        if (skillDetailModal) {
            skillDetailModal.remove();
        }
        const skillDetailOverlay = document.getElementById('skill-detail-overlay');
        if (skillDetailOverlay) {
            skillDetailOverlay.remove();
        }
    }

    // Função para fechar todos os popups abertos
    function closeAllPopups() {
        // Lista de todos os popups e overlays conhecidos
        const popupIds = [
            // Popups principais
            'conditions-popup', 'conditions-overlay',
            'condition-details-popup', 'condition-details-overlay',
            'avatar-popup', 'avatar-overlay',
            'skills-popup', 'skills-overlay',
            'skill-detail-modal', 'skill-detail-overlay',
            'misc-popup', 'misc-overlay',
            'grimorio-popup', 'grimorio-overlay',
            'spells-popup', 'spells-overlay',
            'spell-cast-popup', 'spell-cast-overlay',
            'pratos-popup', 'pratos-overlay',
            'prato-detail-modal', 'prato-detail-overlay',
            'bebidas-popup', 'bebidas-overlay',
            'bebida-detail-modal', 'bebida-detail-overlay',
            'pocoes-popup', 'pocoes-overlay',
            'pocao-detail-modal', 'pocao-detail-overlay',
            'config-modal', 'config-overlay',
            'maneuvers-popup', 'maneuvers-overlay',
            'attack-effects-popup', 'attack-effects-overlay',
            'hunter-class-overlay',
            'race-detail-overlay',
            'divinity-detail-overlay',
            'animal-companion-overlay',
            'abilities-popup', 'abilities-overlay',
            'power-cast-popup', 'power-cast-overlay'
        ];

        // Remove todos os popups e overlays
        popupIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.remove();
            }
        });

        // Também remove qualquer elemento com z-index alto que possa ser um popup
        const highZIndexElements = document.querySelectorAll('[style*="z-index: 1000"], [style*="z-index: 10000"], [style*="z-index: 10001"], [style*="z-index: 10002"], [style*="z-index: 10003"]');
        highZIndexElements.forEach(element => {
            if (element.style.position === 'fixed' &&
                (element.style.background === 'rgba(0,0,0,0.5)' ||
                    element.style.background === 'rgba(0,0,0,0.7)' ||
                    element.style.background.includes('rgba(30,30,40'))) {
                element.remove();
            }
        });
    }
    // Função para criar o modal de detalhamento da skill
    function createSkillDetailModal(skillName) {
        const skillData = SKILLS_DATA[skillName];
        if (!skillData) {
            console.log('Dados da skill não encontrados:', skillName);
            return;
        }

        // Remove modal existente se houver
        const existingModal = document.getElementById('skill-detail-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('skill-detail-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'skill-detail-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10002';
        overlay.onclick = () => {
            overlay.remove();
            modal.remove();
        };
        document.body.appendChild(overlay);

        // Modal principal
        const modal = document.createElement('div');
        modal.id = 'skill-detail-modal';
        modal.className = 'roll20-modal';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #6ec6ff';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.zIndex = '10003';
        modal.style.maxWidth = '600px';
        modal.style.maxHeight = '80vh';
        modal.style.overflowY = 'auto';
        modal.style.overflowX = 'hidden';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.alignItems = 'stretch';
        modal.style.wordWrap = 'break-word';
        modal.style.wordBreak = 'break-word';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h2');
        title.textContent = skillName;
        title.style.color = '#6ec6ff';
        title.style.margin = '0';
        title.style.fontSize = '20px';
        title.style.fontWeight = 'bold'; const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                modal.remove();
                const overlay = document.getElementById('skill-detail-overlay');
                if (overlay) overlay.remove();
            }
        }); header.appendChild(title);
        header.appendChild(closeBtn.render());
        modal.appendChild(header);

        // Descrição da skill
        const description = document.createElement('div');
        description.style.marginBottom = '20px';
        description.style.padding = '15px';
        description.style.background = 'rgba(110, 198, 255, 0.1)';
        description.style.borderRadius = '8px';
        description.style.border = '1px solid rgba(110, 198, 255, 0.3)';
        description.style.color = '#ecf0f1';
        description.style.fontSize = '14px';
        description.style.lineHeight = '1.5';
        description.style.wordWrap = 'break-word';
        description.style.wordBreak = 'break-word';
        description.style.overflowWrap = 'break-word';
        description.textContent = skillData.descricao;
        modal.appendChild(description);

        // Seção de usos
        const usosSection = document.createElement('div');
        usosSection.style.marginBottom = '20px';

        const usosTitle = document.createElement('h3');
        usosTitle.textContent = 'Usos da Perícia: Selecione uma especialização';
        usosTitle.style.color = '#6ec6ff';
        usosTitle.style.margin = '0 0 15px 0';
        usosTitle.style.fontSize = '16px';
        usosTitle.style.fontWeight = 'bold';
        usosSection.appendChild(usosTitle);

        // Lista de usos
        skillData.usos.forEach((uso) => {
            const usoContainer = document.createElement('div');
            usoContainer.style.marginBottom = '15px';
            usoContainer.style.padding = '12px';
            usoContainer.style.background = 'rgba(26,26,46,0.8)';
            usoContainer.style.borderRadius = '8px';
            usoContainer.style.border = '1px solid rgba(110,198,255,0.2)';
            usoContainer.style.cursor = 'pointer';
            usoContainer.style.transition = 'all 0.2s';
            usoContainer.style.position = 'relative';
            usoContainer.style.wordWrap = 'break-word';
            usoContainer.style.wordBreak = 'break-word';
            usoContainer.style.overflowWrap = 'break-word';

            // Adiciona indicador visual de seleção
            const selectionIndicator = document.createElement('div');
            selectionIndicator.style.position = 'absolute';
            selectionIndicator.style.top = '8px';
            selectionIndicator.style.right = '8px';
            selectionIndicator.style.width = '16px';
            selectionIndicator.style.height = '16px';
            selectionIndicator.style.borderRadius = '50%';
            selectionIndicator.style.border = '2px solid #6ec6ff';
            selectionIndicator.style.background = 'transparent';
            selectionIndicator.style.transition = 'all 0.2s';
            selectionIndicator.style.display = 'none';
            usoContainer.appendChild(selectionIndicator);

            const usoTitle = document.createElement('h4');
            usoTitle.textContent = uso.titulo;
            usoTitle.style.color = '#6ec6ff';
            usoTitle.style.margin = '0 0 8px 0';
            usoTitle.style.fontSize = '14px';
            usoTitle.style.fontWeight = 'bold';
            usoContainer.appendChild(usoTitle);

            const usoDesc = document.createElement('p');
            usoDesc.textContent = uso.descricao;
            usoDesc.style.color = '#ecf0f1';
            usoDesc.style.margin = '0 0 8px 0';
            usoDesc.style.fontSize = '13px';
            usoDesc.style.lineHeight = '1.4';
            usoDesc.style.wordWrap = 'break-word';
            usoDesc.style.wordBreak = 'break-word';
            usoDesc.style.overflowWrap = 'break-word';
            usoContainer.appendChild(usoDesc);

            const usoCD = document.createElement('p');
            usoCD.textContent = `Dificuldade: ${uso.cd}`;
            usoCD.style.color = '#ffd700';
            usoCD.style.margin = '0';
            usoCD.style.fontSize = '12px';
            usoCD.style.fontWeight = 'bold';
            usoContainer.appendChild(usoCD);

            // Adiciona tabela se existir
            if (uso.tabela) {
                const tabelaContainer = document.createElement('div');
                tabelaContainer.style.marginTop = '10px';
                tabelaContainer.style.padding = '8px';
                tabelaContainer.style.background = 'rgba(255, 215, 0, 0.1)';
                tabelaContainer.style.borderRadius = '6px';
                tabelaContainer.style.border = '1px solid rgba(255, 215, 0, 0.3)';

                const tabelaTitle = document.createElement('h5');
                tabelaTitle.textContent = uso.tabela.titulo;
                tabelaTitle.style.color = '#ffd700';
                tabelaTitle.style.margin = '0 0 8px 0';
                tabelaTitle.style.fontSize = '12px';
                tabelaTitle.style.fontWeight = 'bold';
                tabelaContainer.appendChild(tabelaTitle);

                const tabela = document.createElement('table');
                tabela.style.width = '100%';
                tabela.style.borderCollapse = 'collapse';
                tabela.style.fontSize = '11px';

                // Cabeçalho da tabela
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');

                const thTeste = document.createElement('th');
                thTeste.textContent = 'Teste';
                thTeste.style.padding = '4px 6px';
                thTeste.style.border = '1px solid rgba(255, 215, 0, 0.3)';
                thTeste.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
                thTeste.style.color = '#ffd700';
                thTeste.style.fontWeight = 'bold';
                thTeste.style.textAlign = 'left';

                const thGanho = document.createElement('th');
                thGanho.textContent = 'Ganho';
                thGanho.style.padding = '4px 6px';
                thGanho.style.border = '1px solid rgba(255, 215, 0, 0.3)';
                thGanho.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
                thGanho.style.color = '#ffd700';
                thGanho.style.fontWeight = 'bold';
                thGanho.style.textAlign = 'left';

                headerRow.appendChild(thTeste);
                headerRow.appendChild(thGanho);
                thead.appendChild(headerRow);
                tabela.appendChild(thead);

                // Corpo da tabela
                const tbody = document.createElement('tbody');
                uso.tabela.linhas.forEach(linha => {
                    const tr = document.createElement('tr');

                    const tdTeste = document.createElement('td');
                    tdTeste.textContent = linha.teste;
                    tdTeste.style.padding = '4px 6px';
                    tdTeste.style.border = '1px solid rgba(255, 215, 0, 0.2)';
                    tdTeste.style.color = '#ecf0f1';

                    const tdGanho = document.createElement('td');
                    tdGanho.textContent = linha.ganho;
                    tdGanho.style.padding = '4px 6px';
                    tdGanho.style.border = '1px solid rgba(255, 215, 0, 0.2)';
                    tdGanho.style.color = '#ecf0f1';

                    tr.appendChild(tdTeste);
                    tr.appendChild(tdGanho);
                    tbody.appendChild(tr);
                });
                tabela.appendChild(tbody);
                tabelaContainer.appendChild(tabela);
                usoContainer.appendChild(tabelaContainer);
            }

            // Eventos de mouse para feedback visual
            usoContainer.onmouseover = () => {
                usoContainer.style.background = 'rgba(110,198,255,0.1)';
                usoContainer.style.border = '1px solid #6ec6ff';
            };

            usoContainer.onmouseout = () => {
                if (selectedSpecialization !== uso.titulo) {
                    usoContainer.style.background = 'rgba(26,26,46,0.8)';
                    usoContainer.style.border = '1px solid rgba(110,198,255,0.2)';
                }
            };

            // Clique para selecionar
            usoContainer.onclick = () => {
                // Remove seleção anterior
                const allContainers = usosSection.querySelectorAll('div[style*="cursor: pointer"]');
                allContainers.forEach(container => {
                    container.style.background = 'rgba(26,26,46,0.8)';
                    container.style.border = '1px solid rgba(110,198,255,0.2)';
                    const indicator = container.querySelector('div[style*="position: absolute"]');
                    if (indicator) {
                        indicator.style.display = 'none';
                        indicator.style.background = 'transparent';
                    }
                });

                // Seleciona o atual
                selectedSpecialization = uso.titulo;
                usoContainer.style.background = 'rgba(110,198,255,0.2)';
                usoContainer.style.border = '2px solid #6ec6ff';
                selectionIndicator.style.display = 'block';
                selectionIndicator.style.background = '#6ec6ff';

                // Habilita o botão
                rollButton.disabled = false;
                rollButton.style.opacity = '1';
                rollButton.style.cursor = 'pointer';
            };

            usosSection.appendChild(usoContainer);
        });

        // Variável para armazenar a especialização selecionada
        let selectedSpecialization = null;

        // Seção de seleção de especialização
        const specializationSection = document.createElement('div');
        specializationSection.style.marginBottom = '20px';

        // Botão para fazer rolagem especializada
        const rollButton = document.createElement('button');
        rollButton.textContent = 'Fazer Rolagem';
        rollButton.style.background = '#6ec6ff';
        rollButton.style.color = '#23243a';
        rollButton.style.border = 'none';
        rollButton.style.borderRadius = '8px';
        rollButton.style.padding = '12px 20px';
        rollButton.style.fontSize = '14px';
        rollButton.style.fontWeight = 'bold';
        rollButton.style.cursor = 'pointer';
        rollButton.style.transition = 'all 0.2s';
        rollButton.style.marginTop = '10px';
        rollButton.style.width = '100%';
        rollButton.disabled = true;
        rollButton.style.opacity = '0.5';
        rollButton.style.cursor = 'not-allowed';

        rollButton.onmouseover = () => {
            if (!rollButton.disabled) {
                rollButton.style.background = '#5bb5e6';
            }
        };
        rollButton.onmouseout = () => {
            if (!rollButton.disabled) {
                rollButton.style.background = '#6ec6ff';
            }
        };

        // Seção de bônus disponíveis (antes do botão de rolagem)
        const bonusSection = document.createElement('div');
        bonusSection.style.marginBottom = '20px';
        bonusSection.style.padding = '15px';
        bonusSection.style.background = 'rgba(255, 184, 108, 0.1)';
        bonusSection.style.borderRadius = '8px';
        bonusSection.style.border = '1px solid rgba(255, 184, 108, 0.3)';

        const bonusTitle = document.createElement('h3');
        bonusTitle.textContent = 'Bônus Disponíveis para esta Rolagem';
        bonusTitle.style.color = '#ffb86c';
        bonusTitle.style.margin = '0 0 15px 0';
        bonusTitle.style.fontSize = '16px';
        bonusTitle.style.fontWeight = 'bold';
        bonusSection.appendChild(bonusTitle);
        // Verifica quais efeitos de comida estão ativos
        const batataValkarianaActive = isEffectActive('prato_batata_valkariana');
        const boloCenouraActive = isEffectActive('prato_bolo_de_cenoura');
        const estrogonofeActive = isEffectActive('prato_estrogonofe');
        const futomakiActive = isEffectActive('prato_futomaki');
        const paoQueijoActive = isEffectActive('prato_pao_de_queijo');
        const porcoAssadoActive = isEffectActive('prato_porco_assado');
        const saladaElficaActive = isEffectActive('prato_salada_elfica');
        const saladaImperialActive = isEffectActive('prato_salada_imperial');
        const sopaCogumeloActive = isEffectActive('prato_sopa_de_cogumelo');
        const pizzaActive = isEffectActive('prato_pizza');
        const cozidoDePimentaActive = isEffectActive('prato_cozido_de_pimenta');
        // Verifica quais efeitos de bebidas estão ativos
        const babaDeTrollActive = isEffectActive('bebida_baba_de_troll');
        const cervejaDeheoniActive = isEffectActive('bebida_cerveja_deheoni');
        const sidraAhlenienseActive = isEffectActive('bebida_sidra_ahleniense');

        // Função para criar um bônus de comida
        function createFoodBonus(id, label, description, isActive) {
            if (!isActive) return null;

            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.gap = '10px';
            container.style.marginBottom = '10px';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = id;
            checkbox.style.width = '16px';
            checkbox.style.height = '16px';

            const labelElement = document.createElement('label');
            labelElement.htmlFor = id;
            labelElement.textContent = label;
            labelElement.style.color = '#ecf0f1';
            labelElement.style.fontSize = '14px';
            labelElement.style.fontWeight = 'bold';
            labelElement.style.cursor = 'pointer';

            const desc = document.createElement('span');
            desc.textContent = ` - ${description}`;
            desc.style.color = '#ffb86c';
            desc.style.fontSize = '12px';
            desc.style.fontStyle = 'italic';

            labelElement.appendChild(desc);
            container.appendChild(checkbox);
            container.appendChild(labelElement);
            return container;
        }

        // Adiciona os bônus disponíveis
        let hasAnyBonus = false;

        if (batataValkarianaActive) {
            const bonus = createFoodBonus('batata-valkariana-bonus', 'Batata Valkariana (+1d6 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (boloCenouraActive && skillName === 'Percepção') {
            const bonus = createFoodBonus('bolo-cenoura-bonus', 'Bolo de Cenoura (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (estrogonofeActive && skillName === 'Vontade') {
            const bonus = createFoodBonus('estrogonofe-bonus', 'Estrogonofe (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (futomakiActive && skillName === 'Diplomacia') {
            const bonus = createFoodBonus('futomaki-bonus', 'Futomaki (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (paoQueijoActive && skillName === 'Fortitude') {
            const bonus = createFoodBonus('pao-queijo-bonus', 'Pão de Queijo (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (porcoAssadoActive && skillName === 'Luta') {
            const bonus = createFoodBonus('porco-assado-bonus', 'Porco Assado (+1 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (saladaElficaActive && skillName === 'Pontaria') {
            const bonus = createFoodBonus('salada-elfica-bonus', 'Salada Elfica (+1 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (saladaImperialActive && skillName === 'Iniciativa') {
            const bonus = createFoodBonus('salada-imperial-bonus', 'Salada Imperial (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (sopaCogumeloActive && skillName === 'Misticismo') {
            const bonus = createFoodBonus('sopa-cogumelo-bonus', 'Sopa de Cogumelo (+2 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (pizzaActive && (skillName === 'Vontade' || skillName === 'Reflexos' || skillName === 'Fortitude')) {
            const bonus = createFoodBonus('pizza-bonus', 'Pizza (+1 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (cozidoDePimentaActive && skillName === 'Fortitude') {
            const bonus = createFoodBonus('cozido-de-pimenta-bonus', 'Cozido de Pimenta (+1 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        // Efeitos de bebidas nos testes de perícias
        if (babaDeTrollActive) {
            const bonus = createFoodBonus('baba-de-troll-bonus', 'Baba de Troll (+1d4 no teste)', 'Consome o efeito após a rolagem', true);
            bonusSection.appendChild(bonus);
            hasAnyBonus = true;
        }

        if (cervejaDeheoniActive && (skillName === 'Fortitude' || skillName === 'Vontade' || skillName === 'Reflexos')) {
            const bonus = createFoodBonus('cerveja-deheoni-bonus', 'Cerveja Deheoni (+1 no teste de resistência)', 'Efeito ativo por 24 horas', true);
            if (bonus) {
                bonusSection.appendChild(bonus);
                hasAnyBonus = true;
            }
        }

        if (sidraAhlenienseActive && (skillName === 'Adestramento' || skillName === 'Atuação' || skillName === 'Diplomacia' || skillName === 'Enganação' || skillName === 'Intimidação' || skillName === 'Jogatina')) {
            const bonus = createFoodBonus('sidra-ahleniense-bonus', 'Sidra Ahleniense (+2 no teste de Carisma)', 'Efeito ativo por 24 horas', true);
            if (bonus) {
                bonusSection.appendChild(bonus);
                hasAnyBonus = true;
            }
        }

        if (!hasAnyBonus) {
            const noBonusMessage = document.createElement('div');
            noBonusMessage.textContent = 'Nenhum bônus disponível para esta rolagem.';
            noBonusMessage.style.color = '#999';
            noBonusMessage.style.fontSize = '14px';
            noBonusMessage.style.fontStyle = 'italic';
            noBonusMessage.style.textAlign = 'center';
            noBonusMessage.style.padding = '10px';
            bonusSection.appendChild(noBonusMessage);
        }

        // Adiciona os elementos ao modal na ordem correta
        modal.appendChild(usosSection);
        modal.appendChild(bonusSection);
        modal.appendChild(specializationSection);
        modal.appendChild(rollButton);

        rollButton.onclick = () => {
            if (!selectedSpecialization) return;

            // Verifica quais efeitos de comida foram selecionados
            const batataValkarianaSelected = document.getElementById('batata-valkariana-bonus') &&
                document.getElementById('batata-valkariana-bonus').checked;
            const boloCenouraSelected = document.getElementById('bolo-cenoura-bonus') &&
                document.getElementById('bolo-cenoura-bonus').checked;
            const estrogonofeSelected = document.getElementById('estrogonofe-bonus') &&
                document.getElementById('estrogonofe-bonus').checked;
            const futomakiSelected = document.getElementById('futomaki-bonus') &&
                document.getElementById('futomaki-bonus').checked;
            const paoQueijoSelected = document.getElementById('pao-queijo-bonus') &&
                document.getElementById('pao-queijo-bonus').checked;
            const porcoAssadoSelected = document.getElementById('porco-assado-bonus') &&
                document.getElementById('porco-assado-bonus').checked;
            const saladaElficaSelected = document.getElementById('salada-elfica-bonus') &&
                document.getElementById('salada-elfica-bonus').checked;
            const saladaImperialSelected = document.getElementById('salada-imperial-bonus') &&
                document.getElementById('salada-imperial-bonus').checked;
            const sopaCogumeloSelected = document.getElementById('sopa-cogumelo-bonus') &&
                document.getElementById('sopa-cogumelo-bonus').checked;
            const pizzaSelected = document.getElementById('pizza-bonus') &&
                document.getElementById('pizza-bonus').checked;
            const cozidoDePimentaSelected = document.getElementById('cozido-de-pimenta-bonus') &&
                document.getElementById('cozido-de-pimenta-bonus').checked;

            // Encontra o comando da skill na lista de skills
            const skills = [
                { nome: 'Acrobacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Acrobacia - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|acrobaciatotal}]]]]}}` },
                { nome: 'Adestramento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Adestramento - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|adestramentototal}]]]]}}` },
                { nome: 'Atletismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atletismo - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atletismototal}]]]]}}` },
                { nome: 'Atuação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atuação - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atuacaototal}]]]]}}` },
                { nome: 'Cavalgar', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cavalgar - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|cavalgartotal}]]]]}}` },
                { nome: 'Conhecimento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Conhecimento - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|conhecimentototal}]]]]}}` },
                { nome: 'Cura', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cura - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|curatotal}]]]]}}` },
                { nome: 'Diplomacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Diplomacia - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|diplomaciatotal}]]]]}}` },
                { nome: 'Enganação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Enganação - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|enganacaototal}]]]]}}` },
                { nome: 'Fortitude', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Fortitude - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|fortitudetotal}]]]]}}` },
                { nome: 'Furtividade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Furtividade - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|furtividadetotal}]]]]}}` },
                { nome: 'Guerra', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Guerra - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|guerratotal}]]]]}}` },
                { nome: 'Iniciativa', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Iniciativa - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|iniciativatotal}]] &{tracker}]]}}` },
                { nome: 'Intimidação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intimidação - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intimidacaototal}]]]]}}` },
                { nome: 'Intuição', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intuição - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intuicaototal}]]]]}}` },
                { nome: 'Investigação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Investigação - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|investigacaototal}]]]]}}` },
                { nome: 'Jogatina', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Jogatina - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|jogatinatotal}]]]]}}` },
                { nome: 'Ladinagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ladinagem - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|ladinagemtotal}]]]]}}` },
                { nome: 'Luta', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Luta - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}` },
                { nome: 'Misticismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Misticismo - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|misticismototal}]]]]}}` },
                { nome: 'Nobreza', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Nobreza - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|nobrezatotal}]]]]}}` },
                { nome: 'Ofício', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ofício @{${getCharacterNameForMacro()}|oficionome} - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|oficiototal}]]]]}}` },
                { nome: 'Percepção', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Percepção - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|percepcaototal}]]]]}}` },
                { nome: 'Pilotagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pilotagem - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pilotagemtotal}]]]]}}` },
                { nome: 'Pontaria', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pontaria - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pontariatotal}]]]]}}` },
                { nome: 'Reflexos', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Reflexos - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|reflexostotal}]]]]}}` },
                { nome: 'Religião', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Religião - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|religiaototal}]]]]}}` },
                { nome: 'Sobrevivência', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Sobrevivência - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|sobrevivenciatotal}]]]]}}` },
                { nome: 'Vontade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Vontade - ${selectedSpecialization}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|vontadetotal}]]]]}}` }
            ];

            const skill = skills.find(s => s.nome === skillName);
            if (skill) {
                let finalCommand = skill.comando;

                // Adiciona bônus dos efeitos de comida selecionados
                let numericBonus = 0;
                let diceBonus = '';
                let bonusDescription = '';

                if (batataValkarianaSelected) {
                    diceBonus += '+1d6';
                    bonusDescription += '%NEWLINE% *+ Batata Valkariana (+1d6)*';
                }

                if (boloCenouraSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Bolo de Cenoura (+2)*';
                }

                if (estrogonofeSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Estrogonofe (+2)*';
                }

                if (futomakiSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Futomaki (+2)*';
                }

                if (paoQueijoSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Pão de Queijo (+2)*';
                }

                if (porcoAssadoSelected) {
                    numericBonus += 1;
                    bonusDescription += '%NEWLINE% *+ Porco Assado (+1)*';
                }

                if (saladaElficaSelected) {
                    numericBonus += 1;
                    bonusDescription += '%NEWLINE% *+ Salada Elfica (+1)*';
                }

                if (saladaImperialSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Salada Imperial (+2)*';
                }

                if (sopaCogumeloSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Sopa de Cogumelo (+2)*';
                }

                if (pizzaSelected) {
                    numericBonus += 1;
                    bonusDescription += '%NEWLINE% *+ Pizza (+1)*';
                }

                if (cozidoDePimentaSelected) {
                    numericBonus += 1;
                    bonusDescription += '%NEWLINE% *+ Cozido de Pimenta (+1)*';
                }

                // Efeitos de bebidas nos testes de perícias
                const babaDeTrollSelected = document.getElementById('baba-de-troll-bonus') &&
                    document.getElementById('baba-de-troll-bonus').checked;
                const cervejaDeheoniSelected = document.getElementById('cerveja-deheoni-bonus') &&
                    document.getElementById('cerveja-deheoni-bonus').checked;
                const sidraAhlenienseSelected = document.getElementById('sidra-ahleniense-bonus') &&
                    document.getElementById('sidra-ahleniense-bonus').checked;

                if (babaDeTrollSelected) {
                    diceBonus += '+1d4';
                    bonusDescription += '%NEWLINE% *+ Baba de Troll (+1d4)*';
                }

                if (cervejaDeheoniSelected) {
                    numericBonus += 1;
                    bonusDescription += '%NEWLINE% *+ Cerveja Deheoni (+1)*';
                }

                if (sidraAhlenienseSelected) {
                    numericBonus += 2;
                    bonusDescription += '%NEWLINE% *+ Sidra Ahleniense (+2)*';
                }

                // Aplica os bônus se houver algum
                if (numericBonus !== 0 || diceBonus !== '') {
                    // Adiciona o bônus na rolagem
                    if (diceBonus !== '') {
                        // Se há dados, coloca-os logo após o 1d20
                        finalCommand = finalCommand.replace(
                            /theroll=\[\[1d20\+\[\[(.*?)\]\]\]\]/,
                            `theroll=[[1d20${diceBonus}+[[$1]]${numericBonus !== 0 ? `+${numericBonus}` : ''}]]`
                        );
                    } else {
                        // Se só há bônus numéricos, adiciona no final
                        finalCommand = finalCommand.replace(
                            /theroll=\[\[(.*?)\]\]/,
                            `theroll=[[$1+${numericBonus}]]`
                        );
                    }

                    // Adiciona a descrição dos bônus dentro do rollname
                    finalCommand = finalCommand.replace(
                        /(\{\{rollname=)(.*?)(\}\})/,
                        `$1$2${bonusDescription}$3`
                    );
                }

                sendToChat(finalCommand);

                // Remove apenas a Batata Valkariana automaticamente (consumível)
                setTimeout(() => {
                    if (batataValkarianaSelected) {
                        toggleEffect('prato_batata_valkariana');
                        let comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                        comidaEffects = comidaEffects.filter(e => e.effectKey !== 'prato_batata_valkariana');
                        localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));
                        showSuccessNotification('🍟 Efeito da Batata Valkariana consumido no teste!');
                    }

                    // Para os outros pratos, apenas mostra notificação sem remover o efeito
                    if (boloCenouraSelected) {
                        showSuccessNotification('🥕 Bônus do Bolo de Cenoura aplicado no teste!');
                    }

                    if (estrogonofeSelected) {
                        showSuccessNotification('🍝 Bônus do Estrogonofe aplicado no teste!');
                    }

                    if (futomakiSelected) {
                        showSuccessNotification('🍣 Bônus do Futomaki aplicado no teste!');
                    }

                    if (paoQueijoSelected) {
                        showSuccessNotification('🧀 Bônus do Pão de Queijo aplicado no teste!');
                    }

                    if (porcoAssadoSelected) {
                        showSuccessNotification('🐷 Bônus do Porco Assado aplicado no teste!');
                    }

                    if (saladaElficaSelected) {
                        showSuccessNotification('🥗 Bônus da Salada Elfica aplicado no teste!');
                    }

                    if (saladaImperialSelected) {
                        showSuccessNotification('🥗 Bônus da Salada Imperial aplicado no teste!');
                    }

                    if (sopaCogumeloSelected) {
                        showSuccessNotification('🍄 Bônus da Sopa de Cogumelo aplicado no teste!');
                    }

                    if (pizzaSelected) {
                        showSuccessNotification('🍕 Bônus da Pizza aplicado no teste!');
                    }

                    if (cozidoDePimentaSelected) {
                        showSuccessNotification('🌶️ Bônus do Cozido de Pimenta aplicado no teste!');
                    }

                    // Tratamento das bebidas após o teste
                    if (babaDeTrollSelected) {
                        // Remove o efeito da Baba de Troll (consumível)
                        toggleEffect('bebida_baba_de_troll');

                        // Remove também da lista de efeitos de bebida
                        let bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                        bebidaEffects = bebidaEffects.filter(e => e.effectKey !== 'bebida_baba_de_troll');
                        localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));

                        showSuccessNotification('🧃 Efeito da Baba de Troll consumido no teste!');
                    }

                    if (cervejaDeheoniSelected) {
                        showSuccessNotification('🍻 Bônus da Cerveja Deheoni aplicado no teste!');
                    }

                    if (sidraAhlenienseSelected) {
                        showSuccessNotification('🍏 Bônus da Sidra Ahleniense aplicado no teste!');
                    }
                }, 500);

                // Fecha todos os popups de skills
                closeAllSkillPopups();
            }
        };

        document.body.appendChild(modal);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(modal, 'blue');
    }

    // Função para obter a versão atual do script
    function getGitVersion() {
        // Retorna a versão definida na constante SCRIPT_VERSION
        // Esta constante deve ser atualizada manualmente quando uma nova tag Git for criada
        return SCRIPT_VERSION;
    }

    // Função para atualizar o indicador de versão
    function updateVersionIndicator() {
        const versionText = document.getElementById('hotbar-version-text');
        if (versionText) {
            const version = getGitVersion();
            versionText.textContent = version;
        }
    }
    // Cria a hotbar
    function createHotbar() {
        const hotbar = document.createElement('div');
        hotbar.id = 'roll20-hotbar';
        hotbar.className = 'roll20-scrollbar-auto';
        hotbar.style.position = 'fixed';
        hotbar.style.bottom = '24px';
        hotbar.style.left = '50%';
        hotbar.style.transform = 'translateX(-50%)';
        hotbar.style.background = 'rgba(30,30,40,0.92)';
        hotbar.style.padding = '0';
        hotbar.style.borderRadius = '16px';
        hotbar.style.zIndex = '9999';
        hotbar.style.display = 'flex';
        hotbar.style.flexDirection = 'column';
        hotbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.5)';
        hotbar.style.userSelect = 'none';
        hotbar.style.border = '2px solid #6ec6ff';
        hotbar.style.minWidth = '600px';
        hotbar.style.alignItems = 'stretch';

        // Cabeçalho que se estende por toda a largura
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.alignItems = 'center';
        header.style.justifyContent = 'center';
        header.style.padding = '18px 24px 5px 24px';
        header.style.borderBottom = '1px solid rgba(110,198,255,0.2)';
        header.style.cursor = 'grab';
        header.style.position = 'relative';
        header.style.width = '100%';
        header.style.boxSizing = 'border-box';

        // Toggle para /talktomyself
        const talkToggle = document.createElement('div');
        talkToggle.style.position = 'absolute';
        talkToggle.style.left = '24px';
        talkToggle.style.top = '50%';
        talkToggle.style.transform = 'translateY(-50%)';
        talkToggle.style.cursor = 'pointer';
        talkToggle.style.display = 'flex';
        talkToggle.style.alignItems = 'center';
        talkToggle.style.gap = '5px';
        talkToggle.style.fontSize = '12px';
        talkToggle.style.color = '#ecf0f1';
        talkToggle.style.userSelect = 'none';

        const toggleLabel = document.createElement('span');
        toggleLabel.textContent = 'TTM';
        toggleLabel.style.fontSize = '10px';
        toggleLabel.style.fontWeight = 'bold';

        const toggleSwitch = document.createElement('div');
        toggleSwitch.style.width = '24px';
        toggleSwitch.style.height = '12px';
        toggleSwitch.style.background = '#444';
        toggleSwitch.style.borderRadius = '6px';
        toggleSwitch.style.position = 'relative';
        toggleSwitch.style.transition = 'all 0.3s';
        toggleSwitch.style.border = '1px solid #666';

        const toggleKnob = document.createElement('div');
        toggleKnob.style.width = '8px';
        toggleKnob.style.height = '8px';
        toggleKnob.style.background = '#fff';
        toggleKnob.style.borderRadius = '50%';
        toggleKnob.style.position = 'absolute';
        toggleKnob.style.top = '1px';
        toggleKnob.style.left = '1px';
        toggleKnob.style.transition = 'all 0.3s';

        toggleSwitch.appendChild(toggleKnob);
        talkToggle.appendChild(toggleLabel);
        talkToggle.appendChild(toggleSwitch);

        let isTalkToMyselfActive = false;

        talkToggle.onclick = (e) => {
            e.stopPropagation(); // Previne que o header seja arrastado

            isTalkToMyselfActive = !isTalkToMyselfActive;

            if (isTalkToMyselfActive) {
                // Ativa o toggle
                toggleSwitch.style.background = '#6ec6ff';
                toggleSwitch.style.borderColor = '#6ec6ff';
                toggleKnob.style.left = '13px';
                toggleLabel.style.color = '#6ec6ff';
                sendToChat('/talktomyself');
            } else {
                // Desativa o toggle
                toggleSwitch.style.background = '#444';
                toggleSwitch.style.borderColor = '#666';
                toggleKnob.style.left = '1px';
                toggleLabel.style.color = '#ecf0f1';
                sendToChat('/talktomyself');
            }
        };

        header.appendChild(talkToggle);

        // Título sem emoji
        const title = document.createElement('span');
        title.textContent = 'Hotbar';
        title.style.color = '#ecf0f1';
        title.style.fontSize = '14px';
        title.style.fontWeight = 'bold';
        title.style.cursor = 'grab';
        title.style.textAlign = 'center';
        header.appendChild(title);

        // Indicador de versão (tag Git)
        const versionIndicator = document.createElement('div');
        versionIndicator.style.position = 'absolute';
        versionIndicator.style.right = '85px'; // Posicionado à esquerda do chip de configurações
        versionIndicator.style.top = '50%';
        versionIndicator.style.transform = 'translateY(-50%)';
        versionIndicator.style.cursor = 'default';
        versionIndicator.style.display = 'flex';
        versionIndicator.style.alignItems = 'center';
        versionIndicator.style.gap = '4px';
        versionIndicator.style.fontSize = '10px';
        versionIndicator.style.color = '#6ec6ff';
        versionIndicator.style.userSelect = 'none';
        versionIndicator.style.background = 'rgba(110,198,255,0.1)';
        versionIndicator.style.padding = '4px 8px';
        versionIndicator.style.borderRadius = '8px';
        versionIndicator.style.border = '1px solid rgba(110,198,255,0.3)';
        versionIndicator.style.fontWeight = 'bold';
        versionIndicator.style.transition = 'all 0.2s ease';
        versionIndicator.style.cursor = 'pointer';
        versionIndicator.style.marginRight = '10px'; // Margin entre os botões

        // Efeito hover
        versionIndicator.onmouseover = () => {
            versionIndicator.style.background = 'rgba(110,198,255,0.2)';
            versionIndicator.style.borderColor = 'rgba(110,198,255,0.6)';
            versionIndicator.style.transform = 'translateY(-50%) scale(1.05)';
        };

        versionIndicator.onmouseout = () => {
            versionIndicator.style.background = 'rgba(110,198,255,0.1)';
            versionIndicator.style.borderColor = 'rgba(110,198,255,0.3)';
            versionIndicator.style.transform = 'translateY(-50%) scale(1)';
        };

        const versionIcon = document.createElement('span');
        versionIcon.textContent = '🏷️';
        versionIcon.style.fontSize = '10px';

        const versionText = document.createElement('span');
        versionText.textContent = 'v0.0.1'; // Última tag Git (será atualizada dinamicamente)
        versionText.style.fontSize = '10px';
        versionText.id = 'hotbar-version-text';

        versionIndicator.appendChild(versionIcon);
        versionIndicator.appendChild(versionText);

        // Adicionar tooltip ao indicador de versão
        versionIndicator.title = `Versão atual do script: ${getGitVersion()}\nClique para copiar a versão`;

        // Adicionar funcionalidade de clique para copiar a versão
        versionIndicator.onclick = (e) => {
            e.stopPropagation(); // Previne que o header seja arrastado
            const version = getGitVersion();
            navigator.clipboard.writeText(version).then(() => {
                createNotification(`Versão ${version} copiada para a área de transferência!`, 'success', 2000);
            }).catch(() => {
                createNotification('Erro ao copiar versão', 'error', 2000);
            });
        };

        // Chip de configurações (novo)
        const configIndicator = document.createElement('div');
        configIndicator.style.position = 'absolute';
        configIndicator.style.right = '24px'; // Posicionado à direita do indicador de versão
        configIndicator.style.top = '50%';
        configIndicator.style.transform = 'translateY(-50%)';
        configIndicator.style.cursor = 'pointer';
        configIndicator.style.display = 'flex';
        configIndicator.style.alignItems = 'center';
        configIndicator.style.gap = '4px';
        configIndicator.style.fontSize = '10px';
        configIndicator.style.color = '#ffb86c';
        configIndicator.style.userSelect = 'none';
        configIndicator.style.background = 'rgba(255,184,108,0.1)';
        configIndicator.style.padding = '4px 8px';
        configIndicator.style.borderRadius = '8px';
        configIndicator.style.border = '1px solid rgba(255,184,108,0.3)';
        configIndicator.style.fontWeight = 'bold';
        configIndicator.style.transition = 'all 0.2s ease';

        // Efeito hover para o chip de configurações
        configIndicator.onmouseover = () => {
            configIndicator.style.background = 'rgba(255,184,108,0.2)';
            configIndicator.style.borderColor = 'rgba(255,184,108,0.6)';
            configIndicator.style.transform = 'translateY(-50%) scale(1.05)';
        };

        configIndicator.onmouseout = () => {
            configIndicator.style.background = 'rgba(255,184,108,0.1)';
            configIndicator.style.borderColor = 'rgba(255,184,108,0.3)';
            configIndicator.style.transform = 'translateY(-50%) scale(1)';
        };

        const configIcon = document.createElement('span');
        configIcon.textContent = '⚙️';
        configIcon.style.fontSize = '10px';

        const configText = document.createElement('span');
        configText.textContent = 'Config';
        configText.style.fontSize = '10px';

        configIndicator.appendChild(configIcon);
        configIndicator.appendChild(configText);

        // Adicionar tooltip ao chip de configurações
        configIndicator.title = 'Configurações do script\nClique para abrir as configurações';

        // Adicionar funcionalidade de clique para abrir configurações
        configIndicator.onclick = (e) => {
            e.stopPropagation(); // Previne que o header seja arrastado
            createConfigModal();
        };

        header.appendChild(configIndicator);
        header.appendChild(versionIndicator);

        hotbar.appendChild(header);

        // Container principal com as seções
        const mainContent = document.createElement('div');
        mainContent.style.display = 'flex';
        mainContent.style.flexDirection = 'row';
        mainContent.style.gap = '20px';
        mainContent.style.padding = '14px 24px 14px 24px';
        mainContent.style.alignItems = 'center';

        // Seção 1: Avatar do personagem (lado esquerdo)
        const characterSection = document.createElement('div');
        characterSection.style.display = 'flex';
        characterSection.style.alignItems = 'center';
        characterSection.style.gap = '12px';
        characterSection.style.padding = '8px 12px';
        characterSection.style.background = 'rgba(26,26,46,0.8)';
        characterSection.style.borderRadius = '12px';
        characterSection.style.border = '1px solid rgba(110,198,255,0.3)';
        characterSection.style.minWidth = '200px';

        // Avatar do personagem
        const avatarContainer = document.createElement('div');
        avatarContainer.style.position = 'relative';
        avatarContainer.style.cursor = 'pointer';
        avatarContainer.style.transition = 'all 0.2s';

        const avatar = document.createElement('div');
        avatar.id = 'character-avatar';
        avatar.style.width = '48px';
        avatar.style.height = '48px';
        avatar.style.borderRadius = '50%';
        avatar.style.border = '2px solid #6ec6ff';
        avatar.style.display = 'flex';
        avatar.style.alignItems = 'center';
        avatar.style.justifyContent = 'center';
        avatar.style.fontSize = '16px';
        avatar.style.fontWeight = 'bold';
        avatar.style.color = '#ecf0f1';
        avatar.style.background = '#23243a';
        avatar.style.overflow = 'hidden';
        avatar.style.transition = 'all 0.2s';

        // Carrega avatar salvo ou usa iniciais
        const avatarUrl = getAvatarUrl();
        if (avatarUrl) {
            avatar.style.background = `url(${avatarUrl}) center/cover`;
            avatar.textContent = '';
        } else {
            avatar.textContent = 'EE';
        }

        // Ícone de edição no avatar
        const editIcon = document.createElement('div');
        editIcon.innerHTML = '✏️';
        editIcon.style.position = 'absolute';
        editIcon.style.bottom = '-2px';
        editIcon.style.right = '-2px';
        editIcon.style.background = '#6ec6ff';
        editIcon.style.borderRadius = '50%';
        editIcon.style.width = '18px';
        editIcon.style.height = '18px';
        editIcon.style.display = 'flex';
        editIcon.style.alignItems = 'center';
        editIcon.style.justifyContent = 'center';
        editIcon.style.fontSize = '10px';
        editIcon.style.border = '2px solid rgba(30,30,40,0.92)';
        editIcon.style.opacity = '0';
        editIcon.style.transition = 'all 0.2s';

        // Ícone da classe Caçador
        const classIcon = document.createElement('div');
        classIcon.innerHTML = '🏹';
        classIcon.style.position = 'absolute';
        classIcon.style.top = '-2px';
        classIcon.style.left = '-2px';
        classIcon.style.background = '#8B4513';
        classIcon.style.borderRadius = '50%';
        classIcon.style.width = '18px';
        classIcon.style.height = '18px';
        classIcon.style.display = 'flex';
        classIcon.style.alignItems = 'center';
        classIcon.style.justifyContent = 'center';
        classIcon.style.fontSize = '10px';
        classIcon.style.border = '2px solid rgba(30,30,40,0.92)';
        classIcon.style.transition = 'all 0.2s';
        classIcon.title = 'Caçador';

        avatarContainer.appendChild(avatar);
        avatarContainer.appendChild(editIcon);
        avatarContainer.appendChild(classIcon);

        // Hover effects
        avatarContainer.onmouseover = () => {
            avatar.style.transform = 'scale(1.05)';
            editIcon.style.opacity = '1';
            classIcon.style.transform = 'scale(1.1)';
        };
        avatarContainer.onmouseout = () => {
            avatar.style.transform = 'scale(1)';
            editIcon.style.opacity = '0';
            classIcon.style.transform = 'scale(1)';
        };
        avatarContainer.onclick = createAvatarPopup;

        // Informações do personagem
        const characterInfo = document.createElement('div');
        characterInfo.style.display = 'flex';
        characterInfo.style.flexDirection = 'column';
        characterInfo.style.gap = '2px';

        // --- NOVO: Buscar nome e nível do localStorage ou permitir configuração manual ---
        const CHAR_LEVEL_KEY = 'roll20-hotbar-charlevel';
        function getCharLevel() {
            return localStorage.getItem(CHAR_LEVEL_KEY) || '1';
        }
        function saveCharName(name) {
            localStorage.setItem(CHAR_NAME_KEY, name);
        }
        function saveCharLevel(level) {
            localStorage.setItem(CHAR_LEVEL_KEY, level);
        }

        // Nome editável
        const characterName = document.createElement('div');
        characterName.textContent = getCharacterName();
        characterName.style.color = '#ecf0f1';
        characterName.style.fontSize = '14px';
        characterName.style.fontWeight = 'bold';
        characterName.style.whiteSpace = 'nowrap';
        characterName.style.cursor = 'pointer';
        characterName.title = 'Clique para editar o nome';
        characterName.onclick = () => {
            const novoNome = prompt('Nome do personagem:', getCharacterName());
            if (novoNome !== null && novoNome.trim() !== '') {
                saveCharName(novoNome.trim());
                characterName.textContent = novoNome.trim();
                showSuccessNotification(`Nome do personagem alterado para "${novoNome.trim()}"!`);
            }
        };

        // Nível editável
        const characterLevel = document.createElement('div');
        characterLevel.textContent = `Nível ${getCharLevel()}`;
        characterLevel.style.color = '#6ec6ff';
        characterLevel.style.fontSize = '12px';
        characterLevel.style.fontWeight = 'bold';
        characterLevel.style.cursor = 'pointer';
        characterLevel.title = 'Clique para editar o nível';
        characterLevel.onclick = () => {
            const novoNivel = prompt('Nível do personagem (1-20):', getCharLevel());
            if (novoNivel !== null && novoNivel.trim() !== '') {
                const nivel = parseInt(novoNivel.trim());
                if (nivel >= 1 && nivel <= 20) {
                    saveCharLevel(nivel.toString());
                    characterLevel.textContent = `Nível ${nivel}`;
                    showSuccessNotification(`Nível do personagem alterado para ${nivel}!`);
                } else {
                    showErrorNotification('O nível deve ser entre 1 e 20!');
                }
            }
        };

        // Classe do personagem (agora como badge clicável)
        const characterClass = document.createElement('div');
        characterClass.textContent = 'Caçador';
        characterClass.style.color = '#8B4513';
        characterClass.style.fontSize = '11px';
        characterClass.style.fontWeight = 'bold';
        characterClass.style.fontStyle = 'italic';
        characterClass.style.textTransform = 'uppercase';
        characterClass.style.letterSpacing = '0.5px';
        characterClass.style.cursor = 'pointer';
        characterClass.style.padding = '2px 6px';
        characterClass.style.background = 'rgba(139, 69, 19, 0.2)';
        characterClass.style.borderRadius = '8px';
        characterClass.style.border = '1px solid rgba(139, 69, 19, 0.4)';
        characterClass.style.transition = 'all 0.2s';
        characterClass.style.display = 'inline-block';
        characterClass.style.width = 'fit-content';
        characterClass.style.position = 'relative';
        characterClass.title = 'Clique para ver informações da classe';

        characterClass.onmouseover = () => {
            characterClass.style.background = 'rgba(139, 69, 19, 0.3)';
            characterClass.style.borderColor = 'rgba(139, 69, 19, 0.6)';
            characterClass.style.transform = 'scale(1.05)';
        };
        characterClass.onmouseout = () => {
            characterClass.style.background = 'rgba(139, 69, 19, 0.2)';
            characterClass.style.borderColor = 'rgba(139, 69, 19, 0.4)';
            characterClass.style.transform = 'scale(1)';
        };
        characterClass.onclick = () => {
            createHunterClassModal();
        };

        characterInfo.appendChild(characterName);
        characterInfo.appendChild(characterLevel);
        characterInfo.appendChild(characterClass);

        characterSection.appendChild(avatarContainer);
        characterSection.appendChild(characterInfo);

        // Linha separadora 1
        const separator1 = document.createElement('div');
        separator1.style.width = '1px';
        separator1.style.height = '60px';
        separator1.style.background = 'rgba(110,198,255,0.3)';
        separator1.style.margin = '0 10px';

        // Seção 2: Combate (botões Atacar e Manobras)
        const combatSection = document.createElement('div');
        combatSection.style.display = 'flex';
        combatSection.style.alignItems = 'center';
        combatSection.style.gap = '12px';
        combatSection.style.padding = '8px 12px';
        combatSection.style.background = 'rgba(46,26,26,0.8)';
        combatSection.style.borderRadius = '12px';
        combatSection.style.border = '1px solid rgba(255,110,110,0.3)';
        combatSection.style.minWidth = '160px';
        combatSection.style.justifyContent = 'center';
        // Linha separadora 2
        const separator2 = document.createElement('div');
        separator2.style.width = '1px';
        separator2.style.height = '60px';
        separator2.style.background = 'rgba(110,198,255,0.3)';
        separator2.style.margin = '0 10px';
        // Seção 3: Outros botões (Skills, Spells, Habilidades, Efeitos, Misc) - Agrupados
        const otherButtonsSection = document.createElement('div');
        otherButtonsSection.style.display = 'flex';
        otherButtonsSection.style.alignItems = 'center';
        otherButtonsSection.style.gap = '8px';
        otherButtonsSection.style.padding = '8px 12px';
        otherButtonsSection.style.background = 'rgba(26,26,46,0.8)';
        otherButtonsSection.style.borderRadius = '12px';
        otherButtonsSection.style.border = '1px solid rgba(110,198,255,0.3)';
        otherButtonsSection.style.minWidth = '340px';
        otherButtonsSection.style.justifyContent = 'center';
        // Função para abrir popup de manobras de combate
        function createManeuversPopup() {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('maneuvers-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('maneuvers-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'maneuvers-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10000';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'maneuvers-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ff6e6e';
            popup.style.borderRadius = '12px';
            popup.style.padding = '18px 20px 16px 20px';
            popup.style.zIndex = '10001';
            popup.style.maxWidth = '340px';
            popup.style.maxHeight = '480px';
            popup.style.overflowY = 'auto';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '15px';
            header.style.width = '100%'; const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('maneuvers-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h3');
            title.textContent = 'Manobras de Combate';
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold'; header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Campo de filtro
            const filterContainer = document.createElement('div');
            filterContainer.style.position = 'relative';
            filterContainer.style.marginBottom = '10px';

            // Instrução para detalhes
            const instructionText = document.createElement('div');
            instructionText.innerHTML = '💡 <strong>Dica:</strong> Clique segurando CTRL para ver detalhes completos da manobra';
            instructionText.style.color = '#ff6e6e';
            instructionText.style.fontSize = '12px';
            instructionText.style.marginBottom = '8px';
            instructionText.style.textAlign = 'center';
            instructionText.style.fontStyle = 'italic';
            popup.appendChild(instructionText);
            const filterInput = document.createElement('input');
            filterInput.type = 'text';
            filterInput.placeholder = 'Filtrar manobras...';
            filterInput.style.width = '100%';
            filterInput.style.padding = '10px 28px 10px 12px';
            filterInput.style.borderRadius = '8px';
            filterInput.style.border = '1px solid #ff6e6e';
            filterInput.style.background = '#23243a';
            filterInput.style.color = '#fff';
            filterInput.style.fontSize = '14px';
            filterInput.style.outline = 'none';
            filterInput.style.boxSizing = 'border-box';
            filterInput.style.fontSize = '15px';
            // Botão X para limpar
            const clearBtn = document.createElement('span');
            clearBtn.textContent = '×';
            clearBtn.style.position = 'absolute';
            clearBtn.style.right = '8px';
            clearBtn.style.top = '50%';
            clearBtn.style.transform = 'translateY(-50%)';
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.color = '#ff6e6e';
            clearBtn.style.fontSize = '18px';
            clearBtn.style.display = 'none';
            clearBtn.onclick = () => {
                filterInput.value = '';
                filterInput.dispatchEvent(new Event('input'));
                filterInput.focus();
            };
            filterInput.oninput = () => {
                if (filterInput.value.length > 0) {
                    clearBtn.style.display = 'block';
                } else {
                    clearBtn.style.display = 'none';
                }
                filterManeuvers();
            };
            filterInput.onfocus = () => {
                filterInput.style.borderColor = '#ff8e8e';
            };
            filterInput.style.borderColor = '#ff6e6e';
            filterContainer.appendChild(filterInput);
            filterContainer.appendChild(clearBtn);
            popup.appendChild(filterContainer);

            // Container para a lista de manobras
            const maneuversList = document.createElement('div');
            maneuversList.style.display = 'flex';
            maneuversList.style.flexDirection = 'column';
            maneuversList.style.gap = '6px';
            maneuversList.style.marginTop = '2px';

            // Lista de manobras atualizada conforme Tormenta 20
            const maneuvers = [
                {
                    name: 'Investida',
                    description: 'Você avança até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o seu próximo turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Durante uma investida, você pode fazer a manobra atropelar como uma ação livre (mas não pode atropelar e atacar o mesmo alvo).',
                    icon: '⚡',
                    shortDesc: 'Ação completa: Ataque corpo a corpo com +2 no teste de ataque, mas sofra –2 na Defesa até o próximo turno.',
                    actionType: 'Ação Completa',
                    testType: 'Ataque corpo a corpo',
                    difficulty: 'Teste de Pontaria +2',
                    effects: ['+2 no teste de ataque', '-2 na Defesa até próximo turno', 'Pode fazer Atropelar como ação livre'],
                    restrictions: ['Não pode ser feita em terreno difícil', 'Mínimo 3m de movimento']
                },
                {
                    name: 'Atropelar',
                    description: 'Você pode tentar atropelar um oponente como uma ação de movimento. Faça um teste de Força (Atletismo) oposto ao teste de Força (Atletismo) do oponente. Se você vencer, empurra o oponente 1,5m para trás e pode continuar seu movimento. Se você perder, para no espaço do oponente.',
                    icon: '💨',
                    shortDesc: 'Ação de movimento: Teste de Atletismo para empurrar oponente 1,5m para trás.',
                    actionType: 'Ação de Movimento',
                    testType: 'Teste de Força (Atletismo)',
                    difficulty: 'Oposto ao teste de Força (Atletismo) do oponente',
                    effects: ['Empurra oponente 1,5m para trás', 'Pode continuar movimento'],
                    restrictions: ['Se perder, para no espaço do oponente']
                },
                {
                    name: 'Agarrar',
                    description: 'Você pode tentar agarrar um oponente como uma ação padrão. Faça um teste de Força (Luta) oposto ao teste de Força (Luta) ou Destreza (Acrobacia) do oponente. Se você vencer, o oponente fica agarrado.',
                    icon: '🤝',
                    shortDesc: 'Ação padrão: Teste de Luta para agarrar oponente.',
                    actionType: 'Ação Padrão',
                    testType: 'Teste de Força (Luta)',
                    difficulty: 'Oposto ao teste de Força (Luta) ou Destreza (Acrobacia) do oponente',
                    effects: ['Oponente fica agarrado'],
                    restrictions: ['Oponente pode usar Luta ou Acrobacia para resistir']
                },
                {
                    name: 'Desarmar',
                    description: 'Você pode tentar desarmar um oponente como uma ação padrão. Faça um teste de Força (Luta) oposto ao teste de Força (Luta) do oponente. Se você vencer, o oponente solta a arma.',
                    icon: '🗡️',
                    shortDesc: 'Ação padrão: Teste de Luta para fazer oponente soltar arma.',
                    actionType: 'Ação Padrão',
                    testType: 'Teste de Força (Luta)',
                    difficulty: 'Oposto ao teste de Força (Luta) do oponente',
                    effects: ['Oponente solta a arma'],
                    restrictions: ['Só funciona contra oponentes empunhando armas']
                },
                {
                    name: 'Derrubar',
                    description: 'Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta força que também o empurra um quadrado em uma direção a sua escolha. Se isso o jogar além de um parapeito ou precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar numa beirada.',
                    icon: '🔻',
                    shortDesc: 'Ação padrão: Deixe o alvo caído. Se vencer por 5+, empurre o alvo 1 quadrado.',
                    actionType: 'Ação Padrão',
                    testType: 'Teste de Força (Luta)',
                    difficulty: 'Oposto ao teste de Força (Luta) do oponente',
                    effects: ['Alvo fica caído', 'Se vencer por 5+, empurra 1 quadrado'],
                    restrictions: ['Queda não causa dano', 'Teste de Reflexos CD 20 se cair de altura']
                },
                {
                    name: 'Empurrar',
                    description: 'Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de movimento para avançar junto com a criatura (até o limite do seu deslocamento).',
                    icon: '➡️',
                    shortDesc: 'Ação padrão: Empurre o alvo 1,5m. Para cada 5 pontos de diferença, empurre mais 1,5m.',
                    actionType: 'Ação Padrão',
                    testType: 'Teste de Força (Luta)',
                    difficulty: 'Oposto ao teste de Força (Luta) do oponente',
                    effects: ['Empurra 1,5m', 'Cada 5 pontos de diferença = +1,5m', 'Pode avançar junto usando ação de movimento'],
                    restrictions: ['Limitado pelo deslocamento do personagem']
                },
                {
                    name: 'Bloquear',
                    description: 'Você pode tentar bloquear um ataque como uma reação. Faça um teste de Força (Luta) oposto ao teste de ataque do oponente. Se você vencer, o ataque é bloqueado e não causa dano.',
                    icon: '🛡️',
                    shortDesc: 'Reação: Teste de Luta para bloquear ataque.',
                    actionType: 'Reação',
                    testType: 'Teste de Força (Luta)',
                    difficulty: 'Oposto ao teste de ataque do oponente',
                    effects: ['Bloqueia o ataque', 'Não causa dano'],
                    restrictions: ['Só pode ser usada como reação', 'Precisa estar empunhando escudo ou arma']
                },
                {
                    name: 'Esquivar',
                    description: 'Você pode tentar esquivar de um ataque como uma reação. Faça um teste de Destreza (Acrobacia) oposto ao teste de ataque do oponente. Se você vencer, o ataque erra completamente.',
                    icon: '🔄',
                    shortDesc: 'Reação: Teste de Acrobacia para esquivar de ataque.',
                    actionType: 'Reação',
                    testType: 'Teste de Destreza (Acrobacia)',
                    difficulty: 'Oposto ao teste de ataque do oponente',
                    effects: ['Ataque erra completamente'],
                    restrictions: ['Só pode ser usada como reação', 'Precisa estar livre de movimento']
                },
                {
                    name: 'Contra-ataque',
                    description: 'Quando um oponente erra um ataque corpo a corpo contra você, você pode fazer um contra-ataque como uma reação. Faça um teste de ataque normal. Se acertar, causa dano normal.',
                    icon: '⚔️',
                    shortDesc: 'Reação: Ataque quando oponente erra ataque corpo a corpo.',
                    actionType: 'Reação',
                    testType: 'Teste de ataque normal',
                    difficulty: 'Teste de Pontaria normal',
                    effects: ['Ataque normal se acertar'],
                    restrictions: ['Só quando oponente erra ataque corpo a corpo', 'Precisa estar empunhando arma corpo a corpo']
                }
            ];

            maneuvers.forEach((maneuver, index) => {
                const btn = document.createElement('button');
                btn.id = `maneuver-btn-${index}`;
                btn.textContent = `${maneuver.icon} ${maneuver.name}`;
                btn.style.width = '100%';
                btn.style.background = '#23243a';
                btn.style.color = '#fff';
                btn.style.border = '1px solid #ff6e6e';
                btn.style.borderRadius = '6px';
                btn.style.padding = '8px 0';
                btn.style.fontSize = '15px';
                btn.style.fontWeight = 'bold';
                btn.style.cursor = 'pointer';
                btn.style.transition = 'all 0.2s';
                btn.style.position = 'relative';
                btn.style.display = 'block';

                // Tooltip container
                let tooltip = null;
                let tooltipTimeout = null;

                btn.onmouseover = () => {
                    btn.style.background = '#ff6e6e';
                    btn.style.color = '#23243a';

                    // Criar tooltip após um pequeno delay
                    tooltipTimeout = setTimeout(() => {
                        // Remover tooltip existente se houver
                        if (tooltip) tooltip.remove();

                        tooltip = document.createElement('div');
                        tooltip.style.position = 'fixed';
                        tooltip.style.background = 'rgba(20,20,30,0.98)';
                        tooltip.style.border = '2px solid #ff6e6e';
                        tooltip.style.borderRadius = '8px';
                        tooltip.style.padding = '12px';
                        tooltip.style.minWidth = '280px';
                        tooltip.style.maxWidth = '320px';
                        tooltip.style.zIndex = '10004';
                        tooltip.style.boxShadow = '0 4px 16px rgba(0,0,0,0.8)';
                        tooltip.style.pointerEvents = 'none';

                        // Calcular posição baseada na posição do botão
                        const btnRect = btn.getBoundingClientRect();
                        tooltip.style.left = (btnRect.right + 10) + 'px';
                        tooltip.style.top = btnRect.top + 'px';

                        // Conteúdo do tooltip
                        const tooltipContent = document.createElement('div');
                        tooltipContent.style.display = 'flex';
                        tooltipContent.style.flexDirection = 'column';
                        tooltipContent.style.gap = '8px';

                        // Título da manobra
                        const tooltipTitle = document.createElement('div');
                        tooltipTitle.textContent = maneuver.name;
                        tooltipTitle.style.color = '#ff6e6e';
                        tooltipTitle.style.fontSize = '16px';
                        tooltipTitle.style.fontWeight = 'bold';
                        tooltipTitle.style.marginBottom = '4px';
                        tooltipContent.appendChild(tooltipTitle);

                        // Tag de classificação
                        const classificationTag = document.createElement('div');
                        classificationTag.textContent = 'Manobra de Combate';
                        classificationTag.style.background = '#ff6e6e';
                        classificationTag.style.color = '#23243a';
                        classificationTag.style.fontSize = '11px';
                        classificationTag.style.fontWeight = 'bold';
                        classificationTag.style.borderRadius = '4px';
                        classificationTag.style.padding = '2px 8px';
                        classificationTag.style.display = 'inline-block';
                        classificationTag.style.width = 'fit-content';
                        tooltipContent.appendChild(classificationTag);

                        // Tag de tipo
                        const typeTag = document.createElement('div');
                        typeTag.textContent = 'Ação Completa';
                        typeTag.style.background = '#8B4513';
                        typeTag.style.color = '#fff';
                        typeTag.style.fontSize = '11px';
                        typeTag.style.fontWeight = 'bold';
                        typeTag.style.borderRadius = '4px';
                        typeTag.style.padding = '2px 8px';
                        typeTag.style.display = 'inline-block';
                        typeTag.style.width = 'fit-content';
                        typeTag.style.marginTop = '2px';
                        tooltipContent.appendChild(typeTag);

                        // Descrição resumida
                        const tooltipDesc = document.createElement('div');
                        tooltipDesc.textContent = maneuver.shortDesc;
                        tooltipDesc.style.color = '#ecf0f1';
                        tooltipDesc.style.fontSize = '13px';
                        tooltipDesc.style.lineHeight = '1.4';
                        tooltipDesc.style.marginTop = '6px';
                        tooltipContent.appendChild(tooltipDesc);

                        tooltip.appendChild(tooltipContent);
                        document.body.appendChild(tooltip);
                    }, 300); // Delay de 300ms antes de mostrar o tooltip
                };

                btn.onmouseout = () => {
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';

                    // Limpar timeout e remover tooltip
                    if (tooltipTimeout) {
                        clearTimeout(tooltipTimeout);
                        tooltipTimeout = null;
                    }
                    if (tooltip) {
                        tooltip.remove();
                        tooltip = null;
                    }
                };

                btn.onclick = (event) => {
                    // Verificar se CTRL está pressionado para mostrar detalhes
                    if (event.ctrlKey) {
                        event.preventDefault();
                        showManeuverDetails(maneuver);
                        return;
                    }

                    // Remover tooltip se estiver visível
                    if (tooltipTimeout) {
                        clearTimeout(tooltipTimeout);
                        tooltipTimeout = null;
                    }
                    if (tooltip) {
                        tooltip.remove();
                        tooltip = null;
                    }

                    // Executar manobra baseada no tipo
                    if (maneuver.name === 'Investida') {
                        // Executar investida com +2 no ataque
                        const ATTACK_EFFECTS_KEY = 'roll20-hotbar-attack-effects';
                        let savedAttackEffects = [];
                        try {
                            const saved = localStorage.getItem(ATTACK_EFFECTS_KEY);
                            if (saved) savedAttackEffects = JSON.parse(saved);
                        } catch (err) {
                            console.error('Erro ao carregar seleção:', err);
                            savedAttackEffects = [];
                        }
                        const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
                        const effects = getDynamicAttackEffects(charLevel);
                        let extraDamage = '';
                        let extraDescription = '';
                        let critThreshold = 18;
                        let attackBonus = 2; // +2 da investida
                        let marcaPresaActive = false;
                        let inimigoActive = false;
                        effects.forEach(effect => {
                            if (savedAttackEffects.includes(effect.value)) {
                                if (effect.dice) {
                                    extraDamage += `+${effect.dice}`;
                                }
                                if (effect.critMod) {
                                    critThreshold += effect.critMod;
                                }
                                if (effect.attackMod) {
                                    attackBonus += effect.attackMod;
                                }
                                extraDescription += '%NEWLINE% ' + effect.desc;
                                if (effect.value === 'marca_presa') marcaPresaActive = true;
                                if (effect.value === 'inimigo') inimigoActive = true;
                            }
                        });
                        if (inimigoActive && marcaPresaActive) {
                            if (critThreshold === 16) critThreshold = 14;
                        }
                        const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Investida}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Investida c/ Espada Longa** ${extraDescription}}}`;
                        executeAttackWithBloodEffect(macro);
                    } else if (maneuver.name === 'Atropelar') {
                        // Teste de Força (Atletismo) para atropelar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Atropelar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atletismototal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Agarrar') {
                        // Teste de Força (Luta) para agarrar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Agarrar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Desarmar') {
                        // Teste de Força (Luta) para desarmar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Desarmar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Derrubar') {
                        // Teste de Força (Luta) para derrubar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Derrubar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Empurrar') {
                        // Teste de Força (Luta) para empurrar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Empurrar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Bloquear') {
                        // Teste de Força (Luta) para bloquear
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Bloquear}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Esquivar') {
                        // Teste de Destreza (Acrobacia) para esquivar
                        const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Esquivar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|acrobaciatotal}]]]]}}`;
                        sendToChat(macro);
                    } else if (maneuver.name === 'Contra-ataque') {
                        // Teste de ataque normal para contra-ataque
                        const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Contra-ataque}}{{attackroll=[[1d20+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Contra-ataque**}}`;
                        executeAttackWithBloodEffect(macro);
                    }

                    // Fechar popup
                    popup.remove();
                    const overlay = document.getElementById('maneuvers-overlay');
                    if (overlay) overlay.remove();
                };

                maneuversList.appendChild(btn);
            });

            // Função de filtro
            const filterManeuvers = () => {
                const filterValue = filterInput.value.toLowerCase();
                const buttons = maneuversList.querySelectorAll('button');

                buttons.forEach((btn, index) => {
                    const maneuver = maneuvers[index];
                    const matchesFilter = maneuver.name.toLowerCase().includes(filterValue) ||
                        maneuver.shortDesc.toLowerCase().includes(filterValue);

                    if (matchesFilter) {
                        btn.style.display = 'block';
                    } else {
                        btn.style.display = 'none';
                    }
                });
            };

            // Atualiza a lista ao digitar
            filterInput.addEventListener('input', filterManeuvers);

            popup.appendChild(maneuversList);
            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'red');
        }

        // Função para mostrar detalhes completos da manobra
        function showManeuverDetails(maneuver) {
            // Remove popup de detalhes existente se houver
            const existingDetailsPopup = document.getElementById('maneuver-details-popup');
            if (existingDetailsPopup) existingDetailsPopup.remove();
            const existingDetailsOverlay = document.getElementById('maneuver-details-overlay');
            if (existingDetailsOverlay) existingDetailsOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'maneuver-details-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup de detalhes
            const popup = document.createElement('div');
            popup.id = 'maneuver-details-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(20,20,30,0.98)';
            popup.style.border = '2px solid #ff6e6e';
            popup.style.borderRadius = '12px';
            popup.style.padding = '20px';
            popup.style.zIndex = '10003';
            popup.style.maxWidth = '500px';
            popup.style.maxHeight = '80vh';
            popup.style.overflowY = 'auto';
            popup.style.boxShadow = '0 12px 40px rgba(0,0,0,0.8)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '20px';
            header.style.width = '100%';

            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('maneuver-details-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h2');
            title.innerHTML = `${maneuver.icon} ${maneuver.name}`;
            title.style.color = '#ff6e6e';
            title.style.margin = '0';
            title.style.fontSize = '22px';
            title.style.fontWeight = 'bold';

            header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Container de conteúdo
            const content = document.createElement('div');
            content.style.display = 'flex';
            content.style.flexDirection = 'column';
            content.style.gap = '16px';

            // Tags de classificação
            const tagsContainer = document.createElement('div');
            tagsContainer.style.display = 'flex';
            tagsContainer.style.gap = '8px';
            tagsContainer.style.flexWrap = 'wrap';

            // Tag de tipo de ação
            const actionTag = document.createElement('span');
            actionTag.textContent = maneuver.actionType;
            actionTag.style.background = '#8B4513';
            actionTag.style.color = '#fff';
            actionTag.style.fontSize = '12px';
            actionTag.style.fontWeight = 'bold';
            actionTag.style.borderRadius = '6px';
            actionTag.style.padding = '4px 10px';
            actionTag.style.display = 'inline-block';
            tagsContainer.appendChild(actionTag);

            // Tag de tipo de teste
            const testTag = document.createElement('span');
            testTag.textContent = maneuver.testType;
            testTag.style.background = '#4a90e2';
            testTag.style.color = '#fff';
            testTag.style.fontSize = '12px';
            testTag.style.fontWeight = 'bold';
            testTag.style.borderRadius = '6px';
            testTag.style.padding = '4px 10px';
            testTag.style.display = 'inline-block';
            tagsContainer.appendChild(testTag);

            content.appendChild(tagsContainer);

            // Seção de Dificuldade
            const difficultySection = document.createElement('div');
            difficultySection.style.background = 'rgba(255,110,110,0.1)';
            difficultySection.style.border = '1px solid #ff6e6e';
            difficultySection.style.borderRadius = '8px';
            difficultySection.style.padding = '12px';

            const difficultyTitle = document.createElement('h3');
            difficultyTitle.textContent = '🎯 Dificuldade';
            difficultyTitle.style.color = '#ff6e6e';
            difficultyTitle.style.margin = '0 0 8px 0';
            difficultyTitle.style.fontSize = '16px';
            difficultyTitle.style.fontWeight = 'bold';
            difficultySection.appendChild(difficultyTitle);

            const difficultyText = document.createElement('p');
            difficultyText.textContent = maneuver.difficulty;
            difficultyText.style.color = '#ecf0f1';
            difficultyText.style.margin = '0';
            difficultyText.style.fontSize = '14px';
            difficultyText.style.lineHeight = '1.4';
            difficultySection.appendChild(difficultyText);

            content.appendChild(difficultySection);

            // Seção de Efeitos
            const effectsSection = document.createElement('div');
            effectsSection.style.background = 'rgba(76,175,80,0.1)';
            effectsSection.style.border = '1px solid #4CAF50';
            effectsSection.style.borderRadius = '8px';
            effectsSection.style.padding = '12px';

            const effectsTitle = document.createElement('h3');
            effectsTitle.textContent = '✨ Efeitos';
            effectsTitle.style.color = '#4CAF50';
            effectsTitle.style.margin = '0 0 8px 0';
            effectsTitle.style.fontSize = '16px';
            effectsTitle.style.fontWeight = 'bold';
            effectsSection.appendChild(effectsTitle);

            const effectsList = document.createElement('ul');
            effectsList.style.margin = '0';
            effectsList.style.paddingLeft = '20px';
            effectsList.style.color = '#ecf0f1';
            effectsList.style.fontSize = '14px';
            effectsList.style.lineHeight = '1.4';

            maneuver.effects.forEach(effect => {
                const li = document.createElement('li');
                li.textContent = effect;
                li.style.marginBottom = '4px';
                effectsList.appendChild(li);
            });

            effectsSection.appendChild(effectsList);
            content.appendChild(effectsSection);

            // Seção de Restrições
            if (maneuver.restrictions && maneuver.restrictions.length > 0) {
                const restrictionsSection = document.createElement('div');
                restrictionsSection.style.background = 'rgba(255,152,0,0.1)';
                restrictionsSection.style.border = '1px solid #FF9800';
                restrictionsSection.style.borderRadius = '8px';
                restrictionsSection.style.padding = '12px';

                const restrictionsTitle = document.createElement('h3');
                restrictionsTitle.textContent = '⚠️ Restrições';
                restrictionsTitle.style.color = '#FF9800';
                restrictionsTitle.style.margin = '0 0 8px 0';
                restrictionsTitle.style.fontSize = '16px';
                restrictionsTitle.style.fontWeight = 'bold';
                restrictionsSection.appendChild(restrictionsTitle);

                const restrictionsList = document.createElement('ul');
                restrictionsList.style.margin = '0';
                restrictionsList.style.paddingLeft = '20px';
                restrictionsList.style.color = '#ecf0f1';
                restrictionsList.style.fontSize = '14px';
                restrictionsList.style.lineHeight = '1.4';

                maneuver.restrictions.forEach(restriction => {
                    const li = document.createElement('li');
                    li.textContent = restriction;
                    li.style.marginBottom = '4px';
                    restrictionsList.appendChild(li);
                });

                restrictionsSection.appendChild(restrictionsList);
                content.appendChild(restrictionsSection);
            }

            // Seção de Descrição Completa
            const descriptionSection = document.createElement('div');
            descriptionSection.style.background = 'rgba(156,39,176,0.1)';
            descriptionSection.style.border = '1px solid #9C27B0';
            descriptionSection.style.borderRadius = '8px';
            descriptionSection.style.padding = '12px';

            const descriptionTitle = document.createElement('h3');
            descriptionTitle.textContent = '📖 Descrição Completa';
            descriptionTitle.style.color = '#9C27B0';
            descriptionTitle.style.margin = '0 0 8px 0';
            descriptionTitle.style.fontSize = '16px';
            descriptionTitle.style.fontWeight = 'bold';
            descriptionSection.appendChild(descriptionTitle);

            const descriptionText = document.createElement('p');
            descriptionText.textContent = maneuver.description;
            descriptionText.style.color = '#ecf0f1';
            descriptionText.style.margin = '0';
            descriptionText.style.fontSize = '14px';
            descriptionText.style.lineHeight = '1.5';
            descriptionSection.appendChild(descriptionText);

            content.appendChild(descriptionSection);

            // Botão de Executar Manobra
            const executeBtn = document.createElement('button');
            executeBtn.textContent = `⚡ Executar ${maneuver.name}`;
            executeBtn.style.width = '100%';
            executeBtn.style.padding = '12px 0';
            executeBtn.style.background = '#ff6e6e';
            executeBtn.style.color = '#23243a';
            executeBtn.style.border = 'none';
            executeBtn.style.borderRadius = '8px';
            executeBtn.style.fontSize = '16px';
            executeBtn.style.fontWeight = 'bold';
            executeBtn.style.cursor = 'pointer';
            executeBtn.style.transition = 'all 0.2s';
            executeBtn.style.marginTop = '16px';

            executeBtn.onmouseover = () => {
                executeBtn.style.background = '#ff8e8e';
            };
            executeBtn.onmouseout = () => {
                executeBtn.style.background = '#ff6e6e';
            };

            executeBtn.onclick = () => {
                // Executar a manobra baseada no tipo
                if (maneuver.name === 'Investida') {
                    const ATTACK_EFFECTS_KEY = 'roll20-hotbar-attack-effects';
                    let savedAttackEffects = [];
                    try {
                        const saved = localStorage.getItem(ATTACK_EFFECTS_KEY);
                        if (saved) savedAttackEffects = JSON.parse(saved);
                    } catch (err) {
                        console.error('Erro ao carregar seleção:', err);
                        savedAttackEffects = [];
                    }
                    const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
                    const effects = getDynamicAttackEffects(charLevel);
                    let extraDamage = '';
                    let extraDescription = '';
                    let critThreshold = 18;
                    let attackBonus = 2; // +2 da investida
                    let marcaPresaActive = false;
                    let inimigoActive = false;
                    effects.forEach(effect => {
                        if (savedAttackEffects.includes(effect.value)) {
                            if (effect.dice) {
                                extraDamage += `+${effect.dice}`;
                            }
                            if (effect.critMod) {
                                critThreshold += effect.critMod;
                            }
                            if (effect.attackMod) {
                                attackBonus += effect.attackMod;
                            }
                            extraDescription += '%NEWLINE% ' + effect.desc;
                            if (effect.value === 'marca_presa') marcaPresaActive = true;
                            if (effect.value === 'inimigo') inimigoActive = true;
                        }
                    });
                    if (inimigoActive && marcaPresaActive) {
                        if (critThreshold === 16) critThreshold = 14;
                    }
                    const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Investida}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Investida c/ Espada Longa** ${extraDescription}}}`;
                    executeAttackWithBloodEffect(macro);
                } else if (maneuver.name === 'Atropelar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Atropelar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atletismototal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Agarrar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Agarrar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Desarmar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Desarmar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Derrubar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Derrubar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Empurrar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Empurrar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Bloquear') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Bloquear}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|lutatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Esquivar') {
                    const macro = `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Manobra Esquivar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|acrobaciatotal}]]]]}}`;
                    sendToChat(macro);
                } else if (maneuver.name === 'Contra-ataque') {
                    const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Contra-ataque}}{{attackroll=[[1d20+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Contra-ataque**}}`;
                    executeAttackWithBloodEffect(macro);
                }

                // Fechar popup de detalhes
                popup.remove();
                const overlay = document.getElementById('maneuver-details-overlay');
                if (overlay) overlay.remove();
            };

            content.appendChild(executeBtn);
            popup.appendChild(content);
            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'red');
        }
        // Função para abrir popup de efeitos extras no ataque
        function createAttackEffectsPopup() {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('attack-effects-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('attack-effects-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'attack-effects-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10000';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'attack-effects-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #6ec6ff';
            popup.style.borderRadius = '12px';
            popup.style.padding = '18px 20px 16px 20px';
            popup.style.zIndex = '10001';
            popup.style.maxWidth = '340px';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '10px';
            header.style.width = '100%'; const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('attack-effects-overlay');
                    if (overlay) overlay.remove();
                }
            });

            const title = document.createElement('h3');
            title.textContent = 'Efeitos no Ataque';
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '17px';
            title.style.fontWeight = 'bold'; header.appendChild(title);
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Obter nível do personagem
            const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
            // Efeitos dinâmicos
            const effects = getDynamicAttackEffects(charLevel);
            const checkboxes = {};
            // Chave para persistência
            const ATTACK_EFFECTS_KEY = 'roll20-hotbar-attack-effects';
            // Carregar seleção anterior
            let savedAttackEffects = [];
            try {
                const saved = localStorage.getItem(ATTACK_EFFECTS_KEY);
                if (saved) savedAttackEffects = JSON.parse(saved);
            } catch (e) {
                console.error('Erro ao carregar seleção:', e);
                savedAttackEffects = [];
            }
            effects.forEach(effect => {
                const container = document.createElement('label');
                container.style.display = 'flex';
                container.style.alignItems = 'center';
                container.style.gap = '8px';
                container.style.marginBottom = '8px';
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = effect.value;
                checkboxes[effect.value] = checkbox;
                // Restaurar seleção anterior
                if (savedAttackEffects.includes(effect.value)) {
                    checkbox.checked = true;
                }
                const span = document.createElement('span');
                span.textContent = effect.label;
                span.style.color = '#ecf0f1';
                span.style.fontSize = '15px';
                // Tag de origem
                const tag = document.createElement('span');
                tag.textContent = effect.origin ? ` [${effect.origin}]` : '';
                tag.style.color = '#6ec6ff';
                tag.style.fontSize = '12px';
                tag.style.marginLeft = '4px';
                span.appendChild(tag);
                container.appendChild(checkbox);
                container.appendChild(span);
                popup.appendChild(container);
            });

            // Botão de salvar seleção
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Salvar';
            saveBtn.style.width = '100%';
            saveBtn.style.padding = '12px 0';
            saveBtn.style.background = '#6ec6ff';
            saveBtn.style.color = '#23243a';
            saveBtn.style.border = 'none';
            saveBtn.style.borderRadius = '8px';
            saveBtn.style.fontSize = '16px';
            saveBtn.style.fontWeight = 'bold';
            saveBtn.style.cursor = 'pointer';
            saveBtn.style.transition = 'all 0.2s';
            saveBtn.style.marginTop = '10px';
            saveBtn.onmouseover = () => {
                saveBtn.style.background = '#5bb8ff';
            };
            saveBtn.onmouseout = () => {
                saveBtn.style.background = '#6ec6ff';
            };
            saveBtn.onclick = () => {
                // Salvar seleção atual
                const selected = Object.keys(checkboxes).filter(key => checkboxes[key].checked);
                try {
                    localStorage.setItem(ATTACK_EFFECTS_KEY, JSON.stringify(selected));
                } catch (e) {
                    console.error('Erro ao salvar seleção:', e);
                }

                // Verifica se algum efeito de comida foi selecionado para removê-lo após o ataque
                const assadoCarnesSelected = selected.includes('assado_carnes');
                const batataValkarianaSelected = selected.includes('batata_valkariana');
                const boloCenouraSelected = selected.includes('bolo_cenoura');
                const estrogonofeSelected = selected.includes('estrogonofe');
                const futomakiSelected = selected.includes('futomaki');
                const paoQueijoSelected = selected.includes('pao_queijo');
                const porcoAssadoSelected = selected.includes('porco_assado');
                const saladaElficaSelected = selected.includes('salada_elfica');
                const saladaImperialSelected = selected.includes('salada_imperial');
                const sopaCogumeloSelected = selected.includes('sopa_cogumelo');
                const pizzaSelected = selected.includes('pizza');

                // Verifica se algum efeito de bebida foi selecionado
                const babaDeTrollSelected = selected.includes('baba_de_troll');
                const hidromelUivanteSelected = selected.includes('hidromel_uivante');

                // Fecha popup
                popup.remove();
                const overlay = document.getElementById('attack-effects-overlay');
                if (overlay) overlay.remove();

                // Se algum efeito de comida ou bebida foi selecionado, executa o ataque e remove o efeito
                if (assadoCarnesSelected || batataValkarianaSelected || boloCenouraSelected ||
                    estrogonofeSelected || futomakiSelected || paoQueijoSelected ||
                    porcoAssadoSelected || saladaElficaSelected || saladaImperialSelected ||
                    sopaCogumeloSelected || pizzaSelected || babaDeTrollSelected || hidromelUivanteSelected) {
                    // Executa o ataque com os efeitos selecionados
                    const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
                    const effects = getDynamicAttackEffects(charLevel);
                    let extraDamage = '';
                    let extraDescription = '';
                    let critThreshold = 18;
                    let attackBonus = 0;
                    let marcaPresaActive = false;
                    let inimigoActive = false;

                    effects.forEach(effect => {
                        if (selected.includes(effect.value)) {
                            if (effect.dice) {
                                extraDamage += `+${effect.dice}`;
                            }
                            if (effect.critMod) {
                                critThreshold += effect.critMod;
                            }
                            if (effect.attackMod) {
                                if (typeof effect.attackMod === 'string' && effect.attackMod.includes('d')) {
                                    // Para efeitos como Batata Valkariana que adicionam dados
                                    attackBonus += `+${effect.attackMod}`;
                                } else {
                                    // Para efeitos que adicionam bônus fixos
                                    attackBonus += effect.attackMod;
                                }
                            }
                            extraDescription += '%NEWLINE% ' + effect.desc;
                            if (effect.value === 'marca_presa') marcaPresaActive = true;
                            if (effect.value === 'inimigo') inimigoActive = true;
                        }
                    });

                    if (inimigoActive && marcaPresaActive) {
                        if (critThreshold === 16) critThreshold = 14;
                    }

                    const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Espada Longa}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Ataque c/ Espada Longa**${extraDescription}}}`;

                    // Executa o ataque
                    executeAttackWithBloodEffect(macro);

                    // Remove apenas a Batata Valkariana automaticamente (consumível)
                    setTimeout(() => {
                        if (batataValkarianaSelected) {
                            // Remove o efeito da Batata Valkariana
                            toggleEffect('prato_batata_valkariana');

                            // Remove também da lista de efeitos de comida
                            let comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                            comidaEffects = comidaEffects.filter(e => e.effectKey !== 'prato_batata_valkariana');
                            localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));

                            showSuccessNotification('🍟 Efeito da Batata Valkariana consumido no ataque!');
                        }

                        // Para os outros pratos, apenas mostra notificação sem remover o efeito
                        if (assadoCarnesSelected) {
                            showSuccessNotification('🥩 Bônus do Assado de Carnes aplicado no ataque!');
                        }

                        if (boloCenouraSelected) {
                            showSuccessNotification('🥕 Bônus do Bolo de Cenoura aplicado no ataque!');
                        }

                        if (estrogonofeSelected) {
                            showSuccessNotification('🍝 Bônus do Estrogonofe aplicado no ataque!');
                        }

                        if (futomakiSelected) {
                            showSuccessNotification('🍣 Bônus do Futomaki aplicado no ataque!');
                        }

                        if (paoQueijoSelected) {
                            showSuccessNotification('🧀 Bônus do Pão de Queijo aplicado no ataque!');
                        }

                        if (porcoAssadoSelected) {
                            showSuccessNotification('🐷 Bônus do Porco Assado aplicado no ataque!');
                        }

                        if (saladaElficaSelected) {
                            showSuccessNotification('🥗 Bônus da Salada Elfica aplicado no ataque!');
                        }

                        if (saladaImperialSelected) {
                            showSuccessNotification('🥗 Bônus da Salada Imperial aplicado no ataque!');
                        }

                        if (sopaCogumeloSelected) {
                            showSuccessNotification('🍄 Bônus da Sopa de Cogumelo aplicado no ataque!');
                        }

                        if (pizzaSelected) {
                            showSuccessNotification('🍕 Bônus da Pizza aplicado no ataque!');
                        }

                        // Tratamento das bebidas
                        if (babaDeTrollSelected) {
                            // Remove o efeito da Baba de Troll (consumível)
                            toggleEffect('bebida_baba_de_troll');

                            // Remove também da lista de efeitos de bebida
                            let bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                            bebidaEffects = bebidaEffects.filter(e => e.effectKey !== 'bebida_baba_de_troll');
                            localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));

                            showSuccessNotification('🧃 Efeito da Baba de Troll consumido no ataque!');
                        }

                        if (hidromelUivanteSelected) {
                            showSuccessNotification('🔥 Bônus do Hidromel Uivante aplicado no ataque!');
                        }
                    }, 1000); // Delay para garantir que o ataque foi processado
                }
            };
            popup.appendChild(saveBtn);

            document.body.appendChild(popup);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(popup, 'blue');
        }

        // Botões de combate
        const attackButton = {
            label: 'Atacar', icon: '⚔️', onClick: (e) => {
                if (e && e.ctrlKey) {
                    createAttackEffectsPopup();
                } else {
                    // Novo: aplicar bônus persistidos
                    const ATTACK_EFFECTS_KEY = 'roll20-hotbar-attack-effects';
                    let savedAttackEffects = [];
                    try {
                        const saved = localStorage.getItem(ATTACK_EFFECTS_KEY);
                        if (saved) savedAttackEffects = JSON.parse(saved);
                    } catch (err) {
                        console.error('Erro ao carregar seleção:', err);
                        savedAttackEffects = [];
                    }
                    const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
                    const effects = getDynamicAttackEffects(charLevel);
                    let extraDamage = '';
                    let extraDescription = '';
                    let critThreshold = 18;
                    let attackBonus = 0;
                    let marcaPresaActive = false;
                    let inimigoActive = false;
                    effects.forEach(effect => {
                        if (savedAttackEffects.includes(effect.value)) {
                            if (effect.dice) {
                                extraDamage += `+${effect.dice}`;
                            }
                            if (effect.critMod) {
                                critThreshold += effect.critMod;
                            }
                            if (effect.attackMod) {
                                attackBonus += effect.attackMod;
                            }
                            extraDescription += '%NEWLINE% ' + effect.desc;
                            if (effect.value === 'marca_presa') marcaPresaActive = true;
                            if (effect.value === 'inimigo') inimigoActive = true;
                        }
                    });
                    if (inimigoActive && marcaPresaActive) {
                        if (critThreshold === 16) critThreshold = 14;
                    }
                    const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Espada Longa}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Ataque c/ Espada Longa**${extraDescription}}}`;
                    executeAttackWithBloodEffect(macro);
                }
            }
        };

        const maneuversButton = {
            label: 'Manobras', icon: '⚡', onClick: createManeuversPopup
        };

        // Outros botões
        const otherButtons = [
            { label: 'Perícias', icon: '🧠', onClick: createSkillsPopup },
            { label: 'Magias', icon: '🔮', onClick: createSpellsPopup },
            { label: 'Poderes', icon: '✨', onClick: createAbilitiesPopup },
            { label: 'Efeitos', icon: '🌀', onClick: createEffectsPopup },
            { label: 'Misc.', icon: '📦', onClick: createMiscPopup } // Novo botão Misc.
        ];

        // Criar botões de combate para seção de combate
        const attackBtn = createHotbarButton({
            icon: attackButton.icon,
            label: attackButton.label,
            onClick: attackButton.onClick,
            theme: 'red'
        });
        const maneuversBtn = createHotbarButton({
            icon: maneuversButton.icon,
            label: maneuversButton.label,
            onClick: maneuversButton.onClick,
            theme: 'red'
        });
        combatSection.appendChild(attackBtn);
        combatSection.appendChild(maneuversBtn);

        // Criar outros botões para seção de outros
        otherButtons.forEach(btnData => {
            const btn = createHotbarButton({
                icon: btnData.icon,
                label: btnData.label,
                onClick: btnData.onClick,
                theme: 'blue',
                dataLabel: btnData.label
            });
            otherButtonsSection.appendChild(btn);
        });

        // Adiciona as seções ao conteúdo principal
        mainContent.appendChild(characterSection);
        mainContent.appendChild(separator1);
        mainContent.appendChild(combatSection);
        mainContent.appendChild(separator2);
        mainContent.appendChild(otherButtonsSection);
        hotbar.appendChild(mainContent);
        // NOVA SEÇÃO: Indicadores Visuais Unificados (Pratos e Condições)
        const effectsIndicatorsSection = document.createElement('div');
        effectsIndicatorsSection.id = 'effects-indicators-section';
        effectsIndicatorsSection.style.display = 'none'; // Inicialmente oculto
        effectsIndicatorsSection.style.padding = '8px 24px 12px 24px';
        effectsIndicatorsSection.style.borderTop = '1px solid rgba(255,255,255,0.1)';
        effectsIndicatorsSection.style.width = '100%';
        effectsIndicatorsSection.style.boxSizing = 'border-box';
        // Container unificado para os ícones de pratos e condições
        const effectsIconsContainer = document.createElement('div');
        effectsIconsContainer.id = 'effects-icons-container';
        effectsIconsContainer.style.display = 'flex';
        effectsIconsContainer.style.gap = '6px';
        effectsIconsContainer.style.justifyContent = 'flex-start';
        effectsIconsContainer.style.alignItems = 'center';
        effectsIconsContainer.style.flexWrap = 'wrap';
        effectsIconsContainer.style.position = 'relative';

        effectsIndicatorsSection.appendChild(effectsIconsContainer);
        hotbar.appendChild(effectsIndicatorsSection);

        document.body.appendChild(hotbar);
        makeDraggable(hotbar, header);

        // Atualiza o indicador de versão
        updateVersionIndicator();

        // Atualiza o badge de efeitos após o hotbar estar no DOM
        updateEffectsBadge();
        // Atualiza os indicadores visuais unificados (pratos e condições)
        updateEffectsVisualIndicators();

        // NOVO: Inicia o pré-carregamento de imagens em background
        setTimeout(() => {
            preloadKnownImages().catch(error => {
                console.warn('Erro no pré-carregamento de imagens:', error);
            });
        }, 1000);
    }

    // Inicializa quando a página carregar
    waitForElement('#textchat-input').then(() => {
        setTimeout(() => {
            // Inicializa habilidades automáticas
            initializeAutomaticAbilities();

            // Adiciona estilos de scrollbar customizada
            createCustomScrollbarStyles();

            // NOVO: Adiciona CSS para animação do skeleton loader
            if (!document.getElementById('skeleton-loader-style')) {
                const style = document.createElement('style');
                style.id = 'skeleton-loader-style';
                style.textContent = `
                            @keyframes skeleton-loading { 
                                0% { background-position: -200px 0; } 
                                100% { background-position: calc(200px + 100%) 0; } 
                            }
                        `;
                document.head.appendChild(style);
            }

            createHotbar();
            // Adiciona listener de atalho para ocultar/mostrar a hotbar
            document.addEventListener('keydown', function (e) {
                // Ctrl + '
                if (e.ctrlKey && (e.key === "'" || e.key === '"')) {
                    const hotbar = document.getElementById('roll20-hotbar');
                    if (hotbar) {
                        if (hotbar.style.display === 'none') {
                            hotbar.style.display = '';
                        } else {
                            hotbar.style.display = 'none';
                        }
                    }
                    // Evita conflito com atalhos do navegador
                    e.preventDefault();
                    e.stopPropagation();
                }

                // NOVO: Ctrl + Space para quick search
                if (e.ctrlKey && e.code === 'Space') {
                    e.preventDefault();
                    e.stopPropagation();
                    createQuickSearchModal();
                }

                // NOVO: Ctrl + G para abrir grimório
                if (e.ctrlKey && e.key === 'g') {
                    e.preventDefault();
                    e.stopPropagation();
                    createGrimorioPopup();
                }
            });
        }, 1000);
    });
    // Função para criar modal da classe Caçador
    function createHunterClassModal() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('hunter-class-modal');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('hunter-class-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Definição do array de poderes de combate (combatPowers)
        const combatPowers = [
            {
                name: 'Acuidade com Arma',
                description: 'Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.',
                prereq: 'Des 1'
            },
            {
                name: 'Arma Secundária Grande',
                description: 'Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.',
                prereq: 'Estilo de Duas Armas'
            },
            {
                name: 'Arremesso Potente',
                description: 'Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.',
                prereq: 'For 1, Estilo de Arremesso'
            },
            {
                name: 'Arremesso Múltiplo',
                description: 'Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.',
                prereq: 'Des 1, Estilo de Arremesso'
            },
            {
                name: 'Ataque com Escudo',
                description: 'Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.',
                prereq: 'Estilo de Arma e Escudo'
            },
            {
                name: 'Ataque Pesado',
                description: 'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).',
                prereq: 'Estilo de Duas Mãos'
            },
            {
                name: 'Ataque Poderoso',
                description: 'Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.',
                prereq: 'For 1'
            },
            {
                name: 'Ataque Preciso',
                description: 'Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico com ela.',
                prereq: 'Estilo de Uma Arma'
            },
            {
                name: 'Bloqueio com Escudo',
                description: 'Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.',
                prereq: 'Estilo de Arma e Escudo'
            },
            {
                name: 'Carga de Cavalaria',
                description: 'Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.',
                prereq: 'Ginete'
            },
            {
                name: 'Combate Defensivo',
                description: 'Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa.',
                prereq: 'Int 1'
            },
            {
                name: 'Derrubar Aprimorado',
                description: 'Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.',
                prereq: 'Combate Defensivo'
            },
            {
                name: 'Desarmar Aprimorado',
                description: 'Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo "1" diretamente à sua frente, "2" à frente e à direita e assim por diante) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada).',
                prereq: 'Combate Defensivo'
            },
            {
                name: 'Disparo Preciso',
                description: 'Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.',
                prereq: 'Estilo de Disparo ou Estilo de Arremesso'
            },
            {
                name: 'Disparo Rápido',
                description: 'Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.',
                prereq: 'Des 1, Estilo de Disparo'
            },
            {
                name: 'Empunhadura Poderosa',
                description: 'Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, usar uma arma de uma categoria de tamanho maior impõe –5 nos testes de ataque).',
                prereq: 'For 3'
            },
            {
                name: 'Encouraçado',
                description: 'Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.',
                prereq: 'proficiência com armaduras pesadas'
            },
            {
                name: 'Esquiva',
                description: 'Você recebe +2 na Defesa e Reflexos.',
                prereq: 'Des 1'
            },
            {
                name: 'Estilo de Arma e Escudo',
                description: 'Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.',
                prereq: 'treinado em Luta, proficiência com escudos'
            },
            {
                name: 'Estilo de Arma Longa',
                description: 'Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.',
                prereq: 'For 1, treinado em Luta'
            },
            {
                name: 'Estilo de Arremesso',
                description: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.',
                prereq: 'treinado em Pontaria'
            },
            {
                name: 'Estilo de Disparo',
                description: 'Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.',
                prereq: 'treinado em Pontaria'
            },
            {
                name: 'Estilo de Duas Armas',
                description: 'Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.',
                prereq: 'Des 2, treinado em Luta'
            },
            {
                name: 'Estilo de Duas Mãos',
                description: 'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.',
                prereq: 'For 2, Treinado em Luta'
            },
            {
                name: 'Estilo de Uma Arma',
                description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).',
                prereq: 'treinado em Luta'
            },
            {
                name: 'Estilo Desarmado',
                description: 'Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).',
                prereq: 'treinado em Luta'
            },
            {
                name: 'Fanático',
                description: 'Seu deslocamento não é reduzido por usar armaduras pesadas.',
                prereq: '12º nível de personagem, Encouraçado'
            },
            {
                name: 'Finta Aprimorada',
                description: 'Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.',
                prereq: 'treinado em Enganação'
            },
            {
                name: 'Foco em Arma',
                description: 'Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.',
                prereq: 'proficiência com a arma'
            },
            {
                name: 'Ginete',
                description: 'Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.',
                prereq: 'treinado em Cavalgar'
            },
            {
                name: 'Inexpugnável',
                description: 'Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.',
                prereq: 'Encouraçado, 6º nível de personagem'
            },
            {
                name: 'Mira Apurada',
                description: 'Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.',
                prereq: 'Sab 1, Disparo Preciso'
            },
            {
                name: 'Piqueiro',
                description: 'Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra do mesmo tipo.',
                prereq: 'Estilo de Arma Longa'
            },
            {
                name: 'Presença Aterradora',
                description: 'Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.',
                prereq: 'treinado em Intimidação'
            },
            {
                name: 'Proficiência',
                description: 'Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.'
            },
            {
                name: 'Quebrar Aprimorado',
                description: 'Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.',
                prereq: 'Ataque Poderoso'
            },
            {
                name: 'Reflexos de Combate',
                description: 'Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.',
                prereq: 'Des 1'
            },
            {
                name: 'Saque Rápido',
                description: 'Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).',
                prereq: 'treinado em Iniciativa'
            },
            {
                name: 'Trespassar',
                description: 'Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.',
                prereq: 'Ataque Poderoso'
            },
            {
                name: 'Vitalidade',
                description: 'Você recebe +1 PV por nível de personagem e +2 em Fortitude.',
                prereq: 'Con 1'
            }
        ];

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'hunter-class-modal';
        popup.className = 'roll20-modal roll20-popup-green';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #8B4513';
        popup.style.borderRadius = '12px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '900px';
        popup.style.maxHeight = '85vh';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';
        popup.style.overflow = 'hidden'; // Remove overflow do container principal

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'hunter-class-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        // Evento só é definido depois do popup existir

        document.body.appendChild(overlay);
        // NÃO adicionar o popup aqui!
        // Adicione o popup ao DOM só no final, após todo o conteúdo ser adicionado

        // Listener para atualizar spells quando raça for alterada
        document.addEventListener('race-selection-changed', () => {
            // Atualiza a lista de spells se o popup estiver aberto
            const spellsPopup = document.getElementById('spells-popup');
            if (spellsPopup) {
                // Recria o popup de spells para atualizar a lista
                spellsPopup.remove();
                const overlay = document.getElementById('spells-overlay');
                if (overlay) overlay.remove();
                createSpellsPopup();
            }
        });

        // Cabeçalho fixo
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.width = '100%';
        header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
        header.style.padding = '15px 20px';
        header.style.background = 'rgba(30,30,40,0.98)';
        header.style.borderRadius = '12px 12px 0 0';
        header.style.flexShrink = '0'; // Impede que o header encolha
        header.style.minHeight = '60px'; // Altura mínima para garantir espaço
        header.style.boxSizing = 'border-box'; // Garante que padding não afete o tamanho

        const title = document.createElement('h2');
        title.innerHTML = '🏹 Caçador';
        title.style.color = '#8B4513';
        title.style.margin = '0';
        title.style.fontSize = '22px';
        title.style.fontWeight = 'bold';
        title.style.flex = '1'; // Ocupa o espaço disponível
        title.style.minWidth = '0'; // Permite que o texto seja cortado se necessário

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('hunter-class-overlay');
                if (overlay) overlay.remove();
            }
        }); header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Sistema de Abas fixo
        const tabContainer = document.createElement('div');
        tabContainer.style.padding = '15px 20px 0 20px';
        tabContainer.style.background = 'rgba(30,30,40,0.98)';
        tabContainer.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
        tabContainer.style.flexShrink = '0'; // Impede que as abas encolham

        const tabButtons = document.createElement('div');
        tabButtons.style.display = 'flex';
        tabButtons.style.gap = '5px';
        tabButtons.style.marginBottom = '15px';

        const tabContents = document.createElement('div');
        tabContents.style.minHeight = '400px';
        tabContents.style.overflowY = 'auto'; // Torna o conteúdo scrollable
        tabContents.style.padding = '20px';
        tabContents.style.flex = '1'; // Ocupa o espaço restante
        tabContents.style.maxHeight = 'calc(85vh - 180px)'; // Altura máxima ajustada para o novo header
        tabContents.style.boxSizing = 'border-box'; // Garante que o padding não afete o tamanho total

        // Aba 1: Características da Classe
        const tab1Btn = document.createElement('button');
        tab1Btn.textContent = 'Características da Classe';
        tab1Btn.style.padding = '10px 15px';
        tab1Btn.style.background = '#8B4513';
        tab1Btn.style.color = '#fff';
        tab1Btn.style.border = 'none';
        tab1Btn.style.borderRadius = '8px 8px 0 0';
        tab1Btn.style.fontSize = '14px';
        tab1Btn.style.fontWeight = 'bold';
        tab1Btn.style.cursor = 'pointer';
        tab1Btn.style.transition = 'all 0.2s';

        const tab1Content = document.createElement('div');
        tab1Content.id = 'tab1-content';
        tab1Content.style.display = 'block';

        // Conteúdo da Aba 1 (Características)
        const characteristics = [
            { label: 'Pontos de Vida', value: 'Um caçador começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.' },
            { label: 'Pontos de Mana', value: '4 PM por nível.' },
            { label: 'Perícias', value: 'Luta (For) ou Pontaria (Des), Sobrevivência (Sab), mais 6 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura (Sab), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Investigação (Int), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des).' },
            { label: 'Proficiências', value: 'Armas marciais e escudos.' }
        ];

        characteristics.forEach(char => {
            const charContainer = document.createElement('div');
            charContainer.style.marginBottom = '12px';
            charContainer.style.padding = '10px';
            charContainer.style.background = 'rgba(139, 69, 19, 0.1)';
            charContainer.style.borderRadius = '8px';
            charContainer.style.border = '1px solid rgba(139, 69, 19, 0.2)';

            const charLabel = document.createElement('div');
            charLabel.textContent = char.label;
            charLabel.style.color = '#8B4513';
            charLabel.style.fontSize = '14px';
            charLabel.style.fontWeight = 'bold';
            charLabel.style.marginBottom = '5px';

            const charValue = document.createElement('div');
            charValue.textContent = char.value;
            charValue.style.color = '#ecf0f1';
            charValue.style.fontSize = '13px';
            charValue.style.lineHeight = '1.4';

            charContainer.appendChild(charLabel);
            charContainer.appendChild(charValue);
            tab1Content.appendChild(charContainer);
        });

        // Aba 2: Habilidades da Classe
        const tab2Btn = document.createElement('button');
        tab2Btn.textContent = 'Habilidades da Classe';
        tab2Btn.style.padding = '10px 15px';
        tab2Btn.style.background = 'rgba(139, 69, 19, 0.3)';
        tab2Btn.style.color = '#ecf0f1';
        tab2Btn.style.border = 'none';
        tab2Btn.style.borderRadius = '8px 8px 0 0';
        tab2Btn.style.fontSize = '14px';
        tab2Btn.style.fontWeight = 'bold';
        tab2Btn.style.cursor = 'pointer';
        tab2Btn.style.transition = 'all 0.2s';

        const tab2Content = document.createElement('div');
        tab2Content.id = 'tab2-content';
        tab2Content.style.display = 'none';

        // Aba 3: Poderes de Combate
        const tab3Btn = document.createElement('button');
        tab3Btn.textContent = 'Poderes de Combate';
        tab3Btn.style.padding = '10px 15px';
        tab3Btn.style.background = 'rgba(139, 69, 19, 0.3)';
        tab3Btn.style.color = '#ecf0f1';
        tab3Btn.style.border = 'none';
        tab3Btn.style.borderRadius = '8px 8px 0 0';
        tab3Btn.style.fontSize = '14px';
        tab3Btn.style.fontWeight = 'bold';
        tab3Btn.style.cursor = 'pointer';
        tab3Btn.style.transition = 'all 0.2s';
        tab3Btn.style.cursor = 'pointer';

        const tab3Content = document.createElement('div');
        tab3Content.id = 'tab3-content';
        tab3Content.style.display = 'none';

        // Aba 4: Divindade
        const tab4Btn = document.createElement('button');
        tab4Btn.textContent = 'Divindade';
        tab4Btn.style.padding = '10px 15px';
        tab4Btn.style.background = 'rgba(139, 69, 19, 0.3)';
        tab4Btn.style.color = '#ecf0f1';
        tab4Btn.style.border = 'none';
        tab4Btn.style.borderRadius = '8px 8px 0 0';
        tab4Btn.style.fontSize = '14px';
        tab4Btn.style.fontWeight = 'bold';
        tab4Btn.style.cursor = 'pointer';
        tab4Btn.style.transition = 'all 0.2s';

        const tab4Content = document.createElement('div');
        tab4Content.id = 'tab4-content';
        tab4Content.style.display = 'none';

        // Aba 5: Raça
        const tab5Btn = document.createElement('button');
        tab5Btn.textContent = 'Raça';
        tab5Btn.style.padding = '10px 15px';
        tab5Btn.style.background = 'rgba(139, 69, 19, 0.3)';
        tab5Btn.style.color = '#ecf0f1';
        tab5Btn.style.border = 'none';
        tab5Btn.style.borderRadius = '8px 8px 0 0';
        tab5Btn.style.fontSize = '14px';
        tab5Btn.style.fontWeight = 'bold';
        tab5Btn.style.cursor = 'pointer';
        tab5Btn.style.transition = 'all 0.2s';

        const tab5Content = document.createElement('div');
        tab5Content.id = 'tab5-content';
        tab5Content.style.display = 'none';

        // === NOVO: Barra de pesquisa e filtros para Poderes de Combate ===
        const powerFilterContainer = document.createElement('div');
        powerFilterContainer.style.marginBottom = '15px';
        powerFilterContainer.style.padding = '12px';
        powerFilterContainer.style.background = 'rgba(139, 69, 19, 0.1)';
        powerFilterContainer.style.borderRadius = '8px';
        powerFilterContainer.style.border = '1px solid rgba(139, 69, 19, 0.2)';

        // Filtro de texto
        const powerTextFilterContainer = document.createElement('div');
        powerTextFilterContainer.style.position = 'relative';
        powerTextFilterContainer.style.marginBottom = '10px';

        const powerTextFilterInput = document.createElement('input');
        powerTextFilterInput.type = 'text';
        powerTextFilterInput.placeholder = 'Filtrar pratos...';
        powerTextFilterInput.style.width = '100%';
        powerTextFilterInput.style.padding = '10px 12px';
        powerTextFilterInput.style.borderRadius = '8px';
        powerTextFilterInput.style.border = '1px solid #ffb86c';
        powerTextFilterInput.style.background = '#23243a';
        powerTextFilterInput.style.color = '#fff';
        powerTextFilterInput.style.fontSize = '14px';
        powerTextFilterInput.style.outline = 'none';
        powerTextFilterInput.style.boxSizing = 'border-box';
        powerTextFilterInput.style.fontSize = '15px';

        const powerClearTextBtn = document.createElement('span');
        powerClearTextBtn.textContent = '×';
        powerClearTextBtn.style.position = 'absolute';
        powerClearTextBtn.style.right = '8px';
        powerClearTextBtn.style.top = '50%';
        powerClearTextBtn.style.transform = 'translateY(-50%)';
        powerClearTextBtn.style.cursor = 'pointer';
        powerClearTextBtn.style.color = '#ffb86c';
        powerClearTextBtn.style.fontSize = '18px';
        powerClearTextBtn.style.display = 'none';

        powerClearTextBtn.onclick = () => {
            powerTextFilterInput.value = '';
            powerTextFilterInput.dispatchEvent(new Event('input'));
            powerTextFilterInput.focus();
        };

        powerTextFilterInput.oninput = () => {
            if (powerTextFilterInput.value.length > 0) {
                powerClearTextBtn.style.display = 'block';
            } else {
                powerClearTextBtn.style.display = 'none';
            }
            updateCombatPowerList();
        };
        powerTextFilterContainer.appendChild(powerTextFilterInput);
        powerTextFilterContainer.appendChild(powerClearTextBtn);
        // Filtros de status
        const powerStatusFiltersContainer = document.createElement('div');
        powerStatusFiltersContainer.style.display = 'flex';
        powerStatusFiltersContainer.style.gap = '10px';
        powerStatusFiltersContainer.style.flexWrap = 'wrap';
        const showAllPowersBtn = document.createElement('button');
        showAllPowersBtn.textContent = 'Todas';
        showAllPowersBtn.style.padding = '6px 12px';
        showAllPowersBtn.style.background = '#8B4513';
        showAllPowersBtn.style.color = '#fff';
        showAllPowersBtn.style.border = 'none';
        showAllPowersBtn.style.borderRadius = '6px';
        showAllPowersBtn.style.fontSize = '12px';
        showAllPowersBtn.style.fontWeight = 'bold';
        showAllPowersBtn.style.cursor = 'pointer';
        showAllPowersBtn.style.transition = 'all 0.2s';

        const showLearnedPowersBtn = document.createElement('button');
        showLearnedPowersBtn.textContent = 'Aprendidos';
        showLearnedPowersBtn.style.padding = '6px 12px';
        showLearnedPowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
        showLearnedPowersBtn.style.color = '#ecf0f1';
        showLearnedPowersBtn.style.border = 'none';
        showLearnedPowersBtn.style.borderRadius = '6px';
        showLearnedPowersBtn.style.fontSize = '12px';
        showLearnedPowersBtn.style.fontWeight = 'bold';
        showLearnedPowersBtn.style.cursor = 'pointer';
        showLearnedPowersBtn.style.transition = 'all 0.2s';

        const showAvailablePowersBtn = document.createElement('button');
        showAvailablePowersBtn.textContent = 'Disponíveis';
        showAvailablePowersBtn.style.padding = '6px 12px';
        showAvailablePowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
        showAvailablePowersBtn.style.color = '#ecf0f1';
        showAvailablePowersBtn.style.border = 'none';
        showAvailablePowersBtn.style.borderRadius = '6px';
        showAvailablePowersBtn.style.fontSize = '12px';
        showAvailablePowersBtn.style.fontWeight = 'bold';
        showAvailablePowersBtn.style.cursor = 'pointer';
        showAvailablePowersBtn.style.transition = 'all 0.2s';

        powerStatusFiltersContainer.appendChild(showAllPowersBtn);
        powerStatusFiltersContainer.appendChild(showLearnedPowersBtn);
        powerStatusFiltersContainer.appendChild(showAvailablePowersBtn);

        powerFilterContainer.appendChild(powerTextFilterContainer);
        powerFilterContainer.appendChild(powerStatusFiltersContainer);
        tab3Content.appendChild(powerFilterContainer);

        // Container para a lista de poderes
        const combatPowersListContainer = document.createElement('div');
        combatPowersListContainer.id = 'combat-powers-list-container';
        tab3Content.appendChild(combatPowersListContainer);
        // Variáveis de filtro
        let currentPowerStatusFilter = 'all'; // 'all', 'learned', 'available'
        // Função para atualizar a lista de poderes de combate
        function updateCombatPowerList() {
            combatPowersListContainer.innerHTML = '';
            const filteredPowers = combatPowers.filter(power => {
                // Filtro de texto
                const matchesText = power.name.toLowerCase().includes(powerTextFilterInput.value.toLowerCase()) ||
                    power.description.toLowerCase().includes(powerTextFilterInput.value.toLowerCase());
                // Filtro de status
                let matchesStatus = true;
                if (currentPowerStatusFilter === 'learned') {
                    matchesStatus = hasDestinyPower(power.name);
                } else if (currentPowerStatusFilter === 'available') {
                    matchesStatus = !hasDestinyPower(power.name);
                }
                return matchesText && matchesStatus;
            });

            // Se não há poderes filtrados, mostra mensagem
            if (filteredPowers.length === 0) {
                const noResultsMessage = document.createElement('div');
                noResultsMessage.style.textAlign = 'center';
                noResultsMessage.style.padding = '20px';
                noResultsMessage.style.color = '#8B4513';
                noResultsMessage.style.fontSize = '14px';
                noResultsMessage.style.fontStyle = 'italic';
                noResultsMessage.style.background = 'rgba(139, 69, 19, 0.1)';
                noResultsMessage.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                noResultsMessage.style.borderRadius = '8px';
                noResultsMessage.style.marginTop = '10px';

                const filterText = powerTextFilterInput.value.trim();
                if (filterText) {
                    noResultsMessage.innerHTML = `
                            <div style="margin-bottom: 8px;">🔍</div>
                            <div>Nenhum poder encontrado para "<strong style="color: #8B4513;">${filterText}</strong>"</div>
                            <div style="margin-top: 8px; font-size: 12px;">Tente um termo diferente ou limpe o filtro</div>
                        `;
                } else {
                    noResultsMessage.innerHTML = `
                            <div style="margin-bottom: 8px;">⚔️</div>
                            <div>Nenhum poder disponível</div>
                            <div style="margin-top: 8px; font-size: 12px;">Selecione uma classe para obter poderes de combate</div>
                        `;
                }

                combatPowersListContainer.appendChild(noResultsMessage);
                return;
            }

            filteredPowers.forEach(power => {
                const isLearned = hasDestinyPower(power.name);
                // Define cores baseadas no status
                let backgroundColor, borderColor, textColor;
                if (isLearned) {
                    backgroundColor = 'rgba(76, 175, 80, 0.1)';
                    borderColor = 'rgba(76, 175, 80, 0.3)';
                    textColor = '#4CAF50';
                } else {
                    backgroundColor = 'rgba(139, 69, 19, 0.1)';
                    borderColor = 'rgba(139, 69, 19, 0.2)';
                    textColor = '#8B4513';
                }
                const powerContainer = document.createElement('div');
                powerContainer.style.marginBottom = '15px';
                powerContainer.style.padding = '12px';
                powerContainer.style.background = backgroundColor;
                powerContainer.style.borderRadius = '8px';
                powerContainer.style.border = `1px solid ${borderColor}`;
                powerContainer.style.transition = 'all 0.2s';

                const powerHeader = document.createElement('div');
                powerHeader.style.display = 'flex';
                powerHeader.style.justifyContent = 'space-between';
                powerHeader.style.alignItems = 'flex-start';
                powerHeader.style.marginBottom = '8px';
                powerHeader.style.flexWrap = 'wrap';
                powerHeader.style.gap = '10px';

                const powerNameContainer = document.createElement('div');
                powerNameContainer.style.display = 'flex';
                powerNameContainer.style.alignItems = 'center';
                powerNameContainer.style.gap = '8px';
                powerNameContainer.style.flex = '1';

                // Checkbox para marcar como aprendido
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = isLearned;
                checkbox.style.width = '16px';
                checkbox.style.height = '16px';
                checkbox.style.accentColor = '#8B4513';
                checkbox.style.cursor = 'pointer';
                checkbox.onchange = () => {
                    toggleLearnedDestinyPower(power.name);
                    updateCombatPowerList();
                };
                powerNameContainer.appendChild(checkbox);

                const powerName = document.createElement('div');
                powerName.textContent = power.name;
                powerName.style.color = textColor;
                powerName.style.fontSize = '15px';
                powerName.style.fontWeight = 'bold';
                powerNameContainer.appendChild(powerName);

                powerHeader.appendChild(powerNameContainer);

                const powerDescription = document.createElement('div');
                powerDescription.textContent = power.description;
                powerDescription.style.color = '#ecf0f1';
                powerDescription.style.fontSize = '13px';
                powerDescription.style.lineHeight = '1.4';
                powerDescription.style.marginBottom = '5px';

                powerContainer.appendChild(powerHeader);
                powerContainer.appendChild(powerDescription);

                if (power.prereq) {
                    const prereqDiv = document.createElement('div');
                    prereqDiv.textContent = `Pré-requisito: ${power.prereq}`;
                    prereqDiv.style.color = '#ffa726';
                    prereqDiv.style.fontSize = '11px';
                    prereqDiv.style.fontStyle = 'italic';
                    prereqDiv.style.fontWeight = 'bold';
                    powerContainer.appendChild(prereqDiv);
                }

                // Indicadores visuais
                const indicatorsContainer = document.createElement('div');
                indicatorsContainer.style.marginTop = '5px';
                indicatorsContainer.style.display = 'flex';
                indicatorsContainer.style.gap = '8px';
                indicatorsContainer.style.flexWrap = 'wrap';

                if (isLearned) {
                    const learnedIndicator = document.createElement('div');
                    learnedIndicator.innerHTML = '✓ Aprendido';
                    learnedIndicator.style.color = '#4CAF50';
                    learnedIndicator.style.fontSize = '11px';
                    learnedIndicator.style.fontWeight = 'bold';
                    learnedIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(learnedIndicator);
                } else {
                    const availableIndicator = document.createElement('div');
                    availableIndicator.innerHTML = '📋 Disponível';
                    availableIndicator.style.color = '#8B4513';
                    availableIndicator.style.fontSize = '11px';
                    availableIndicator.style.fontWeight = 'bold';
                    availableIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(availableIndicator);
                }

                if (indicatorsContainer.children.length > 0) {
                    powerContainer.appendChild(indicatorsContainer);
                }

                combatPowersListContainer.appendChild(powerContainer);
            });

            // Estatísticas
            const statsContainer = document.createElement('div');
            statsContainer.style.marginTop = '15px';
            statsContainer.style.padding = '10px';
            statsContainer.style.background = 'rgba(26,26,46,0.8)';
            statsContainer.style.borderRadius = '8px';
            statsContainer.style.border = '1px solid rgba(139, 69, 19, 0.3)';
            statsContainer.style.textAlign = 'center';

            const learnedPowersCount = getLearnedDestinyPowers().length;
            const totalPowers = combatPowers.length;
            const progress = Math.round((learnedPowersCount / totalPowers) * 100);

            const statsText = document.createElement('div');
            statsText.innerHTML = `<strong>Poderes Aprendidos:</strong> ${learnedPowersCount}/${totalPowers} (${progress}%)`;
            statsText.style.color = '#8B4513';
            statsText.style.fontSize = '14px';
            statsText.style.fontWeight = 'bold';

            statsContainer.appendChild(statsText);
            combatPowersListContainer.appendChild(statsContainer);
        }
        // Event listeners para os filtros
        showAllPowersBtn.onclick = () => {
            currentPowerStatusFilter = 'all';
            showAllPowersBtn.style.background = '#8B4513';
            showAllPowersBtn.style.color = '#fff';
            showLearnedPowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showLearnedPowersBtn.style.color = '#ecf0f1';
            showAvailablePowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAvailablePowersBtn.style.color = '#ecf0f1';
            updateCombatPowerList();
        };
        showLearnedPowersBtn.onclick = () => {
            currentPowerStatusFilter = 'learned';
            showAllPowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAllPowersBtn.style.color = '#ecf0f1';
            showLearnedPowersBtn.style.background = '#8B4513';
            showLearnedPowersBtn.style.color = '#fff';
            showAvailablePowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAvailablePowersBtn.style.color = '#ecf0f1';
            updateCombatPowerList();
        };
        showAvailablePowersBtn.onclick = () => {
            currentPowerStatusFilter = 'available';
            showAllPowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAllPowersBtn.style.color = '#ecf0f1';
            showLearnedPowersBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showLearnedPowersBtn.style.color = '#ecf0f1';
            showAvailablePowersBtn.style.background = '#8B4513';
            showAvailablePowersBtn.style.color = '#fff';
            updateCombatPowerList();
        };

        // Inicializa a lista de poderes de combate
        updateCombatPowerList();

        tab3Content.appendChild(combatPowersListContainer);

        // Conteúdo da Aba 4 (Divindade)
        const divinities = [
            {
                name: 'Azgher',
                title: 'Deus-Sol',
                shortDescription: 'Deus da luz e do calor, venerado por viajantes e combatentes das trevas.',
                description: 'Venerado pelos povos do Deserto da Perdição, o Deus-Sol é também cultuado por viajantes, mercadores honestos e todos aqueles que combatem as trevas. É um deus generoso; sua jornada diária derrama calor e conforto sobre Arton. Azgher é como um pai severo: responsável, provedor, mas que também exige respeito de seus filhos. Como um olho sempre vigilante nos céus, nada acontece à luz do dia sem que Azgher perceba.',
                beliefs: 'Praticar a gratidão pela proteção e generosidade do sol. Promover a honestidade, expor embustes e mentiras. Praticar a caridade e o altruísmo. Proteger os necessitados. Oferecer clemência, perdão e redenção. Combater o mal.',
                symbol: 'Um sol dourado',
                energy: 'Positiva',
                weapon: 'Cimitarra',
                devotees: 'Aggelus, qareen, arcanistas, bárbaros, caçadores, cavaleiros, guerreiros, nobres, paladinos',
                powers: [
                    {
                        name: 'Espada Solar',
                        description: 'Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhada causar +1d6 de dano por fogo até o fim da cena.'
                    },
                    {
                        name: 'Fulgor Solar',
                        description: 'Você recebe redução de frio e trevas 5. Além disso, quando é alvo de um ataque você pode gastar 1 PM para emitir um clarão solar que deixa o atacante ofuscado por uma rodada.'
                    },
                    {
                        name: 'Habitante do Deserto',
                        description: 'Você recebe redução de fogo 10 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno).'
                    },
                    {
                        name: 'Inimigo de Tenebra',
                        description: 'Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos. Quando você usa um efeito que gera luz, o alcance da iluminação dobra.'
                    }
                ],
                obligations: 'O devoto de Azgher deve manter o rosto sempre coberto (com uma máscara, capuz ou trapos). Sua face pode ser revelada apenas ao sumo-sacerdote ou em seu funeral. Devotos do Sol também devem doar para a igreja de Azgher 20% de qualquer tesouro obtido. Essa doação deve ser feita em ouro, seja na forma de moedas ou itens.'
            }
        ];

        // Lista resumida de divindades
        const divinitiesList = document.createElement('div');
        divinitiesList.style.display = 'flex';
        divinitiesList.style.flexDirection = 'column';
        divinitiesList.style.gap = '15px';

        divinities.forEach(divinity => {
            const isSelected = getSelectedDivinity() === divinity.name;

            const divinityContainer = document.createElement('div');
            divinityContainer.style.background = isSelected ? '#2d4a3e' : '#23243a';
            divinityContainer.style.border = `2px solid ${isSelected ? '#4caf50' : '#6ec6ff'}`;
            divinityContainer.style.borderRadius = '8px';
            divinityContainer.style.padding = '10px';
            divinityContainer.style.cursor = 'pointer';
            divinityContainer.style.transition = 'all 0.3s';
            divinityContainer.style.width = '100%';
            divinityContainer.style.boxSizing = 'border-box';

            divinityContainer.onmouseover = () => {
                if (!isSelected) {
                    divinityContainer.style.background = '#2a2b4a';
                }
            };

            divinityContainer.onmouseout = () => {
                if (!isSelected) {
                    divinityContainer.style.background = '#23243a';
                }
            };

            divinityContainer.onclick = () => {
                createDivinityDetailModal(divinity);
            };

            // Cabeçalho da divindade
            const divinityHeader = document.createElement('div');
            divinityHeader.style.display = 'flex';
            divinityHeader.style.justifyContent = 'space-between';
            divinityHeader.style.alignItems = 'center';
            divinityHeader.style.marginBottom = '8px';

            const divinityTitle = document.createElement('div');
            divinityTitle.innerHTML = `<strong style="color: ${isSelected ? '#4caf50' : '#6ec6ff'}; font-size: 15px;">${divinity.name}</strong><br><em style="color: #ecf0f1; font-size: 12px;">${divinity.title}</em>`;

            const statusIndicator = document.createElement('div');
            statusIndicator.textContent = isSelected ? '✓ Selecionada' : 'Clique para ver detalhes';
            statusIndicator.style.color = isSelected ? '#4caf50' : '#6ec6ff';
            statusIndicator.style.fontSize = '11px';
            statusIndicator.style.fontWeight = 'bold';
            statusIndicator.style.fontStyle = 'italic';

            divinityHeader.appendChild(divinityTitle);
            divinityHeader.appendChild(statusIndicator);
            divinityContainer.appendChild(divinityHeader);

            // Descrição resumida
            const descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = divinity.shortDescription;
            descriptionDiv.style.color = '#ecf0f1';
            descriptionDiv.style.fontSize = '11px';
            descriptionDiv.style.lineHeight = '1.4';
            divinityContainer.appendChild(descriptionDiv);

            divinitiesList.appendChild(divinityContainer);
        });

        tab4Content.appendChild(divinitiesList);

        // Conteúdo da Aba 5 (Raça)
        const races = [
            {
                name: 'Suraggel',
                title: 'Descendentes de Extraplanares Divinos',
                shortDescription: 'Seres com traços angelicais ou demoníacos, ligados às forças opostas da luz e trevas.',
                description: 'Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos. Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.',
                attributes: 'Sabedoria +2, Carisma +1 (Aggelus); Destreza +2, Inteligência +1 (Sulfure)',
                heritage: 'Herança Divina. Você é uma criatura do tipo espírito e recebe visão no escuro.',
                types: [
                    {
                        name: 'Aggelus',
                        title: 'Lado Celestial',
                        description: 'Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.',
                        power: 'Luz Sagrada'
                    },
                    {
                        name: 'Sulfure',
                        title: 'Lado Abissal',
                        description: 'Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.',
                        power: 'Sombras Profanas'
                    }
                ]
            }
        ];

        // Lista resumida de raças
        const racesList = document.createElement('div');
        racesList.style.display = 'flex';
        racesList.style.flexDirection = 'column';
        racesList.style.gap = '15px';

        races.forEach(race => {
            const isSelected = getSelectedRace() === race.name;
            const selectedType = getSelectedRaceType();

            const raceContainer = document.createElement('div');
            raceContainer.style.background = isSelected ? 'rgba(76, 175, 80, 0.1)' : 'rgba(139, 69, 19, 0.1)';
            raceContainer.style.border = isSelected ? '2px solid #4caf50' : '1px solid rgba(139, 69, 19, 0.3)';
            raceContainer.style.borderRadius = '8px';
            raceContainer.style.padding = '10px';
            raceContainer.style.cursor = 'pointer';
            raceContainer.style.transition = 'all 0.2s';
            raceContainer.style.width = '100%';
            raceContainer.style.boxSizing = 'border-box';

            raceContainer.onclick = () => {
                if (isSelected) {
                    // Se já está selecionada, abre o modal de detalhes
                    createRaceDetailModal(race);
                } else {
                    // Se não está selecionada, seleciona e abre o modal
                    saveSelectedRace(race.name);
                    createRaceDetailModal(race);
                    // Atualiza a lista para mostrar a seleção
                    setTimeout(() => {
                        const event = new Event('race-selection-changed');
                        document.dispatchEvent(event);
                    }, 100);
                }
            };

            raceContainer.onmouseover = () => {
                if (!isSelected) {
                    raceContainer.style.background = 'rgba(139, 69, 19, 0.2)';
                    raceContainer.style.border = '1px solid rgba(139, 69, 19, 0.5)';
                }
            };

            raceContainer.onmouseout = () => {
                if (!isSelected) {
                    raceContainer.style.background = 'rgba(139, 69, 19, 0.1)';
                    raceContainer.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                }
            };

            // Cabeçalho da raça
            const raceHeader = document.createElement('div');
            raceHeader.style.display = 'flex';
            raceHeader.style.justifyContent = 'space-between';
            raceHeader.style.alignItems = 'flex-start';
            raceHeader.style.marginBottom = '8px';

            const raceTitle = document.createElement('div');
            raceTitle.innerHTML = `<strong style="color: ${isSelected ? '#4caf50' : '#6ec6ff'}; font-size: 15px;">${race.name}</strong><br><em style="color: #ecf0f1; font-size: 12px;">${race.title}</em>`;

            const statusIndicator = document.createElement('div');
            if (isSelected) {
                if (selectedType) {
                    statusIndicator.innerHTML = `✓ Selecionada<br><small style="color: #4caf50;">${selectedType}</small>`;
                } else {
                    statusIndicator.innerHTML = `✓ Selecionada<br><small style="color: #ffa726;">Tipo não definido</small>`;
                }
            } else {
                statusIndicator.textContent = 'Clique para ver detalhes';
            }
            statusIndicator.style.color = isSelected ? '#4caf50' : '#6ec6ff';
            statusIndicator.style.fontSize = '11px';
            statusIndicator.style.fontWeight = 'bold';
            statusIndicator.style.fontStyle = 'italic';
            statusIndicator.style.textAlign = 'right';

            raceHeader.appendChild(raceTitle);
            raceHeader.appendChild(statusIndicator);
            raceContainer.appendChild(raceHeader);

            // Descrição resumida
            const descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = race.shortDescription;
            descriptionDiv.style.color = '#ecf0f1';
            descriptionDiv.style.fontSize = '11px';
            descriptionDiv.style.lineHeight = '1.4';
            raceContainer.appendChild(descriptionDiv);

            racesList.appendChild(raceContainer);
        });
        tab5Content.appendChild(racesList);
        // Função para criar modal detalhado da raça
        function createRaceDetailModal(race) {
            // Remove modal existente se houver
            const existingModal = document.getElementById('race-detail-modal');
            if (existingModal) existingModal.remove();
            const existingOverlay = document.getElementById('race-detail-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'race-detail-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                modal.remove();
            };
            document.body.appendChild(overlay);

            // Modal principal
            const modal = document.createElement('div');
            modal.id = 'race-detail-modal';
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.background = 'rgba(30,30,40,0.98)';
            modal.style.border = '2px solid #8B4513';
            modal.style.borderRadius = '12px';
            modal.style.padding = '20px';
            modal.style.zIndex = '10003';
            modal.style.maxWidth = '800px';
            modal.style.maxHeight = '85vh';
            modal.style.overflowY = 'auto';
            modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            modal.style.display = 'flex';
            modal.style.flexDirection = 'column';
            modal.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '20px';
            header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
            header.style.paddingBottom = '15px';

            const title = document.createElement('h2');
            title.innerHTML = `👥 ${race.name} - ${race.title}`;
            title.style.color = '#8B4513';
            title.style.margin = '0';
            title.style.fontSize = '24px';
            title.style.fontWeight = 'bold'; const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    modal.remove();
                    overlay.remove();
                }
            }); header.appendChild(title);
            header.appendChild(closeBtn.render());
            modal.appendChild(header);

            // Descrição
            const descriptionSection = document.createElement('div');
            descriptionSection.style.marginBottom = '20px';
            descriptionSection.style.padding = '15px';
            descriptionSection.style.background = 'rgba(139, 69, 19, 0.1)';
            descriptionSection.style.borderRadius = '8px';
            descriptionSection.style.border = '1px solid rgba(139, 69, 19, 0.2)';

            const descriptionTitle = document.createElement('h3');
            descriptionTitle.textContent = 'Descrição';
            descriptionTitle.style.color = '#8B4513';
            descriptionTitle.style.fontSize = '16px';
            descriptionTitle.style.fontWeight = 'bold';
            descriptionTitle.style.marginBottom = '10px';

            const descriptionText = document.createElement('div');
            descriptionText.textContent = race.description;
            descriptionText.style.color = '#ecf0f1';
            descriptionText.style.fontSize = '14px';
            descriptionText.style.lineHeight = '1.6';

            descriptionSection.appendChild(descriptionTitle);
            descriptionSection.appendChild(descriptionText);
            modal.appendChild(descriptionSection);

            // Informações básicas
            const infoSection = document.createElement('div');
            infoSection.style.marginBottom = '20px';

            const infoTitle = document.createElement('h3');
            infoTitle.textContent = 'Características da Raça';
            infoTitle.style.color = '#8B4513';
            infoTitle.style.fontSize = '16px';
            infoTitle.style.fontWeight = 'bold';
            infoTitle.style.marginBottom = '15px';
            infoTitle.style.borderBottom = '2px solid rgba(139, 69, 19, 0.3)';
            infoTitle.style.paddingBottom = '8px';
            infoSection.appendChild(infoTitle);

            const infoGrid = document.createElement('div');
            infoGrid.style.display = 'grid';
            infoGrid.style.gridTemplateColumns = '1fr 1fr';
            infoGrid.style.gap = '12px';

            const infoItems = [
                { label: 'Atributos', value: race.attributes },
                { label: 'Herança', value: race.heritage }
            ];

            infoItems.forEach(item => {
                const infoItem = document.createElement('div');
                infoItem.style.background = 'rgba(139, 69, 19, 0.1)';
                infoItem.style.padding = '12px';
                infoItem.style.borderRadius = '8px';
                infoItem.style.border = '1px solid rgba(139, 69, 19, 0.2)';

                const label = document.createElement('div');
                label.textContent = item.label;
                label.style.color = '#8B4513';
                label.style.fontSize = '12px';
                label.style.fontWeight = 'bold';
                label.style.marginBottom = '5px';

                const value = document.createElement('div');
                value.textContent = item.value;
                value.style.color = '#ecf0f1';
                value.style.fontSize = '13px';
                value.style.lineHeight = '1.4';

                infoItem.appendChild(label);
                infoItem.appendChild(value);
                infoGrid.appendChild(infoItem);
            });

            infoSection.appendChild(infoGrid);
            modal.appendChild(infoSection);

            // Tipos de raça
            const typesSection = document.createElement('div');
            typesSection.style.marginBottom = '20px';

            const typesTitle = document.createElement('h3');
            typesTitle.textContent = 'Tipos de Raça';
            typesTitle.style.color = '#8B4513';
            typesTitle.style.fontSize = '16px';
            typesTitle.style.fontWeight = 'bold';
            typesTitle.style.marginBottom = '15px';
            typesTitle.style.borderBottom = '2px solid rgba(139, 69, 19, 0.3)';
            typesTitle.style.paddingBottom = '8px';
            typesSection.appendChild(typesTitle);

            const typesContainer = document.createElement('div');
            typesContainer.style.display = 'flex';
            typesContainer.style.flexDirection = 'column';
            typesContainer.style.gap = '15px';

            // Se não há tipos de raça, mostra mensagem
            if (!race.types || race.types.length === 0) {
                const noTypesMessage = document.createElement('div');
                noTypesMessage.style.textAlign = 'center';
                noTypesMessage.style.padding = '20px';
                noTypesMessage.style.color = '#8B4513';
                noTypesMessage.style.fontSize = '14px';
                noTypesMessage.style.fontStyle = 'italic';
                noTypesMessage.style.background = 'rgba(139, 69, 19, 0.1)';
                noTypesMessage.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                noTypesMessage.style.borderRadius = '8px';
                noTypesMessage.style.marginTop = '10px';
                noTypesMessage.innerHTML = `
                    <div style="margin-bottom: 8px;">👥</div>
                    <div>Nenhum tipo de raça disponível</div>
                    <div style="margin-top: 8px; font-size: 12px;">Esta raça não possui subtipos especiais</div>
                `;
                typesContainer.appendChild(noTypesMessage);
            } else {
                race.types.forEach(type => {
                    const isSelected = getSelectedRace() === race.name && getSelectedRaceType() === type.name;

                    const typeContainer = document.createElement('div');
                    typeContainer.style.background = isSelected ? 'rgba(76, 175, 80, 0.1)' : 'rgba(139, 69, 19, 0.1)';
                    typeContainer.style.border = isSelected ? '2px solid #4caf50' : '1px solid rgba(139, 69, 19, 0.3)';
                    typeContainer.style.borderRadius = '10px';
                    typeContainer.style.padding = '15px';
                    typeContainer.style.cursor = 'pointer';
                    typeContainer.style.transition = 'all 0.2s';

                    typeContainer.onclick = () => {
                        saveSelectedRace(race.name);
                        saveSelectedRaceType(type.name);

                        // Atualiza a interface
                        modal.remove();
                        overlay.remove();

                        // Recria o modal para mostrar a seleção
                        setTimeout(() => {
                            createRaceDetailModal(race);
                        }, 100);
                    };

                    typeContainer.onmouseover = () => {
                        if (!isSelected) {
                            typeContainer.style.background = 'rgba(139, 69, 19, 0.2)';
                            typeContainer.style.border = '1px solid rgba(139, 69, 19, 0.5)';
                        }
                    };

                    typeContainer.onmouseout = () => {
                        if (!isSelected) {
                            typeContainer.style.background = 'rgba(139, 69, 19, 0.1)';
                            typeContainer.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                        }
                    };

                    // Cabeçalho do tipo
                    const typeHeader = document.createElement('div');
                    typeHeader.style.display = 'flex';
                    typeHeader.style.justifyContent = 'space-between';
                    typeHeader.style.alignItems = 'center';
                    typeHeader.style.marginBottom = '10px';

                    const typeTitle = document.createElement('div');
                    typeTitle.innerHTML = `<strong style="color: ${isSelected ? '#4caf50' : '#6ec6ff'}; font-size: 16px;">${type.name}</strong><br><em style="color: #ecf0f1; font-size: 12px;">${type.title}</em>`;

                    const typeStatus = document.createElement('div');
                    if (isSelected) {
                        typeStatus.innerHTML = '✓ Selecionado';
                        typeStatus.style.color = '#4caf50';
                    } else {
                        typeStatus.innerHTML = 'Clique para selecionar';
                        typeStatus.style.color = '#6ec6ff';
                    }
                    typeStatus.style.fontSize = '12px';
                    typeStatus.style.fontWeight = 'bold';
                    typeStatus.style.fontStyle = 'italic';

                    typeHeader.appendChild(typeTitle);
                    typeHeader.appendChild(typeStatus);
                    typeContainer.appendChild(typeHeader);

                    // Descrição do tipo
                    const typeDescription = document.createElement('div');
                    typeDescription.textContent = type.description;
                    typeDescription.style.color = '#ecf0f1';
                    typeDescription.style.fontSize = '13px';
                    typeDescription.style.lineHeight = '1.4';
                    typeContainer.appendChild(typeDescription);

                    typesContainer.appendChild(typeContainer);
                });
            }

            typesSection.appendChild(typesContainer);
            modal.appendChild(typesSection);

            // Botões de ação
            const actionButtons = document.createElement('div');
            actionButtons.style.display = 'flex';
            actionButtons.style.gap = '12px';
            actionButtons.style.justifyContent = 'center';
            actionButtons.style.marginTop = '20px';

            const isCurrentlySelected = getSelectedRace() === race.name;
            const buttonText = isCurrentlySelected ? 'Remover Raça' : 'Definir como Raça Atual';
            const buttonColor = isCurrentlySelected ? '#f44336' : '#4caf50';

            const actionButton = document.createElement('button');
            actionButton.textContent = buttonText;
            actionButton.style.padding = '12px 24px';
            actionButton.style.background = buttonColor;
            actionButton.style.color = '#fff';
            actionButton.style.border = 'none';
            actionButton.style.borderRadius = '8px';
            actionButton.style.fontSize = '14px';
            actionButton.style.fontWeight = 'bold';
            actionButton.style.cursor = 'pointer';
            actionButton.style.transition = 'all 0.2s';

            actionButton.onmouseover = () => {
                actionButton.style.opacity = '0.8';
            };

            actionButton.onmouseout = () => {
                actionButton.style.opacity = '1';
            };

            actionButton.onclick = () => {
                if (isCurrentlySelected) {
                    // Remove a raça atual
                    saveSelectedRace(null);
                    saveSelectedRaceType(null);
                } else {
                    // Define nova raça
                    saveSelectedRace(race.name);
                    // O tipo será definido quando o usuário clicar em um tipo específico
                }

                // Fecha o modal
                modal.remove();
                overlay.remove();

                // Atualiza a interface principal
                createHunterClassModal();
            };

            actionButtons.appendChild(actionButton);
            modal.appendChild(actionButtons);

            document.body.appendChild(modal);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(modal, 'brown');
        }
        // Função para criar modal detalhado da divindade
        function createDivinityDetailModal(divinity) {
            // Remove modal existente se houver
            const existingModal = document.getElementById('divinity-detail-modal');
            if (existingModal) existingModal.remove();
            const existingOverlay = document.getElementById('divinity-detail-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'divinity-detail-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                modal.remove();
            };
            document.body.appendChild(overlay);

            // Modal principal
            const modal = document.createElement('div');
            modal.id = 'divinity-detail-modal';
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.background = 'rgba(30,30,40,0.98)';
            modal.style.border = '2px solid #8B4513';
            modal.style.borderRadius = '12px';
            modal.style.padding = '20px';
            modal.style.zIndex = '10003';
            modal.style.maxWidth = '800px';
            modal.style.maxHeight = '85vh';
            modal.style.overflowY = 'auto';
            modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            modal.style.display = 'flex';
            modal.style.flexDirection = 'column';
            modal.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '20px';
            header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
            header.style.paddingBottom = '15px';

            const title = document.createElement('h2');
            title.innerHTML = `☀️ ${divinity.name} - ${divinity.title}`;
            title.style.color = '#8B4513';
            title.style.margin = '0';
            title.style.fontSize = '24px';
            title.style.fontWeight = 'bold'; const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    modal.remove();
                    overlay.remove();
                }
            }); header.appendChild(title);
            header.appendChild(closeBtn.render());
            modal.appendChild(header);

            // Descrição
            const descriptionSection = document.createElement('div');
            descriptionSection.style.marginBottom = '20px';
            descriptionSection.style.padding = '15px';
            descriptionSection.style.background = 'rgba(139, 69, 19, 0.1)';
            descriptionSection.style.borderRadius = '8px';
            descriptionSection.style.border = '1px solid rgba(139, 69, 19, 0.2)';

            const descriptionTitle = document.createElement('h3');
            descriptionTitle.textContent = 'Descrição';
            descriptionTitle.style.color = '#8B4513';
            descriptionTitle.style.fontSize = '16px';
            descriptionTitle.style.fontWeight = 'bold';
            descriptionTitle.style.marginBottom = '10px';

            const descriptionText = document.createElement('div');
            descriptionText.textContent = divinity.description;
            descriptionText.style.color = '#ecf0f1';
            descriptionText.style.fontSize = '14px';
            descriptionText.style.lineHeight = '1.6';

            descriptionSection.appendChild(descriptionTitle);
            descriptionSection.appendChild(descriptionText);
            modal.appendChild(descriptionSection);

            // Informações básicas
            const infoSection = document.createElement('div');
            infoSection.style.marginBottom = '20px';

            const infoTitle = document.createElement('h3');
            infoTitle.textContent = 'Informações da Divindade';
            infoTitle.style.color = '#8B4513';
            infoTitle.style.fontSize = '16px';
            infoTitle.style.fontWeight = 'bold';
            infoTitle.style.marginBottom = '15px';
            infoTitle.style.borderBottom = '2px solid rgba(139, 69, 19, 0.3)';
            infoTitle.style.paddingBottom = '8px';
            infoSection.appendChild(infoTitle);

            const infoGrid = document.createElement('div');
            infoGrid.style.display = 'grid';
            infoGrid.style.gridTemplateColumns = '1fr 1fr';
            infoGrid.style.gap = '12px';

            const infoItems = [
                { label: 'Crenças e Objetivos', value: divinity.beliefs },
                { label: 'Símbolo Sagrado', value: divinity.symbol },
                { label: 'Canalizar Energia', value: divinity.energy },
                { label: 'Arma Preferida', value: divinity.weapon },
                { label: 'Devotos', value: divinity.devotees }
            ];

            infoItems.forEach(item => {
                const infoItem = document.createElement('div');
                infoItem.style.background = 'rgba(139, 69, 19, 0.1)';
                infoItem.style.padding = '12px';
                infoItem.style.borderRadius = '8px';
                infoItem.style.border = '1px solid rgba(139, 69, 19, 0.2)';

                const label = document.createElement('div');
                label.textContent = item.label;
                label.style.color = '#8B4513';
                label.style.fontSize = '12px';
                label.style.fontWeight = 'bold';
                label.style.marginBottom = '5px';

                const value = document.createElement('div');
                value.textContent = item.value;
                value.style.color = '#ecf0f1';
                value.style.fontSize = '13px';
                value.style.lineHeight = '1.4';

                infoItem.appendChild(label);
                infoItem.appendChild(value);
                infoGrid.appendChild(infoItem);
            });

            infoSection.appendChild(infoGrid);
            modal.appendChild(infoSection);

            // Obrigações
            const obligationsSection = document.createElement('div');
            obligationsSection.style.marginBottom = '20px';
            obligationsSection.style.padding = '15px';
            obligationsSection.style.background = 'rgba(255, 167, 38, 0.1)';
            obligationsSection.style.borderRadius = '8px';
            obligationsSection.style.border = '1px solid rgba(255, 167, 38, 0.3)';

            const obligationsTitle = document.createElement('h3');
            obligationsTitle.textContent = 'Obrigações & Restrições';
            obligationsTitle.style.color = '#ffa726';
            obligationsTitle.style.fontSize = '16px';
            obligationsTitle.style.fontWeight = 'bold';
            obligationsTitle.style.marginBottom = '10px';

            const obligationsText = document.createElement('div');
            obligationsText.textContent = divinity.obligations;
            obligationsText.style.color = '#ecf0f1';
            obligationsText.style.fontSize = '14px';
            obligationsText.style.lineHeight = '1.6';

            obligationsSection.appendChild(obligationsTitle);
            obligationsSection.appendChild(obligationsText);
            modal.appendChild(obligationsSection);

            // Poderes Concedidos
            const powersSection = document.createElement('div');
            powersSection.style.marginBottom = '20px';

            const powersTitle = document.createElement('h3');
            powersTitle.textContent = 'Poderes Concedidos';
            powersTitle.style.color = '#8B4513';
            powersTitle.style.fontSize = '16px';
            powersTitle.style.fontWeight = 'bold';
            powersTitle.style.marginBottom = '15px';
            powersTitle.style.borderBottom = '2px solid rgba(139, 69, 19, 0.3)';
            powersTitle.style.paddingBottom = '8px';
            powersSection.appendChild(powersTitle);

            const powersList = document.createElement('div');
            powersList.style.display = 'flex';
            powersList.style.flexDirection = 'column';
            powersList.style.gap = '10px';

            let selectedPower = getSelectedDivinityPower();

            // Se não há poderes concedidos, mostra mensagem
            if (!divinity.powers || divinity.powers.length === 0) {
                const noPowersMessage = document.createElement('div');
                noPowersMessage.style.textAlign = 'center';
                noPowersMessage.style.padding = '20px';
                noPowersMessage.style.color = '#8B4513';
                noPowersMessage.style.fontSize = '14px';
                noPowersMessage.style.fontStyle = 'italic';
                noPowersMessage.style.background = 'rgba(139, 69, 19, 0.1)';
                noPowersMessage.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                noPowersMessage.style.borderRadius = '8px';
                noPowersMessage.style.marginTop = '10px';
                noPowersMessage.innerHTML = `
                    <div style="margin-bottom: 8px;">🙏</div>
                    <div>Nenhum poder concedido disponível</div>
                    <div style="margin-top: 8px; font-size: 12px;">Esta divindade não possui poderes especiais</div>
                `;
                powersList.appendChild(noPowersMessage);
            } else {
                divinity.powers.forEach(power => {
                    const isSelected = selectedPower === power.name;

                    const powerContainer = document.createElement('div');
                    powerContainer.style.background = isSelected ? '#2d4a3e' : '#23243a';
                    powerContainer.style.border = `1px solid ${isSelected ? '#4caf50' : '#6ec6ff'}`;
                    powerContainer.style.borderRadius = '8px';
                    powerContainer.style.padding = '12px';
                    powerContainer.style.cursor = 'pointer';
                    powerContainer.style.transition = 'all 0.2s';

                    powerContainer.onmouseover = () => {
                        if (!isSelected) {
                            powerContainer.style.background = '#2a2b4a';
                        }
                    };

                    powerContainer.onmouseout = () => {
                        if (!isSelected) {
                            powerContainer.style.background = '#23243a';
                        }
                    };

                    powerContainer.onclick = () => {
                        // Remove seleção anterior
                        const previousSelected = powersList.querySelector('.selected-power');
                        if (previousSelected) {
                            previousSelected.classList.remove('selected-power');
                            previousSelected.style.background = '#23243a';
                            previousSelected.style.border = '1px solid #6ec6ff';
                        }

                        // Seleciona novo poder
                        powerContainer.classList.add('selected-power');
                        powerContainer.style.background = '#2d4a3e';
                        powerContainer.style.border = '1px solid #4caf50';

                        selectedPower = power.name;
                    };

                    // Cabeçalho do poder
                    const powerHeader = document.createElement('div');
                    powerHeader.style.display = 'flex';
                    powerHeader.style.justifyContent = 'flex-start';
                    powerHeader.style.alignItems = 'center';
                    powerHeader.style.marginBottom = '6px';

                    const powerName = document.createElement('div');
                    powerName.textContent = power.name;
                    powerName.style.color = isSelected ? '#4caf50' : '#6ec6ff';
                    powerName.style.fontSize = '14px';
                    powerName.style.fontWeight = 'bold';

                    powerHeader.appendChild(powerName);
                    powerContainer.appendChild(powerHeader);

                    // Descrição do poder
                    const powerDesc = document.createElement('div');
                    powerDesc.textContent = power.description;
                    powerDesc.style.color = '#ecf0f1';
                    powerDesc.style.fontSize = '12px';
                    powerDesc.style.lineHeight = '1.4';
                    powerContainer.appendChild(powerDesc);

                    powersList.appendChild(powerContainer);
                });
            }

            powersSection.appendChild(powersList);
            modal.appendChild(powersSection);

            // Botões de ação
            const actionButtons = document.createElement('div');
            actionButtons.style.display = 'flex';
            actionButtons.style.gap = '12px';
            actionButtons.style.justifyContent = 'center';
            actionButtons.style.marginTop = '20px';

            const isCurrentlySelected = getSelectedDivinity() === divinity.name;
            const buttonText = isCurrentlySelected ? 'Remover Divindade' : 'Definir como Divindade Atual';
            const buttonColor = isCurrentlySelected ? '#f44336' : '#4caf50';

            const actionButton = document.createElement('button');
            actionButton.textContent = buttonText;
            actionButton.style.padding = '12px 24px';
            actionButton.style.background = buttonColor;
            actionButton.style.color = '#fff';
            actionButton.style.border = 'none';
            actionButton.style.borderRadius = '8px';
            actionButton.style.fontSize = '14px';
            actionButton.style.fontWeight = 'bold';
            actionButton.style.cursor = 'pointer';
            actionButton.style.transition = 'all 0.2s';

            actionButton.onmouseover = () => {
                actionButton.style.opacity = '0.8';
            };

            actionButton.onmouseout = () => {
                actionButton.style.opacity = '1';
            };

            actionButton.onclick = () => {
                if (isCurrentlySelected) {
                    // Remove a divindade atual
                    saveSelectedDivinity(null);
                    saveSelectedDivinityPower(null);
                } else {
                    // Define nova divindade
                    saveSelectedDivinity(divinity.name);
                    if (selectedPower) {
                        saveSelectedDivinityPower(selectedPower);
                    }
                }

                // Fecha o modal
                modal.remove();
                overlay.remove();

                // Atualiza a interface principal
                createHunterClassModal();
            };

            actionButtons.appendChild(actionButton);
            modal.appendChild(actionButtons);

            document.body.appendChild(modal);

            // Aplica scrollbars customizadas
            applyDirectScrollbarStyles(modal, 'brown');
        }

        // Conteúdo da Aba 2 (Habilidades)
        const abilities = [
            {
                name: 'Marca da Presa',
                description: 'Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).',
                level: '1º nível'
            },
            {
                name: 'Rastreador',
                description: 'Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência.',
                level: '1º nível'
            },
            {
                name: 'Ambidestria',
                description: 'Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.',
                level: 'Poder de Caçador',
                prereq: 'Des 2'
            },
            {
                name: 'Armadilha: Arataca',
                description: 'A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).',
                level: 'Poder de Caçador'
            },
            {
                name: 'Armadilha: Espinhos',
                description: 'A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Armadilha: Laço',
                description: 'A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).',
                level: 'Poder de Caçador'
            },
            {
                name: 'Armadilha: Rede',
                description: 'Todas as criaturas na área ficam enredadas e não podem sair da área. Uma vítima pode se libertar com uma ação padrão e um teste de Força ou Acrobacia (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil. Nesta armadilha você escolhe quantas criaturas precisam estar na área para ativá-la.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Armadilheiro',
                description: 'Você soma sua Sabedoria no dano e na CD de suas armadilhas (cumulativo).',
                level: 'Poder de Caçador',
                prereq: 'um poder de armadilha, 5º nível de caçador'
            },
            {
                name: 'Arqueiro',
                description: 'Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível).',
                level: 'Poder de Caçador',
                prereq: 'Sab 1'
            },
            {
                name: 'Aumento de Atributo',
                description: 'Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Bote',
                description: 'Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária.',
                level: 'Poder de Caçador',
                prereq: 'Ambidestria, 6º nível de caçador'
            },
            {
                name: 'Camuflagem',
                description: 'Você pode gastar 2 PM para se esconder mesmo sem camuflagem ou cobertura disponível.',
                level: 'Poder de Caçador',
                prereq: '6º nível de caçador'
            },
            {
                name: 'Chuva de Lâminas',
                description: 'Uma vez por rodada, quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária.',
                level: 'Poder de Caçador',
                prereq: 'Des 4, Ambidestria, 12º nível de caçador'
            },
            {
                name: 'Companheiro Animal',
                description: 'Você recebe um companheiro animal. Veja o quadro na página 62.',
                level: 'Poder de Caçador',
                prereq: 'Car 1, treinado em Adestramento'
            },
            {
                name: 'Elo com a Natureza',
                description: 'Você soma sua Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria).',
                level: 'Poder de Caçador',
                prereq: 'Sab 1, 3º nível de caçador'
            },
            {
                name: 'Emboscar',
                description: 'Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.',
                level: 'Poder de Caçador',
                prereq: 'treinado em Furtividade'
            },
            {
                name: 'Empatia Selvagem',
                description: 'Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja Diplomacia, na página 118).',
                level: 'Poder de Caçador'
            },
            {
                name: 'Escaramuça',
                description: 'Quando se move 6m ou mais, você recebe +2 na Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada.',
                level: 'Poder de Caçador',
                prereq: 'Des 2, 6º nível de caçador'
            },
            {
                name: 'Escaramuça Superior',
                description: 'Quando usa Escaramuça, seus bônus aumentam para +5 na Defesa e Reflexos e +1d12 em rolagens de dano.',
                level: 'Poder de Caçador',
                prereq: 'Escaramuça, 12º nível de caçador'
            },
            {
                name: 'Espreitar',
                description: 'Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Ervas Curativas',
                description: 'Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Ímpeto',
                description: 'Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Inimigo de (Criatura)',
                description: 'Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Olho do Falcão',
                description: 'Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Ponto Fraco',
                description: 'Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo.',
                level: 'Poder de Caçador'
            },
            {
                name: 'Explorador',
                description: 'No 3º nível, escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando estiver no tipo de terreno escolhido, você soma sua Sabedoria (mínimo +1) na Defesa e nos testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2.',
                level: '3º nível'
            },
            {
                name: 'Caminho do Explorador',
                description: 'No 5º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.',
                level: '5º nível'
            },
            {
                name: 'Mestre Caçador',
                description: 'No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a habilidade, pode pagar 5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM.',
                level: '20º nível'
            }
        ];
        // Barra de filtros e controles
        const filterContainer = document.createElement('div');
        filterContainer.style.marginBottom = '15px';
        filterContainer.style.padding = '12px';
        filterContainer.style.background = 'rgba(139, 69, 19, 0.1)';
        filterContainer.style.borderRadius = '8px';
        filterContainer.style.border = '1px solid rgba(139, 69, 19, 0.2)';
        // Filtro de texto
        const textFilterContainer = document.createElement('div');
        textFilterContainer.style.position = 'relative';
        textFilterContainer.style.marginBottom = '10px';
        const textFilterInput = document.createElement('input');
        textFilterInput.type = 'text';
        textFilterInput.placeholder = 'Filtrar poderes...';
        textFilterInput.style.width = '100%';
        textFilterInput.style.padding = '10px 28px 10px 12px';
        textFilterInput.style.borderRadius = '8px';
        textFilterInput.style.border = '1px solid #6ec6ff';
        textFilterInput.style.background = '#23243a';
        textFilterInput.style.color = '#fff';
        textFilterInput.style.fontSize = '14px';
        textFilterInput.style.outline = 'none';
        textFilterInput.style.boxSizing = 'border-box';

        const clearTextBtn = document.createElement('span');
        clearTextBtn.textContent = '×';
        clearTextBtn.style.position = 'absolute';
        clearTextBtn.style.right = '8px';
        clearTextBtn.style.top = '50%';
        clearTextBtn.style.transform = 'translateY(-50%)';
        clearTextBtn.style.cursor = 'pointer';
        clearTextBtn.style.color = '#6ec6ff';
        clearTextBtn.style.fontSize = '18px';
        clearTextBtn.style.display = 'none';

        clearTextBtn.onclick = () => {
            textFilterInput.value = '';
            textFilterInput.dispatchEvent(new Event('input'));
            textFilterInput.focus();
        };

        textFilterInput.oninput = () => {
            currentTextFilter = textFilterInput.value;
            if (textFilterInput.value.length > 0) {
                clearTextBtn.style.display = 'block';
            } else {
                clearTextBtn.style.display = 'none';
            }
            updateAbilityList();
        };

        textFilterContainer.appendChild(textFilterInput);
        textFilterContainer.appendChild(clearTextBtn);

        // Filtros de status
        const statusFiltersContainer = document.createElement('div');
        statusFiltersContainer.style.display = 'flex';
        statusFiltersContainer.style.gap = '10px';
        statusFiltersContainer.style.flexWrap = 'wrap';

        const showAllBtn = document.createElement('button');
        showAllBtn.textContent = 'Todas';
        showAllBtn.style.padding = '6px 12px';
        showAllBtn.style.background = '#8B4513';
        showAllBtn.style.color = '#fff';
        showAllBtn.style.border = 'none';
        showAllBtn.style.borderRadius = '6px';
        showAllBtn.style.fontSize = '12px';
        showAllBtn.style.fontWeight = 'bold';
        showAllBtn.style.cursor = 'pointer';
        showAllBtn.style.transition = 'all 0.2s';

        const showLearnedBtn = document.createElement('button');
        showLearnedBtn.textContent = 'Aprendidas';
        showLearnedBtn.style.padding = '6px 12px';
        showLearnedBtn.style.background = 'rgba(139, 69, 19, 0.3)';
        showLearnedBtn.style.color = '#ecf0f1';
        showLearnedBtn.style.border = 'none';
        showLearnedBtn.style.borderRadius = '6px';
        showLearnedBtn.style.fontSize = '12px';
        showLearnedBtn.style.fontWeight = 'bold';
        showLearnedBtn.style.cursor = 'pointer';
        showLearnedBtn.style.transition = 'all 0.2s';

        const showAvailableBtn = document.createElement('button');
        showAvailableBtn.textContent = 'Disponíveis';
        showAvailableBtn.style.padding = '6px 12px';
        showAvailableBtn.style.background = 'rgba(139, 69, 19, 0.3)';
        showAvailableBtn.style.color = '#ecf0f1';
        showAvailableBtn.style.border = 'none';
        showAvailableBtn.style.borderRadius = '6px';
        showAvailableBtn.style.fontSize = '12px';
        showAvailableBtn.style.fontWeight = 'bold';
        showAvailableBtn.style.cursor = 'pointer';
        showAvailableBtn.style.transition = 'all 0.2s';

        statusFiltersContainer.appendChild(showAllBtn);
        statusFiltersContainer.appendChild(showLearnedBtn);
        statusFiltersContainer.appendChild(showAvailableBtn);
        filterContainer.appendChild(textFilterContainer);
        filterContainer.appendChild(statusFiltersContainer);
        tab2Content.appendChild(filterContainer);
        // Container para a lista de habilidades
        const abilitiesListContainer = document.createElement('div');
        abilitiesListContainer.id = 'abilities-list-container';
        tab2Content.appendChild(abilitiesListContainer);
        // Variáveis de filtro
        let currentTextFilter = '';
        let currentStatusFilter = 'all'; // 'all', 'learned', 'available'
        // Função para atualizar a lista de habilidades
        function updateAbilityList() {
            const learnedAbilities = getLearnedAbilities();
            const automaticAbilities = getAutomaticAbilities();
            const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
            const specialAbilities = getSpecialAbilitiesByLevel(charLevel);

            abilitiesListContainer.innerHTML = '';

            const filteredAbilities = abilities.filter(ability => {
                // Filtro de texto
                const matchesText = ability.name.toLowerCase().includes(currentTextFilter.toLowerCase()) ||
                    ability.description.toLowerCase().includes(currentTextFilter.toLowerCase());

                // Filtro de status
                let matchesStatus = true;
                if (currentStatusFilter === 'learned') {
                    matchesStatus = hasAbility(ability.name);
                } else if (currentStatusFilter === 'available') {
                    matchesStatus = !hasAbility(ability.name) && isAbilityAvailableAtLevel(ability.name, charLevel);
                }

                return matchesText && matchesStatus;
            });

            // Se não há habilidades filtradas, mostra mensagem
            if (filteredAbilities.length === 0) {
                const noResultsMessage = document.createElement('div');
                noResultsMessage.style.textAlign = 'center';
                noResultsMessage.style.padding = '20px';
                noResultsMessage.style.color = '#8B4513';
                noResultsMessage.style.fontSize = '14px';
                noResultsMessage.style.fontStyle = 'italic';
                noResultsMessage.style.background = 'rgba(139, 69, 19, 0.1)';
                noResultsMessage.style.border = '1px solid rgba(139, 69, 19, 0.3)';
                noResultsMessage.style.borderRadius = '8px';
                noResultsMessage.style.marginTop = '10px';

                if (currentTextFilter) {
                    const noResultsMessage = createNoResultsMessage(currentTextFilter, 'habilidade', 'brown');
                    abilitiesListContainer.appendChild(noResultsMessage);
                    return;
                } else {
                    noResultsMessage.innerHTML = `
                            <div style="margin-bottom: 8px;">🏹</div>
                            <div>Nenhuma habilidade disponível</div>
                            <div style="margin-top: 8px; font-size: 12px;">Selecione uma classe para obter habilidades especiais</div>
                        `;
                }

                abilitiesListContainer.appendChild(noResultsMessage);
                return;
            }

            filteredAbilities.forEach(ability => {
                const abilityContainer = document.createElement('div');
                const isAutomatic = automaticAbilities.includes(ability.name);
                const isSpecial = specialAbilities.includes(ability.name);
                const isLearned = hasAbility(ability.name);
                const isAvailable = isAbilityAvailableAtLevel(ability.name, charLevel);

                // Define cores baseadas no tipo de habilidade
                let backgroundColor, borderColor, textColor;

                if (isAutomatic) {
                    backgroundColor = 'rgba(76, 175, 80, 0.15)';
                    borderColor = 'rgba(76, 175, 80, 0.4)';
                    textColor = '#4CAF50';
                } else if (isSpecial) {
                    backgroundColor = 'rgba(156, 39, 176, 0.15)';
                    borderColor = 'rgba(156, 39, 176, 0.4)';
                    textColor = '#9C27B0';
                } else if (isLearned) {
                    backgroundColor = 'rgba(76, 175, 80, 0.1)';
                    borderColor = 'rgba(76, 175, 80, 0.3)';
                    textColor = '#4CAF50';
                } else {
                    backgroundColor = 'rgba(139, 69, 19, 0.1)';
                    borderColor = 'rgba(139, 69, 19, 0.2)';
                    textColor = '#8B4513';
                }

                abilityContainer.style.marginBottom = '15px';
                abilityContainer.style.padding = '12px';
                abilityContainer.style.background = backgroundColor;
                abilityContainer.style.borderRadius = '8px';
                abilityContainer.style.border = `1px solid ${borderColor}`;
                abilityContainer.style.transition = 'all 0.2s';

                const abilityHeader = document.createElement('div');
                abilityHeader.style.display = 'flex';
                abilityHeader.style.justifyContent = 'space-between';
                abilityHeader.style.alignItems = 'flex-start';
                abilityHeader.style.marginBottom = '8px';
                abilityHeader.style.flexWrap = 'wrap';
                abilityHeader.style.gap = '10px';

                const abilityNameContainer = document.createElement('div');
                abilityNameContainer.style.display = 'flex';
                abilityNameContainer.style.alignItems = 'center';
                abilityNameContainer.style.gap = '8px';
                abilityNameContainer.style.flex = '1';

                // Checkbox para habilidades aprendidas (apenas para poderes de caçador)
                if (!isAutomatic && !isSpecial) {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = isLearned;
                    checkbox.style.width = '16px';
                    checkbox.style.height = '16px';
                    checkbox.style.accentColor = '#8B4513';
                    checkbox.style.cursor = 'pointer';

                    if (ability.name === 'Companheiro Animal') {
                        checkbox.onchange = () => {
                            toggleLearnedAbility(ability.name);
                            if (checkbox.checked) {
                                // Cria modal para selecionar tipo do companheiro animal
                                const existingModal = document.getElementById('animal-companion-modal');
                                if (existingModal) existingModal.remove();
                                const existingOverlay = document.getElementById('animal-companion-overlay');
                                if (existingOverlay) existingOverlay.remove();

                                // Overlay
                                const overlay = document.createElement('div');
                                overlay.id = 'animal-companion-overlay';
                                overlay.style.position = 'fixed';
                                overlay.style.top = '0';
                                overlay.style.left = '0';
                                overlay.style.width = '100%';
                                overlay.style.height = '100%';
                                overlay.style.background = 'rgba(0,0,0,0.5)';
                                overlay.style.zIndex = '10000';
                                overlay.onclick = () => {
                                    overlay.remove();
                                    modal.remove();
                                };
                                document.body.appendChild(overlay);

                                // Modal
                                const modal = document.createElement('div');
                                modal.id = 'animal-companion-modal';
                                modal.style.position = 'fixed';
                                modal.style.top = '50%';
                                modal.style.left = '50%';
                                modal.style.transform = 'translate(-50%, -50%)';
                                modal.style.background = 'rgba(30,30,40,0.98)';
                                modal.style.border = '2px solid #6ec6ff';
                                modal.style.borderRadius = '12px';
                                modal.style.padding = '24px 28px';
                                modal.style.zIndex = '10001';
                                modal.style.maxWidth = '340px';
                                modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
                                modal.style.display = 'flex';
                                modal.style.flexDirection = 'column';
                                modal.style.alignItems = 'stretch';
                                // Título
                                const title = document.createElement('h3');
                                title.textContent = 'Tipo de Companheiro Animal';
                                title.style.color = '#ecf0f1';
                                title.style.margin = '0 0 18px 0';
                                title.style.fontSize = '17px';
                                title.style.fontWeight = 'bold';
                                modal.appendChild(title);
                                // Opção única: Assassino
                                const option = document.createElement('button');
                                option.textContent = 'Assassino';
                                option.style.background = '#6ec6ff';
                                option.style.color = '#23243a';
                                option.style.border = 'none';
                                option.style.borderRadius = '8px';
                                option.style.fontSize = '15px';
                                option.style.fontWeight = 'bold';
                                option.style.padding = '12px 0';
                                option.style.cursor = 'pointer';
                                option.style.marginBottom = '10px';
                                option.onmouseover = () => {
                                    option.style.background = '#5bb8ff';
                                };
                                option.onmouseout = () => {
                                    option.style.background = '#6ec6ff';
                                };
                                option.onclick = () => {
                                    setAnimalCompanionType('assassino');
                                    overlay.remove();
                                    modal.remove();
                                    updateAbilityList();
                                };
                                modal.appendChild(option);
                                // Fechar usando componente
                                const closeBtn = window.Roll20Components.createCloseButton({
                                    customStyles: 'position: absolute; top: 8px; right: 12px;',
                                    onClick: () => {
                                        overlay.remove();
                                        modal.remove();
                                    }
                                });
                                modal.appendChild(closeBtn.render());
                                document.body.appendChild(modal);
                            } else {
                                setAnimalCompanionType('');
                            }
                            updateAbilityList();
                        };
                    } else {
                        checkbox.onchange = () => {
                            toggleLearnedAbility(ability.name);
                            updateAbilityList(); // Atualiza a lista para refletir as mudanças
                        };
                    }

                    abilityNameContainer.appendChild(checkbox);
                }

                const abilityName = document.createElement('div');
                abilityName.textContent = ability.name;
                abilityName.style.color = textColor;
                abilityName.style.fontSize = '15px';
                abilityName.style.fontWeight = 'bold';

                // CHIP DO COMPANHEIRO ANIMAL
                if (ability.name === 'Companheiro Animal' && isLearned && getAnimalCompanionType() === 'assassino') {
                    const chip = document.createElement('span');
                    chip.textContent = 'Assassino';
                    chip.style.background = '#6ec6ff';
                    chip.style.color = '#23243a';
                    chip.style.borderRadius = '8px';
                    chip.style.padding = '2px 10px';
                    chip.style.fontSize = '12px';
                    chip.style.fontWeight = 'bold';
                    chip.style.marginLeft = '8px';
                    chip.style.display = 'inline-block';
                    chip.style.letterSpacing = '0.5px';
                    chip.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
                    abilityName.appendChild(chip);
                }

                abilityNameContainer.appendChild(abilityName);

                const abilityLevel = document.createElement('div');
                abilityLevel.textContent = ability.level;
                abilityLevel.style.color = '#6ec6ff';
                abilityLevel.style.fontSize = '12px';
                abilityLevel.style.fontWeight = 'bold';
                abilityLevel.style.fontStyle = 'italic';

                abilityHeader.appendChild(abilityNameContainer);
                abilityHeader.appendChild(abilityLevel);

                const abilityDescription = document.createElement('div');
                abilityDescription.textContent = ability.description;
                abilityDescription.style.color = '#ecf0f1';
                abilityDescription.style.fontSize = '13px';
                abilityDescription.style.lineHeight = '1.4';
                abilityDescription.style.marginBottom = '5px';

                abilityContainer.appendChild(abilityHeader);
                abilityContainer.appendChild(abilityDescription);

                if (ability.prereq) {
                    const prereqDiv = document.createElement('div');
                    prereqDiv.textContent = `Pré-requisito: ${ability.prereq}`;
                    prereqDiv.style.color = '#ffa726';
                    prereqDiv.style.fontSize = '11px';
                    prereqDiv.style.fontStyle = 'italic';
                    prereqDiv.style.fontWeight = 'bold';
                    abilityContainer.appendChild(prereqDiv);
                }

                // Indicadores visuais
                const indicatorsContainer = document.createElement('div');
                indicatorsContainer.style.marginTop = '5px';
                indicatorsContainer.style.display = 'flex';
                indicatorsContainer.style.gap = '8px';
                indicatorsContainer.style.flexWrap = 'wrap';

                if (isAutomatic) {
                    const automaticIndicator = document.createElement('div');
                    automaticIndicator.innerHTML = '🔄 Automática';
                    automaticIndicator.style.color = '#4CAF50';
                    automaticIndicator.style.fontSize = '11px';
                    automaticIndicator.style.fontWeight = 'bold';
                    automaticIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(automaticIndicator);
                } else if (isSpecial) {
                    const specialIndicator = document.createElement('div');
                    specialIndicator.innerHTML = '⭐ Especial';
                    specialIndicator.style.color = '#9C27B0';
                    specialIndicator.style.fontSize = '11px';
                    specialIndicator.style.fontWeight = 'bold';
                    specialIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(specialIndicator);
                } else if (isLearned) {
                    const learnedIndicator = document.createElement('div');
                    learnedIndicator.innerHTML = '✓ Aprendida';
                    learnedIndicator.style.color = '#4CAF50';
                    learnedIndicator.style.fontSize = '11px';
                    learnedIndicator.style.fontWeight = 'bold';
                    learnedIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(learnedIndicator);
                } else if (isAvailable) {
                    const availableIndicator = document.createElement('div');
                    availableIndicator.innerHTML = '📋 Disponível';
                    availableIndicator.style.color = '#8B4513';
                    availableIndicator.style.fontSize = '11px';
                    availableIndicator.style.fontWeight = 'bold';
                    availableIndicator.style.fontStyle = 'italic';
                    indicatorsContainer.appendChild(availableIndicator);
                }

                if (indicatorsContainer.children.length > 0) {
                    abilityContainer.appendChild(indicatorsContainer);
                }

                abilitiesListContainer.appendChild(abilityContainer);
            });

            // Verifica se não há habilidades encontradas durante a filtragem
            if (filteredAbilities.length === 0 && currentTextFilter.length > 0) {
                const noResultsMessage = createNoResultsMessage(currentTextFilter, 'habilidade', 'blue');
                abilitiesListContainer.appendChild(noResultsMessage);
            }

            // Estatísticas
            const statsContainer = document.createElement('div');
            statsContainer.style.marginTop = '15px';
            statsContainer.style.padding = '10px';
            statsContainer.style.background = 'rgba(26,26,46,0.8)';
            statsContainer.style.borderRadius = '8px';
            statsContainer.style.border = '1px solid rgba(139, 69, 19, 0.3)';
            statsContainer.style.textAlign = 'center';

            const learnedAbilitiesCount = learnedAbilities.length;
            const totalAbilities = abilities.length;
            const progress = Math.round((learnedAbilitiesCount / totalAbilities) * 100);

            const statsText = document.createElement('div');
            statsText.innerHTML = `<strong>Habilidades Aprendidas:</strong> ${learnedAbilitiesCount}/${totalAbilities} (${progress}%)`;
            statsText.style.color = '#8B4513';
            statsText.style.fontSize = '14px';
            statsText.style.fontWeight = 'bold';

            statsContainer.appendChild(statsText);
            abilitiesListContainer.appendChild(statsContainer);
        }

        // Event listeners para os filtros
        showAllBtn.onclick = () => {
            currentStatusFilter = 'all';
            showAllBtn.style.background = '#8B4513';
            showAllBtn.style.color = '#fff';
            showLearnedBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showLearnedBtn.style.color = '#ecf0f1';
            showAvailableBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAvailableBtn.style.color = '#ecf0f1';
            updateAbilityList();
        };

        showLearnedBtn.onclick = () => {
            currentStatusFilter = 'learned';
            showAllBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAllBtn.style.color = '#ecf0f1';
            showLearnedBtn.style.background = '#8B4513';
            showLearnedBtn.style.color = '#fff';
            showAvailableBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAvailableBtn.style.color = '#ecf0f1';
            updateAbilityList();
        };

        showAvailableBtn.onclick = () => {
            currentStatusFilter = 'available';
            showAllBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showAllBtn.style.color = '#ecf0f1';
            showLearnedBtn.style.background = 'rgba(139, 69, 19, 0.3)';
            showLearnedBtn.style.color = '#ecf0f1';
            showAvailableBtn.style.background = '#8B4513';
            showAvailableBtn.style.color = '#fff';
            updateAbilityList();
        };
        // Inicializa a lista de habilidades
        updateAbilityList();
        // Função para alternar entre abas
        function switchTab(tabNumber) {
            // Esconde todos os conteúdos
            tab1Content.style.display = 'none';
            tab2Content.style.display = 'none';
            tab3Content.style.display = 'none';
            tab4Content.style.display = 'none';
            tab5Content.style.display = 'none';

            // Remove estilo ativo de todos os botões
            tab1Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            tab1Btn.style.color = '#ecf0f1';
            tab2Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            tab2Btn.style.color = '#ecf0f1';
            tab3Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            tab3Btn.style.color = '#ecf0f1';
            tab4Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            tab4Btn.style.color = '#ecf0f1';
            tab5Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            tab5Btn.style.color = '#ecf0f1';

            // Mostra o conteúdo da aba selecionada
            if (tabNumber === 1) {
                tab1Content.style.display = 'block';
                tab1Btn.style.background = '#8B4513';
                tab1Btn.style.color = '#fff';
            } else if (tabNumber === 2) {
                tab2Content.style.display = 'block';
                tab2Btn.style.background = '#8B4513';
                tab2Btn.style.color = '#fff';
            } else if (tabNumber === 3) {
                tab3Content.style.display = 'block';
                tab3Btn.style.background = '#8B4513';
                tab3Btn.style.color = '#fff';
            } else if (tabNumber === 4) {
                tab4Content.style.display = 'block';
                tab4Btn.style.background = '#8B4513';
                tab4Btn.style.color = '#fff';
            } else if (tabNumber === 5) {
                tab5Content.style.display = 'block';
                tab5Btn.style.background = '#8B4513';
                tab5Btn.style.color = '#fff';
            }
        }

        // Event listeners para os botões das abas
        tab1Btn.onclick = () => switchTab(1);
        tab2Btn.onclick = () => switchTab(2);
        tab3Btn.onclick = () => switchTab(3);
        tab4Btn.onclick = () => switchTab(4);
        tab5Btn.onclick = () => switchTab(5);

        tab1Btn.onmouseover = () => {
            if (tab1Content.style.display === 'none') {
                tab1Btn.style.background = 'rgba(139, 69, 19, 0.5)';
            }
        };
        tab1Btn.onmouseout = () => {
            if (tab1Content.style.display === 'none') {
                tab1Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            }
        };

        tab2Btn.onmouseover = () => {
            if (tab2Content.style.display === 'none') {
                tab2Btn.style.background = 'rgba(139, 69, 19, 0.5)';
            }
        };
        tab2Btn.onmouseout = () => {
            if (tab2Content.style.display === 'none') {
                tab2Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            }
        };

        tab3Btn.onmouseover = () => {
            if (tab3Content.style.display === 'none') {
                tab3Btn.style.background = 'rgba(139, 69, 19, 0.5)';
            }
        };
        tab3Btn.onmouseout = () => {
            if (tab3Content.style.display === 'none') {
                tab3Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            }
        };

        tab4Btn.onmouseover = () => {
            if (tab4Content.style.display === 'none') {
                tab4Btn.style.background = 'rgba(139, 69, 19, 0.5)';
            }
        };
        tab4Btn.onmouseout = () => {
            if (tab4Content.style.display === 'none') {
                tab4Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            }
        };

        tab5Btn.onmouseover = () => {
            if (tab5Content.style.display === 'none') {
                tab5Btn.style.background = 'rgba(139, 69, 19, 0.5)';
            }
        };
        tab5Btn.onmouseout = () => {
            if (tab5Content.style.display === 'none') {
                tab5Btn.style.background = 'rgba(139, 69, 19, 0.3)';
            }
        };

        // Adiciona os botões das abas
        tabButtons.appendChild(tab1Btn);
        tabButtons.appendChild(tab2Btn);
        tabButtons.appendChild(tab3Btn);
        tabButtons.appendChild(tab4Btn);
        tabButtons.appendChild(tab5Btn);

        // Adiciona os conteúdos das abas
        tabContents.appendChild(tab1Content);
        tabContents.appendChild(tab2Content);
        tabContents.appendChild(tab3Content);
        tabContents.appendChild(tab4Content);
        tabContents.appendChild(tab5Content);

        tabContainer.appendChild(tabButtons);
        popup.appendChild(tabContainer);

        // Container para conteúdo scrollable
        const contentContainer = document.createElement('div');
        contentContainer.style.flex = '1';
        contentContainer.style.overflow = 'hidden';
        contentContainer.appendChild(tabContents);
        popup.appendChild(contentContainer);

        // Tabela de Progressão (mantida na primeira aba)
        const progressionSection = document.createElement('div');
        progressionSection.style.marginBottom = '20px';

        const progressionTitle = document.createElement('h3');
        progressionTitle.textContent = 'Tabela de Progressão';
        progressionTitle.style.color = '#8B4513';
        progressionTitle.style.fontSize = '18px';
        progressionTitle.style.fontWeight = 'bold';
        progressionTitle.style.marginBottom = '15px';
        progressionTitle.style.borderBottom = '2px solid rgba(139, 69, 19, 0.3)';
        progressionTitle.style.paddingBottom = '8px';
        progressionSection.appendChild(progressionTitle);

        const progressionTable = document.createElement('div');
        progressionTable.style.background = 'rgba(26,26,46,0.8)';
        progressionTable.style.border = '1px solid rgba(139, 69, 19, 0.3)';
        progressionTable.style.borderRadius = '8px';
        progressionTable.style.overflow = 'hidden';

        // Cabeçalho da tabela
        const tableHeader = document.createElement('div');
        tableHeader.style.display = 'grid';
        tableHeader.style.gridTemplateColumns = '80px 1fr';
        tableHeader.style.background = 'rgba(139, 69, 19, 0.2)';
        tableHeader.style.padding = '12px 15px';
        tableHeader.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';

        const levelHeader = document.createElement('div');
        levelHeader.textContent = 'Nível';
        levelHeader.style.color = '#8B4513';
        levelHeader.style.fontWeight = 'bold';
        levelHeader.style.fontSize = '14px';

        const abilitiesHeader = document.createElement('div');
        abilitiesHeader.textContent = 'Habilidades de Classe';
        abilitiesHeader.style.color = '#8B4513';
        abilitiesHeader.style.fontWeight = 'bold';
        abilitiesHeader.style.fontSize = '14px';

        tableHeader.appendChild(levelHeader);
        tableHeader.appendChild(abilitiesHeader);
        progressionTable.appendChild(tableHeader);

        // Dados da tabela
        const progressionData = [
            { level: '1º', abilities: 'Marca da presa +1d4, rastreador' },
            { level: '2º', abilities: 'Poder de caçador' },
            { level: '3º', abilities: 'Explorador, poder de caçador' },
            { level: '4º', abilities: 'Poder de caçador' },
            { level: '5º', abilities: 'Caminho do explorador, marca da presa +1d8, poder de caçador' },
            { level: '6º', abilities: 'Poder de caçador' },
            { level: '7º', abilities: 'Explorador, poder de caçador' },
            { level: '8º', abilities: 'Poder de caçador' },
            { level: '9º', abilities: 'Marca da presa +1d12, poder de caçador' },
            { level: '10º', abilities: 'Poder de caçador' },
            { level: '11º', abilities: 'Explorador, poder de caçador' },
            { level: '12º', abilities: 'Poder de caçador' },
            { level: '13º', abilities: 'Marca da presa +2d8, poder de caçador' },
            { level: '14º', abilities: 'Poder de caçador' },
            { level: '15º', abilities: 'Explorador, poder de caçador' },
            { level: '16º', abilities: 'Poder de caçador' },
            { level: '17º', abilities: 'Marca da presa +2d10, poder de caçador' },
            { level: '18º', abilities: 'Poder de caçador' },
            { level: '19º', abilities: 'Explorador, poder de caçador' },
            { level: '20º', abilities: 'Mestre caçador, poder de caçador' }
        ];

        progressionData.forEach((row, index) => {
            const tableRow = document.createElement('div');
            tableRow.style.display = 'grid';
            tableRow.style.gridTemplateColumns = '80px 1fr';
            tableRow.style.padding = '10px 15px';
            tableRow.style.borderBottom = index < progressionData.length - 1 ? '1px solid rgba(139, 69, 19, 0.1)' : 'none';
            tableRow.style.transition = 'background 0.2s';

            tableRow.onmouseover = () => {
                tableRow.style.background = 'rgba(139, 69, 19, 0.1)';
            };
            tableRow.onmouseout = () => {
                tableRow.style.background = 'transparent';
            };

            const levelCell = document.createElement('div');
            levelCell.textContent = row.level;
            levelCell.style.color = '#8B4513';
            levelCell.style.fontWeight = 'bold';
            levelCell.style.fontSize = '13px';

            const abilitiesCell = document.createElement('div');
            abilitiesCell.textContent = row.abilities;
            abilitiesCell.style.color = '#ecf0f1';
            abilitiesCell.style.fontSize = '13px';
            abilitiesCell.style.lineHeight = '1.3';

            tableRow.appendChild(levelCell);
            tableRow.appendChild(abilitiesCell);
            progressionTable.appendChild(tableRow);
        });

        progressionSection.appendChild(progressionTable);
        tab1Content.appendChild(progressionSection);

        // Nota sobre o livro
        const bookNote = document.createElement('div');
        bookNote.style.textAlign = 'center';
        bookNote.style.padding = '15px';
        bookNote.style.background = 'rgba(139, 69, 19, 0.1)';
        bookNote.style.borderRadius = '8px';
        bookNote.style.border = '1px solid rgba(139, 69, 19, 0.2)';
        bookNote.style.marginTop = '15px';

        const noteText = document.createElement('div');
        noteText.textContent = '📖 Informações baseadas no Livro do Jogador - Tormenta 20';
        noteText.style.color = '#8B4513';
        noteText.style.fontSize = '12px';
        noteText.style.fontStyle = 'italic';
        noteText.style.fontWeight = 'bold';

        bookNote.appendChild(noteText);
        tab1Content.appendChild(bookNote);

        // Só agora adiciona o popup ao DOM
        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'brown');

        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
    }

    // Funções para gerenciar poderes de destino aprendidos
    function getLearnedDestinyPowers() {
        try {
            const powers = localStorage.getItem(DESTINY_POWERS_KEY);
            return powers ? JSON.parse(powers) : [];
        } catch (error) {
            console.log('Erro ao carregar poderes de destino aprendidos:', error);
            return [];
        }
    }

    function saveLearnedDestinyPowers(powers) {
        try {
            localStorage.setItem(DESTINY_POWERS_KEY, JSON.stringify(powers));
        } catch (error) {
            console.log('Erro ao salvar poderes de destino aprendidos:', error);
        }
    }

    function hasDestinyPower(powerName) {
        const learnedPowers = getLearnedDestinyPowers();
        return learnedPowers.includes(powerName);
    }

    function toggleLearnedDestinyPower(powerName) {
        const learnedPowers = getLearnedDestinyPowers();
        const index = learnedPowers.indexOf(powerName);

        if (index > -1) {
            learnedPowers.splice(index, 1);
            showWarningNotification(`Poder de Destino "${powerName}" removido da lista de aprendidos.`);
        } else {
            learnedPowers.push(powerName);
            showSuccessNotification(`Poder de Destino "${powerName}" adicionado à lista de aprendidos!`);
        }

        saveLearnedDestinyPowers(learnedPowers);
        return learnedPowers;
    }

    // === NOVO: utilitários para Companheiro Animal ===
    const ANIMAL_COMPANION_TYPE_KEY = 'roll20-hotbar-animal-companion-type';
    function getAnimalCompanionType() {
        return localStorage.getItem(ANIMAL_COMPANION_TYPE_KEY) || '';
    }
    function setAnimalCompanionType(type) {
        localStorage.setItem(ANIMAL_COMPANION_TYPE_KEY, type);
    }

    // === NOVO: Funções para gerenciar divindades e poderes concedidos ===
    const SELECTED_DIVINITY_KEY = 'roll20-hotbar-selected-divinity';
    const SELECTED_DIVINITY_POWER_KEY = 'roll20-hotbar-selected-divinity-power';

    function getSelectedDivinity() {
        return localStorage.getItem(SELECTED_DIVINITY_KEY) || null;
    }

    function saveSelectedDivinity(divinityName) {
        localStorage.setItem(SELECTED_DIVINITY_KEY, divinityName);
    }

    function getSelectedDivinityPower() {
        return localStorage.getItem(SELECTED_DIVINITY_POWER_KEY) || null;
    }

    function saveSelectedDivinityPower(powerName) {
        localStorage.setItem(SELECTED_DIVINITY_POWER_KEY, powerName);
    }

    function hasDivinityPower(powerName) {
        const selectedPower = getSelectedDivinityPower();
        return selectedPower === powerName;
    }

    // Funções para gerenciar raça selecionada
    function getSelectedRace() {
        try {
            return localStorage.getItem(SELECTED_RACE_KEY) || null;
        } catch (error) {
            console.log('Erro ao carregar raça selecionada:', error);
            return null;
        }
    }

    function saveSelectedRace(raceName) {
        try {
            localStorage.setItem(SELECTED_RACE_KEY, raceName);
        } catch (error) {
            console.log('Erro ao salvar raça selecionada:', error);
        }
    }

    function getSelectedRaceType() {
        try {
            return localStorage.getItem(SELECTED_RACE_TYPE_KEY) || null;
        } catch (error) {
            console.log('Erro ao carregar tipo de raça selecionado:', error);
            return null;
        }
    }

    function saveSelectedRaceType(raceType) {
        try {
            localStorage.setItem(SELECTED_RACE_TYPE_KEY, raceType);
        } catch (error) {
            console.log('Erro ao salvar tipo de raça selecionado:', error);
        }
    }

    function hasRacePower(powerName) {
        const selectedRace = getSelectedRace();
        const selectedRaceType = getSelectedRaceType();

        if (selectedRace === 'Suraggel') {
            if (selectedRaceType === 'Aggelus' && powerName === 'Luz Sagrada') {
                return true;
            }
            if (selectedRaceType === 'Sulfure' && powerName === 'Sombras Profanas') {
                return true;
            }
        }
        return false;
    }
    // Função para obter efeitos de ataque dinâmicos
    function getDynamicAttackEffects(charLevel) {
        const effects = [];

        // Assado de Carnes (Efeito de Comida) - SEMPRE NO TOPO
        if (isEffectActive('prato_assado_de_carnes')) {
            effects.push({
                label: 'Assado de Carnes (+2 dano)',
                value: 'assado_carnes',
                dice: '2',
                desc: '*+ Assado de Carnes (+2 dano)*',
                origin: 'Prato Especial',
                priority: 1 // Prioridade máxima para ficar no topo
            });
        }

        // Batata Valkariana (Efeito de Comida) - SEMPRE NO TOPO
        if (isEffectActive('prato_batata_valkariana')) {
            effects.push({
                label: 'Batata Valkariana (+1d6 acerto)',
                value: 'batata_valkariana',
                attackMod: '1d6',
                desc: '*+ Batata Valkariana (+1d6 acerto)*',
                origin: 'Prato Especial',
                priority: 1 // Prioridade máxima para ficar no topo
            });
        }

        // Bolo de Cenoura (Efeito de Comida)
        if (isEffectActive('prato_bolo_de_cenoura')) {
            effects.push({
                label: 'Bolo de Cenoura (+2 Percepção)',
                value: 'bolo_cenoura',
                attackMod: 2,
                desc: '*+ Bolo de Cenoura (+2 Percepção)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Estrogonofe (Efeito de Comida)
        if (isEffectActive('prato_estrogonofe')) {
            effects.push({
                label: 'Estrogonofe (+2 Vontade)',
                value: 'estrogonofe',
                attackMod: 2,
                desc: '*+ Estrogonofe (+2 Vontade)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Futomaki (Efeito de Comida)
        if (isEffectActive('prato_futomaki')) {
            effects.push({
                label: 'Futomaki (+2 Diplomacia)',
                value: 'futomaki',
                attackMod: 2,
                desc: '*+ Futomaki (+2 Diplomacia)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Pão de Queijo (Efeito de Comida)
        if (isEffectActive('prato_pao_de_queijo')) {
            effects.push({
                label: 'Pão de Queijo (+2 Fortitude)',
                value: 'pao_queijo',
                attackMod: 2,
                desc: '*+ Pão de Queijo (+2 Fortitude)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Porco Assado (Efeito de Comida)
        if (isEffectActive('prato_porco_assado')) {
            effects.push({
                label: 'Porco Assado (+1 Luta)',
                value: 'porco_assado',
                attackMod: 1,
                desc: '*+ Porco Assado (+1 Luta)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Salada Elfica (Efeito de Comida)
        if (isEffectActive('prato_salada_elfica')) {
            effects.push({
                label: 'Salada Elfica (+1 Pontaria)',
                value: 'salada_elfica',
                attackMod: 1,
                desc: '*+ Salada Elfica (+1 Pontaria)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Salada Imperial (Efeito de Comida)
        if (isEffectActive('prato_salada_imperial')) {
            effects.push({
                label: 'Salada Imperial (+2 Iniciativa)',
                value: 'salada_imperial',
                attackMod: 2,
                desc: '*+ Salada Imperial (+2 Iniciativa)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Sopa de Cogumelo (Efeito de Comida)
        if (isEffectActive('prato_sopa_de_cogumelo')) {
            effects.push({
                label: 'Sopa de Cogumelo (+2 Misticismo)',
                value: 'sopa_cogumelo',
                attackMod: 2,
                desc: '*+ Sopa de Cogumelo (+2 Misticismo)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Pizza (Efeito de Comida)
        if (isEffectActive('prato_pizza')) {
            effects.push({
                label: 'Pizza (+1 Vontade/Reflexos/Fortitude)',
                value: 'pizza',
                attackMod: 1,
                desc: '*+ Pizza (+1 Vontade/Reflexos/Fortitude)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Baga Celeste Cozida (Efeito de Comida)
        if (isEffectActive('prato_baga_celeste_cozida')) {
            effects.push({
                label: 'Baga Celeste Cozida (Reduz dano de queda)',
                value: 'baga_celeste_cozida',
                desc: '*+ Baga Celeste Cozida (Dano de queda reduzido em −1d6)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Cozido de Pimenta (Efeito de Comida)
        if (isEffectActive('prato_cozido_de_pimenta')) {
            effects.push({
                label: 'Cozido de Pimenta (+1 Fortitude)',
                value: 'cozido_de_pimenta',
                attackMod: 1,
                desc: '*+ Cozido de Pimenta (+1 Fortitude)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Manjar de Sombras (Efeito de Comida)
        if (isEffectActive('prato_manjar_de_sombras')) {
            effects.push({
                label: 'Manjar de Sombras (Proteção contra trevas)',
                value: 'manjar_de_sombras',
                desc: '*+ Manjar de Sombras (Ignora próximos 10 pontos de dano de trevas)*',
                origin: 'Prato Especial',
                priority: 2
            });
        }

        // Efeitos de Bebidas Artonianas
        // Baba de Troll (Efeito de Bebida) - Consumível
        if (isEffectActive('bebida_baba_de_troll')) {
            effects.push({
                label: 'Baba de Troll (+1d4 acerto)',
                value: 'baba_de_troll',
                attackMod: '1d4',
                desc: '*+ Baba de Troll (+1d4 acerto)*',
                origin: 'Bebida Artoniana',
                priority: 1 // Prioridade máxima para ficar no topo
            });
        }

        // Hidromel Uivante (Efeito de Bebida) - Dano corpo a corpo
        if (isEffectActive('bebida_hidromel_uivante')) {
            effects.push({
                label: 'Hidromel Uivante (+2 dano corpo a corpo)',
                value: 'hidromel_uivante',
                dice: '2',
                desc: '*+ Hidromel Uivante (+2 dano corpo a corpo)*',
                origin: 'Bebida Artoniana',
                priority: 2
            });
        }

        // Flanqueado (Bônus Permanente de Combate)
        effects.push({
            label: 'Flanqueado (+2 acerto)',
            value: 'flanqueado',
            attackMod: 2,
            desc: '*+ Flanqueado*',
            origin: 'Condição de Combate'
        });

        // Espada Solar (Poder de Divindade)
        if (hasDivinityPower('Espada Solar')) {
            effects.push({
                label: 'Espada Solar (+1d6 dano)',
                value: 'espada_solar',
                dice: '1d6',
                desc: '*+ Espada Solar*',
                origin: 'Divindade: Azgher'
            });
        }

        // Inimigo de Tenebra (Poder de Divindade)
        if (hasDivinityPower('Inimigo de Tenebra')) {
            effects.push({
                label: 'Inimigo de Tenebra (+1d6 vs mortos-vivos)',
                value: 'inimigo_tenebra',
                dice: '1d6',
                desc: '*+ Inimigo de Tenebra*',
                origin: 'Divindade: Azgher'
            });
        }
        // Escaramuça
        if (hasAbility('Escaramuça')) {
            effects.push({
                label: 'Escaramuça (+1d8 dano)',
                value: 'escaramurca',
                dice: '1d8',
                desc: '*+ Escaramuça*',
                origin: 'Habilidade de Caçador'
            });
        }
        // Marca da Presa
        if (hasAbility('Marca da Presa')) {
            let marcaPresaAttackMod = 0;
            let marcaPresaDice = '';
            let marcaPresaDesc = '';
            if (charLevel >= 17) {
                marcaPresaAttackMod = 3;
                marcaPresaDice = '+2d10';
                marcaPresaDesc = '+3 acerto, +2d10 dano, crit 16+';
            } else if (charLevel >= 13) {
                marcaPresaAttackMod = 3;
                marcaPresaDice = '+2d8';
                marcaPresaDesc = '+3 acerto, +2d8 dano, crit 16+';
            } else if (charLevel >= 9) {
                marcaPresaAttackMod = 3;
                marcaPresaDice = '+1d12';
                marcaPresaDesc = '+3 acerto, +1d12 dano, crit 16+';
            } else if (charLevel >= 5) {
                marcaPresaAttackMod = 2;
                marcaPresaDice = '+1d8';
                marcaPresaDesc = '+2 acerto, +1d8 dano, crit 16+';
            } else {
                marcaPresaAttackMod = 1;
                marcaPresaDice = '+1d4';
                marcaPresaDesc = '+1 acerto, +1d4 dano, crit 16+';
            }
            effects.push({
                label: `Marca da Presa (${marcaPresaDesc})`,
                value: 'marca_presa',
                dice: marcaPresaDice.replace('+', ''),
                attackMod: marcaPresaAttackMod,
                critMod: -2,
                desc: '*+ Marca da Presa*',
                origin: 'Habilidade de Caçador'
            });
        }
        // Inimigo
        if (hasAbility('Inimigo de (Criatura)')) {
            effects.push({
                label: 'Inimigo (dobra margem de crítico)',
                value: 'inimigo',
                desc: '*+ Inimigo*',
                origin: 'Habilidade de Caçador'
            });
        }
        // Ataque Furtivo (Companheiro Animal do tipo Assassino)
        if (hasAbility('Companheiro Animal') && getAnimalCompanionType() === 'assassino') {
            // Dano dependente do nível (sem bônus de acerto)
            let dice = '1d6';
            let desc = '*+ Ataque Furtivo*';
            const charLevelNum = parseInt(charLevel, 10) || 1;
            if (charLevelNum >= 15) {
                dice = '2d6';
            }
            effects.push({
                label: `Ataque Furtivo (+${dice} dano)`,
                value: 'ataque_furtivo',
                dice,
                desc,
                origin: 'Companheiro Animal: Assassino'
            });
        }

        // Cachecol Sombrio (Efeito de Item)
        if (isEffectActive('cachecol_sombrio')) {
            effects.push({
                label: 'Ataque Sombrio (+1d6 dano furtivo)',
                value: 'ataque_sombrio',
                dice: '1d6',
                desc: '*+ Ataque Sombrio*',
                origin: 'Item: Cachecol Sombrio'
            });
        }

        // Ordena os efeitos por prioridade (efeitos com priority: 1 ficam no topo)
        effects.sort((a, b) => {
            const priorityA = a.priority || 0;
            const priorityB = b.priority || 0;
            return priorityB - priorityA;
        });

        return effects;
    }

    // Templates reutilizáveis para Abilities
    const abilityTemplates = {
        createAbility: (abilityData) => {
            return {
                nome: abilityData.nome,
                descricao: abilityData.descricao,
                onClick: () => createAbilityCastPopup(abilityData.nome, abilityData.nome)
            };
        }
    };
    // Função para criar o popup de habilidades
    function createAbilitiesPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('abilities-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('abilities-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'abilities-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'abilities-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '400px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('abilities-overlay');
                if (overlay) overlay.remove();
            }
        });

        const title = document.createElement('h3');
        title.textContent = 'Poderes';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold'; header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);

        // Barra de filtro
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = '10px';
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filtrar poderes...';
        filterInput.style.width = '100%';
        filterInput.style.padding = '10px 28px 10px 12px';
        filterInput.style.borderRadius = '8px';
        filterInput.style.border = '1px solid #6ec6ff';
        filterInput.style.background = '#23243a';
        filterInput.style.color = '#fff';
        filterInput.style.fontSize = '14px';
        filterInput.style.outline = 'none';
        filterInput.style.boxSizing = 'border-box';
        filterInput.style.fontSize = '15px';
        // Botão X para limpar
        const clearBtn = document.createElement('span');
        clearBtn.textContent = '×';
        clearBtn.style.position = 'absolute';
        clearBtn.style.right = '8px';
        clearBtn.style.top = '50%';
        clearBtn.style.transform = 'translateY(-50%)';
        clearBtn.style.cursor = 'pointer';
        clearBtn.style.color = '#6ec6ff';
        clearBtn.style.fontSize = '18px';
        clearBtn.style.display = 'none';
        clearBtn.onclick = () => {
            filterInput.value = '';
            filterInput.dispatchEvent(new Event('input'));
            filterInput.focus();
        };
        filterInput.oninput = () => {
            if (filterInput.value.length > 0) {
                clearBtn.style.display = 'block';
            } else {
                clearBtn.style.display = 'none';
            }
            updateAbilityList();
        };
        filterContainer.appendChild(filterInput);
        popup.appendChild(filterContainer);

        // Dica sobre o sistema de CTRL
        const abilityTip = createCtrlTipMessage('power');
        popup.appendChild(abilityTip);

        // Lista visual
        const abilityList = document.createElement('div');
        abilityList.style.display = 'flex';
        abilityList.style.flexDirection = 'column';
        abilityList.style.gap = '8px';
        abilityList.style.marginTop = '2px';
        popup.appendChild(abilityList);

        function updateAbilityList() {
            const filter = filterInput.value.trim().toLowerCase();
            abilityList.innerHTML = '';
            // Lista dinâmica de habilidades disponíveis
            const dynamicAbilities = [];
            if (hasAbility('Ervas Curativas')) {
                dynamicAbilities.push(abilityTemplates.createAbility({
                    nome: 'Ervas Curativas',
                    descricao: 'Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo. (JdA:51)'
                }));
            }
            if (hasAbility('Bote')) {
                dynamicAbilities.push(abilityTemplates.createAbility({
                    nome: 'Bote',
                    descricao: 'Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária. Pré-requisito: Ambidestria, 6º nível de caçador.'
                }));
            }
            if (hasAbility('Emboscar')) {
                dynamicAbilities.push(abilityTemplates.createAbility({
                    nome: 'Emboscar',
                    descricao: 'Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate. Pré-requisito: treinado em Furtividade.'
                }));
            }
            // Filtrar pelo texto
            const filteredAbilities = dynamicAbilities.filter(a => a.nome.toLowerCase().includes(filter));
            if (filteredAbilities.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.style.textAlign = 'center';
                emptyMsg.style.padding = '20px';
                emptyMsg.style.color = '#999';
                emptyMsg.style.fontSize = '14px';
                emptyMsg.style.fontStyle = 'italic';

                if (filter.length > 0) {
                    const noResultsMessage = createNoResultsMessage(filter, 'habilidade', 'blue');
                    abilityList.appendChild(noResultsMessage);
                    return;
                } else {
                    emptyMsg.innerHTML = `
                            <div style="margin-bottom: 8px;">✨</div>
                            <div>Nenhuma habilidade disponível</div>
                            <div style="margin-top: 8px; font-size: 12px;">Aprenda habilidades no modal da classe para vê-las aqui</div>
                        `;
                }

                abilityList.appendChild(emptyMsg);
            } else {
                filteredAbilities.forEach(ability => {
                    const btn = document.createElement('button');
                    btn.textContent = ability.nome;
                    btn.style.width = '100%';
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';
                    btn.style.border = '1px solid #6ec6ff';
                    btn.style.borderRadius = '6px';
                    btn.style.padding = '10px 0';
                    btn.style.fontSize = '15px';
                    btn.style.fontWeight = 'bold';
                    btn.style.cursor = 'pointer';
                    btn.style.transition = 'all 0.2s';
                    btn.style.position = 'relative';

                    // Tooltip container
                    let tooltip = null;
                    let tooltipTimeout = null;

                    btn.onmouseover = () => {
                        btn.style.background = '#6ec6ff';
                        btn.style.color = '#23243a';

                        // Criar tooltip após um pequeno delay
                        tooltipTimeout = setTimeout(() => {
                            // Remover tooltip existente se houver
                            if (tooltip) tooltip.remove();

                            tooltip = document.createElement('div');
                            tooltip.style.position = 'fixed';
                            tooltip.style.background = 'rgba(20,20,30,0.98)';
                            tooltip.style.border = '2px solid #6ec6ff';
                            tooltip.style.borderRadius = '8px';
                            tooltip.style.padding = '12px';
                            tooltip.style.minWidth = '280px';
                            tooltip.style.maxWidth = '320px';
                            tooltip.style.zIndex = '10004';
                            tooltip.style.boxShadow = '0 4px 16px rgba(0,0,0,0.8)';
                            tooltip.style.pointerEvents = 'none';

                            // Calcular posição baseada na posição do botão
                            const btnRect = btn.getBoundingClientRect();
                            tooltip.style.left = (btnRect.right + 10) + 'px';
                            tooltip.style.top = btnRect.top + 'px';

                            // Conteúdo do tooltip
                            const tooltipContent = document.createElement('div');
                            tooltipContent.style.display = 'flex';
                            tooltipContent.style.flexDirection = 'column';
                            tooltipContent.style.gap = '8px';

                            // Título da habilidade
                            const tooltipTitle = document.createElement('div');
                            tooltipTitle.textContent = ability.nome;
                            tooltipTitle.style.color = '#6ec6ff';
                            tooltipTitle.style.fontSize = '16px';
                            tooltipTitle.style.fontWeight = 'bold';
                            tooltipTitle.style.marginBottom = '4px';
                            tooltipContent.appendChild(tooltipTitle);

                            // Tag de classificação
                            const classificationTag = document.createElement('div');
                            classificationTag.textContent = 'Habilidade de Classe';
                            classificationTag.style.background = '#6ec6ff';
                            classificationTag.style.color = '#23243a';
                            classificationTag.style.fontSize = '11px';
                            classificationTag.style.fontWeight = 'bold';
                            classificationTag.style.borderRadius = '4px';
                            classificationTag.style.padding = '2px 8px';
                            classificationTag.style.display = 'inline-block';
                            classificationTag.style.width = 'fit-content';
                            tooltipContent.appendChild(classificationTag);

                            // Tag de tipo
                            const typeTag = document.createElement('div');
                            if (ability.nome === 'Bote' || ability.nome === 'Emboscar') {
                                typeTag.textContent = 'Ação Livre';
                                typeTag.style.background = '#ff6e6e';
                            } else {
                                typeTag.textContent = 'Poder de Caçador';
                                typeTag.style.background = '#4a90e2';
                            }
                            typeTag.style.color = '#fff';
                            typeTag.style.fontSize = '11px';
                            typeTag.style.fontWeight = 'bold';
                            typeTag.style.borderRadius = '4px';
                            typeTag.style.padding = '2px 8px';
                            typeTag.style.display = 'inline-block';
                            typeTag.style.width = 'fit-content';
                            typeTag.style.marginTop = '2px';
                            tooltipContent.appendChild(typeTag);

                            // Descrição resumida
                            const tooltipDesc = document.createElement('div');
                            if (ability.nome === 'Ervas Curativas') {
                                tooltipDesc.textContent = 'Ação completa: Gaste PM para curar 2d6 PV por PM ou remover condição envenenado de você ou aliado adjacente.';
                            } else if (ability.nome === 'Bote') {
                                tooltipDesc.textContent = 'Ação livre: Pague 1 PM para fazer um ataque adicional com arma secundária durante uma investida.';
                            } else if (ability.nome === 'Emboscar') {
                                tooltipDesc.textContent = 'Ação livre: Pague 2 PM para realizar uma ação padrão adicional na primeira rodada de combate.';
                            }
                            tooltipDesc.style.color = '#ecf0f1';
                            tooltipDesc.style.fontSize = '13px';
                            tooltipDesc.style.lineHeight = '1.4';
                            tooltipDesc.style.marginTop = '6px';
                            tooltipContent.appendChild(tooltipDesc);

                            tooltip.appendChild(tooltipContent);
                            document.body.appendChild(tooltip);
                        }, 300); // Delay de 300ms antes de mostrar o tooltip
                    };

                    btn.onmouseout = () => {
                        btn.style.background = '#23243a';
                        btn.style.color = '#fff';

                        // Limpar timeout e remover tooltip
                        if (tooltipTimeout) {
                            clearTimeout(tooltipTimeout);
                            tooltipTimeout = null;
                        }
                        if (tooltip) {
                            tooltip.remove();
                            tooltip = null;
                        }
                    };

                    btn.onclick = ability.onClick;
                    abilityList.appendChild(btn);
                });
            }
        }
        updateAbilityList();

        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }
    // Função para criar popup de conjuração de habilidade
    function createAbilityCastPopup(abilityName, abilityDisplayName) {
        // Modal para Bote
        if (abilityName === 'Bote') {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('power-cast-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('power-cast-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'power-cast-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'power-cast-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ff6e6e';
            popup.style.borderRadius = '12px';
            popup.style.padding = '20px';
            popup.style.zIndex = '10003';
            popup.style.maxWidth = '400px';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '10px';
            header.style.width = '100%';

            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.flexDirection = 'column';
            titleContainer.style.alignItems = 'flex-start';
            titleContainer.style.gap = '2px';

            const title = document.createElement('h3');
            title.textContent = abilityDisplayName;
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold';
            titleContainer.appendChild(title);

            // Tag de origem
            const originTag = document.createElement('span');
            originTag.textContent = 'Habilidade de Combate';
            originTag.style.background = '#ff6e6e';
            originTag.style.color = '#23243a';
            originTag.style.fontSize = '12px';
            originTag.style.fontWeight = 'bold';
            originTag.style.borderRadius = '8px';
            originTag.style.padding = '2px 10px';
            originTag.style.marginTop = '2px';
            originTag.style.display = 'inline-block';
            originTag.style.letterSpacing = '0.5px';
            originTag.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
            titleContainer.appendChild(originTag);

            header.appendChild(titleContainer);        // Botão de fechar
            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('power-cast-overlay');
                    if (overlay) overlay.remove();
                }
            });
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Descrição em uma box
            const descBox = document.createElement('div');
            descBox.style.background = '#1a1a2e';
            descBox.style.border = '1px solid #ff6e6e';
            descBox.style.borderRadius = '8px';
            descBox.style.padding = '12px';
            descBox.style.marginBottom = '15px';
            descBox.style.display = 'flex';
            descBox.style.flexDirection = 'column';
            descBox.style.gap = '6px';

            const descHeader = document.createElement('div');
            descHeader.textContent = 'Descrição';
            descHeader.style.color = '#ff6e6e';
            descHeader.style.fontSize = '13px';
            descHeader.style.fontWeight = 'bold';
            descHeader.style.marginBottom = '2px';
            descBox.appendChild(descHeader);

            const description = document.createElement('div');
            description.style.color = '#ecf0f1';
            description.style.fontSize = '14px';
            description.style.lineHeight = '1.4';
            description.textContent = 'Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária. Pré-requisito: Ambidestria, 6º nível de caçador.';
            descBox.appendChild(description);

            // Botão compartilhar dentro da box
            const shareBtn = document.createElement('button');
            shareBtn.textContent = 'Compartilhar';
            shareBtn.style.background = 'none';
            shareBtn.style.border = '1px solid #ff6e6e';
            shareBtn.style.color = '#ff6e6e';
            shareBtn.style.fontSize = '14px';
            shareBtn.style.fontWeight = 'bold';
            shareBtn.style.borderRadius = '6px';
            shareBtn.style.padding = '8px 0';
            shareBtn.style.marginTop = '10px';
            shareBtn.style.width = '100%';
            shareBtn.style.cursor = 'pointer';
            shareBtn.style.transition = 'all 0.2s';
            shareBtn.onmouseover = () => {
                shareBtn.style.background = '#ff6e6e';
                shareBtn.style.color = '#23243a';
            };
            shareBtn.onmouseout = () => {
                shareBtn.style.background = 'none';
                shareBtn.style.color = '#ff6e6e';
            };
            shareBtn.onclick = () => {
                const msg = `&{template:t20-info}{{infoname=Bote}}{{description=${description.textContent}}}`;
                sendToChat(msg);
            };
            descBox.appendChild(shareBtn);
            popup.appendChild(descBox);

            // Botão de executar ataque
            const executeBtn = document.createElement('button');
            executeBtn.textContent = 'Executar Ataque com Bote';
            executeBtn.style.background = '#ff6e6e';
            executeBtn.style.color = '#23243a';
            executeBtn.style.border = 'none';
            executeBtn.style.borderRadius = '8px';
            executeBtn.style.padding = '12px 0';
            executeBtn.style.fontSize = '16px';
            executeBtn.style.fontWeight = 'bold';
            executeBtn.style.cursor = 'pointer';
            executeBtn.style.transition = 'all 0.2s';
            executeBtn.style.marginBottom = '10px';
            executeBtn.onmouseover = () => {
                executeBtn.style.background = '#ff8e8e';
            };
            executeBtn.onmouseout = () => {
                executeBtn.style.background = '#ff6e6e';
            };
            executeBtn.onclick = () => {
                // Executar ataque com Bote (1 PM)
                const ATTACK_EFFECTS_KEY = 'roll20-hotbar-attack-effects';
                let savedAttackEffects = [];
                try {
                    const saved = localStorage.getItem(ATTACK_EFFECTS_KEY);
                    if (saved) savedAttackEffects = JSON.parse(saved);
                } catch (err) {
                    console.error('Erro ao carregar seleção:', err);
                    savedAttackEffects = [];
                }
                const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
                const effects = getDynamicAttackEffects(charLevel);
                let extraDamage = '';
                let extraDescription = '';
                let critThreshold = 18;
                let attackBonus = 2; // +2 da investida
                let marcaPresaActive = false;
                let inimigoActive = false;
                effects.forEach(effect => {
                    if (savedAttackEffects.includes(effect.value)) {
                        if (effect.dice) {
                            extraDamage += `+${effect.dice}`;
                        }
                        if (effect.critMod) {
                            critThreshold += effect.critMod;
                        }
                        if (effect.attackMod) {
                            attackBonus += effect.attackMod;
                        }
                        extraDescription += '%NEWLINE% ' + effect.desc;
                        if (effect.value === 'marca_presa') marcaPresaActive = true;
                        if (effect.value === 'inimigo') inimigoActive = true;
                    }
                });
                if (inimigoActive && marcaPresaActive) {
                    if (critThreshold === 16) critThreshold = 14;
                }
                // Enviar mensagem de emote descrevendo a ação
                const emoteMsg = `/em ${getCharacterName()} usa **Bote** (1 PM) para fazer um ataque adicional com sua arma secundária!`;
                sendToChat(emoteMsg);

                const macro = `&{template:t20-attack}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{attackname=Ataque Adicional}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterNameForMacro()}|pontariatotal}+@{${getCharacterNameForMacro()}|condicaomodataquedis}+@{${getCharacterNameForMacro()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterNameForMacro()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterNameForMacro()}|des_mod}+0+0+@{${getCharacterNameForMacro()}|danotemp}+@{${getCharacterNameForMacro()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterNameForMacro()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Bote c/ Espada Longa (1PM)** ${extraDescription}}}`;
                executeAttackWithBloodEffect(macro);

                // Fechar todos os popups do hotbar para liberar espaço para FX
                const popupsToClose = [
                    'power-cast-popup',
                    'power-cast-overlay',
                    'abilities-popup',
                    'abilities-overlay',
                    'skills-popup',
                    'skills-overlay',
                    'spells-popup',
                    'spells-overlay',
                    'maneuvers-popup',
                    'maneuvers-overlay',
                    'attack-effects-popup',
                    'attack-effects-overlay',
                    'effects-popup',
                    'effects-overlay',
                    'avatar-popup',
                    'avatar-overlay'
                ];

                popupsToClose.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) element.remove();
                });
            };
            popup.appendChild(executeBtn);

            document.body.appendChild(popup);
        }
        // Modal para Emboscar
        else if (abilityName === 'Emboscar') {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('power-cast-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('power-cast-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'power-cast-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'power-cast-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #ff6e6e';
            popup.style.borderRadius = '12px';
            popup.style.padding = '20px';
            popup.style.zIndex = '10003';
            popup.style.maxWidth = '400px';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '10px';
            header.style.width = '100%';

            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.flexDirection = 'column';
            titleContainer.style.alignItems = 'flex-start';
            titleContainer.style.gap = '2px';

            const title = document.createElement('h3');
            title.textContent = abilityDisplayName;
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold';
            titleContainer.appendChild(title);

            // Tag de origem
            const originTag = document.createElement('span');
            originTag.textContent = 'Habilidade de Combate';
            originTag.style.background = '#ff6e6e';
            originTag.style.color = '#23243a';
            originTag.style.fontSize = '12px';
            originTag.style.fontWeight = 'bold';
            originTag.style.borderRadius = '8px';
            originTag.style.padding = '2px 10px';
            originTag.style.marginTop = '2px';
            originTag.style.display = 'inline-block';
            originTag.style.letterSpacing = '0.5px';
            originTag.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
            titleContainer.appendChild(originTag);

            header.appendChild(titleContainer);        // Botão de fechar
            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('power-cast-overlay');
                    if (overlay) overlay.remove();
                }
            });
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Descrição em uma box
            const descBox = document.createElement('div');
            descBox.style.background = '#1a1a2e';
            descBox.style.border = '1px solid #ff6e6e';
            descBox.style.borderRadius = '8px';
            descBox.style.padding = '12px';
            descBox.style.marginBottom = '15px';
            descBox.style.display = 'flex';
            descBox.style.flexDirection = 'column';
            descBox.style.gap = '6px';

            const descHeader = document.createElement('div');
            descHeader.textContent = 'Descrição';
            descHeader.style.color = '#ff6e6e';
            descHeader.style.fontSize = '13px';
            descHeader.style.fontWeight = 'bold';
            descHeader.style.marginBottom = '2px';
            descBox.appendChild(descHeader);

            const description = document.createElement('div');
            description.style.color = '#ecf0f1';
            description.style.fontSize = '14px';
            description.style.lineHeight = '1.4';
            description.textContent = 'Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate. Pré-requisito: treinado em Furtividade.';
            descBox.appendChild(description);

            // Botão compartilhar dentro da box
            const shareBtn = document.createElement('button');
            shareBtn.textContent = 'Compartilhar';
            shareBtn.style.background = 'none';
            shareBtn.style.border = '1px solid #ff6e6e';
            shareBtn.style.color = '#ff6e6e';
            shareBtn.style.fontSize = '14px';
            shareBtn.style.fontWeight = 'bold';
            shareBtn.style.borderRadius = '6px';
            shareBtn.style.padding = '8px 0';
            shareBtn.style.marginTop = '10px';
            shareBtn.style.width = '100%';
            shareBtn.style.cursor = 'pointer';
            shareBtn.style.transition = 'all 0.2s';
            shareBtn.onmouseover = () => {
                shareBtn.style.background = '#ff6e6e';
                shareBtn.style.color = '#23243a';
            };
            shareBtn.onmouseout = () => {
                shareBtn.style.background = 'none';
                shareBtn.style.color = '#ff6e6e';
            };
            shareBtn.onclick = () => {
                const msg = `&{template:t20-info}{{infoname=Emboscar}}{{description=${description.textContent}}}`;
                sendToChat(msg);
            };
            descBox.appendChild(shareBtn);
            popup.appendChild(descBox);

            // Botão de executar ação
            const executeBtn = document.createElement('button');
            executeBtn.textContent = 'Executar Ação Adicional';
            executeBtn.style.background = '#ff6e6e';
            executeBtn.style.color = '#23243a';
            executeBtn.style.border = 'none';
            executeBtn.style.borderRadius = '8px';
            executeBtn.style.padding = '12px 0';
            executeBtn.style.fontSize = '16px';
            executeBtn.style.fontWeight = 'bold';
            executeBtn.style.cursor = 'pointer';
            executeBtn.style.transition = 'all 0.2s';
            executeBtn.style.marginBottom = '10px';
            executeBtn.onmouseover = () => {
                executeBtn.style.background = '#ff8e8e';
            };
            executeBtn.onmouseout = () => {
                executeBtn.style.background = '#ff6e6e';
            };
            executeBtn.onclick = () => {
                // Enviar mensagem de emote descrevendo a ação
                const emoteMsg = `/em ${getCharacterName()} usa **Emboscar** (2 PM) para realizar uma ação padrão adicional!`;
                sendToChat(emoteMsg);

                // Fechar todos os popups do hotbar para liberar espaço para FX
                const popupsToClose = [
                    'power-cast-popup',
                    'power-cast-overlay',
                    'abilities-popup',
                    'abilities-overlay',
                    'skills-popup',
                    'skills-overlay',
                    'spells-popup',
                    'spells-overlay',
                    'maneuvers-popup',
                    'maneuvers-overlay',
                    'attack-effects-popup',
                    'attack-effects-overlay',
                    'effects-popup',
                    'effects-overlay',
                    'avatar-popup',
                    'avatar-overlay'
                ];

                popupsToClose.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) element.remove();
                });
            };
            popup.appendChild(executeBtn);

            document.body.appendChild(popup);
        }
        // Modal para Ervas Curativas
        else if (abilityName === 'Ervas Curativas') {
            // Remove popup existente se houver
            const existingPopup = document.getElementById('power-cast-popup');
            if (existingPopup) existingPopup.remove();
            const existingOverlay = document.getElementById('power-cast-overlay');
            if (existingOverlay) existingOverlay.remove();

            // Overlay para fechar ao clicar fora
            const overlay = document.createElement('div');
            overlay.id = 'power-cast-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.5)';
            overlay.style.zIndex = '10002';
            overlay.onclick = () => {
                overlay.remove();
                popup.remove();
            };
            document.body.appendChild(overlay);

            // Popup principal
            const popup = document.createElement('div');
            popup.id = 'power-cast-popup';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'rgba(30,30,40,0.98)';
            popup.style.border = '2px solid #6ec6ff';
            popup.style.borderRadius = '12px';
            popup.style.padding = '20px';
            popup.style.zIndex = '10003';
            popup.style.maxWidth = '400px';
            popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
            popup.style.display = 'flex';
            popup.style.flexDirection = 'column';
            popup.style.alignItems = 'stretch';

            // Cabeçalho
            const header = document.createElement('div');
            header.style.display = 'flex'; header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '10px';
            header.style.width = '100%';

            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.flexDirection = 'column';
            titleContainer.style.alignItems = 'flex-start';
            titleContainer.style.gap = '2px';

            const title = document.createElement('h3');
            title.textContent = abilityDisplayName;
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold';
            titleContainer.appendChild(title);

            // Tag de origem
            const originTag = document.createElement('span');
            originTag.textContent = 'Habilidade de Classe';
            originTag.style.background = '#6ec6ff';
            originTag.style.color = '#23243a';
            originTag.style.fontSize = '12px';
            originTag.style.fontWeight = 'bold';
            originTag.style.borderRadius = '8px';
            originTag.style.padding = '2px 10px';
            originTag.style.marginTop = '2px';
            originTag.style.display = 'inline-block';
            originTag.style.letterSpacing = '0.5px';
            originTag.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
            titleContainer.appendChild(originTag);

            header.appendChild(titleContainer);        // Botão de fechar
            const closeBtn = window.Roll20Components.createCloseButton({
                text: '×',
                fontSize: '24px',
                width: '32px',
                height: '32px',
                padding: '0',
                color: '#ecf0f1',
                onClick: () => {
                    popup.remove();
                    const overlay = document.getElementById('power-cast-overlay');
                    if (overlay) overlay.remove();
                }
            });
            header.appendChild(closeBtn.render());
            popup.appendChild(header);

            // Descrição em uma box
            const descBox = document.createElement('div');
            descBox.style.background = '#1a1a2e';
            descBox.style.border = '1px solid #6ec6ff';
            descBox.style.borderRadius = '8px';
            descBox.style.padding = '12px';
            descBox.style.marginBottom = '15px';
            descBox.style.display = 'flex';
            descBox.style.flexDirection = 'column';
            descBox.style.gap = '6px';

            const descHeader = document.createElement('div');
            descHeader.textContent = 'Descrição';
            descHeader.style.color = '#6ec6ff';
            descHeader.style.fontSize = '13px';
            descHeader.style.fontWeight = 'bold';
            descHeader.style.marginBottom = '2px';
            descBox.appendChild(descHeader);

            const description = document.createElement('div');
            description.style.color = '#ecf0f1';
            description.style.fontSize = '14px';
            description.style.lineHeight = '1.4';
            description.textContent = 'Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo. (JdA:51)';
            descBox.appendChild(description);

            // Botão compartilhar dentro da box
            const shareBtn = document.createElement('button');
            shareBtn.textContent = 'Compartilhar';
            shareBtn.style.background = 'none';
            shareBtn.style.border = '1px solid #6ec6ff';
            shareBtn.style.color = '#6ec6ff';
            shareBtn.style.fontSize = '14px';
            shareBtn.style.fontWeight = 'bold';
            shareBtn.style.borderRadius = '6px';
            shareBtn.style.padding = '8px 0';
            shareBtn.style.marginTop = '10px';
            shareBtn.style.width = '100%';
            shareBtn.style.cursor = 'pointer';
            shareBtn.style.transition = 'all 0.2s';
            shareBtn.onmouseover = () => {
                shareBtn.style.background = '#6ec6ff';
                shareBtn.style.color = '#23243a';
            };
            shareBtn.onmouseout = () => {
                shareBtn.style.background = 'none';
                shareBtn.style.color = '#6ec6ff';
            };
            shareBtn.onclick = () => {
                const msg = `&{template:t20-info}{{infoname=Ervas Curativas}}{{description=${description.textContent}}}`;
                sendToChat(msg);
            };
            descBox.appendChild(shareBtn);
            popup.appendChild(descBox);

            // Seletor de PMs
            const pmSection = document.createElement('div');
            pmSection.style.marginBottom = '20px';

            const pmLabel = document.createElement('div');
            pmLabel.textContent = 'Custo em PM:';
            pmLabel.style.color = '#ecf0f1';
            pmLabel.style.fontSize = '14px';
            pmLabel.style.fontWeight = 'bold';
            pmLabel.style.marginBottom = '10px';
            pmSection.appendChild(pmLabel);

            const pmContainer = document.createElement('div');
            pmContainer.style.display = 'flex';
            pmContainer.style.gap = '8px';
            pmContainer.style.justifyContent = 'center';
            pmContainer.style.background = '#1a1a2e';
            pmContainer.style.border = '1px solid #6ec6ff';
            pmContainer.style.borderRadius = '12px';
            pmContainer.style.padding = '15px';
            pmContainer.style.marginTop = '5px';

            let selectedPMs = 0;
            const pmButtons = [];

            for (let i = 1; i <= 5; i++) {
                const pmBtn = document.createElement('button');
                pmBtn.textContent = i;
                pmBtn.style.width = '40px';
                pmBtn.style.height = '40px';
                pmBtn.style.borderRadius = '50%';
                pmBtn.style.border = '2px solid #6ec6ff';
                pmBtn.style.background = '#23243a';
                pmBtn.style.color = '#6ec6ff';
                pmBtn.style.fontSize = '16px';
                pmBtn.style.fontWeight = 'bold';
                pmBtn.style.cursor = 'pointer';
                pmBtn.style.transition = 'all 0.2s';
                pmButtons.push(pmBtn);

                pmBtn.onclick = () => {
                    selectedPMs = i;
                    pmButtons.forEach((btn, index) => {
                        if (index < i) {
                            btn.style.background = '#6ec6ff';
                            btn.style.color = '#23243a';
                        } else {
                            btn.style.background = '#23243a';
                            btn.style.color = '#6ec6ff';
                        }
                    });
                };
                pmContainer.appendChild(pmBtn);
            }
            pmSection.appendChild(pmContainer);
            popup.appendChild(pmSection);

            // Botão Usar
            const useBtn = document.createElement('button');
            useBtn.textContent = 'Usar';
            useBtn.style.width = '100%';
            useBtn.style.padding = '12px 0';
            useBtn.style.background = '#6ec6ff';
            useBtn.style.color = '#23243a';
            useBtn.style.border = 'none';
            useBtn.style.borderRadius = '8px';
            useBtn.style.fontSize = '16px';
            useBtn.style.fontWeight = 'bold';
            useBtn.style.cursor = 'pointer';
            useBtn.style.transition = 'all 0.2s';
            useBtn.style.marginTop = '10px';
            useBtn.onmouseover = () => {
                useBtn.style.background = '#5bb8ff';
            };
            useBtn.onmouseout = () => {
                useBtn.style.background = '#6ec6ff';
            };
            useBtn.onclick = () => {
                if (selectedPMs === 0) {
                    alert('Selecione pelo menos 1 PM para usar!');
                    return;
                }
                // Fecha todos os popups relacionados imediatamente
                const powerCastPopup = document.getElementById('power-cast-popup');
                if (powerCastPopup) powerCastPopup.remove();
                const powerCastOverlay = document.getElementById('power-cast-overlay');
                if (powerCastOverlay) powerCastOverlay.remove();
                const abilitiesPopup = document.getElementById('abilities-popup');
                if (abilitiesPopup) abilitiesPopup.remove();
                const abilitiesOverlay = document.getElementById('abilities-overlay');
                if (abilitiesOverlay) abilitiesOverlay.remove();
                // Calcula o total de dados (2d6 por PM)
                const totalDice = selectedPMs * 2;
                const diceSides = 6;
                const rollCommand = `/roll ${totalDice}d${diceSides}`;
                const message = `/em usou o poder "${abilityDisplayName}" (${selectedPMs} PM)`;
                executeHealingPowerWithHolyEffect(rollCommand, message);
            };
            popup.appendChild(useBtn);
            document.body.appendChild(popup);
            return;
        }
    }

    // Função para obter efeitos ativos
    function getActiveEffects() {
        const activeEffects = localStorage.getItem('roll20-hotbar-active-effects');
        return activeEffects ? JSON.parse(activeEffects) : [];
    }

    // Função para salvar efeitos ativos
    function saveActiveEffects(effects) {
        localStorage.setItem('roll20-hotbar-active-effects', JSON.stringify(effects));
    }

    // Função para verificar se um efeito está ativo
    function isEffectActive(effectName) {
        const activeEffects = getActiveEffects();
        const activeSelectableCards = getActiveSelectableCards();
        return activeEffects.includes(effectName) || activeSelectableCards.includes(effectName);
    }

    // Função para ativar/desativar efeito
    function toggleEffect(effectName, silent = false) {
        const activeEffects = getActiveEffects();
        const index = activeEffects.indexOf(effectName);

        if (index > -1) {
            // Remove o efeito
            activeEffects.splice(index, 1);

            // Remove da ordem
            const itemEffectData = getItemEffectData(effectName);
            if (itemEffectData) {
                removeEffectFromOrder(effectName, 'item');
            } else {
                removeEffectFromOrder(effectName, 'food');
            }

            if (!silent) {
                showWarningNotification(`Efeito "${effectName}" desativado.`);
            }
        } else {
            // Adiciona o efeito
            activeEffects.push(effectName);

            // Adiciona à ordem
            const itemEffectData = getItemEffectData(effectName);
            if (itemEffectData) {
                addEffectToOrder(effectName, 'item');
            } else {
                addEffectToOrder(effectName, 'food');
            }

            if (!silent) {
                showSuccessNotification(`Efeito "${effectName}" ativado!`);
            }
        }

        saveActiveEffects(activeEffects);
        updateEffectsBadge();
        updateEffectsVisualIndicators(); // Atualiza indicadores visuais
        return activeEffects;
    }

    // Função para atualizar o badge de efeitos
    function updateEffectsBadge() {
        const effectsButton = document.querySelector('#roll20-hotbar button[data-label="Efeitos"]');
        if (!effectsButton) {
            console.log('Botão de efeitos não encontrado');
            return;
        }

        // Remove badge existente se houver
        const existingBadge = effectsButton.querySelector('.hotbar-button-badge');
        if (existingBadge) {
            existingBadge.remove();
        }

        // Verifica efeitos ativos
        const activeEffects = getActiveEffects();
        const activeSelectableCards = getActiveSelectableCards();
        const totalActiveEffects = activeEffects.length + activeSelectableCards.length;
        console.log('Efeitos ativos:', activeEffects);
        console.log('Selectable cards ativos:', activeSelectableCards);

        // Cria novo badge se há efeitos ativos
        if (totalActiveEffects > 0) {
            const badge = document.createElement('div');
            badge.className = 'hotbar-button-badge';
            badge.style.position = 'absolute';
            badge.style.top = '-2px';
            badge.style.right = '-2px';
            badge.style.background = '#4caf50';
            badge.style.color = '#fff';
            badge.style.borderRadius = '50%';
            badge.style.width = '16px';
            badge.style.height = '16px';
            badge.style.fontSize = '10px';
            badge.style.fontWeight = 'bold';
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.border = '2px solid #23243a';
            badge.style.zIndex = '1000';
            badge.textContent = totalActiveEffects;
            effectsButton.appendChild(badge);
            console.log('Badge criado com valor:', totalActiveEffects);
        } else {
            console.log('Nenhum efeito ativo, badge não criado');
        }
    }
    // NOVO: Sistema de Cache de Imagens
    // Função para obter o cache de imagens
    function getImageCache() {
        try {
            const cache = localStorage.getItem(IMAGE_CACHE_KEY);
            if (!cache) return { version: IMAGE_CACHE_VERSION, images: {} };

            const parsedCache = JSON.parse(cache);

            // Verifica se a versão do cache é compatível
            if (parsedCache.version !== IMAGE_CACHE_VERSION) {
                console.log('Versão do cache de imagens desatualizada, limpando...');
                clearImageCache();
                return { version: IMAGE_CACHE_VERSION, images: {} };
            }

            // Garante que o objeto tem a estrutura correta
            return {
                version: parsedCache.version || IMAGE_CACHE_VERSION,
                images: parsedCache.images || {}
            };
        } catch (error) {
            console.error('Erro ao carregar cache de imagens:', error);
            return { version: IMAGE_CACHE_VERSION, images: {} };
        }
    }

    // NOVO: Sistema de Condições

    // Função para obter condições ativas
    function getActiveConditions() {
        const activeConditions = localStorage.getItem('roll20-hotbar-active-conditions');
        return activeConditions ? JSON.parse(activeConditions) : [];
    }

    // Função para salvar condições ativas
    function saveActiveConditions(conditions) {
        localStorage.setItem('roll20-hotbar-active-conditions', JSON.stringify(conditions));
    }



    // Função para ativar/desativar condição
    function toggleCondition(conditionName) {
        const activeConditions = getActiveConditions();
        const index = activeConditions.indexOf(conditionName);

        if (index > -1) {
            activeConditions.splice(index, 1);
            // Remove também do sistema de efeitos ativos
            toggleEffect(conditionName, true); // Modo silencioso
            // Remove da ordem
            removeEffectFromOrder(conditionName, 'condition');
            showWarningNotification(`Condição "${conditionName}" removida.`);
        } else {
            activeConditions.push(conditionName);
            // Adiciona também ao sistema de efeitos ativos
            toggleEffect(conditionName, true); // Modo silencioso
            // Adiciona à ordem
            addEffectToOrder(conditionName, 'condition');
            showSuccessNotification(`Condição "${conditionName}" aplicada!`);

            // Envia roll template para o chat
            sendConditionToChat(conditionName);
        }

        saveActiveConditions(activeConditions);
        updateEffectsVisualIndicators(); // Atualiza indicadores visuais unificados
        updateEffectsBadge(); // Atualiza o badge de efeitos
        const activeEffects = getActiveEffects();
        return activeEffects;
    }

    // Função para obter dados de uma condição
    function getConditionData(conditionName) {
        const conditions = getConditionsList();
        return conditions.find(condition => condition.nome === conditionName);
    }

    // Função para enviar condição para o chat com roll template
    function sendConditionToChat(conditionName) {
        const conditionData = getConditionData(conditionName);
        if (!conditionData) return;

        // Cria o roll template usando t20-info padrão
        const template = `&{template:t20-info}{{infoname=${conditionName} ${conditionData.icone || '⚡'}}}{{description=Categoria: ${conditionData.categoria || 'Status'}
${conditionData.efeitos || conditionData.descricao}}}`;

        sendToChat(template);
    }

    // Função para obter dados de um efeito de item
    function getItemEffectData(effectKey) {
        const itemEffects = getItemEffectsList();
        return itemEffects.find(effect => effect.effectKey === effectKey);
    }

    // Função para obter lista de efeitos de item
    function getItemEffectsList() {
        return [
            {
                name: 'Cachecol Sombrio',
                description: 'Efeito de Dano: Todos os ataques melee recebem +1d6 de dano furtivo. Efeito acumulativo com outros ataques furtivos.',
                type: 'Item',
                effectKey: 'cachecol_sombrio',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_ambush.jpg',
                icone: '⚔️'
            }
        ];
    }

    // Sistema de ordem dos efeitos
    const EFFECTS_ORDER_KEY = 'roll20-hotbar-effects-order';

    // Função para obter a ordem dos efeitos
    function getEffectsOrder() {
        try {
            return JSON.parse(localStorage.getItem(EFFECTS_ORDER_KEY) || '[]');
        } catch (e) {
            console.error('Erro ao carregar ordem dos efeitos:', e);
            return [];
        }
    }

    // Função para salvar a ordem dos efeitos
    function saveEffectsOrder(order) {
        try {
            localStorage.setItem(EFFECTS_ORDER_KEY, JSON.stringify(order));
        } catch (e) {
            console.error('Erro ao salvar ordem dos efeitos:', e);
        }
    }

    // Função para adicionar um efeito à ordem
    function addEffectToOrder(effectKey, effectType) {
        const order = getEffectsOrder();
        const effectId = `${effectType}:${effectKey}`;

        // Remove se já existe (para readicionar no início)
        const existingIndex = order.findIndex(item => item.id === effectId);
        if (existingIndex !== -1) {
            order.splice(existingIndex, 1);
        }

        // Adiciona no início da lista
        order.unshift({
            id: effectId,
            effectKey: effectKey,
            effectType: effectType,
            timestamp: Date.now()
        });

        saveEffectsOrder(order);
    }
    // Função para remover um efeito da ordem
    function removeEffectFromOrder(effectKey, effectType) {
        const order = getEffectsOrder();
        const effectId = `${effectType}:${effectKey}`;

        const index = order.findIndex(item => item.id === effectId);
        if (index !== -1) {
            order.splice(index, 1);
            saveEffectsOrder(order);
        }
    }

    // Função para obter efeitos ordenados
    function getOrderedEffects() {
        const order = getEffectsOrder();
        const activeEffects = getActiveEffects();
        const activeConditions = getActiveConditions();

        // Filtra apenas efeitos ativos e mantém a ordem
        return order.filter(item => {
            if (item.effectType === 'condition') {
                return activeConditions.includes(item.effectKey);
            } else if (item.effectType === 'food') {
                return activeEffects.includes(item.effectKey);
            } else if (item.effectType === 'drink') {
                return activeEffects.includes(item.effectKey);
            } else if (item.effectType === 'potion') {
                return activeEffects.includes(item.effectKey);
            } else if (item.effectType === 'item') {
                return activeEffects.includes(item.effectKey);
            }
            return false;
        });
    }

    // Função para obter lista completa de condições
    function getConditionsList() {
        return [
            {
                nome: 'Abalado',
                descricao: 'Condição de medo que afeta a confiança do personagem.',
                descricaoCompleta: 'O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado. *Medo.*',
                efeitos: '-2 em testes de perícia • Progressão: se aplicado novamente, torna-se apavorado',
                categoria: 'Medo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
                icone: '😰'
            },
            {
                nome: 'Agarrado',
                descricao: 'O personagem está sendo segurado ou imobilizado por uma criatura.',
                descricaoCompleta: 'O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado. *Movimento.*',
                efeitos: '-2 em testes de ataque • Só pode usar armas leves • Ataques à distância têm 50% de chance de errar o alvo',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
                icone: '🤝'
            },
            {
                nome: 'Alquebrado',
                descricao: 'O personagem está mentalmente esgotado, dificultando o uso de habilidades.',
                descricaoCompleta: 'O custo em pontos de mana das habilidades do personagem aumenta em +1. *Mental.*',
                efeitos: '+1 PM no custo de todas as habilidades',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '🧠'
            },
            {
                nome: 'Apavorado',
                descricao: 'Medo extremo que paralisa o personagem diante da fonte do terror.',
                descricaoCompleta: 'O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo. *Medo.*',
                efeitos: '-5 em testes de perícia • Não pode se aproximar voluntariamente da fonte do medo',
                categoria: 'Medo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg',
                icone: '😱'
            },
            {
                nome: 'Atordoado',
                descricao: 'O personagem está confuso e desorientado, incapaz de agir.',
                descricaoCompleta: 'O personagem fica desprevenido e não pode fazer ações. *Mental.*',
                efeitos: 'Não pode fazer ações • Fica desprevenido',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
                icone: '💫'
            },
            {
                nome: 'Caído',
                descricao: 'O personagem está no chão, em posição vulnerável.',
                descricaoCompleta: 'O personagem sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições). Além disso, sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m.',
                efeitos: '-5 na Defesa vs ataques corpo a corpo • +5 na Defesa vs ataques à distância • -5 em ataques corpo a corpo • Deslocamento 1,5m',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbindtotem.jpg',
                icone: '🛐'
            },
            {
                nome: 'Cego',
                descricao: 'O personagem não consegue ver, perdendo a capacidade de perceber visualmente.',
                descricaoCompleta: 'O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro. *Sentidos.*',
                efeitos: '-5 em testes de Força/Destreza • Todos os alvos recebem camuflagem total • Fica desprevenido e lento',
                categoria: 'Sentidos',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
                icone: '👁️'
            },
            {
                nome: 'Confuso',
                descricao: 'O personagem age de forma aleatória e imprevisível.',
                descricaoCompleta: 'O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente. *Mental.*',
                efeitos: 'Role 1d6 no início do turno: 1) Move aleatoriamente • 2-3) Não age • 4-5) Ataca mais próximo • 6) Recupera',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
                icone: '🤪'
            },
            {
                nome: 'Debilitado',
                descricao: 'Fraqueza física severa que afeta todos os atributos físicos.',
                descricaoCompleta: 'O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.',
                efeitos: '-5 em Força, Destreza, Constituição e perícias físicas • Progressão: se aplicado novamente, torna-se inconsciente',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '😵'
            },
            {
                nome: 'Desprevenido',
                descricao: 'O personagem não está preparado para reagir a ameaças.',
                descricaoCompleta: 'O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.',
                efeitos: '-5 na Defesa • -5 em Reflexos • Vulnerável a ataques surpresa',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
                icone: '😳'
            },
            {
                nome: 'Doente',
                descricao: 'O personagem está sofrendo os efeitos de uma doença.',
                descricaoCompleta: 'Sob efeito de uma doença. *Metabolismo.*',
                efeitos: 'Efeitos variam conforme a doença específica',
                categoria: 'Metabolismo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
                icone: '🤒'
            },
            {
                nome: 'Em Chamas',
                descricao: 'O personagem está queimando e sofrendo dano contínuo.',
                efeitos: '1d6 dano de fogo por turno • Ação padrão para apagar • Água também apaga',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_immolation.jpg',
                icone: '🔥'
            },
            {
                nome: 'Enfeitiçado',
                descricao: 'O personagem vê a fonte da condição de forma extremamente favorável.',
                efeitos: 'A fonte recebe +10 em Diplomacia • Não fica sob controle direto',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
                icone: '💫'
            },
            {
                nome: 'Enjoado',
                descricao: 'Náuseas e mal-estar que limitam as ações do personagem.',
                efeitos: 'Apenas 1 ação por rodada (padrão OU movimento) • Investida limitada ao deslocamento normal',
                categoria: 'Metabolismo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
                icone: '🤢'
            },
            {
                nome: 'Enredado',
                descricao: 'O personagem está preso por teias, cordas ou similar.',
                efeitos: '-2 em testes de ataque • Fica lento e vulnerável',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
                icone: '🕸️'
            },
            {
                nome: 'Envenenado',
                descricao: 'O personagem está sob efeito de um veneno.',
                efeitos: 'Efeitos variam conforme o veneno • Dano recorrente é cumulativo',
                categoria: 'Veneno',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
                icone: '☠️'
            },
            {
                nome: 'Esmorecido',
                descricao: 'Fraqueza mental severa que afeta todos os atributos mentais.',
                efeitos: '-5 em Inteligência, Sabedoria, Carisma e perícias mentais',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '😞'
            },
            {
                nome: 'Exausto',
                descricao: 'Cansaço extremo que combina múltiplas condições.',
                efeitos: 'Combina debilitado + lento + vulnerável • Progressão: se aplicado novamente, torna-se inconsciente',
                categoria: 'Cansaço',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '😴'
            },
            {
                nome: 'Fascinado',
                descricao: 'O personagem está hipnotizado por algo específico.',
                efeitos: '-5 em Percepção • Só pode observar o que o fascinou • Quebrado por ações hostis',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg',
                icone: '😵'
            },
            {
                nome: 'Fatigado',
                descricao: 'Cansaço moderado que afeta a performance do personagem.',
                efeitos: 'Combina fraco + vulnerável • Progressão: se aplicado novamente, torna-se exausto',
                categoria: 'Cansaço',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg',
                icone: '😪'
            },
            {
                nome: 'Fraco',
                descricao: 'Fraqueza física leve que afeta os atributos físicos.',
                efeitos: '-2 em Força, Destreza, Constituição e perícias físicas • Progressão: se aplicado novamente, torna-se debilitado',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '😣'
            },
            {
                nome: 'Frustrado',
                descricao: 'Fraqueza mental leve que afeta os atributos mentais.',
                efeitos: '-2 em Inteligência, Sabedoria, Carisma e perícias mentais • Progressão: se aplicado novamente, torna-se esmorecido',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
                icone: '😤'
            },
            {
                nome: 'Imóvel',
                descricao: 'O personagem não consegue se mover de forma alguma.',
                efeitos: 'Deslocamento reduzido a 0m • Pode ainda realizar ações que não envolvem movimento',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
                icone: '🛑'
            },
            {
                nome: 'Inconsciente',
                descricao: 'O personagem está desmaiado e completamente indefeso.',
                efeitos: 'Fica indefeso • Não pode fazer ações ou reações • Ainda pode fazer testes automáticos • Balançar para acordar gasta ação padrão',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg',
                icone: '😵'
            },
            {
                nome: 'Indefeso',
                descricao: 'Vulnerabilidade extrema que deixa o personagem completamente exposto.',
                efeitos: '-10 na Defesa • Falha automaticamente em Reflexos • Pode sofrer golpes de misericórdia',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
                icone: '💀'
            },
            {
                nome: 'Invisível',
                descricao: 'O personagem não pode ser visto por meios normais.',
                efeitos: '+20 em Furtividade • Imunidade a ataques que dependem de visão • Primeiro ataque tem bônus',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
                icone: '👻'
            },
            {
                nome: 'Lento',
                descricao: 'O personagem se move com dificuldade, reduzindo sua mobilidade.',
                efeitos: 'Deslocamento reduzido à metade • Não pode correr ou fazer investidas',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
                icone: '🐌'
            },
            {
                nome: 'Ofuscado',
                descricao: 'Visão prejudicada que afeta a precisão e percepção.',
                efeitos: '-2 em testes de ataque • -2 em testes de Percepção',
                categoria: 'Sentidos',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
                icone: '😵‍💫'
            },
            {
                nome: 'Paralisado',
                descricao: 'O personagem está completamente paralisado, incapaz de se mover.',
                efeitos: 'Fica imóvel e indefeso • Só pode realizar ações puramente mentais',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbindtotem.jpg',
                icone: '🧊'
            },
            {
                nome: 'Pasmo',
                descricao: 'Choque ou surpresa que impede qualquer ação.',
                efeitos: 'Não pode fazer ações • Condição temporária',
                categoria: 'Mental',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
                icone: '😶'
            },
            {
                nome: 'Petrificado',
                descricao: 'O personagem foi transformado em pedra.',
                efeitos: 'Fica inconsciente • Recebe redução de dano 8 • Imunidade a dano',
                categoria: 'Metamorfose',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg',
                icone: '🗿'
            },
            {
                nome: 'Sangrando',
                descricao: 'O personagem está perdendo sangue continuamente.',
                efeitos: 'Teste de Constituição (CD 15) por turno • Falha = 1d6 dano • Sucesso = remove condição',
                categoria: 'Metabolismo',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg',
                icone: '🩸'
            },
            {
                nome: 'Sobrecarregado',
                descricao: 'O personagem está carregando peso excessivo.',
                efeitos: 'Penalidade de armadura -5 • Deslocamento reduzido em -3m',
                categoria: 'Movimento',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
                icone: '⚖️'
            },
            {
                nome: 'Surdo',
                descricao: 'O personagem não consegue ouvir sons.',
                efeitos: '-5 em Iniciativa • Não pode fazer testes de Percepção auditiva • Condição ruim para magias',
                categoria: 'Sentidos',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soulleech.jpg',
                icone: '🔇'
            },
            {
                nome: 'Surpreendido',
                descricao: 'O personagem foi pego desprevenido no início do combate.',
                efeitos: 'Fica desprevenido • Não pode fazer ações • Condição do primeiro turno',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
                icone: '😲'
            },
            {
                nome: 'Vulnerável',
                descricao: 'O personagem está em posição que facilita ataques inimigos.',
                efeitos: '-2 na Defesa • Mais suscetível a ataques',
                categoria: 'Status',
                iconeUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
                icone: '💔'
            }
        ];
    }

    // Função para salvar o cache de imagens
    function saveImageCache(cache) {
        try {
            localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(cache));
        } catch (error) {
            console.error('Erro ao salvar cache de imagens:', error);
        }
    }

    // Função para limpar o cache de imagens
    function clearImageCache() {
        try {
            localStorage.removeItem(IMAGE_CACHE_KEY);
            console.log('Cache de imagens limpo');
        } catch (error) {
            console.error('Erro ao limpar cache de imagens:', error);
        }
    }

    // Função para obter uma imagem do cache ou carregar e cachear
    function getCachedImage(url) {
        return new Promise((resolve) => {
            const cache = getImageCache();

            // Verifica se a imagem está no cache
            if (cache.images && cache.images[url]) {
                console.log(`Imagem carregada do cache: ${url}`);
                resolve(cache.images[url]);
                return;
            }

            // Se não está no cache, carrega e cacheia
            console.log(`Carregando e cacheando imagem: ${url}`);

            // Cria um canvas para converter a imagem para base64
            const img = new Image();
            img.crossOrigin = 'anonymous'; // Permite CORS para imagens externas

            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Define o tamanho do canvas baseado na imagem
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;

                    // Desenha a imagem no canvas
                    ctx.drawImage(img, 0, 0);

                    // Converte para base64
                    const dataUrl = canvas.toDataURL('image/png');

                    // Salva no cache (garante que images existe)
                    if (!cache.images) cache.images = {};
                    cache.images[url] = dataUrl;
                    saveImageCache(cache);

                    console.log(`Imagem cacheada com sucesso: ${url}`);
                    resolve(dataUrl);
                } catch (error) {
                    console.error(`Erro ao cachear imagem ${url}:`, error);
                    // Em caso de erro, retorna null para usar fallback
                    resolve(null);
                }
            };

            img.onerror = () => {
                console.warn(`Erro ao carregar imagem ${url}, usando fallback`);
                resolve(null);
            };

            img.src = url;
        });
    }

    // Função para pré-carregar todas as imagens conhecidas
    async function preloadKnownImages() {
        console.log('Iniciando pré-carregamento de imagens...');

        // Lista de todas as URLs de imagens conhecidas
        const knownImageUrls = [
            // Ícones de pratos
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_60.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/achievement_halloween_candy_01.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_cauldron_frost.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_103_potatobread.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_fishcake.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_144_cakeslice.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_swirlingmistsoup.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_sauteedcarrots.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_06.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_161_fish_white.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_meat_cooked_08.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_cask_04.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_cooking_90_cinnamonbonefishstew.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_orchardfruit01.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_deliciouspizza.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_123_roast.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_18.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_goldcarpconsomme.jpg',

            // Ícones de condições
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbindtotem.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soulleech.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathpact.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholyfrenzy.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_braisedturtle.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_cooked_valleystirfry.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_slime_02.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_63.jpg',
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_10.jpg',
            // Ícone padrão
            'https://wow.zamimg.com/images/wow/icons/large/inv_misc_fork-knife.jpg'
        ];

        const cache = getImageCache();
        let loadedCount = 0;
        let cachedCount = 0;

        // Carrega imagens em paralelo (máximo 5 por vez para não sobrecarregar)
        const batchSize = 5;
        for (let i = 0; i < knownImageUrls.length; i += batchSize) {
            const batch = knownImageUrls.slice(i, i + batchSize);

            await Promise.all(batch.map(async (url) => {
                if (cache.images[url]) {
                    cachedCount++;
                    return;
                }

                try {
                    await getCachedImage(url);
                    loadedCount++;
                } catch (error) {
                    console.warn(`Erro ao pré-carregar ${url}:`, error);
                }
            }));

            // Pequena pausa entre batches para não sobrecarregar
            if (i + batchSize < knownImageUrls.length) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        console.log(`Pré-carregamento concluído: ${loadedCount} novas imagens carregadas, ${cachedCount} já estavam no cache`);
    }
    // Função para criar elemento de imagem com cache
    function createCachedImageElement(url, alt, fallbackEmoji = '🍽️', options = {}) {
        const {
            width = '100%',
            height = '100%',
            borderRadius = '4px',
            objectFit = 'cover',
            showSkeleton = true,
            onLoad = null,
            onError = null
        } = options;

        // Container principal
        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = '100%';
        container.style.height = '100%';

        // Skeleton loader (se habilitado)
        let skeleton = null;
        if (showSkeleton) {
            skeleton = document.createElement('div');
            skeleton.style.width = '100%';
            skeleton.style.height = '100%';
            skeleton.style.background = 'linear-gradient(90deg, #23243a 25%, #2c2d4a 50%, #23243a 75%)';
            skeleton.style.backgroundSize = '200px 100%';
            skeleton.style.animation = 'skeleton-loading 1.2s infinite linear';
            skeleton.style.borderRadius = borderRadius;
            container.appendChild(skeleton);
        }

        // Emoji fallback (inicialmente oculto)
        const emojiFallback = document.createElement('div');
        emojiFallback.textContent = fallbackEmoji;
        emojiFallback.style.fontSize = '20px';
        emojiFallback.style.display = 'none';
        emojiFallback.style.position = 'absolute';
        emojiFallback.style.top = '0';
        emojiFallback.style.left = '0';
        emojiFallback.style.width = '100%';
        emojiFallback.style.height = '100%';
        emojiFallback.style.display = 'flex';
        emojiFallback.style.alignItems = 'center';
        emojiFallback.style.justifyContent = 'center';
        emojiFallback.style.zIndex = '2';
        container.appendChild(emojiFallback);

        // Imagem
        const img = document.createElement('img');
        img.alt = alt;
        img.style.width = width;
        img.style.height = height;
        img.style.objectFit = objectFit;
        img.style.borderRadius = borderRadius;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.zIndex = '3';

        // Carrega a imagem do cache ou da URL
        getCachedImage(url).then(cachedUrl => {
            if (cachedUrl) {
                img.src = cachedUrl;
            } else {
                // Se não conseguiu cachear, tenta carregar diretamente
                img.src = url;
            }
        });

        // Event handlers
        img.onload = () => {
            if (skeleton) skeleton.style.display = 'none';
            if (onLoad) onLoad(img);
        };

        img.onerror = () => {
            if (skeleton) skeleton.style.display = 'none';
            img.style.display = 'none';
            emojiFallback.style.display = 'flex';
            if (onError) onError();
        };

        container.appendChild(img);
        return container;
    }

    // NOVO: Funções do Sistema de Indicadores Visuais de Pratos

    // Função para obter dados completos de um prato pelo nome
    function getPratoDataByName(nomePrato) {
        const pratos = getPratosCompletos();
        return pratos.find(prato => prato.nome === nomePrato);
    }

    // Função para obter dados completos de uma bebida pelo nome
    function getBebidaDataByName(nomeBebida) {
        const bebidas = getBebidasCompletas();
        return bebidas.find(bebida => bebida.nome === nomeBebida);
    }

    // Função para atualizar os indicadores visuais unificados (pratos e condições)
    function updateEffectsVisualIndicators() {
        const effectsSection = document.getElementById('effects-indicators-section');
        const effectsContainer = document.getElementById('effects-icons-container');

        if (!effectsSection || !effectsContainer) {
            console.log('Seção de indicadores de efeitos não encontrada');
            return;
        }

        // Limpa os indicadores existentes
        effectsContainer.innerHTML = '';

        // Obtém efeitos ordenados
        const orderedEffects = getOrderedEffects();

        // Verifica se há algum efeito ativo
        if (orderedEffects.length === 0) {
            // Oculta a seção se não há efeitos ativos
            effectsSection.style.display = 'none';
            return;
        }

        // Mostra a seção
        effectsSection.style.display = 'block';

        // Renderiza os efeitos na ordem correta
        orderedEffects.forEach(orderedEffect => {
            if (orderedEffect.effectType === 'food') {
                // Busca os dados do efeito de comida
                let comidaEffects = [];
                try {
                    comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                } catch (e) {
                    console.error('Erro ao carregar efeitos de comida:', e);
                    comidaEffects = [];
                }

                const foodEffect = comidaEffects.find(effect => effect.effectKey === orderedEffect.effectKey);
                if (foodEffect) {
                    const pratoData = getPratoDataByName(foodEffect.name);
                    if (pratoData) {
                        createFoodIndicatorIcon(pratoData, foodEffect);
                    }
                }
            } else if (orderedEffect.effectType === 'condition') {
                // Busca os dados da condição
                const conditionData = getConditionData(orderedEffect.effectKey);
                if (conditionData) {
                    createConditionIndicatorIcon(conditionData);
                }
            } else if (orderedEffect.effectType === 'item') {
                // Busca os dados do efeito de item
                const itemEffectData = getItemEffectData(orderedEffect.effectKey);
                if (itemEffectData) {
                    createItemEffectIndicatorIcon(itemEffectData);
                }
            } else if (orderedEffect.effectType === 'drink') {
                // Busca os dados do efeito de bebida
                let bebidaEffects = [];
                try {
                    bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                } catch (e) {
                    console.error('Erro ao carregar efeitos de bebida:', e);
                    bebidaEffects = [];
                }

                const bebidaEffect = bebidaEffects.find(effect => effect.effectKey === orderedEffect.effectKey);
                if (bebidaEffect) {
                    const bebidaData = getBebidaDataByName(bebidaEffect.name);
                    if (bebidaData) {
                        createBebidaIndicatorIcon(bebidaData, bebidaEffect);
                    }
                }
            } else if (orderedEffect.effectType === 'potion') {
                // Busca os dados do efeito de poção
                let pocaoEffects = [];
                try {
                    pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
                } catch (e) {
                    console.error('Erro ao carregar efeitos de poção:', e);
                    pocaoEffects = [];
                }

                const pocaoEffect = pocaoEffects.find(effect => effect.effectKey === orderedEffect.effectKey);
                if (pocaoEffect) {
                    const pocaoData = getPocaoDataByName(pocaoEffect.name);
                    if (pocaoData) {
                        createPocaoIndicatorIcon(pocaoData, pocaoEffect);
                    }
                }
            }
        });
    }
    // Função para criar um ícone indicador de prato consumido
    function createFoodIndicatorIcon(pratoData, effect) {
        const effectsContainer = document.getElementById('effects-icons-container');
        if (!effectsContainer) return;

        // Container principal do indicador
        const indicator = document.createElement('div');
        indicator.className = 'food-indicator';
        indicator.style.position = 'relative';
        indicator.style.width = '32px';
        indicator.style.height = '32px';
        indicator.style.borderRadius = '6px';
        indicator.style.border = '2px solid #4caf50'; // Borda verde para pratos
        indicator.style.background = '#23243a';
        indicator.style.cursor = 'pointer';
        indicator.style.transition = 'all 0.2s';
        indicator.style.overflow = 'hidden';

        // Efeitos de hover
        indicator.onmouseover = () => {
            indicator.style.transform = 'scale(1.1)';
            indicator.style.borderColor = '#66bb6a'; // Verde mais claro no hover
            // Mostra tooltip usando o template reutilizável
            createEffectHoverTooltip(indicator, pratoData, 'food');
        };

        indicator.onmouseout = () => {
            indicator.style.transform = 'scale(1)';
            indicator.style.borderColor = '#4caf50'; // Volta para verde normal
            // Esconde tooltip
            hideEffectTooltip();
        };

        // Click handler para remover o efeito
        indicator.onclick = () => {
            // Esconde o tooltip antes de remover o efeito
            hideEffectTooltip();
            removeFoodEffect(effect.effectKey);
        };

        // Usa o sistema de cache para carregar a imagem
        const iconUrl = pratoData.iconeUrl || 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_fork-knife.jpg';

        const cachedImageElement = createCachedImageElement(
            iconUrl,
            pratoData.nome,
            pratoData.icone || '🍽️',
            {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
                objectFit: 'cover',
                showSkeleton: true
            }
        );

        indicator.appendChild(cachedImageElement);

        // Adiciona indicador de duração no canto inferior direito
        const durationIndicator = document.createElement('div');
        durationIndicator.style.position = 'absolute';
        durationIndicator.style.bottom = '0';
        durationIndicator.style.right = '0';
        durationIndicator.style.background = 'rgba(0, 0, 0, 0.7)';
        durationIndicator.style.color = '#ffffff';
        durationIndicator.style.fontSize = '8px';
        durationIndicator.style.fontWeight = 'bold';
        durationIndicator.style.padding = '1px 3px';
        durationIndicator.style.borderRadius = '3px 0 4px 0';
        durationIndicator.style.lineHeight = '1';
        durationIndicator.style.minWidth = '12px';
        durationIndicator.style.textAlign = 'center';
        durationIndicator.style.border = '1px solid #000000';
        durationIndicator.style.zIndex = '10';
        durationIndicator.style.pointerEvents = 'none';

        // Determina o texto da duração baseado no nome do prato
        if (pratoData.nome === 'Batata Valkariana') {
            durationIndicator.textContent = '1x';
        } else {
            durationIndicator.textContent = '24h';
        }

        indicator.appendChild(durationIndicator);
        effectsContainer.appendChild(indicator);
    }

    // Função para remover efeito de prato
    function removeFoodEffect(effectKey) {
        // Remove do localStorage de efeitos de comida
        let comidaEffects = [];
        try {
            comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
            comidaEffects = comidaEffects.filter(e => e.effectKey !== effectKey);
            localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));
        } catch (e) {
            console.error('Erro ao remover efeito de comida:', e);
        }

        // Remove do sistema de efeitos ativos
        toggleEffect(effectKey);

        // Remove da ordem
        removeEffectFromOrder(effectKey, 'food');

        // Atualiza indicadores visuais unificados
        updateEffectsVisualIndicators();
    }

    // Função para criar um ícone indicador de bebida consumida
    function createBebidaIndicatorIcon(bebidaData, effect) {
        const effectsContainer = document.getElementById('effects-icons-container');
        if (!effectsContainer) return;

        // Container principal do indicador
        const indicator = document.createElement('div');
        indicator.className = 'bebida-indicator';
        indicator.style.position = 'relative';
        indicator.style.width = '32px';
        indicator.style.height = '32px';
        indicator.style.borderRadius = '6px';
        indicator.style.border = '2px solid #4caf50'; // Borda verde para bebidas (mesma cor dos pratos)
        indicator.style.background = '#23243a';
        indicator.style.cursor = 'pointer';
        indicator.style.transition = 'all 0.2s';
        indicator.style.overflow = 'hidden';

        // Efeitos de hover
        indicator.onmouseover = () => {
            indicator.style.transform = 'scale(1.1)';
            indicator.style.borderColor = '#66bb6a'; // Verde mais claro no hover (mesma cor dos pratos)
            // Mostra tooltip usando o template reutilizável
            createEffectHoverTooltip(indicator, bebidaData, 'drink');
        };

        indicator.onmouseout = () => {
            indicator.style.transform = 'scale(1)';
            indicator.style.borderColor = '#4caf50'; // Volta para verde normal (mesma cor dos pratos)
            // Esconde tooltip
            hideEffectTooltip();
        };

        // Click handler para remover o efeito
        indicator.onclick = () => {
            // Esconde o tooltip antes de remover o efeito
            hideEffectTooltip();
            removeBebidaEffect(effect.effectKey);
        };

        // Ícone da bebida
        if (bebidaData.iconeUrl) {
            // Usa o sistema de cache para carregar a imagem
            const cachedImageElement = createCachedImageElement(
                bebidaData.iconeUrl,
                bebidaData.nome,
                bebidaData.icone || '🍺',
                {
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    showSkeleton: false
                }
            );
            indicator.appendChild(cachedImageElement);
        } else {
            // Fallback para emoji
            const emojiElement = document.createElement('div');
            emojiElement.textContent = bebidaData.icone || '🍺';
            emojiElement.style.width = '100%';
            emojiElement.style.height = '100%';
            emojiElement.style.display = 'flex';
            emojiElement.style.alignItems = 'center';
            emojiElement.style.justifyContent = 'center';
            emojiElement.style.fontSize = '16px';
            indicator.appendChild(emojiElement);
        }

        // Adiciona indicador de duração no canto inferior direito
        const durationIndicator = document.createElement('div');
        durationIndicator.style.position = 'absolute';
        durationIndicator.style.bottom = '0';
        durationIndicator.style.right = '0';
        durationIndicator.style.background = 'rgba(0, 0, 0, 0.7)';
        durationIndicator.style.color = '#ffffff';
        durationIndicator.style.fontSize = '8px';
        durationIndicator.style.fontWeight = 'bold';
        durationIndicator.style.padding = '1px 3px';
        durationIndicator.style.borderRadius = '3px 0 4px 0';
        durationIndicator.style.lineHeight = '1';
        durationIndicator.style.minWidth = '12px';
        durationIndicator.style.textAlign = 'center';
        durationIndicator.style.border = '1px solid #000000';
        durationIndicator.style.zIndex = '10';
        durationIndicator.style.pointerEvents = 'none';

        // Determina o texto da duração baseado no nome da bebida
        if (bebidaData.nome === 'Baba de Troll') {
            durationIndicator.textContent = '1x';
        } else {
            durationIndicator.textContent = '24h';
        }

        indicator.appendChild(durationIndicator);
        effectsContainer.appendChild(indicator);
    }

    // Função para remover efeito de bebida
    function removeBebidaEffect(effectKey) {
        // Remove do localStorage de efeitos de bebida
        let bebidaEffects = [];
        try {
            bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
            bebidaEffects = bebidaEffects.filter(e => e.effectKey !== effectKey);
            localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));
        } catch (e) {
            console.error('Erro ao remover efeito de bebida:', e);
        }

        // Remove do sistema de efeitos ativos
        toggleEffect(effectKey);

        // Remove da ordem
        removeEffectFromOrder(effectKey, 'drink');

        // Atualiza indicadores visuais unificados
        updateEffectsVisualIndicators();
    }

    // Função para obter dados de uma poção pelo nome
    function getPocaoDataByName(nome) {
        const pocoes = getPocoesCompletas();
        return pocoes.find(pocao => pocao.nome === nome);
    }

    // Função para criar um ícone indicador de poção usada
    function createPocaoIndicatorIcon(pocaoData, effect) {
        const effectsContainer = document.getElementById('effects-icons-container');
        if (!effectsContainer) return;

        // Container principal do indicador
        const indicator = document.createElement('div');
        indicator.className = 'pocao-indicator';
        indicator.style.position = 'relative';
        indicator.style.width = '32px';
        indicator.style.height = '32px';
        indicator.style.borderRadius = '6px';
        indicator.style.border = '2px solid #9c27b0'; // Borda roxa para poções
        indicator.style.background = '#23243a';
        indicator.style.cursor = 'pointer';
        indicator.style.transition = 'all 0.2s';
        indicator.style.overflow = 'hidden';

        // Efeitos de hover
        indicator.onmouseover = () => {
            indicator.style.transform = 'scale(1.1)';
            indicator.style.borderColor = '#ba68c8'; // Roxo mais claro no hover
            // Mostra tooltip usando o template reutilizável
            createEffectHoverTooltip(indicator, pocaoData, 'potion');
        };

        indicator.onmouseout = () => {
            indicator.style.transform = 'scale(1)';
            indicator.style.borderColor = '#9c27b0'; // Volta para roxo normal
            // Esconde tooltip
            hideEffectTooltip();
        };

        // Click handler para remover o efeito
        indicator.onclick = () => {
            // Esconde o tooltip antes de remover o efeito
            hideEffectTooltip();
            removePocaoEffect(effect.effectKey);
        };

        // Ícone da poção
        if (pocaoData.iconeUrl) {
            // Usa o sistema de cache para carregar a imagem
            const cachedImageElement = createCachedImageElement(
                pocaoData.iconeUrl,
                pocaoData.nome,
                pocaoData.icone || '🧪',
                {
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    objectFit: 'cover',
                    showSkeleton: false
                }
            );
            indicator.appendChild(cachedImageElement);
        } else {
            // Fallback para emoji
            const emojiElement = document.createElement('div');
            emojiElement.textContent = pocaoData.icone || '🧪';
            emojiElement.style.width = '100%';
            emojiElement.style.height = '100%';
            emojiElement.style.display = 'flex';
            emojiElement.style.alignItems = 'center';
            emojiElement.style.justifyContent = 'center';
            emojiElement.style.fontSize = '16px';
            indicator.appendChild(emojiElement);
        }

        // Adiciona indicador de duração no canto inferior direito
        const durationIndicator = document.createElement('div');
        durationIndicator.style.position = 'absolute';
        durationIndicator.style.bottom = '0';
        durationIndicator.style.right = '0';
        durationIndicator.style.background = 'rgba(0, 0, 0, 0.7)';
        durationIndicator.style.color = '#ffffff';
        durationIndicator.style.fontSize = '8px';
        durationIndicator.style.fontWeight = 'bold';
        durationIndicator.style.padding = '1px 3px';
        durationIndicator.style.borderRadius = '3px 0 4px 0';
        durationIndicator.style.lineHeight = '1';
        durationIndicator.style.minWidth = '12px';
        durationIndicator.style.textAlign = 'center';
        durationIndicator.style.border = '1px solid #000000';
        durationIndicator.style.zIndex = '10';
        durationIndicator.style.pointerEvents = 'none';

        // Duração das poções é sempre por cena
        durationIndicator.textContent = 'Cena';

        indicator.appendChild(durationIndicator);
        effectsContainer.appendChild(indicator);
    }

    // Função para remover efeito de poção
    function removePocaoEffect(effectKey) {
        // Remove do localStorage de efeitos de poção
        let pocaoEffects = [];
        try {
            pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
            pocaoEffects = pocaoEffects.filter(e => e.effectKey !== effectKey);
            localStorage.setItem('roll20-hotbar-pocao-effects', JSON.stringify(pocaoEffects));
        } catch (e) {
            console.error('Erro ao remover efeito de poção:', e);
        }

        // Remove do sistema de efeitos ativos
        toggleEffect(effectKey);

        // Remove da ordem
        removeEffectFromOrder(effectKey, 'potion');

        // Atualiza indicadores visuais unificados
        updateEffectsVisualIndicators();
    }

    // NOVO: Sistema de Indicadores Visuais de Condições
    // (Agora integrado na função updateEffectsVisualIndicators)

    // Função para criar um ícone indicador de condição
    function createConditionIndicatorIcon(conditionData) {
        const effectsContainer = document.getElementById('effects-icons-container');
        if (!effectsContainer) return;

        // Container principal do indicador
        const indicator = document.createElement('div');
        indicator.className = 'condition-indicator';
        indicator.style.position = 'relative';
        indicator.style.width = '32px';
        indicator.style.height = '32px';
        indicator.style.borderRadius = '6px';
        indicator.style.border = '2px solid #ff6e6e'; // Borda vermelha (mesma cor do botão de manobras)
        indicator.style.background = '#23243a';
        indicator.style.cursor = 'pointer';
        indicator.style.transition = 'all 0.2s';
        indicator.style.overflow = 'hidden';

        // Efeitos de hover
        indicator.onmouseover = () => {
            indicator.style.transform = 'scale(1.1)';
            indicator.style.borderColor = '#ff8a8a'; // Vermelho mais claro no hover
            // Mostra tooltip usando o template reutilizável
            createEffectHoverTooltip(indicator, conditionData, 'condition');
        };

        indicator.onmouseout = () => {
            indicator.style.transform = 'scale(1)';
            indicator.style.borderColor = '#ff6e6e'; // Volta para vermelho normal
            // Esconde tooltip
            hideEffectTooltip();
        };

        // Click handler para remover a condição
        indicator.onclick = () => {
            // Esconde o tooltip antes de remover a condição
            hideEffectTooltip();
            toggleCondition(conditionData.nome);
        };

        // Usa o sistema de cache para carregar a imagem
        const iconUrl = conditionData.iconeUrl || 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg';

        const cachedImageElement = createCachedImageElement(
            iconUrl,
            conditionData.nome,
            conditionData.icone || '⚠️',
            {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
                objectFit: 'cover',
                showSkeleton: true
            }
        );

        indicator.appendChild(cachedImageElement);

        effectsContainer.appendChild(indicator);
    }

    // Sistema de selectable-cards
    const SELECTABLE_CARDS_KEY = 'roll20-hotbar-selectable-cards';

    // Função para obter selectable-cards ativos
    function getActiveSelectableCards() {
        try {
            return JSON.parse(localStorage.getItem(SELECTABLE_CARDS_KEY) || '[]');
        } catch (e) {
            console.error('Erro ao carregar selectable-cards:', e);
            return [];
        }
    }

    // Função para salvar selectable-cards ativos
    function saveActiveSelectableCards(cards) {
        try {
            localStorage.setItem(SELECTABLE_CARDS_KEY, JSON.stringify(cards));
        } catch (e) {
            console.error('Erro ao salvar selectable-cards:', e);
        }
    }



    // Função para ativar/desativar selectable-card
    function toggleSelectableCard(effectKey) {
        const activeCards = getActiveSelectableCards();
        const index = activeCards.indexOf(effectKey);

        if (index > -1) {
            activeCards.splice(index, 1);
            showWarningNotification(`Efeito removido.`);
        } else {
            activeCards.push(effectKey);
            showSuccessNotification(`Efeito ativado!`);
        }

        saveActiveSelectableCards(activeCards);
        updateEffectsBadge();
        updateEffectsVisualIndicators();
    }

    // Função para criar popup de efeitos
    function createEffectsPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('effects-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('effects-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'effects-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '10000';
        overlay.onclick = () => {
            overlay.remove();
            popup.remove();
            // Atualiza o badge após fechar o popup
            setTimeout(() => {
                updateEffectsBadge();
            }, 100);
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'effects-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #6ec6ff';
        popup.style.borderRadius = '12px';
        popup.style.padding = '18px 20px 16px 20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '400px';
        popup.style.maxHeight = '600px';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex'; header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Efeitos';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = window.Roll20Components.createCloseButton({
            text: '×',
            fontSize: '24px',
            width: '32px',
            height: '32px',
            padding: '0',
            color: '#ecf0f1',
            onClick: () => {
                popup.remove();
                const overlay = document.getElementById('effects-overlay');
                if (overlay) overlay.remove();

                // Atualiza o badge após fechar o popup
                setTimeout(() => {
                    updateEffectsBadge();
                }, 100);
            }
        }); header.appendChild(title);
        header.appendChild(closeBtn.render());
        popup.appendChild(header);



        // Lista de efeitos disponíveis (convertidos para selectable-cards)
        const effects = [
            {
                title: 'Cachecol Sombrio',
                description: 'Efeito de Dano: Todos os ataques melee recebem +1d6 de dano furtivo. Efeito acumulativo com outros ataques furtivos.',
                chips: ['+1d6', 'Furtivo', 'Melee'],
                type: 'Item',
                effectKey: 'cachecol_sombrio'
            }
        ];

        // Lista de selectable-cards vazia (removidos os itens estáticos)
        const selectableCards = [];

        // Efeitos de comida (convertidos para selectable-cards)
        let comidaEffects = [];
        try {
            comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
        } catch (e) {
            console.error('Erro ao carregar efeitos de comida:', e);
            comidaEffects = [];
        }
        // Só mostra efeitos de comida que estão ativos
        const activeEffects = getActiveEffects();
        const activeComidaEffects = comidaEffects.filter(e => activeEffects.includes(e.effectKey)).map(effect => {
            // Extrai bônus da descrição para criar chips
            let bonus = '';
            let desc = effect.description;

            // Procura por padrões de bônus na descrição
            const bonusPatterns = [
                /\+[^.]*$/i,  // +algo no final
                /\+[^,]*$/i,  // +algo no final (antes de vírgula)
                /\+[^!]*$/i   // +algo no final (antes de exclamação)
            ];

            for (const pattern of bonusPatterns) {
                const match = desc.match(pattern);
                if (match) {
                    bonus = match[0].trim();
                    desc = desc.substring(0, desc.lastIndexOf(match[0])).trim();
                    break;
                }
            }

            // Se não encontrou padrão, tenta extrair após último ponto
            if (!bonus) {
                const ponto = desc.lastIndexOf('.');
                if (ponto !== -1 && ponto < desc.length - 1) {
                    const afterPonto = desc.substring(ponto + 1).trim();
                    if (afterPonto && afterPonto.length > 0) {
                        bonus = afterPonto;
                        desc = desc.substring(0, ponto + 1).trim();
                    }
                }
            }

            return {
                title: effect.name,
                description: desc,
                chips: bonus ? [bonus, 'Comida', '24h'] : ['Comida', '24h'],
                type: 'Comida',
                effectKey: effect.effectKey
            };
        });

        // Efeitos de bebida (convertidos para selectable-cards)
        let bebidaEffects = [];
        try {
            bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
        } catch (e) {
            console.error('Erro ao carregar efeitos de bebida:', e);
            bebidaEffects = [];
        }
        // Só mostra efeitos de bebida que estão ativos
        const activeBebidaEffects = bebidaEffects.filter(e => activeEffects.includes(e.effectKey)).map(effect => {
            return {
                title: effect.name,
                description: effect.description,
                chips: ['Bebida', '24h'],
                type: 'Bebida',
                effectKey: effect.effectKey
            };
        });

        // Carrega efeitos de poção
        let pocaoEffects = [];
        try {
            pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
        } catch (e) {
            console.error('Erro ao carregar efeitos de poção:', e);
            pocaoEffects = [];
        }
        // Só mostra efeitos de poção que estão ativos
        const activePocaoEffects = pocaoEffects.filter(e => activeEffects.includes(e.effectKey)).map(effect => {
            return {
                title: effect.name,
                description: effect.description,
                chips: ['Poção', 'Cena'],
                type: 'Poção',
                effectKey: effect.effectKey
            };
        });

        // Efeitos de condições (convertidos para selectable-cards)
        const activeConditions = getActiveConditions();
        const conditionsEffects = activeConditions.map(conditionName => {
            const conditionData = getConditionData(conditionName);
            return {
                title: conditionData ? conditionData.nome : conditionName,
                description: conditionData ? conditionData.descricao : '',
                chips: conditionData && conditionData.efeitos ? [conditionData.efeitos.split('•')[0].trim(), 'Condição'] : ['Condição'],
                type: 'Condição',
                effectKey: conditionName
            };
        });

        // Junta efeitos normais, de comida, bebida, poção, condições e selectable-cards
        const allEffects = [...effects, ...activeComidaEffects, ...activeBebidaEffects, ...activePocaoEffects, ...conditionsEffects, ...selectableCards];

        // Lista visual
        const effectsList = document.createElement('div');
        effectsList.style.display = 'flex';
        effectsList.style.flexDirection = 'column';
        effectsList.style.gap = '8px';
        effectsList.style.marginTop = '2px';
        popup.appendChild(effectsList);

        function updateEffectsList() {
            effectsList.innerHTML = '';

            allEffects.forEach(effect => {
                const isActive = isEffectActive(effect.effectKey);

                const effectContainer = document.createElement('div');
                effectContainer.style.background = isActive ? '#2d4a3e' : '#23243a';
                effectContainer.style.border = `1px solid ${isActive ? '#4caf50' : '#6ec6ff'}`;
                effectContainer.style.borderRadius = '8px';
                effectContainer.style.padding = '12px';
                effectContainer.style.cursor = 'pointer';
                effectContainer.style.transition = 'all 0.2s';

                effectContainer.onmouseover = () => {
                    effectContainer.style.background = isActive ? '#3d5a4e' : '#2a2b4a';
                };

                effectContainer.onmouseout = () => {
                    effectContainer.style.background = isActive ? '#2d4a3e' : '#23243a';
                };

                effectContainer.onclick = () => {
                    // Todos os efeitos agora são tratados como selectable-cards
                    if (effect.type === 'Condição') {
                        toggleCondition(effect.effectKey);

                        // Fechar todos os popups relacionados às condições para limpar a cena
                        const conditionsPopup = document.getElementById('conditions-popup');
                        if (conditionsPopup) conditionsPopup.remove();
                        const conditionsOverlay = document.getElementById('conditions-overlay');
                        if (conditionsOverlay) conditionsOverlay.remove();
                        const conditionDetailsPopup = document.getElementById('condition-details-popup');
                        if (conditionDetailsPopup) conditionDetailsPopup.remove();
                        const conditionDetailsOverlay = document.getElementById('condition-details-overlay');
                        if (conditionDetailsOverlay) conditionDetailsOverlay.remove();
                        const effectsPopup = document.getElementById('effects-popup');
                        if (effectsPopup) effectsPopup.remove();
                        const effectsOverlay = document.getElementById('effects-overlay');
                        if (effectsOverlay) effectsOverlay.remove();
                    } else if (effect.type === 'Selectable') {
                        toggleSelectableCard(effect.effectKey);
                    } else if (effect.type === 'Comida') {
                        // Remove do sistema de comida e adiciona/remove do selectable
                        const activeEffects = getActiveEffects();
                        const index = activeEffects.indexOf(effect.effectKey);
                        if (index > -1) {
                            activeEffects.splice(index, 1);
                            let comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                            comidaEffects = comidaEffects.filter(e => e.effectKey !== effect.effectKey);
                            localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));
                            saveActiveEffects(activeEffects);
                            showWarningNotification(`Efeito "${effect.title}" removido.`);
                        } else {
                            activeEffects.push(effect.effectKey);
                            let comidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-comida-effects') || '[]');
                            comidaEffects = comidaEffects.filter(e => e.effectKey !== effect.effectKey);
                            comidaEffects.push({
                                name: effect.title,
                                description: effect.description,
                                type: 'Comida',
                                effectKey: effect.effectKey
                            });
                            localStorage.setItem('roll20-hotbar-comida-effects', JSON.stringify(comidaEffects));
                            saveActiveEffects(activeEffects);
                            showSuccessNotification(`Efeito "${effect.title}" ativado!`);
                        }
                    } else if (effect.type === 'Bebida') {
                        // Remove do sistema de bebida e adiciona/remove do selectable
                        const activeEffects = getActiveEffects();
                        const index = activeEffects.indexOf(effect.effectKey);
                        if (index > -1) {
                            activeEffects.splice(index, 1);
                            let bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                            bebidaEffects = bebidaEffects.filter(e => e.effectKey !== effect.effectKey);
                            localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));
                            saveActiveEffects(activeEffects);
                            showWarningNotification(`Efeito "${effect.title}" removido.`);
                        } else {
                            activeEffects.push(effect.effectKey);
                            let bebidaEffects = JSON.parse(localStorage.getItem('roll20-hotbar-bebida-effects') || '[]');
                            bebidaEffects = bebidaEffects.filter(e => e.effectKey !== effect.effectKey);
                            bebidaEffects.push({
                                name: effect.title,
                                description: effect.description,
                                type: 'Bebida',
                                effectKey: effect.effectKey
                            });
                            localStorage.setItem('roll20-hotbar-bebida-effects', JSON.stringify(bebidaEffects));
                            saveActiveEffects(activeEffects);
                            showSuccessNotification(`Efeito "${effect.title}" ativado!`);
                        }
                    } else if (effect.type === 'Poção') {
                        // Remove do sistema de poção e adiciona/remove do selectable
                        const activeEffects = getActiveEffects();
                        const index = activeEffects.indexOf(effect.effectKey);
                        if (index > -1) {
                            activeEffects.splice(index, 1);
                            let pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
                            pocaoEffects = pocaoEffects.filter(e => e.effectKey !== effect.effectKey);
                            localStorage.setItem('roll20-hotbar-pocao-effects', JSON.stringify(pocaoEffects));
                            saveActiveEffects(activeEffects);
                            showWarningNotification(`Efeito "${effect.title}" removido.`);
                        } else {
                            activeEffects.push(effect.effectKey);
                            let pocaoEffects = JSON.parse(localStorage.getItem('roll20-hotbar-pocao-effects') || '[]');
                            pocaoEffects = pocaoEffects.filter(e => e.effectKey !== effect.effectKey);
                            pocaoEffects.push({
                                name: effect.title,
                                description: effect.description,
                                type: 'Poção',
                                effectKey: effect.effectKey
                            });
                            localStorage.setItem('roll20-hotbar-pocao-effects', JSON.stringify(pocaoEffects));
                            saveActiveEffects(activeEffects);
                            showSuccessNotification(`Efeito "${effect.title}" ativado!`);
                        }
                    } else {
                        toggleEffect(effect.effectKey);
                    }
                    updateEffectsList();
                    updateEffectsBadge();
                    updateEffectsVisualIndicators(); // Atualiza indicadores visuais unificados
                };

                // Cabeçalho do efeito
                const effectHeader = document.createElement('div');
                effectHeader.style.display = 'flex';
                effectHeader.style.justifyContent = 'space-between';
                effectHeader.style.alignItems = 'center';
                effectHeader.style.marginBottom = '6px';

                const effectName = document.createElement('div');
                effectName.textContent = effect.title || effect.name;
                effectName.style.color = isActive ? '#4caf50' : '#6ec6ff';
                effectName.style.fontSize = '15px';
                effectName.style.fontWeight = 'bold';

                const statusIndicator = document.createElement('div');
                statusIndicator.textContent = isActive ? '●' : '○';
                statusIndicator.style.color = isActive ? '#4caf50' : '#6ec6ff';
                statusIndicator.style.fontSize = '18px';
                statusIndicator.style.fontWeight = 'bold';

                effectHeader.appendChild(effectName);
                effectHeader.appendChild(statusIndicator);
                effectContainer.appendChild(effectHeader);

                // Tipo do efeito
                const effectType = document.createElement('div');
                effectType.textContent = effect.type;
                effectType.style.background = '#6ec6ff';
                effectType.style.color = '#23243a';
                effectType.style.fontSize = '11px';
                effectType.style.fontWeight = 'bold';
                effectType.style.borderRadius = '4px';
                effectType.style.padding = '2px 8px';
                effectType.style.display = 'inline-block';
                effectType.style.width = 'fit-content';
                effectType.style.marginBottom = '6px';
                effectContainer.appendChild(effectType);

                // Descrição do efeito
                const effectDesc = document.createElement('div');
                effectDesc.textContent = effect.description;
                effectDesc.style.color = '#ecf0f1';
                effectDesc.style.fontSize = '13px';
                effectDesc.style.lineHeight = '1.4';
                effectContainer.appendChild(effectDesc);

                // Chips para todos os tipos de efeitos
                if (effect.chips && effect.chips.length > 0) {
                    const chipsContainer = document.createElement('div');
                    chipsContainer.style.display = 'flex';
                    chipsContainer.style.flexWrap = 'wrap';
                    chipsContainer.style.gap = '4px';
                    chipsContainer.style.marginTop = '8px';

                    effect.chips.forEach(chip => {
                        const chipElement = document.createElement('div');
                        chipElement.textContent = chip;
                        chipElement.style.background = '#ffb86c';
                        chipElement.style.color = '#23243a';
                        chipElement.style.fontSize = '10px';
                        chipElement.style.fontWeight = 'bold';
                        chipElement.style.padding = '2px 6px';
                        chipElement.style.borderRadius = '10px';
                        chipElement.style.border = '1px solid #ffc97a';
                        chipElement.style.display = 'inline-block';
                        chipsContainer.appendChild(chipElement);
                    });

                    effectContainer.appendChild(chipsContainer);
                }



                effectsList.appendChild(effectContainer);
            });
        }

        updateEffectsList();
        document.body.appendChild(popup);

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(popup, 'blue');
    }

    // NOVO: Sistema de Quick Search
    function createQuickSearchModal() {
        // Remove modal existente se houver
        const existingModal = document.getElementById('quick-search-modal');
        if (existingModal) existingModal.remove();
        const existingOverlay = document.getElementById('quick-search-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Cria o overlay
        const overlay = document.createElement('div');
        overlay.id = 'quick-search-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '10000';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'flex-start';
        overlay.style.paddingTop = '10vh';

        // Cria o modal
        const modal = document.createElement('div');
        modal.id = 'quick-search-modal';
        modal.style.background = 'rgba(30,30,40,0.98)';
        modal.style.border = '2px solid #6ec6ff';
        modal.style.borderRadius = '12px';
        modal.style.padding = '20px';
        modal.style.width = '600px';
        modal.style.maxWidth = '90vw';
        modal.style.maxHeight = '70vh';
        modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.gap = '15px';

        // Título
        const title = document.createElement('h2');
        title.textContent = '🔍 Busca Rápida';
        title.style.color = '#6ec6ff';
        title.style.margin = '0';
        title.style.textAlign = 'center';
        title.style.fontSize = '18px';

        // Campo de busca
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Digite para buscar... (dishes, drinks, potions, conditions, skills, spells, powers, divinity)';
        searchInput.style.padding = '12px 16px';
        searchInput.style.border = '2px solid #6ec6ff';
        searchInput.style.borderRadius = '8px';
        searchInput.style.background = 'rgba(20,20,30,0.9)';
        searchInput.style.color = '#ecf0f1';
        searchInput.style.fontSize = '14px';
        searchInput.style.width = '100%';
        searchInput.style.boxSizing = 'border-box';

        // Container de resultados
        const resultsContainer = document.createElement('div');
        resultsContainer.style.flex = '1';
        resultsContainer.style.overflowY = 'auto';
        resultsContainer.style.maxHeight = '400px';
        resultsContainer.style.border = '1px solid rgba(110,198,255,0.3)';
        resultsContainer.style.borderRadius = '8px';
        resultsContainer.style.padding = '10px';
        resultsContainer.style.background = 'rgba(20,20,30,0.5)';

        // Aplica scrollbars customizadas
        applyDirectScrollbarStyles(resultsContainer, 'blue');

        // Adiciona elementos ao modal
        modal.appendChild(title);
        modal.appendChild(searchInput);
        modal.appendChild(resultsContainer);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Foca no campo de busca
        searchInput.focus();

        // Função para buscar e filtrar resultados
        async function performSearch(query) {
            // Garante que o grimório está carregado antes de criar o índice
            if (!window.grimorioSpellsCache) {
                try {
                    window.grimorioSpellsCache = await loadSpellsDirectly();
                } catch (error) {
                    console.warn('Erro ao carregar magias para busca:', error);
                    window.grimorioSpellsCache = [];
                }
            }

            const searchIndex = createSearchIndex();
            const results = searchIndex.filter(item => {
                const searchText = `${item.name} ${item.category} ${item.description || ''} ${item.effects || ''}`.toLowerCase();
                return searchText.includes(query.toLowerCase());
            });

            // Limpa resultados anteriores
            resultsContainer.innerHTML = '';

            if (results.length === 0) {
                const noResults = document.createElement('div');
                noResults.textContent = 'Nenhum resultado encontrado.';
                noResults.style.color = '#888';
                noResults.style.textAlign = 'center';
                noResults.style.padding = '20px';
                resultsContainer.appendChild(noResults);
                return;
            }

            // Limita a 50 resultados para performance
            const limitedResults = results.slice(0, 50);

            limitedResults.forEach((item, index) => {
                const resultItem = document.createElement('div');
                resultItem.style.display = 'flex';
                resultItem.style.alignItems = 'center';
                resultItem.style.padding = '10px';
                // Only add border-bottom if it's not the last item and there are multiple items
                if (index < limitedResults.length - 1) {
                    resultItem.style.borderBottom = '1px solid rgba(110,198,255,0.2)';
                }
                resultItem.style.cursor = 'pointer';
                resultItem.style.transition = 'background 0.2s';

                // Container do ícone
                const iconContainer = document.createElement('div');
                iconContainer.style.width = '32px';
                iconContainer.style.height = '32px';
                iconContainer.style.marginRight = '10px';
                iconContainer.style.flexShrink = '0';
                iconContainer.style.borderRadius = '6px';
                iconContainer.style.border = '2px solid rgba(110,198,255,0.3)';
                iconContainer.style.background = '#23243a';
                iconContainer.style.overflow = 'hidden';
                iconContainer.style.display = 'flex';
                iconContainer.style.alignItems = 'center';
                iconContainer.style.justifyContent = 'center';

                // Tenta carregar imagem, usa emoji como fallback
                if (item.data && item.data.iconeUrl) {
                    // Usa o sistema de cache para carregar a imagem
                    const cachedImageElement = createCachedImageElement(
                        item.data.iconeUrl,
                        item.name,
                        item.icon || '📄',
                        {
                            width: '100%',
                            height: '100%',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            showSkeleton: true
                        }
                    );
                    iconContainer.appendChild(cachedImageElement);
                } else {
                    // Fallback para emoji
                    const emojiElement = document.createElement('div');
                    emojiElement.textContent = item.icon || '📄';
                    emojiElement.style.fontSize = '16px';
                    emojiElement.style.display = 'flex';
                    emojiElement.style.alignItems = 'center';
                    emojiElement.style.justifyContent = 'center';
                    emojiElement.style.width = '100%';
                    emojiElement.style.height = '100%';
                    iconContainer.appendChild(emojiElement);
                }

                // Conteúdo
                const content = document.createElement('div');
                content.style.flex = '1';

                const name = document.createElement('div');
                name.textContent = item.name;
                name.style.color = '#6ec6ff';
                name.style.fontWeight = 'bold';
                name.style.fontSize = '14px';

                const category = document.createElement('div');
                category.textContent = item.category;
                category.style.color = '#888';
                category.style.fontSize = '12px';
                category.style.marginTop = '2px';

                const description = document.createElement('div');
                description.textContent = item.description || item.effects || '';
                description.style.color = '#ecf0f1';
                description.style.fontSize = '12px';
                description.style.marginTop = '4px';
                description.style.lineHeight = '1.3';

                content.appendChild(name);
                content.appendChild(category);
                content.appendChild(description);

                resultItem.appendChild(iconContainer);
                resultItem.appendChild(content);

                // Efeitos hover
                resultItem.onmouseover = () => {
                    resultItem.style.background = 'rgba(110,198,255,0.1)';
                };
                resultItem.onmouseout = () => {
                    resultItem.style.background = 'transparent';
                };

                // Clique no item
                resultItem.onclick = () => {
                    handleSearchItemClick(item);
                };

                resultsContainer.appendChild(resultItem);
            });
        }

        // Listener para input
        searchInput.addEventListener('input', async (e) => {
            const query = e.target.value.trim();
            if (query.length >= 1) {
                await performSearch(query);
            } else {
                resultsContainer.innerHTML = '';
                const placeholder = document.createElement('div');
                placeholder.textContent = 'Digite para começar a buscar...';
                placeholder.style.color = '#888';
                placeholder.style.textAlign = 'center';
                placeholder.style.padding = '20px';
                resultsContainer.appendChild(placeholder);
            }
        });

        // Listener para teclas especiais
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
            }
        });

        // Fecha ao clicar no overlay
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        // Mostra placeholder inicial
        const placeholder = document.createElement('div');
        placeholder.textContent = 'Digite para começar a buscar...';
        placeholder.style.color = '#888';
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '20px';
        resultsContainer.appendChild(placeholder);
    }

    // Função para criar índice de busca
    function createSearchIndex() {
        const searchIndex = [];

        // Adiciona pratos
        const pratos = getPratosCompletos();
        pratos.forEach(prato => {
            searchIndex.push({
                name: prato.nome,
                category: 'Prato',
                description: prato.descricao,
                effects: prato.bonus,
                icon: prato.icone || '🍽️',
                type: 'prato',
                data: prato
            });
        });

        // Adiciona bebidas
        const bebidas = getBebidasCompletas();
        bebidas.forEach(bebida => {
            searchIndex.push({
                name: bebida.nome,
                category: 'Bebida',
                description: bebida.descricao,
                effects: bebida.efeito,
                icon: bebida.icone || '🥤',
                type: 'bebida',
                data: bebida
            });
        });

        // Adiciona poções
        const pocoes = getPocoesCompletas();
        pocoes.forEach(pocao => {
            searchIndex.push({
                name: pocao.nome,
                category: 'Poção',
                description: pocao.descricao,
                effects: pocao.efeito,
                icon: pocao.icone || '🧪',
                type: 'pocao',
                data: pocao
            });
        });

        // Adiciona condições
        const conditions = getConditionsList();
        conditions.forEach(condition => {
            searchIndex.push({
                name: condition.nome,
                category: 'Condição',
                description: condition.descricao,
                effects: condition.efeitos,
                icon: condition.icone || '⚡',
                type: 'condition',
                data: condition
            });
        });

        // Adiciona skills
        const skills = Object.keys(SKILLS_DATA);
        skills.forEach(skill => {
            const skillData = SKILLS_DATA[skill];
            searchIndex.push({
                name: skill,
                category: 'Perícia',
                description: skillData.descricao,
                effects: skillData.usos ? skillData.usos.map(u => u.titulo).join(', ') : '',
                icon: '🎯',
                type: 'skill',
                data: skillData
            });
        });

        // Adiciona magias do grimório
        const spellsCache = window.grimorioSpellsCache || [];
        if (spellsCache && spellsCache.length > 0) {
            spellsCache.forEach(spell => {
                const traditionName = spell.tradition === 'arcana' ? 'Arcana' :
                    spell.tradition === 'divina' ? 'Divina' :
                        spell.tradition === 'universal' ? 'Universal' : spell.tradition;

                const description = spell.system?.description?.value || '';

                searchIndex.push({
                    name: spell.name,
                    category: 'Magia',
                    description: `${traditionName} - ${spell.circuloDisplay} - ${spell.escola}`,
                    effects: description,
                    icon: '✨',
                    type: 'spell',
                    data: {
                        ...spell,
                        tradition: traditionName,
                        circle: spell.circulo,
                        school: spell.escola
                    }
                });
            });
        } else {
            // Fallback para magias básicas se o cache não estiver disponível
            const basicSpells = [
                { name: 'Luz Sagrada', tradition: 'Divina', circle: 1, school: 'Evocação' },
                { name: 'Bola de Fogo', tradition: 'Arcana', circle: 3, school: 'Evocação' },
                { name: 'Cura Ferimentos Leves', tradition: 'Divina', circle: 1, school: 'Necromancia' },
                { name: 'Detectar Magia', tradition: 'Universal', circle: 1, school: 'Adivinhação' }
            ];

            basicSpells.forEach(spell => {
                searchIndex.push({
                    name: spell.name,
                    category: 'Magia',
                    description: `${spell.tradition} - ${spell.circle}º Círculo - ${spell.school}`,
                    effects: '',
                    icon: '✨',
                    type: 'spell',
                    data: spell
                });
            });
        }

        // Adiciona poderes de combate
        const combatPowers = [
            { name: 'Acuidade com Arma', description: 'Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.' },
            { name: 'Arma Secundária Grande', description: 'Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.' },
            { name: 'Arremesso Potente', description: 'Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque.' },
            { name: 'Ataque Poderoso', description: 'Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.' },
            { name: 'Bloqueio com Escudo', description: 'Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano.' }
        ];

        combatPowers.forEach(power => {
            searchIndex.push({
                name: power.name,
                category: 'Poder de Combate',
                description: power.description,
                effects: '',
                icon: '⚔️',
                type: 'combat_power',
                data: power
            });
        });

        // Adiciona divindades
        const divinities = [
            { name: 'Azgher', title: 'Deus-Sol', description: 'Deus da luz e do calor, venerado por viajantes e combatentes das trevas.' },
            { name: 'Kallyadranoch', title: 'Deus-Dragão', description: 'Deus da sabedoria e conhecimento, venerado por magos e sábios.' },
            { name: 'Megalokk', title: 'Deus da Guerra', description: 'Deus da guerra e da força, venerado por guerreiros e bárbaros.' }
        ];

        divinities.forEach(divinity => {
            searchIndex.push({
                name: `${divinity.name} - ${divinity.title}`,
                category: 'Divindade',
                description: divinity.description,
                effects: '',
                icon: '🙏',
                type: 'divinity',
                data: divinity
            });
        });

        // Adiciona habilidades dinâmicas (aprendidas e automáticas)
        const learnedAbilities = getLearnedAbilities();
        const automaticAbilities = getAutomaticAbilities();
        const charLevel = parseInt(localStorage.getItem('roll20-hotbar-charlevel') || '1', 10) || 1;
        const specialAbilities = getSpecialAbilitiesByLevel(charLevel);

        // Adiciona habilidades automáticas
        automaticAbilities.forEach(abilityName => {
            searchIndex.push({
                name: abilityName,
                category: 'Habilidade',
                description: 'Habilidade automática do Caçador',
                effects: 'Sempre disponível',
                icon: '🎯',
                type: 'ability',
                data: { nome: abilityName, tipo: 'automática' }
            });
        });

        // Adiciona habilidades especiais por nível
        specialAbilities.forEach(abilityName => {
            searchIndex.push({
                name: abilityName,
                category: 'Habilidade',
                description: `Habilidade especial disponível no nível ${charLevel}`,
                effects: 'Habilidade de classe',
                icon: '🌟',
                type: 'ability',
                data: { nome: abilityName, tipo: 'especial' }
            });
        });

        // Adiciona habilidades aprendidas
        learnedAbilities.forEach(abilityName => {
            if (!automaticAbilities.includes(abilityName) && !specialAbilities.includes(abilityName)) {
                searchIndex.push({
                    name: abilityName,
                    category: 'Habilidade',
                    description: 'Habilidade aprendida pelo Caçador',
                    effects: 'Habilidade escolhida',
                    icon: '🎯',
                    type: 'ability',
                    data: { nome: abilityName, tipo: 'aprendida' }
                });
            }
        });

        // Adiciona poderes de destino aprendidos
        const learnedDestinyPowers = getLearnedDestinyPowers();
        learnedDestinyPowers.forEach(powerName => {
            searchIndex.push({
                name: powerName,
                category: 'Poder de Destino',
                description: 'Poder de destino aprendido pelo personagem',
                effects: 'Poder de destino',
                icon: '⭐',
                type: 'destiny_power',
                data: { nome: powerName, tipo: 'destino' }
            });
        });

        return searchIndex;
    }

    // Função para lidar com clique em item da busca
    function handleSearchItemClick(item) {
        // Remove o modal de busca
        const modal = document.getElementById('quick-search-modal');
        const overlay = document.getElementById('quick-search-overlay');
        if (modal) modal.remove();
        if (overlay) overlay.remove();

        // Executa ação baseada no tipo do item
        switch (item.type) {
            case 'prato': {
                // Abre o modal de detalhes do prato
                createPratoDetailModal(item.data);
                break;
            }
            case 'bebida': {
                // Abre o modal de detalhes da bebida
                createBebidaDetailModal(item.data);
                break;
            }
            case 'pocao': {
                // Abre o modal de detalhes da poção
                createPocaoDetailModal(item.data);
                break;
            }
            case 'condition': {
                // Abre o modal de detalhes da condição
                showConditionDetailsPopup(item.data);
                break;
            }
            case 'skill': {
                // Executa o teste da perícia
                const skillName = item.name;
                const skills = [
                    { nome: 'Acrobacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Acrobacia}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|acrobaciatotal}]]]]}}` },
                    { nome: 'Adestramento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Adestramento}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|adestramentototal}]]]]}}` },
                    { nome: 'Atletismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atletismo}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atletismototal}]]]]}}` },
                    { nome: 'Atuação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Atuação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|atuacaototal}]]]]}}` },
                    { nome: 'Cavalgar', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cavalgar}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|cavalgartotal}]]]]}}` },
                    { nome: 'Conhecimento', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Conhecimento}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|conhecimentototal}]]]]}}` },
                    { nome: 'Cura', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Cura}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|curatotal}]]]]}}` },
                    { nome: 'Diplomacia', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Diplomacia}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|diplomaciatotal}]]]]}}` },
                    { nome: 'Enganação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Enganação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|enganacaototal}]]]]}}` },
                    { nome: 'Fortitude', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Fortitude}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|fortitudetotal}]]]]}}` },
                    { nome: 'Furtividade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Furtividade}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|furtividadetotal}]]]]}}` },
                    { nome: 'Guerra', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Guerra}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|guerratotal}]]]]}}` },
                    { nome: 'Iniciativa', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Iniciativa}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|iniciativatotal}]] &{tracker}]]}}` },
                    { nome: 'Intimidação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intimidação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intimidacaototal}]]]]}}` },
                    { nome: 'Intuição', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Intuição}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|intuicaototal}]]]]}}` },
                    { nome: 'Investigação', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Investigação}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|investigacaototal}]]]]}}` },
                    { nome: 'Jogatina', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Jogatina}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|jogatinatotal}]]]]}}` },
                    { nome: 'Ladinagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ladinagem}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|ladinagemtotal}]]]]}}` },
                    { nome: 'Misticismo', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Misticismo}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|misticismototal}]]]]}}` },
                    { nome: 'Nobreza', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Nobreza}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|nobrezatotal}]]]]}}` },
                    { nome: 'Ofício', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ofício}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|oficiototal}]]]]}}` },
                    { nome: 'Percepção', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Percepção}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|percepcaototal}]]]]}}` },
                    { nome: 'Pilotagem', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pilotagem}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pilotagemtotal}]]]]}}` },
                    { nome: 'Pontaria', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Pontaria}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|pontariatotal}]]]]}}` },
                    { nome: 'Reflexos', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Reflexos}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|reflexostotal}]]]]}}` },
                    { nome: 'Religião', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Religião}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|religiaototal}]]]]}}` },
                    { nome: 'Sobrevivência', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Sobrevivência}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|sobrevivenciatotal}]]]]}}` },
                    { nome: 'Vontade', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Vontade}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|vontadetotal}]]]]}}` }
                ];

                const skill = skills.find(s => s.nome === skillName);
                if (skill) {
                    sendToChat(skill.comando);
                    showSuccessNotification(`Teste de ${skillName} executado!`);
                } else {
                    // Se não encontrar a skill, abre o modal de detalhes
                    createSkillDetailModal(skillName);
                }
                break;
            }
            case 'spell': {
                // Abre o modal de detalhes da magia
                if (item.data && item.data.name) {
                    // Buscar a magia completa no cache do grimório
                    const spellsCache = window.grimorioSpellsCache || [];
                    const fullSpell = spellsCache.find(spell => spell.name === item.data.name);

                    if (fullSpell) {
                        showSpellDetails(fullSpell);
                    } else {
                        // Fallback: mostrar informações básicas da magia
                        const basicSpell = {
                            name: item.data.name,
                            tradition: item.data.tradition?.toLowerCase() || 'universal',
                            circulo: item.data.circle || 1,
                            circuloDisplay: `${item.data.circle || 1}º Círculo`,
                            escola: item.data.school || 'Universal',
                            execucao: 'Ação Padrão',
                            system: {
                                description: { value: item.effects || 'Descrição não disponível' },
                                alcance: 'Curto',
                                duracao: 'Cena',
                                alvo: '1 Alvo',
                                resistencia: 'Nenhuma',
                                custo: '1 PM'
                            }
                        };
                        showSpellDetails(basicSpell);
                    }
                }
                break;
            }
            case 'combat_power': {
                // Mostra detalhes do poder no chat
                const template = `&{template:t20-info}{{infoname=${item.data.name || 'Poder de Combate'}}}{{description=${item.data.description || ''}}}`;
                sendToChat(template);
                showSuccessNotification(`Poder "${item.name}" compartilhado no chat!`);
                break;
            }
            case 'divinity': {
                // Mostra detalhes da divindade no chat
                const template = `&{template:t20-info}{{infoname=${item.name}}}{{description=${item.description || ''}}}`;
                sendToChat(template);
                showSuccessNotification(`Divindade "${item.name}" compartilhada no chat!`);
                break;
            }
            case 'ability': {
                // Abre o popup de detalhes da habilidade
                createAbilityCastPopup(item.data.nome, item.data.nome);
                break;
            }
            case 'destiny_power': {
                // Mostra detalhes do poder de destino no chat
                const template = `&{template:t20-info}{{infoname=${item.name}}}{{description=${item.description || ''}}}`;
                sendToChat(template);
                showSuccessNotification(`Poder de Destino "${item.name}" compartilhado no chat!`);
                break;
            }
            default:
                // Envia para o chat
                sendToChat(`&{template:t20-info}{{infoname=${item.name}}}{{description=${item.description || item.effects || ''}}}`);
                break;
        }
    }

    // Definição dos Roll20Components para uso global
    window.Roll20Components = {
        createCloseButton: function (config) {
            const {
                text = '×',
                fontSize = '18px',
                width = '32px',
                height = '32px',
                padding = '4px',
                color = '#ecf0f1',
                onClick = null
            } = config;

            const button = document.createElement('button');
            button.textContent = text;
            button.style.background = 'none';
            button.style.border = 'none';
            button.style.color = color;
            button.style.fontSize = fontSize;
            button.style.width = width;
            button.style.height = height;
            button.style.padding = padding;
            button.style.cursor = 'pointer';
            button.style.borderRadius = '4px';
            button.style.transition = 'all 0.2s';
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';

            button.onmouseover = () => {
                button.style.background = 'rgba(255,255,255,0.1)';
            };

            button.onmouseout = () => {
                button.style.background = 'none';
            };

            if (onClick) {
                button.onclick = onClick;
            }

            return {
                element: button,
                render: function () {
                    return button;
                }
            };
        },

        createFavoritableCardWithPreset: function (preset, config) {
            const {
                title,
                summary,
                description,
                chips = [],
                onFavorite = null,
                onUnfavorite = null,
                onFavoriteToggle = null,
                onClick = null,
                isFavorite = false
            } = config;

            const card = document.createElement('div');
            card.style.background = '#23243a';
            card.style.border = '1px solid #6ec6ff';
            card.style.borderRadius = '8px';
            card.style.padding = '12px';
            card.style.cursor = 'pointer';
            card.style.transition = 'all 0.2s';
            card.style.marginBottom = '8px';
            card.style.position = 'relative';

            card.onmouseover = () => {
                card.style.background = '#2a2b4a';
                card.style.borderColor = '#8ed8ff';
            };

            card.onmouseout = () => {
                card.style.background = '#23243a';
                card.style.borderColor = '#6ec6ff';
            };

            // Add click handler for the card
            if (onClick) {
                card.onclick = (e) => {
                    // Don't trigger if clicking on favorite button
                    if (e.target === favoriteBtn) {
                        return;
                    }
                    onClick(e);
                };
            }

            // Título
            const titleElement = document.createElement('div');
            titleElement.textContent = title;
            titleElement.style.color = '#6ec6ff';
            titleElement.style.fontSize = '14px';
            titleElement.style.fontWeight = 'bold';
            titleElement.style.marginBottom = '4px';

            // Descrição
            const descElement = document.createElement('div');
            descElement.textContent = summary || description || '';
            descElement.style.color = '#ecf0f1';
            descElement.style.fontSize = '12px';
            descElement.style.lineHeight = '1.3';
            descElement.style.marginBottom = '8px';

            // Chips
            const chipsContainer = document.createElement('div');
            chipsContainer.style.display = 'flex';
            chipsContainer.style.gap = '4px';
            chipsContainer.style.flexWrap = 'wrap';

            chips.forEach(chip => {
                const chipElement = document.createElement('span');
                chipElement.textContent = chip;
                chipElement.style.background = '#6ec6ff';
                chipElement.style.color = '#23243a';
                chipElement.style.fontSize = '10px';
                chipElement.style.padding = '2px 6px';
                chipElement.style.borderRadius = '10px';
                chipElement.style.fontWeight = 'bold';
                chipsContainer.appendChild(chipElement);
            });

            // Botão de favorito
            const favoriteBtn = document.createElement('button');
            favoriteBtn.innerHTML = isFavorite ? '★' : '☆';
            favoriteBtn.style.position = 'absolute';
            favoriteBtn.style.top = '8px';
            favoriteBtn.style.right = '8px';
            favoriteBtn.style.background = 'none';
            favoriteBtn.style.border = 'none';
            favoriteBtn.style.color = isFavorite ? '#ffd700' : '#666';
            favoriteBtn.style.fontSize = '16px';
            favoriteBtn.style.cursor = 'pointer';
            favoriteBtn.style.padding = '0';
            favoriteBtn.style.width = '20px';
            favoriteBtn.style.height = '20px';
            favoriteBtn.style.display = 'flex';
            favoriteBtn.style.alignItems = 'center';
            favoriteBtn.style.justifyContent = 'center';

            favoriteBtn.onclick = (e) => {
                e.stopPropagation();
                if (onFavoriteToggle) {
                    onFavoriteToggle();
                } else if (isFavorite) {
                    if (onUnfavorite) onUnfavorite();
                } else {
                    if (onFavorite) onFavorite();
                }
            };

            card.appendChild(titleElement);
            card.appendChild(descElement);
            card.appendChild(chipsContainer);
            card.appendChild(favoriteBtn);

            return {
                element: card,
                render: function () {
                    return card;
                }
            };
        }
    };
})();