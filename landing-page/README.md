# GitHub Pages - Landing Page

Esta documentação explica como configurar e manter a landing page do projeto no GitHub Pages.

## 📁 Estrutura de Arquivos

```
landing-page/
├── index.html              # Página principal
├── styles.css              # Estilos da página
├── script.js               # JavaScript interativo
├── assets/                 # Imagens e ícones
│   └── icon-128.png        # Ícone da extensão
├── package/                # Arquivos da extensão para download
│   ├── content.js          # Script principal
│   ├── manifest.json       # Manifesto da extensão
│   └── icons/              # Ícones da extensão
├── update-landing-page.js  # Script de atualização
└── README.md               # Esta documentação
```

## 🚀 Configuração Inicial

### 1. Ativar GitHub Pages

1. Vá para **Settings** > **Pages** no repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **main** e pasta **/landing-page**
4. Clique em **Save**

### 2. Configurar GitHub Actions (Opcional)

O arquivo `.github/workflows/deploy.yml` será criado automaticamente pelo script `landing-page/update-landing-page.js`.

## 🔄 Atualização Automática

### Script de Atualização

```bash
# Atualizar landing page com versão da branch main
pnpm update-landing
```

Este script:
- Busca a versão da branch main
- Atualiza o HTML com informações corretas
- Copia arquivos necessários para landing-page/
- Cria configuração do GitHub Actions

### Fluxo de Trabalho

1. **Desenvolvimento** (branch develop):
   ```bash
   # Fazer alterações
   git add .
   git commit -m "Nova funcionalidade"
   pnpm update-version  # Gera versão com timestamp
   ```

2. **Release** (branch main):
   ```bash
   # Merge da develop para main
   git checkout main
   git merge develop
   
   # Atualizar versão manual
   # Editar package.json: "version": "0.3.1"
   pnpm sync-version
   
   # Criar tag
   pnpm create-tag -- --message="Release 0.3.1"
   
   # Atualizar landing page
   pnpm update-landing
   
   # Commit e push
   git add .
   git commit -m "Update landing page for v0.3.1"
   git push origin main
   ```

## 📊 Informações Exibidas

A landing page exibe automaticamente:

- **Versão atual** da branch main
- **Tamanho do arquivo** da extensão
- **Data da última atualização**
- **Contador de downloads** (simulado)

## 🎨 Personalização

### Cores e Estilo

As cores principais estão definidas em `landing-page/styles.css`:

```css
:root {
    --primary-color: #6ec6ff;      /* Azul principal */
    --secondary-color: #ffb86c;    /* Laranja secundário */
    --accent-color: #8B4513;       /* Marrom acento */
    --text-primary: #ecf0f1;       /* Texto principal */
    --bg-primary: #1a1a1a;         /* Fundo principal */
}
```

### Conteúdo

Edite o arquivo `landing-page/index.html` para modificar:
- Textos e descrições
- Seções de recursos
- FAQ
- Informações de contato

## 🔧 Funcionalidades JavaScript

### Efeitos Interativos

- **Smooth scrolling** para navegação
- **Animações de entrada** para elementos
- **Detecção de navegador** para mostrar ícones corretos
- **Contador de downloads** persistente
- **Notificações** de feedback

### Funções Disponíveis

```javascript
// Mostrar notificação
showNotification('Mensagem', 'success');

// Detectar navegador
detectBrowser();

// Compartilhar nas redes sociais
shareOnSocial('twitter');
```

## 📱 Responsividade

A página é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔍 SEO e Meta Tags

### Open Graph

```html
<meta property="og:title" content="Tormenta20 Hotbars - Chrome Extension">
<meta property="og:description" content="Chrome Extension que adiciona hotbars ao Roll20">
<meta property="og:image" content="https://dmberlin.github.io/roll20-tormenta20-hotbars/assets/og-image.png">
```

### Twitter Cards

```html
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="Tormenta20 Hotbars - Chrome Extension">
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Página não atualiza**:
   - Verifique se o GitHub Actions está funcionando
   - Confirme se a branch main está atualizada

2. **Download não funciona**:
   - Verifique se a pasta `landing-page/package/` existe
   - Confirme se `content.js` está presente

3. **Imagens não carregam**:
   - Verifique se a pasta `landing-page/assets/` existe
   - Confirme se os arquivos foram copiados corretamente

### Logs do GitHub Actions

Verifique os logs em **Actions** > **Deploy to GitHub Pages** para identificar problemas de build.

## 📈 Analytics (Opcional)

Para adicionar analytics:

1. **Google Analytics**:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **GitHub Analytics**:
   ```html
   <!-- GitHub Analytics -->
   <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
   <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
   ```

## 🔗 Links Úteis

- **URL da Landing Page**: https://dmberlin.github.io/roll20-tormenta20-hotbars/
- **Repositório**: https://github.com/DMBerlin/roll20-tormenta20-hotbars
- **Issues**: https://github.com/DMBerlin/roll20-tormenta20-hotbars/issues
- **Documentação**: https://github.com/DMBerlin/roll20-tormenta20-hotbars/blob/main/README.md
