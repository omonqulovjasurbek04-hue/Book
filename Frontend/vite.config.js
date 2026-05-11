import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const API_BASE_URL = process.env.VITE_API_URL || 'http://127.0.0.1:8000'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  define: {
    __API_BASE_URL__: JSON.stringify(API_BASE_URL),
  },
  build: {
    outDir: '../Backend/public/build',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: API_BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      }
    },
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['*'],
    }
  }
})