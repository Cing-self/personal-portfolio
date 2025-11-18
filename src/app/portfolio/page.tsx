/**
 * 作品集页面
 * 展示所有项目的集合页面
 */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

// AI Gallery 数据
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
]

// Video Showcase 数据
interface Video {
  id: string
  title: string
  description: string
  duration: string
  thumbnail: string
  tags: string[]
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Project Cyberscape',
    description: 'This animation was generated using RunwayML, depicting a journey through a neon-lit cybernetic city.',
    duration: '2:23',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['RunwayML', 'Generative Art', 'AI Animation']
  },
  {
    id: '2',
    title: 'Oceanic Dreams',
    description: 'An ethereal journey through luminescent underwater worlds with generative AI.',
    duration: '1:45',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Fluid Simulation', 'Generative AI', 'Abstract']
  },
  {
    id: '3',
    title: 'Quantum Fields',
    description: 'Visualizing abstract quantum mechanical concepts through AI-generated animation.',
    duration: '3:42',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Physics', 'Generative Art', 'Scientific']
  },
]

const aiGalleryCategories = ['All', 'Sci-Fi', 'Landscape', 'Characters', 'Abstract']
const viewTypes = ['AI Art Gallery', 'Video Showcase', 'All Projects']

export default function PortfolioPage() {
  const [viewType, setViewType] = useState('AI Art Gallery')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            我的作品集
          </h1>
          <p className="text-slate-400">
            探索我的项目和创意作品
          </p>
        </div>

        {/* View Type Filter */}
        <div className="flex gap-2 p-1 overflow-x-auto mb-8 border-b border-white/20 pb-4">
          {viewTypes.map((type) => (
            <button
              key={type}
              onClick={() => setViewType(type)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium transition-colors ${
                viewType === type
                  ? 'bg-white/20 text-black border-b-2 border-white/40'
                  : 'bg-white/10 text-black hover:bg-white/15 border-white/10'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* AI Art Gallery View */}
        {viewType === 'AI Art Gallery' && (
          <>
            {/* Category Filter */}
            <div className="flex gap-2 p-1 overflow-x-auto mb-8">
              {aiGalleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-white/20 text-black border border-white/40'
                      : 'bg-white/10 text-black hover:bg-white/15 border border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Artworks Grid */}
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
          </>
        )}

        {/* Video Showcase View */}
        {viewType === 'Video Showcase' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主视频播放器 */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black mb-6 shadow-lg">
                <Image
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors border border-white/40">
                    <span className="material-symbols-outlined text-4xl text-black">play_arrow</span>
                  </button>
                </div>
              </div>

              {/* 视频信息 */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>{selectedVideo.title}</h2>
                  <p className="text-slate-400 text-base leading-relaxed">{selectedVideo.description}</p>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-black text-sm font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 播放列表 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Playlist</h3>
              <div className="space-y-3">
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full flex gap-3 p-3 rounded-lg border transition-all ${
                      selectedVideo.id === video.id
                        ? 'border-white/40 bg-white/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg text-black">play_arrow</span>
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-bold text-black text-sm leading-tight mb-1">{video.title}</h4>
                      <p className="text-slate-400 text-xs">{video.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Projects View */}
        {viewType === 'All Projects' && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">All Projects 即将推出...</p>
          </div>
        )}
      </div>
    </div>
  )
}
