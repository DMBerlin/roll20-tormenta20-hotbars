# Servidor de Desenvolvimento Dinâmico

Este script permite abrir o arquivo HTML de desenvolvimento de forma dinâmica, independente do caminho onde o projeto está localizado.

## Como funciona

O script `dev-server.js`:

1. **Detecta automaticamente** o caminho do projeto usando `path.resolve()`
2. **Verifica se o arquivo HTML existe** antes de tentar abri-lo
3. **Detecta o sistema operacional** e usa o comando apropriado
4. **Tenta abrir no Microsoft Edge** primeiro, com fallback para Chrome no Windows
5. **Fornece feedback visual** com emojis e mensagens informativas

## Uso

```bash
npm run dev
# ou
pnpm dev
```

## Compatibilidade

- ✅ **Windows**: Usa `start msedge` com fallback para `start chrome`
- ✅ **macOS**: Usa `open -a "Microsoft Edge"`
- ✅ **Linux**: Usa `xdg-open`

## Vantagens

- 🚀 **Portável**: Funciona em qualquer PC sem modificar caminhos
- 🔄 **Fallback**: Tenta navegadores alternativos se o principal falhar
- 📝 **Informativo**: Mostra logs detalhados do processo
- 🛡️ **Seguro**: Verifica se o arquivo existe antes de tentar abrir

## Estrutura de arquivos

```
src/
├── core/
│   ├── dev/
│   │   ├── dev-server.js    # Script principal
│   │   └── README.md        # Esta documentação
│   ├── build/
│   └── versioning/
└── playground/
    └── index.html           # Arquivo HTML de desenvolvimento
```

## Troubleshooting

Se o script não conseguir abrir o navegador automaticamente, ele mostrará o caminho do arquivo HTML para que você possa abri-lo manualmente.
