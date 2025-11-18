import { Heading } from '@/components/TableOfContents'

/**
 * 从 HTML 内容中提取标题
 * 支持 h2, h3, h4 标签
 */
export function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = []
  const regex = /<h([2-4])(?:\s+id="([^"]*)")?>([^<]+)<\/h\1>/g
  
  let match
  let headingIndex = 0

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1])
    let id = match[2]
    const text = match[3].trim()

    // 如果没有 id，生成一个
    if (!id) {
      id = `heading-${headingIndex}`
    }

    headings.push({
      id,
      text,
      level
    })

    headingIndex++
  }

  return headings
}

/**
 * 为 HTML 内容中的标题添加 id 属性
 * 如果已经有 id 则保留，否则生成新的 id
 */
export function addHeadingIds(html: string): string {
  let headingIndex = 0
  
  return html.replace(/<h([2-4])(?:\s+id="([^"]*)")?>/g, (match, level, existingId) => {
    const id = existingId || `heading-${headingIndex}`
    headingIndex++
    return `<h${level} id="${id}">`
  })
}
