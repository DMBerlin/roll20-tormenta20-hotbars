/**
 * Update Installer for Tormenta20 Hotbars Chrome Extension
 * 
 * This module provides a simple update mechanism that guides users
 * through the manual update process.
 */

class UpdateInstaller {
  constructor() {
    this.installerKey = 'tormenta20-hotbars-installer';
    this.setupInstaller();
  }

  setupInstaller() {
    // Add update installer button to the hotbar if it exists
    this.addInstallerButton();

    // Listen for update events
    this.setupUpdateListeners();
  }

  addInstallerButton() {
    // This will be called when the hotbar is created
    const addButton = () => {
      const hotbar = document.getElementById('tormenta20-hotbar');
      if (!hotbar) return;

      // Check if button already exists
      if (document.getElementById('update-installer-btn')) return;

      const updateButton = document.createElement('div');
      updateButton.id = 'update-installer-btn';
      updateButton.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: bold;
                    text-align: center;
                    margin: 2px;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                " title="Verificar Atualizações">
                    🔄 Atualizar
                </div>
            `;

      // Add hover effects
      updateButton.addEventListener('mouseenter', () => {
        updateButton.style.transform = 'scale(1.05)';
        updateButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      });

      updateButton.addEventListener('mouseleave', () => {
        updateButton.style.transform = 'scale(1)';
        updateButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
      });

      // Add click handler
      updateButton.addEventListener('click', () => {
        this.manualUpdateCheck();
      });

      // Insert at the beginning of the hotbar
      hotbar.insertBefore(updateButton, hotbar.firstChild);
    };

    // Try to add button immediately
    addButton();

    // Also try when hotbar is created
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.id === 'tormenta20-hotbar') {
              setTimeout(addButton, 100);
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  manualUpdateCheck() {
    // Trigger manual update check
    if (window.tormenta20CheckForUpdates) {
      window.tormenta20CheckForUpdates();
    } else {
      this.showUpdateInstructions();
    }
  }

  showUpdateInstructions() {
    const instructions = document.createElement('div');
    instructions.id = 'tormenta20-update-instructions';
    instructions.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 10001;
                max-width: 500px;
                font-family: Arial, sans-serif;
                color: #333;
            ">
                <h3 style="margin-top: 0; color: #667eea;">🔄 Verificar Atualizações</h3>
                <p>Para verificar se há uma nova versão disponível:</p>
                <ol style="line-height: 1.6;">
                    <li>Visite: <a href="https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases" target="_blank" style="color: #667eea;">GitHub Releases</a></li>
                    <li>Compare a versão mais recente com a sua</li>
                    <li>Se houver uma versão mais nova, baixe o arquivo <code>package.zip</code></li>
                    <li>Siga as instruções de instalação</li>
                </ol>
                <div style="text-align: center; margin-top: 20px;">
                    <button id="close-instructions" style="
                        background: #667eea;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-right: 10px;
                    ">Fechar</button>
                    <button id="open-github" style="
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    ">Abrir GitHub</button>
                </div>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
            "></div>
        `;

    document.body.appendChild(instructions);

    instructions.querySelector('#close-instructions').addEventListener('click', () => {
      instructions.remove();
    });

    instructions.querySelector('#open-github').addEventListener('click', () => {
      window.open('https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases', '_blank');
      instructions.remove();
    });
  }

  setupUpdateListeners() {
    // Listen for update events from the update checker
    window.addEventListener('tormenta20-update-available', (event) => {
      this.handleUpdateAvailable(event.detail);
    });
  }

  handleUpdateAvailable(updateData) {
    // Show update notification with install button
    this.showUpdateNotification(updateData);
  }

  showUpdateNotification(updateData) {
    const notification = document.createElement('div');
    notification.id = 'tormenta20-update-notification';
    notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 10000;
                max-width: 350px;
                font-family: Arial, sans-serif;
                animation: slideIn 0.3s ease-out;
            ">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <div style="
                        width: 24px;
                        height: 24px;
                        background: #4CAF50;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        font-size: 14px;
                    ">🆕</div>
                    <div style="font-weight: bold; font-size: 16px;">Nova Versão Disponível!</div>
                </div>
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 14px; margin-bottom: 5px;">
                        <strong>Versão ${updateData.version}</strong> está disponível
                    </div>
                    <div style="font-size: 12px; opacity: 0.9;">
                        ${updateData.description || 'Melhorias e correções'}
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="update-download-btn" style="
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">Baixar Atualização</button>
                    <button id="update-dismiss-btn" style="
                        background: transparent;
                        color: white;
                        border: 1px solid rgba(255,255,255,0.3);
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">Depois</button>
                </div>
            </div>
            <style>
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
        `;

    document.body.appendChild(notification);

    // Add event listeners
    notification.querySelector('#update-download-btn').addEventListener('click', () => {
      this.openUpdatePage(updateData);
      notification.remove();
    });

    notification.querySelector('#update-dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });

    // Auto-remove notification after 30 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 30000);
  }

  openUpdatePage(updateData) {
    // Open the GitHub release page in a new tab
    const releaseUrl = `https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases/tag/${updateData.tag}`;
    window.open(releaseUrl, '_blank');

    // Show installation instructions
    this.showInstallationInstructions();
  }

  showInstallationInstructions() {
    const instructions = document.createElement('div');
    instructions.id = 'tormenta20-installation-instructions';
    instructions.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 10001;
                max-width: 600px;
                font-family: Arial, sans-serif;
                color: #333;
            ">
                <h3 style="margin-top: 0; color: #667eea;">📦 Como Instalar a Atualização</h3>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <strong>⚠️ Importante:</strong> Você precisará reinstalar a extensão manualmente, pois o Chrome não permite auto-atualização para extensões carregadas em modo desenvolvedor.
                </div>
                <ol style="line-height: 1.6;">
                    <li><strong>Baixe a nova versão:</strong> Clique no link que abriu e baixe o arquivo <code>tormenta20-hotbars-[versão].zip</code></li>
                    <li><strong>Extraia o arquivo:</strong> Extraia o conteúdo do ZIP em uma pasta</li>
                    <li><strong>Remova a versão antiga:</strong> Vá para <code>chrome://extensions/</code> e remova a extensão atual</li>
                    <li><strong>Instale a nova versão:</strong>
                        <ul style="margin-top: 10px;">
                            <li>Ative o "Modo desenvolvedor"</li>
                            <li>Clique em "Carregar sem compactação"</li>
                            <li>Selecione a pasta extraída</li>
                        </ul>
                    </li>
                    <li><strong>Recarregue o Roll20:</strong> Atualize a página do Roll20 para ativar a nova versão</li>
                </ol>
                <div style="text-align: center; margin-top: 20px;">
                    <button id="close-installation-instructions" style="
                        background: #667eea;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    ">Entendi</button>
                </div>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
            "></div>
        `;

    document.body.appendChild(instructions);

    instructions.querySelector('#close-installation-instructions').addEventListener('click', () => {
      instructions.remove();
    });
  }
}

// Initialize update installer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new UpdateInstaller();
  });
} else {
  new UpdateInstaller();
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UpdateInstaller;
}
