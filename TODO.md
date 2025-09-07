# TODO - Branch de Feature: Efeitos de Ataque

## 🎯 Pendências para Finalizar a Branch

### 1. **Modal de Criar Efeito - Modificadores** 🔧
- [ ] **Simplificar seção de modificadores**
  - Remover campos individuais (ataque, dano, crítico, etc.)
  - Adicionar apenas **um input text** para expressão de bônus de ataque
  - Campo deve aceitar valores como: `+2`, `+1d4`, `-1`, etc.
  - Esta expressão será injetada diretamente no bônus de attack

### 2. **Modal de Criar Efeito - Tipo de Ativação** ❌
- [ ] **Remover seção de tipo de ativação**
  - Remover dropdown de ativação (manual, automático, etc.)
  - Remover lógica relacionada ao tipo de ativação
  - Simplificar interface focando apenas no essencial

### 3. **Toggle de Ativação por Efeito** 🔄
- [ ] **Adicionar toggle em cada efeito na lista**
  - Implementar switch/toggle visual para cada efeito criado
  - Estado ligado = efeito disponível para aplicação
  - Estado desligado = efeito inativo/não disponível
  
- [ ] **Lógica por tipo de efeito:**
  - **Attack Roll/Damage**: Toggle controla se aparece no modal de efeitos de ataque
  - **Perícia**: Toggle controla se efeito pode ser aplicado em testes de perícia
  - **Outros tipos**: Definir comportamento conforme necessário

- [ ] **Persistência do estado**
  - Salvar estado do toggle no localStorage
  - Carregar estado ao abrir a lista de efeitos
  - Atualizar aplicação de efeitos baseado no estado do toggle

## 📝 Detalhes Técnicos

### Modificadores Simplificados
```
Antes: [Ataque: +2] [Dano: +1d6] [Crítico: -2]
Depois: [Expressão: +2] (será aplicado como bônus de ataque)
```

### Interface Desejada

#### Modal de Criação:
```
┌─ Criar Efeito Customizado ─────────────┐
│ Nome: [________________]               │
│ Ícone: [🎯]                           │
│ Descrição: [_____________]             │
│                                        │
│ Modificador de Ataque:                 │
│ [+2________________]                   │
│                                        │
│ [Salvar] [Cancelar]                    │
└────────────────────────────────────────┘
```

#### Lista de Efeitos com Toggle:
```
┌─ Lista de Efeitos ─────────────────────┐
│ 🎯 Flanqueado            [●○] ON       │
│    +2 bônus de ataque                  │
│                                        │
│ ⚡ Inspiração            [○●] OFF      │
│    +1d4 bônus de perícia               │
│                                        │
│ 🔥 Fúria Bárbara         [●○] ON       │
│    +2 dano corpo a corpo               │
└────────────────────────────────────────┘
```

### Sistema de Toggle - Comportamento por Tipo
```
┌─ Tipo de Efeito ─────────┬─ Toggle ON ──────────┬─ Toggle OFF ─────────┐
│ Attack Roll/Damage       │ Aparece no modal de  │ Não aparece no modal │
│                          │ seleção de ataques   │ de ataques           │
├──────────────────────────┼──────────────────────┼──────────────────────┤
│ Perícia                  │ Disponível para      │ Não disponível para  │
│                          │ aplicar em testes    │ testes de perícia    │
├──────────────────────────┼──────────────────────┼──────────────────────┤
│ Outros (futuros)         │ A definir conforme   │ A definir conforme   │
│                          │ necessidade          │ necessidade          │
└──────────────────────────┴──────────────────────┴──────────────────────┘
```

## 🎯 Objetivo Final
- Interface mais limpa e focada
- Apenas o essencial para criar efeitos de ataque
- Remoção de complexidade desnecessária
- Controle granular de quando cada efeito está disponível
- Foco na funcionalidade principal: bônus de ataque

## ✅ Já Implementado
- [x] Sistema de persistência de efeitos de ataque
- [x] Aplicação de bônus no local correto do macro
- [x] Atualização automática do modal quando efeitos são deletados
- [x] Processamento de efeitos consumíveis
- [x] Notificações de efeitos aplicados

---
*Criado em: $(date)*
*Branch: feature/attack-effects*
