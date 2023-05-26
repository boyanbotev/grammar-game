import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  // Setting 'base' to './' because
  // without this, Vite uses static paths, and we need relative for itch.io
})
