// Utility functions for power icons
const powerIcons = require('./powerIcons.js');

// Debug: Check if powerIcons is loaded correctly

console.log('🔍 powerIcons loaded:', typeof powerIcons, powerIcons ? Object.keys(powerIcons).length : 'null');

/**
 * Get the WoWHead icon URL for a power by its filename (without extension)
 * @param {string} powerName - The power filename without extension (e.g., "alta-arcana")
 * @returns {string} The WoWHead icon URL or a default icon if not found
 */
function getPowerIcon(powerName) {
  // Remove file extension if present
  const cleanName = powerName.replace(/\.(yml|yaml|json)$/, '');

  // Debug: Check if powerIcons is properly loaded
  if (!powerIcons || typeof powerIcons !== 'object') {

    console.warn(`⚠️ powerIcons not properly loaded for ${cleanName}`);
    return null;
  }

  // Try exact match first
  if (powerIcons[cleanName]) {
    return powerIcons[cleanName];
  }

  // Try to find a partial match for similar powers
  const partialMatch = Object.keys(powerIcons).find(key =>
    cleanName.includes(key) || key.includes(cleanName)
  );

  if (partialMatch) {
    return powerIcons[partialMatch];
  }

  // Return default icon based on power type
  return getDefaultIcon(cleanName);
}

/**
 * Get a default icon based on power name patterns
 * @param {string} powerName - The power name
 * @returns {string} Default WoWHead icon URL
 */
function getDefaultIcon(powerName) {
  const lowerName = powerName.toLowerCase();

  // Class-specific defaults
  if (lowerName.includes('arcanista') || lowerName.includes('mago') || lowerName.includes('magia')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcaneblast.jpg";
  }

  if (lowerName.includes('guerreiro') || lowerName.includes('combate') || lowerName.includes('ataque')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_cleave.jpg";
  }

  if (lowerName.includes('clérigo') || lowerName.includes('sagrado') || lowerName.includes('bênção')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_holy_heal.jpg";
  }

  if (lowerName.includes('ladino') || lowerName.includes('furtivo') || lowerName.includes('sombra')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_stealth.jpg";
  }

  if (lowerName.includes('bárbaro') || lowerName.includes('fúria') || lowerName.includes('selvagem')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_battleshout.jpg";
  }

  if (lowerName.includes('druida') || lowerName.includes('natureza') || lowerName.includes('animal')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_nature_ravenform.jpg";
  }

  if (lowerName.includes('caçador') || lowerName.includes('rastreamento')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg";
  }

  if (lowerName.includes('paladino') || lowerName.includes('cavaleiro') || lowerName.includes('proteção')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofprotection.jpg";
  }

  if (lowerName.includes('inventor') || lowerName.includes('máquina') || lowerName.includes('artífice')) {
    return "https://wow.zamimg.com/images/wow/icons/large/trade_engineering.jpg";
  }

  if (lowerName.includes('bucaneiro') || lowerName.includes('esgrima')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_feint.jpg";
  }

  if (lowerName.includes('nobre') || lowerName.includes('autoridade') || lowerName.includes('liderança')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofwisdom.jpg";
  }

  if (lowerName.includes('lutador') || lowerName.includes('desarmado')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_cleave.jpg";
  }

  // Racial defaults
  if (lowerName.includes('anão') || lowerName.includes('dahllan') || lowerName.includes('elfo') ||
    lowerName.includes('goblin') || lowerName.includes('golem') || lowerName.includes('humano') ||
    lowerName.includes('hynne') || lowerName.includes('kliren') || lowerName.includes('lefou') ||
    lowerName.includes('medusa') || lowerName.includes('minotauro') || lowerName.includes('osteon') ||
    lowerName.includes('qareen') || lowerName.includes('sereia') || lowerName.includes('tritão') ||
    lowerName.includes('sílfide') || lowerName.includes('suraggel') || lowerName.includes('trog')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_racial_heroicpresence.jpg";
  }

  // General category defaults
  if (lowerName.includes('combate')) {
    return "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_cleave.jpg";
  }

  if (lowerName.includes('concedido')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofwisdom.jpg";
  }

  if (lowerName.includes('destino')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofwisdom.jpg";
  }

  if (lowerName.includes('magia')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcaneblast.jpg";
  }

  if (lowerName.includes('tormenta')) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg";
  }

  // Ultimate fallback
  return "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg";
}

/**
 * Update power data with WoWHead icons
 * @param {Object} powerData - The power data object
 * @returns {Object} Power data with updated img property
 */
function updatePowerWithIcon(powerData) {
  if (!powerData || !powerData.name) {
    return powerData;
  }

  // Create a filename-like key from the power name
  const powerKey = powerData.name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9-]/g, '');

  const iconUrl = getPowerIcon(powerKey);

  return {
    ...powerData,
    img: iconUrl
  };
}

/**
 * Batch update multiple powers with icons
 * @param {Array} powersArray - Array of power data objects
 * @returns {Array} Array of power data objects with updated icons
 */
function updatePowersWithIcons(powersArray) {
  return powersArray.map(power => updatePowerWithIcon(power));
}

// Export for use in other modules

module.exports = {
  getPowerIcon,
  updatePowerWithIcon,
  updatePowersWithIcons
};

// For browser use

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef
  window.powerIconUtils = {
    getPowerIcon,
    updatePowerWithIcon,
    updatePowersWithIcons
  };
}
