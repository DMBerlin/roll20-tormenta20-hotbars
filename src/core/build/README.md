# Sistema de Build - Roll20 Hotbar

Este projeto inclui um sistema de build automatizado que minifica o código JavaScript e gera arquivos otimizados para produção.

## Arquivos Gerados

O sistema de build gera dois arquivos na pasta `dist/`:

- **`tormenta20hotbar.js`** - Versão minificada para produção (338KB)
- **`tormenta20hotbar.dev.js`** - Versão não minificada para desenvolvimento (621KB)

## Comandos Disponíveis

### Build
```bash
pnpm run build
```
- Minifica o código do `src/main.js`
- Gera ambos os arquivos (produção e desenvolvimento)
- Mostra estatísticas de compressão

### Desenvolvimento
```bash
pnpm run dev
```
- Alterna o arquivo de teste para usar a versão de desenvolvimento
- Útil para debug e desenvolvimento

### Produção
```bash
pnpm run prod
```
- Alterna o arquivo de teste para usar a versão minificada
- Simula o ambiente de produção

## Fluxo de Trabalho

1. **Desenvolvimento**: Use `pnpm run dev` para trabalhar com código não minificado
2. **Teste**: Abra `src/test/index.html` no navegador para testar
3. **Build**: Execute `pnpm run build` para gerar arquivos de produção
4. **Produção**: Use `pnpm run prod` para testar a versão minificada

## Configuração de Minificação

O processo de minificação usa **Terser** com as seguintes configurações:

- **Compressão**: Remove espaços em branco e otimiza código
- **Mangling**: Preserva nomes de funções importantes (GM_*)
- **Console**: Mantém `console.log` para debug
- **Debugger**: Remove declarações `debugger`

## Estrutura de Arquivos

```
roll20/
├── src/
│   ├── main.js              # Código fonte original
│   └── test/
│       └── index.html       # Arquivo de teste
├── dist/
│   ├── tormenta20hotbar.js      # Versão minificada
│   └── tormenta20hotbar.dev.js  # Versão desenvolvimento
├── src/
│   └── core/
│       └── build/
│           └── build.js    # Script de build
├── toggle-env.js           # Script de alternância de ambiente
└── package.json            # Configurações e scripts
```

## Estatísticas de Compressão

- **Tamanho original**: 620.73 KB
- **Tamanho minificado**: 337.57 KB
- **Redução**: 45.6%

## Notas Importantes

- O arquivo de teste (`index.html`) é automaticamente atualizado pelos scripts
- A versão de desenvolvimento mantém formatação e comentários
- A versão de produção é otimizada para tamanho e performance
- Sempre execute `pnpm run build` após modificar o código fonte 