/**
 * Script de teste para verificação manual de updates
 * 
 * Este script pode ser executado no console do navegador para testar
 * a funcionalidade de verificação manual de updates.
 */

// Função para testar verificação manual
function testManualUpdateCheck() {
  console.log('🧪 Testando verificação manual de updates...');

  // Verificar se a função está disponível
  if (typeof window.tormenta20CheckForUpdates === 'function') {
    console.log('✅ Função de verificação manual encontrada');

    // Executar verificação
    window.tormenta20CheckForUpdates();

    console.log('🔍 Verificação manual executada');
  } else {
    console.log('❌ Função de verificação manual não encontrada');
    console.log('💡 Certifique-se de que o sistema de auto-update está carregado');
  }
}

// Função para testar interface de configurações
function testConfigInterface() {
  console.log('🧪 Testando interface de configurações...');

  // Verificar se a função createConfigModal existe
  if (typeof createConfigModal === 'function') {
    console.log('✅ Função createConfigModal encontrada');

    // Abrir modal de configurações
    createConfigModal();

    console.log('🔧 Modal de configurações aberto');
    console.log('💡 Verifique se o botão "Verificar Atualizações" está visível');
  } else {
    console.log('❌ Função createConfigModal não encontrada');
    console.log('💡 Certifique-se de que o script principal está carregado');
  }
}

// Função para testar notificações
function testNotifications() {
  console.log('🧪 Testando sistema de notificações...');

  // Testar notificação de verificação
  const feedback = document.createElement('div');
  feedback.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: Arial, sans-serif;
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
                    color: #2196F3;
                ">🧪</div>
                <div style="font-weight: bold;">Teste de Notificação</div>
            </div>
        </div>
    `;

  document.body.appendChild(feedback);

  // Remover após 3 segundos
  setTimeout(() => {
    if (feedback.parentNode) {
      feedback.parentNode.removeChild(feedback);
    }
  }, 3000);

  console.log('✅ Notificação de teste exibida');
}

// Função para testar GitHub API
async function testGitHubAPI() {
  console.log('🧪 Testando conexão com GitHub API...');

  try {
    const response = await fetch('https://api.github.com/repos/DMBerlin/roll20-tormenta20-hotbars/releases/latest');

    if (response.ok) {
      const release = await response.json();
      console.log('✅ Conexão com GitHub API bem-sucedida');
      console.log('📦 Última release:', release.tag_name);
      console.log('📝 Nome:', release.name);
      console.log('📅 Data:', release.published_at);
    } else if (response.status === 404) {
      console.log('📦 Nenhuma release encontrada (404) - Comportamento esperado');
      console.log('💡 Isso significa que ainda não há releases publicadas');
    } else {
      console.log('❌ Erro na resposta da API:', response.status);
    }
  } catch (error) {
    console.log('❌ Erro na conexão com GitHub API:', error.message);
  }
}

// Função para testar cenário de "nenhuma release"
function testNoReleasesScenario() {
  console.log('🧪 Testando cenário de "nenhuma release"...');

  // Simular notificação de "nenhuma release"
  const notification = document.createElement('div');
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
                    Você está usando a versão de desenvolvimento
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="test-no-releases-dismiss" style="
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
    `;

  document.body.appendChild(notification);

  notification.querySelector('#test-no-releases-dismiss').addEventListener('click', () => {
    notification.remove();
  });

  // Remover após 5 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);

  console.log('✅ Notificação de "nenhuma release" exibida');
}

