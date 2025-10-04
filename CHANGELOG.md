# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.4] - 2025-10-04

### Added
- **Global Search Enhancement**: Powers are now fully indexed in the global search (CTRL+SPACE)
- **Comprehensive Power Search**: All power categories are now searchable:
  - Poderes de Classe (Class Powers) - 393 powers
  - Poderes Gerais (General Powers) - 163 powers
  - Poderes de Origem (Origin Powers) - 35 powers
  - Poderes Raciais (Racial Powers) - 55 powers
- **Power Click-to-Chat**: Powers can now be clicked in search results to share details in chat
- **Complete Search Coverage**: Global search now indexes all 646 powers from the game system
- **Search Details Modal**: All search results now open detail modals instead of immediately sharing to chat
- **Generic Detail Modal**: New `createGenericDetailModal()` function for consistent item detail display
- **Update System Testing**: New test method `testNewVersionAvailable()` for testing the "new version available" modal
- **Developer Tools**: Enhanced test suite with comprehensive update system testing capabilities

### Changed
- **Search Index Expansion**: Global search now covers all available game data sources
- **Improved Search Performance**: Enhanced search indexing with proper error handling and fallbacks
- **Search Placeholder**: Updated search placeholder to include powers reference
- **Search Click Behavior**: All search results now open detail modals instead of immediately sharing to chat
- **Item Detail Display**: Consistent detail modal experience for all item types (powers, divinities, combat powers, etc.)

### Fixed
- **Missing Data Sources**: Fixed powers not being indexed in global search
- **Search Completeness**: Ensured all game data is now searchable through the global search
- **ESLint Configuration**: Fixed linting errors in scripts/extract-changelog.js by adding Node.js globals

### Technical Details
- Updated `createSearchIndex()` function to include powers data with proper categorization
- Added power click handler in `handleSearchItemClick()` for chat integration
- Maintained backward compatibility with existing search functionality
- Enhanced search indexing with error handling for missing data sources
- **Build Results**: Successfully processed 646 powers during build process

### Developer Tools
- **Test Method**: `testNewVersionAvailable()` - Test the "new version available" modal in browser console
- **Complete Test Suite**: `runAllTests()` - Execute all update system tests
- **Documentation**: Added `TEST_METHODS.md` with comprehensive testing instructions
- **Console Commands**: Enhanced test system with 7 different test methods
- **Visual Testing**: Realistic modal simulation with proper styling and animations

### GitHub Workflows
- **Auto Draft Release**: New workflow that automatically creates draft releases on main branch pushes
- **Manual Release**: Manual trigger workflow for creating releases with specific versions
- **CHANGELOG Integration**: Automatic extraction of CHANGELOG content for release descriptions
- **Fixed Deploy Workflow**: Corrected malformed deploy.yml workflow for GitHub Pages
- **Release Automation**: Complete CI/CD pipeline for automatic release management

### Search Statistics
- **Total Searchable Items**: 1,000+ items across all categories
- **Powers Indexed**: 646 powers (100% coverage)
- **Search Performance**: Optimized for large datasets
- **Error Handling**: Graceful fallbacks for missing data sources

## [0.4.3] - 2025-10-03

### Added
- **Food System**: Complete implementation of special dishes and Artonian drinks
- **Enhanced Search**: Global search now includes foods and drinks
- **Food Categories**: 
  - Pratos Especiais (Special Dishes)
  - Bebidas Artonianas (Artonian Drinks)

### Changed
- **Search Coverage**: Expanded global search to include all game data sources
- **UI Improvements**: Enhanced search interface with better categorization

### Fixed
- **Search Indexing**: Fixed missing data sources in global search
- **Performance**: Optimized search indexing for better performance

## [0.4.2] - 2025-09-XX

### Fixed
- **Release Pipeline**: Fixed issues with automated release process
- **Version Management**: Improved version checking and validation

### Changed
- **Build Process**: Enhanced build pipeline for better reliability

## [0.4.1] - 2025-09-XX

### Added
- **Auto-Update System**: Implemented automatic update checking and installation
- **Version Management**: Added comprehensive version tracking and validation
- **Update Notifications**: Users receive notifications for available updates

