# Sistema de Auto-Update para Tormenta20 Hotbars

Este sistema implementa um mecanismo de auto-atualização para a extensão Chrome Tormenta20 Hotbars, permitindo que os usuários sejam notificados sobre novas versões e recebam instruções para atualizar manualmente.

## 🚀 Como Funciona

### 1. **Verificação Automática de Updates**
- O sistema verifica automaticamente por novas versões a cada 24 horas
- Usa a API do GitHub para verificar releases
- Compara a versão atual com a versão mais recente disponível

### 2. **Notificações de Update**
- Mostra notificações elegantes quando uma nova versão está disponível
- Inclui informações sobre a nova versão e changelog
- Permite ao usuário baixar a atualização ou adiar

### 3. **Instruções de Instalação**
- Fornece instruções passo-a-passo para instalar a nova versão
- Explica o processo de remoção da versão antiga e instalação da nova
- Inclui links diretos para o GitHub Releases

## 📁 Arquivos do Sistema

### `update-checker.js`
- **Função**: Verifica por novas versões automaticamente
- **Recursos**:
  - Verificação periódica (24h)
  - Comparação de versões
  - Notificações automáticas
  - Cache de notificações para evitar spam

### `update-installer.js`
- **Função**: Fornece interface para instalação de updates
- **Recursos**:
  - Botão de atualização na hotbar
  - Instruções detalhadas de instalação
  - Links diretos para downloads
  - Interface amigável

## 🔧 Configuração

### GitHub Repository
O sistema está configurado para usar o repositório:
```
DMBerlin/roll20-tormenta20-hotbars
```

### API Endpoint
```
https://api.github.com/repos/DMBerlin/roll20-tormenta20-hotbars/releases/latest
```

### Permissões Necessárias
- `storage`: Para cache de verificações
- `activeTab`: Para notificações
- Acesso à API do GitHub (sem autenticação necessária)

## 🚀 Processo de Release

### 1. **Criar Nova Release**
```bash
# Usar o script de release automático
pnpm run release --version=1.0.0 --message="Nova funcionalidade X"

# Ou manualmente
pnpm run build
git add .
git commit -m "Release 1.0.0"
git tag v1.0.0
git push origin HEAD --tags
```

### 2. **GitHub Actions**
- Automaticamente cria um arquivo ZIP com a extensão
- Anexa o arquivo à release do GitHub
- Gera release notes automaticamente

### 3. **Notificação aos Usuários**
- Usuários recebem notificação na próxima verificação (máximo 24h)
- Podem baixar e instalar a nova versão
- Recebem instruções detalhadas

## 🎯 Fluxo do Usuário

### Quando uma Nova Versão é Lançada:

1. **Detecção Automática**
   - Sistema verifica GitHub API
   - Compara versões
   - Detecta nova versão disponível

2. **Notificação**
   - Mostra notificação elegante
   - Inclui informações da versão
   - Oferece opções de ação

3. **Download e Instalação**
   - Usuário clica em "Baixar Atualização"
   - Abre página do GitHub Releases
   - Recebe instruções detalhadas

4. **Instalação Manual**
   - Baixa arquivo ZIP
   - Remove versão antiga do Chrome
   - Instala nova versão
   - Recarrega Roll20

## 🔧 Personalização

### Alterar Intervalo de Verificação
```javascript
// Em update-checker.js
this.updateCheckInterval = 12 * 60 * 60 * 1000; // 12 horas
```

### Alterar Repositório
```javascript
// Em update-checker.js
this.githubRepo = 'seu-usuario/seu-repositorio';
```

### Personalizar Notificações
```javascript
// Em update-checker.js - método createUpdateNotification()
// Personalize o HTML e CSS da notificação
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Notificações não aparecem**
   - Verifique se o usuário não bloqueou notificações
   - Confirme se a versão está sendo detectada corretamente

2. **Verificação não funciona**
   - Verifique conectividade com GitHub API
   - Confirme se o repositório está correto
   - Verifique se as tags estão sendo criadas

3. **Instalação falha**
   - Verifique se o usuário tem permissões adequadas
   - Confirme se o arquivo ZIP está sendo baixado corretamente

### Logs de Debug
```javascript
// Ativar logs detalhados
console.log('🔍 Checking for updates...');
console.log(`📦 Current version: ${this.currentVersion}`);
console.log(`📦 Latest version: ${latestVersion}`);
```

## 📊 Métricas e Monitoramento

### Dados Coletados
- Última verificação de update
- Versão atual instalada
- Notificações enviadas
- Downloads realizados

### Storage Keys
```javascript
'tormenta20-hotbars-last-update-check'    // Timestamp da última verificação
'tormenta20-hotbars-update-notification'  // Última versão notificada
```

## 🔒 Segurança

### Considerações
- Não coleta dados pessoais
- Usa apenas APIs públicas do GitHub
- Não executa código remoto
- Instalação manual para segurança

### Validação
- Verifica assinatura das releases do GitHub
- Confirma origem dos downloads
- Valida estrutura dos arquivos

## 🚀 Melhorias Futuras

### Possíveis Implementações
1. **Auto-instalação** (requer permissões especiais)
2. **Backup de configurações** antes da atualização
3. **Rollback** para versões anteriores
4. **Notificações push** via Service Worker
5. **Analytics** de uso e updates

### Limitações Atuais
- Instalação manual obrigatória
- Dependência do GitHub API
- Não funciona offline
- Requer reinicialização do Roll20

## 📞 Suporte

Para problemas com o sistema de auto-update:
1. Verifique os logs do console
2. Confirme conectividade com GitHub
3. Teste manualmente a verificação
4. Reporte bugs no repositório

---

**Nota**: Este sistema foi projetado para ser simples, seguro e eficaz, priorizando a experiência do usuário e a facilidade de manutenção.