// Função para testar modal de "nova versão disponível"
function testNewVersionAvailable() {
  console.log('🧪 Testando modal de "nova versão disponível"...');

  // Dados de teste para simular uma nova versão
  const mockUpdateData = {
    version: '0.4.4',
    tag: 'v0.4.4',
    description: 'Nova versão com melhorias na busca global e indexação de poderes',
    html_url: 'https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases/tag/v0.4.4',
    published_at: new Date().toISOString(),
    name: 'Release 0.4.4: Complete Search Indexing'
  };

  // Simular notificação de nova versão disponível
  const notification = document.createElement('div');
  notification.id = 'tormenta20-update-notification-test';
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
                    <strong>Versão ${mockUpdateData.version}</strong> está disponível
                </div>
                <div style="font-size: 12px; opacity: 0.9;">
                    ${mockUpdateData.description}
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="test-update-download-btn" style="
                    background: #4CAF50;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: bold;
                ">Baixar Atualização</button>
                <button id="test-update-dismiss-btn" style="
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

  // Adicionar event listeners para os botões
  notification.querySelector('#test-update-download-btn').addEventListener('click', () => {
    console.log('🔗 Simulando clique em "Baixar Atualização"');
    console.log('📦 URL da release:', mockUpdateData.html_url);

    // Simular abertura da página de release
    const releaseUrl = mockUpdateData.html_url;
    console.log('🌐 Abrindo URL:', releaseUrl);

    // Mostrar instruções de instalação
    showTestInstallationInstructions();

    notification.remove();
  });

  notification.querySelector('#test-update-dismiss-btn').addEventListener('click', () => {
    console.log('❌ Simulando clique em "Depois"');
    notification.remove();
  });

  // Auto-remover após 30 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 30000);

  console.log('✅ Modal de "nova versão disponível" exibido');
  console.log('📊 Dados da versão:', mockUpdateData);
}

// Função para mostrar instruções de instalação de teste
function showTestInstallationInstructions() {
  const instructions = document.createElement('div');
  instructions.id = 'tormenta20-test-installation-instructions';
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
            <h3 style="margin-top: 0; color: #667eea;">📦 Instruções de Instalação (TESTE)</h3>
            <p>Este é um teste do sistema de atualização. Para instalar uma nova versão:</p>
            <ol style="line-height: 1.6;">
                <li>Baixe o arquivo <code>tormenta20-hotbars-[versão].zip</code> da release</li>
                <li>Extraia o arquivo ZIP</li>
                <li>Abra <code>chrome://extensions/</code></li>
                <li>Ative o "Modo desenvolvedor"</li>
                <li>Clique em "Carregar sem compactação"</li>
                <li>Selecione a pasta extraída</li>
            </ol>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <strong>🧪 Modo Teste:</strong> Esta é uma simulação do sistema de atualização.
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button id="close-test-instructions" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                ">Fechar</button>
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

  instructions.querySelector('#close-test-instructions').addEventListener('click', () => {
    instructions.remove();
  });

  console.log('📋 Instruções de instalação de teste exibidas');
}

// Função para executar todos os testes
function runAllTests() {
  console.log('🚀 Executando todos os testes do sistema de auto-update...');
  console.log('================================================');

  // Teste 1: Verificação manual
  console.log('\n1️⃣ Testando verificação manual...');
  testManualUpdateCheck();

  // Teste 2: Interface de configurações
  console.log('\n2️⃣ Testando interface de configurações...');
  testConfigInterface();

  // Teste 3: Notificações
  console.log('\n3️⃣ Testando notificações...');
  testNotifications();

  // Teste 4: GitHub API
  console.log('\n4️⃣ Testando GitHub API...');
  testGitHubAPI();

  // Teste 5: Cenário de "nenhuma release"
  console.log('\n5️⃣ Testando cenário de "nenhuma release"...');
  testNoReleasesScenario();

  // Teste 6: Modal de "nova versão disponível"
  console.log('\n6️⃣ Testando modal de "nova versão disponível"...');
  testNewVersionAvailable();

  console.log('\n✅ Todos os testes executados!');
  console.log('💡 Verifique os resultados acima e o comportamento visual');
}

// Expor funções globalmente para uso no console
window.testManualUpdateCheck = testManualUpdateCheck;
window.testConfigInterface = testConfigInterface;
window.testNotifications = testNotifications;
window.testGitHubAPI = testGitHubAPI;
window.testNoReleasesScenario = testNoReleasesScenario;
window.testNewVersionAvailable = testNewVersionAvailable;
window.runAllTests = runAllTests;

// Executar testes automaticamente se estiver em modo de desenvolvimento
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('🔧 Modo de desenvolvimento detectado');
  console.log('💡 Use runAllTests() para executar todos os testes');
}

console.log('🧪 Script de teste de auto-update carregado');
console.log('💡 Comandos disponíveis:');
console.log('   - testManualUpdateCheck()');
console.log('   - testConfigInterface()');
console.log('   - testNotifications()');
console.log('   - testGitHubAPI()');
console.log('   - testNoReleasesScenario()');
console.log('   - testNewVersionAvailable()  ← NOVO: Testa modal de nova versão');
console.log('   - runAllTests()');
