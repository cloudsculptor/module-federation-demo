import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import {DealingsLoader} from "./src/modules/Dealings/DealingsLoader";

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
        "./DealingsLoader": "./src/modules/Dealings/DealingsLoader",
        "./DealingWorkflowStep": "./src/modules/DealingWorkflowStep/DealingWorkflowStep",
        "./DealingsListWorkflowStep": "./src/modules/DealingsListWorkflowStep/DealingsListWorkflowStep",
      },
      shared: [ "react", "react-dom", "react-router-dom" ]
    })
  ],
})
