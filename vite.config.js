import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Ensure this is set correctly for your deployment needs
  plugins: [react()],
})

