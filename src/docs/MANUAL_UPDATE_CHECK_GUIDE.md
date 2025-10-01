# 🔍 Guia de Verificação Manual de Updates

## 📋 Resumo

Implementei um sistema de verificação manual de updates que permite aos usuários verificar se há novas versões disponíveis sem esperar o ciclo automático de 24 horas.

## 🎯 Funcionalidades Implementadas

### **1. Botão de Verificação Manual**
- ✅ Localizado na seção "Informações do Script" das configurações
- ✅ Design elegante com efeitos hover
- ✅ Feedback visual durante a verificação
- ✅ Notificações de resultado

### **2. Interface Integrada**
- ✅ Integrado ao modal de configurações existente
- ✅ Seção dedicada com título e descrição
- ✅ Botão com ícone e animações
- ✅ Fallback para instruções manuais

### **3. Sistema de Feedback**
- ✅ Notificação de "Verificando..." com spinner
- ✅ Notificação de "Verificação concluída!" com check
- ✅ Notificação de erro com detalhes
- ✅ Auto-remoção das notificações

## 🚀 Como Usar

### **Para o Usuário:**

1. **Abrir Configurações**
   - Clique no botão "⚙️ Config" na hotbar
   - O modal de configurações será aberto

2. **Verificar Updates**
   - Na seção "📋 Informações do Script"
   - Clique no botão "🔍 Verificar Atualizações"
   - Aguarde o feedback visual

3. **Resultado**
   - Se houver nova versão: notificação elegante com opções
   - Se estiver atualizado: confirmação de verificação
   - Se houver erro: instruções de verificação manual

### **Para o Desenvolvedor:**

1. **Testar o Sistema**
   ```bash
   # Construir com sistema de auto-update
   pnpm run build
   
   # Instalar extensão em modo desenvolvedor
   # Abrir Roll20 e testar
   ```

2. **Verificar no Console**
   ```javascript
   // No console do navegador
   runAllTests() // Executa todos os testes
   testManualUpdateCheck() // Testa apenas verificação manual
   testConfigInterface() // Testa interface de configurações
   ```

## 🔧 Implementação Técnica

### **Arquivos Modificados:**

1. **`src/main.js`**
   - Adicionado botão na seção "Informações do Script"
   - Implementada função `showManualUpdateInstructions()`
   - Integração com sistema de auto-update existente

2. **`src/core/update/update-checker.js`**
   - Melhorada função `setupManualCheck()`
   - Adicionadas funções de feedback visual
   - Sistema de notificações robusto

3. **`src/core/update/test-manual-check.js`**
   - Script de teste para desenvolvimento
   - Funções de teste individual
   - Comandos de console para debug

### **Fluxo de Funcionamento:**

```
Usuário clica "Verificar Atualizações"
    ↓
Sistema mostra "Verificando..." com spinner
    ↓
Chama window.tormenta20CheckForUpdates()
    ↓
Verifica GitHub API
    ↓
Se nova versão: mostra notificação de update
Se atualizado: mostra "Verificação concluída!"
Se erro: mostra instruções manuais
    ↓
Remove notificações automaticamente
```

## 🎨 Design e UX

### **Botão de Verificação:**
- **Cor**: Verde (#4CAF50) com gradiente
- **Ícone**: 🔍 (lupa)
- **Efeitos**: Hover com elevação e sombra
- **Estados**: Normal, hover, disabled, loading

### **Notificações:**
- **Verificando**: Azul com spinner animado
- **Sucesso**: Verde com check
- **Erro**: Vermelho com X
- **Posição**: Canto superior direito
- **Duração**: 2-5 segundos

### **Instruções Manuais:**
- **Modal**: Centralizado com overlay
- **Conteúdo**: Lista numerada com links
- **Ações**: Fechar e Abrir GitHub
- **Design**: Consistente com tema existente

## 🧪 Testes e Debug

### **Comandos de Teste Disponíveis:**

```javascript
// No console do navegador
runAllTests()              // Executa todos os testes
testManualUpdateCheck()    // Testa verificação manual
testConfigInterface()      // Testa interface de configurações
testNotifications()        // Testa sistema de notificações
testGitHubAPI()           // Testa conexão com GitHub API
```

### **Verificações Automáticas:**

1. **Sistema de Auto-update**
   - Verifica a cada 24 horas automaticamente
   - Cache inteligente para evitar spam
   - Notificações elegantes para updates

2. **Verificação Manual**
   - Sobrescreve o cache de 24 horas
   - Força verificação imediata
   - Feedback visual durante o processo

## 🔒 Segurança e Confiabilidade

### **Validações:**
- ✅ Verificação de conectividade com GitHub API
- ✅ Tratamento de erros de rede
- ✅ Fallback para instruções manuais
- ✅ Timeout de requisições

### **Performance:**
- ✅ Verificação assíncrona
- ✅ Notificações não-bloqueantes
- ✅ Auto-remoção de elementos
- ✅ Cache de resultados

## 📊 Monitoramento

### **Logs Disponíveis:**
```javascript
// Console do navegador
🔍 Verificação manual de updates iniciada...
📦 Current version: 0.3.1.14939
📦 Latest version: 0.3.2
🆕 New version available!
✅ Verificação concluída!
```

### **Métricas:**
- Frequência de verificações manuais
- Taxa de sucesso das verificações
- Tempo de resposta da API
- Erros de conectividade

## 🚀 Próximos Passos

### **Melhorias Futuras:**
1. **Analytics**: Rastrear uso do botão manual
2. **Cache**: Melhorar sistema de cache
3. **Offline**: Suporte para modo offline
4. **Notificações**: Push notifications

### **Manutenção:**
1. **Testes**: Executar `runAllTests()` regularmente
2. **Monitoramento**: Verificar logs de erro
3. **Atualizações**: Manter API do GitHub atualizada
4. **Feedback**: Coletar feedback dos usuários

## 📞 Suporte

### **Problemas Comuns:**

1. **Botão não aparece**
   - Verificar se extensão está carregada
   - Confirmar se modal de configurações abre
   - Verificar console para erros

2. **Verificação falha**
   - Verificar conectividade com internet
   - Testar GitHub API manualmente
   - Verificar logs do console

3. **Notificações não aparecem**
   - Verificar se não há conflitos de z-index
   - Confirmar se JavaScript está habilitado
   - Testar em modo incógnito

### **Debug:**
```javascript
// Verificar se sistema está carregado
console.log(typeof window.tormenta20CheckForUpdates);

// Verificar configurações
console.log(localStorage.getItem('tormenta20-hotbars-last-update-check'));

// Testar API manualmente
fetch('https://api.github.com/repos/DMBerlin/roll20-tormenta20-hotbars/releases/latest')
  .then(r => r.json())
  .then(console.log);
```

---

**✅ Sistema implementado e pronto para uso!**

O usuário agora pode verificar updates manualmente a qualquer momento através da interface de configurações, sem precisar esperar o ciclo automático de 24 horas.
