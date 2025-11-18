'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background-dark text-slate-100">
      <Navigation />

      <main className="flex flex-col gap-16 mx-auto w-full max-w-6xl px-4 md:px-8 pt-8">
        {/* 英雄横幅 - 手绘风格 */}
        <section id="hero" className="relative -mx-4 md:-mx-8">
          <div className="@container">
            <div className="p-4 md:p-8">
              <div
                className="flex min-h-[480px] flex-col gap-6 rounded-none bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-10 @[480px]:px-10 relative overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNrb-VnuuiSp3b0hKvJe7vnCFczJTI50imFFelYXnj8Odz-nGlsv_8-W7w_6ebaLA6EvCMliicYdQUTv2qfs-5rlJ1YjEBRbVclpEsB4D1aQqWn6OFZaIlHIgP7IqOVwiq7fnJhAeWavRpcNAreBTi2o5k_0HJAMyEGTtV8mUwqOLalk_yiAxOKGRZ_oY8eM1rNz4uD51xcivd0GzfykVepFz4w06NF7uFzzehMDlGNuxxqf34eistHSYdDkYwj1zTXwkkorzx8X5t")',
                  borderRadius: '20px 30px 10px 25px',
                }}
              >
                <div className="relative z-10 flex flex-col gap-2 text-left">
                  <h1 className="text-4xl @[480px]:text-5xl font-bold leading-tight tracking-wide text-slate-100" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
                    John Doe - AI Developer & Designer
                  </h1>
                  <h2 className="text-slate-200/90 text-sm @[480px]:text-base font-semibold" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 3px 12px rgba(0,0,0,0.6)' }}>
                    ✨ Passionate about building intelligent solutions that bridge the gap between data and user experience.
                  </h2>
                </div>
                <div className="relative z-10 flex flex-wrap gap-3">
                  <Link href="#ai-projects" className="flex h-10 px-4 @[480px]:h-12 @[480px]:px-5 items-center justify-center bg-white/5 text-black text-sm @[480px]:text-base font-medium transition-all hover:shadow-md hover:scale-105 border-3 border-white/10" style={{ borderRadius: '15px 8px 20px 5px' }}>
                    View My Work
                  </Link>
                  <Link href="#contact" className="flex h-10 px-4 @[480px]:h-12 @[480px]:px-5 items-center justify-center bg-white/5 text-black text-sm @[480px]:text-base font-medium transition-all hover:shadow-md hover:scale-105 border-3 border-white/10" style={{ borderRadius: '8px 20px 5px 15px' }}>
                    Download Résumé
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 关于我 - 手绘卡片 */}
        <section id="about" className="bg-white/5 border-4 border-white/10 p-8 shadow-lg" style={{ borderRadius: '25px 10px 20px 15px' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>✍️ About Me</h2>
          <p className="text-black text-base leading-relaxed font-medium">
            A brief introduction about my professional passion, core strengths, and career goals. I specialize in leveraging cutting-edge AI frameworks to create intuitive and impactful applications that solve real-world problems. 🚀
          </p>
        </section>

        {/* 技能 - 手绘网格 */}
        <section id="skills" className="bg-white/5 border-4 border-white/10 p-8 shadow-lg" style={{ borderRadius: '15px 25px 10px 20px' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-6" style={{ fontFamily: 'Caveat, cursive' }}>🛠️ Skills</h2>
          <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4 lg:grid-cols-5">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'PyTorch', icon: '⚡' },
              { name: 'JavaScript', icon: '✨' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Figma', icon: '🎨' },
              { name: 'SQL', icon: '💾' },
              { name: 'AWS', icon: '☁️' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 p-4 border-3 border-white/10 bg-white/5 shadow-md hover:shadow-lg hover:scale-105 transition-all"
                style={{ borderRadius: '18px 5px 22px 8px' }}
              >
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-xs font-bold text-center text-black">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI 项目展示 - 手绘卡片 */}
        <section id="ai-projects" className="bg-white/5 border-4 border-white/10 p-8 shadow-lg" style={{ borderRadius: '10px 25px 15px 20px' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-6" style={{ fontFamily: 'Caveat, cursive' }}>🎨 AI Projects Showcase</h2>
          <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI Generated Images', desc: 'Exploring GANs to create surreal landscapes.', href: '/portfolio/ai-gallery', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N' },
              { title: 'AI Animated Video', desc: 'Text-to-video synthesis for short stories.', href: '/portfolio/video-showcase', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_' },
              { title: 'Image Recognition App', desc: 'A deep learning model identifying objects.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARaXQGn405Sku70YMjDhwIqK85SfHiL4Bdaj_XieW1Z7NVSnsmwgU-ET4z46eSeDoAgZg1hf_k0kpk7fpYqoDqZlTCXqWSH1mbyNwSffx0kgN5EfBLoZRuNUYPBVLnOqr6PESIcxEbc8Oipo4oZL2hA5ljtOi97fXrD4mRTA12Aa81Dt9M_KTJDc7KwzI5gpx8sK7JLhFBmEID4WijmqNKIYFBHrGFNC8G7FdEW8L9C7V6QaD9I_u8dGf5YtNDO94WsO7El9A9hht4' },
              { title: 'AI Chat Mini-Program', desc: 'Integrated LLM for customer service.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCammeVyzQpTHVii75Pib5hOaqvBtxHdD2bKoRh3yfpLQYKwlA5onCzUo9kRobmFdSnOa79hbv9Yv_UUOxmnyv77PZUrKa1p2BunG62cMRqOadP8PKXEPHOFnHJxZjipJoZIK77RXDdBbHObUG2EfHANl1JHfEQHDEqKh9WUHY8LqKdxUstMXB8Sga3oj_W5XndIi4XkjBMqQv2iu_jFFw63ri-SoAR5R-wv_umVBpSjQxDBkx2ZR7pMkL_Qu9I-cWiPhC3yHQv_3he' },
              { title: 'Sentiment Analysis Web', desc: 'Web app to analyze text sentiment in real-time.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMgzzUoQ3GPytIJpi7DMuOGBm6k1eHIyKiAkTh-LqQ48iMdzj1_iL-3kVXBpUTqfbqzke_eeezZja6159em_JtSIu8Po3FAk4cveALX4jEci1n9a9QutiQx9Sng4zJvaU718PH5-PqdvHhDtRWXkfpq9vxwx3LkTwTCJKnvYCSGqtdc-tTBxYJUXyes7bz6ht36lmYJxIbQSGCkwWyXlFk6aVnwlaWkN1BNrOEaqqJRRqLDfwUcmc0ZR3Bg4PNKk_lhrKA0-sMmsS' },
              { title: 'More Projects', desc: 'View all my creative AI explorations.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuNRYQ8_jft-U2HzKo5sFI3SLiSZ5l0I_C4BpFKLIi2-KDeo4u_0G9KIkhkOuvheXV7RZ-OqKHwbQYnfMPQDCgzjVFS8uc7rmY8riLGRbZiVoO8UjYtxRRjyI_yYbwEcCuD4RDBUisQ7mOuZAY71PNdFnCFBa-Hf4ZOoz53NAO58kSsr2bSgS4Di_RX0s3wGSc5XRKMIUd1pHqcZuamJgkOZN-2F7xo4uE9dz_0f46p-jr4V1qkC_q8IMIZK-3DMj84JX_Gvz2_WqX' },
            ].map((card) => (
              <Link key={card.title} href={card.href || '#'} className="relative flex flex-col overflow-hidden border-4 border-white/10 bg-white/5 shadow-lg hover:shadow-xl hover:scale-105 transition-all group" style={{ borderRadius: '20px 8px 15px 25px' }}>
                <img src={card.src} alt={card.title} className="aspect-video w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
                  <h3 className="font-bold text-black group-hover:text-gray-700 transition-colors" style={{ fontFamily: 'Caveat, cursive', fontSize: '18px' }}>{card.title}</h3>
                  <p className="mt-1 text-xs text-black font-medium">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 博客 - 手绘卡片 */}
        <section id="blog" className="bg-white/5 border-4 border-white/10 p-8 shadow-lg" style={{ borderRadius: '15px 20px 10px 25px' }}>
          <h2 className="text-3xl font-bold text-slate-100 mb-6" style={{ fontFamily: 'Caveat, cursive' }}>📝 My Blog</h2>
          <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
            {[
              { date: 'May 20, 2024', title: 'The Future of Generative AI: Beyond Text and Images', excerpt: 'Exploring the next frontier of AI generation, including video, 3D models, and interactive experiences.' },
              { date: 'April 15, 2024', title: 'A Deep Dive into Transformers and Attention Mechanisms', excerpt: "Breaking down the core concepts behind the models powering today's most advanced language AI." },
            ].map((post) => (
              <a key={post.title} href="/blog" className="flex flex-col gap-4 border-3 border-white/10 bg-white/5 p-4 hover:shadow-lg hover:scale-105 transition-all group" style={{ borderRadius: '18px 10px 20px 8px' }}>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-black font-semibold">{post.date}</span>
                  <h3 className="font-bold text-black group-hover:text-gray-700 transition-colors" style={{ fontFamily: 'Caveat, cursive', fontSize: '18px' }}>{post.title}</h3>
                </div>
                <p className="text-sm text-black font-medium">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                  <span>Read More</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t-4 border-white/10 py-12 px-4 text-center text-slate-400 text-sm font-medium">
        <p>© 2024 John Doe. All rights reserved. 💝</p>
      </footer>
    </div>
  )
}
