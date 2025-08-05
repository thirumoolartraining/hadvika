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
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.svg', '**/*.avif'],
    // Server configuration
    server: {
      port: 3001,
      strictPort: true,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
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
      // Static asset handling
      assetsInlineLimit: 4096, // 4kb - files smaller than this will be inlined as base64
      copyPublicDir: true,
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) {
                return 'vendor_lucide';
              }
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.');
            const ext = info?.[info.length - 1];
            
            if (!ext) return 'assets/[name]-[hash][extname]';
            
            // Font files
            if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name][extname]';
            }
            
            // Image files
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
              return 'assets/images/[name][extname]';
            }
            
            // CSS files
            if (ext === 'css') {
              return 'assets/css/[name]-[hash][extname]';
            }
            
            // Other assets
            return 'assets/[name]-[hash][extname]';
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
    preview: {
      port: 3001,
      strictPort: true
    }
  };
});
