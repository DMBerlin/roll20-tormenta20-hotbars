# Guia de Coleta de Dados do Roll20

## 📊 Sistema de Coleta de Dados

Este sistema permite extrair automaticamente dados da ficha de personagem do Roll20 e atualizar a hotbar com essas informações.

### 🎯 Como Funciona

O sistema utiliza o chat do Roll20 como interface para coletar dados:

1. **Gera uma chave única** para identificar a mensagem
2. **Ativa o modo "Talk to Myself"** para que apenas você veja a mensagem
3. **Envia um comando** para o chat que solicita os dados da ficha
4. **Aguarda a resposta** do Roll20 com os dados
5. **Extrai os dados** da mensagem recebida
6. **Remove a mensagem** do chat para não poluir a sessão
7. **Desativa o TTM** e atualiza a hotbar

### 🚀 Como Usar

1. **Configure o nome do personagem** na hotbar (clique no nome para editar)
2. **Pressione Ctrl + '** (Windows) ou **Cmd + J** (Mac) para mostrar a hotbar
3. **Aguarde** o processo de coleta automática (acontece em background)
4. **Verifique** se os dados foram atualizados na hotbar

**Nota**: A coleta de dados acontece automaticamente sempre que você mostra a hotbar!

### 📋 Dados Coletados

O sistema coleta **todos os dados** do personagem usando o schema completo:

#### **Dados Atualizados na Hotbar:**
- **Nível do personagem** (`charnivel`) - Atualiza o display na hotbar
- **Nome do personagem** (`menace_name`) - Atualiza o display na hotbar

#### **Dados Coletados para Debug:**
- **Informações básicas** (`playername`, `trace`, `torigin`, `divindade`)
- **Atributos base** (`for`, `des`, `con`, `int`, `sab`, `car`)
- **Modificadores de atributos** (`for_mod`, `des_mod`, `con_mod`, `int_mod`, `sab_mod`, `car_mod`)
- **Recursos** (`vidatotal`, `vida`, `manatotal`, `mana`)
- **Defesas** (`defesatotal`, `menace_defense`, `menace_fortitude`, `menace_reflex`, `menace_will`)
- **Outros** (`menace_nd`, `menace_init`, `menace_percep`, `bonus_treino`, `penalidades_armadura`)

### ⚙️ Requisitos

- Estar em uma sessão ativa do Roll20
- Ter um personagem selecionado/configurado
- Ter permissões para usar macros na sessão

### 🔧 Dados da Ficha Tormenta20

O sistema está configurado para trabalhar com os campos padrão do Tormenta20:

