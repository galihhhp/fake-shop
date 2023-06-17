import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      routes: "/src/routes",
      assets: "/src/assets",
      store: "/src/store",
      utils: "/src/utils",
      types: "/src/types",
      hooks: "/src/hooks",
    },
  },
})
