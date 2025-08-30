# Scripts de Versionamento

Este diretório contém scripts para gerenciar versões e tags do projeto.

## Scripts Disponíveis

### 1. update-version.js
Atualiza a versão do script baseada na branch atual e número de commits.

**Uso:**
```bash
pnpm update-version
# ou
node src/core/versioning/update-version.js
```

**Funcionalidades:**
- Detecta a branch atual
- Encontra a última tag Git
- Gera uma nova versão formatada (ex: 0.3.0.12345)
- Atualiza `src/main.js` e `package.json`

### 2. create-tag.js
Cria uma nova tag Git usando a versão atual do `package.json`.

**Uso:**
```bash
# Uso básico (com confirmação)
pnpm create-tag

# Uso direto
node src/core/versioning/create-tag.js

# Com mensagem personalizada
pnpm create-tag -- --message="Release com novas funcionalidades"

# Sem confirmação
pnpm create-tag -- --yes

# Forçar criação (mesmo com mudanças não commitadas)
pnpm create-tag -- --force
```

**Opções:**
- `--message="texto"` - Mensagem personalizada para a tag
- `--yes` - Criar tag sem confirmação
- `--force` - Forçar criação mesmo com mudanças não commitadas

**Funcionalidades:**
- Lê a versão do `package.json`
- Verifica se a tag já existe
- Valida mudanças não commitadas
- Cria tag anotada com mensagem
- Faz push da tag para o repositório remoto

## Fluxo de Trabalho Recomendado

1. **Desenvolvimento:**
   ```bash
   # Fazer alterações no código
   git add .
   git commit -m "Nova funcionalidade"
   ```

2. **Atualizar versão:**
   ```bash
   pnpm update-version
   ```

3. **Criar tag de release:**
   ```bash
   pnpm create-tag -- --message="Release 0.3.0 - Novas funcionalidades"
   ```

## Exemplo de Saída

```
🚀 Script de criação de tag Git
================================

📦 Versão do package.json: 0.3.0.25043
🌿 Branch atual: develop
🏷️  Última tag: 0.3.0

📝 Mensagem da tag: Release 0.3.0.25043 - 2024-01-15

❓ Deseja criar a tag? (y/N)
y

🏷️  Criando tag: 0.3.0.25043
📤 Fazendo push da tag...

✅ Tag criada com sucesso!
🏷️  Tag: 0.3.0.25043
📝 Mensagem: Release 0.3.0.25043 - 2024-01-15

🎉 Release pronto!
``` 