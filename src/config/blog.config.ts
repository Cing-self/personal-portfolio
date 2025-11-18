/**
 * 博客文章配置
 * 支持 markdown 和 html 格式的内容
 */

import { ContentBlock } from './site.config'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  imageUrl: string
  author?: string
  content: ContentBlock // 支持 markdown 和 html
}

// 默认博客文章数据
export const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Use Transformer Models for Text Summarization',
    excerpt: 'This article explores the core principles of the Transformer architecture and provides a practical case study using Hugging Face for text summarization...',
    category: 'AI/ML',
    date: 'October 26, 2023',
    readTime: '10 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJDk5KsxlFlKrh7qwWJJ4SfpRRaCfEeFLx18IillrfRM3Zq0QQrVS8fzIz_7QVUT3SGcSNxullBSc7nc-OmsXGWwRbr-9MRpr-tFTEz6JyNxOg18sfXlU044DGq2vg1lP9mJwsDLR6V3Gj4_MK7hREt2-FL1YhwXs7LA5H8mmn1SqYXlNwbSRvNB4JAwG75nXl2hld6pLOJwYnpqq4U0LjXQz2rRztiomyEaDk_O3MI2HqWzZvqY6uR7wAuEMj6TNjDVtqV5Lxnzx4',
    author: 'John Doe',
    content: {
      format: 'html',
      content: '<h2>Introduction</h2><p>Transformer models have revolutionized natural language processing...</p><h2>How They Work</h2><p>The key mechanism behind transformers is the attention mechanism...</p>'
    }
  },
  {
    id: '2',
    title: 'Building a Serverless API with Next.js and Vercel',
    excerpt: 'A step-by-step guide to creating a fully functional, scalable, and cost-effective serverless API using the Next.js framework and deploying it on Vercel.',
    category: 'Web Dev',
    date: 'September 15, 2023',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZR0_unBRHttGAQS5yhJjpcA4zJVHPLm57DciVLtm1em_Z1PKyMPmRvLwg93xo43wsFq84ZwWo08xJgV-Fl6HGJb84_NA8X1c0k-nfma23nTx0lsr4dxYvg2jUOkPvkmP56XdR3bfRg09vEzQiPJYlfmm5qef3lErPAwRV6xudqvFwwRbEKC893GHLaeS0YX7JjeEy695pcifkn8iWhteGTeG8yHry8tK11t9wVLmLB2MP4QQn6nrd0L5OixTVSsUZCwBRQvUwKudf',
    author: 'John Doe',
    content: {
      format: 'markdown',
      content: '## Getting Started\n\nNext.js provides built-in API routes that make it easy to build serverless APIs...\n\n## Deployment\n\nVercel makes deployment seamless with automatic CI/CD integration.'
    }
  },
  {
    id: '3',
    title: 'Case Study: Optimizing Image Recognition with Transfer Learning',
    excerpt: 'Discover how we leveraged pre-trained models to significantly improve accuracy and reduce training time for a custom image classification task.',
    category: 'Case Studies',
    date: 'August 02, 2023',
    readTime: '12 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjMTCt40LNyONbRXQ-ooDUV7_bJnXQH7jhO0TjCXV6PqkT7rnP9MbHxv4hj8ONnFiTo1TTnyyXGSmGp-Rz0GmR1tveIP5GVJjb8x4RaUcf5lgH_Xm1SXkrY2vdJoqWHuEYCFu_Qsu9_jtoBi7Nr6_i5_EDsiEPiroJusFJbwEcVf4nXF5xJ4EpYk8_O1m4_igj7jSGpetib2fmudXlfLMGCljJMzD0ZVh36utOEStLJIKPGSkkOxLmSCC1vAjGZfBloP3Fk3BFJ4I-',
    author: 'John Doe',
    content: {
      format: 'html',
      content: '<h2>Problem Statement</h2><p>The original model achieved 75% accuracy...</p><h2>Solution</h2><p>We implemented transfer learning using pre-trained models...</p><h2>Results</h2><p>Final accuracy reached 92%...</p>'
    }
  },
  {
    id: '4',
    title: 'My Journey into Generative AI',
    excerpt: 'A personal reflection on exploring the fascinating world of generative models, from GANs to Large Language Models, and the projects they inspired.',
    category: 'AI/ML',
    date: 'July 21, 2023',
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCGfgXf6nGcgpGu-SAJrqcWCGJLxNfRvIMW9FcqiP2Wfb622NyMeg2WhWdRqFmZV3kLE0lAgmUgeZ6sZULyEAA7d6fUi-CEU7hgs-dpxeQNSXErVn7sPMa82r-1VyUSmOZnhI24lIwauqmR_eOJtlHJ2DY8n7-s84u8Iufu4YTqZk0BPRJVIkCE14ZG1aOg5zAnRiGgLPRtqXAgirH11rmD993xCjMc0_guOceqOABJw4A8VXvlR2pZF0o-vyRWtHG_aSzgevMbqSp',
    author: 'John Doe',
    content: {
      format: 'markdown',
      content: '## My Fascination\n\nIt all started with a simple question: Can machines be creative?\n\n## Exploration\n\nI began exploring various generative models and their applications.\n\n## Projects\n\nThis curiosity led me to create several interesting projects in the generative AI space.'
    }
  }
]

// 博客文章对象映射，便于按 ID 查询
export const blogPostsMap = defaultBlogPosts.reduce((map, post) => {
  map[post.id] = post
  return map
}, {} as Record<string, BlogPost>)
