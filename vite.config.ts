import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';

  return {
    plugins: [
      react({
        jsxImportSource: 'react',
        babel: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', {
              runtime: 'automatic',
              importSource: 'react'
            }]
          ]
        }
      })
    ],
    define: {
      'process.env': {},
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VITE_BASE_PATH': JSON.stringify(env.VITE_BASE_PATH || '/')
    },
    base: env.VITE_BASE_PATH || '/',
    publicDir: 'public',
    server: {
      port: 3001,
      strictPort: true,
      open: !process.env.CI,
      host: true,
      fs: {
        allow: ['..']
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProduction,
      minify: isProduction ? 'esbuild' : false,
      // Ensure all static assets are copied to the dist directory
      assetsInlineLimit: 0, // Disable inlining of assets to ensure all files are copied
      copyPublicDir: true,
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor_react';
              }
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            const ext = name.split('.').pop()?.toLowerCase() || '';
            
            // Preserve product image paths
            if (name.includes('product images')) {
              const pathMatch = name.match(/product images[\\/]([^\\/]+[\\/][^\\/]+\.[^.]+)$/);
              if (pathMatch) {
                return `assets/product-images/${pathMatch[1].replace(/\\/g, '/')}`;
              }
            }
            
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            
            if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    },
    preview: {
      port: 3001,
      strictPort: true
    }
  };
});
