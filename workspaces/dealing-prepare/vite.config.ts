import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    port: 6004,
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
      name: "@dealing-prepare",
      filename: "remoteEntry.js",
      exposes: {
        "./PrepareInstrument": "./src/modules/PrepareInstrument/PrepareInstrument",
        "./PrepareInstrumentLoader": "./src/modules/PrepareInstrument/PrepareInstrumentLoader",
      },
      shared: [ "react", "react-dom", "react-router-dom" ]
    })
  ],
})