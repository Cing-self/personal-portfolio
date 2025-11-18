'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

export interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  // 将 h2 作为一级标题，其下的 h3/h4 为子标题
  const structure = useMemo(() => {
    const items: Array<Heading & { children?: Heading[] }> = []
    let currentParent: (Heading & { children?: Heading[] }) | null = null

    headings.forEach((heading) => {
      if (heading.level === 2) {
        currentParent = { ...heading, children: [] }
        items.push(currentParent)
      } else if (heading.level > 2 && currentParent) {
        if (!currentParent.children) currentParent.children = []
        currentParent.children.push(heading)
      }
    })

    return items
  }, [headings])

  // 管理展开/收缩状态
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(structure.map((item) => item.id))
  )

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">On this page</h3>
        <ul className="space-y-1">
          {structure.map((item) => (
            <li key={item.id}>
              <div className="flex items-center">
                {item.children && item.children.length > 0 && (
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="mr-2 flex items-center justify-center w-4 h-4 text-slate-500 hover:text-slate-600 transition-colors"
                    aria-label="Toggle"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {expandedItems.has(item.id) ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                )}
                {!item.children?.length && <div className="w-6" />}
                <Link
                  href={`#${item.id}`}
                  className="text-slate-600 hover:text-slate-700 transition-colors text-sm block flex-1 py-1"
                >
                  {item.text}
                </Link>
              </div>

              {/* 子标题 */}
              {item.children && expandedItems.has(item.id) && (
                <ul className="space-y-1 pl-6 mt-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={`#${child.id}`}
                        className="text-slate-500 hover:text-slate-600 transition-colors text-xs block py-1"
                      >
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
