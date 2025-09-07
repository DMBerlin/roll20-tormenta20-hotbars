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

## 📝 Detalhes Técnicos

### Modificadores Simplificados
```
Antes: [Ataque: +2] [Dano: +1d6] [Crítico: -2]
Depois: [Expressão: +2] (será aplicado como bônus de ataque)
```

### Interface Desejada
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

## 🎯 Objetivo Final
- Interface mais limpa e focada
- Apenas o essencial para criar efeitos de ataque
- Remoção de complexidade desnecessária
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
