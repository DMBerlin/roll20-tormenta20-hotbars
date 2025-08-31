# Build System

Este diretório contém os scripts de build e geração de dados para o projeto Roll20 Tormenta20 Hotbars.

## Scripts Disponíveis

### Geração de Dados

- **`generate-spells-data.js`** - Gera dados consolidados das magias a partir dos arquivos individuais (inclui normalização de propriedades)
- **`generate-potions-data.js`** - Gera dados consolidados das poções a partir dos arquivos YAML (inclui normalização de propriedades)
- **`generate-powers-data.js`** - Gera dados consolidados dos poderes a partir dos arquivos YAML
- **`generate-conditions-data.js`** - Gera dados consolidados das condições a partir do arquivo YAML
- **`build.js`** - Script principal de build que combina todos os dados e gera o arquivo final

## Workflow de Desenvolvimento

### Para Magias:
1. Adicione novos arquivos de magia em `src/modules/grimorio/magias/`
2. Execute `pnpm generate-spells-data` para normalizar propriedades e gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Para Poções:
1. Adicione novos arquivos YAML de poção em `src/source/pocoes/`
2. Execute `pnpm generate-potions-data` para normalizar propriedades e gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Para Poderes:
1. Adicione novos arquivos YAML de poder em `src/source/poderes/`
2. Execute `pnpm generate-powers-data` para gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Para Condições:
1. Atualize o arquivo `src/source/general/condições.yml`
2. Execute `pnpm generate-conditions-data` para gerar dados consolidados
3. Execute `pnpm build` para integrar ao build final

### Workflow Completo:
```bash
make dev  # Executa lint + spells + potions + powers + conditions + build + dev server
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
src/source/pocoes/
├── poção-de-curar-ferimentos-2d8-2-pv.yml
├── óleo-de-arma-mágica.yml
├── granada-de-bola-de-fogo.yml
└── ...
```

### Poderes:
```
src/source/poderes/
├── classe/
│   ├── arcanista/
│   ├── bárbaro/
│   └── ...
├── racial/
├── origem/
└── geral/
```

## Comandos Úteis

```bash
# Gerar dados de magias (inclui normalização)
pnpm generate-spells-data

# Gerar dados de poções (inclui normalização)
pnpm generate-potions-data

# Gerar dados de poderes
pnpm generate-powers-data

# Gerar dados de condições
pnpm generate-conditions-data

# Build completo
pnpm build

# Desenvolvimento (workflow completo)
make dev
``` 