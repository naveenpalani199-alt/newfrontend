import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/newfrontend/REACT/Day2/dist/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
})
