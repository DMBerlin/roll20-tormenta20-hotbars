#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapeamento de chaves (remover caracteres especiais)
const keyNormalization = {
  'execução': 'execucao',
  'duração': 'duracao',
  'resistência': 'resistencia'
};

// Mapeamento de valores para camelCase em português do Tormenta 20
const valueNormalization = {
  // Execução/Ativação
  'ação': 'acao',
  'full': 'completa',
  'livre': 'livre',
  'movimento': 'movimento',
  'reação': 'reacao',

  // Duração/Units
  'day': 'dia',
  'hour': 'hora',
  'minute': 'minuto',
  'round': 'rodada',
  'inst': 'instantanea',
  'cena': 'cena',
  'special': 'especial',

  // Alcance
  'short': 'curto',
  'medium': 'medio',
  'long': 'longo',
  'touch': 'toque',
  'personal': 'pessoal',
  'spec': 'especial',

  // Tipo de magia
  'arcana': 'arcana',
  'divina': 'divina',
  'universal': 'universal',
  'uni': 'universal',

  // Escolas de magia
  'abjuração': 'abjuracao',
  'adivinhação': 'adivinhacao',
  'convocação': 'convocacao',
  'encantamento': 'encantamento',
  'evocação': 'evocacao',
  'ilusão': 'ilusao',
  'necromancia': 'necromancia',
  'transmutação': 'transmutacao',
  'tra': 'transmutacao',
  'evo': 'evocacao',
  'enc': 'encantamento',
  'nec': 'necromancia',
  'ilu': 'ilusao',
  'con': 'convocacao',
  'adi': 'adivinhacao',
  'abj': 'abjuracao'
};

// Função para normalizar uma chave (remover caracteres especiais)
function normalizeKey(key) {
  return keyNormalization[key] || key;
}

// Função para normalizar um valor (camelCase português)
function normalizeValue(value) {
  if (typeof value !== 'string') return value;
  return valueNormalization[value] || value;
}

// Função para processar um objeto recursivamente
function normalizeObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => normalizeObject(item));
  }

  if (obj && typeof obj === 'object') {
    const normalized = {};

    for (const [key, value] of Object.entries(obj)) {
      const normalizedKey = normalizeKey(key);

      if (typeof value === 'object' && value !== null) {
        normalized[normalizedKey] = normalizeObject(value);
      } else {
        normalized[normalizedKey] = normalizeValue(value);
      }
    }

    return normalized;
  }

  return normalizeValue(obj);
}

// Função para processar um arquivo de magia
function processSpellFile(filePath) {
  try {
    console.log(`Processando: ${filePath}`);

    const content = fs.readFileSync(filePath, 'utf8');

    // Extrair o objeto JavaScript
    const moduleMatch = content.match(/module\.exports\s*=\s*(\{[\s\S]*\});?\s*$/);
    if (!moduleMatch) {
      console.log(`  ❌ Não foi possível extrair o objeto de ${filePath}`);
      return false;
    }

    // Avaliar o objeto
    const spellObject = eval(`(${moduleMatch[1]})`);

    let hasChanges = false;

    // Normalizar propriedades específicas do sistema
    if (spellObject.system) {
      // Normalizar ativação
      if (spellObject.system.ativacao) {
        const oldExecucao = spellObject.system.ativacao.execução;
        if (oldExecucao) {
          spellObject.system.ativacao.execucao = normalizeValue(oldExecucao);
          delete spellObject.system.ativacao.execução;
          hasChanges = true;
        }
      }

      // Normalizar duração
      if (spellObject.system.duração) {
        spellObject.system.duracao = normalizeObject(spellObject.system.duração);
        delete spellObject.system.duração;
        hasChanges = true;
      }

      // Normalizar units na duração existente
      if (spellObject.system.duracao && spellObject.system.duracao.units) {
        const oldUnits = spellObject.system.duracao.units;
        spellObject.system.duracao.units = normalizeValue(oldUnits);
        if (oldUnits !== spellObject.system.duracao.units) {
          hasChanges = true;
        }
      }

      // Normalizar alcance
      if (spellObject.system.alcance) {
        const oldAlcance = spellObject.system.alcance;
        spellObject.system.alcance = normalizeValue(oldAlcance);
        if (oldAlcance !== spellObject.system.alcance) {
          hasChanges = true;
        }
      }

      // Normalizar tipo
      if (spellObject.system.tipo) {
        const oldTipo = spellObject.system.tipo;
        spellObject.system.tipo = normalizeValue(oldTipo);
        if (oldTipo !== spellObject.system.tipo) {
          hasChanges = true;
        }
      }

      // Normalizar escola
      if (spellObject.system.escola) {
        const oldEscola = spellObject.system.escola;
        spellObject.system.escola = normalizeValue(oldEscola);
        if (oldEscola !== spellObject.system.escola) {
          hasChanges = true;
        }
      }

      // Normalizar resistência
      if (spellObject.system.resistência) {
        spellObject.system.resistencia = normalizeObject(spellObject.system.resistência);
        delete spellObject.system.resistência;
        hasChanges = true;
      }
    }

    if (hasChanges) {
      // Gerar o novo conteúdo
      const newContent = `module.exports = ${JSON.stringify(spellObject, null, 2)};`;

      // Escrever de volta no arquivo
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  ✅ Atualizado com sucesso`);
      return true;
    } else {
      console.log(`  ℹ️  Nenhuma alteração necessária`);
      return false;
    }

  } catch (error) {
    console.error(`  ❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

// Função para percorrer diretórios recursivamente
function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkSync(filePath, callback);
    } else if (stat.isFile() && file.endsWith('.js') && file !== 'index.js') {
      callback(filePath);
    }
  });
}

// Função principal
function main() {
  console.log('🔧 Normalizando propriedades das magias...\n');

  const magiaDir = path.join(__dirname, '../../modules/grimorio/magias');
  let processedCount = 0;
  let updatedCount = 0;

  walkSync(magiaDir, (filePath) => {
    processedCount++;
    if (processSpellFile(filePath)) {
      updatedCount++;
    }
  });

  console.log(`\n📊 Resumo:`);
  console.log(`   Arquivos processados: ${processedCount}`);
  console.log(`   Arquivos atualizados: ${updatedCount}`);
  console.log(`   Arquivos inalterados: ${processedCount - updatedCount}`);

  if (updatedCount > 0) {
    console.log('\n✅ Normalização concluída com sucesso!');
  } else {
    console.log('\nℹ️  Todas as propriedades já estavam normalizadas.');
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { processSpellFile, normalizeObject, normalizeKey, normalizeValue };
