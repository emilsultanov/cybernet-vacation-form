import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open: false,
    host: true,
    port: 3001,
    proxy:{
      '/vacation': {
        target: 'http://backend:8080',
        changeOrigin: true,
      }
    }
  },

  preview: {
    host: '127.0.0.1',  // Listen on all interfaces for external access
    port: 4173,       // Vite default port
    open: false       // Automatically open browser
  }
})
