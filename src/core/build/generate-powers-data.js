const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

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
 * Extract text content from HTML string
 */
function extractTextFromHtml(htmlContent) {
  if (!htmlContent) return '';

  return htmlContent
    .replace(/<p[^>]*>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<em[^>]*>/g, '')
    .replace(/<\/em>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

/**
 * Create a short description from the full description
 */
function createShortDescription(description, maxLength = 100) {
  if (!description) return '';

  if (description.length <= maxLength) {
    return description;
  }

  const truncated = description.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }

  return truncated + '...';
}

/**
 * Extract activation type from power data
 */
function extractActivationType(ativacao) {
  if (!ativacao) return 'passiva';

  const execucao = ativacao.execucao?.toLowerCase() || '';
  const custo = ativacao.custo || 0;

  if (execucao.includes('passiva') || execucao.includes('passive')) {
    return 'passiva';
  }

  if (custo > 0) {
    return 'ativa';
  }

  if (execucao.includes('ação') || execucao.includes('acao')) {
    return 'ação';
  }

  if (execucao.includes('reação') || execucao.includes('reacao')) {
    return 'reação';
  }

  return 'ativa';
}

/**
 * Extract power category from path
 */
function extractPowerCategory(filePath) {
  const pathParts = filePath.split(path.sep);

  // Find the category based on the directory structure
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];

    if (part === 'classe') {
      return 'classe';
    }
    if (part === 'racial') {
      return 'racial';
    }
    if (part === 'origem') {
      return 'origem';
    }
    if (part === 'geral') {
      return 'geral';
    }
  }

  return 'outro';
}

/**
 * Extract power subtype from path
 */
function extractPowerSubtype(filePath) {
  const pathParts = filePath.split(path.sep);

  // Find the subtype based on the directory structure
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];

    // For class powers, get the class name
    if (pathParts[i - 1] === 'classe') {
      return part;
    }

    // For racial powers, get the race name
    if (pathParts[i - 1] === 'racial') {
      return part;
    }

    // For general powers, get the subcategory
    if (pathParts[i - 1] === 'geral') {
      return part;
    }
  }

  return '';
}

/**
 * Extract effects from power data
 */
function extractEffects(powerData) {
  const effects = [];

  if (powerData.effects && Array.isArray(powerData.effects)) {
    for (const effect of powerData.effects) {
      if (effect.name && effect.name !== powerData.name) {
        effects.push({
          name: effect.name,
          description: effect.description || '',
          changes: effect.changes || []
        });
      }
    }
  }

  return effects;
}

/**
 * Process a single power YAML file
 */
