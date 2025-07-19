# 🏹 Como Testar o Caçador.js

## 📁 Arquivo Criado
- `test-cacador.html` - Simulador Roll20 com hot reload

## 🚀 Como Usar

### 1. Abrir o Teste
1. Abra o arquivo `test-cacador.html` no seu navegador
2. O script será carregado automaticamente
3. A hotbar do Caçador deve aparecer na parte inferior da página

### 2. Recursos Disponíveis

#### 🔄 Hot Reload
- **Manual**: Clique no botão "🔄 Recarregar Script" 
- **Automático**: Ative o toggle "Auto-reload" para recarregar a cada 5 segundos
- **Atalho**: `Ctrl + F5` para reload rápido

#### 🎯 Status em Tempo Real
- Status do script (carregado/erro)
- Status da hotbar (ativa/não encontrada)
- Auto-reload (ativo/desabilitado)
- Última atualização

#### 🎲 Simulador Roll20
- Chat simulado para ver comandos enviados
- Input de chat funcional (pressione Enter para enviar)
- Simula os elementos DOM que o script espera encontrar

#### 📋 Logs Detalhados
- Todos os eventos são logados em tempo real
- Erros JavaScript são capturados e exibidos
- Histórico das últimas 100 ações

### 3. Testando Modificações

1. **Faça alterações** no arquivo `cacador.js`
2. **Salve o arquivo**
3. **Recarregue** usando uma das opções:
   - Clique no botão "Recarregar Script"
   - Use o auto-reload (se ativado)
   - Pressione `Ctrl + F5`
4. **Observe** as mudanças na hotbar e nos logs

### 4. Atalhos Úteis

- `Ctrl + '` - Mostrar/ocultar hotbar (atalho original do script)
- `Ctrl + F5` - Reload manual do script
- `Enter` - Enviar mensagem no chat simulado
- `Shift + Enter` - Nova linha no chat

### 5. Troubleshooting

#### ❌ Script não carrega
- Verifique se o arquivo `../cacador.js` existe (relativo à pasta __test__)
- O arquivo deve estar em `tormenta20/hotbars/cacador.js`
- Verifique se não há erros de sintaxe no JavaScript
- Observe os logs para detalhes do erro

#### ⚠️ Hotbar não aparece
- O script pode estar carregado mas com erro na execução
- Verifique os logs para erros JavaScript
- Alguns recursos podem depender de elementos específicos do Roll20

#### 🐛 Comportamento estranho
- Limpe o cache do navegador (`Ctrl + Shift + R`)
- Recarregue o script manualmente
- Verifique os logs para entender o que está acontecendo

### 6. Recursos do Simulador

#### 🎭 Elementos Simulados
- `#textchat-input textarea` - Input do chat Roll20
- `#chatSendBtn` - Botão de envio do chat
- Chat output área para visualizar comandos

#### 🔍 Monitoramento DOM
- Detecta quando a hotbar é criada/removida
- Detecta sistema de notificações
- Monitora mudanças em tempo real

### 7. Dicas de Desenvolvimento

1. **Use o auto-reload** para desenvolvimento contínuo
2. **Mantenha os logs abertos** para debug
3. **Teste diferentes funcionalidades** da hotbar
4. **Observe o console do navegador** (F12) para erros adicionais
5. **Salve frequentemente** suas modificações

## 🎯 Resultado Esperado

Quando tudo estiver funcionando, você deve ver:
- ✅ Script Status: Carregado
- ✅ Hotbar: Ativa
- 🏹 Hotbar flutuante na parte inferior da página
- 📝 Logs indicando sucesso na inicialização

---

💡 **Dica**: Mantenha este arquivo aberto em uma aba e seu editor de código em outra para um fluxo de desenvolvimento eficiente! 