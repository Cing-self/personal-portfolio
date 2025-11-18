'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { blogPosts } from '@/lib/blog-data'
import { useState, useMemo } from 'react'

const categories = ['All', 'AI/ML', 'Web Dev', 'Deep Learning']
const POSTS_PER_PAGE = 10

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // 获取所有博客文章并转换为数组
  const allPosts = useMemo(() => Object.values(blogPosts), [])

  // 过滤文章
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [allPosts, selectedCategory, searchQuery])

  // 计算分页
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  // 生成页码数组
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)
      
      if (currentPage <= 2) {
        endPage = 4
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3
      }
      
      if (startPage > 2) {
        pages.push('...')
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...')
      }
      
      pages.push(totalPages)
    }
    
    return pages
  }, [currentPage, totalPages])
  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <Breadcrumb items={[{ label: 'Blog' }]} />
      <main className="mt-8 flex flex-col gap-8 mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            My Blog
          </h1>
          <p className="text-slate-300">
            Insights on AI, technology, and personal projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-black/60">search</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-lg bg-white/10 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="Search articles..."
              />
            </div>
          </div>
          <div className="flex gap-2 p-1 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-white/20 text-black border border-white/40'
                    : 'bg-white/10 text-black hover:bg-white/15 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="flex flex-col divide-y divide-white/10 mb-8">
          {paginatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex flex-col sm:flex-row gap-6 py-6 first:pt-0 last:pb-0 hover:opacity-80 transition-opacity"
            >
              <div className="flex-shrink-0 w-full sm:w-48">
                <Image
                  src={post.imageUrl}
                  alt={`Blog post cover image about ${post.title}`}
                  width={192}
                  height={144}
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-black text-lg font-bold leading-normal group-hover:text-gray-700 mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm font-normal leading-normal mb-2">
                  {post.date} | {post.category} | {post.readTime}
                </p>
                <p className="text-slate-300 text-sm font-normal leading-normal">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center md:justify-between gap-2 mb-8">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-black bg-white/10 rounded-lg hover:bg-white/15 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Previous</span>
          </button>
          <div className="hidden md:flex items-center gap-2">
            {pageNumbers.map((page, index) => (
              <div key={index}>
                {page === '...' ? (
                  <span className="px-4 py-2 text-sm font-medium text-black">...</span>
                ) : (
                  <button
                    onClick={() => setCurrentPage(page as number)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg ${
                      currentPage === page
                        ? 'bg-white/20 text-black font-bold border border-white/40'
                        : 'text-black bg-white/10 hover:bg-white/15 border border-white/20'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-black bg-white/10 rounded-lg hover:bg-white/15 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </nav>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-white/10 py-8 text-center text-slate-400 font-medium">
        <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
