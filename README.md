<p align="center">
  <img src="https://img.shields.io/badge/纯手搓-HTML%20%2B%20CSS%20%2B%20JS-e53935?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/框架-Vue%203-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/构建-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/字体-VT323-orange?style=for-the-badge&logo=googlefonts&logoColor=white" />
  <img src="https://img.shields.io/badge/动画-Canvas%202D-000?style=for-the-badge" />
</p>

<h1 align="center">LuHe / 鹿禾 · 个人主页</h1>

<p align="center">
  暗黑红调 · Canvas 粒子 · 毛玻璃 UI · Vue 3 SFC · Vite 构建
</p>

<p align="center">
  <b>🇨🇳 纯手搓 · 欢迎 Star / Fork / 二创</b>
</p>

---

## 预览

> 黑红暗色调 · 双图融合背景 · Canvas 粒子连线 · VT323 像素字体 · 毛玻璃欢迎弹窗 → Vue 3 全屏内容区

---

## 🗺️ 文件结构

```
LuHeJ/
├── index.html          ← Vite 入口
├── standalone.html     ← 双击即开（全内联，零依赖本机文件）
├── index.css           ← 全部样式（~1900 行）
├── index.js            ← 全部逻辑：粒子 / 音频 / 手势 / CDN Vue App
├── src/
│   ├── App.vue         ← Vue 3 SFC 主组件
│   └── main.js         ← createApp 入口
├── package.json        ← Vite + Vue 3 依赖
├── vite.config.js      ← Vite 配置
├── g1.jpg / g2.jpg     ← 左 / 右背景图（clip-path 对角线融合）
├── g3.jpg              ← Vue 覆盖层背景图
├── BGM1.mp3            ← 背景音乐（可选）
└── README.md
```

---

## 🧩 架构

```
┌─────────────────────────────────────────────┐
│  index.html                                 │
│                                             │
│   index.css — 主题系统                     │
│     ├── :root { --red-dark, --glass-bg }   │
│     ├── 双图融合 (clip-path 斜切)           │
│     ├── Canvas 粒子 + 网格 + 暗角           │
│     ├── Logo / 音乐条 / 欢迎区 / 信息卡      │
│     ├── 毛玻璃弹窗 / 滑动遮罩               │
│     ├── Vue 侧边栏 + 内容区                 │
│     └── 响应式 + 无障碍                    │
│                                             │
│   <body> — HTML 结构                       │
│     ├── <canvas> 粒子画布                   │
│     ├── 左上 Logo · 右上 音乐控制器           │
│     ├── 左下 欢迎区 · 右下 信息卡 + 实时时钟   │
│     ├── 底部 状态栏                          │
│     ├── 毛玻璃 欢迎弹窗                       │
│     ├── 半透明毛玻璃 滑动遮罩                  │
│     └── <div id="vue-app"> Vue 挂载点        │
│         ├── 可折叠侧边栏 + 面包屑导航           │
│         ├── 01 关于我 · 02 技能领域            │
│         ├── 03 联系方式 · 04 个人简历           │
│         ├── 05 灵感墙 · 06 工具箱              │
│         ├── 07 技术百科 · 08 Code Lab          │
│         └── 09 编程导航（36 个开发常用网站）      │
│                                             │
│  ⚡ index.js — 核心逻辑                      │
│     ├── Particle 类 (生成/更新/绘制/连线)      │
│     ├── 音频控制 (播放/暂停/音量/状态同步)      │
│     ├── 欢迎弹窗状态机                        │
│     ├── 触摸/鼠标手势检测（右滑进入）            │
│     ├── 键盘快捷键映射                        │
│     ├── 实时时钟更新                          │
│     └── Vue.createApp 全屏 SPA               │
│         ├── 9 个标签页 · 可折叠侧边栏            │
│         ├── 9 个面板组件（Options API）         │
│         └── 侧边栏开关 / 面包屑 / 面板切换动画    │
└─────────────────────────────────────────────┘
```

---

## 🧱 技术栈

| 层级 | 技术 | 说明 |
|---|---|---|
| **结构** | HTML5 | 纯手写，Vue 模板内联 |
| **样式** | CSS3 | CSS 变量主题系统，毛玻璃 `backdrop-filter`，clip-path 背景融合 |
| **动效** | Canvas 2D API | 80 个粒子的连线动画 + 鼠标排斥交互 |
| **逻辑** | Vanilla JS (ES6) | 粒子系统、音频控制、手势检测、状态管理 |
| **框架** | Vue 3 (CDN) | 全屏覆盖层 SPA，响应式数据驱动面板切换 |
| **字体** | VT323 (Google Fonts) | 像素终端风格 |

