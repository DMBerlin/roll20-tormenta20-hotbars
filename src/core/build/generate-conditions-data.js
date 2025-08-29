const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Extract text content from HTML string with preserved paragraph breaks
 */
function extractTextFromHtml(htmlContent) {
  if (!htmlContent) return '';

  // First, let's preserve paragraph and list structure
  let processedContent = htmlContent
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

    // Skip lines that are just the condition name (usually the first line)
    if (i === 0 && line && !line.includes(' ') && !line.includes(':')) {
      continue;
    }

    // Skip lines that are just category labels (e.g., "Condição de Paralisia")
    if (line.startsWith('Condição de ') || line === 'Condição') {
      continue;
    }

    // Skip decorative elements
    if (line === '_' || line === '•') {
      continue;
    }

    processedLines.push(line);
  }

  return processedLines.join('\n\n');
}

/**
 * Create a short description from the full description
 */
function createShortDescription(description, maxLength = 80) {
  if (!description) return '';

  // If description is already short enough, return as is
  if (description.length <= maxLength) {
    return description;
  }

  // Find the last complete word before the max length
  const truncated = description.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }

  return truncated + '...';
}

/**
 * Extract condition category from HTML content
 */
function extractCategoryFromHtml(htmlContent) {
  if (!htmlContent) return 'Status';

  const categoryMatch = htmlContent.match(/Condição de ([^<]+)/);
  if (categoryMatch) {
    return categoryMatch[1].trim();
  }

  // Fallback categories based on common patterns
  if (htmlContent.includes('Mental')) return 'Mental';
  if (htmlContent.includes('Física')) return 'Física';
  if (htmlContent.includes('Sentidos')) return 'Sentidos';
  if (htmlContent.includes('Movimento')) return 'Movimento';
  if (htmlContent.includes('Medo')) return 'Medo';
  if (htmlContent.includes('Paralisia')) return 'Paralisia';
  if (htmlContent.includes('Fadiga')) return 'Fadiga';
  if (htmlContent.includes('Metabolismo')) return 'Metabolismo';
  if (htmlContent.includes('Veneno')) return 'Veneno';
  if (htmlContent.includes('Metamorfose')) return 'Metamorfose';

  return 'Status';
}

/**
 * Generate icon for condition based on name
 */
function generateIcon(conditionName) {
  const iconMap = {
    'Abalado': '😰',
    'Agarrado': '🤝',
    'Alquebrado': '🧠',
    'Apavorado': '😱',
    'Atordoado': '💫',
    'Caído': '🛐',
    'Cego': '👁️',
    'Confuso': '🤪',
    'Debilitado': '😵',
    'Desprevenido': '😳',
    'Doente': '🤒',
    'Em Chamas': '🔥',
    'Enfeitiçado': '💫',
    'Enjoado': '🤢',
    'Enredado': '🕸️',
    'Envenenado': '☠️',
    'Esmorecido': '😞',
    'Exausto': '😴',
    'Fascinado': '😵',
    'Fatigado': '😪',
    'Fraco': '😣',
    'Frustrado': '😤',
    'Imóvel': '🛑',
    'Inconsciente': '😵',
    'Indefeso': '💀',
    'Invisível': '👻',
    'Lento': '🐌',
    'Ofuscado': '😵‍💫',
    'Paralisado': '🧊',
    'Pasmo': '😶',
    'Petrificado': '🗿',
    'Sangrando': '🩸',
    'Sobrecarregado': '⚖️',
    'Surdo': '🔇',
    'Surpreendido': '😲',
    'Vulnerável': '💔'
  };

  return iconMap[conditionName] || '⚠️';
}

/**
 * Generate icon URL for condition based on name
 */
function generateIconUrl(conditionName) {
  const iconUrlMap = {
    'Abalado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
    'Agarrado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
    'Alquebrado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Apavorado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg',
    'Atordoado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
    'Caído': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbindtotem.jpg',
    'Cego': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
    'Confuso': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
    'Debilitado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Desprevenido': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
    'Doente': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
    'Em Chamas': 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_immolation.jpg',
    'Enfeitiçado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
    'Enjoado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
    'Enredado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
    'Envenenado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisoncleansingtotem.jpg',
    'Esmorecido': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Exausto': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Fascinado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg',
    'Fatigado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg',
    'Fraco': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Frustrado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
    'Imóvel': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
    'Inconsciente': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg',
    'Indefeso': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
    'Invisível': 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
    'Lento': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
    'Ofuscado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg',
    'Paralisado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbindtotem.jpg',
    'Pasmo': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg',
    'Petrificado': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg',
    'Sangrando': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_blackplague.jpg',
    'Sobrecarregado': 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
    'Surdo': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soulleech.jpg',
    'Surpreendido': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg',
    'Vulnerável': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofmannoroth.jpg'
  };

  return iconUrlMap[conditionName] || 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseoftounges.jpg';
}

