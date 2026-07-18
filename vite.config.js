import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      // 使用完整版 Vue（含模板编译器），否则组件内 template 字符串无法编译
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