> **双模式运行**：Vite 开发服务器（`npm run dev`） / 双击 `standalone.html` 直接打开

---

## 🎯 适合谁看

| 如果你想… | 你能学到… |
|---|---|
|  是前端新手 | CSS 变量主题系统怎么搭、毛玻璃怎么写、响应式怎么处理 |
|  想做个个人主页 | 从布局到动效的完整思路，替换内容即用 |
|  对 Canvas 好奇 | 粒子生成、连线算法、鼠标斥力——从 0 手写 |
|  想学 Vue 3 | CDN 引入方式，`data / computed / methods / watch` 实战 |
|  喜欢像素/终端风格 | VT323 字体 + 暗红配色 + 状态栏——复古未来主义 |
|  想教学/做分享 | 代码"怎么做/为什么/做什么"三段式注释，适合拆解讲解 |

---

## 🔑 关键技术点

### 1. CSS 变量主题系统

```css
:root {
    --bg-deep: #0a0505;          /* 最深背景 */
    --red-bright: #c84040;       /* 主红色 */
    --glass-bg: rgba(25,8,8,0.6); /* 毛玻璃底色 */
    --transition-smooth: 0.35s cubic-bezier(0.4,0,0.2,1);
}
```
换一套 `:root` 变量 = 换一套皮肤。

### 2. Canvas 粒子系统

```js
class Particle {
    reset() { /* 随机位置、速度、透明度 */ }
    update() { /* 边界反弹 + 正弦 alpha 脉动 */ }
    draw()   { /* 两层圆：实心核 + 3x 光晕外层 */ }
}
// 80 个粒子，距离 < 150px 自动连线
// 鼠标靠近 120px 内产生排斥力
```

### 3. 毛玻璃弹窗 + 滑动进入

欢迎覆盖层淡出 → 所有 UI 元素同步淡入 → 点击"向右滑动" → 遮罩滑入 → Vue 全屏区域打开。`cubic-bezier(0.4, 0, 0.2, 1)` 标准缓出。

### 4. Vue 3 CDN 零配置

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
```
不装 Node、不跑 npm install，一个 `<script>` 标签用完整 Vue 3。

---

## 🚀 快速开始

```bash
git clone https://github.com/LuHeJ/LuHeJ.git
cd LuHeJ

# 方式一：Vite 开发服务器（支持 HMR 热更新）
npm install
npm run dev        # → 按住ctrl（或command）+鼠标左键点击打开http://localhost:####

# 方式二：双击 standalone.html（全内联，零配置）
# 方式三：npx serve . 或 python -m http.server ####
```

---

## 🎨 二创指南

| 想改什么 | 改哪里 |
|---|---|
| 颜色主题 | `index.css` → `:root` 里的 CSS 变量 |
| 字体 | Google Fonts → 替换 VT323 为其他像素字体 |
| 背景图 | 替换 `g1.jpg` `g2.jpg` `g3.jpg` |
| 个人信息 | `index.html` → `.profile-card` + `index.js` → Vue `data()` |
| 技能标签 | `index.js` → `skillGroups` 数组（SkillsPanel 内） |
| 粒子数量 | `index.js` → `particleCount = 80` |
| 连线距离 | `index.js` → `connectDistance = 150` |
| 内容面板 | `src/App.vue` → 各组件的 `template` 或直接修改 HTML 模板 |
| 新增面板 | `src/App.vue` → tabs 数组加一项 + 新组件定义 + 模板标签 |
| 背景音乐 | 替换 `BGM1.mp3`（或删 `<audio>` 标签） |

---

## ⌨️ 快捷键

| 按键 | 功能 |
|---|---|
| `Space` | 播放 / 暂停背景音乐 |
| `↑` `↓` | 音量 +5% / -5% |
| `←` `→` | 切换场景面板 |
| `Esc` | 关闭 Vue 全屏面板 |

---

## 📋 浏览器兼容

| 浏览器 | 状态 |
|---|---|
| Chrome / Edge 90+ | ✅ 全功能 |
| Firefox 90+ | ✅ 全功能 |
| Safari 15+ | ✅（`backdrop-filter` 需 15+） |
| 移动端 Chrome / Safari | ✅ 响应式适配 |

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/LuHeJ">LuHe</a> · 纯手搓 · 欢迎二创</sub>
</p>
