/**
 * Auto-Update System for Tormenta20 Hotbars Chrome Extension
 * 
 * This module handles checking for updates and notifying users
 * when a new version is available.
 */

class UpdateChecker {
  constructor() {
    this.currentVersion = this.getCurrentVersion();
    this.updateCheckInterval = 24 * 60 * 60 * 1000; // 24 hours
    this.lastCheckKey = 'tormenta20-hotbars-last-update-check';
    this.updateNotificationKey = 'tormenta20-hotbars-update-notification';
    this.githubRepo = 'DMBerlin/roll20-tormenta20-hotbars';
    this.updateApiUrl = `https://api.github.com/repos/${this.githubRepo}/releases/latest`;

    this.init();
  }

  getCurrentVersion() {
    // Try multiple methods to get the current version
    let version = '0.0.0';

    // Method 1: Extract from script tag content
    const scriptTags = document.querySelectorAll('script');
    for (const script of scriptTags) {
      if (script.textContent && script.textContent.includes('SCRIPT_VERSION')) {
        const versionMatch = /const SCRIPT_VERSION = '([^']+)';/.exec(script.textContent);
        if (versionMatch) {
          version = versionMatch[1];
          console.log('📦 Version found in script tag:', version);
          break;
        }
      }
    }

    // Method 2: Extract from document HTML (fallback)
    if (version === '0.0.0') {
      const versionMatch = /const SCRIPT_VERSION = '([^']+)';/.exec(document.documentElement.innerHTML);
      if (versionMatch) {
        version = versionMatch[1];
        console.log('📦 Version found in document HTML:', version);
      }
    }

    // Method 3: Check if SCRIPT_VERSION is available globally
    if (version === '0.0.0' && typeof window.SCRIPT_VERSION !== 'undefined') {
      version = window.SCRIPT_VERSION;
      console.log('📦 Version found in global variable:', version);
    }

    console.log('📦 Final detected version:', version);
    return version;
  }

  async init() {
    // Check for updates on first load
    await this.checkForUpdates();

    // Set up periodic checks
    this.setupPeriodicChecks();

    // Listen for manual update checks
    this.setupManualCheck();
  }

  async checkForUpdates() {
    try {
      console.log('🔍 Checking for updates...');

      const response = await fetch(this.updateApiUrl);

      // Handle different response statuses
      if (response.status === 404) {
        console.log('📦 No releases found on GitHub yet');
        this.showNoReleasesMessage();
        return;
      }

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const release = await response.json();
      const latestVersion = release.tag_name.replace('v', '');

      console.log(`📦 Current version: ${this.currentVersion}`);
      console.log(`📦 Latest version: ${latestVersion}`);

      const isNewer = this.isNewerVersion(latestVersion, this.currentVersion);
      console.log(`📦 Is latest version newer? ${isNewer}`);

      if (isNewer) {
        console.log('🆕 New version available!');
        await this.showUpdateNotification(release);
      } else {
        console.log('✅ Extension is up to date');
        this.showUpToDateMessage();
      }

      // Store last check time
      localStorage.setItem(this.lastCheckKey, Date.now().toString());

    } catch (error) {
      console.error('❌ Error checking for updates:', error);
      this.showErrorMessage(error);
    }
  }

  isNewerVersion(latest, current) {
    // Simple version comparison with debugging
    console.log(`🔍 Comparing versions: latest="${latest}" vs current="${current}"`);

    const latestParts = latest.split('.').map(Number);
    const currentParts = current.split('.').map(Number);

    console.log(`🔍 Latest parts: [${latestParts.join(', ')}]`);
    console.log(`🔍 Current parts: [${currentParts.join(', ')}]`);

    for (let i = 0; i < Math.max(latestParts.length, currentParts.length); i++) {
      const latestPart = latestParts[i] || 0;
      const currentPart = currentParts[i] || 0;

      console.log(`🔍 Part ${i}: latest=${latestPart}, current=${currentPart}`);

      if (latestPart > currentPart) {
        console.log(`🔍 Latest is newer: ${latestPart} > ${currentPart}`);
        return true;
      }
      if (latestPart < currentPart) {
        console.log(`🔍 Current is newer: ${latestPart} < ${currentPart}`);
        return false;
      }
    }

    console.log(`🔍 Versions are equal`);
    return false;
  }

  async showUpdateNotification(release) {
    // Check if user has already been notified about this version
    const lastNotification = localStorage.getItem(this.updateNotificationKey);
    if (lastNotification === release.tag_name) {
      return; // Already notified about this version
    }

    // Create update notification
    const notification = this.createUpdateNotification(release);
    document.body.appendChild(notification);

    // Store that we've notified about this version
    localStorage.setItem(this.updateNotificationKey, release.tag_name);

    // Auto-remove notification after 30 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 30000);
  }

  showNoReleasesMessage() {
    const notification = document.createElement('div');
    notification.id = 'tormenta20-no-releases-notification';
    notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
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
                        background: #FF5722;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        font-size: 14px;
                    ">📦</div>
                    <div style="font-weight: bold; font-size: 16px;">Nenhuma Release Disponível</div>
                </div>
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 14px; margin-bottom: 5px;">
                        Ainda não há releases publicadas no GitHub
                    </div>
                    <div style="font-size: 12px; opacity: 0.9;">
                        Você está usando a versão de desenvolvimento (${this.currentVersion})
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="no-releases-dismiss-btn" style="
                        background: #FF5722;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">Entendi</button>
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

    notification.querySelector('#no-releases-dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });

    // Auto-remove notification after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 10000);
  }

  showUpToDateMessage() {
    const notification = document.createElement('div');
    notification.id = 'tormenta20-up-to-date-notification';
    notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
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
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        font-size: 14px;
                        color: #4CAF50;
                    ">✓</div>
                    <div style="font-weight: bold; font-size: 16px;">Extensão Atualizada!</div>
                </div>
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 14px; margin-bottom: 5px;">
                        Você está usando a versão mais recente
                    </div>
                    <div style="font-size: 12px; opacity: 0.9;">
                        Versão atual: ${this.currentVersion}
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="up-to-date-dismiss-btn" style="
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">Ótimo!</button>
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

    notification.querySelector('#up-to-date-dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  showErrorMessage(error) {
    console.error('Showing error message:', error);
    const notification = document.createElement('div');
    notification.id = 'tormenta20-error-notification';
    notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
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
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        font-size: 14px;
                        color: #f44336;
                    ">✗</div>
                    <div style="font-weight: bold; font-size: 16px;">Erro na Verificação</div>
                </div>
                <div style="margin-bottom: 15px;">
                    <div style="font-size: 14px; margin-bottom: 5px;">
                        Não foi possível verificar atualizações
                    </div>
                    <div style="font-size: 12px; opacity: 0.9;">
                        Verifique sua conexão com a internet
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="error-dismiss-btn" style="
                        background: #f44336;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">Fechar</button>
                    <button id="error-manual-btn" style="
                        background: transparent;
                        color: white;
                        border: 1px solid rgba(255,255,255,0.3);
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">Verificar Manualmente</button>
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

    notification.querySelector('#error-dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });

    notification.querySelector('#error-manual-btn').addEventListener('click', () => {
      notification.remove();
      this.showManualCheckInstructions();
    });

    // Auto-remove notification after 8 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 8000);
  }

  showManualCheckInstructions() {
    const instructions = document.createElement('div');
    instructions.id = 'tormenta20-manual-check-instructions';
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
                <h3 style="margin-top: 0; color: #667eea;">🔍 Verificação Manual de Atualizações</h3>
                <p>Para verificar se há uma nova versão disponível:</p>
                <ol style="line-height: 1.6;">
                    <li>Visite: <a href="https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases" target="_blank" style="color: #667eea;">GitHub Releases</a></li>
                    <li>Compare a versão mais recente com a sua (${this.currentVersion})</li>
                    <li>Se houver uma versão mais nova, baixe o arquivo <code>tormenta20-hotbars-[versão].zip</code></li>
                    <li>Siga as instruções de instalação</li>
                </ol>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <strong>💡 Dica:</strong> O sistema verifica automaticamente a cada 24 horas. Você pode aguardar a próxima verificação automática.
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <button id="close-manual-check-instructions" style="
                        background: #667eea;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-right: 10px;
                    ">Fechar</button>
                    <button id="open-github-releases-manual" style="
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

    instructions.querySelector('#close-manual-check-instructions').addEventListener('click', () => {
      instructions.remove();
    });

    instructions.querySelector('#open-github-releases-manual').addEventListener('click', () => {
      window.open('https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases', '_blank');
      instructions.remove();
    });
  }

  stripMarkdown(text) {
    if (!text) return '';

    return text
      // Remove CHANGELOG extraction markers
      .replace(/✅ CHANGELOG content extracted:[\s\S]*?---/g, '')
      // Remove headers
      .replace(/#{1,6}\s+/g, '')
      // Remove bold/italic
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      // Remove list markers
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      // Clean up extra whitespace
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  createUpdateNotification(release) {
    const cleanDescription = this.stripMarkdown(release.body || '');
    const shortDescription = cleanDescription.substring(0, 100);
    const displayText = shortDescription + (cleanDescription.length > 100 ? '...' : '');

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
                z-index: 99999;
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
                        <strong>Versão ${release.tag_name}</strong> está disponível
                    </div>
                    <div style="font-size: 12px; opacity: 0.9; line-height: 1.4;">
                        ${displayText || 'Melhorias e correções'}
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

    // Add event listeners
    notification.querySelector('#update-download-btn').addEventListener('click', () => {
      this.openUpdatePage(release);
      notification.remove();
    });

    notification.querySelector('#update-dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });

    return notification;
  }

  openUpdatePage(release) {
    // Open the GitHub release page in a new tab
    const releaseUrl = `https://github.com/${this.githubRepo}/releases/tag/${release.tag_name}`;
    window.open(releaseUrl, '_blank');

    // Also show instructions for manual update
    this.showUpdateInstructions();
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
                <h3 style="margin-top: 0; color: #667eea;">Como Atualizar a Extensão</h3>
                <ol style="line-height: 1.6;">
                    <li>Baixe o arquivo <code>package.zip</code> da página de release</li>
                    <li>Extraia o arquivo em uma pasta</li>
                    <li>Abra <code>chrome://extensions/</code></li>
                    <li>Ative o "Modo desenvolvedor"</li>
                    <li>Clique em "Carregar sem compactação"</li>
                    <li>Selecione a pasta extraída</li>
                    <li>Recarregue a página do Roll20</li>
                </ol>
                <div style="text-align: center; margin-top: 20px;">
                    <button id="close-instructions" style="
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

    instructions.querySelector('#close-instructions').addEventListener('click', () => {
      instructions.remove();
    });
  }

  setupPeriodicChecks() {
    // Check for updates every 24 hours
    setInterval(async () => {
      const lastCheck = localStorage.getItem(this.lastCheckKey);
      const now = Date.now();

      if (!lastCheck || (now - parseInt(lastCheck)) > this.updateCheckInterval) {
        await this.checkForUpdates();
      }
    }, 60 * 60 * 1000); // Check every hour
  }

  setupManualCheck() {
    // Add manual check button to the hotbar if it exists
    const checkForUpdates = async () => {
      try {
        console.log('🔍 Verificação manual de updates iniciada...');

        // Clear the notification flag to allow re-showing the notification
        const response = await fetch(this.updateApiUrl);
        if (response.ok) {
          await response.json();
          localStorage.removeItem(this.updateNotificationKey);
        }

        // Forçar verificação imediata
        await this.checkForUpdates();

      } catch (error) {
        console.error('❌ Erro na verificação manual:', error);
        this.showErrorMessage(error);
      }
    };

    // Expose manual check function globally
    window.tormenta20CheckForUpdates = checkForUpdates;
  }

  showCheckError(error) {
    console.error('Showing check error:', error);
    // Criar notificação de erro
    const errorNotification = document.createElement('div');
    errorNotification.id = 'tormenta20-check-error';
    errorNotification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                font-family: Arial, sans-serif;
                animation: slideIn 0.3s ease-out;
                max-width: 300px;
            ">
                <div style="display: flex; align-items: center;">
                    <div style="
                        width: 20px;
                        height: 20px;
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        font-size: 12px;
                        color: #f44336;
                    ">✗</div>
                    <div>
                        <div style="font-weight: bold;">Erro na verificação</div>
                        <div style="font-size: 12px; opacity: 0.9; margin-top: 2px;">
                            Verifique sua conexão com a internet
                        </div>
                    </div>
                </div>
            </div>
            <style>
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
        `;

    document.body.appendChild(errorNotification);

    // Remover após 5 segundos
    setTimeout(() => {
      if (errorNotification.parentNode) {
        errorNotification.parentNode.removeChild(errorNotification);
      }
    }, 5000);
  }
}

// Initialize update checker when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new UpdateChecker();
  });
} else {
  new UpdateChecker();
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UpdateChecker;
}
