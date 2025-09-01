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

// Função para normalizar uma chave (remover caracteres especiais)
function normalizeKey(key) {
  return keyNormalization[key] || key;
}

// Função para normalizar um valor (camelCase português)
function normalizeValue(value) {
  if (typeof value !== 'string') return value;
  return valueNormalization[value] || value;
}

/**
 * Extract text content from HTML string with preserved paragraph breaks
 * @param {string} text - Text containing HTML tags
 * @returns {string} - Text with HTML tags removed but paragraph breaks preserved
 */
function removeHtmlTags(text) {
  if (typeof text !== 'string') return text;

  // First, let's preserve paragraph and list structure
  let processedContent = text
    // Replace paragraph tags with double newlines to preserve paragraph breaks
    .replace(/<\/p>\s*<p[^>]*>/g, '\n\n')
    .replace(/<p[^>]*>/g, '')
    .replace(/<\/p>/g, '\n')
    // Handle list items
    .replace(/<\/li>\s*<li[^>]*>/g, '\n• ')
    .replace(/<li[^>]*>/g, '• ')
    .replace(/<\/li>/g, '\n')
    // Handle list containers
    .replace(/<ul[^>]*>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    // Handle other block elements
    .replace(/<\/div>/g, '\n')
    // Remove UUID references but preserve the text inside
    .replace(/@UUID\[[^\]]+\]\{([^}]+)\}/g, '$1')
    // Remove other HTML tags
    .replace(/<[^>]*>/g, '')
    // Decode HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean up excessive whitespace while preserving paragraph breaks
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
    .replace(/[ \t]+/g, ' ') // Replace multiple spaces/tabs with single space
    .trim();

  // Split into lines and process
  const lines = processedContent.split('\n');
  const processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) continue;

    // Skip decorative elements
    if (line === '_' || line === '•') {
      continue;
    }

    processedLines.push(line);
  }

  return processedLines.join('\n\n');
}

/**
 * Normalize an object recursively
 * @param {any} obj - Object to normalize
 * @returns {any} - Normalized object
 */
function normalizeObject(obj) {
  if (typeof obj === 'string') {
    return removeHtmlTags(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => normalizeObject(item));
  }

  if (obj && typeof obj === 'object') {
    const normalized = {};
    for (const [key, value] of Object.entries(obj)) {
      const normalizedKey = normalizeKey(key);
      const normalizedValue = normalizeObject(value);

      // Apply value normalization for specific keys
      if (typeof normalizedValue === 'string') {
        normalized[normalizedKey] = normalizeValue(normalizedValue);
      } else {
        normalized[normalizedKey] = normalizedValue;
      }
    }
    return normalized;
  }

  return obj;
}

/**
 * Process a single potion YAML file and normalize its properties
 * @param {string} filePath - Path to the potion file
 * @returns {boolean} - True if file was updated, false otherwise
 */
function processPotionFile(filePath) {
  try {
    // Read the YAML file
    const yamlContent = fs.readFileSync(filePath, 'utf8');
    const potionData = yaml.load(yamlContent);

    if (!potionData) {
      console.warn(`⚠️ Arquivo inválido: ${filePath}`);
      return false;
    }

    // Normalize the potion data
    const normalizedData = normalizeObject(potionData);

    // Convert back to YAML
    const normalizedYaml = yaml.dump(normalizedData, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false
    });

    // Write the normalized content back to the file
    fs.writeFileSync(filePath, normalizedYaml, 'utf8');

    return true;

  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error.message);
    return false;
  }
}

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
 * Determine potion type based on name and system data
 * @param {string} name - Potion name
 * @param {object} system - System data (unused but kept for consistency)
 * @returns {string} - Potion type
 */
function determinePotionType(name) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes('óleo') || lowerName.includes('oleo')) {
    return 'Óleo';
  }

  if (lowerName.includes('granada')) {
    return 'Granada';
  }

  // Default to Poção
  return 'Poção';
}

/**
 * Generate icon based on potion type and name
 * @param {string} type - Potion type
 * @param {string} name - Potion name
 * @returns {string} - Icon emoji
 */
