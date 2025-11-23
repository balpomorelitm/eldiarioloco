import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esto es CRUCIAL para GitHub Pages. './' permite que funcione en cualquier subcarpeta
  base: './', 
})
