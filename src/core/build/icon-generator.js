const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Generate PNG icons for Chrome extension
 * @param {string} outputDir - Directory to save the PNG icons
 */
async function generateIcons(outputDir) {
  console.log('🎨 Gerando ícones PNG para Chrome extension...');

  const iconSizes = [16, 48, 128];
  const iconsSourceDir = path.join(__dirname, '..', '..', 'source', 'icons');

  for (const size of iconSizes) {
    const iconName = `icon${size}`;
    const pngSource = path.join(iconsSourceDir, `${iconName}.png`);
    const icoSource = path.join(iconsSourceDir, `${iconName}.ico`);
    const pngDest = path.join(outputDir, `${iconName}.png`);

    try {
      // First, try to use existing PNG icon
      if (fs.existsSync(pngSource)) {
        // Copy the existing PNG icon
        await sharp(pngSource)
          .resize(size, size)
          .png()
          .toFile(pngDest);
        console.log(`✅ ${iconName}.png copiado e redimensionado (${size}x${size})`);
      }
      // If PNG doesn't exist, try to convert ICO to PNG
      else if (fs.existsSync(icoSource)) {
        await sharp(icoSource)
          .resize(size, size)
          .png()
          .toFile(pngDest);
        console.log(`✅ ${iconName}.png gerado de ICO (${size}x${size})`);
      }
      // If neither exists, create a fallback icon
      else {
        await createFallbackIcon(size, pngDest);
        console.log(`⚠️ ${iconName}.png não encontrado, criando ícone padrão`);
      }
    } catch (error) {
      console.log(`⚠️ Erro ao processar ${iconName}, criando ícone padrão: ${error.message}`);
      // Create a simple fallback icon
      await createFallbackIcon(size, pngDest);
    }
  }
}

/**
 * Create a simple fallback icon
 * @param {number} size - Icon size
 * @param {string} outputPath - Output file path
 */
async function createFallbackIcon(size, outputPath) {
  // Create a simple SVG icon
  const svgIcon = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
      <text x="${size / 2}" y="${size / 2 + size * 0.1}" 
            font-family="Arial, sans-serif" 
            font-size="${size * 0.4}" 
            font-weight="bold" 
            text-anchor="middle" 
            fill="white">R</text>
    </svg>
  `;

  // Convert SVG to PNG
  await sharp(Buffer.from(svgIcon))
    .png()
    .toFile(outputPath);
}

module.exports = { generateIcons };
