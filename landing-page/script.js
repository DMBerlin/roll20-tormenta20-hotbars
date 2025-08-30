// Script para a landing page do Tormenta20 Hotbars

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Atualizar informações dinâmicas
    updateDynamicInfo();
    
    // Adicionar efeitos de scroll
    addScrollEffects();
    
    // Adicionar funcionalidade de download
    setupDownloadButton();
});

// Função para atualizar informações dinâmicas
function updateDynamicInfo() {
    // Atualizar versão atual (será buscada da branch main)
    const currentVersionElement = document.getElementById('current-version');
    if (currentVersionElement) {
        // Por enquanto, manter a versão hardcoded
        // Em produção, isso pode ser buscado de uma API ou arquivo de configuração
        currentVersionElement.textContent = '0.3.1';
    }

    // Atualizar data da última atualização
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        lastUpdateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }

    // Atualizar tamanho do arquivo
    const fileSizeElement = document.getElementById('file-size');
    if (fileSizeElement) {
        // Tamanho aproximado baseado no build atual
        fileSizeElement.textContent = '716 KB';
    }

    // Simular contador de downloads
    const downloadCountElement = document.getElementById('download-count');
    if (downloadCountElement) {
        // Em produção, isso seria buscado de uma API
        const baseDownloads = 1200;
        const randomIncrement = Math.floor(Math.random() * 50);
        downloadCountElement.textContent = (baseDownloads + randomIncrement).toLocaleString('pt-BR');
    }
}

// Função para adicionar efeitos de scroll
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-card, .download-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Função para configurar botão de download
function setupDownloadButton() {
    const downloadButton = document.querySelector('.btn-download');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            // Adicionar efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Mostrar notificação de download
            showNotification('Download iniciado! Verifique sua pasta de downloads.', 'success');
        });
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Adicionar ao DOM
    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Configurar fechamento
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Função para detectar navegador e mostrar informações específicas
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browser = 'Chrome';
    let browserIcon = 'assets/chrome-icon.png';

    if (userAgent.includes('Edge')) {
        browser = 'Edge';
        browserIcon = 'assets/edge-icon.png';
    } else if (userAgent.includes('Firefox')) {
        browser = 'Firefox';
        browserIcon = 'assets/firefox-icon.png';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        browser = 'Safari';
        browserIcon = 'assets/safari-icon.png';
    }

    // Atualizar informações do navegador na página
    const browserIconElement = document.querySelector('.browser-icon');
    const browserNameElement = document.querySelector('.card-header h3');
    
    if (browserIconElement) {
        browserIconElement.src = browserIcon;
        browserIconElement.alt = browser;
    }
    
    if (browserNameElement) {
        browserNameElement.textContent = browser;
    }

    return browser;
}

// Função para adicionar contador de downloads
function incrementDownloadCount() {
    const downloadCountElement = document.getElementById('download-count');
    if (downloadCountElement) {
        const currentCount = parseInt(downloadCountElement.textContent.replace(/[^\d]/g, ''));
        const newCount = currentCount + 1;
        downloadCountElement.textContent = newCount.toLocaleString('pt-BR');
        
        // Salvar no localStorage para persistência
        localStorage.setItem('downloadCount', newCount.toString());
    }
}

// Função para inicializar contador de downloads
function initializeDownloadCount() {
    const downloadCountElement = document.getElementById('download-count');
    if (downloadCountElement) {
        const savedCount = localStorage.getItem('downloadCount');
        if (savedCount) {
            downloadCountElement.textContent = parseInt(savedCount).toLocaleString('pt-BR');
        }
    }
}

// Função para adicionar efeito de hover nos cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.feature-card, .download-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para adicionar scroll suave no header
function addHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll para baixo - esconder header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll para cima - mostrar header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    detectBrowser();
    initializeDownloadCount();
    addHoverEffects();
    addHeaderScrollEffect();
    
    // Adicionar transição ao header
    const header = document.querySelector('.header');
    if (header) {
        header.style.transition = 'transform 0.3s ease';
    }
});

// Função para copiar link do GitHub
function copyGitHubLink() {
    const githubUrl = 'https://github.com/DMBerlin/roll20-tormenta20-hotbars';
    navigator.clipboard.writeText(githubUrl).then(() => {
        showNotification('Link do GitHub copiado para a área de transferência!', 'success');
    }).catch(() => {
        showNotification('Erro ao copiar link', 'error');
    });
}

// Função para compartilhar nas redes sociais
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Tormenta20 Hotbars - Chrome Extension');
    const description = encodeURIComponent('Chrome Extension que adiciona hotbars ao Roll20 para o sistema Tormenta20: Jogo do Ano');
    
    let shareUrl = '';
    
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=dmberlin`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}
