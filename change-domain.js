#!/usr/bin/env node

/**
 * Script to easily change the deployment domain for the portfolio website
 * Usage: node change-domain.js [new-domain]
 * Example: node change-domain.js https://yashborse.tech
 * Example: node change-domain.js https://yashborse4.github.io/Portfolio-Website/
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const newDomain = args[0];

if (!newDomain) {
  console.log('Usage: node change-domain.js [new-domain]');
  console.log('Example: node change-domain.js https://yashborse.tech');
  console.log('Example: node change-domain.js https://yashborse4.github.io/Portfolio-Website/');
  process.exit(1);
}

// Validate URL format
try {
  new URL(newDomain);
} catch (err) {
  console.error('Error: Invalid URL format');
  process.exit(1);
}

const packageJsonPath = path.join(__dirname, 'package.json');

// Read package.json
let packageJson;
try {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(packageJsonContent);
} catch (err) {
  console.error('Error reading package.json:', err.message);
  process.exit(1);
}

// Update homepage field
const oldDomain = packageJson.homepage;
packageJson.homepage = newDomain;

// Write back to package.json
try {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`✅ Domain changed successfully!`);
  console.log(`   Old: ${oldDomain}`);
  console.log(`   New: ${newDomain}`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run build (to test the build)');
  console.log('2. Run: npm run deploy (to deploy to the new domain)');
  console.log('3. Commit and push changes: git add . && git commit -m "Update domain" && git push');
  
  // Special instructions for GitHub Pages
  if (newDomain.includes('github.io')) {
    console.log('');
    console.log('📝 GitHub Pages Notes:');
    console.log('   - Make sure GitHub Pages is enabled in repository settings');
    console.log('   - Set source to "Deploy from a branch" > "gh-pages" branch');
  } else {
    console.log('');
    console.log('📝 Custom Domain Notes:');
    console.log('   - Make sure DNS is configured to point to GitHub Pages');
    console.log('   - Add CNAME file with your domain in the repository');
    console.log('   - Configure custom domain in GitHub Pages settings');
  }
} catch (err) {
  console.error('Error writing package.json:', err.message);
  process.exit(1);
}
