const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define directories outside function for error handling
const distDir = path.join(__dirname, 'dist');
const packageDir = path.join(distDir, 'package');

async function packageExtension() {
  try {
    console.log('📦 Creating Chrome Extension Package...');

    // First, ensure the extension is built
    console.log('🔨 Building extension...');
    execSync('npm run build', { stdio: 'inherit' });

    // Create a dist directory for packages
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('📁 Created dist directory');
    }

    // Copy all necessary files to a clean package directory
    if (fs.existsSync(packageDir)) {
      fs.rmSync(packageDir, { recursive: true, force: true });
    }
    fs.mkdirSync(packageDir, { recursive: true });

    // Files to include in the package
    const filesToCopy = [
      'manifest.json',
      'content.js',
      'popup.html',
      'popup.js'
    ];

    // Copy files
    filesToCopy.forEach(file => {
      const src = path.join(__dirname, file);
      const dest = path.join(packageDir, file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied ${file}`);
      } else {
        console.log(`⚠️  Warning: ${file} not found`);
      }
    });

    // Copy icons directory if it exists
    const iconsDir = path.join(__dirname, 'icons');
    const packageIconsDir = path.join(packageDir, 'icons');
    if (fs.existsSync(iconsDir)) {
      fs.mkdirSync(packageIconsDir, { recursive: true });
      const iconFiles = fs.readdirSync(iconsDir);
      iconFiles.forEach(file => {
        if (file.endsWith('.png')) {
          fs.copyFileSync(
            path.join(iconsDir, file),
            path.join(packageIconsDir, file)
          );
          console.log(`✅ Copied icon: ${file}`);
        }
      });
    }

    // Create a ZIP file for easy distribution
    const archiver = require('archiver');
    const output = fs.createWriteStream(path.join(distDir, 'roll20-hotbar-extension.zip'));
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function () {
      console.log(`📦 Package created: ${archive.pointer()} total bytes`);
      console.log('✅ Extension packaged successfully!');
      console.log('');
      console.log('📁 Files created:');
      console.log(`   - ${path.join(distDir, 'roll20-hotbar-extension.zip')}`);
      console.log(`   - ${packageDir} (clean package directory)`);
      console.log('');
      console.log('🚀 Distribution options:');
      console.log('1. Share the ZIP file for manual extraction and loading');
      console.log('2. Use Chrome\'s "Pack extension" on the package directory');
      console.log('3. Submit to Chrome Web Store using the ZIP file');
    });

    archive.on('error', function (err) {
      throw err;
    });

    archive.pipe(output);
    archive.directory(packageDir, false);
    archive.finalize();

  } catch (error) {
    console.error('❌ Error packaging extension:', error.message);

    // If archiver is not installed, provide alternative
    if (error.message.includes('archiver')) {
      console.log('');
      console.log('📦 Alternative: Manual packaging');
      console.log('1. Go to chrome://extensions/');
      console.log('2. Click "Pack extension"');
      console.log(`3. Select directory: ${packageDir}`);
      console.log('4. This creates a .crx file you can distribute');
    }

    process.exit(1);
  }
}

// Run the packaging
packageExtension();
