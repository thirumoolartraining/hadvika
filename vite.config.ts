import { defineConfig, loadEnv, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// MIME fix plugin with comprehensive type handling
const viteMimeFix = (): PluginOption => {
  return {
    name: 'vite-mime-fix',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] || '';
        
        // Set MIME types based on file extension
        if (url.endsWith('.js') || url.endsWith('.mjs') || url.endsWith('.cjs')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (url.endsWith('.jsx') || url.endsWith('.tsx')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (url.endsWith('.ts')) {
          res.setHeader('Content-Type', 'application/typescript');
        } else if (url.endsWith('.json')) {
          res.setHeader('Content-Type', 'application/json');
        } else if (url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        } else if (url.endsWith('.html')) {
          res.setHeader('Content-Type', 'text/html');
        } else if (url.endsWith('.wasm')) {
          res.setHeader('Content-Type', 'application/wasm');
        }
        
        // Handle module imports
        if (req.headers.accept?.includes('application/javascript') || 
            req.headers.accept?.includes('text/javascript') ||
            req.headers.accept?.includes('module')) {
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
  const basePath = env.VITE_BASE_PATH || (isProduction ? '/' : '/');
  
  return {
    plugins: [
      react(),
      viteMimeFix()
    ],
    base: basePath,
    server: {
      port: 3001,
      strictPort: true,
      open: !process.env.CI,
      host: true,
      fs: {
        // Allow serving files from one level up from the package root
        allow: ['..']
      },
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
    define: {
      'process.env': {},
      'import.meta.env.PROD': JSON.stringify(mode === 'production'),
      'import.meta.env.DEV': JSON.stringify(mode === 'development'),
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
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
      ],
      // Ensure proper module resolution
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.wasm'],
      // Handle browser field in package.json
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
      // Ensure proper handling of .mjs files
      conditions: ['import', 'module', 'browser', 'default'],
      // Handle deep imports from node_modules
      preserveSymlinks: true
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
      manifest: true,
      modulePreload: {
        polyfill: true
      },
      target: 'esnext',
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
          }
        }
      }
    },
    
    // Preview configuration
    preview: {
      port: 3000,
      open: true,
      strictPort: true
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
