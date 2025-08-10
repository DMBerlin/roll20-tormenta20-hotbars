const { generateSpellsData } = require('./generate-spells-data.js');

console.log('🧪 Testando geração de dados de magias...');

try {
  const spellsData = generateSpellsData();

  // Test some basic structure
  console.log('\n📊 Estrutura dos dados:');
  console.log(`- Tradições: ${Object.keys(spellsData).join(', ')}`);

  for (const tradition in spellsData) {
    const circles = Object.keys(spellsData[tradition]);
    console.log(`- ${tradition}: ${circles.length} círculos (${circles.join(', ')})`);

    let totalSpells = 0;
    for (const circle in spellsData[tradition]) {
      for (const school in spellsData[tradition][circle]) {
        totalSpells += Object.keys(spellsData[tradition][circle][school]).length;
      }
    }
    console.log(`  Total de magias em ${tradition}: ${totalSpells}`);
  }

  // Test a specific spell
  if (spellsData.arcana && spellsData.arcana['1-circulo'] && spellsData.arcana['1-circulo'].abjuracao && spellsData.arcana['1-circulo'].abjuracao.alarme) {
    const alarme = spellsData.arcana['1-circulo'].abjuracao.alarme;
    console.log('\n✅ Exemplo de magia (Alarme):');
    console.log(`- Nome: ${alarme.name}`);
    console.log(`- Círculo: ${alarme.system.circulo}`);
    console.log(`- Escola: ${alarme.system.escola}`);
    console.log(`- Custo: ${alarme.system.custo}`);
  }

  console.log('\n✅ Teste concluído com sucesso!');

} catch (error) {
  console.error('❌ Erro no teste:', error.message);
  process.exit(1);
}
