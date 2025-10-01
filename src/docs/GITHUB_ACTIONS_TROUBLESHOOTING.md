# 🔧 Solução de Problemas: GitHub Actions

## 📋 Problema Identificado

O erro aconteceu porque o GitHub Actions estava configurado para usar cache do npm, mas o projeto usa pnpm. Isso causou o erro:

```
Error: Dependencies lock file is not found. Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock
```

## ✅ Solução Implementada

### **1. Correção da Ordem dos Steps**
```yaml
# ❌ ANTES (incorreto)
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22.15.1'
    cache: 'npm'  # ← Problema aqui
    
- name: Setup pnpm
  uses: pnpm/action-setup@v2

# ✅ DEPOIS (correto)
- name: Setup pnpm
  uses: pnpm/action-setup@v2
  
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22.15.1'
    cache: 'pnpm'  # ← Corrigido
```

### **2. Melhorias Adicionais**
- ✅ **Frozen Lockfile**: `pnpm install --frozen-lockfile`
- ✅ **Verificação de Build**: Lista arquivos gerados
- ✅ **Release Notes**: Template automático
- ✅ **Instruções de Instalação**: Incluídas na release

## 🚀 Workflow Corrigido

### **Estrutura Atual:**
```yaml
name: Create Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 10.15.0
        
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '22.15.1'
        cache: 'pnpm'  # ← Usa pnpm corretamente
        
    - name: Install dependencies
      run: pnpm install --frozen-lockfile
      
    - name: Build extension
      run: pnpm run build
      
    - name: Verify build output
      run: |
        echo "📁 Build output contents:"
        ls -la dist/package/
        echo "📦 Extension files:"
        ls -la dist/package/*.js dist/package/*.json dist/package/*.html dist/package/*.png || true
      
    - name: Create release package
      run: |
        cd dist/package
        zip -r ../../tormenta20-hotbars-${{ github.ref_name }}.zip .
        cd ../..
        echo "📦 Package created: tormenta20-hotbars-${{ github.ref_name }}.zip"
        ls -la tormenta20-hotbars-${{ github.ref_name }}.zip
        
    - name: Create GitHub Release
      uses: softprops/action-gh-release@v1
      with:
        files: |
          tormenta20-hotbars-${{ github.ref_name }}.zip
        generate_release_notes: true
        draft: false
        prerelease: false
        body: |
          ## 🚀 Tormenta20 Hotbars ${{ github.ref_name }}
          
          ### 📦 Instalação
          1. Baixe o arquivo `tormenta20-hotbars-${{ github.ref_name }}.zip`
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
          
          ### 📋 Changelog
          Consulte o histórico de commits para detalhes das mudanças.
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🎯 Principais Correções

### **1. Ordem dos Steps**
- ✅ **pnpm primeiro**: Configura pnpm antes do Node.js
- ✅ **Cache correto**: Usa `cache: 'pnpm'` em vez de `cache: 'npm'`

### **2. Instalação de Dependências**
- ✅ **Frozen Lockfile**: `pnpm install --frozen-lockfile`
- ✅ **Reprodutibilidade**: Garante instalação idêntica

### **3. Verificação de Build**
- ✅ **Lista arquivos**: Verifica se build foi bem-sucedido
- ✅ **Debug**: Mostra conteúdo da pasta dist/package/

### **4. Release Notes**
- ✅ **Template automático**: Instruções de instalação
- ✅ **Sistema de Auto-Update**: Explicação das funcionalidades
- ✅ **Changelog**: Link para histórico de commits

## 🧪 Como Testar

### **1. Testar Localmente**
```bash
# Verificar se pnpm funciona
pnpm install --frozen-lockfile
pnpm run build

# Verificar se build gera arquivos corretos
ls -la dist/package/
```

### **2. Testar GitHub Actions**
```bash
# Criar tag de teste
git tag v0.3.2-test
git push origin v0.3.2-test

# Verificar no GitHub Actions
# https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions
```

### **3. Verificar Release**
- Acessar: https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases
- Confirmar que a release foi criada
- Verificar se o arquivo ZIP foi anexado
- Testar download e instalação

## 🔍 Debug e Logs

### **Logs Esperados no GitHub Actions:**
```
📁 Build output contents:
total 8
drwxr-xr-x 2 runner docker 4096 Jan 15 10:30 .
drwxr-xr-x 3 runner docker 4096 Jan 15 10:30 ..
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 content.js
-rw-r--r-- 1 runner docker  567 Jan 15 10:30 manifest.json
-rw-r--r-- 1 runner docker  234 Jan 15 10:30 popup.html
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon16.png
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon32.png
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon48.png
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon128.png
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon256.png
-rw-r--r-- 1 runner docker 1234 Jan 15 10:30 icon512.png

📦 Package created: tormenta20-hotbars-v0.3.2.zip
-rw-r--r-- 1 runner docker 12345 Jan 15 10:30 tormenta20-hotbars-v0.3.2.zip
```

### **Verificações Importantes:**
- ✅ **pnpm-lock.yaml**: Arquivo existe no repositório
- ✅ **Cache**: Usa `cache: 'pnpm'` em vez de `cache: 'npm'`
- ✅ **Ordem**: pnpm setup antes do Node.js setup
- ✅ **Frozen Lockfile**: Usa `--frozen-lockfile` para reprodutibilidade

## 🚀 Próximos Passos

### **1. Testar o Workflow Corrigido**
```bash
# Criar primeira release
pnpm run release --version=0.3.2 --message="Sistema de auto-update implementado"
```

### **2. Verificar no GitHub**
- Acessar: https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions
- Confirmar que o workflow executa sem erros
- Verificar se a release é criada automaticamente

### **3. Testar Sistema de Auto-Update**
- Instalar extensão da release
- Testar verificação manual de updates
- Verificar se notificações funcionam

## 📞 Suporte

### **Se o Problema Persistir:**

1. **Verificar pnpm-lock.yaml:**
   ```bash
   # Confirmar que arquivo existe
   ls -la pnpm-lock.yaml
   
   # Verificar conteúdo
   head -10 pnpm-lock.yaml
   ```

2. **Verificar GitHub Actions:**
   - Acessar: https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions
   - Verificar logs detalhados
   - Identificar step que falha

3. **Testar Localmente:**
   ```bash
   # Simular ambiente do GitHub Actions
   pnpm install --frozen-lockfile
   pnpm run build
   ls -la dist/package/
   ```

### **Comandos de Debug:**
```bash
# Verificar versão do pnpm
pnpm --version

# Verificar lockfile
pnpm list --depth=0

# Verificar se build funciona
pnpm run build && echo "Build successful"
```

---

**✅ Problema Resolvido!**

O GitHub Actions agora está configurado corretamente para usar pnpm e deve funcionar sem erros.
