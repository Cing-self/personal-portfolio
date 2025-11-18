# 🎨 AI Portfolio

一个展示 AI 创意作品的个人作品集网站。集合了 AI 艺术生成、视频展示和项目案例，使用 Next.js + React + Tailwind CSS 打造的现代化作品集平台。

## ✨ 功能特点

- 🎭 **AI Art Gallery** - 展示 AI 生成的艺术作品，支持按类别筛选（Sci-Fi、Landscape、Characters、Abstract）
- 🎬 **Video Showcase** - 展示 AI 生成的视频作品，包含播放列表和详细描述
- 📦 **Project Portfolio** - 统一的项目作品集页面，支持多视图切换
- 📝 **Blog** - 技术博客和创意分享
- 👤 **About** - 个人介绍、技能展示和工作经历
- 📬 **Contact** - 联系表单和社交媒体链接
- 🎨 **手绘风格设计** - 独特的手绘卡片和动画效果
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- 🌓 **深色模式支持** - 深浅两种主题切换

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可查看效果。

### 生产构建

```bash
npm run build
npm start
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # 首页
│   ├── blog/           # 博客页面
│   ├── about/          # 关于页面
│   ├── contact/        # 联系页面
│   ├── portfolio/       # 作品集主页面
│   │   ├── ai-gallery/ # AI 艺术库
│   │   └── video-showcase/ # 视频展示
│   └── globals.css     # 全局样式
├── components/         # 可复用组件
│   ├── Navigation.tsx  # 导航栏
│   ├── Breadcrumb.tsx  # 面包屑
│   └── TableOfContents.tsx # 目录
├── config/            # 配置文件
│   ├── site.config.ts # 网站配置
│   ├── blog.config.ts # 博客配置
│   └── ...
└── lib/               # 工具函数
```

## 🛠️ 技术栈

- **框架**: Next.js 16.0.3
- **UI**: React 19.2.0
- **样式**: Tailwind CSS 4
- **类型**: TypeScript 5
- **工具**: ESLint, Babel

## 🎯 核心特性

### Portfolio 页面

Portfolio 页面通过分类切换功能，统一展示三种不同类型的作品：

1. **AI Art Gallery** - 展示静态艺术作品
2. **Video Showcase** - 展示生成的视频内容
3. **All Projects** - 综合项目列表（开发中）

### 数据共享

Portfolio 页面复用了 AI Gallery 和 Video Showcase 的数据源，确保全站数据的一致性。

## 📝 使用说明

### 修改网站信息

编辑 `src/config/site.config.ts` 修改：
- 个人基本信息
- 导航菜单
- 社交媒体链接
- 技术栈

### 添加博客文章

在 `src/config/blog.config.ts` 中添加新文章配置

### 更新作品集数据

修改对应的页面文件：
- AI Gallery: `src/app/portfolio/ai-gallery/page.tsx`
- Video Showcase: `src/app/portfolio/video-showcase/page.tsx`

## 📄 许可证

MIT

## 📧 联系方式

访问网站中的 Contact 页面获取联系方式。
