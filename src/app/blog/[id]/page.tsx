/**
 * 博客文章详情页面
 * 展示单篇博客文章的完整内容
 */

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import TableOfContents from '@/components/TableOfContents'
import { blogPosts } from '@/lib/blog-data'
import { extractHeadings, addHeadingIds } from '@/lib/extract-headings'
import { markdownToHtml } from '@/lib/markdown-converter'

// Cloudflare Pages 需要 Edge Runtime
export const runtime = 'edge'

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts[id]
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-4">文章未找到</h1>
          <Link 
            href="/blog"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    )
  }
  
  // 为内容添加标题 id 并提取标题列表
  // 检查内容是否为 markdown 格式（以 # 开头表示是 markdown）
  const isMarkdown = post.content?.trim().startsWith('#')
  const processedContent = isMarkdown ? markdownToHtml(post.content || '') : post.content || ''
  const contentWithIds = addHeadingIds(processedContent)
  const headings = extractHeadings(contentWithIds)
  
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display">
      <Navigation />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      {/* 主要内容 */}
      <main className="mt-8 mx-auto w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* 左侧目录 - 占 1 列 */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:col-span-1">
              <TableOfContents headings={headings} />
            </aside>
          )}
          
          {/* 中间主要内容 - 占 3-4 列 */}
          <article className={headings.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>Published on {post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-slate-100 prose-code:text-slate-100 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-li:text-slate-300 prose-blockquote:text-slate-300 prose-em:text-slate-300"
            dangerouslySetInnerHTML={{ __html: contentWithIds || '' }}
          />
          
          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link 
                href="/blog"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                返回博客列表
              </Link>
            </div>
          </footer>
        </article>
        </div>
        
        {/* Related Articles - \u5360\u6574\u4e2a\u5bbd\u5ea6 */}
        <div className="max-w-7xl mx-auto">
          {/* Related Articles */}
          <section className="mt-16 mb-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(blogPosts).slice(0, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-slate-100 group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}