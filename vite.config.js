import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pocket-full-frame-guide/',
  plugins: [react()],
})
