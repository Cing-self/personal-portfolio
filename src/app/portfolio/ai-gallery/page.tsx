'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { useState } from 'react'

interface Artwork {
  id: string
  title: string
  category: string
  imageUrl: string
}

const artworks: Artwork[] = [
  { id: '1', title: 'Cybernetic Cityscape', category: 'Sci-Fi', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '2', title: 'Forest Spirit', category: 'Landscape', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '3', title: 'Galactic Explorer', category: 'Sci-Fi', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '4', title: 'Steampunk Automaton', category: 'Characters', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '5', title: 'Oceanic Dreams', category: 'Abstract', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '6', title: 'Desert Mirage', category: 'Landscape', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '7', title: 'Neon Noir Detective', category: 'Sci-Fi', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '8', title: 'Floating Islands', category: 'Landscape', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '9', title: 'Ancient Golem', category: 'Characters', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '10', title: 'Quantum Bloom', category: 'Abstract', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '11', title: 'Retro Future Car', category: 'Sci-Fi', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
  { id: '12', title: 'Ethereal Portrait', category: 'Characters', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
]

const categories = ['All', 'Sci-Fi', 'Landscape', 'Characters', 'Abstract']

export default function AIGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <Breadcrumb items={[{ label: 'Project', href: '/portfolio/ai-gallery' }]} />

      {/* 主要内容 */}
      <main className="mt-8 flex flex-col gap-8 mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            AI Art Gallery
          </h1>
          <p className="text-slate-300">
            A collection of works created using generative AI tools.
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                selectedCategory === category
                  ? 'bg-white/20 text-black border-white/40'
                  : 'bg-white/10 text-black hover:bg-white/15 border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 艺术作品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:border-white/30 transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-bold text-black mb-1" style={{ fontFamily: 'Caveat, cursive' }}>{artwork.title}</h3>
                <p className="text-black text-sm">{artwork.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 分页 */}
        <nav className="flex items-center justify-center gap-2 mt-8">
          <button className="px-3 py-2 rounded-lg bg-white/10 text-black hover:bg-white/15 text-sm font-medium border border-white/20">
            ← Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-white/20 text-black font-bold border border-white/40">1</button>
          <button className="px-4 py-2 rounded-lg bg-white/10 text-black hover:bg-white/15 text-sm font-medium border border-white/20">2</button>
          <button className="px-4 py-2 rounded-lg bg-white/10 text-black hover:bg-white/15 text-sm font-medium border border-white/20">3</button>
          <span className="px-4 py-2 text-black">...</span>
          <button className="px-4 py-2 rounded-lg bg-white/10 text-black hover:bg-white/15 text-sm font-medium border border-white/20">8</button>
          <button className="px-3 py-2 rounded-lg bg-white/10 text-black hover:bg-white/15 text-sm font-medium border border-white/20">
            Next →
          </button>
        </nav>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400 font-medium">
        <p className="text-sm">© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}
