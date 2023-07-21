import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/eminari_tours/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/sass/_colors.scss" as *;`,
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [react()],
})
