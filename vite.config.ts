import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  preview: {
    port: 5000,
    host: true,
  },
  server: {
    port: 5000,
    host: true,
  },
})
