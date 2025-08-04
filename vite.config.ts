import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: env.VITE_PUBLIC_URL || '/',
    
    // Resolve configuration
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./public', import.meta.url))
      }
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['lucide-react']
          },
          // Ensure proper chunk naming
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      },
      // Ensure proper module type in output
      manifest: true,
      // Fix for MIME type issues
      modulePreload: {
        polyfill: true
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
