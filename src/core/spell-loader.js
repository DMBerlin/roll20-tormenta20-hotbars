const {
  getSpellsByCircle,
  getSpellsBySchool,
  getSpellByName,
  searchSpells,
  findSpells,
  getSpellStats
} = require('../source/magias/utils.js');

/**
 * Spell loader using converted JavaScript objects
 * This replaces the old YAML-based loader for better performance
 */

let currentSpells = [];

/**
 * Carrega todas as magias do primeiro círculo
 * @returns {Promise<Array>} Array com as magias carregadas
 */
async function loadFirstCircleSpells() {
  try {
    const allSpells = [];

    // Load arcane spells
    const arcaneFirstCircle = getSpellsByCircle('arcana', '1-circulo');

    for (const school in arcaneFirstCircle) {
      const schoolSpells = getSpellsBySchool('arcana', '1-circulo', school);
      for (const spellName in schoolSpells) {
        const spell = schoolSpells[spellName];
        allSpells.push({
          ...spell,
          tradition: 'arcana',
          circle: '1-circulo',
          school: school
        });
      }
    }

    // Load divine spells
    const divineFirstCircle = getSpellsByCircle('divina', '1-circulo');

    for (const school in divineFirstCircle) {
      const schoolSpells = getSpellsBySchool('divina', '1-circulo', school);
      for (const spellName in schoolSpells) {
        const spell = schoolSpells[spellName];
        allSpells.push({
          ...spell,
          tradition: 'divina',
          circle: '1-circulo',
          school: school
        });
      }
    }

    // Load universal spells
    const universalFirstCircle = getSpellsByCircle('universal', '1-circulo');

    for (const school in universalFirstCircle) {
      const schoolSpells = getSpellsBySchool('universal', '1-circulo', school);
      for (const spellName in schoolSpells) {
        const spell = schoolSpells[spellName];
        allSpells.push({
          ...spell,
          tradition: 'universal',
          circle: '1-circulo',
          school: school
        });
      }
    }

    setCurrentSpells(allSpells);
    return allSpells;

  } catch (error) {
    console.error('Erro ao carregar magias do primeiro círculo:', error);
    return [];
  }
}

/**
 * Carrega magias de um diretório específico (tradição e círculo)
 * @param {string} tradition - Tradição da magia (arcana, divina, universal)
 * @param {string} circle - Círculo da magia (1-circulo, 2-circulo, etc.)
 * @returns {Promise<Array>} Array com as magias carregadas
 */
async function loadSpellsFromDirectory(tradition, circle) {
  try {
    const allSpells = [];
    const circleSpells = getSpellsByCircle(tradition, circle);

    for (const school in circleSpells) {
      const schoolSpells = getSpellsBySchool(tradition, circle, school);
      for (const spellName in schoolSpells) {
        const spell = schoolSpells[spellName];
        allSpells.push({
          ...spell,
          tradition: tradition,
          circle: circle,
          school: school
        });
      }
    }

    return allSpells;

  } catch (error) {
    console.warn(`Erro ao carregar diretório ${tradition}/${circle}:`, error);
    return [];
  }
}

/**
 * Carrega todas as magias disponíveis
 * @returns {Promise<Array>} Array com todas as magias
 */
async function loadAllSpells() {
  try {
    const allSpells = [];

    // Load all traditions
    const traditions = ['arcana', 'divina', 'universal'];
    const circles = ['1-circulo', '2-circulo', '3-circulo', '4-circulo', '5-circulo'];

    for (const tradition of traditions) {
      for (const circle of circles) {
        const circleSpells = await loadSpellsFromDirectory(tradition, circle);
        allSpells.push(...circleSpells);
      }
    }

    setCurrentSpells(allSpells);
    return allSpells;

  } catch (error) {
    console.error('Erro ao carregar todas as magias:', error);
    return [];
  }
}