```markdown
## Campos Utilizados

- `charnivel` → Nível do personagem (1-20)
- `menace_name` → Nome do personagem
- `tlevel` → Classe do personagem

## Exemplo de Comando

O sistema envia um comando com **todos os campos** do schema Tormenta20:
```
@{NOME_DO_PERSONAGEM|charnivel},@{NOME_DO_PERSONAGEM|menace_name},@{NOME_DO_PERSONAGEM|tlevel},@{NOME_DO_PERSONAGEM|playername},@{NOME_DO_PERSONAGEM|trace},@{NOME_DO_PERSONAGEM|torigin},@{NOME_DO_PERSONAGEM|divindade},@{NOME_DO_PERSONAGEM|for_mod},@{NOME_DO_PERSONAGEM|des_mod},@{NOME_DO_PERSONAGEM|con_mod},@{NOME_DO_PERSONAGEM|int_mod},@{NOME_DO_PERSONAGEM|sab_mod},@{NOME_DO_PERSONAGEM|car_mod},@{NOME_DO_PERSONAGEM|for},@{NOME_DO_PERSONAGEM|des},@{NOME_DO_PERSONAGEM|con},@{NOME_DO_PERSONAGEM|int},@{NOME_DO_PERSONAGEM|sab},@{NOME_DO_PERSONAGEM|car},@{NOME_DO_PERSONAGEM|vidatotal},@{NOME_DO_PERSONAGEM|vida},@{NOME_DO_PERSONAGEM|manatotal},@{NOME_DO_PERSONAGEM|mana},@{NOME_DO_PERSONAGEM|defesatotal},@{NOME_DO_PERSONAGEM|menace_defense},@{NOME_DO_PERSONAGEM|menace_fortitude},@{NOME_DO_PERSONAGEM|menace_reflex},@{NOME_DO_PERSONAGEM|menace_will},@{NOME_DO_PERSONAGEM|menace_nd},@{NOME_DO_PERSONAGEM|menace_init},@{NOME_DO_PERSONAGEM|menace_percep},@{NOME_DO_PERSONAGEM|bonus_treino},@{NOME_DO_PERSONAGEM|penalidades_armadura} [DATA_ABC123_xyz]
```

## Resposta Esperada

O Roll20 responde com todos os valores substituídos:
```
11, Aragorn, Ranger, João, Humano, Nobre, Tanna-Toh, 2, 4, 1, 0, 3, 1, 12, 18, 13, 10, 16, 12, 65, 58, 38, 30, 25, 25, +8, +15, +9, 11, +12, +10, 4, -2 [DATA_ABC123_xyz]
```

### ⚙️ Configuração do Nome do Personagem

**IMPORTANTE**: O sistema é agnóstico ao personagem! Você deve configurar o nome do seu personagem antes de usar.

#### Como Configurar:
1. **Abra as configurações** da hotbar (ícone de engrenagem)
2. **Encontre a seção "🔑 Chave de Identificação do Personagem"**
3. **Digite o nome exato** do seu personagem como aparece na ficha do Roll20
4. **Salve as configurações**

#### Exemplos de Configuração:
- Se seu personagem se chama "Gandalf" → digite `Gandalf`
- Se seu personagem se chama "Legolas Folha Verde" → digite `Legolas Folha Verde`
- Se seu personagem se chama "Gimli, filho de Glóin" → digite `Gimli, filho de Glóin`

**Nota**: O nome deve ser **exatamente igual** ao que aparece na ficha do Roll20, incluindo espaços, vírgulas e caracteres especiais.

### 🛠️ Personalização

Para adicionar mais campos, edite a função `sendDataCollectionCommand`:

```javascript
function sendDataCollectionCommand(dataKey, fields) {
    // Adicione mais campos aqui
    const command = `@{${getCharacterNameForMacro()}|charnivel},@{${getCharacterNameForMacro()}|menace_name},@{${getCharacterNameForMacro()}|tlevel},@{${getCharacterNameForMacro()}|novo_campo} [${dataKey}]`;
    sendToChat(command);
}
```

E atualize a função `extractDataFromMessage` para processar os novos campos.

**Nota**: A função `getCharacterNameForMacro()` automaticamente usa o nome configurado nas configurações da hotbar.

### 🐛 Solução de Problemas

**Erro: "Esta funcionalidade só funciona em sessões do Roll20"**
- Certifique-se de estar em uma sessão ativa do Roll20

**Erro: "Nenhum personagem selecionado"**
- Configure o nome do personagem na hotbar primeiro

**Erro: "Timeout: Mensagem de dados não encontrada"**
- Verifique se o nome do personagem está correto
- Certifique-se de ter permissões para usar macros
- Tente novamente em alguns segundos

**Dados não atualizam na hotbar**
- Verifique o console do navegador para logs de debug
- Certifique-se de que os campos da ficha existem

**TTM sendo desativado acidentalmente**
- ✅ **RESOLVIDO**: O sistema agora detecta se TTM já está ativo
- ✅ **RESOLVIDO**: Preserva o estado original do TTM após a coleta

### 🔍 Logs de Debug

O sistema gera logs detalhados no console do navegador:

#### **Controle do TTM:**
- `TTM Status: Ativo/Inativo` - Status atual do Talk to Myself
- `Ativando TTM...` / `TTM já está ativo, mantendo...` - Controle do TTM
- `Desativando TTM...` / `TTM já está inativo, mantendo...` - Restauração do TTM

#### **Comando e Resposta:**
- `Comando enviado para coleta: @{NOME_DO_PERSONAGEM|charnivel},@{NOME_DO_PERSONAGEM|menace_name}...`
- `Nome do personagem usado: [Nome configurado]`
- `Schema de dados: {charnivel: "Nível do personagem", ...}`
- `Mensagem completa recebida: 11, Aragorn, Ranger, 16, 18...`
- `Valores separados por vírgula: ["11", "Aragorn", "Ranger", ...]`

#### **Schema Completo:**
```
=== SCHEMA COMPLETO COM VALORES ===
Nível do personagem (charnivel): 11
Nome do personagem (menace_name): Aragorn
Classe do personagem (tlevel): Ranger
Nome do jogador (playername): João
Raça (trace): Humano
Origem (torigin): Nobre
Divindade (divindade): Tanna-Toh
Modificador de Força (for_mod): 2
Modificador de Destreza (des_mod): 4
Modificador de Constituição (con_mod): 1
Modificador de Inteligência (int_mod): 0
Modificador de Sabedoria (sab_mod): 3
Modificador de Carisma (car_mod): 1
Força base (for): 12
Destreza base (des): 18
Constituição base (con): 13
Inteligência base (int): 10
Sabedoria base (sab): 16
Carisma base (car): 12
Vida máxima (vidatotal): 65
Vida atual (vida): 58
Mana máxima (manatotal): 38
Mana atual (mana): 30
Defesa total (defesatotal): 25
Defesa (menace) (menace_defense): 25
Fortitude (menace_fortitude): +8
Reflexos (menace_reflex): +15
Vontade (menace_will): +9
Nível de Desafio (menace_nd): 11
Iniciativa (menace_init): +12
Percepção (menace_percep): +10
Bônus de treino (bonus_treino): 4
Penalidades de armadura (penalidades_armadura): -2
===================================
```

#### **Atualizações:**
- `Nível atualizado para: 11`
- `Nome atualizado para: [Nome do personagem]`
- `Classe: [Classe do personagem]`
- `Raça: [Raça do personagem]`
- `Origem: [Origem do personagem]`
- `Divindade: [Divindade do personagem]`
- `Vida máxima: [Valor da ficha]`
- `Vida atual: [Valor da ficha]`
- `Mana máxima: [Valor da ficha]`
- `Mana atual: [Valor da ficha]`
- `Defesa total: [Valor da ficha]`
- `ND: [Valor da ficha]`
- `Iniciativa: [Valor da ficha]`
- `Percepção: [Valor da ficha]`
- `Força (mod): [Valor da ficha]`
- `Destreza (mod): [Valor da ficha]`
- `Constituição (mod): [Valor da ficha]`
- `Inteligência (mod): [Valor da ficha]`
- `Sabedoria (mod): [Valor da ficha]`
- `Carisma (mod): [Valor da ficha]`

### 📝 Notas Técnicas

- **Coleta automática**: Dados são coletados automaticamente quando a hotbar é mostrada (Ctrl + ' / Cmd + J)
- **Coleta silenciosa**: Não mostra notificações durante a coleta automática
- O sistema usa `Talk to Myself` para não poluir o chat da sessão
- **Detecção inteligente de TTM**: Verifica se TTM já está ativo antes de ativá-lo
- **Preservação do estado**: Restaura o estado original do TTM após a coleta
- Mensagens são automaticamente removidas após a coleta
- Timeout padrão: 5 segundos para aguardar resposta
- Chaves únicas são geradas para evitar conflitos

### 🎮 Próximas Funcionalidades

Possíveis expansões futuras:
- Coleta de atributos (Força, Destreza, etc.)
- Coleta de perícias treinadas
- Coleta de vida/mana atual
- Coleta de equipamentos
- Sincronização automática periódica
