<p align="center">
  <img src="https://img.shields.io/badge/纯手搓-HTML%20%2B%20CSS%20%2B%20JS-e53935?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/框架-Vue%203-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/字体-VT323-orange?style=for-the-badge&logo=googlefonts&logoColor=white" />
  <img src="https://img.shields.io/badge/零依赖-纯原生动画-000?style=for-the-badge" />
</p>

<h1 align="center">LuHe / 鹿禾 · 个人主页</h1>

<p align="center">
  暗黑红调 · Canvas 粒子 · 毛玻璃 UI · Vue 3 全屏 SPA
</p>

<p align="center">
  <b> 欢迎 Star / Fork / 下载学习二创</b>
</p>

---

## 预览

> 黑红暗色调 · 双图融合背景 · Canvas 粒子连线 · VT323 像素字体 · 毛玻璃欢迎弹窗 → Vue 3 全屏内容区

---

## 🗺️ 文件结构

```
LuHeJ/
├── index.html      ← HTML 结构 + Vue 模板（509 行）
├── index.css       ← 全部样式（1812 行）
├── index.js        ← 全部逻辑（ 568 行）：粒子 / 音频 / Vue App
├── g1.jpg          ← 左背景图（对角线裁剪）
├── g2.jpg          ← 右背景图（放大 120% 裁剪水印）
├── g3.jpg          ← Vue 覆盖层背景图
├── BGM1.mp3        ← 背景音乐（可选）
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
│     ├── 左上 Logo                          │
│     ├── 右上 音乐控制器                      │
│     ├── 左下 欢迎区 + 进入按钮                │
│     ├── 右下 个人信息卡                      │
│     ├── 底部 状态栏                         │
│     ├── 毛玻璃 欢迎弹窗                      │
│     └── <div id="vue-app"> Vue 挂载点       │
│         ├── 场景 01：关于我                 │
│         ├── 场景 02：技能领域                │
│         ├── 场景 03：联系方式                │
│         └── 场景 04：个人简历                │
│                                             │
│  ⚡ index.js — 核心逻辑                     │
│     ├── Particle 类 (生成/更新/绘制/连线)     │
│     ├── 音频控制 (播放/暂停/音量/动画)        │
│     ├── 欢迎弹窗状态机                       │
│     ├── 触摸/鼠标手势检测                    │
│     ├── 键盘快捷键映射                       │
│     └── Vue.createApp 全屏 SPA              │
│         ├── data: tabs/skillGroups/contacts │
│         ├── computed: totalSkillCount       │
│         ├── methods: show/hide/goToTab      │
│         └── watch: currentTab→updateStatusBar│
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

> **零构建、零打包、零 npm。** 拖进浏览器就跑。

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

# 方式一：直接双击 index.html

# 方式二：本地服务器
npx serve .
# 或 python -m http.server 8080
```

---

## 🎨 二创指南

| 想改什么 | 改哪里 |
|---|---|
| 颜色主题 | `index.css` → `:root` 里的 CSS 变量 |
| 字体 | `index.html` → `<link>` 里的 Google Fonts |
| 背景图 | 替换 `g1.jpg` `g2.jpg` `g3.jpg` |
| 个人信息 | `index.html` → `.profile-card` + `index.js` → Vue `data()` |
| 技能标签 | `index.js` → `skillGroups` 数组 |
| 粒子数量 | `index.js` → `particleCount = 80` |
| 连线距离 | `index.js` → `connectDistance = 150` |
| 内容面板 | `index.html` → `v-if="currentTab === X"` 各区块 |
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