function processPowerFile(filePath) {
  try {
    const yamlContent = fs.readFileSync(filePath, 'utf8');
    const powerData = yaml.load(yamlContent);

    if (!powerData || !powerData.name) {
      console.warn(`⚠️ Arquivo inválido: ${filePath}`);
      return null;
    }

    // Extract basic information
    const powerName = powerData.name;
    const powerId = powerData._id || '';
    const img = powerData.img || '';

    // Extract description
    const fullDescription = extractTextFromHtml(powerData.system?.description?.value || '');
    const shortDescription = createShortDescription(fullDescription);

    // Extract system information
    const system = powerData.system || {};
    const ativacao = system.ativacao || {};
    const duracao = system.duracao || {};
    const target = system.target || {};
    const range = system.range || {};
    const resistencia = system.resistencia || {};

    // Extract category and subtype
    const categoria = extractPowerCategory(filePath);
    const subtipo = extractPowerSubtype(filePath);

    // Extract activation information
    const tipoAtivacao = extractActivationType(ativacao);
    const custo = ativacao.custo || 0;
    const execucao = ativacao.execucao || '';

    // Extract duration
    const duracaoValor = duracao.value || 0;
    const duracaoUnidade = duracao.units || '';
    const duracaoEspecial = duracao.special || '';

    // Extract target and range
    const alvo = system.alvo || target.value || '';
    const area = system.area || '';
    const alcance = system.alcance || range.value || '';

    // Extract resistance
    const resistenciaPericia = resistencia.pericia || '';
    const resistenciaAtributo = resistencia.atributo || '';
    const resistenciaBonus = resistencia.bonus || 0;
    const resistenciaTexto = resistencia.txt || '';

    // Extract effects
    const efeitos = extractEffects(powerData);

    // Extract tags
    const tags = system.tags || [];

    // Extract source
    const source = system.source || '';

    // Create power data object
    const processedPower = {
      id: powerId,
      nome: powerName,
      descricao: shortDescription,
      descricaoCompleta: fullDescription,
      categoria: categoria,
      subtipo: subtipo,
      tipoAtivacao: tipoAtivacao,
      custo: custo,
      execucao: execucao,
      duracao: {
        valor: duracaoValor,
        unidade: duracaoUnidade,
        especial: duracaoEspecial
      },
      alvo: alvo,
      area: area,
      alcance: alcance,
      resistencia: {
        pericia: resistenciaPericia,
        atributo: resistenciaAtributo,
        bonus: resistenciaBonus,
        texto: resistenciaTexto
      },
      efeitos: efeitos,
      tags: tags,
      source: source,
      img: img
    };

    // Clean up empty values
    Object.keys(processedPower).forEach(key => {
      if (processedPower[key] === '' || processedPower[key] === null || processedPower[key] === undefined) {
        delete processedPower[key];
      }
    });

    // Clean up nested empty objects
    if (processedPower.duracao && Object.values(processedPower.duracao).every(v => !v)) {
      delete processedPower.duracao;
    }

    if (processedPower.resistencia && Object.values(processedPower.resistencia).every(v => !v)) {
      delete processedPower.resistencia;
    }

    return processedPower;

  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Recursively find all YAML files in a directory
 */
function findYamlFiles(dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files.push(...findYamlFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.yml')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Generate powers data from YAML files
 */
function generatePowersData() {
  console.log('⚡ Gerando dados de poderes...');

  const powersData = {
    classe: {},
    racial: {},
    origem: {},
    geral: {}
  };

  const powersPath = path.join(__dirname, '..', '..', 'source', 'poderes');

  if (!fs.existsSync(powersPath)) {
    console.log(`⚠️ Diretório de poderes não encontrado: ${powersPath}`);
    return powersData;
  }

  // Find all YAML files
  const yamlFiles = findYamlFiles(powersPath);
  console.log(`📁 Encontrados ${yamlFiles.length} arquivos YAML de poderes`);

  let processedCount = 0;
  let errorCount = 0;

  // Process each YAML file
  for (const filePath of yamlFiles) {
    const processedPower = processPowerFile(filePath);

    if (processedPower) {
      const categoria = processedPower.categoria;
      const subtipo = processedPower.subtipo;

      // Initialize category if it doesn't exist
      if (!powersData[categoria]) {
        powersData[categoria] = {};
      }

      // Initialize subtype if it doesn't exist
      if (!powersData[categoria][subtipo]) {
        powersData[categoria][subtipo] = {};
      }

      // Add power to the appropriate category and subtype
      const powerKey = processedPower.nome.toLowerCase().replace(/[^a-z0-9]/g, '-');
      powersData[categoria][subtipo][powerKey] = processedPower;

      processedCount++;
    } else {
      errorCount++;
    }
  }

  // Decode HTML entities in the entire powers data object
  const decodedPowersData = decodeHtmlEntitiesRecursive(powersData);

  // Generate the JavaScript code
  const powersDataCode = `// Auto-generated powers data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

const powersData = ${JSON.stringify(decodedPowersData, null, 2)};

module.exports = powersData;
`;

  // Write the generated file
  const outputPath = path.join(__dirname, '..', '..', 'modules', 'powers', 'generated-powers-data.js');

  // Ensure the powers directory exists
  const powersDir = path.dirname(outputPath);
  if (!fs.existsSync(powersDir)) {
    fs.mkdirSync(powersDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, powersDataCode, 'utf8');

  console.log(`✅ Dados de poderes gerados: ${outputPath}`);
  console.log(`📊 Total de poderes processados: ${processedCount}`);

  if (errorCount > 0) {
    console.log(`⚠️ Erros encontrados: ${errorCount}`);
  }

  // Count total powers by category
  for (const [categoria, subtipos] of Object.entries(decodedPowersData)) {
    let categoriaCount = 0;
    for (const [subtipo, poderes] of Object.entries(subtipos)) {
      categoriaCount += Object.keys(poderes).length;
    }
    console.log(`  📊 ${categoria}: ${categoriaCount} poderes`);
  }

  return decodedPowersData;
}

// Export the function
module.exports = { generatePowersData };

// Run if called directly
if (require.main === module) {
  generatePowersData();
}