/**
 * Extract effects from condition description
 */
function extractEffects(description) {
  if (!description) return '';

  // Common effect patterns
  const effects = [];

  // Penalties
  if (description.includes('-2')) effects.push('-2 em testes');
  if (description.includes('-5')) effects.push('-5 em testes');
  if (description.includes('-10')) effects.push('-10 na Defesa');

  // Movement restrictions
  if (description.includes('não pode fazer ações')) effects.push('Não pode fazer ações');
  if (description.includes('lento')) effects.push('Movimento reduzido');
  if (description.includes('imóvel')) effects.push('Não pode se mover');

  // Status effects
  if (description.includes('desprevenido')) effects.push('Fica desprevenido');
  if (description.includes('indefeso')) effects.push('Fica indefeso');
  if (description.includes('vulnerável')) effects.push('Fica vulnerável');

  // Special effects
  if (description.includes('dano')) effects.push('Sofre dano');
  if (description.includes('teste de Constituição')) effects.push('Teste de Constituição');
  if (description.includes('1d6')) effects.push('1d6 dano por turno');
  if (description.includes('+1 PM') || description.includes('+1')) effects.push('+1 PM no custo de habilidades');
  if (description.includes('Role 1d6')) effects.push('Ação aleatória (1d6)');

  return effects.length > 0 ? effects.join(' • ') : 'Efeitos variam conforme a condição';
}

/**
 * Generate conditions data from YAML file
 */
function generateConditionsData() {
  console.log('⚡ Gerando dados de condições...');

  const conditionsData = [];

  const conditionsPath = path.join(__dirname, '..', '..', 'source', 'general', 'condições.yml');

  if (!fs.existsSync(conditionsPath)) {
    console.log(`⚠️ Arquivo de condições não encontrado: ${conditionsPath}`);
    return [];
  }

  try {
    // Read and parse YAML file
    const yamlContent = fs.readFileSync(conditionsPath, 'utf8');
    const conditionsYaml = yaml.load(yamlContent);

    if (!conditionsYaml.pages || !Array.isArray(conditionsYaml.pages)) {
      console.log('⚠️ Estrutura de condições inválida no YAML');
      return [];
    }

    // Process each condition page
    for (const page of conditionsYaml.pages) {
      if (!page.name || !page.text || !page.text.content) {
        continue;
      }

      try {
        const conditionName = page.name;
        const htmlContent = page.text.content;

        // Extract text content from HTML
        const fullDescription = extractTextFromHtml(htmlContent);
        const shortDescription = createShortDescription(fullDescription, 80);

        // Extract category
        const category = extractCategoryFromHtml(htmlContent);

        // Generate icon and icon URL
        const icon = generateIcon(conditionName);
        const iconUrl = generateIconUrl(conditionName);

        // Extract effects
        const effects = extractEffects(fullDescription);

        // Create condition data object
        const conditionData = {
          nome: conditionName,
          descricao: shortDescription,
          descricaoCompleta: fullDescription,
          efeitos: effects,
          categoria: category,
          iconeUrl: iconUrl,
          icone: icon
        };

        conditionsData.push(conditionData);

      } catch (error) {
        console.error(`❌ Erro ao processar condição ${page.name}:`, error.message);
      }
    }

    // Sort conditions alphabetically
    conditionsData.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

    // Generate the JavaScript code
    const conditionsDataCode = `// Auto-generated conditions data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

const conditionsData = ${JSON.stringify(conditionsData, null, 2)};

module.exports = conditionsData;
`;

    // Write the generated file
    const outputPath = path.join(__dirname, '..', '..', 'modules', 'conditions', 'generated-conditions-data.js');

    // Ensure the conditions directory exists
    const conditionsDir = path.dirname(outputPath);
    if (!fs.existsSync(conditionsDir)) {
      fs.mkdirSync(conditionsDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, conditionsDataCode, 'utf8');

    console.log(`✅ Dados de condições gerados: ${outputPath}`);
    console.log(`📊 Total de condições processadas: ${conditionsData.length}`);

    return conditionsData;

  } catch (error) {
    console.error('❌ Erro ao processar arquivo de condições:', error.message);
    return [];
  }
}

// Export the function
module.exports = { generateConditionsData };

// Run if called directly
if (require.main === module) {
  generateConditionsData();
}