function generateIcon(type, name) {
  const lowerName = name.toLowerCase();

  switch (type) {
    case 'Óleo':
      if (lowerName.includes('arma')) return '⚔️';
      if (lowerName.includes('armadura') || lowerName.includes('vestimenta')) return '🛡️';
      if (lowerName.includes('luz')) return '💡';
      if (lowerName.includes('escuridão') || lowerName.includes('escuridao')) return '🌑';
      if (lowerName.includes('tranca')) return '🔒';
      if (lowerName.includes('abençoar') || lowerName.includes('abencoar')) return '🛢️';
      if (lowerName.includes('armamento') || lowerName.includes('natureza')) return '🌿';
      return '🛢️';

    case 'Granada':
      if (lowerName.includes('bola de fogo') || lowerName.includes('fogo')) return '🔥';
      if (lowerName.includes('névoa') || lowerName.includes('nevoa')) return '🌫️';
      if (lowerName.includes('área escorregadia') || lowerName.includes('area escorregadia')) return '💣';
      return '💣';

    case 'Poção':
    default:
      if (lowerName.includes('curar') || lowerName.includes('cura')) return '❤️';
      if (lowerName.includes('compreensão') || lowerName.includes('compreensao')) return '🧠';
      if (lowerName.includes('disfarce') || lowerName.includes('aparência') || lowerName.includes('aparencia')) return '🎭';
      if (lowerName.includes('primor atlético') || lowerName.includes('primo atletico')) return '🏃';
      if (lowerName.includes('proteção') || lowerName.includes('protecao')) return '🛡️';
      if (lowerName.includes('resistência') || lowerName.includes('resistencia')) return '🔥';
      if (lowerName.includes('sono')) return '😴';
      if (lowerName.includes('suporte ambiental') || lowerName.includes('respirar')) return '🌊';
      if (lowerName.includes('visão') || lowerName.includes('visao')) return '👁️';
      if (lowerName.includes('vitalidade fantasma')) return '👻';
      if (lowerName.includes('escudo da fé') || lowerName.includes('escudo da fe')) return '✝️';
      if (lowerName.includes('alterar tamanho')) return '📏';
      if (lowerName.includes('aparência perfeita') || lowerName.includes('aparencia perfeita')) return '✨';
      if (lowerName.includes('camuflagem')) return '🥷';
      if (lowerName.includes('concentração') || lowerName.includes('concentracao')) return '🎯';
      if (lowerName.includes('físico divino') || lowerName.includes('fisico divino')) return '💪';
      if (lowerName.includes('mente divina')) return '🧠';
      if (lowerName.includes('metamorfose')) return '🦋';
      if (lowerName.includes('purificação') || lowerName.includes('purificacao')) return '🧹';
      if (lowerName.includes('velocidade')) return '⚡';
      if (lowerName.includes('voz divina')) return '🗣️';
      if (lowerName.includes('invisibilidade')) return '👻';
      return '🧪';
  }
}

/**
 * Generate icon URL based on potion type and name
 * @param {string} type - Potion type
 * @param {string} name - Potion name
 * @returns {string} - Icon URL
 */
