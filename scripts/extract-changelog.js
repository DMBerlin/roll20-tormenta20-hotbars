#!/usr/bin/env node

/**
 * Script to extract CHANGELOG content for a specific version
 * Usage: node scripts/extract-changelog.js [version]
 * Example: node scripts/extract-changelog.js v0.4.4
 */

const fs = require('fs');
const path = require('path');

function extractChangelogForVersion(version) {
  const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');

  if (!fs.existsSync(changelogPath)) {
    console.error('❌ CHANGELOG.md not found');
    process.exit(1);
  }

  const changelogContent = fs.readFileSync(changelogPath, 'utf8');
  const lines = changelogContent.split('\n');

  let found = false;
  let inSection = false;
  let content = [];

  for (const line of lines) {
    // Check if this is a version header
    if (line.match(/^## \[.*\]/)) {
      if (inSection) {
        // We've reached the next version, stop
        break;
      }

      // Check if this is the version we're looking for
      if (line.includes(`[${version}]`)) {
        found = true;
        inSection = true;
        continue;
      }
    }

    // If we're in the target section, collect the content
    if (inSection) {
      content.push(line);
    }
  }

  if (!found) {
    console.error(`❌ Version ${version} not found in CHANGELOG.md`);
    process.exit(1);
  }

  // Remove the first empty lines
  while (content.length > 0 && content[0].trim() === '') {
    content.shift();
  }

  // Remove the last empty lines
  while (content.length > 0 && content[content.length - 1].trim() === '') {
    content.pop();
  }

  return content.join('\n');
}

function main() {
  const version = process.argv[2];

  if (!version) {
    console.error('❌ Please provide a version');
    console.error('Usage: node scripts/extract-changelog.js [version]');
    console.error('Example: node scripts/extract-changelog.js v0.4.4');
    process.exit(1);
  }

  try {
    const content = extractChangelogForVersion(version);
    console.log('✅ CHANGELOG content extracted:');
    console.log('---');
    console.log(content);
    console.log('---');
  } catch (error) {
    console.error('❌ Error extracting CHANGELOG:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { extractChangelogForVersion };
