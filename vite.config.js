// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'hello-world-vite-app', // 👈 THIS IS VERY IMPORTANT
  plugins: [react()],
})
