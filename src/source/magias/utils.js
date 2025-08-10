const spells = require('./index.js');

/**
 * Utility functions for working with converted spells
 */

/**
 * Get all spells of a specific type (arcana, divina, universal)
 * @param {string} type - The spell type
 * @returns {Object} All spells of that type
 */
function getSpellsByType(type) {
  return spells[type] || {};
}

/**
 * Get all spells of a specific circle (1-5)
 * @param {string} type - The spell type (arcana, divina, universal)
 * @param {string} circle - The circle (1-circulo, 2-circulo, etc.)
 * @returns {Object} All spells of that circle
 */
function getSpellsByCircle(type, circle) {
  const typeSpells = getSpellsByType(type);
  return typeSpells[circle] || {};
}

/**
 * Get all spells of a specific school
 * @param {string} type - The spell type (arcana, divina, universal)
 * @param {string} circle - The circle (1-circulo, 2-circulo, etc.)
 * @param {string} school - The school (abjuracao, adivinhacao, etc.)
 * @returns {Object} All spells of that school
 */
function getSpellsBySchool(type, circle, school) {
  const circleSpells = getSpellsByCircle(type, circle);
  return circleSpells[school] || {};
}

/**
 * Get a specific spell by name
 * @param {string} spellName - The name of the spell
 * @returns {Object|null} The spell object or null if not found
 */
function getSpellByName(spellName) {
  for (const type in spells) {
    for (const circle in spells[type]) {
      for (const school in spells[type][circle]) {
        for (const name in spells[type][circle][school]) {
          if (name === spellName) {
            return spells[type][circle][school][name];
          }
        }
      }
    }
  }
  return null;
}

/**
 * Search spells by name (partial match)
 * @param {string} searchTerm - The search term
 * @returns {Array} Array of matching spells with their paths
 */
function searchSpells(searchTerm) {
  const results = [];
  const term = searchTerm.toLowerCase();

  for (const type in spells) {
    for (const circle in spells[type]) {
      for (const school in spells[type][circle]) {
        for (const name in spells[type][circle][school]) {
          if (name.toLowerCase().includes(term)) {
            results.push({
              name,
              type,
              circle,
              school,
              spell: spells[type][circle][school][name],
              path: `${type}.${circle}.${school}.${name}`
            });
          }
        }
      }
    }
  }

  return results;
}

/**
 * Get all spells that match certain criteria
 * @param {Object} criteria - Search criteria
 * @param {string} [criteria.type] - Spell type
 * @param {string} [criteria.circle] - Spell circle
 * @param {string} [criteria.school] - Spell school
 * @param {string} [criteria.name] - Spell name (partial match)
 * @returns {Array} Array of matching spells
 */
function findSpells(criteria = {}) {
  const results = [];

  for (const type in spells) {
    if (criteria.type && type !== criteria.type) continue;

    for (const circle in spells[type]) {
      if (criteria.circle && circle !== criteria.circle) continue;

      for (const school in spells[type][circle]) {
        if (criteria.school && school !== criteria.school) continue;

        for (const name in spells[type][circle][school]) {
          if (criteria.name && !name.toLowerCase().includes(criteria.name.toLowerCase())) continue;

          results.push({
            name,
            type,
            circle,
            school,
            spell: spells[type][circle][school][name],
            path: `${type}.${circle}.${school}.${name}`
          });
        }
      }
    }
  }

  return results;
}

/**
 * Get all spell names as a flat array
 * @returns {Array} Array of all spell names
 */
function getAllSpellNames() {
  const names = [];

  for (const type in spells) {
    for (const circle in spells[type]) {
      for (const school in spells[type][circle]) {
        for (const name in spells[type][circle][school]) {
          names.push(name);
        }
      }
    }
  }

  return names;
}

/**
 * Get spell statistics
 * @returns {Object} Statistics about the spells
 */
function getSpellStats() {
  const stats = {
    total: 0,
    byType: { arcana: 0, divina: 0, universal: 0 },
    byCircle: { '1-circulo': 0, '2-circulo': 0, '3-circulo': 0, '4-circulo': 0, '5-circulo': 0 },
    bySchool: {}
  };

  for (const type in spells) {
    for (const circle in spells[type]) {
      for (const school in spells[type][circle]) {
        const schoolCount = Object.keys(spells[type][circle][school]).length;

        stats.total += schoolCount;
        stats.byType[type] += schoolCount;
        stats.byCircle[circle] += schoolCount;
        stats.bySchool[school] = (stats.bySchool[school] || 0) + schoolCount;
      }
    }
  }

  return stats;
}

module.exports = {
  spells,
  getSpellsByType,
  getSpellsByCircle,
  getSpellsBySchool,
  getSpellByName,
  searchSpells,
  findSpells,
  getAllSpellNames,
  getSpellStats
};
