const fs = require('fs');
const path = require('path');

// Import the normalization functions
const { processSpellFile } = require('./normalize-spell-properties');

/**
 * Decode HTML entities to their corresponding characters
 * @param {string} text - Text containing HTML entities
 * @returns {string} - Text with HTML entities decoded
 */
function decodeHtmlEntities(text) {
  if (typeof text !== 'string') return text;

  const htmlEntities = {
    '&aacute;': 'á', '&agrave;': 'à', '&acirc;': 'â', '&atilde;': 'ã', '&auml;': 'ä',
    '&eacute;': 'é', '&egrave;': 'è', '&ecirc;': 'ê', '&euml;': 'ë',
    '&iacute;': 'í', '&igrave;': 'ì', '&icirc;': 'î', '&iuml;': 'ï',
    '&oacute;': 'ó', '&ograve;': 'ò', '&ocirc;': 'ô', '&otilde;': 'õ', '&ouml;': 'ö',
    '&uacute;': 'ú', '&ugrave;': 'ù', '&ucirc;': 'û', '&uuml;': 'ü',
    '&ccedil;': 'ç', '&ntilde;': 'ñ',
    '&Aacute;': 'Á', '&Agrave;': 'À', '&Acirc;': 'Â', '&Atilde;': 'Ã', '&Auml;': 'Ä',
    '&Eacute;': 'É', '&Egrave;': 'È', '&Ecirc;': 'Ê', '&Euml;': 'Ë',
    '&Iacute;': 'Í', '&Igrave;': 'Ì', '&Icirc;': 'Î', '&Iuml;': 'Ï',
    '&Oacute;': 'Ó', '&Ograve;': 'Ò', '&Ocirc;': 'Ô', '&Otilde;': 'Õ', '&Ouml;': 'Ö',
    '&Uacute;': 'Ú', '&Ugrave;': 'Ù', '&Ucirc;': 'Û', '&Uuml;': 'Ü',
    '&Ccedil;': 'Ç', '&Ntilde;': 'Ñ',
    '&mdash;': '—', '&ndash;': '–', '&hellip;': '…',
    '&quot;': '"', '&apos;': "'", '&amp;': '&', '&lt;': '<', '&gt;': '>'
  };

  let decodedText = text;
  for (const [entity, char] of Object.entries(htmlEntities)) {
    decodedText = decodedText.replace(new RegExp(entity, 'g'), char);
  }

  return decodedText;
}

/**
 * Recursively decode HTML entities in an object
 * @param {any} obj - Object to process
 * @returns {any} - Object with HTML entities decoded
 */
function decodeHtmlEntitiesRecursive(obj) {
  if (typeof obj === 'string') {
    return decodeHtmlEntities(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => decodeHtmlEntitiesRecursive(item));
  }

  if (obj && typeof obj === 'object') {
    const decoded = {};
    for (const [key, value] of Object.entries(obj)) {
      decoded[key] = decodeHtmlEntitiesRecursive(value);
    }
    return decoded;
  }

  return obj;
}

/**
 * Generate spellsData object from individual spell files
 * This script runs during build time to create a consolidated spells data object
 */

