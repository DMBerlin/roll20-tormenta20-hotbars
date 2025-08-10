const fs = require('fs');
const path = require('path');

/**
 * Generate spellsData object from individual spell files
 * This script runs during build time to create a consolidated spells data object
 */

function generateSpellsData() {
  console.log('🔮 Gerando dados de magias...');

  const spellsData = {
    arcana: {},
    divina: {},
    universal: {}
  };

  const magiasPath = path.join(__dirname, '..', '..', 'source', 'magias');

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

            // Clean up empty or undefined values
            Object.keys(transformedSpell.system).forEach(key => {
              if (transformedSpell.system[key] === undefined || transformedSpell.system[key] === '') {
                delete transformedSpell.system[key];
              }
            });

            spellsData[tradition][circleKey][schoolKey][spellFile] = transformedSpell;

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
  const outputPath = path.join(__dirname, '..', '..', 'generated-spells-data.js');
  fs.writeFileSync(outputPath, spellsDataCode);

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

// Export for use in build process
module.exports = { generateSpellsData };

// Run directly if called as script
if (require.main === module) {
  generateSpellsData();
}
