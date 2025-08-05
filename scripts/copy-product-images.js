import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const srcDir = path.join(__dirname, '..', 'public', 'images', 'product images');
const destDir = path.join(__dirname, '..', 'public', 'product-images');

// Ensure destination directory exists
fs.ensureDirSync(destDir);

// Copy all product images to the new location
fs.copySync(srcDir, destDir, { overwrite: true });

console.log('Product images copied successfully!');
