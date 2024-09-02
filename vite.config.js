import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/IPFS_upload_file_Demo/',
  plugins: [react()],
})
