// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lescahiersdupraticien.com',
  server: {
    host: true, // Écoute sur 0.0.0.0 pour tester sur téléphone / réseau local
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
