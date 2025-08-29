const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Generate PNG icons for Chrome extension
 * @param {string} outputDir - Directory to save the PNG icons
 */
async function generateIcons(outputDir) {
  console.log('🎨 Gerando ícones PNG para Chrome extension...');

  const iconSizes = [16, 32, 48, 128, 256, 512];
  const iconsSourceDir = path.join(__dirname, '..', '..', 'source', 'plugin-icons');

  for (const size of iconSizes) {
    const iconName = `icon-${size}`;
    const pngSource = path.join(iconsSourceDir, `${iconName}.png`);
    const pngDest = path.join(outputDir, `icon${size}.png`);

    try {
      // Use the plugin icons from the plugin-icons directory
      if (fs.existsSync(pngSource)) {
        // Copy and resize the existing PNG icon
        await sharp(pngSource)
          .resize(size, size)
          .png()
          .toFile(pngDest);
        console.log(`✅ ${iconName}.png copiado e redimensionado (${size}x${size})`);
      }
      // If the specific size doesn't exist, try to use a larger one and resize down
      else {
        // Try to find a larger icon to resize down
        const availableSizes = [512, 256, 128, 48, 32, 16];
        let sourceIcon = null;

        for (const availableSize of availableSizes) {
          const largerIconPath = path.join(iconsSourceDir, `icon-${availableSize}.png`);
          if (fs.existsSync(largerIconPath)) {
            sourceIcon = largerIconPath;
            break;
          }
        }

        if (sourceIcon) {
          await sharp(sourceIcon)
            .resize(size, size)
            .png()
            .toFile(pngDest);
          console.log(`✅ Ícone redimensionado de ${path.basename(sourceIcon)} para ${size}x${size}`);
        } else {
          // If no icons found, create a fallback icon
          await createFallbackIcon(size, pngDest);
          console.log(`⚠️ Nenhum ícone encontrado, criando ícone padrão`);
        }
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
