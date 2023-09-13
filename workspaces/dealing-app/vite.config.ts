import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    port: 6001,
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "@instruments",
      filename: "remoteEntry.js",
      remotes: {
        "@step-common-header": "http://localhost:6005/assets/remoteEntry.js"
      },
      shared: [ "react", "react-dom" ]
    })
  ],
})

