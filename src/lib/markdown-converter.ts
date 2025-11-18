/**
 * Markdown 转 HTML 转换工具
 * 支持基本的 markdown 语法转换为 HTML
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown

  // 处理标题（需要在其他替换之前）
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>')

  // 处理粗体（必须在斜体之前）
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>')

  // 处理斜体（只处理单个星号，避免与粗体冲突）
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/_(.+?)_/g, '<em>$1</em>')

  // 处理链接
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:text-primary/80">$1</a>')

  // 处理行内代码
  html = html.replace(/`(.+?)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded">$1</code>')

  // 处理列表项（需要在段落处理之前）
  const lines = html.split('\n')
  let inList = false
  let listType = '' // 'ul' 或 'ol'
  const processedLines: string[] = []

  lines.forEach((line, index) => {
    const isUlItem = line.match(/^\* /)
    const isOlItem = line.match(/^\d+\.\s+/)
    const isEmptyLine = !line.trim()

    if (isUlItem) {
      if (!inList || listType !== 'ul') {
        if (inList) processedLines.push(`</${listType}>`)
        processedLines.push('<ul>')
        inList = true
        listType = 'ul'
      }
      processedLines.push(line.replace(/^\* /, '<li>') + '</li>')
    } else if (isOlItem) {
      if (!inList || listType !== 'ol') {
        if (inList) processedLines.push(`</${listType}>`)
        processedLines.push('<ol>')
        inList = true
        listType = 'ol'
      }
      processedLines.push(line.replace(/^\d+\.\s+/, '<li>') + '</li>')
    } else {
      if (inList && !isEmptyLine) {
        processedLines.push(`</${listType}>`)
        inList = false
      }
      processedLines.push(line)
    }
  })

  if (inList) {
    processedLines.push(`</${listType}>`)
  }

  html = processedLines.join('\n')

  // 处理段落（跳过已经被标签包装的内容）
  html = html
    .split('\n\n')
    .map((paragraph) => {
      // 跳过已经被转换为标签的内容和空行
      if (paragraph.match(/^<[hupolfbsdi]/i) || !paragraph.trim()) {
        return paragraph
      }
      return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`
    })
    .join('')

  return html
}
