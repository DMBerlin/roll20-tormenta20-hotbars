# Scripts Tampermonkey para Roll20 - Tormenta20

Este repositório contém scripts personalizados para melhorar a experiência de jogo no Roll20, especificamente otimizados para o sistema Tormenta20.

## 📁 Estrutura do Projeto

```
.tampermonkey-scripts/
├── README.md
└── roll20/
    ├── package.json
    ├── package-lock.json
    ├── eslint.config.mjs
    ├── src/
    │   ├── main.js
    │   ├── components/
    │   │   ├── README.md
    │   │   ├── HotbarButton.md
    │   │   ├── HotbarButtonExamples.js
    │   │   ├── Tooltip.md
    │   │   └── TooltipExamples.js
    │   ├── playground/
    │   │   ├── index.html
    │   │   ├── README.md
    │   │   └── search-example.html
    │   ├── assets/
    │   │   ├── bebidas.md
    │   │   ├── condicoes.md
    │   │   ├── dishes-icons.md
    │   │   ├── dishes.md
    │   │   ├── pericias.md
    │   │   └── pratos-especiais.md
    │   └── core/
    │       ├── build/
    │       │   └── build.js
    │       └── versioning/
    │           ├── update-version.js
    │           └── VERSIONING.md
```

## 🔨 Build System

### Geração Dinâmica de Dados de Magias

O projeto agora inclui um sistema de build que gera dinamicamente os dados de magias durante o processo de build. Isso oferece várias vantagens:

#### ✨ Benefícios

- **Manutenibilidade**: Os dados de magias são gerados automaticamente a partir dos arquivos individuais
- **Consistência**: Garante que todos os dados estejam sempre atualizados
- **Performance**: Elimina a necessidade de carregar dados hardcoded no runtime
- **Escalabilidade**: Fácil adição de novas magias sem modificar o código principal

#### 🔧 Como Funciona

1. **Estrutura de Arquivos**: As magias são organizadas em arquivos individuais em `src/source/magias/`
2. **Geração**: Durante o build, o script `generate-spells-data.js` lê todos os arquivos de magias
3. **Transformação**: Converte os dados para o formato esperado pelo `main.js`
4. **Integração**: O build process inlines os dados gerados no arquivo final

#### 📋 Scripts Disponíveis

- `pnpm build`: Executa o build completo incluindo geração de dados de magias
- `pnpm test-spells`: Testa apenas a geração de dados de magias
- `pnpm dev`: Inicia o servidor de desenvolvimento

#### 📊 Estatísticas

O sistema processa automaticamente:
- **200+ magias** organizadas por tradição, círculo e escola
- **3 tradições**: Arcana, Divina, Universal
- **5 círculos**: 1º ao 5º círculo
- **8 escolas**: Abjuração, Adivinhação, Convocação, Encantamento, Evocação, Ilusão, Necromancia, Transmutação

## 🎯 Scripts Disponíveis

### Hotbar Extra - Caçador (`main.js`)

Um script completo que adiciona uma hotbar flutuante e arrastável ao Roll20, especializada para a classe Caçador do Tormenta20.

#### ✨ Funcionalidades Principais

- **Hotbar Flutuante**: Interface arrastável que pode ser posicionada em qualquer lugar da tela
- **Sistema de Favoritos**: Marque e organize suas habilidades favoritas
- **Gerenciamento de Personagem**: 
  - Avatar personalizável
  - Nome do personagem
  - Nível do personagem
- **Habilidades de Caçador**:
  - Gerenciamento automático de habilidades por nível
  - Sistema de poderes de destino
  - Habilidades especiais (Explorador, Caminho do Explorador, Mestre Caçador)
- **Sistema de Efeitos**: Controle de efeitos ativos com indicadores visuais
- **Macros Automáticas**: Execução de ataques e habilidades com efeitos visuais
- **Interface Intuitiva**: Popups organizados por categorias

#### 🎮 Como Usar

1. **Instalação**:
   - Instale a extensão Tampermonkey no seu navegador
   - Copie o conteúdo do arquivo `main.js`
   - Crie um novo script no Tampermonkey e cole o código
   - Salve e ative o script

