# Build System

Este diretório contém os scripts de build e geração de dados para o projeto Roll20 Tormenta20 Hotbars.

## Scripts Disponíveis

### Geração de Dados

- **`generate-spells-data.js`** - Gera dados consolidados das magias a partir dos arquivos individuais
- **`generate-potions-data.js`** - Gera dados consolidados das poções a partir dos arquivos YAML
- **`build.js`** - Script principal de build que combina todos os dados e gera o arquivo final

### Normalização de Propriedades

- **`normalize-spell-properties.js`** - Normaliza propriedades das magias (remove acentos, padroniza valores)
- **`normalize-potion-properties.js`** - Normaliza propriedades das poções (remove acentos, padroniza valores)

## Workflow de Desenvolvimento

### Para Magias:
1. Adicione novos arquivos de magia em `src/modules/grimorio/magias/`
2. Execute `pnpm generate-spells-data` para normalizar propriedades e gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Para Poções:
1. Adicione novos arquivos YAML de poção em `src/assets/pocoes/`
2. Execute `pnpm generate-potions-data` para normalizar propriedades e gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Workflow Completo:
```bash
make dev  # Executa lint + spells + potions + build + dev server
```

## Normalização de Propriedades

### O que é normalizado:

#### Chaves (removendo acentos):
- `execução` → `execucao`
- `duração` → `duracao`
- `resistência` → `resistencia`

#### Valores (padronização):
- **Execução**: `ação` → `acao`, `full` → `completa`
- **Duração**: `day` → `dia`, `hour` → `hora`, `inst` → `instantanea`
- **Alcance**: `short` → `curto`, `medium` → `medio`, `touch` → `toque`
- **Tipo**: `potion` → `pocao`, `consumivel` → `consumivel`

### Por que normalizar?

1. **Consistência**: Garante que todas as propriedades usem o mesmo padrão
2. **Compatibilidade**: Evita problemas com caracteres especiais
3. **Manutenibilidade**: Facilita a busca e filtragem de dados
4. **Performance**: Melhora a eficiência do processamento

## Estrutura de Dados

### Magias:
```
src/modules/grimorio/magias/
├── arcana/
│   ├── 1-circulo/
│   │   ├── a1-abjuracao/
│   │   └── ...
│   └── ...
├── divina/
└── universal/
```

### Poções:
```
src/assets/pocoes/
├── poção-de-curar-ferimentos-2d8-2-pv.yml
├── óleo-de-arma-mágica.yml
├── granada-de-bola-de-fogo.yml
└── ...
```

## Comandos Úteis

```bash
# Gerar dados de magias (inclui normalização)
pnpm generate-spells-data

# Gerar dados de poções (inclui normalização)
pnpm generate-potions-data

# Build completo
pnpm build

# Desenvolvimento (workflow completo)
make dev
``` 