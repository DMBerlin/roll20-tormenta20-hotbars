# 🚀 GitHub Workflows Documentation

This document explains the GitHub Actions workflows configured for the Tormenta20 Hotbars project.

## 📋 Overview

The project has several workflows that handle different aspects of the release process:

1. **Auto Draft Release** - Automatically creates draft releases on main branch pushes
2. **Manual Release** - Manual trigger for creating releases
3. **Tag Release** - Creates releases when tags are pushed
4. **Deploy** - Deploys to GitHub Pages
5. **Release Fallback** - Manual fallback for releases

## 🔄 Workflow Details

### 1. Auto Draft Release (`auto-release-draft.yml`)

**Trigger:** Push to `main` branch (ignores documentation changes)

**What it does:**
- Automatically detects the next version number based on latest tag
- Extracts CHANGELOG content for the latest version
- Builds the extension
- Creates a draft release with title "Release/[version]"
- Uses CHANGELOG content as the release description

**Features:**
- ✅ Automatic version detection
- ✅ CHANGELOG integration
- ✅ Draft release (not published)
- ✅ Ignores documentation-only changes

### 2. Manual Release (`manual-release.yml`)

**Trigger:** Manual workflow dispatch

**Inputs:**
- `version`: Version to create release for (e.g., v0.4.4)
- `use_changelog`: Whether to use CHANGELOG content

**What it does:**
- Creates a release for a specific version
- Optionally extracts CHANGELOG content
- Builds and packages the extension
- Creates a draft release

### 3. Tag Release (`release.yml`)

**Trigger:** Push of tags starting with 'v'

**What it does:**
- Builds the extension
- Creates a published release (not draft)
- Uses the tag as the version
- Includes installation instructions

### 4. Deploy (`deploy.yml`)

**Trigger:** Push to `main` branch

**What it does:**
- Builds the extension
- Updates landing page
- Deploys to GitHub Pages

### 5. Release Fallback (`release-fallback.yml`)

**Trigger:** Manual workflow dispatch

**What it does:**
- Creates release packages for manual upload
- Provides instructions for manual release creation

## 🎯 Your Desired Workflow

Based on your requirements, the **Auto Draft Release** workflow is exactly what you need:

### ✅ **What it provides:**
- **Triggers on main branch pushes** ✅
- **Creates draft releases** ✅
- **Title format: "Release/[tag]"** ✅
- **Description from CHANGELOG** ✅
- **Automatic version detection** ✅

### 🔧 **How it works:**

1. **Push to main** → Workflow triggers
2. **Detects next version** → Based on latest tag (e.g., v0.4.3 → v0.4.4)
3. **Extracts CHANGELOG** → Gets content for the latest version
4. **Builds extension** → Creates the package
5. **Creates draft release** → With title "Release/v0.4.4" and CHANGELOG content

## 🚀 Usage

### Automatic Release Drafting

Simply push to the `main` branch:

```bash
git add .
git commit -m "feat: new feature"
git push origin main
```

The workflow will:
1. Detect the next version (e.g., v0.4.4)
2. Extract CHANGELOG content for that version
3. Create a draft release titled "Release/v0.4.4"
4. Use the CHANGELOG content as the description

### Manual Release Creation

Go to GitHub Actions → Manual Release → Run workflow:

1. Enter the version (e.g., v0.4.4)
2. Choose whether to use CHANGELOG content
3. Click "Run workflow"

## 📝 CHANGELOG Integration

The workflows automatically extract CHANGELOG content using this logic:

```bash
# Finds the first version section (most recent)
awk '/^## \[.*\]/{if(found) exit; found=1; next} found' CHANGELOG.md
```

**Example CHANGELOG structure:**
```markdown
## [0.4.4] - 2025-10-04

### Added
- New feature 1
- New feature 2

### Fixed
- Bug fix 1
```

**Extracted content:**
```markdown
### Added
- New feature 1
- New feature 2

### Fixed
- Bug fix 1
```

## 🔧 Configuration

### Workflow Files Location
```
.github/workflows/
├── auto-release-draft.yml    # Auto draft on main push
├── manual-release.yml        # Manual release creation
├── release.yml              # Tag-based releases
├── deploy.yml                # GitHub Pages deployment
└── release-fallback.yml     # Manual fallback
```

### Required Secrets
- `GITHUB_TOKEN` (automatically provided)

### Node.js Version
- **Node.js**: 22.15.1
- **pnpm**: 10.15.0

## 🐛 Troubleshooting

### Workflow Not Triggering
1. Check if the push was to the `main` branch
2. Verify the workflow file is in `.github/workflows/`
3. Check GitHub Actions tab for errors

### CHANGELOG Not Extracted
1. Ensure CHANGELOG.md exists in the root
2. Check the version format in CHANGELOG.md
3. Verify the version section starts with `## [version]`

### Build Failures
1. Check if all dependencies are installed
2. Verify the build script works locally
3. Check the workflow logs for specific errors

### Release Not Created
1. Check if the tag already exists
2. Verify GitHub token permissions
3. Check the workflow logs for API errors

## 📊 Workflow Status

You can monitor workflow status at:
- **GitHub Actions**: `https://github.com/DMBerlin/roll20-tormenta20-hotbars/actions`
- **Releases**: `https://github.com/DMBerlin/roll20-tormenta20-hotbars/releases`

## 🎉 Expected Behavior

When you push to main:

1. **Workflow triggers** automatically
2. **Builds extension** successfully
3. **Creates draft release** with:
   - Title: "Release/v0.4.4"
   - Description: CHANGELOG content
   - Package: tormenta20-hotbars-v0.4.4.zip
4. **You can then**:
   - Review the draft release
   - Edit the description if needed
   - Publish when ready

This gives you exactly what you wanted: automatic draft releases on main branch pushes with CHANGELOG integration! 🚀
