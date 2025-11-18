'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { socialLinks } from '@/config/social.config'

interface Experience {
  id: string
  years: string
  title: string
  company: string
  location: string
  description: string
}

interface Portfolio {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    years: '2021 - Present',
    title: 'Senior AI Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    description: 'Lead developer on a project to create a recommendation engine, increasing user engagement by 25%. Responsible for designing, training, and deploying machine learning models at scale. Collaborated with cross-functional teams to define AI strategy and product roadmap.'
  },
  {
    id: '2',
    years: '2019 - 2021',
    title: 'Machine Learning Developer',
    company: 'Innovate Inc.',
    location: 'Boston, MA',
    description: 'Developed NLP models for sentiment analysis and text summarization. Contributed to a 15% improvement in data processing efficiency by optimizing pipelines and algorithms.'
  }
]

const portfolioItems: Portfolio[] = [
  {
    id: '1',
    title: 'Generative Art AI',
    description: 'An AI model that generates unique pieces of art based on textual descriptions, using a custom-trained GAN.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N',
    tags: ['Python', 'TensorFlow', 'GAN']
  },
  {
    id: '2',
    title: 'Real-time Object Detection API',
    description: 'A high-performance REST API that can identify and classify objects in video streams with low latency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
    tags: ['PyTorch', 'FastAPI', 'Docker']
  }
]

const techStack = [
  { name: 'Python', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjwEIbuQPlWPW5_cUi9WDT6taflpdQTYw9nVMdw7GFGwBUkFqeZlZcfqwx3hlGXZfnB6tw4uiFUPNlfpDaTVDKD8QU0gaUjqdOGKEl_gpJ0VNdWHrQ264wDweKlk4kaHPLPbR96vdY5NYg3tpYTGMv61CV_Cad337pYLfrtDctfBhNoCTZ4PnuUBX7b1QbusGrFtNNVqJcmLllI-RwiRtegvup8Dn903niGmunlb1eSeuk_xHHPRsmS-RJWB2xfM8Ek_5PKHxQIyJ' },
  { name: 'TensorFlow', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_0pFW1uFIpi1DvrVcY69Yh_KT1oXnKlhhTLal6yu3uGWReoZLcJitYTiFLnhQ8fYgc2QqMCVAdsV6BPT0bfQaoyyfmib8ZJf1HImw5Y86GHJ6sOFnFjdi0MajxEN0k_9dgwvq4Cg5m6kvUhdKd6rkw0YBYGYExIsEjFI-PQcN8aFnoIxWEp_OURJrOpXQ1dCzA38l1Sy-S5pf1sL_ZVRy_lkd2_3XgIA2b7Zh1F-8mKw5PVKNlanA-fs8PHl-9SHC2zDKgInWuei' },
  { name: 'PyTorch', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsPfhewKjxJG7-0lb6U5eQG5Xe5adHydZnmrHgtvKeBmZ-d4OKxEK2QkezPjTnw_BVbLZVKt7B2dSSe4fc_9xmP8q3oVACqBfizSGNLBGzALR32m-EFxSkYNiCdZ-0iKS7QnMVxtyzTc_NuGZoA8Bw43rzl7_sZwe6uTGckGED5uXKckXTOWLFHgV9_UnwiMz4uGow-guJWdD_kXBuKsDQ2Wph133nnfvbjLSziQPMHf_O4actgzWJ0k6n6Y-XQu8HSyrDVSFJc8N' },
  { name: 'Docker', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV4jewRr7e2liP5lFZPXvhqdyX_mwpkAWzDEWWQKL7B4NpQi9_qdbvDbOYUZipN_kwFZy7Fgv_Rf3jHseXRWs3cy-5CG365qJsMmaUbjfM6vSCSr1t31zTQMEJeheu4go6RFd125L5KvxlH-qGRgHnQVEQWUKKsjmUFmT_FEzBREHZlNBfwSCQ1zUX7enSyBFfZmbn_RouQV8JVVD-SIe7Cqjp8Wb6fD1uyT4WxYqOOEJV39zkCzDwgVy6pLs0k5YAMhPr36lFBPEK' },
  { name: 'AWS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lBDef7e_NrMxm3BaY_4QpvjhmlCO0Mr_TxgN-iCSQjjN-2MXgmKsrio9kpZpYLKAJ1LeZqkmrIuGm86PTvpom3eYDHb_y6sxmNwusBD1dU0hX_rPo5R8KW-bti9yuK1NN2p3_3MiLujBN6m82nPqVOT0dF8l_o0Kkx1GzIVcusx4D9r73kRwPjYKYSk3YJVc7eR1rWJJklyLcBieFy71Xo3BuR4F1LA34CvQfsB3bnZT6s2-ZNtsBYVqSNDnx3eUhdI9lftGeEXe' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <Breadcrumb items={[{ label: 'About' }]} />

      <main className="mt-8 flex flex-col gap-16 mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Profile Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZR0_unBRHttGAQS5yhJjpcA4zJVHPLm57DciVLtm1em_Z1PKyMPmRvLwg93xo43wsFq84ZwWo08xJgV-Fl6HGJb84_NA8X1c0k-nfma23nTx0lsr4dxYvg2jUOkPvkmP56XdR3bfRg09vEzQiPJYlfmm5qef3lErPAwRV6xudqvFwwRbEKC893GHLaeS0YX7JjeEy695pcifkn8iWhteGTeG8yHry8tK11t9wVLmLB2MP4QQn6nrd0L5OixTVSsUZCwBRQvUwKudf"
              alt="John Doe"
              width={160}
              height={160}
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-black text-black mb-2">
              John Doe - AI Specialist & Developer
            </h1>
            <p className="text-slate-300 mb-4">
              I build intelligent solutions for complex problems. Passionate about machine learning and creating impactful AI-driven products.
            </p>
            <p className="text-slate-400 text-sm mb-6">
              Based in San Francisco, CA
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/15 text-black hover:bg-white/25 transition-colors font-medium border border-white/30"
                  title={social.name}
                >
                  <span className="material-symbols-outlined text-xl">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-white/30 rounded"></div>
            <h2 className="text-2xl font-bold text-black">About Me</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            A detailed explanation of my personal philosophy, passion for AI, and career goals. I aim to leverage technology to solve real-world challenges and contribute to the advancement of artificial intelligence. My journey began with a fascination for how machines can learn and adapt, which has driven me to explore various facets of AI, from natural language processing to computer vision. I thrive in collaborative environments where I can share ideas and build solutions that make a tangible impact.
          </p>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-white/30 rounded"></div>
            <h2 className="text-2xl font-bold text-black">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-white/20 pl-6 py-2">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-slate-400 text-sm">{exp.years}</p>
                    <h3 className="text-xl font-bold text-black mt-1">{exp.title}</h3>
                    <p className="text-slate-300 text-sm font-medium">{exp.company}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                <p className="text-slate-300 mt-3">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-white/30 rounded"></div>
            <h2 className="text-2xl font-bold text-black">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
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
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-white/30 rounded"></div>
            <h2 className="text-2xl font-bold text-black">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-black text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400 font-medium">
        <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
