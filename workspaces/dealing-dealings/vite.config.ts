import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    port: 6002,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "@dealing-dealings",
      filename: "remoteEntry.js",
      exposes: {
        "./Dealings": "./src/modules/Dealings/Dealings",
        "./DealingsWorkflowStep": "./src/modules/DealingsWorkflowStep/DealingsWorkflowStep",
      },
      shared: [ "react", "react-dom" ]
    })
  ],
})
