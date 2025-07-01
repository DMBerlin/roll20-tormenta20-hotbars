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
    └── tormenta20/
        └── hotbars/
            └── cacador.js
```

## 🎯 Scripts Disponíveis

### Hotbar Extra - Caçador (`cacador.js`)

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
   - Copie o conteúdo do arquivo `cacador.js`
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
```

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
