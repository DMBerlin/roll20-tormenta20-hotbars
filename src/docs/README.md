# Roll20 Tormenta20 Hotbars - Documentação Técnica Completa

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Contexto da Plataforma Roll20](#contexto-da-plataforma-roll20)
3. [Sistema Tormenta20](#sistema-tormenta20)
4. [Arquitetura do Projeto](#arquitetura-do-projeto)
5. [Componentes e Módulos](#componentes-e-módulos)
6. [Sistema de Build](#sistema-de-build)
7. [Casos de Uso](#casos-de-uso)
8. [Implementações Técnicas](#implementações-técnicas)
9. [Guia de Desenvolvimento](#guia-de-desenvolvimento)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral do Projeto

### Proposta e Objetivo

O **Roll20 Tormenta20 Hotbars** é um projeto de extensão para navegador que adiciona funcionalidades avançadas ao Roll20, especificamente otimizadas para o sistema Tormenta20. O projeto visa resolver problemas comuns enfrentados por jogadores e mestres ao usar o Roll20 com Tormenta20, oferecendo:

- **Hotbar Flutuante**: Interface arrastável e personalizável
- **Gerenciamento de Personagem**: Sistema completo de controle de personagens
- **Grimório Digital**: Acesso rápido a todas as magias do sistema
- **Sistema de Condições**: Controle automático de efeitos de status
- **Macros Automáticas**: Execução de ações complexas com um clique

### Tecnologias Utilizadas

- **JavaScript ES6+**: Linguagem principal
- **Tampermonkey**: Plataforma de extensão de usuário
- **Chrome Extension API**: Para versão como extensão do Chrome
- **Node.js**: Sistema de build e desenvolvimento
- **Handlebars**: Template engine para geração de conteúdo
- **Terser**: Minificação de código
- **ESLint**: Linting e qualidade de código

### Versões e Distribuição

- **Versão Atual**: v0.1.0
- **Distribuição**: Tampermonkey Script + Chrome Extension
- **Compatibilidade**: Roll20 (app.roll20.net/editor/*)
- **Navegadores**: Chrome, Firefox, Edge (via Tampermonkey)

---

## 🎮 Contexto da Plataforma Roll20

### O que é o Roll20

O **Roll20** é uma plataforma virtual de mesa (VTT - Virtual Tabletop) que permite jogar RPGs de mesa online. É uma das plataformas mais populares para RPGs digitais, oferecendo:

- **Mapas Interativos**: Sistema de grid e tokens
- **Dados Virtuais**: Rolagem de dados integrada
- **Chat de Jogo**: Comunicação entre jogadores
- **Fichas de Personagem**: Sistema de personagens digitais
- **Macros**: Automação de ações repetitivas
- **API de Desenvolvimento**: Possibilidade de extensões

### Limitações do Roll20 para Tormenta20

O Roll20, apesar de ser uma excelente plataforma, possui algumas limitações específicas para o sistema Tormenta20:

1. **Interface Limitada**: Hotbars fixas e pouco flexíveis
2. **Falta de Especialização**: Não otimizado para mecânicas específicas do Tormenta20
3. **Gerenciamento de Magias**: Sistema básico de grimório
4. **Controle de Condições**: Sem automação de efeitos de status
5. **Macros Limitadas**: Funcionalidade básica de automação

### Por que Extensões são Necessárias

As extensões como esta são essenciais para:
- **Melhorar a Experiência**: Interface mais intuitiva e eficiente
- **Automatizar Tarefas**: Reduzir tempo gasto em ações repetitivas
- **Especializar para o Sistema**: Adaptar a interface às necessidades do Tormenta20
- **Aumentar Produtividade**: Permitir que jogadores foquem no jogo, não na interface

---

## ⚔️ Sistema Tormenta20

### Visão Geral do Sistema

**Tormenta20** é um sistema de RPG brasileiro baseado no universo de Tormenta, que por sua vez é inspirado no D&D 3.5. É um sistema complexo com mecânicas únicas:

### Características Principais

#### **Sistema de Atributos**
- **Força (FOR)**: Ataques corpo a corpo, dano físico
- **Destreza (DES)**: Iniciativa, ataques à distância, esquiva
- **Constituição (CON)**: Pontos de vida, resistência
- **Inteligência (INT)**: Magias arcanas, perícias intelectuais
- **Sabedoria (SAB)**: Magias divinas, percepção
- **Carisma (CAR)**: Magias de convocação, interação social

#### **Sistema de Classes**
- **Classes Base**: Guerreiro, Ladino, Clérigo, Mago, etc.
- **Classes Prestígio**: Especializações avançadas
- **Multiclasse**: Sistema flexível de combinação de classes

#### **Sistema de Magias**
- **3 Tradições**: Arcana, Divina, Universal
- **5 Círculos**: 1º ao 5º círculo de poder
- **8 Escolas**: Abjuração, Adivinhação, Convocação, Encantamento, Evocação, Ilusão, Necromancia, Transmutação
- **Pontos de Mana (PM)**: Sistema de custo de magias

#### **Sistema de Combate**
- **Iniciativa**: Baseada em Destreza
- **Ataque**: Teste de ataque vs Defesa
- **Dano**: Sistema de tipos de dano (corte, impacto, perfuração, etc.)
- **Condições**: Sistema complexo de efeitos de status

### Mecânicas Específicas do Tormenta20

#### **Poderes de Destino**
- Recursos especiais que podem ser usados uma vez por sessão
- Variam por raça e classe
- Efeitos poderosos mas limitados

#### **Sistema de Condições**
- **Condições Simples**: Desprevenido, Caído, etc.
- **Condições Complexas**: Confuso, Dominado, etc.
- **Categorias**: Medo, Movimento, Mental, Sentidos, Cansaço
- **Acumulação**: Condições similares não se acumulam

#### **Perícias**
- Sistema baseado em atributos
- Treinamento em perícias específicas
- Usos especiais para cada perícia

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios

```
roll20/
├── chrome-extension/          # Versão como extensão Chrome
│   ├── manifest.json         # Configuração da extensão
│   ├── content.js           # Script principal da extensão
│   ├── build-extension.js   # Script de build da extensão
│   └── icons/               # Ícones da extensão
├── src/
│   ├── main.js              # Script principal (Tampermonkey)
│   ├── assets/              # Dados estáticos
│   │   ├── condicoes.md     # Lista de condições
│   │   ├── bebidas.md       # Dados de bebidas
│   │   └── ...              # Outros dados
│   ├── modules/
│   │   └── grimorio/        # Sistema de magias
│   │       ├── magias/      # Arquivos individuais de magias
│   │       ├── generated-spells-data.js  # Dados gerados
│   │       └── grimorio-manager.js       # Gerenciador
│   ├── core/
│   │   ├── build/           # Sistema de build
│   │   ├── dev/             # Servidor de desenvolvimento
│   │   └── versioning/      # Controle de versão
│   └── playground/          # Ambiente de testes
├── dist/                    # Arquivos de distribuição
├── package.json             # Dependências e scripts
├── eslint.config.mjs        # Configuração do ESLint
└── Makefile                 # Comandos de automação
```

### Padrões Arquiteturais

#### **Modularidade**
- **Separação de Responsabilidades**: Cada módulo tem uma função específica
- **Baixo Acoplamento**: Módulos independentes entre si
- **Alta Coesão**: Funcionalidades relacionadas agrupadas

#### **Sistema de Build**
- **Geração Dinâmica**: Dados gerados automaticamente durante o build
- **Minificação**: Código otimizado para produção
- **Versionamento**: Controle automático de versões

#### **Persistência de Dados**
- **localStorage**: Armazenamento local no navegador
- **Cache Inteligente**: Sistema de cache para ícones e dados
- **Versionamento de Cache**: Invalidação automática quando necessário

### Fluxo de Dados

```
1. Carregamento do Script
   ↓
2. Inicialização dos Módulos
   ↓
3. Carregamento de Dados (localStorage + cache)
   ↓
4. Criação da Interface
   ↓
5. Event Listeners
   ↓
6. Interação do Usuário
   ↓
7. Atualização de Dados
   ↓
8. Persistência (localStorage)
```

---

## 🧩 Componentes e Módulos

### Sistema de Componentes

O projeto utiliza um sistema de componentes reutilizáveis para manter consistência e facilitar manutenção:

#### **HotbarButton**
```javascript
// Exemplo de uso do componente HotbarButton
const button = createHotbarButton({
    text: 'Ataque',
    theme: 'blue',
    badge: { text: '3', color: 'red' },
    onClick: () => executeAttack()
});
```

**Características:**
- **Temas**: Azul, vermelho, verde, roxo
- **Badges**: Indicadores visuais opcionais
- **Animações**: Efeitos de hover e click
- **Responsivo**: Adaptável a diferentes tamanhos

#### **Tooltip**
```javascript
// Exemplo de uso do componente Tooltip
const tooltip = createTooltip({
    content: 'Descrição da habilidade',
    theme: 'blue',
    position: 'right',
    tags: ['Ação', 'PM: 1']
});
```

**Características:**
- **Posicionamento Inteligente**: Direita, esquerda, acima, abaixo
- **Temas Múltiplos**: Diferentes cores para diferentes contextos
- **Tags Customizáveis**: Metadados visuais
- **Animações Suaves**: Transições fluidas

#### **SearchInput**
```javascript
// Exemplo de uso do componente SearchInput
const search = createSearchInput({
    placeholder: 'Buscar magias...',
    theme: 'purple',
    onInput: (value) => filterSpells(value),
    onClear: () => showAllSpells()
});
```

**Características:**
- **Auto-focus**: Opcional
- **Botão de Limpar**: Automático quando há texto
- **Callbacks Flexíveis**: Para input e clear
- **API Completa**: Manipulação programática

### Módulo Grimório

O módulo de grimório é o coração do sistema de magias:

#### **Estrutura de Dados**
```javascript
const spellsData = {
    arcana: {
        "1-circulo": {
            abjuracao: {
                "alarme": {
                    name: "Alarme",
                    type: "Magia",
                    img: "url_do_icone",
                    system: {
                        circulo: "1",
                        escola: "abjuracao",
                        ativacao: { custo: 1, execucao: "acao" },
                        alcance: "curto",
                        duracao: "1 dia",
                        alvo: "Esfera de 9m de raio",
                        resistencia: "Nenhuma",
                        custo: "1 PM",
                        description: { value: "..." }
                    }
                }
            }
        }
    }
};
```

#### **Geração Automática**
- **Arquivos Individuais**: Cada magia em arquivo separado
- **Build Time**: Geração durante o processo de build
- **Consistência**: Garantia de dados sempre atualizados
- **Performance**: Dados inline no código final

#### **Funcionalidades**
- **Busca Avançada**: Por nome, escola, círculo, tradição
- **Filtros**: Múltiplos critérios de filtragem
- **Favoritos**: Sistema de magias favoritas
- **Ícones Dinâmicos**: Cache inteligente de ícones

### Sistema de Condições

O sistema de condições automatiza o controle de efeitos de status:

#### **Estrutura de Condição**
```javascript
const condition = {
    name: "Desprevenido",
    description: "O personagem foi pego de surpresa...",
    effects: [
        "-5 na Defesa",
        "-5 em Reflexos"
    ],
    category: "Status",
    icon: "url_do_icone"
};
```

#### **Funcionalidades**
- **Aplicação Automática**: Cálculo automático de modificadores
- **Indicadores Visuais**: Badges na interface
- **Persistência**: Salva estado entre sessões
- **Categorização**: Organização por tipo de efeito

---

## 🔨 Sistema de Build

### Visão Geral

O sistema de build é responsável por transformar o código fonte em um produto final otimizado:

#### **Processo de Build**
```
1. Geração de Dados de Magias
   ↓
2. Bundle de Componentes
   ↓
3. Combinação de Arquivos
   ↓
4. Inline de Dados
   ↓
5. Minificação
   ↓
6. Geração de Metadata
   ↓
7. Arquivo Final
```

### Scripts de Build

#### **generate-spells-data.js**
```javascript
// Gera dados consolidados de magias
function generateSpellsData() {
    // Lê arquivos individuais de magias
    // Processa e normaliza dados
    // Gera arquivo consolidated
    // Aplica decodificação de HTML entities
}
```

**Funcionalidades:**
- **Leitura Recursiva**: Processa toda a estrutura de magias
- **Normalização**: Padroniza nomes e dados
- **Decodificação**: Converte HTML entities
- **Validação**: Verifica integridade dos dados

#### **build.js**
```javascript
// Script principal de build
async function build() {
    // Detecta branch atual
    // Gera dados de magias
    // Combina componentes
    // Minifica código
    // Gera arquivo final
}
```

**Funcionalidades:**
- **Detecção de Branch**: Build específico por branch
- **Minificação**: Otimização de código
- **Metadata**: Preserva headers do Tampermonkey
- **Estatísticas**: Relatórios de build

### Otimizações

#### **Minificação**
- **Terser**: Minificador JavaScript avançado
- **Compressão**: Remove código desnecessário
- **Mangling**: Otimização de nomes de variáveis
- **Preservação**: Mantém funções importantes

#### **Cache de Ícones**
```javascript
// Sistema de cache inteligente
function getSpellIconCache() {
    // Carrega cache do localStorage
    // Verifica versão
    // Retorna dados válidos
}
```

**Benefícios:**
- **Performance**: Reduz requisições HTTP
- **Offline**: Funciona sem internet
- **Versionamento**: Invalidação automática
- **Fallback**: URLs alternativas

---

## 🎮 Casos de Uso

### Caso de Uso 1: Jogador de Caçador

#### **Cenário**
Um jogador está interpretando um Caçador nível 5 no Tormenta20, usando o Roll20 para uma sessão online.

#### **Problemas Sem a Extensão**
- Precisa navegar por múltiplas abas para acessar habilidades
- Esquece de aplicar modificadores de condições
- Perde tempo procurando magias específicas
- Interface confusa e pouco intuitiva

#### **Solução com a Extensão**
1. **Hotbar Personalizada**: Acesso rápido a todas as habilidades
2. **Sistema de Favoritos**: Habilidades mais usadas sempre visíveis
3. **Controle de Condições**: Aplicação automática de efeitos
4. **Grimório Integrado**: Busca rápida de magias
5. **Macros Automáticas**: Execução de ações complexas

#### **Fluxo de Uso**
```
1. Abrir Roll20
   ↓
2. Hotbar aparece automaticamente
   ↓
3. Configurar personagem (nome, nível, avatar)
   ↓
4. Marcar habilidades favoritas
   ↓
5. Usar hotbar durante o jogo
   ↓
6. Aplicar condições conforme necessário
```

### Caso de Uso 2: Mestre de Jogo

#### **Cenário**
Um mestre está conduzindo uma sessão de Tormenta20 com múltiplos jogadores, precisando gerenciar NPCs e aplicar condições.

#### **Problemas Sem a Extensão**
- Dificuldade em gerenciar múltiplos personagens
- Esquece de aplicar condições aos NPCs
- Perde tempo com cálculos manuais
- Interface limitada para controle de jogo

#### **Solução com a Extensão**
1. **Múltiplas Hotbars**: Uma para cada personagem/NPC
2. **Sistema de Condições**: Controle visual de efeitos
3. **Macros Rápidas**: Ações comuns automatizadas
4. **Grimório Completo**: Acesso a todas as magias
5. **Interface Responsiva**: Adaptável a diferentes situações

### Caso de Uso 3: Jogador de Mago

#### **Cenário**
Um jogador está interpretando um Mago nível 3, com acesso a múltiplas magias de diferentes escolas e círculos.

#### **Problemas Sem a Extensão**
- Dificuldade em organizar magias por escola/círculo
- Esquece custos de PM das magias
- Interface confusa para seleção de magias
- Falta de informações rápidas sobre efeitos

#### **Solução com a Extensão**
1. **Grimório Organizado**: Magias por tradição, círculo e escola
2. **Sistema de Busca**: Encontra magias rapidamente
3. **Informações Detalhadas**: Tooltips com dados completos
4. **Favoritos**: Magias mais usadas sempre acessíveis
5. **Controle de PM**: Acompanhamento automático de pontos de mana

---

## ⚙️ Implementações Técnicas

### Sistema de Persistência

#### **localStorage Strategy**
```javascript
// Chaves de armazenamento
const FAVORITES_KEY = 'roll20-hotbar-favorites';
const AVATAR_KEY = 'roll20-hotbar-avatar';
const CHAR_NAME_KEY = 'roll20-hotbar-charname';
const HUNTER_ABILITIES_KEY = 'roll20-hotbar-hunter-abilities';
const DESTINY_POWERS_KEY = 'roll20-hotbar-destiny-powers';
const LEARNED_SPELLS_KEY = 'roll20-hotbar-learned-spells';
```

#### **Funções de Persistência**
```javascript
// Salvar dados
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.warn('Erro ao salvar dados:', error);
    }
}

// Carregar dados
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.warn('Erro ao carregar dados:', error);
        return defaultValue;
    }
}
```

### Sistema de Drag and Drop

#### **Implementação**
```javascript
function makeDraggable(element, handle) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    // Event listeners para mouse e touch
    handle.addEventListener('mousedown', dragStart);
    handle.addEventListener('touchstart', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
}
```

#### **Características**
- **Suporte Multi-touch**: Funciona em dispositivos móveis
- **Limites de Tela**: Impede arrastar para fora da viewport
- **Performance**: Otimizado para movimento suave
- **Acessibilidade**: Suporte a teclado

### Sistema de Macros

#### **Execução de Macros**
```javascript
function executeMacro(macroText) {
    // Encontra o campo de macro no Roll20
    const macroField = document.querySelector('#macroinput');
    if (macroField) {
        // Insere o texto da macro
        macroField.value = macroText;
        
        // Dispara evento de mudança
        const event = new Event('input', { bubbles: true });
        macroField.dispatchEvent(event);
        
        // Executa a macro
        const executeButton = document.querySelector('#macrobutton');
        if (executeButton) {
            executeButton.click();
        }
    }
}
```

#### **Tipos de Macros**
- **Ataques**: Rolagem de ataque + dano
- **Habilidades**: Execução de poderes especiais
- **Magias**: Lançamento de magias
- **Condições**: Aplicação de efeitos de status

### Sistema de Cache de Ícones

#### **Estratégia de Cache**
```javascript
async function getSpellIcon(spellName) {
    const cache = getSpellIconCache();
    
    // Verifica cache primeiro
    if (cache[spellName]) {
        return cache[spellName];
    }
    
    // Tenta URL do Tormenta20
    const tormentaUrl = getTormenta20IconUrl(spellName);
    if (await testImageUrl(tormentaUrl)) {
        cache[spellName] = tormentaUrl;
        saveSpellIconCache(cache);
        return tormentaUrl;
    }
    
    // Fallback para ícone padrão
    return DEFAULT_ICON;
}
```

#### **Benefícios**
- **Performance**: Reduz requisições HTTP
- **Offline**: Funciona sem internet
- **Fallback**: Sempre tem um ícone disponível
- **Versionamento**: Cache invalida automaticamente

---

## 🛠️ Guia de Desenvolvimento

### Configuração do Ambiente

#### **Pré-requisitos**
```bash
# Node.js 14+ e pnpm
node --version  # >= 14.0.0
pnpm --version  # >= 6.0.0
```

#### **Instalação**
```bash
# Clonar repositório
git clone <repository-url>
cd roll20

# Instalar dependências
pnpm install

# Configurar ESLint
pnpm lint
```

### Scripts Disponíveis

#### **Desenvolvimento**
```bash
# Servidor de desenvolvimento
pnpm dev

# Build completo
pnpm build

# Linting
pnpm lint

# Teste de geração de magias
pnpm test-spells
```

#### **Produção**
```bash
# Build para produção
pnpm build

# Atualizar versão
pnpm update-version
```

### Estrutura de Desenvolvimento

#### **Adicionando Novas Magias**
1. **Criar arquivo**: `src/modules/grimorio/magias/[tradicao]/[circulo]/[escola]/[nome].js`
2. **Estrutura do arquivo**:
```javascript
module.exports = {
    name: "Nome da Magia",
    type: "magia",
    img: "url_do_icone",
    system: {
        circulo: "1",
        escola: "abjuracao",
        ativacao: { custo: 1, execucao: "acao" },
        alcance: "curto",
        duracao: "instantanea",
        alvo: "1 criatura",
        resistencia: "Fortitude reduz à metade",
        custo: "1 PM",
        description: { value: "Descrição da magia..." }
    }
};
```

3. **Executar build**: `pnpm build`

#### **Adicionando Novos Componentes**
1. **Criar arquivo**: `src/components/[Nome].js`
2. **Implementar interface padrão**:
```javascript
function create[Nome](options) {
    // Implementação do componente
    return element;
}

// Exportar para bundle
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { create[Nome] };
}
```

3. **Adicionar ao bundle**: `src/components/bundle.js`

### Padrões de Código

#### **Convenções de Nomenclatura**
- **Funções**: camelCase (`createHotbarButton`)
- **Constantes**: UPPER_SNAKE_CASE (`FAVORITES_KEY`)
- **Classes**: PascalCase (`HotbarManager`)
- **Arquivos**: kebab-case (`hotbar-button.js`)

#### **Estrutura de Funções**
```javascript
/**
 * Descrição da função
 * @param {string} param1 - Descrição do parâmetro
 * @param {number} param2 - Descrição do parâmetro
 * @returns {HTMLElement} Elemento criado
 */
function exampleFunction(param1, param2) {
    // Validação de parâmetros
    if (!param1) {
        throw new Error('param1 é obrigatório');
    }
    
    // Implementação
    const result = doSomething(param1, param2);
    
    // Retorno
    return result;
}
```

#### **Tratamento de Erros**
```javascript
try {
    // Operação que pode falhar
    const result = riskyOperation();
    return result;
} catch (error) {
    // Log do erro
    console.warn('Erro na operação:', error);
    
    // Fallback ou valor padrão
    return defaultValue;
}
```

### Testes e Debugging

#### **Console Debugging**
```javascript
// Logs de debug
console.log('Debug:', { variable1, variable2 });

// Logs de warning
console.warn('Aviso:', message);

// Logs de erro
console.error('Erro:', error);
```

#### **Testes Manuais**
1. **Playground**: `src/playground/index.html`
2. **Exemplos de Componentes**: `src/components/*Examples.js`
3. **Teste de Magias**: `pnpm test-spells`

---

## 🐛 Troubleshooting

### Problemas Comuns

#### **Hotbar Não Aparece**
**Sintomas**: A hotbar não aparece após carregar o Roll20

**Possíveis Causas**:
- Script não está ativo no Tampermonkey
- URL não corresponde ao padrão esperado
- Erro JavaScript impedindo execução

**Soluções**:
1. Verificar se o script está ativo no Tampermonkey
2. Confirmar que está acessando `https://app.roll20.net/editor/*`
3. Abrir console do navegador (F12) e verificar erros
4. Recarregar a página

#### **Dados Não Persistem**
**Sintomas**: Configurações são perdidas ao recarregar a página

**Possíveis Causas**:
- localStorage não disponível
- Erro na serialização/deserialização
- Conflito com outros scripts

**Soluções**:
1. Verificar se localStorage está habilitado
2. Abrir console e verificar erros de JSON
3. Testar em modo incógnito
4. Verificar conflitos com outros scripts

#### **Ícones Não Carregam**
**Sintomas**: Ícones de magias aparecem quebrados

**Possíveis Causas**:
- Problemas de rede
- URLs inválidas
- Cache corrompido

**Soluções**:
1. Verificar conexão com internet
2. Limpar cache do navegador
3. Verificar URLs dos ícones no console
4. Recarregar a página

#### **Performance Lenta**
**Sintomas**: Interface lenta ou travamentos

**Possíveis Causas**:
- Muitos dados carregados
- Loops infinitos
- Memory leaks

**Soluções**:
1. Verificar uso de memória no DevTools
2. Reduzir quantidade de dados carregados
3. Otimizar loops e funções
4. Implementar lazy loading

### Debugging Avançado

#### **DevTools Profiler**
```javascript
// Marcar início do profiling
console.profile('Operação Lenta');

// Código a ser analisado
slowOperation();

// Marcar fim do profiling
console.profileEnd();
```

#### **Memory Leaks**
```javascript
// Verificar uso de memória
console.log('Memory usage:', performance.memory);

// Forçar garbage collection (Chrome)
if (window.gc) {
    window.gc();
}
```

#### **Network Debugging**
```javascript
// Monitorar requisições de imagem
const originalImage = window.Image;
window.Image = function() {
    const img = new originalImage();
    img.addEventListener('load', () => console.log('Image loaded:', img.src));
    img.addEventListener('error', () => console.log('Image failed:', img.src));
    return img;
};
```

### Logs e Monitoramento

#### **Sistema de Logs**
```javascript
// Log levels
const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
};

function log(level, message, data = null) {
    const currentLevel = LOG_LEVELS.INFO; // Configurável
    
    if (level >= currentLevel) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`, data);
    }
}
```

#### **Monitoramento de Performance**
```javascript
// Medir tempo de execução
function measureTime(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    console.log(`${name} took ${end - start}ms`);
    return result;
}
```

---

## 📚 Recursos Adicionais

### Documentação Externa

- **Roll20 API**: https://wiki.roll20.net/API:Scripts
- **Tampermonkey**: https://www.tampermonkey.net/
- **Tormenta20**: https://tormenta20.com.br/
- **Chrome Extensions**: https://developer.chrome.com/docs/extensions/

### Comunidade

- **Roll20 Forums**: https://app.roll20.net/forum/
- **Tormenta20 Discord**: Comunidade oficial do sistema
- **GitHub Issues**: Para reportar bugs e sugestões

### Contribuição

Para contribuir com o projeto:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature
3. **Implemente** as mudanças seguindo os padrões
4. **Teste** extensivamente
5. **Submeta** um Pull Request

### Licença

Este projeto está sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.

---

**Última atualização**: Dezembro 2024  
**Versão da documentação**: 1.0  
**Autor**: Daniel Marinho Goncalves