/**
 * Filtra as magias baseado em critérios
 * @param {string} searchTerm - Termo de busca
 * @param {string} tradition - Tradição (arcana, divina, universal)
 * @param {string} school - Escola de magia
 * @param {string} circle - Círculo
 * @returns {Array} Array com as magias filtradas
 */
function filterSpells(searchTerm = '', tradition = '', school = '', circle = '') {
  const currentSpells = getCurrentSpells();

  return currentSpells.filter(spell => {
    // Filter by search term
    if (searchTerm && !spell.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Filter by tradition
    if (tradition && spell.tradition !== tradition) {
      return false;
    }

    // Filter by school
    if (school && spell.school !== school) {
      return false;
    }

    // Filter by circle
    if (circle && spell.circle !== circle) {
      return false;
    }

    return true;
  });
}

/**
 * Busca uma magia específica por nome
 * @param {string} spellName - Nome da magia
 * @returns {Object|null} Dados da magia ou null se não encontrada
 */
function findSpellByName(spellName) {
  return getSpellByName(spellName);
}

/**
 * Busca magias usando critérios avançados
 * @param {Object} criteria - Critérios de busca
 * @returns {Array} Array com as magias encontradas
 */
function findSpellsByCriteria(criteria) {
  return findSpells(criteria);
}

/**
 * Busca magias por termo de busca
 * @param {string} searchTerm - Termo de busca
 * @returns {Array} Array com as magias encontradas
 */
function searchSpellsByName(searchTerm) {
  return searchSpells(searchTerm);
}

/**
 * Obtém estatísticas das magias
 * @returns {Object} Estatísticas das magias
 */
function getSpellStatistics() {
  return getSpellStats();
}

/**
 * Obtém todas as magias atualmente carregadas
 * @returns {Array} Array com as magias carregadas
 */
function getCurrentSpells() {
  return currentSpells;
}

/**
 * Define as magias atualmente carregadas
 * @param {Array} spells - Array com as magias
 */
function setCurrentSpells(spells) {
  currentSpells = spells;
}

/**
 * Limpa o cache de magias
 */
function clearSpellsCache() {
  currentSpells = [];
}

/**
 * Obtém todas as tradições disponíveis
 * @returns {Array} Array com as tradições
 */
function getAvailableTraditions() {
  return ['arcana', 'divina', 'universal'];
}

/**
 * Obtém todos os círculos disponíveis
 * @returns {Array} Array com os círculos
 */
function getAvailableCircles() {
  return ['1-circulo', '2-circulo', '3-circulo', '4-circulo', '5-circulo'];
}

/**
 * Obtém todas as escolas disponíveis
 * @returns {Array} Array com as escolas
 */
function getAvailableSchools() {
  return [
    'abjuracao',
    'adivinhacao',
    'convocacao',
    'encantamento',
    'evocacao',
    'ilusao',
    'necromancia',
    'transmutacao'
  ];
}

/**
 * Obtém magias de uma escola específica
 * @param {string} tradition - Tradição
 * @param {string} circle - Círculo
 * @param {string} school - Escola
 * @returns {Array} Array com as magias da escola
 */
function getSpellsBySchoolAndCircle(tradition, circle, school) {
  const schoolSpells = getSpellsBySchool(tradition, circle, school);
  const spells = [];

  for (const spellName in schoolSpells) {
    const spell = schoolSpells[spellName];
    spells.push({
      ...spell,
      tradition: tradition,
      circle: circle,
      school: school
    });
  }

  return spells;
}

module.exports = {
  loadFirstCircleSpells,
  loadSpellsFromDirectory,
  loadAllSpells,
  filterSpells,
  findSpellByName,
  findSpellsByCriteria,
  searchSpellsByName,
  getSpellStatistics,
  getCurrentSpells,
  setCurrentSpells,
  clearSpellsCache,
  getAvailableTraditions,
  getAvailableCircles,
  getAvailableSchools,
  getSpellsBySchoolAndCircle
};
