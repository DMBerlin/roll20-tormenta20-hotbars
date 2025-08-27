#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

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

  // Tipo de poção
  'potion': 'pocao',
  'consumivel': 'consumivel',

  // Resistência
  'Vontade desacredita': 'Vontade desacredita',
  'Vontade anula': 'Vontade anula',
  'Nenhuma': 'Nenhuma'
};

/**
 * Remove HTML tags from text
 * @param {string} text - Text containing HTML tags
 * @returns {string} - Text with HTML tags removed
 */
function removeHtmlTags(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/<[^>]*>/g, '');
}

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

// Função para processar um arquivo de poção YAML
function processPotionFile(filePath) {
  try {
    console.log(`Processando: ${filePath}`);

    const content = fs.readFileSync(filePath, 'utf8');
    const potionData = yaml.load(content);

    let hasChanges = false;

    // Normalizar propriedades específicas do sistema
    if (potionData.system) {
      // Normalizar ativação
      if (potionData.system.ativacao) {
        const oldExecucao = potionData.system.ativacao.execução;
        if (oldExecucao) {
          potionData.system.ativacao.execucao = normalizeValue(oldExecucao);
          delete potionData.system.ativacao.execução;
          hasChanges = true;
        }
      }

      // Normalizar duração
      if (potionData.system.duração) {
        potionData.system.duracao = normalizeObject(potionData.system.duração);
        delete potionData.system.duração;
        hasChanges = true;
      }

      // Normalizar units na duração existente
      if (potionData.system.duracao && potionData.system.duracao.units) {
        const oldUnits = potionData.system.duracao.units;
        potionData.system.duracao.units = normalizeValue(oldUnits);
        if (oldUnits !== potionData.system.duracao.units) {
          hasChanges = true;
        }
      }

      // Normalizar alcance
      if (potionData.system.alcance) {
        const oldAlcance = potionData.system.alcance;
        potionData.system.alcance = normalizeValue(oldAlcance);
        if (oldAlcance !== potionData.system.alcance) {
          hasChanges = true;
        }
      }

      // Normalizar tipo
      if (potionData.system.tipo) {
        const oldTipo = potionData.system.tipo;
        potionData.system.tipo = normalizeValue(oldTipo);
        if (oldTipo !== potionData.system.tipo) {
          hasChanges = true;
        }
      }

      // Normalizar resistência
      if (potionData.system.resistência) {
        potionData.system.resistencia = normalizeObject(potionData.system.resistência);
        delete potionData.system.resistência;
        hasChanges = true;
      }

      // Normalizar txt na resistência
      if (potionData.system.resistencia && potionData.system.resistencia.txt) {
        const oldTxt = potionData.system.resistencia.txt;
        potionData.system.resistencia.txt = normalizeValue(oldTxt);
        if (oldTxt !== potionData.system.resistencia.txt) {
          hasChanges = true;
        }
      }

      // Remover tags HTML da descrição
      if (potionData.system.description && potionData.system.description.value) {
        const oldDesc = potionData.system.description.value;
        potionData.system.description.value = removeHtmlTags(oldDesc);
        if (oldDesc !== potionData.system.description.value) {
          hasChanges = true;
        }
      }

      // Remover tags HTML do efeito
      if (potionData.system.efeito) {
        const oldEfeito = potionData.system.efeito;
        potionData.system.efeito = removeHtmlTags(oldEfeito);
        if (oldEfeito !== potionData.system.efeito) {
          hasChanges = true;
        }
      }

      // Normalizar type (se existir)
      if (potionData.type) {
        const oldType = potionData.type;
        potionData.type = normalizeValue(oldType);
        if (oldType !== potionData.type) {
          hasChanges = true;
        }
      }
    }

    if (hasChanges) {
      // Gerar o novo conteúdo YAML
      const newContent = yaml.dump(potionData, {
        indent: 2,
        lineWidth: -1,
        noRefs: true,
        sortKeys: false
      });

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
    } else if (stat.isFile() && file.endsWith('.yml')) {
      callback(filePath);
    }
  });
}

// Função principal
function main() {
  console.log('🧪 Normalizando propriedades das poções...\n');

  const pocoesDir = path.join(__dirname, '../../assets/pocoes');

  if (!fs.existsSync(pocoesDir)) {
    console.log(`❌ Diretório de poções não encontrado: ${pocoesDir}`);
    return;
  }

  let processedCount = 0;
  let updatedCount = 0;

  walkSync(pocoesDir, (filePath) => {
    processedCount++;
    if (processPotionFile(filePath)) {
      updatedCount++;
    }
  });

  console.log(`\n📊 Resumo:`);
  console.log(`   Arquivos processados: ${processedCount}`);
  console.log(`   Arquivos atualizados: ${updatedCount}`);
  console.log(`   Arquivos inalterados: ${processedCount - updatedCount}`);

  if (updatedCount > 0) {
    console.log('\n✅ Normalização concluída com sucesso!');
    console.log('🔄 Execute "pnpm generate-potions-data" para regenerar os dados das poções.');
  } else {
    console.log('\nℹ️  Todas as propriedades já estavam normalizadas.');
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { processPotionFile, normalizeObject, normalizeKey, normalizeValue };
