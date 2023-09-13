import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    port: 6004,
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "@step",
      filename: "remoteEntry.js",
      exposes: {
        "./StepHeader": "./src/modules/StepHeader/StepHeader",
      },
      shared: [ "react", "react-dom" ]
    })
  ],
})