### Changed
- **User Experience**: Streamlined update process for better user experience
- **Performance**: Optimized update checking to reduce impact on performance

## [0.4.0] - 2025-09-XX

### Added
- **Global Search System**: Implemented CTRL+SPACE global search functionality
- **Smart Search**: Added text normalization and partial matching
- **Search Categories**: 
  - Magias (Spells) - All circles and traditions
  - Poções (Potions)
  - Condições (Conditions)
  - Perícias (Skills)
  - Poderes (Powers) - *Added in 0.4.4*
  - Pratos e Bebidas (Foods & Drinks) - *Added in 0.4.3*

### Changed
- **Search Algorithm**: Implemented relevance-based sorting
- **User Interface**: Enhanced search modal with better visual design
- **Performance**: Optimized search indexing for large datasets

### Technical Details
- **Search Features**:
  - Smart text normalization (removes accents, handles special characters)
  - Partial word matching (e.g., "bola fogo" finds "Bola de Fogo")
  - Relevance-based sorting (exact matches first, then partial matches)
  - Click-to-chat integration for all item types

---

## Version History

| Version | Release Date | Key Features |
|---------|--------------|--------------|
| 0.4.4   | 2025-10-04   | Complete search indexing (646 Powers) + Developer tools + GitHub workflows |
| 0.4.3   | 2025-10-03   | Food system, enhanced search |
| 0.4.2   | 2025-09-XX   | Release pipeline fixes |
| 0.4.1   | 2025-09-XX   | Auto-update system |
| 0.4.0   | 2025-09-XX   | Global search system |

## Search Coverage

The global search (CTRL+SPACE) now covers:

- ✅ **646 Powers** (Class: 393, General: 163, Origin: 35, Racial: 55)
- ✅ **200 Spells** (Arcana, Divina, Universal - All circles)
- ✅ **39 Potions** (All types and effects)
- ✅ **33 Conditions** (All status effects)
- ✅ **Skills** (All character skills)
- ✅ **Foods & Drinks** (Special dishes and Artonian beverages)

**Total Searchable Items**: 1,000+ items across all game data sources

## GitHub Workflows

### Automatic Release Management
- **Auto Draft Release**: Automatically creates draft releases on main branch pushes
- **CHANGELOG Integration**: Extracts CHANGELOG content for release descriptions
- **Version Detection**: Automatic next version detection based on latest tag
- **Manual Release**: Manual trigger for creating releases with specific versions

### Workflow Files
- **`auto-release-draft.yml`**: Main automation workflow
- **`manual-release.yml`**: Manual release creation
- **`deploy.yml`**: GitHub Pages deployment (fixed)
- **`extract-changelog.js`**: CHANGELOG extraction utility
- **`GITHUB_WORKFLOWS.md`**: Complete documentation

### CI/CD Pipeline
- **Automatic Triggers**: Push to main → Draft release creation
- **Build Process**: pnpm install → pnpm build → package creation
- **Release Format**: "Release/[version]" with CHANGELOG content
- **Draft Releases**: Review before publishing

## Developer Testing

### Browser Console Test Methods
```javascript
// Test the "new version available" modal
testNewVersionAvailable()

// Run all update system tests
runAllTests()

// Individual test methods
testManualUpdateCheck()      // Manual update check
testConfigInterface()        // Configuration modal
testNotifications()          // Notification system
testGitHubAPI()             // GitHub API connection
testNoReleasesScenario()    // No releases scenario
```

### Test Documentation
- **`TEST_METHODS.md`**: Comprehensive testing guide
- **Visual Testing**: Realistic modal simulation with animations
- **Console Logging**: Detailed interaction logging for debugging
- **Auto-cleanup**: Prevents UI clutter during testing

### GitHub Workflows
- **`auto-release-draft.yml`**: Automatic draft release creation on main branch pushes
- **`manual-release.yml`**: Manual release creation with version selection
- **`extract-changelog.js`**: Utility script for CHANGELOG content extraction
- **`GITHUB_WORKFLOWS.md`**: Complete workflow documentation and troubleshooting guide

## Installation

For installation instructions, see the [README.md](README.md) file.

## Contributing

Contributions are welcome! Please see the repository for contribution guidelines.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