function generateSpellsData() {
  console.log('🔮 Gerando dados de magias...');

  // First, normalize all spell properties
  console.log('🔧 Normalizando propriedades das magias...');
  normalizeAllSpells();

  const spellsData = {
    arcana: {},
    divina: {},
    universal: {}
  };

  const magiasPath = path.join(__dirname, '..', '..', 'modules', 'grimorio', 'magias');

  // Process each tradition (arcana, divina, universal)
  const traditions = ['arcana', 'divina', 'universal'];

  for (const tradition of traditions) {
    const traditionPath = path.join(magiasPath, tradition);

    if (!fs.existsSync(traditionPath)) {
      console.log(`⚠️ Pasta ${tradition} não encontrada, pulando...`);
      continue;
    }

    spellsData[tradition] = {};

    // Process each circle (1-circulo, 2-circulo, etc.)
    const circleDirs = fs.readdirSync(traditionPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .sort(); // Ensure consistent ordering

    for (const circleDir of circleDirs) {
      const circlePath = path.join(traditionPath, circleDir);
      const circleKey = circleDir; // e.g., "1-circulo"

      spellsData[tradition][circleKey] = {};

      // Process each school directory
      const schoolDirs = fs.readdirSync(circlePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .sort();

      for (const schoolDir of schoolDirs) {
        const schoolPath = path.join(circlePath, schoolDir);
        const schoolKey = schoolDir.replace(/^[a-z]\d-/, ''); // Remove prefix like "a1-", "d2-", etc.

        spellsData[tradition][circleKey][schoolKey] = {};

        // Process each spell file
        const spellFiles = fs.readdirSync(schoolPath, { withFileTypes: true })
          .filter(dirent => dirent.isFile() && dirent.name.endsWith('.js'))
          .map(dirent => dirent.name.replace('.js', ''))
          .sort();

        for (const spellFile of spellFiles) {
          const spellPath = path.join(schoolPath, `${spellFile}.js`);

          try {
            // Load the spell data
            const spellModule = require(spellPath);

            // Transform the spell data to match the expected format in main.js
            const transformedSpell = {
              name: spellModule.name,
              type: spellModule.type || 'magia',
              img: spellModule.img,
              system: {
                circulo: spellModule.system?.circulo,
                escola: spellModule.system?.escola,
                ativacao: spellModule.system?.ativacao,
                alcance: spellModule.system?.alcance,
                duracao: spellModule.system?.duracao?.value
                  ? `${spellModule.system.duracao.value} ${spellModule.system.duracao.units || ''}`.trim()
                  : spellModule.system?.duracao?.special || '',
                alvo: spellModule.system?.alvo || spellModule.system?.area || '',
                resistencia: spellModule.system?.resistencia?.txt || 'Nenhuma',
                custo: spellModule.system?.ativacao?.custo ? `${spellModule.system.ativacao.custo} PM` : '',
                description: {
                  value: spellModule.system?.description?.value || ''
                }
              }
            };

            // Process aprimoramentos (effects)
            if (spellModule.effects && Array.isArray(spellModule.effects)) {
              const aprimoramentos = [];

              for (const effect of spellModule.effects) {
                // Verificar se é um aprimoramento (tem custo e não é o efeito base da magia)
                if (effect.flags?.tormenta20?.custo &&
                  effect.flags.tormenta20.custo !== spellModule.system?.ativacao?.custo?.toString()) {

                  const aprimoramento = {
                    custo: parseInt(effect.flags.tormenta20.custo),
                    descricao: effect.name,
                    aumenta: effect.flags.tormenta20.aumenta || false
                  };

                  aprimoramentos.push(aprimoramento);
                }
              }

              // Adicionar aprimoramentos ao spell se houver
              if (aprimoramentos.length > 0) {
                transformedSpell.aprimoramentos = aprimoramentos;
              }
            }

            // Decode HTML entities in the entire transformed spell object
            const decodedSpell = decodeHtmlEntitiesRecursive(transformedSpell);

            // Clean up empty or undefined values
            Object.keys(decodedSpell.system).forEach(key => {
              if (decodedSpell.system[key] === undefined || decodedSpell.system[key] === '') {
                delete decodedSpell.system[key];
              }
            });

            spellsData[tradition][circleKey][schoolKey][spellFile] = decodedSpell;

          } catch (error) {
            console.error(`❌ Erro ao processar magia ${spellPath}:`, error.message);
          }
        }
      }
    }
  }

  // Generate the JavaScript code
  const spellsDataCode = `// Auto-generated spells data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

const spellsData = ${JSON.stringify(spellsData, null, 2)};

module.exports = spellsData;
`;

  // Write the generated file
  const outputPath = path.join(__dirname, '..', '..', 'modules', 'grimorio', 'generated-spells-data.js');
  fs.writeFileSync(outputPath, spellsDataCode, 'utf8');

  console.log(`✅ Dados de magias gerados: ${outputPath}`);

  // Count total spells
  let totalSpells = 0;
  for (const tradition in spellsData) {
    for (const circle in spellsData[tradition]) {
      for (const school in spellsData[tradition][circle]) {
        totalSpells += Object.keys(spellsData[tradition][circle][school]).length;
      }
    }
  }

  console.log(`📊 Total de magias processadas: ${totalSpells}`);

  return spellsData;
}

// Function to normalize all spell files
function normalizeAllSpells() {
  const magiasPath = path.join(__dirname, '..', '..', 'modules', 'grimorio', 'magias');

  if (!fs.existsSync(magiasPath)) {
    console.log(`⚠️ Diretório de magias não encontrado: ${magiasPath}`);
    return;
  }

  let updatedCount = 0;

  // Walk through all spell files and normalize them
  walkSync(magiasPath, (filePath) => {
    if (processSpellFile(filePath)) {
      updatedCount++;
    }
  });

  if (updatedCount > 0) {
    console.log(`  📊 Normalização: ${updatedCount} arquivos atualizados`);
  } else {
    console.log(`  ℹ️  Todas as propriedades já estavam normalizadas`);
  }
}

// Function to walk through directories recursively
function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkSync(filePath, callback);
    } else if (stat.isFile() && file.endsWith('.js') && file !== 'index.js' && file !== 'utils.js') {
      callback(filePath);
    }
  });
}

// Export for use in build process
module.exports = { generateSpellsData };

// Run directly if called as script
if (require.main === module) {
  generateSpellsData();
}
