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
2. **Pressione Ctrl + '** para mostrar a hotbar
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
@{Eira Egai|charnivel},@{Eira Egai|menace_name},@{Eira Egai|tlevel},@{Eira Egai|playername},@{Eira Egai|trace},@{Eira Egai|torigin},@{Eira Egai|divindade},@{Eira Egai|for_mod},@{Eira Egai|des_mod},@{Eira Egai|con_mod},@{Eira Egai|int_mod},@{Eira Egai|sab_mod},@{Eira Egai|car_mod},@{Eira Egai|for},@{Eira Egai|des},@{Eira Egai|con},@{Eira Egai|int},@{Eira Egai|sab},@{Eira Egai|car},@{Eira Egai|vidatotal},@{Eira Egai|vida},@{Eira Egai|manatotal},@{Eira Egai|mana},@{Eira Egai|defesatotal},@{Eira Egai|menace_defense},@{Eira Egai|menace_fortitude},@{Eira Egai|menace_reflex},@{Eira Egai|menace_will},@{Eira Egai|menace_nd},@{Eira Egai|menace_init},@{Eira Egai|menace_percep},@{Eira Egai|bonus_treino},@{Eira Egai|penalidades_armadura} [DATA_ABC123_xyz]
```

## Resposta Esperada

O Roll20 responde com todos os valores substituídos:
```
11, Eira Egai, Caçador, Daniel, Suraggel (Sulfur) - LB, Capanga, Azgher, 0, 5, 2, 1, 3, 0, 0, 5, 2, 1, 3, 0, 58, 53, 44, 36, 23, 23, +7, +16, +8, 11, +14, +12, 4, -3 [DATA_ABC123_xyz]
```

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
- `Comando enviado para coleta: @{Eira Egai|charnivel},@{Eira Egai|menace_name}...`
- `Nome do personagem usado: Eira Egai`
- `Schema de dados: {charnivel: "Nível do personagem", ...}`
- `Mensagem completa recebida: 11, Eira Egai, Caçador, 16, 18...`
- `Valores separados por vírgula: ["11", "Eira Egai", "Caçador", ...]`

#### **Schema Completo:**
```
=== SCHEMA COMPLETO COM VALORES ===
Nível do personagem (charnivel): 11
Nome do personagem (menace_name): Eira Egai
Classe do personagem (tlevel): Caçador
Nome do jogador (playername): Daniel
Raça (trace): Suraggel (Sulfur) - LB
Origem (torigin): Capanga
Divindade (divindade): Azgher
Modificador de Força (for_mod): 0
Modificador de Destreza (des_mod): 5
Modificador de Constituição (con_mod): 2
Modificador de Inteligência (int_mod): 1
Modificador de Sabedoria (sab_mod): 3
Modificador de Carisma (car_mod): 0
Força base (for): 0
Destreza base (des): 5
Constituição base (con): 2
Inteligência base (int): 1
Sabedoria base (sab): 3
Carisma base (car): 0
Vida máxima (vidatotal): 58
Vida atual (vida): 53
Mana máxima (manatotal): 44
Mana atual (mana): 36
Defesa total (defesatotal): 23
Defesa (menace) (menace_defense): 23
Fortitude (menace_fortitude): +7
Reflexos (menace_reflex): +16
Vontade (menace_will): +8
Nível de Desafio (menace_nd): 11
Iniciativa (menace_init): +14
Percepção (menace_percep): +12
Bônus de treino (bonus_treino): 4
Penalidades de armadura (penalidades_armadura): -3
===================================
```

#### **Atualizações:**
- `Nível atualizado para: 11`
- `Nome atualizado para: Eira Egai`
- `Classe: Caçador`
- `Raça: Suraggel (Sulfur) - LB`
- `Origem: Capanga`
- `Divindade: Azgher`
- `Vida máxima: 58`
- `Vida atual: 53`
- `Mana máxima: 44`
- `Mana atual: 36`
- `Defesa total: 23`
- `ND: 11`
- `Iniciativa: +14`
- `Percepção: +12`
- `Força (mod): 0`
- `Destreza (mod): 5`
- `Constituição (mod): 2`
- `Inteligência (mod): 1`
- `Sabedoria (mod): 3`
- `Carisma (mod): 0`

### 📝 Notas Técnicas

- **Coleta automática**: Dados são coletados automaticamente quando a hotbar é mostrada (Ctrl + ')
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
