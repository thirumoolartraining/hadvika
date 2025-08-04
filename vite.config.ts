import { defineConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// MIME fix plugin
const viteMimeFix = (): PluginOption => {
  return {
    name: 'vite-mime-fix',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        }
        next();
      });
    },
    configResolved(config) {
      if (config.command === 'build') {
        // Ensure proper MIME types in production build
        config.build.rollupOptions = {
          ...config.build.rollupOptions,
          output: {
            ...(config.build.rollupOptions?.output || {}),
            chunkFileNames: 'assets/js/[name].[hash].js',
            entryFileNames: 'assets/js/[name].[hash].js',
            assetFileNames: (assetInfo) => {
              const name = assetInfo.name || '';
              const ext = name.split('.').pop()?.toLowerCase() || '';
              if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
                return 'assets/images/[name].[hash][extname]';
              }
              if (ext === 'css') {
                return 'assets/css/[name].[hash][extname]';
              }
              if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
                return 'assets/fonts/[name].[hash][extname]';
              }
              return 'assets/[name].[hash][extname]';
            }
          }
        };
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  const isProduction = mode === 'production';
  const basePath = env.VITE_BASE_PATH || (isProduction ? './' : '/');
  
  return {
    plugins: [
      react(),
      viteMimeFix()
    ],
    base: basePath,
    
    // Resolve configuration
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
        {
          find: '~',
          replacement: fileURLToPath(new URL('./public', import.meta.url))
        }
      ]
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: isProduction ? 'esbuild' : false,
      cssCodeSplit: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1600,
      // Ensure proper module type in output
      manifest: true,
      // Fix for MIME type issues
      modulePreload: {
        polyfill: true
      },
      // Ensure proper module type
      target: 'esnext',
      // Ensure proper module type for dynamic imports
      commonjsOptions: {
        transformMixedEsModules: true
      },
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                return 'vendor_react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor_lucide';
              }
              return 'vendor';
            }
          },
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            const ext = name.split('.').pop()?.toLowerCase() || '';
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (ext === 'css') {
              return 'assets/css/[name].[hash][extname]';
            }
            if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      }
    },
    
    // Server configuration
    server: {
      port: 3000,
      open: true,
      strictPort: true,
      host: true
    },
    
    // Preview configuration
    preview: {
      port: 3000,
      open: true,
      strictPort: true
    },
    
    // Environment variables
    define: {
      'import.meta.env.PROD': JSON.stringify(mode === 'production'),
      'import.meta.env.DEV': JSON.stringify(mode === 'development'),
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['lucide-react']
    },
    
    // CSS configuration
    css: {
      devSourcemap: false,
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    }
  };
});
