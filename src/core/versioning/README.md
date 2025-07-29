# Sistema de Versionamento da Hotbar

Este documento explica como funciona o sistema de versionamento da hotbar e como atualizar a versão quando uma nova tag Git for criada.

## 🏷️ Indicador de Versão

A hotbar agora exibe a versão atual do script no canto superior direito da header. O indicador mostra:

- **Ícone**: 🏷️ (tag)
- **Versão**: A última tag Git (ex: `v0.0.1`)
- **Funcionalidade**: Clique para copiar a versão para a área de transferência

## 🔄 Como Atualizar a Versão

### Método 1: Script Automático (Recomendado)

1. **Criar uma nova tag Git**:
   ```bash
   git tag v0.0.2
   git push origin v0.0.2
   ```

2. **Executar o script de atualização**:
   ```bash
   npm run update-version
   ```
   
   Ou diretamente:
   ```bash
   node src/core/versioning/update-version.js
   ```

### Método 2: Atualização Manual

1. Abrir o arquivo `tormenta20/hotbars/main.js`
2. Localizar a linha com a constante `SCRIPT_VERSION`
3. Atualizar o valor para a nova tag:
   ```javascript
   const SCRIPT_VERSION = 'v0.0.2'; // Última tag Git
   ```

## 📁 Arquivos Envolvidos

- **`src/main.js`**: Contém a constante `SCRIPT_VERSION` e o indicador visual
- **`src/core/versioning/update-version.js`**: Script para atualização automática da versão
- **`package.json`**: Contém o script npm `update-version`

## 🎯 Fluxo de Trabalho Recomendado

1. Fazer as alterações no código
2. Fazer commit das alterações
3. Criar uma nova tag Git
4. Executar `npm run update-version`
5. Fazer commit da atualização da versão
6. Fazer push das alterações e da tag

## 🔧 Funcionalidades do Indicador

- **Visual**: Fundo azul claro com borda azul
- **Hover**: Efeito de escala e mudança de cor
- **Clique**: Copia a versão para a área de transferência
- **Tooltip**: Mostra informações sobre a versão
- **Posicionamento**: Canto superior direito da header

## 🚨 Importante

- Sempre atualize a versão após criar uma nova tag Git
- O indicador de versão ajuda a identificar qual versão está sendo executada
- A funcionalidade de copiar versão é útil para reportar bugs ou solicitar suporte 