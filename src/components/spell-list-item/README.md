# SpellListItem Component

Um componente reutilizável para representar itens de lista de magias no grimório de magia.

## Características

- **Ícone da magia**: Exibe a imagem da magia ou um ícone padrão
- **Título e descrição**: Mostra o nome da magia e uma breve descrição
- **Chips informativos**: Exibe escola da magia, tipo de execução e círculo
- **Seleção toggle**: Checkbox para marcar/desmarcar magias como selecionadas
- **Interatividade**: Clique no item abre detalhes da magia, clique no checkbox alterna seleção
- **Temas**: Múltiplos temas de cores disponíveis
- **Hover effects**: Efeitos visuais ao passar o mouse

## Uso Básico

```javascript
import { createSpellListItem } from './components/spell-list-item/spell-list-item.js';

const spellItem = createSpellListItem({
    title: 'Armadura Arcana',
    description: 'Cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa.',
    img: 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg',
    escola: 'abj',
    execucao: 'action',
    circulo: '1',
    onClick: (config, element) => {
        console.log('Magia clicada:', config.title);
        // Abrir modal de detalhes da magia
    },
    onSelectionToggle: (isSelected, config, element) => {
        console.log('Seleção alterada:', isSelected);
        // Atualizar lista de magias selecionadas
    }
});

const element = spellItem.render();
document.body.appendChild(element);
```

## Configuração

### Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `id` | string | `spell-list-item-${timestamp}` | ID único do componente |
| `title` | string | `''` | Título/nome da magia |
| `description` | string | `''` | Descrição breve da magia |
| `img` | string | `null` | URL da imagem da magia |
| `escola` | string | `''` | Escola da magia (abj, adv, con, enc, evo, ilu, nec, tra) |
| `execucao` | string | `''` | Tipo de execução (action, bonus, reacao, free, ritual) |
| `circulo` | string | `''` | Círculo da magia (1-5) |
| `isSelected` | boolean | `false` | Se a magia está selecionada |
| `theme` | string | `'orange'` | Tema de cores (orange, blue, red, purple, green) |
| `customStyles` | string | `''` | Estilos CSS customizados |
| `onClick` | function | `null` | Callback executado ao clicar no item |
| `onSelectionToggle` | function | `null` | Callback executado ao alternar seleção |

### Temas Disponíveis

- **orange**: Laranja (padrão)
- **blue**: Azul
- **red**: Vermelho
- **purple**: Roxo
- **green**: Verde

### Cores dos Chips

#### Escolas de Magia
- **abj** (Abjuração): Vermelho
- **adv** (Adivinhação): Azul
- **con** (Convocação): Verde
- **enc** (Encantamento): Roxo
- **evo** (Evocação): Laranja
- **ilu** (Ilusão): Rosa
- **nec** (Necromancia): Ciano
- **tra** (Transmutação): Amarelo

#### Tipos de Execução
- **action**: Vermelho
- **bonus**: Verde
- **reacao**: Roxo
- **free**: Amarelo
- **ritual**: Ciano

#### Círculos
- **1**: Verde
- **2**: Azul
- **3**: Roxo
- **4**: Laranja
- **5**: Vermelho

## Presets

```javascript
import { createSpellListItemWithPreset, SpellListItemPresets } from './components/spell-list-item/spell-list-item.js';

// Preset padrão
const defaultItem = createSpellListItemWithPreset(SpellListItemPresets.DEFAULT, {
    title: 'Bola de Fogo',
    escola: 'evo'
});

// Preset compacto
const compactItem = createSpellListItemWithPreset(SpellListItemPresets.COMPACT, {
    title: 'Cura Ferimentos',
    escola: 'nec'
});

// Preset detalhado
const detailedItem = createSpellListItemWithPreset(SpellListItemPresets.DETAILED, {
    title: 'Invisibilidade',
    escola: 'ilu'
});
```

## Métodos

### `render()`
Renderiza o componente e retorna o elemento HTML.

### `update(newConfig)`
Atualiza a configuração do componente e re-renderiza.

### `updateSelectionStatus(isSelected)`
Atualiza o status de seleção sem re-renderizar todo o componente.

### `show()`
Mostra o componente.

### `hide()`
Esconde o componente.

### `destroy()`
Destrói o componente e remove event listeners.

## Eventos

### onClick
Executado quando o usuário clica no item (exceto no checkbox).

```javascript
onClick: (config, element) => {
    // config: configuração atual do componente
    // element: elemento HTML do componente
}
```

### onSelectionToggle
Executado quando o usuário clica no checkbox.

```javascript
onSelectionToggle: (isSelected, config, element) => {
    // isSelected: novo status de seleção
    // config: configuração atual do componente
    // element: elemento HTML do componente
}
```

## Exemplo Completo

```javascript
import { createSpellListItem } from './components/spell-list-item/spell-list-item.js';

// Dados da magia (exemplo baseado no formato YAML)
const spellData = {
    name: 'Armadura Arcana',
    img: 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg',
    system: {
        description: {
            value: 'Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa.'
        },
        ativacao: {
            execucao: 'action'
        },
        escola: 'abj',
        circulo: '1'
    }
};

// Criar componente
const spellItem = createSpellListItem({
    title: spellData.name,
    description: spellData.system.description.value,
    img: spellData.img,
    escola: spellData.system.escola,
    execucao: spellData.system.ativacao.execucao,
    circulo: spellData.system.circulo,
    theme: 'blue',
    onClick: (config, element) => {
        console.log('Abrindo detalhes da magia:', config.title);
        // Aqui você implementaria a abertura do modal de detalhes
    },
    onSelectionToggle: (isSelected, config, element) => {
        console.log(`${config.title} ${isSelected ? 'selecionada' : 'desselecionada'}`);
        // Aqui você atualizaria a lista de magias selecionadas
    }
});

// Renderizar e adicionar ao DOM
const element = spellItem.render();
document.getElementById('spell-list').appendChild(element);
```

## Estrutura HTML Gerada

```html
<div class="spell-list-item" style="...">
    <div class="spell-icon" style="...">
        <img src="..." alt="..." style="...">
    </div>
    
    <div class="spell-info" style="...">
        <div class="spell-title" style="...">Nome da Magia</div>
        <div class="spell-description" style="...">Descrição da magia...</div>
        
        <div class="spell-chips" style="...">
            <span class="chip escola-chip" style="...">ABJ</span>
            <span class="chip execucao-chip" style="...">ACTION</span>
            <span class="chip circulo-chip" style="...">1º círculo</span>
        </div>
    </div>
    
    <div class="spell-checkbox" style="...">
        <!-- Checkmark quando selecionado -->
    </div>
</div>
```
