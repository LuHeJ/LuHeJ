/**
 * @file Vite 构建配置
 * @description Lumora 项目的 Vite 构建配置。
 *              - @vitejs/plugin-react：React Fast Refresh + JSX 自动转换
 *              - @tailwindcss/vite：Tailwind CSS v4 集成（Vite 原生插件，
 *                采用 CSS-first 配置 + 自动内容检测，无需额外配置文件）
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
})
