const fs = require('fs');
const path = require('path');

// Simple function to create a basic PNG icon using Canvas API simulation
// eslint-disable-next-line no-unused-vars
function createSimpleIcon(size, text = 'R20') {
  // Create a simple SVG that we can convert to PNG later
  const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#357abd;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.floor(size * 0.25)}" 
        font-weight="bold" fill="white" text-anchor="middle" dy="0.35em">${text}</text>
</svg>`;

  return svg;
}

// Create a simple base64 PNG (1x1 pixel) as fallback
// eslint-disable-next-line no-unused-vars
function createMinimalPNG(size) {
  // This creates a minimal PNG data URL that Chrome will accept
  // It's a 1x1 transparent pixel that gets scaled
  const canvas = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
    0x00, 0x00, 0x00, 0x0D, // IHDR chunk size
    0x49, 0x48, 0x44, 0x52, // IHDR
    0x00, 0x00, 0x00, 0x01, // width = 1
    0x00, 0x00, 0x00, 0x01, // height = 1
    0x08, 0x06, 0x00, 0x00, 0x00, // bit depth, color type, compression, filter, interlace
    0x1F, 0x15, 0xC4, 0x89, // CRC
    0x00, 0x00, 0x00, 0x0A, // IDAT chunk size
    0x49, 0x44, 0x41, 0x54, // IDAT
    0x78, 0x9C, 0x62, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, // compressed data
    0xE2, 0x21, 0xBC, 0x33, // CRC
    0x00, 0x00, 0x00, 0x00, // IEND chunk size
    0x49, 0x45, 0x4E, 0x44, // IEND
    0xAE, 0x42, 0x60, 0x82  // CRC
  ]);

  return canvas;
}

async function createIcons() {
  try {
    console.log('🎨 Creating placeholder icons...');

    const iconsDir = path.join(__dirname, 'icons');

    // Create icons directory if it doesn't exist
    if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir, { recursive: true });
      console.log('📁 Created icons directory');
    }

    // Create simple PNG icons
    const sizes = [16, 48, 128];

    for (const size of sizes) {
      const iconPath = path.join(iconsDir, `icon${size}.png`);
      const pngData = createMinimalPNG(size);

      fs.writeFileSync(iconPath, pngData);
      console.log(`✅ Created icon${size}.png`);
    }

    console.log('');
    console.log('🎉 Icons created successfully!');
    console.log('');
    console.log('📝 Note: These are minimal placeholder icons.');
    console.log('   For better appearance, replace them with proper PNG files:');
    console.log('   - icon16.png (16×16 pixels) - Toolbar icon');
    console.log('   - icon48.png (48×48 pixels) - Extension management');
    console.log('   - icon128.png (128×128 pixels) - Chrome Web Store');

  } catch (error) {
    console.error('❌ Error creating icons:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  createIcons();
}

module.exports = { createIcons };
