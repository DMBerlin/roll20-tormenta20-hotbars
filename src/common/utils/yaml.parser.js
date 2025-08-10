const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Parses a YAML file and returns its content as a JSON object
 * @param {string} filePath - Path to the YAML file
 * @returns {Object} Parsed YAML content as JSON object
 * @throws {Error} If file doesn't exist, is not readable, or contains invalid YAML
 */
function parseYamlFile(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read file content
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse YAML content using js-yaml
    return parseYamlContent(fileContent);

  } catch (error) {
    throw new Error(`Failed to parse YAML file ${filePath}: ${error.message}`);
  }
}

/**
 * Parses YAML content string and returns JSON object
 * @param {string} content - YAML content as string
 * @returns {Object} Parsed YAML content as JSON object
 */
function parseYamlContent(content) {
  try {
    // Use js-yaml library for proper YAML parsing
    return yaml.load(content);

  } catch (error) {
    throw new Error(`Failed to parse YAML content: ${error.message}`);
  }
}

/**
 * Basic YAML to JSON converter for simple key-value structures
 * This is a simplified parser for basic YAML files
 * @param {string} yamlContent - YAML content string
 * @returns {Object} JSON object
 */
function convertBasicYamlToJson(yamlContent) {
  const lines = yamlContent.split('\n');
  const result = {};
  let currentKey = null;
  let currentValue = '';
  let inMultiLineValue = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines and comments
    if (!line || line.startsWith('#')) {
      continue;
    }

    // Check if this is a key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1 && !inMultiLineValue) {
      // Save previous key-value pair if exists
      if (currentKey && currentValue !== '') {
        result[currentKey] = currentValue.trim();
      }

      // Start new key-value pair
      currentKey = line.substring(0, colonIndex).trim();
      const valuePart = line.substring(colonIndex + 1).trim();

      if (valuePart === '') {
        // Multi-line value starting
        currentValue = '';
        inMultiLineValue = true;
      } else {
        // Single line value
        currentValue = valuePart;
        inMultiLineValue = false;
      }
    } else if (inMultiLineValue) {
      // Continue multi-line value
      if (line.startsWith('  ') || line.startsWith('\t')) {
        // Indented line - part of multi-line value
        currentValue += (currentValue ? '\n' : '') + line;
      } else {
        // End of multi-line value
        inMultiLineValue = false;
        if (currentKey) {
          result[currentKey] = currentValue.trim();
        }
        // Try to parse this line as a new key-value pair
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
          currentKey = line.substring(0, colonIndex).trim();
          const valuePart = line.substring(colonIndex + 1).trim();
          if (valuePart === '') {
            currentValue = '';
            inMultiLineValue = true;
          } else {
            currentValue = valuePart;
          }
        }
      }
    }
  }

  // Save last key-value pair
  if (currentKey && currentValue !== '') {
    result[currentKey] = currentValue.trim();
  }

  return result;
}

/**
 * Loads and parses multiple YAML files from a directory
 * @param {string} directoryPath - Path to directory containing YAML files
 * @param {string} [fileExtension='.yml'] - File extension to look for
 * @returns {Object} Object with filename as key and parsed content as value
 */
function parseYamlDirectory(directoryPath, fileExtension = '.yml') {
  try {
    const files = fs.readdirSync(directoryPath);
    const yamlFiles = files.filter(file => file.endsWith(fileExtension));
    const result = {};

    for (const file of yamlFiles) {
      const filePath = path.join(directoryPath, file);
      const fileName = path.basename(file, fileExtension);
      result[fileName] = parseYamlFile(filePath);
    }

    return result;
  } catch (error) {
    throw new Error(`Failed to parse YAML directory ${directoryPath}: ${error.message}`);
  }
}

/**
 * Converts a JSON object back to YAML string
 * @param {Object} jsonObject - JSON object to convert
 * @param {Object} [options] - YAML dump options
 * @returns {string} YAML string representation
 */
function convertJsonToYaml(jsonObject, options = {}) {
  try {
    const defaultOptions = {
      indent: 2,
      lineWidth: 80,
      noRefs: true,
      ...options
    };

    return yaml.dump(jsonObject, defaultOptions);
  } catch (error) {
    throw new Error(`Failed to convert JSON to YAML: ${error.message}`);
  }
}

/**
 * Writes a JSON object to a YAML file
 * @param {string} filePath - Path where to write the YAML file
 * @param {Object} jsonObject - JSON object to write
 * @param {Object} [options] - YAML dump options
 * @throws {Error} If file cannot be written
 */
function writeYamlFile(filePath, jsonObject, options = {}) {
  try {
    const yamlContent = convertJsonToYaml(jsonObject, options);
    fs.writeFileSync(filePath, yamlContent, 'utf8');
  } catch (error) {
    throw new Error(`Failed to write YAML file ${filePath}: ${error.message}`);
  }
}

module.exports = {
  parseYamlFile,
  parseYamlContent,
  parseYamlDirectory,
  convertBasicYamlToJson,
  convertJsonToYaml,
  writeYamlFile
};
