import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vinext from 'vinext'

export default defineConfig({
  plugins: [vinext(), tailwindcss()],
})
