# 网站数据结构文档

## 概述

网站支持完全可配置的数据模型，所有内容数据集中在 `/src/config` 目录下管理，支持 Markdown 和 HTML 两种内容格式。

## 文件结构

```
src/
├── config/
│   ├── site.config.ts      # 网站基本配置（导航、社交、技术栈等）
│   ├── blog.config.ts      # 博客文章配置
│   └── about.config.ts     # About 页面配置
├── lib/
│   ├── blog-data.ts        # （废弃，已集成到 config）
│   └── content-renderer.ts # 内容渲染工具（支持 markdown/html）
└── app/
    ├── page.tsx            # 首页
    ├── blog/
    │   ├── page.tsx        # 博客列表页
    │   └── [id]/page.tsx   # 博客详情页
    ├── about/page.tsx      # About 页面
    └── ...
```

## 配置详解

### 1. 网站基本配置 (`site.config.ts`)

定义网站的基本信息、导航菜单、社交链接和技术栈。

```typescript
export interface SiteConfig {
  basicInfo: BasicInfo        // 个人基本信息
  navigation: NavigationItem[] // 导航菜单项
  socials: SocialLink[]        // 社交媒体链接
  techStack: TechItem[]        // 技术栈
}

export interface BasicInfo {
  name: string
  title: string
  description: string
  location: string
  email: string
  avatar: string                  // 头像 URL
  bio: ContentBlock               // 个人简介（支持 markdown/html）
}

export interface ContentBlock {
  format: 'markdown' | 'html'
  content: string
}
```

**使用示例：**

```typescript
import { defaultSiteConfig } from '@/config/site.config'

// 访问基本信息
const name = defaultSiteConfig.basicInfo.name
const bio = defaultSiteConfig.basicInfo.bio

// 如需从服务器获取，可以这样替换：
// const siteConfig = await fetch('/api/config/site').then(r => r.json())
```

### 2. 博客文章配置 (`blog.config.ts`)

管理所有博客文章的数据。

```typescript
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  imageUrl: string
  author?: string
  content: ContentBlock         // 文章内容（支持 markdown/html）
}
```

**Markdown 示例：**

```typescript
const post: BlogPost = {
  id: '1',
  title: 'My First Post',
  excerpt: 'This is my first post...',
  category: 'AI/ML',
  date: 'January 1, 2024',
  readTime: '5 min read',
  imageUrl: 'https://...',
  author: 'John Doe',
  content: {
    format: 'markdown',
    content: `# Introduction
    
This is a markdown post with **bold** text and *italic* text.

## Section
- Item 1
- Item 2

\`\`\`python
print("Hello, World!")
\`\`\`

[Link](https://example.com)`
  }
}
```

**HTML 示例：**

```typescript
const post: BlogPost = {
  // ... other fields
  content: {
    format: 'html',
    content: `<h2>Introduction</h2>
    <p>This is an <strong>HTML</strong> post.</p>
    <h3>Section</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>`
  }
}
```

### 3. About 页面配置 (`about.config.ts`)

管理 About 页面的内容。

```typescript
export interface AboutPageConfig {
  aboutMe: ContentBlock      // 个人描述（支持 markdown/html）
  experiences: Experience[]  // 工作经历列表
  portfolio: Portfolio[]     // 作品集
}
```

### 4. 内容渲染 (`content-renderer.ts`)

提供工具函数来渲染不同格式的内容。

```typescript
import { renderContent, getPlainText } from '@/lib/content-renderer'

// 渲染内容（返回 HTML 字符串）
const htmlContent = renderContent(contentBlock)

// 获取纯文本（用于摘要等）
const plainText = getPlainText(contentBlock)
```

## 与 API 集成

当从后端服务器获取数据时，确保返回的数据格式匹配这些接口。

### 示例 API 响应

**GET /api/config/site**
```json
{
  "basicInfo": {
    "name": "John Doe",
    "title": "AI Specialist",
    "description": "...",
    "location": "San Francisco, CA",
    "email": "john@example.com",
    "avatar": "https://...",
    "bio": {
      "format": "html",
      "content": "<p>...</p>"
    }
  },
  "navigation": [
    { "label": "Home", "href": "/" },
    { "label": "Blog", "href": "/blog" }
  ],
  "socials": [
    { "name": "GitHub", "icon": "code", "url": "https://github.com/..." }
  ],
  "techStack": [
    { "name": "Python", "icon": "https://..." }
  ]
}
```

**GET /api/blog**
```json
[
  {
    "id": "1",
    "title": "Post Title",
    "excerpt": "...",
    "category": "AI/ML",
    "date": "January 1, 2024",
    "readTime": "5 min read",
    "imageUrl": "https://...",
    "author": "John Doe",
    "content": {
      "format": "markdown",
      "content": "# Title\n\nContent here..."
    }
  }
]
```

## 迁移指南

### 从硬编码数据迁移到 API

1. **创建 API 路由** (`src/app/api/config/route.ts`)：
```typescript
export async function GET() {
  // 从数据库或其他服务获取数据
  const siteConfig = await fetchSiteConfigFromDB()
  return Response.json(siteConfig)
}
```

2. **在页面中使用 API**：
```typescript
import { defaultSiteConfig } from '@/config/site.config'

// 方式一：使用默认配置（开发时）
const config = defaultSiteConfig

// 方式二：从 API 获取（生产时）
const config = await fetch('http://localhost:3000/api/config/site')
  .then(r => r.json())
  .catch(() => defaultSiteConfig) // 降级处理
```

## 内容格式支持

### Markdown 支持的语法

- 标题：`# H1`, `## H2`, `### H3`
- 粗体：`**text**` 或 `__text__`
- 斜体：`*text*` 或 `_text_`
- 链接：`[text](url)`
- 代码块：` ```code``` `
- 行内代码：`` `code` ``
- 列表：`* item`

### 注意事项

- HTML 格式内容直接使用，无需转换
- Markdown 内容通过 `renderContent()` 自动转换为 HTML
- 为了安全性，考虑在渲染 HTML 前进行 sanitization（防止 XSS 攻击）

## 未来扩展

- [ ] 添加更复杂的 markdown 解析（建议使用 `remark` 或 `marked` 库）
- [ ] HTML sanitization（使用 `sanitize-html` 库）
- [ ] 国际化支持（i18n）
- [ ] 动态路由生成
- [ ] CDN 集成用于图片优化
