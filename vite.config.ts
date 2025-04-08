import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      path: "path-browserify", // Add this alias
    },
  },
  build: {
    assetsInlineLimit: 0, // Ensure dict files are not inlined
  },
})


