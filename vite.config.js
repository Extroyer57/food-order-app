// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // this should be fine for default Vite
  build: {
    outDir: 'dist',
  },
});
