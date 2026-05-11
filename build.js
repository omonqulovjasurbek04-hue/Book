/**
 * Build script: Frontend ni build qilib Backend ichiga joylashtiradi
 * 
 * Bu script:
 * 1. Frontend ni Vite orqali build qiladi
 * 2. Built index.html dan Blade template yaratadi
 * 3. Static assets (rasmlar) ni Backend/public ga ko'chiradi
 * 
 * Ishlatish: node build.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const FRONTEND = path.join(ROOT, 'Frontend');
const BACKEND = path.join(ROOT, 'Backend');
const BUILD_DIR = path.join(BACKEND, 'public', 'build');
const VIEWS_DIR = path.join(BACKEND, 'resources', 'views');
const BACKEND_PUBLIC = path.join(BACKEND, 'public');

console.log('🔨 Building Frontend...');

// 1. Build the frontend
try {
  execSync('npm run build', { cwd: FRONTEND, stdio: 'inherit' });
  console.log('✅ Frontend build successful!');
} catch (err) {
  console.error('❌ Frontend build failed!', err.message);
  process.exit(1);
}

// 2. Copy static assets from Frontend/public/ to Backend/public/
const frontendPublic = path.join(FRONTEND, 'public');
if (fs.existsSync(frontendPublic)) {
  copyDirRecursive(frontendPublic, BACKEND_PUBLIC);
  console.log('✅ Static assets copied to Backend/public/');
}

// 3. Generate Blade template from built index.html
const builtIndexPath = path.join(BUILD_DIR, 'index.html');
if (fs.existsSync(builtIndexPath)) {
  let html = fs.readFileSync(builtIndexPath, 'utf8');
  
  // Fix asset paths: change relative paths to /build/ prefix
  html = html.replace(/(href|src)="\/assets\//g, '$1="/build/assets/');
  html = html.replace(/(href|src)="assets\//g, '$1="/build/assets/');
  
  // Fix public assets paths  
  html = html.replace(/\/public\/assets\//g, '/assets/');
  html = html.replace(/\.\/public\/assets\//g, '/assets/');
  
  // Fix src/assets paths
  html = html.replace(/\/src\/assets\//g, '/build/assets/');
  
  // Write blade template
  const bladeContent = `{{-- AUTO-GENERATED: Do not edit manually. Run "node build.js" to regenerate --}}\n<!DOCTYPE html>\n` + html.replace('<!DOCTYPE html>', '').replace('<!doctype html>', '');
  
  fs.writeFileSync(path.join(VIEWS_DIR, 'app.blade.php'), bladeContent, 'utf8');
  console.log('✅ Blade template generated: resources/views/app.blade.php');
} else {
  console.error('❌ Built index.html not found at:', builtIndexPath);
  process.exit(1);
}

console.log('');
console.log('🎉 Build complete! Now run:');
console.log('   cd Backend && php artisan serve');
console.log('   Then open: http://127.0.0.1:8000');

// --- Helper ---
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      // Don't overwrite index.php, .htaccess, etc.
      if (['index.php', '.htaccess', 'robots.txt', 'favicon.ico'].includes(entry.name)) {
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
