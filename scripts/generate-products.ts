import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the original products file
const productsPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
// Path to the new products file
const newProductsPath = path.join(__dirname, '..', 'src', 'data', 'products-new.ts');

// Read the original products file
const productsContent = await fs.readFile(productsPath, 'utf-8');

// Extract the products array using a simple regex
const productsMatch = productsContent.match(/export const products: Product\[\] = (\[.*?\]);/s);

if (!productsMatch) {
  console.error('Could not find products array in the original file');
  process.exit(1);
}

// Parse the products array
const products = eval(productsMatch[1]);

// Function to convert Windows paths to Unix-style paths
const toUnixPath = (p: string) => p.replace(/\\/g, '/');

// Process each product's images
const processedProducts = products.map((product: any) => {
  const processedImages = product.images.map((imgPath: string) => {
    // Convert to relative path from src/assets
    let relativePath = imgPath.replace(/^\//, ''); // Remove leading slash
    relativePath = `src/assets/${relativePath}`;
    
    // Convert to Unix-style path for consistency
    relativePath = toUnixPath(relativePath);
    
    // Create import.meta.glob compatible path
    return `new URL('${relativePath}', import.meta.url).href`;
  });
  
  return {
    ...product,
    images: processedImages
  };
});

// Generate the new file content
const newFileContent = `import { Product } from '../types';

// This file is auto-generated. Do not edit manually.
// Run 'npm run generate-products' to update.

export const products: Product[] = ${JSON.stringify(processedProducts, null, 2)};
`;

// Write the new file
await fs.writeFile(newProductsPath, newFileContent);

console.log(`Successfully generated ${newProductsPath}`);
console.log('Please review the changes and rename the file to products.ts if everything looks good.');
