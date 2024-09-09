import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open: true,
    port: 3001,
    proxy:{
      '/vacation': {
        target: 'http://10.153.0.51:8080',
        changeOrigin: true,
      }
    }
  }
})
