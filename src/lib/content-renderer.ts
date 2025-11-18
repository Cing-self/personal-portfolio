/**
 * 内容渲染工具
 * 支持 markdown 和 html 格式的内容渲染
 */

import { ContentBlock } from '@/config/site.config'

/**
 * 渲染内容块
 * @param content 内容块对象
 * @returns React 组件可直接使用的 HTML
 */
export function renderContent(content: ContentBlock): string {
  if (content.format === 'html') {
    return content.content
  }

  // markdown 格式：简单的 markdown 转 html 处理
  // 实际项目中建议使用成熟的库如 remark, marked 等
  return markdownToHtml(content.content)
}

/**
 * 简单的 markdown 转 html
 * 支持基本的 markdown 语法
 */
function markdownToHtml(markdown: string): string {
  let html = markdown

  // 处理标题
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>')

  // 处理粗体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>')

  // 处理斜体
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/_(.+?)_/g, '<em>$1</em>')

  // 处理链接
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:text-primary/80">$1</a>')

  // 处理代码块
  html = html.replace(/```[\s\S]*?```/g, '<pre><code>$1</code></pre>')

  // 处理行内代码
  html = html.replace(/`(.+?)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded">$1</code>')

  // 处理段落
  html = html.split('\n\n').map(paragraph => {
    // 跳过已经被转换为标签的内容
    if (paragraph.match(/^<[h|u|l|o|p|d|b|s|f]/)) {
      return paragraph
    }
    return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`
  }).join('')

  // 处理列表
  html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')

  return html
}

/**
 * 获取纯文本内容（用于生成摘要等）
 */
export function getPlainText(content: ContentBlock): string {
  if (content.format === 'markdown') {
    return content.content
      .replace(/#+\s/g, '')
      .replace(/\*\*|__/g, '')
      .replace(/\*|_/g, '')
      .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`/g, '')
  }

  // HTML 格式：移除 HTML 标签
  return content.content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}
