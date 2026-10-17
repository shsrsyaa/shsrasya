import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          about: path.resolve(import.meta.dirname, 'about.html'),
          focus: path.resolve(import.meta.dirname, 'focus.html'),
          education: path.resolve(import.meta.dirname, 'education.html'),
          experience: path.resolve(import.meta.dirname, 'experience.html'),
          skills: path.resolve(import.meta.dirname, 'skills.html'),
          connect: path.resolve(import.meta.dirname, 'connect.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true,

      hmr: process.env.DISABLE_HMR !== 'true',
    
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
