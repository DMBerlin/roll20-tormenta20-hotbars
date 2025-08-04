# FavoritableCard Component

Um componente reutilizável para criar cards de itens que podem ser favoritados, usado nas listas de Pratos Especiais, Bebidas Artonianas e Lista de Condições.

## Características

- **Reutilizável**: Pode ser usado para diferentes tipos de itens
- **Favoritável**: Suporte opcional para botão de favorito
- **Temático**: Suporte para diferentes temas de cores
- **Responsivo**: Efeitos de hover e transições suaves
- **Customizável**: Altamente configurável através de props

## Uso Básico

```javascript
import { createFavoritableCard } from './components/favoritable-card/favoritable-card.js';

const card = createFavoritableCard({
  title: 'Nome do Item',
  summary: 'Descrição resumida do item...',
  effectText: 'Efeito ou bônus do item',
  showFavoriteButton: true,
  isFavorite: false,
  onClick: (e, card) => {
    // Ação ao clicar no card
  },
  onFavoriteToggle: (isFavorite, card) => {
    // Ação ao favoritar/desfavoritar
  },
});

document.body.appendChild(card.render());
```

## Uso com Presets

```javascript
import {
  createFavoritableCardWithPreset,
  FavoritableCardPresets,
} from './components/favoritable-card/favoritable-card.js';

// Para pratos especiais
const foodCard = createFavoritableCardWithPreset(FavoritableCardPresets.FOOD, {
  title: 'Prato Especial',
  summary: 'Descrição do prato...',
  bonus: '+2 em testes de Força',
});

// Para bebidas
const drinkCard = createFavoritableCardWithPreset(
  FavoritableCardPresets.DRINK,
  {
    title: 'Bebida Artoniana',
    summary: 'Descrição da bebida...',
    efeito: 'Recupera 1d6 pontos de vida',
  }
);

// Para condições (sem botão de favorito)
const conditionCard = createFavoritableCardWithPreset(
  FavoritableCardPresets.CONDITION,
  {
    title: 'Condição',
    summary: 'Descrição da condição...',
    efeitos: 'Efeitos da condição',
  }
);
```

## Configurações

### Propriedades Básicas

- `title` (string): Título do item
- `summary` (string): Descrição resumida (opcional)
- `effectText` (string): Texto do efeito/bônus (opcional)
- `showFavoriteButton` (boolean): Se deve mostrar botão de favorito (padrão: true)
- `isFavorite` (boolean): Se o item está favoritado (padrão: false)

### Temas

- `theme` (string): 'orange', 'blue', 'red' (padrão: 'orange')

### Eventos

- `onClick` (function): Callback executado ao clicar no card
- `onFavoriteToggle` (function): Callback executado ao favoritar/desfavoritar

### Estilos

- `customStyles` (string): Estilos CSS customizados adicionais

## Métodos

### updateFavoriteStatus(isFavorite)

Atualiza o status de favorito e o ícone do botão.

### update(newConfig)

Atualiza a configuração do componente e re-renderiza.

### show() / hide()

Mostra ou esconde o card.

### destroy()

Remove o componente do DOM.

## Presets Disponíveis

- `FOOD`: Para pratos especiais (com botão de favorito)
- `DRINK`: Para bebidas artonianas (com botão de favorito)
- `CONDITION`: Para condições (sem botão de favorito)

## Exemplo de Integração

```javascript
// Substituindo a função createListItemCard existente
function createListItemCard(item, itemType, onFavoriteToggle) {
  const preset =
    itemType === 'food' ? 'food' : itemType === 'drink' ? 'drink' : 'condition';

  const isFavorite =
    itemType === 'food'
      ? isPratoFavorito(item.nome)
      : itemType === 'drink'
      ? isBebidaFavorita(item.nome)
      : false;

  const card = createFavoritableCardWithPreset(preset, {
    title: item.nome,
    summary: item.descricao,
    isFavorite: isFavorite,
    onClick: () => {
      if (itemType === 'food') {
        createPratoDetailModal(item);
      } else if (itemType === 'drink') {
        createBebidaDetailModal(item);
      }
    },
    onFavoriteToggle: (isFavorite) => {
      if (itemType === 'food') {
        togglePratoFavorito(item.nome);
      } else if (itemType === 'drink') {
        toggleBebidaFavorita(item.nome);
      }
      if (onFavoriteToggle) onFavoriteToggle();
    },
  });

  return card.render();
}
```
