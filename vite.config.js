import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ej1: 'ej1.html',
        ej2: 'ej2.html',
        ej3: 'ej3.html',
        ej4: 'ej4.html',
        ej5: 'ej5.html',
        ej6: 'ej6.html',
        ej7: 'ej7.html',
        ej8: 'ej8.html',
        ej9: 'ej9.html',
      }
    }
  }
})
