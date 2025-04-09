import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {exportType: "default", ref: true, svgo: false, titleProp: true}, include: "**/*.svg",
    }),
  ],
    server: {
    open: true, 
    port: 5173, 
  },
})
