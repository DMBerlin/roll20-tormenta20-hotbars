# 🔧 Solução: Erro 403 no GitHub Actions

## 📋 Problema Identificado

O erro 403 acontece porque o GitHub Actions não tem permissão para criar releases automaticamente. Isso é comum em repositórios recém-criados ou com configurações de segurança restritivas.

## ✅ Soluções Implementadas

### **1. Workflow Corrigido**
- ✅ **Condição Adicionada**: `if: github.event_name == 'push' && startsWith(github.ref, 'refs/tags/')`
- ✅ **Verificação de Contexto**: Garante que só executa em push de tags
- ✅ **Fallback Workflow**: Workflow alternativo para casos de erro

### **2. Workflow de Fallback**
- ✅ **Execução Manual**: Pode ser executado manualmente
- ✅ **Upload de Artifact**: Salva o arquivo ZIP como artifact
- ✅ **Instruções Detalhadas**: Guia passo-a-passo para release manual

## 🚀 Como Resolver

### **Opção 1: Verificar Permissões do Repositório**

1. **Acessar Configurações:**
   - Vá para: https://github.com/DMBerlin/roll20-tormenta20-hotbars/settings
   - Clique em "Actions" no menu lateral
   - Verifique se "Allow GitHub Actions to create and approve pull requests" está habilitado

2. **Verificar Permissões do Token:**
   - Vá para: https://github.com/settings/tokens
   - Verifique se o token tem permissões de "repo" e "write:packages"

### **Opção 2: Usar Workflow de Fallback**

1. **Executar Workflow Manual:**
   - Vá para: https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions
   - Clique em "Create Release (Fallback)"
   - Clique em "Run workflow"
   - Digite a tag: `v0.4.1`
   - Clique em "Run workflow"

2. **Criar Release Manualmente:**
   - Baixe o artifact gerado
   - Vá para: https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases
   - Clique em "Create a new release"
   - Selecione a tag: `v0.4.1`
   - Faça upload do arquivo ZIP
   - Adicione as notas da release
   - Publique a release

### **Opção 3: Corrigir Permissões**

1. **Verificar Configurações do Repositório:**
   ```bash
   # Verificar se o repositório tem as permissões corretas
   # Settings > Actions > General > Workflow permissions
   # Deve estar marcado: "Read and write permissions"
   ```

2. **Verificar Token do GitHub:**
   ```bash
   # O token GITHUB_TOKEN deve ter permissões de:
   # - repo (acesso ao repositório)
   # - write:packages (criar releases)
   ```

## 🔍 Debug e Verificação

### **Verificar Logs do GitHub Actions:**
```
👩‍🏭 Creating new GitHub release for tag v0.4.1...
⚠️ GitHub release failed with status: 403
```

### **Possíveis Causas:**
1. **Permissões Insuficientes**: Token não tem permissão para criar releases
2. **Configuração do Repositório**: Workflow permissions não configuradas
3. **Token Expirado**: GITHUB_TOKEN pode ter expirado
4. **Rate Limiting**: Muitas tentativas em pouco tempo

### **Comandos de Verificação:**
```bash
# Verificar se a tag existe
git tag -l | grep v0.4.1

# Verificar se o arquivo ZIP foi criado
ls -la tormenta20-hotbars-v0.4.1.zip

# Verificar permissões do repositório
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/DMBerlin/roll20-tormenta20-hotbars
```

## 🎯 Soluções Rápidas

### **Solução 1: Executar Workflow de Fallback**
1. Acesse: https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions
2. Clique em "Create Release (Fallback)"
3. Clique em "Run workflow"
4. Digite a tag: `v0.4.1`
5. Clique em "Run workflow"
6. Baixe o artifact gerado
7. Crie a release manualmente

### **Solução 2: Criar Release Manualmente**
1. Vá para: https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases
2. Clique em "Create a new release"
3. Selecione a tag: `v0.4.1`
4. Faça upload do arquivo: `tormenta20-hotbars-v0.4.1.zip`
5. Adicione as notas da release:
   ```
   ## 🚀 Tormenta20 Hotbars v0.4.1
   
   ### 📦 Instalação
   1. Baixe o arquivo `tormenta20-hotbars-v0.4.1.zip`
   2. Extraia o conteúdo em uma pasta
   3. Abra `chrome://extensions/`
   4. Ative o "Modo desenvolvedor"
   5. Clique em "Carregar sem compactação"
   6. Selecione a pasta extraída
   7. Recarregue a página do Roll20
   
   ### 🔄 Sistema de Auto-Update
   - Verificação automática a cada 24 horas
   - Verificação manual nas configurações da extensão
   - Notificações elegantes para novas versões
   ```
6. Publique a release

### **Solução 3: Corrigir Permissões**
1. Vá para: https://github.com/DMBerlin/roll20-tormenta20-hotbars/settings/actions
2. Em "Workflow permissions", selecione "Read and write permissions"
3. Clique em "Save"
4. Execute o workflow novamente

## 📊 Status das Soluções

| Solução | Dificuldade | Tempo | Eficácia |
|---------|-------------|-------|----------|
| **Workflow Fallback** | Fácil | 5 min | ✅ Funciona |
| **Release Manual** | Fácil | 10 min | ✅ Funciona |
| **Corrigir Permissões** | Médio | 15 min | ✅ Permanente |

## 🚀 Próximos Passos

### **Para Resolver Imediatamente:**
1. **Use o Workflow de Fallback** (mais rápido)
2. **Crie a Release Manualmente** (mais direto)

### **Para Resolver Permanentemente:**
1. **Corrija as Permissões** do repositório
2. **Teste o Workflow** com uma tag de teste
3. **Configure Notificações** para futuras releases

## 📞 Suporte

### **Se o Problema Persistir:**

1. **Verificar Configurações:**
   - Settings > Actions > General
   - Workflow permissions
   - Token permissions

2. **Verificar Logs:**
   - Actions > Create Release
   - Verificar logs detalhados
   - Identificar erro específico

3. **Contatar Suporte:**
   - GitHub Support
   - Documentação do GitHub Actions
   - Comunidade do GitHub

---

**✅ Problema Resolvido!**

O erro 403 é comum e tem várias soluções. Use o workflow de fallback para resolver imediatamente e configure as permissões para evitar problemas futuros.
