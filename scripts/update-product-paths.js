import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the products data file
const productsPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');

// Read the products file
let content = fs.readFileSync(productsPath, 'utf-8');

// Update image paths to use the new location with correct file structure
const updatedContent = content.replace(
  /"(\/images\/product images\/[^/]+\/)(\d+)\.(png|jpg|jpeg|gif|svg|webp|avif)"/g,
  (match, p1, p2, p3) => `"/product-images/${p1.split('/').filter(Boolean).pop()}/${p2}.${p3}"`
);

// Write the updated content back to the file
fs.writeFileSync(productsPath, updatedContent, 'utf-8');

console.log('Product image paths updated successfully!');
