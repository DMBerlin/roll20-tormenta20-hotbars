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

    // Função global para obter o nome do personagema
    function getCharacterName() {
        return localStorage.getItem(CHAR_NAME_KEY) || 'Nome do Personagem';
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

            const observer = new MutationObserver(mutations => {
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
            { nome: 'Acrobacia', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Acrobacia}}{{theroll=[[1d20+[[@{${getCharacterName()}|acrobaciatotal}]]]]}}` },
            { nome: 'Adestramento', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Adestramento}}{{theroll=[[1d20+[[@{${getCharacterName()}|adestramentototal}]]]]}}` },
            { nome: 'Atletismo', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Atletismo}}{{theroll=[[1d20+[[@{${getCharacterName()}|atletismototal}]]]]}}` },
            { nome: 'Atuação', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Atuação}}{{theroll=[[1d20+[[@{${getCharacterName()}|atuacaototal}]]]]}}` },
            { nome: 'Cavalgar', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Cavalgar}}{{theroll=[[1d20+[[@{${getCharacterName()}|cavalgartotal}]]]]}}` },
            { nome: 'Conhecimento', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Conhecimento}}{{theroll=[[1d20+[[@{${getCharacterName()}|conhecimentototal}]]]]}}` },
            { nome: 'Cura', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Cura}}{{theroll=[[1d20+[[@{${getCharacterName()}|curatotal}]]]]}}` },
            { nome: 'Diplomacia', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Diplomacia}}{{theroll=[[1d20+[[@{${getCharacterName()}|diplomaciatotal}]]]]}}` },
            { nome: 'Enganação', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Enganação}}{{theroll=[[1d20+[[@{${getCharacterName()}|enganacaototal}]]]]}}` },
            { nome: 'Fortitude', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Fortitude}}{{theroll=[[1d20+[[@{${getCharacterName()}|fortitudetotal}]]]]}}` },
            { nome: 'Furtividade', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Furtividade}}{{theroll=[[1d20+[[@{${getCharacterName()}|furtividadetotal}]]]]}}` },
            { nome: 'Guerra', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Guerra}}{{theroll=[[1d20+[[@{${getCharacterName()}|guerratotal}]]]]}}` },
            { nome: 'Iniciativa', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Iniciativa}}{{theroll=[[1d20+[[@{${getCharacterName()}|iniciativatotal}]] &{tracker}]]}}` },
            { nome: 'Intimidação', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Intimidação}}{{theroll=[[1d20+[[@{${getCharacterName()}|intimidacaototal}]]]]}}` },
            { nome: 'Intuição', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Intuição}}{{theroll=[[1d20+[[@{${getCharacterName()}|intuicaototal}]]]]}}` },
            { nome: 'Investigação', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Investigação}}{{theroll=[[1d20+[[@{${getCharacterName()}|investigacaototal}]]]]}}` },
            { nome: 'Jogatina', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Jogatina}}{{theroll=[[1d20+[[@{${getCharacterName()}|jogatinatotal}]]]]}}` },
            { nome: 'Ladinagem', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Ladinagem}}{{theroll=[[1d20+[[@{${getCharacterName()}|ladinagemtotal}]]]]}}` },
            { nome: 'Luta', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Luta}}{{theroll=[[1d20+[[@{${getCharacterName()}|lutatotal}]]]]}}` },
            { nome: 'Misticismo', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Misticismo}}{{theroll=[[1d20+[[@{${getCharacterName()}|misticismototal}]]]]}}` },
            { nome: 'Nobreza', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Nobreza}}{{theroll=[[1d20+[[@{${getCharacterName()}|nobrezatotal}]]]]}}` },
            { nome: 'Ofício', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Ofício @{${getCharacterName()}|oficionome}}}{{theroll=[[1d20+[[@{${getCharacterName()}|oficiototal}]]]]}}` },
            { nome: 'Ofício 2', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Ofício @{${getCharacterName()}|oficio2nome}}}{{theroll=[[1d20+[[@{${getCharacterName()}|oficio2total}]]]]}}` },
            { nome: 'Percepção', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Percepção}}{{theroll=[[1d20+[[@{${getCharacterName()}|percepcaototal}]]]]}}` },
            { nome: 'Pilotagem', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Pilotagem}}{{theroll=[[1d20+[[@{${getCharacterName()}|pilotagemtotal}]]]]}}` },
            { nome: 'Pontaria', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Pontaria}}{{theroll=[[1d20+[[@{${getCharacterName()}|pontariatotal}]]]]}}` },
            { nome: 'Reflexos', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Reflexos}}{{theroll=[[1d20+[[@{${getCharacterName()}|reflexostotal}]]]]}}` },
            { nome: 'Religião', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Religião}}{{theroll=[[1d20+[[@{${getCharacterName()}|religiaototal}]]]]}}` },
            { nome: 'Sobrevivência', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Sobrevivência}}{{theroll=[[1d20+[[@{${getCharacterName()}|sobrevivenciatotal}]]]]}}` },
            { nome: 'Vontade', comando: `&{template:t20}{{character=@{${getCharacterName()}|character_name}}}{{rollname=Vontade}}{{theroll=[[1d20+[[@{${getCharacterName()}|vontadetotal}]]]]}}` }
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
    const powerTemplates = {
        createPower: (powerData) => {
            return {
                nome: powerData.nome,
                descricao: powerData.descricao,
                onClick: () => createPowerCastPopup(powerData.nome, powerData.nome)
            };
        }
    };

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
                nome: 'Escuridão',
                comando: `&{template:spell}{{character=@{${getCharacterName()}|character_name}}}{{spellname=Escuridão}}{{type=Universal}}{{execution=Padrão}}{{duration=Cena}}{{range=Curto}}{{targetarea=1 Objeto}}{{resistance=Vontade}}{{description=O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.

+1 PM: aumenta a área da escuridão em +1,5m de raio.

+2 PM: muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.

+2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.

+3 PM: muda a duração para um dia.

+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo.

JdA:193}}{{cd=[[@{${getCharacterName()}|cdtotal}+0]]}}`
            })
        ];

        // Lista visual
        const spellList = document.createElement('div');
        spellList.style.display = 'flex';
        spellList.style.flexDirection = 'column';
        spellList.style.gap = '6px';
        spellList.style.marginTop = '2px';
        popup.appendChild(spellList);

        function updateSpellList() {
            const filter = filterInput.value.trim().toLowerCase();
            spellList.innerHTML = '';
            spells.filter(s => s.nome.toLowerCase().includes(filter)).forEach(spell => {
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
                btn.onmouseover = () => {
                    btn.style.background = '#6ec6ff';
                    btn.style.color = '#23243a';
                };
                btn.onmouseout = () => {
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';
                };
                btn.onclick = spell.onClick;
                spellList.appendChild(btn);
            });
        }
        updateSpellList();

        document.body.appendChild(popup);
    }

    // Função para criar popup de detalhes de spell
    function createSpellCastPopup(spellName, spellDisplayName, spellCommand) {
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

        const title = document.createElement('h3');
        title.textContent = spellDisplayName;
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';

        // Botão de compartilhar descrição
        const shareBtn = document.createElement('button');
        shareBtn.innerHTML = '📤';
        shareBtn.style.background = 'none';
        shareBtn.style.border = 'none';
        shareBtn.style.color = '#6ec6ff';
        shareBtn.style.fontSize = '16px';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.padding = '4px';
        shareBtn.style.borderRadius = '4px';
        shareBtn.style.transition = 'all 0.2s';
        shareBtn.style.marginRight = '8px';
        shareBtn.title = 'Compartilhar spell no chat';

        shareBtn.onmouseover = () => {
            shareBtn.style.background = '#6ec6ff';
            shareBtn.style.color = '#23243a';
        };
        shareBtn.onmouseout = () => {
            shareBtn.style.background = 'none';
            shareBtn.style.color = '#6ec6ff';
        };
        shareBtn.onclick = () => {
            sendToChat(spellCommand);
            popup.remove();
            const overlay = document.getElementById('spell-cast-overlay');
            if (overlay) overlay.remove();
        };

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

        // Container para título e botão de compartilhar
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.appendChild(title);
        titleContainer.appendChild(shareBtn);

        header.appendChild(titleContainer);
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

        // Descrição da spell
        const description = document.createElement('div');
        description.style.color = '#ecf0f1';
        description.style.marginBottom = '15px';
        description.style.fontSize = '14px';
        description.style.lineHeight = '1.4';
        description.textContent = 'O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.';
        popup.appendChild(description);

        // Ícone para enviar descrição ao chat
        const sendIcon = document.createElement('button');
        sendIcon.innerHTML = '📤';
        sendIcon.style.position = 'absolute';
        sendIcon.style.top = '8px';
        sendIcon.style.right = '8px';
        sendIcon.style.background = 'none';
        sendIcon.style.border = 'none';
        sendIcon.style.color = '#6ec6ff';
        sendIcon.style.fontSize = '16px';
        sendIcon.style.cursor = 'pointer';
        sendIcon.style.padding = '4px';
        sendIcon.style.borderRadius = '4px';
        sendIcon.style.transition = 'all 0.2s';
        sendIcon.title = 'Enviar descrição ao chat';

        sendIcon.onmouseover = () => {
            sendIcon.style.background = '#6ec6ff';
            sendIcon.style.color = '#23243a';
        };
        sendIcon.onmouseout = () => {
            sendIcon.style.background = 'none';
            sendIcon.style.color = '#6ec6ff';
        };
        sendIcon.onclick = () => {
            const descMessage = `/em ${description.textContent}`;
            sendToChat(descMessage);
        };

        document.body.appendChild(popup);
    }

    // Função para criar o popup de poderes
    function createPowersPopup() {
        // Remove popup existente se houver
        const existingPopup = document.getElementById('powers-popup');
        if (existingPopup) existingPopup.remove();
        const existingOverlay = document.getElementById('powers-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Overlay para fechar ao clicar fora
        const overlay = document.createElement('div');
        overlay.id = 'powers-overlay';
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
        popup.id = 'powers-popup';
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
        title.textContent = 'Powers';
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
            const overlay = document.getElementById('powers-overlay');
            if (overlay) overlay.remove();
        };
        header.appendChild(title);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Lista de poderes
        const powers = [
            powerTemplates.createPower({
                nome: 'Ervas Curativas',
                descricao: 'Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo. (JdA:51)'
            })
        ];

        // Barra de filtro
        const filterContainer = document.createElement('div');
        filterContainer.style.position = 'relative';
        filterContainer.style.marginBottom = '10px';
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filter powers...';
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
        clearBtn.style.right = '10px';
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
            updatePowerList();
        };
        filterContainer.appendChild(filterInput);
        filterContainer.appendChild(clearBtn);
        popup.appendChild(filterContainer);

        // Lista visual de poderes
        const powerList = document.createElement('div');
        powerList.style.display = 'flex';
        powerList.style.flexDirection = 'column';
        powerList.style.gap = '8px';
        powerList.style.marginTop = '2px';
        popup.appendChild(powerList);

        function updatePowerList() {
            const filter = filterInput.value.trim().toLowerCase();
            powerList.innerHTML = '';
            powers.filter(p => p.nome.toLowerCase().includes(filter)).forEach(power => {
                const btn = document.createElement('button');
                btn.textContent = power.nome;
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
                btn.onmouseover = () => {
                    btn.style.background = '#6ec6ff';
                    btn.style.color = '#23243a';
                };
                btn.onmouseout = () => {
                    btn.style.background = '#23243a';
                    btn.style.color = '#fff';
                };
                btn.onclick = power.onClick;
                powerList.appendChild(btn);
            });
        }
        updatePowerList();

        document.body.appendChild(popup);
    }

    // Função para criar popup de conjuração de poder
    function createPowerCastPopup(powerName, powerDisplayName) {
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
        header.style.marginBottom = '15px';
        header.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = powerDisplayName;
        title.style.color = '#ecf0f1';
        title.style.margin = '0';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';

        // Botão de compartilhar descrição
        const shareBtn = document.createElement('button');
        shareBtn.innerHTML = '📤';
        shareBtn.style.background = 'none';
        shareBtn.style.border = 'none';
        shareBtn.style.color = '#6ec6ff';
        shareBtn.style.fontSize = '16px';
        shareBtn.style.cursor = 'pointer';
        shareBtn.style.padding = '4px';
        shareBtn.style.borderRadius = '4px';
        shareBtn.style.transition = 'all 0.2s';
        shareBtn.style.marginRight = '8px';
        shareBtn.title = 'Compartilhar descrição do poder';

        shareBtn.onmouseover = () => {
            shareBtn.style.background = '#6ec6ff';
            shareBtn.style.color = '#23243a';
        };
        shareBtn.onmouseout = () => {
            shareBtn.style.background = 'none';
            shareBtn.style.color = '#6ec6ff';
        };
        shareBtn.onclick = () => {
            const descMessage = '&{template:t20-info}{{infoname=Ervas Curativas}}{{description=Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo. (JdA:51)}}';
            sendToChat(descMessage);
        };

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

        // Container para título e botão de compartilhar
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.appendChild(title);
        titleContainer.appendChild(shareBtn);

        header.appendChild(titleContainer);
        header.appendChild(closeBtn);
        popup.appendChild(header);

        // Descrição do poder
        const description = document.createElement('div');
        description.style.color = '#ecf0f1';
        description.style.marginBottom = '15px';
        description.style.fontSize = '14px';
        description.style.lineHeight = '1.4';
        description.textContent = 'Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo. (JdA:51)';
        popup.appendChild(description);

        // Seletor de PMs
        const pmSection = document.createElement('div');
        pmSection.style.marginBottom = '20px';

        const pmLabel = document.createElement('div');
        pmLabel.textContent = 'Nível do Poder (2d6 por nível):';
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
                // Seleção escalar: seleciona todos os níveis até o clicado
                selectedPMs = i;

                // Atualiza visual de todos os botões
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

        // Botão de conjurar
        const castBtn = document.createElement('button');
        castBtn.textContent = 'Cast';
        castBtn.style.width = '100%';
        castBtn.style.padding = '12px 0';
        castBtn.style.background = '#6ec6ff';
        castBtn.style.color = '#23243a';
        castBtn.style.border = 'none';
        castBtn.style.borderRadius = '8px';
        castBtn.style.fontSize = '16px';
        castBtn.style.fontWeight = 'bold';
        castBtn.style.cursor = 'pointer';
        castBtn.style.transition = 'all 0.2s';
        castBtn.style.marginTop = '10px';

        castBtn.onmouseover = () => {
            castBtn.style.background = '#5bb8ff';
        };
        castBtn.onmouseout = () => {
            castBtn.style.background = '#6ec6ff';
        };

        castBtn.onclick = () => {
            if (selectedPMs === 0) {
                alert('Selecione pelo menos 1 PM para usar!');
                return;
            }

            // Calcula o total de dados (2d6 por PM)
            const totalDice = selectedPMs * 2;
            const diceSides = 6;
            const rollCommand = `/roll ${totalDice}d${diceSides}`;

            // Envia a mensagem de descrição
            const message = `/em usou o poder "${powerDisplayName}"`;

            // Executa o poder com efeito holy
            executeHealingPowerWithHolyEffect(rollCommand, message);

            // Fecha todos os popups relacionados
            const powerCastPopup = document.getElementById('power-cast-popup');
            if (powerCastPopup) powerCastPopup.remove();

            const powerCastOverlay = document.getElementById('power-cast-overlay');
            if (powerCastOverlay) powerCastOverlay.remove();

            const powersPopup = document.getElementById('powers-popup');
            if (powersPopup) powersPopup.remove();

            const powersOverlay = document.getElementById('powers-overlay');
            if (powersOverlay) powersOverlay.remove();
        };

        popup.appendChild(castBtn);

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
            console.log('Erro ao criar áudio de ataque:', error);
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

        function dragEnd(e) {
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

        // Seção do personagem (lado esquerdo)
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
            const novoNivel = prompt('Nível do personagem:', getCharLevel());
            if (novoNivel !== null && novoNivel.trim() !== '') {
                saveCharLevel(novoNivel.trim());
                characterLevel.textContent = `Nível ${novoNivel.trim()}`;
            }
        };

        // Classe do personagem
        const characterClass = document.createElement('div');
        characterClass.textContent = 'Caçador';
        characterClass.style.color = '#8B4513';
        characterClass.style.fontSize = '11px';
        characterClass.style.fontWeight = 'bold';
        characterClass.style.fontStyle = 'italic';
        characterClass.style.textTransform = 'uppercase';
        characterClass.style.letterSpacing = '0.5px';

        characterInfo.appendChild(characterName);
        characterInfo.appendChild(characterLevel);
        characterInfo.appendChild(characterClass);

        characterSection.appendChild(avatarContainer);
        characterSection.appendChild(characterInfo);

        // Linha separadora
        const separator = document.createElement('div');
        separator.style.width = '1px';
        separator.style.height = '60px';
        separator.style.background = 'rgba(110,198,255,0.3)';
        separator.style.margin = '0 10px';

        // Container dos botões (lado direito)
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '18px';
        buttonContainer.style.flexWrap = 'nowrap';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.alignItems = 'center';

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
            let marcaPresaAttackMod = 0;
            let marcaPresaDice = '';
            let marcaPresaDesc = '';
            if (charLevel >= 9) {
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

            // Efeitos (checkboxes)
            const effects = [
                { label: 'Espada Solar (+1d6 dano)', value: 'espada_solar', dice: '1d6', desc: '*+ Espada Solar*' },
                { label: 'Escaramuça (+1d8 dano)', value: 'escaramurca', dice: '1d8', desc: '*+ Escaramuça*' },
                { label: 'Ataque Furtivo (+1d6 dano)', value: 'ataque_furtivo', dice: '1d6', desc: '*+ Ataque Furtivo*' },
                { label: `Marca da Presa (${marcaPresaDesc})`, value: 'marca_presa', dice: marcaPresaDice.replace('+', ''), attackMod: marcaPresaAttackMod, critMod: -2, desc: `*+ Marca da Presa*` },
                { label: 'Inimigo (dobra margem de crítico)', value: 'inimigo', desc: '*+ Inimigo*' }
            ];
            const checkboxes = {};
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
                const span = document.createElement('span');
                span.textContent = effect.label;
                span.style.color = '#ecf0f1';
                span.style.fontSize = '15px';
                container.appendChild(checkbox);
                container.appendChild(span);
                popup.appendChild(container);
            });

            // Botão de atacar
            const attackBtn = document.createElement('button');
            attackBtn.textContent = 'Atacar';
            attackBtn.style.width = '100%';
            attackBtn.style.padding = '12px 0';
            attackBtn.style.background = '#6ec6ff';
            attackBtn.style.color = '#23243a';
            attackBtn.style.border = 'none';
            attackBtn.style.borderRadius = '8px';
            attackBtn.style.fontSize = '16px';
            attackBtn.style.fontWeight = 'bold';
            attackBtn.style.cursor = 'pointer';
            attackBtn.style.transition = 'all 0.2s';
            attackBtn.style.marginTop = '10px';
            attackBtn.onclick = () => {
                // Monta os dados extras e a descrição
                let extraDamage = '';
                let extraDescription = '';
                let critThreshold = 18; // Valor padrão
                let attackBonus = 0; // Bônus de acerto
                let marcaPresaActive = false;
                let inimigoActive = false;

                effects.forEach(effect => {
                    if (checkboxes[effect.value].checked) {
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

                        // Marca se Marca da Presa está ativo
                        if (effect.value === 'marca_presa') {
                            marcaPresaActive = true;
                        }
                        // Marca se Inimigo está ativo
                        if (effect.value === 'inimigo') {
                            inimigoActive = true;
                        }
                    }
                });

                // Se Inimigo está ativo e Marca da Presa também está, dobra a margem de crítico
                if (inimigoActive && marcaPresaActive) {
                    // Se critThreshold já é 16 (devido ao Marca da Presa), muda para 14
                    if (critThreshold === 16) {
                        critThreshold = 14;
                    }
                }

                // Macro base com modificação do acerto crítico e bônus de acerto
                const macro = `&{template:t20-attack}{{character=@{${getCharacterName()}|character_name}}}{{attackname=Espada Longa}}{{attackroll=[[1d20cs>${critThreshold}+[[@{${getCharacterName()}|pontariatotal}+@{${getCharacterName()}|condicaomodataquedis}+@{${getCharacterName()}|condicaomodataque}]]+${attackBonus}+@{${getCharacterName()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterName()}|des_mod}+0+0+@{${getCharacterName()}|danotemp}+@{${getCharacterName()}|rolltemp}${extraDamage}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterName()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Ataque c/ Espada Longa**${extraDescription}}}`;
                executeAttackWithBloodEffect(macro);

                // Fecha popup
                popup.remove();
                const overlay = document.getElementById('attack-effects-overlay');
                if (overlay) overlay.remove();
            };
            popup.appendChild(attackBtn);

            document.body.appendChild(popup);
        }

        // Botões quadrados
        const buttons = [
            {
                label: 'Atacar', icon: '⚔️', onClick: (e) => {
                    if (e && e.ctrlKey) {
                        createAttackEffectsPopup();
                    } else {
                        const macro = `&{template:t20-attack}{{character=@{${getCharacterName()}|character_name}}}{{attackname=Espada Longa}}{{attackroll=[[1d20cs>18+[[@{${getCharacterName()}|pontariatotal}+@{${getCharacterName()}|condicaomodataquedis}+@{${getCharacterName()}|condicaomodataque}]]+0+@{${getCharacterName()}|ataquetemp}]]}} {{damageroll=[[2d8+@{${getCharacterName()}|des_mod}+0+0+@{${getCharacterName()}|danotemp}+@{${getCharacterName()}|rolltemp}]]}} {{criticaldamageroll=[[2d8 + 2d8 + 2d8 + 0 + 0+0+@{${getCharacterName()}|des_mod}+0]]}}{{typeofdamage=Cortante}}{{description=**Ataque c/ Espada Longa**}}`;
                        executeAttackWithBloodEffect(macro);
                    }
                }
            },
            { label: 'Skills', icon: '🧠', onClick: createSkillsPopup },
            { label: 'Spells', icon: '🔮', onClick: createSpellsPopup },
            { label: 'Powers', icon: '✨', onClick: createPowersPopup },
            { label: 'Efeitos', icon: '🌀', onClick: () => alert('Em breve!') }
        ];
        buttons.forEach(btnData => {
            const btn = document.createElement('button');
            btn.style.display = 'flex';
            btn.style.flexDirection = 'column';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.padding = '0';
            btn.style.background = 'rgba(60,80,120,0.95)';
            btn.style.color = '#fff';
            btn.style.border = '2px solid #6ec6ff';
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
                btn.style.background = '#6ec6ff';
                btn.style.color = '#222';
                btn.style.transform = 'scale(1.08)';
            };
            btn.onmouseout = () => {
                btn.style.background = 'rgba(60,80,120,0.95)';
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
            buttonContainer.appendChild(btn);
        });

        // Adiciona as seções ao conteúdo principal
        mainContent.appendChild(characterSection);
        mainContent.appendChild(separator);
        mainContent.appendChild(buttonContainer);

        hotbar.appendChild(mainContent);

        document.body.appendChild(hotbar);
        makeDraggable(hotbar, header);
    }

    // Inicializa quando a página carregar
    waitForElement('#textchat-input').then(() => {
        setTimeout(() => {
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

})();