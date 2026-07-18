<p align="center">
  <img src="https://img.shields.io/badge/HTML5-%20-e34c26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-%20-1572b6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-%20-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/零依赖-纯手搓-e53935?style=for-the-badge" />
</p>

<h1 align="center">LuHe / 鹿禾 · 个人主页</h1>

<p align="center">
  暗黑红调 · Canvas 粒子动画 · 毛玻璃 UI · Vue 3 全屏 SPA
</p>

---

## 项目结构

```
LuHeJ/
├── index.html      ← HTML 结构 + Vue 模板（509 行）
├── index.css       ← 全部样式（1812 行）
├── index.js        ← 全部逻辑（568 行）：粒子系统 / 音频控制 / Vue App
├── g1.jpg          ← 左背景图（对角线裁剪）
├── g2.jpg          ← 右背景图（对角线裁剪，放大 120% 去水印）
├── g3.jpg          ← Vue 覆盖层背景图
├── BGM1.mp3        ← 背景音乐
└── README.md
```

---

## 架构

```
index.html ─── <link> ──→ index.css（样式）
    │                        ├── :root 设计令牌（颜色/阴影/过渡）
    │                        ├── 双图融合背景（clip-path 对角线）
    │                        ├── Canvas 粒子画布 + 网格 + 暗角
    │                        ├── Logo / 音乐控制器 / 欢迎区 / 信息卡
    │                        ├── 毛玻璃欢迎覆盖层 + 滑动遮罩
    │                        ├── Vue 侧边栏 + 内容区（卡片/标签/时间线/简历）
    │                        ├── 响应式 @media（768px / 480px）
    │                        └── 无障碍（focus-visible / reduced-motion）
    │
    └── <script> ─→ index.js（逻辑）
                        ├── Particle 类 — 80 粒子 + 连线 + 鼠标排斥
                        ├── 音频控制 — 播放/暂停/音量/状态同步
                        ├── 欢迎覆盖层 — 状态机 + UI 联动
                        ├── 滑动进入 — 触摸/鼠标手势检测
                        ├── 键盘快捷键 — Space/Esc/方向键
                        └── Vue.createApp — 4 面板 SPA
                            ├── data: tabs / skillGroups / contacts
                            ├── computed: totalSkillCount
                            ├── methods: show / hide / goToTab
                            └── watch: currentTab ↔ 状态栏同步
```

---

## 技术栈

| 层级 | 技术 | 说明 |
|---|---|---|
| 结构 | HTML5 | 语义化标签，Vue 模板内联 |
| 样式 | CSS3 | CSS 变量主题系统、毛玻璃 `backdrop-filter`、clip-path 背景融合 |
| 动效 | Canvas 2D API | 80 粒子连线动画 + 鼠标排斥力交互 |
| 逻辑 | Vanilla JS (ES6) | 粒子系统、音频控制、手势检测、状态管理 |
| 框架 | Vue 3 (CDN) | 全屏覆盖层 SPA，4 个标签页响应式渲染 |
| 字体 | VT323 (Google Fonts) | 像素终端风格 |

> **零构建、零打包、零 npm install。** 拖进浏览器就跑。

---

## 快速开始

```bash
git clone https://github.com/LuHeJ/LuHeJ.git
cd LuHeJ

# 方式一：直接双击 index.html

# 方式二：本地服务器
npx serve .
# 或 python -m http.server 8080
```

---

## 二创指南

| 想改什么 | 改哪里 |
|---|---|
| 颜色主题 | `index.css` → `:root` 里的 CSS 变量 |
| 字体 | `index.html` → `<link>` 里的 Google Fonts |
| 背景图 | 替换 `g1.jpg` `g2.jpg` `g3.jpg` |
| 个人信息 | `index.html` → `.profile-card` 区域 + `index.js` → Vue `data()` |
| 技能标签 | `index.js` → Vue `data()` → `skillGroups` |
| 粒子数量 | `index.js` → `particleCount = 80` |
| 连线距离 | `index.js` → `connectDistance = 150` |
| 内容面板 | `index.html` → `<div id="vue-app">` 内各 `v-if` 区块 |
| 背景音乐 | 替换 `BGM1.mp3`（或删除 `<audio>` 标签） |

---

## 快捷键

| 按键 | 功能 |
|---|---|
| `Space` | 播放 / 暂停背景音乐 |
| `↑` `↓` | 音量 +5% / -5% |
| `←` `→` | 切换场景面板 |
| `Esc` | 关闭 Vue 全屏面板 |

---

## 浏览器兼容

| 浏览器 | 状态 |
|---|---|
| Chrome / Edge 90+ | ✅ |
| Firefox 90+ | ✅ |
| Safari 15+ | ✅ |
| 移动端 Chrome / Safari | ✅ 响应式适配 |

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/LuHeJ">LuHe</a> · 欢迎 Star / Fork / 二创</sub>
</p>
