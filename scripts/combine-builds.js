const fs = require('fs');
const path = require('path');

/**
 * Combines Next.js and Docusaurus builds for GitHub Pages deployment
 * - Next.js builds to /out
 * - Docusaurus builds to /blog/build
 * - This script copies Docusaurus build to /out/blog
 */

const portfolioOut = path.join(__dirname, '..', 'out');
const blogBuild = path.join(__dirname, '..', 'blog', 'build');
const blogOut = path.join(portfolioOut, 'blog');

console.log('🔄 Combining builds...');
console.log(`Portfolio: ${portfolioOut}`);
console.log(`Blog source: ${blogBuild}`);
console.log(`Blog destination: ${blogOut}`);

// Check if portfolio build exists
if (!fs.existsSync(portfolioOut)) {
  console.error('❌ Portfolio build not found at /out');
  console.error('   Run: npm run build:portfolio first');
  process.exit(1);
}

// Check if blog build exists
if (!fs.existsSync(blogBuild)) {
  console.error('❌ Blog build not found at /blog/build');
  console.error('   Run: npm run build:blog first');
  process.exit(1);
}

// Remove existing blog folder if it exists
if (fs.existsSync(blogOut)) {
  console.log('🗑️  Removing existing /out/blog...');
  fs.rmSync(blogOut, { recursive: true, force: true });
}

// Copy blog build to /out/blog
console.log('📦 Copying blog build to /out/blog...');
copyRecursive(blogBuild, blogOut);

console.log('✅ Build combination complete!');
console.log('');
console.log('📁 Output structure:');
console.log('   /out/              - Portfolio (Next.js)');
console.log('   /out/blog/         - Blog (Docusaurus)');
console.log('');
console.log('🚀 Ready to deploy!');

/**
 * Recursively copy directory
 */
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}
