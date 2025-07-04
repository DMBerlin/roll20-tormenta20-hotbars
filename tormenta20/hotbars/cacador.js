// ==UserScript==
// @name         Roll20 Hotbar Extra - Caçador
// @namespace    http://tampermonkey.net/
// @version      0.1
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
        } else {
            learnedAbilities.push(abilityName);
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
        } else {
            favorites.push(skillName);
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
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Configurar Avatar';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('avatar-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
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
            popup.remove();
            const overlay = document.getElementById('avatar-overlay');
            if (overlay) overlay.remove();
        };

        buttonContainer.appendChild(saveBtn);
        buttonContainer.appendChild(clearBtn);
        popup.appendChild(buttonContainer);

        document.body.appendChild(popup);
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
            overlay.remove();
            popup.remove();
        };
        document.body.appendChild(overlay);

        // Popup principal
        const popup = document.createElement('div');
        popup.id = 'skills-popup';
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
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '10px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Skills';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('skills-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Barra de filtro
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = '10px';
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filter skills...';
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
            updateSkillList();
        };
        filterContainer.appendChild(filterInput);
        filterContainer.appendChild(clearBtn);
        popup.appendChild(filterContainer);

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
            { nome: 'Ofício 2', comando: `&{template:t20}{{character=@{${getCharacterNameForMacro()}|character_name}}}{{rollname=Ofício @{${getCharacterNameForMacro()}|oficio2nome}}}{{theroll=[[1d20+[[@{${getCharacterNameForMacro()}|oficio2total}]]]]}}` },
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
            const filter = filterInput.value.trim().toLowerCase();
            const favorites = getFavorites();

            // Filtra e ordena as skills
            let filteredSkills = skills.filter(s => s.nome.toLowerCase().includes(filter));

            // Separa favoritos e não-favoritos
            const favoriteSkills = filteredSkills.filter(s => favorites.includes(s.nome));
            const nonFavoriteSkills = filteredSkills.filter(s => !favorites.includes(s.nome));

            // Combina as listas com favoritos no topo
            const orderedSkills = [...favoriteSkills, ...nonFavoriteSkills];

            skillList.innerHTML = '';

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
                btn.textContent = skill.nome;
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
                btn.onclick = () => {
                    sendToChat(skill.comando);
                    popup.remove();
                    const overlay = document.getElementById('skills-overlay');
                    if (overlay) overlay.remove();
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

    // Templates reutilizáveis para Powers
    // const powerTemplates = {
    //     createPower: (powerData) => {
    //         return {
    //             nome: powerData.nome,
    //             descricao: powerData.descricao,
    //             onClick: () => createPowerCastPopup(powerData.nome, powerData.nome)
    //         };
    //     }
    // };

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
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '10px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Spells';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('spells-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Barra de filtro
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = '10px';
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filter spells...';
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
            updateSpellList();
        };
        filterContainer.appendChild(filterInput);
        filterContainer.appendChild(clearBtn);
        popup.appendChild(filterContainer);

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

+2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.

+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.

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
            const filter = filterInput.value.trim().toLowerCase();
            spellList.innerHTML = '';

            // Filtra spells baseado na raça selecionada
            const availableSpells = spells.filter(spell => {
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

            const filteredSpells = availableSpells.filter(s => s.nome.toLowerCase().includes(filter));

            if (filteredSpells.length === 0) {
                const noSpellsMessage = document.createElement('div');
                noSpellsMessage.style.textAlign = 'center';
                noSpellsMessage.style.padding = '20px';
                noSpellsMessage.style.color = '#6ec6ff';
                noSpellsMessage.style.fontSize = '14px';
                noSpellsMessage.style.fontStyle = 'italic';
                noSpellsMessage.style.background = 'rgba(110, 198, 255, 0.1)';
                noSpellsMessage.style.border = '1px solid rgba(110, 198, 255, 0.3)';
                noSpellsMessage.style.borderRadius = '8px';
                noSpellsMessage.style.marginTop = '10px';

                if (filter) {
                    noSpellsMessage.textContent = `Nenhuma magia encontrada para "${filter}"`;
                } else {
                    const selectedRace = getSelectedRace();
                    const selectedRaceType = getSelectedRaceType();

                    if (!selectedRace) {
                        noSpellsMessage.innerHTML = 'Nenhuma magia disponível<br><small>Selecione uma raça para obter magias especiais</small>';
                    } else if (!selectedRaceType) {
                        noSpellsMessage.innerHTML = 'Nenhuma magia disponível<br><small>Defina o tipo da sua raça para obter magias especiais</small>';
                    } else {
                        noSpellsMessage.innerHTML = 'Nenhuma magia disponível<br><small>Esta raça não possui magias especiais</small>';
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
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
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

        // Tag de origem
        const originTag = document.createElement('span');
        if (spellName === 'Luz Sagrada') {
            originTag.textContent = 'Aggelus';
        } else if (spellName === 'Sombras Profanas') {
            originTag.textContent = 'Sulfure';
        }
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

        header.appendChild(titleContainer);

        // Botão de fechar
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('spell-cast-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(closeBtn);
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
                { label: '+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.', cost: 2 },
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

+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.

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
            // Fecha todos os popups relacionados imediatamente
            const spellCastPopup = document.getElementById('spell-cast-popup');
            if (spellCastPopup) spellCastPopup.remove();
            const spellCastOverlay = document.getElementById('spell-cast-overlay');
            if (spellCastOverlay) spellCastOverlay.remove();
            const spellsPopup = document.getElementById('spells-popup');
            if (spellsPopup) spellsPopup.remove();
            const spellsOverlay = document.getElementById('spells-overlay');
            if (spellsOverlay) spellsOverlay.remove();
            // Monta a mensagem
            let total = 1;
            let upgradesDesc = [];
            upgradeCheckboxes.forEach((cb, idx) => {
                if (cb.checked) {
                    total += upgrades[idx].cost;
                    upgradesDesc.push(upgrades[idx].label);
                }
            });
            const msg = `/em conjura ${spellName} (${total} PM)${upgradesDesc.length ? ': ' + upgradesDesc.join('%NEWLINE%') : ''}`;
            sendToChat(msg);
        };
        descBox.appendChild(useBtn);
        popup.appendChild(descBox);

        document.body.appendChild(popup);
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
            leaf.style.left = '-50px';
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

    // Cria a hotbar
    function createHotbar() {
        const hotbar = document.createElement('div');
        hotbar.id = 'roll20-hotbar';
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
        hotbar.style.minWidth = '500px';
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
                } else {
                    alert('O nível deve ser entre 1 e 20!');
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

        // Seção 3: Outros botões (Skills, Spells, Habilidades, Efeitos)
        const otherButtonsSection = document.createElement('div');
        otherButtonsSection.style.display = 'flex';
        otherButtonsSection.style.gap = '18px';
        otherButtonsSection.style.flexWrap = 'nowrap';
        otherButtonsSection.style.justifyContent = 'center';
        otherButtonsSection.style.alignItems = 'center';

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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '15px';
            header.style.width = '100%';

            const title = document.createElement('h3');
            title.textContent = 'Manobras de Combate';
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '32px';
            closeBtn.style.height = '32px';
            closeBtn.onclick = () => {
                popup.remove();
                const overlay = document.getElementById('maneuvers-overlay');
                if (overlay) overlay.remove();
            };
            header.appendChild(title);
            header.appendChild(closeBtn);
            popup.appendChild(header);

            // Campo de filtro
            const filterContainer = document.createElement('div');
            filterContainer.style.position = 'relative';
            filterContainer.style.marginBottom = '10px';
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
            filterInput.onblur = () => {
                filterInput.style.borderColor = '#ff6e6e';
            };
            filterContainer.appendChild(filterInput);
            filterContainer.appendChild(clearBtn);
            popup.appendChild(filterContainer);

            // Container para a lista de manobras
            const maneuversList = document.createElement('div');
            maneuversList.style.display = 'flex';
            maneuversList.style.flexDirection = 'column';
            maneuversList.style.gap = '6px';
            maneuversList.style.marginTop = '2px';

            // Lista de manobras
            const maneuvers = [
                {
                    name: 'Investida',
                    description: 'Você avança até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o seu próximo turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Durante uma investida, você pode fazer a manobra atropelar como uma ação livre (mas não pode atropelar e atacar o mesmo alvo).',
                    icon: '⚡',
                    shortDesc: 'Ação completa: Ataque corpo a corpo com +2 no teste de ataque (rolagem: 1d20 + Pontaria + bônus da investida), mas sofra –2 na Defesa até o próximo turno.'
                },
                {
                    name: 'Atropelar',
                    description: 'Você pode tentar atropelar um oponente como uma ação de movimento. Faça um teste de Força (Atletismo) oposto ao teste de Força (Atletismo) do oponente. Se você vencer, empurra o oponente 1,5m para trás e pode continuar seu movimento. Se você perder, para no espaço do oponente.',
                    icon: '💨',
                    shortDesc: 'Ação de movimento: Teste de Atletismo (rolagem: 1d20 + Atletismo total) para empurrar oponente 1,5m para trás.'
                },
                {
                    name: 'Agarrar',
                    description: 'Você pode tentar agarrar um oponente como uma ação padrão. Faça um teste de Força (Luta) oposto ao teste de Força (Luta) ou Destreza (Acrobacia) do oponente. Se você vencer, o oponente fica agarrado.',
                    icon: '🤝',
                    shortDesc: 'Ação padrão: Teste de Luta (rolagem: 1d20 + Luta total) para agarrar oponente.'
                },
                {
                    name: 'Desarmar',
                    description: 'Você pode tentar desarmar um oponente como uma ação padrão. Faça um teste de Força (Luta) oposto ao teste de Força (Luta) do oponente. Se você vencer, o oponente solta a arma.',
                    icon: '🗡️',
                    shortDesc: 'Ação padrão: Teste de Luta (rolagem: 1d20 + Luta total) para fazer oponente soltar arma.'
                },
                {
                    name: 'Derrubar',
                    description: 'Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta força que também o empurra um quadrado em uma direção a sua escolha. Se isso o jogar além de um parapeito ou precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar numa beirada.',
                    icon: '🔻',
                    shortDesc: 'Ação padrão: Deixe o alvo caído (teste de manobra oposto). Se vencer por 5+, empurre o alvo 1 quadrado. Se cair de um parapeito, teste Reflexos (CD 20) para se segurar.'
                },
                {
                    name: 'Empurrar',
                    description: 'Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de movimento para avançar junto com a criatura (até o limite do seu deslocamento).',
                    icon: '➡️',
                    shortDesc: 'Ação padrão: Empurre o alvo 1,5m (teste de manobra oposto). Para cada 5 pontos de diferença, empurre mais 1,5m. Pode avançar junto usando ação de movimento.'
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

                btn.onclick = () => {
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



            popup.appendChild(maneuversList);
            document.body.appendChild(popup);
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '10px';
            header.style.width = '100%';

            const title = document.createElement('h3');
            title.textContent = 'Efeitos no Ataque';
            title.style.color = '#ecf0f1';
            title.style.margin = '0';
            title.style.fontSize = '17px';
            title.style.fontWeight = 'bold';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '32px';
            closeBtn.style.height = '32px';
            closeBtn.onclick = () => {
                popup.remove();
                const overlay = document.getElementById('attack-effects-overlay');
                if (overlay) overlay.remove();
            };
            header.appendChild(title);
            header.appendChild(closeBtn);
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
                // Fecha popup
                popup.remove();
                const overlay = document.getElementById('attack-effects-overlay');
                if (overlay) overlay.remove();
            };
            popup.appendChild(saveBtn);

            document.body.appendChild(popup);
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
            { label: 'Skills', icon: '🧠', onClick: createSkillsPopup },
            { label: 'Spells', icon: '🔮', onClick: createSpellsPopup },
            { label: 'Habilidades', icon: '✨', onClick: createAbilitiesPopup },
            { label: 'Efeitos', icon: '🌀', onClick: createEffectsPopup }
        ];
        // Função para criar botão
        function createButton(btnData, isCombatButton = false) {
            const btn = document.createElement('button');
            btn.style.display = 'flex';
            btn.style.flexDirection = 'column';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.padding = '0';
            btn.style.background = isCombatButton ? 'rgba(120,60,60,0.95)' : 'rgba(60,80,120,0.95)';
            btn.style.color = '#fff';
            btn.style.border = isCombatButton ? '2px solid #ff6e6e' : '2px solid #6ec6ff';
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
            btn.onmouseover = () => {
                btn.style.background = isCombatButton ? '#ff6e6e' : '#6ec6ff';
                btn.style.color = '#222';
                btn.style.transform = 'scale(1.08)';
            };
            btn.onmouseout = () => {
                btn.style.background = isCombatButton ? 'rgba(120,60,60,0.95)' : 'rgba(60,80,120,0.95)';
                btn.style.color = '#fff';
                btn.style.transform = 'scale(1)';
            };
            // Ícone
            const icon = document.createElement('span');
            icon.textContent = btnData.icon;
            icon.style.fontSize = '26px';
            icon.style.marginBottom = '2px';
            btn.appendChild(icon);
            // Texto
            const label = document.createElement('span');
            label.textContent = btnData.label;
            label.style.fontSize = '12px';
            label.style.marginTop = '2px';
            btn.appendChild(label);
            btn.onclick = btnData.onClick;

            // Adicionar atributo data-label para identificação
            btn.setAttribute('data-label', btnData.label);

            // Adicionar indicador de efeitos ativos
            if (btnData.label === 'Efeitos') {
                btn.style.position = 'relative';
            }

            return btn;
        }

        // Criar botões de combate para seção de combate
        const attackBtn = createButton(attackButton, true);
        const maneuversBtn = createButton(maneuversButton, true);
        combatSection.appendChild(attackBtn);
        combatSection.appendChild(maneuversBtn);

        // Criar outros botões para seção de outros
        otherButtons.forEach(btnData => {
            const btn = createButton(btnData, false);
            otherButtonsSection.appendChild(btn);
        });

        // Adiciona as seções ao conteúdo principal
        mainContent.appendChild(characterSection);
        mainContent.appendChild(separator1);
        mainContent.appendChild(combatSection);
        mainContent.appendChild(separator2);
        mainContent.appendChild(otherButtonsSection);

        hotbar.appendChild(mainContent);

        document.body.appendChild(hotbar);
        makeDraggable(hotbar, header);

        // Atualiza o badge de efeitos após o hotbar estar no DOM
        updateEffectsBadge();
    }

    // Inicializa quando a página carregar
    waitForElement('#textchat-input').then(() => {
        setTimeout(() => {
            // Inicializa habilidades automáticas
            initializeAutomaticAbilities();

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
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'rgba(30,30,40,0.98)';
        popup.style.border = '2px solid #8B4513';
        popup.style.borderRadius = '12px';
        popup.style.padding = '20px';
        popup.style.zIndex = '10001';
        popup.style.maxWidth = '900px';
        popup.style.maxHeight = '85vh';
        popup.style.overflowY = 'auto';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'stretch';

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

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '20px';
        header.style.width = '100%';
        header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
        header.style.paddingBottom = '15px';

        const title = document.createElement('h2');
        title.innerHTML = '🏹 Caçador';
        title.style.color = '#8B4513';
        title.style.margin = '0';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '28px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '36px';
        closeBtn.style.height = '36px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('hunter-class-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Sistema de Abas
        const tabContainer = document.createElement('div');
        tabContainer.style.marginBottom = '20px';

        const tabButtons = document.createElement('div');
        tabButtons.style.display = 'flex';
        tabButtons.style.gap = '5px';
        tabButtons.style.marginBottom = '15px';

        const tabContents = document.createElement('div');
        tabContents.style.minHeight = '400px';

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
        powerTextFilterInput.placeholder = 'Filtrar poderes...';
        powerTextFilterInput.style.width = '100%';
        powerTextFilterInput.style.padding = '10px 28px 10px 12px';
        powerTextFilterInput.style.borderRadius = '8px';
        powerTextFilterInput.style.border = '1px solid #6ec6ff';
        powerTextFilterInput.style.background = '#23243a';
        powerTextFilterInput.style.color = '#fff';
        powerTextFilterInput.style.fontSize = '14px';
        powerTextFilterInput.style.outline = 'none';
        powerTextFilterInput.style.boxSizing = 'border-box';

        const powerClearTextBtn = document.createElement('span');
        powerClearTextBtn.textContent = '×';
        powerClearTextBtn.style.position = 'absolute';
        powerClearTextBtn.style.right = '8px';
        powerClearTextBtn.style.top = '50%';
        powerClearTextBtn.style.transform = 'translateY(-50%)';
        powerClearTextBtn.style.cursor = 'pointer';
        powerClearTextBtn.style.color = '#6ec6ff';
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
                        description: 'Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena.'
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
        divinitiesList.style.gap = '12px';

        divinities.forEach(divinity => {
            const isSelected = getSelectedDivinity() === divinity.name;

            const divinityContainer = document.createElement('div');
            divinityContainer.style.background = isSelected ? '#2d4a3e' : '#23243a';
            divinityContainer.style.border = `2px solid ${isSelected ? '#4caf50' : '#6ec6ff'}`;
            divinityContainer.style.borderRadius = '8px';
            divinityContainer.style.padding = '12px';
            divinityContainer.style.cursor = 'pointer';
            divinityContainer.style.transition = 'all 0.3s';

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
            divinityTitle.innerHTML = `<strong style="color: ${isSelected ? '#4caf50' : '#6ec6ff'}; font-size: 16px;">${divinity.name}</strong><br><em style="color: #ecf0f1; font-size: 12px;">${divinity.title}</em>`;

            const statusIndicator = document.createElement('div');
            statusIndicator.textContent = isSelected ? '✓ Selecionada' : 'Clique para ver detalhes';
            statusIndicator.style.color = isSelected ? '#4caf50' : '#6ec6ff';
            statusIndicator.style.fontSize = '12px';
            statusIndicator.style.fontWeight = 'bold';
            statusIndicator.style.fontStyle = 'italic';

            divinityHeader.appendChild(divinityTitle);
            divinityHeader.appendChild(statusIndicator);
            divinityContainer.appendChild(divinityHeader);

            // Descrição resumida
            const descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = divinity.shortDescription;
            descriptionDiv.style.color = '#ecf0f1';
            descriptionDiv.style.fontSize = '12px';
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
            raceContainer.style.borderRadius = '12px';
            raceContainer.style.padding = '15px';
            raceContainer.style.cursor = 'pointer';
            raceContainer.style.transition = 'all 0.2s';

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
            raceTitle.innerHTML = `<strong style="color: ${isSelected ? '#4caf50' : '#6ec6ff'}; font-size: 16px;">${race.name}</strong><br><em style="color: #ecf0f1; font-size: 12px;">${race.title}</em>`;

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
            statusIndicator.style.fontSize = '12px';
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
            descriptionDiv.style.fontSize = '12px';
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '20px';
            header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
            header.style.paddingBottom = '15px';

            const title = document.createElement('h2');
            title.innerHTML = `👥 ${race.name} - ${race.title}`;
            title.style.color = '#8B4513';
            title.style.margin = '0';
            title.style.fontSize = '24px';
            title.style.fontWeight = 'bold';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '28px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '36px';
            closeBtn.style.height = '36px';
            closeBtn.onclick = () => {
                modal.remove();
                overlay.remove();
            };
            header.appendChild(title);
            header.appendChild(closeBtn);
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.marginBottom = '20px';
            header.style.borderBottom = '1px solid rgba(139, 69, 19, 0.3)';
            header.style.paddingBottom = '15px';

            const title = document.createElement('h2');
            title.innerHTML = `☀️ ${divinity.name} - ${divinity.title}`;
            title.style.color = '#8B4513';
            title.style.margin = '0';
            title.style.fontSize = '24px';
            title.style.fontWeight = 'bold';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '28px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '36px';
            closeBtn.style.height = '36px';
            closeBtn.onclick = () => {
                modal.remove();
                overlay.remove();
            };
            header.appendChild(title);
            header.appendChild(closeBtn);
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
        textFilterInput.placeholder = 'Filtrar habilidades...';
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
                                // Fechar
                                const closeBtn = document.createElement('button');
                                closeBtn.innerHTML = '×';
                                closeBtn.style.background = 'none';
                                closeBtn.style.border = 'none';
                                closeBtn.style.color = '#ecf0f1';
                                closeBtn.style.fontSize = '24px';
                                closeBtn.style.cursor = 'pointer';
                                closeBtn.style.position = 'absolute';
                                closeBtn.style.top = '8px';
                                closeBtn.style.right = '12px';
                                closeBtn.onclick = () => {
                                    overlay.remove();
                                    modal.remove();
                                };
                                modal.appendChild(closeBtn);
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
        tabContainer.appendChild(tabContents);
        popup.appendChild(tabContainer);

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
        popup.appendChild(bookNote);

        // Só agora adiciona o popup ao DOM
        document.body.appendChild(popup);
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
        } else {
            learnedPowers.push(powerName);
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
        popup.style.alignItems = 'stretch';

        // Cabeçalho
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Habilidades';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('abilities-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Barra de filtro
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = '10px';
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filtrar habilidades...';
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
        filterContainer.appendChild(clearBtn);
        popup.appendChild(filterContainer);

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
                emptyMsg.textContent = 'Nenhuma habilidade disponível.';
                emptyMsg.style.color = '#aaa';
                emptyMsg.style.textAlign = 'center';
                emptyMsg.style.padding = '24px 0 12px 0';
                emptyMsg.style.fontSize = '15px';
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
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

            header.appendChild(titleContainer);

            // Botão de fechar
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '32px';
            closeBtn.style.height = '32px';
            closeBtn.onclick = () => {
                popup.remove();
                const overlay = document.getElementById('power-cast-overlay');
                if (overlay) overlay.remove();
            };
            header.appendChild(closeBtn);
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
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

            header.appendChild(titleContainer);

            // Botão de fechar
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '32px';
            closeBtn.style.height = '32px';
            closeBtn.onclick = () => {
                popup.remove();
                const overlay = document.getElementById('power-cast-overlay');
                if (overlay) overlay.remove();
            };
            header.appendChild(closeBtn);
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
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
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

            header.appendChild(titleContainer);

            // Botão de fechar
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#ecf0f1';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.padding = '0';
            closeBtn.style.width = '32px';
            closeBtn.style.height = '32px';
            closeBtn.onclick = () => {
                popup.remove();
                const overlay = document.getElementById('power-cast-overlay');
                if (overlay) overlay.remove();
            };
            header.appendChild(closeBtn);
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
        return activeEffects.includes(effectName);
    }

    // Função para ativar/desativar efeito
    function toggleEffect(effectName) {
        const activeEffects = getActiveEffects();
        const index = activeEffects.indexOf(effectName);

        if (index > -1) {
            activeEffects.splice(index, 1);
        } else {
            activeEffects.push(effectName);
        }

        saveActiveEffects(activeEffects);
        updateEffectsBadge();
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
        const existingBadge = effectsButton.querySelector('.effects-badge');
        if (existingBadge) {
            existingBadge.remove();
        }

        // Verifica efeitos ativos
        const activeEffects = getActiveEffects();
        console.log('Efeitos ativos:', activeEffects);

        // Cria novo badge se há efeitos ativos
        if (activeEffects.length > 0) {
            const badge = document.createElement('div');
            badge.className = 'effects-badge';
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
            badge.textContent = activeEffects.length;
            effectsButton.appendChild(badge);
            console.log('Badge criado com valor:', activeEffects.length);
        } else {
            console.log('Nenhum efeito ativo, badge não criado');
        }
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
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = 'Efeitos';
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '17px';
        title.style.fontWeight = 'bold';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ecf0f1';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0';
        closeBtn.style.width = '32px';
        closeBtn.style.height = '32px';
        closeBtn.onclick = () => {
            popup.remove();
            const overlay = document.getElementById('effects-overlay');
            if (overlay) overlay.remove();

            // Atualiza o badge após fechar o popup
            setTimeout(() => {
                updateEffectsBadge();
            }, 100);
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Lista de efeitos disponíveis
        const effects = [
            {
                name: 'Cachecol Sombrio',
                description: 'Efeito de Dano: Todos os ataques melee recebem +1d6 de dano furtivo. Efeito acumulativo com outros ataques furtivos.',
                type: 'Item',
                effectKey: 'cachecol_sombrio'
            }
        ];

        // Lista visual
        const effectsList = document.createElement('div');
        effectsList.style.display = 'flex';
        effectsList.style.flexDirection = 'column';
        effectsList.style.gap = '8px';
        effectsList.style.marginTop = '2px';
        popup.appendChild(effectsList);

        function updateEffectsList() {
            effectsList.innerHTML = '';

            effects.forEach(effect => {
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
                    toggleEffect(effect.effectKey);
                    updateEffectsList();
                    updateEffectsBadge();
                };

                // Cabeçalho do efeito
                const effectHeader = document.createElement('div');
                effectHeader.style.display = 'flex';
                effectHeader.style.justifyContent = 'space-between';
                effectHeader.style.alignItems = 'center';
                effectHeader.style.marginBottom = '6px';

                const effectName = document.createElement('div');
                effectName.textContent = effect.name;
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

                effectsList.appendChild(effectContainer);
            });
        }

        updateEffectsList();
        document.body.appendChild(popup);
    }
})();