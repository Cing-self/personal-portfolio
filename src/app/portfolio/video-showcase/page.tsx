'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { useState } from 'react'

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
    description: 'This animation was generated using RunwayML, depicting a journey through a neon-lit cybernetic city. The concept explores the fusion of organic and artificial life.',
    duration: '2:23',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['RunwayML', 'Generative Art', 'AI Animation']
  },
  {
    id: '2',
    title: 'Oceanic Dreams',
    description: 'An ethereal journey through luminescent underwater worlds. This piece combines fluid dynamics simulation with generative AI to create dreamlike aquatic landscapes.',
    duration: '1:45',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Fluid Simulation', 'Generative AI', 'Abstract']
  },
  {
    id: '3',
    title: 'Quantum Fields',
    description: 'Visualizing abstract quantum mechanical concepts through AI-generated animation. Explores particle interactions and energy fields in a mesmerizing abstract form.',
    duration: '3:42',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Physics', 'Generative Art', 'Scientific']
  },
  {
    id: '4',
    title: 'Forest Spirit',
    description: 'An exploration of nature meets technology. This animation uses AI to generate organic, flowing forms inspired by forest ecosystems and mystical natural phenomena.',
    duration: '0:58',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Nature', 'Generative AI', 'Organic']
  },
  {
    id: '5',
    title: 'Abstract Dimensions',
    description: 'A dive into higher-dimensional spaces visualized through AI generation. This experimental piece challenges our perception of space and form.',
    duration: '2:05',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Abstract', 'Experimental', 'AI Animation']
  },
  {
    id: '6',
    title: 'Neon Nights',
    description: 'A cyberpunk-inspired journey through synthwave landscapes. This piece combines retro-futuristic aesthetics with cutting-edge generative techniques.',
    duration: '2:34',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['Cyberpunk', 'Synthwave', 'Generative Art']
  }
]

export default function VideoShowcasePage() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <Breadcrumb items={[{ label: 'Project', href: '/portfolio/video-showcase' }]} />

      {/* 主要内容 */}
      <main className="mt-8 flex flex-col gap-8 mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Generative Video Showcase
          </h1>
          <p className="text-slate-300">
            A collection of videos created using advanced AI models and generative art techniques.
          </p>
        </div>

        {/* 视频播放和播放列表 */}
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
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-sm text-slate-300">0:37</span>
                <span className="text-sm text-slate-300">{selectedVideo.duration}</span>
              </div>
            </div>

            {/* 视频信息 */}
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-black text-black mb-2" style={{ fontFamily: 'Caveat, cursive' }}>{selectedVideo.title}</h2>
                <p className="text-slate-300 text-base leading-relaxed">{selectedVideo.description}</p>
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
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400 font-medium">
        <p className="text-sm">© 2024 AI Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}