function generateIconUrl(type, name) {
  const lowerName = name.toLowerCase();

  switch (type) {
    case 'Óleo':
      if (lowerName.includes('arma')) return 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_30.jpg';
      if (lowerName.includes('armadura') || lowerName.includes('vestimenta')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofprotection.jpg';
      if (lowerName.includes('luz')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_flashheal.jpg';
      if (lowerName.includes('escuridão') || lowerName.includes('escuridao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg';
      if (lowerName.includes('tranca')) return 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_sprint.jpg';
      if (lowerName.includes('abençoar') || lowerName.includes('abencoar')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofstrength.jpg';
      if (lowerName.includes('armamento') || lowerName.includes('natureza')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_corrosiveskin.jpg';
      return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofstrength.jpg';

    case 'Granada':
      if (lowerName.includes('bola de fogo') || lowerName.includes('fogo')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball02.jpg';
      if (lowerName.includes('névoa') || lowerName.includes('nevoa')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_fogwalking.jpg';
      if (lowerName.includes('área escorregadia') || lowerName.includes('area escorregadia')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg';
      return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg';

    case 'Poção':
    default:
      if (lowerName.includes('curar') || lowerName.includes('cura')) return 'https://wow.zamimg.com/images/wow/icons/large/inv_potion_54.jpg';
      if (lowerName.includes('compreensão') || lowerName.includes('compreensao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibilitytotem.jpg';
      if (lowerName.includes('disfarce') || lowerName.includes('aparência') || lowerName.includes('aparencia')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg';
      if (lowerName.includes('primor atlético') || lowerName.includes('primo atletico')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_swiftness.jpg';
      if (lowerName.includes('proteção') || lowerName.includes('protecao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_barrier.jpg';
      if (lowerName.includes('resistência') || lowerName.includes('resistencia')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostresistancetotem_01.jpg';
      if (lowerName.includes('sono')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg';
      if (lowerName.includes('suporte ambiental') || lowerName.includes('respirar')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_ancestralguardian.jpg';
      if (lowerName.includes('visão') || lowerName.includes('visao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_searinglightpriest.jpg';
      if (lowerName.includes('vitalidade fantasma')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_ghoulfrenzy.jpg';
      if (lowerName.includes('escudo da fé') || lowerName.includes('escudo da fe')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg';
      if (lowerName.includes('alterar tamanho')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg';
      if (lowerName.includes('aparência perfeita') || lowerName.includes('aparencia perfeita')) return 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterclaw_02.jpg';
      if (lowerName.includes('camuflagem')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg';
      if (lowerName.includes('concentração') || lowerName.includes('concentracao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessedrecovery.jpg';
      if (lowerName.includes('físico divino') || lowerName.includes('fisico divino')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_fistofjustice.jpg';
      if (lowerName.includes('mente divina')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane01.jpg';
      if (lowerName.includes('metamorfose')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg';
      if (lowerName.includes('purificação') || lowerName.includes('purificacao')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_purify.jpg';
      if (lowerName.includes('velocidade')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_swiftness.jpg';
      if (lowerName.includes('voz divina')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinespirit.jpg';
      if (lowerName.includes('invisibilidade')) return 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_lesserinvisibilty.jpg';
      return 'https://wow.zamimg.com/images/wow/icons/large/inv_potion_54.jpg';
  }
}

/**
 * Generate potionsData object from individual YAML files
 * This script runs during build time to create a consolidated potions data object
 */
function generatePotionsData() {
  console.log('🧪 Gerando dados de poções...');

  // First, normalize all potion properties
  console.log('🔧 Normalizando propriedades das poções...');
  normalizeAllPotions();

  const potionsData = [];

  const pocoesPath = path.join(__dirname, '..', '..', '..', 'source', 'pocoes');

  if (!fs.existsSync(pocoesPath)) {
    console.log(`⚠️ Pasta de poções não encontrada: ${pocoesPath}`);
    return [];
  }

  // Process each YAML file in the pocoes directory
  const potionFiles = fs.readdirSync(pocoesPath, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.yml'))
    .map(dirent => dirent.name)
    .sort();

  for (const potionFile of potionFiles) {
    const potionPath = path.join(pocoesPath, potionFile);

    try {
      // Read and parse YAML file
      const yamlContent = fs.readFileSync(potionPath, 'utf8');
      const potionData = yaml.load(yamlContent);

      // Determine potion type
      const potionType = determinePotionType(potionData.name);

      // Generate icon and icon URL
      const icon = generateIcon(potionType, potionData.name);
      const iconUrl = generateIconUrl(potionType, potionData.name);

      // Transform the potion data to match the expected format in main.js
      const transformedPotion = {
        nome: potionData.name,
        preco: `T$ ${potionData.system?.preco || 30}`,
        efeito: potionData.system?.efeito || '',
        descricao: potionData.system?.description?.value || '',
        tipo: potionType,
        icone: icon,
        iconeUrl: iconUrl,
        // Additional data for potential future use
        system: {
          alcance: potionData.system?.alcance || '',
          alvo: potionData.system?.alvo || potionData.system?.area || '',
          duracao: potionData.system?.duracao?.value
            ? `${potionData.system.duracao.value} ${potionData.system.duracao.units || ''}`.trim()
            : potionData.system?.duracao?.special || '',
          resistencia: potionData.system?.resistencia?.txt || 'Nenhuma',
          ativacao: potionData.system?.ativacao?.execucao || 'action',
          peso: potionData.system?.peso || 0.5,
          espacos: potionData.system?.espacos || 0.5,
          source: potionData.system?.source || ''
        }
      };

      // Decode HTML entities in the entire transformed potion object
      const decodedPotion = decodeHtmlEntitiesRecursive(transformedPotion);

      // Clean up empty or undefined values
      Object.keys(decodedPotion.system).forEach(key => {
        if (decodedPotion.system[key] === undefined || decodedPotion.system[key] === '') {
          delete decodedPotion.system[key];
        }
      });

      potionsData.push(decodedPotion);

    } catch (error) {
      console.error(`❌ Erro ao processar poção ${potionPath}:`, error.message);
    }
  }

  // Generate the JavaScript code
  const potionsDataCode = `// Auto-generated potions data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

const potionsData = ${JSON.stringify(potionsData, null, 2)};

module.exports = potionsData;
`;

  // Write the generated file
  const outputPath = path.join(__dirname, '..', '..', '..', 'modules', 'potions', 'generated-potions-data.js');

  // Ensure the potions directory exists
  const potionsDir = path.dirname(outputPath);
  if (!fs.existsSync(potionsDir)) {
    fs.mkdirSync(potionsDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, potionsDataCode, 'utf8');

  console.log(`✅ Dados de poções gerados: ${outputPath}`);
  console.log(`📊 Total de poções processadas: ${potionsData.length}`);

  return potionsData;
}

// Function to normalize all potion files
function normalizeAllPotions() {
  const pocoesDir = path.join(__dirname, '..', '..', '..', 'source', 'pocoes');

  if (!fs.existsSync(pocoesDir)) {
    console.log(`⚠️ Diretório de poções não encontrado: ${pocoesDir}`);
    return;
  }

  let updatedCount = 0;

  // Walk through all potion files and normalize them
  walkSync(pocoesDir, (filePath) => {
    if (processPotionFile(filePath)) {
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
    } else if (stat.isFile() && file.endsWith('.yml')) {
      callback(filePath);
    }
  });
}

// Export for use in build process
module.exports = { generatePotionsData };

// Run directly if called as script
if (require.main === module) {
  generatePotionsData();
}
