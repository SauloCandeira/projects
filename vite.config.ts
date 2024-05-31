import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects' // Altere <REPO> para o nome do seu repositório, se estiver implantando no GitHub Pages sob um subdiretório
});