2. **Configuração Inicial**:
   - Acesse uma mesa do Roll20
   - A hotbar aparecerá automaticamente
   - Configure o nome e nível do seu personagem
   - Adicione um avatar (opcional)

3. **Uso Diário**:
   - Arraste a hotbar para a posição desejada
   - Use os botões para acessar diferentes categorias
   - Marque habilidades como favoritas para acesso rápido
   - Gerencie efeitos ativos através do sistema de badges

#### 🔧 Recursos Técnicos

- **Persistência de Dados**: Todas as configurações são salvas no localStorage
- **Responsivo**: Interface adaptável a diferentes tamanhos de tela
- **Performance Otimizada**: Código eficiente para não impactar o desempenho do Roll20
- **Compatibilidade**: Funciona com a versão atual do Roll20
- **Componentes Reutilizáveis**: Sistema modular com componentes padronizados

#### 🧩 Componentes

O projeto agora inclui um sistema de componentes reutilizáveis:

- **HotbarButton**: Componente padronizado para botões da hotbar
  - Suporte a temas azul e vermelho
  - Sistema de badges opcional
  - Animações e interações consistentes
  - Documentação completa em `src/components/HotbarButton.md`
  - Exemplos práticos em `src/components/HotbarButtonExamples.js`

- **Tooltip**: Componente padronizado para tooltips
  - Suporte a múltiplos temas (azul, vermelho, verde, roxo)
  - Sistema de tags customizáveis
  - Posicionamento inteligente (direita, esquerda, acima, abaixo)
  - Animações suaves e responsivo
  - Documentação completa em `src/components/Tooltip.md`
  - Exemplos práticos em `src/components/TooltipExamples.js`

- **SearchInput**: Componente reutilizável para inputs de busca/filtro
  - Suporte a múltiplos temas (azul, laranja, roxo, verde, vermelho)
  - Botão de limpar automático
  - Auto-focus opcional
  - Callbacks flexíveis para input e clear
  - API completa para manipulação programática
  - Design responsivo e acessível
  - Documentação completa em `src/components/README.md`
  - Exemplo interativo em `src/playground/search-example.html`

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

```bash
cd roll20
npm install
```

### Scripts Disponíveis

```bash
# Executar linting e correção automática
npm run lint

# Gerar build do script
npm run build

# Atualizar versão
npm run update-version
```

### Sistema de Build

O projeto utiliza um sistema de build baseado na branch atual:

- **Branch `main`**: Build para produção
- **Branch `development`**: Build para testes
- **Outras branches**: Build para desenvolvimento

O comando `npm run build` gera automaticamente o arquivo `dist/tormenta20hotbar.js` baseado na branch atual, eliminando a necessidade de arquivos separados para desenvolvimento e produção.

### Configuração do ESLint

O projeto utiliza ESLint para manter a qualidade do código. A configuração está em `eslint.config.mjs` e inclui:

- Regras recomendadas para JavaScript
- Suporte a ambiente de navegador
- Configuração para módulos CommonJS

## 📝 Licença

Este projeto está sob a licença ISC.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 🐛 Problemas Conhecidos

- A hotbar pode não aparecer imediatamente em algumas situações - recarregue a página se necessário
- Efeitos visuais podem ser afetados por configurações de performance do navegador

## 📞 Suporte

Se você encontrar problemas ou tiver sugestões:

1. Verifique se o script está ativo no Tampermonkey
2. Confirme que está acessando uma mesa do Roll20
3. Abra o console do navegador (F12) para verificar erros
4. Recarregue a página se necessário

## 🔄 Atualizações

O script é atualizado regularmente para:
- Melhorar a compatibilidade com novas versões do Roll20
- Adicionar novas funcionalidades
- Corrigir bugs reportados
- Otimizar performance

---

**Nota**: Este script é independente e não afeta o funcionamento padrão do Roll20. Todas as funcionalidades são aditivas e podem ser desativadas a qualquer momento.
