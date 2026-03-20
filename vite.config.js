import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Tu página principal
        main: resolve(__dirname, 'index.html'),
        // Tu nueva página de proyectos
        proyectos: resolve(__dirname, 'pages/bienvenida.html')
      }
    }
  }
})