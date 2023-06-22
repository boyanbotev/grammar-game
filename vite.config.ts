import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import path from 'path';

//const isProduction = process.argv.includes('production');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  // Setting 'base' to './' because
  // without this, Vite uses static paths, and we need relative for itch.io
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/tests/setup.js',
  // },

  // WHY DOESN'T THIS WORK????
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, 'src/assets'),
  //   }
  // }


});
