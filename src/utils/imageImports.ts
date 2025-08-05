// This file contains dynamic imports for all product images
// This ensures proper handling of static assets in the build process

// Helper function to import all images from a directory
const importAll = (r: any) => {
  return r.keys().map(r);
};

// Import all product images
const productImages = import.meta.glob(
  '/src/assets/images/product images/**/*.{png,jpg,jpeg,webp,avif}'
) as Record<string, () => Promise<{ default: string }>>;

// Create a mapping of image paths to their imported versions
const imageMap = new Map<string, string>();

// Preload and cache all images
Object.entries(productImages).forEach(([path, importFn]) => {
  importFn().then((module) => {
    imageMap.set(path.replace('/src/assets', ''), module.default);
  });
});

// Function to get the imported image URL
export const getImageUrl = (path: string): string => {
  // Check if the path is already in the map
  if (imageMap.has(path)) {
    return imageMap.get(path) || '';
  }
  
  // If not found, try to import it
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  try {
    const module = require(`../assets${normalizedPath}`);
    const url = module.default || module;
    imageMap.set(path, url);
    return url;
  } catch (e) {
    console.error(`Failed to load image: ${path}`, e);
    return ''; // Return empty string if image fails to load
  }
};

export default imageMap;
