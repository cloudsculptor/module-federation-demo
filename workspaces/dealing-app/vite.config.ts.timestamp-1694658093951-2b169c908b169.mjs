// vite.config.ts
import { defineConfig } from "file:///C:/Users/RicThomas/code/module-federation-demo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/RicThomas/code/module-federation-demo/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///C:/Users/RicThomas/code/module-federation-demo/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  preview: {
    port: 6001,
    strictPort: true
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  plugins: [
    react(),
    federation({
      name: "@instruments",
      filename: "remoteEntry.js",
      remotes: {
        "@step-common-header": "http://localhost:6005/assets/remoteEntry.js",
        "@dealing-dealings": "http://localhost:6002/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSaWNUaG9tYXNcXFxcY29kZVxcXFxtb2R1bGUtZmVkZXJhdGlvbi1kZW1vXFxcXHdvcmtzcGFjZXNcXFxcZGVhbGluZy1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFJpY1Rob21hc1xcXFxjb2RlXFxcXG1vZHVsZS1mZWRlcmF0aW9uLWRlbW9cXFxcd29ya3NwYWNlc1xcXFxkZWFsaW5nLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUmljVGhvbWFzL2NvZGUvbW9kdWxlLWZlZGVyYXRpb24tZGVtby93b3Jrc3BhY2VzL2RlYWxpbmctYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNjAwMSxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJAaW5zdHJ1bWVudHNcIixcbiAgICAgIGZpbGVuYW1lOiBcInJlbW90ZUVudHJ5LmpzXCIsXG4gICAgICByZW1vdGVzOiB7XG4gICAgICAgIFwiQHN0ZXAtY29tbW9uLWhlYWRlclwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwNS9hc3NldHMvcmVtb3RlRW50cnkuanNcIixcbiAgICAgICAgXCJAZGVhbGluZy1kZWFsaW5nc1wiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMi9hc3NldHMvcmVtb3RlRW50cnkuanNcIlxuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWyBcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIgXVxuICAgIH0pXG4gIF0sXG59KVxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStZLFNBQVMsb0JBQW9CO0FBQzVhLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCx1QkFBdUI7QUFBQSxRQUN2QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsUUFBUSxDQUFFLFNBQVMsV0FBWTtBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
