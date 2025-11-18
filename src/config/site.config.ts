/**
 * 网站配置
 * 所有可配置的内容集中在这个文件中
 */

export interface SiteConfig {
  // 基本信息
  basicInfo: BasicInfo
  // 导航菜单
  navigation: NavigationItem[]
  // 社交媒体链接
  socials: SocialLink[]
  // 技术栈
  techStack: TechItem[]
}

export interface BasicInfo {
  name: string
  title: string
  description: string
  location: string
  email: string
  avatar: string // 头像 URL
  bio: ContentBlock // 个人简介，支持 markdown 和 html
}

export interface ContentBlock {
  format: 'markdown' | 'html'
  content: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface TechItem {
  name: string
  icon: string // 图标 URL
}

// 默认配置
export const defaultSiteConfig: SiteConfig = {
  basicInfo: {
    name: 'John Doe',
    title: 'AI Specialist & Developer',
    description: 'I build intelligent solutions for complex problems. Passionate about machine learning and creating impactful AI-driven products.',
    location: 'San Francisco, CA',
    email: 'johndoe.ai.dev@email.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZR0_unBRHttGAQS5yhJjpcA4zJVHPLm57DciVLtm1em_Z1PKyMPmRvLwg93xo43wsFq84ZwWo08xJgV-Fl6HGJb84_NA8X1c0k-nfma23nTx0lsr4dxYvg2jUOkPvkmP56XdR3bfRg09vEzQiPJYlfmm5qef3lErPAwRV6xudqvFwwRbEKC893GHLaeS0YX7JjeEy695pcifkn8iWhteGTeG8yHry8tK11t9wVLmLB2MP4QQn6nrd0L5OixTVSsUZCwBRQvUwKudf',
    bio: {
      format: 'html',
      content: 'A detailed explanation of my personal philosophy, passion for AI, and career goals. I aim to leverage technology to solve real-world challenges and contribute to the advancement of artificial intelligence.'
    }
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Project', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  socials: [
    { name: 'GitHub', icon: 'code', url: '#' },
    { name: 'LinkedIn', icon: 'business_center', url: '#' },
    { name: 'Blog', icon: 'article', url: '#' }
  ],
  techStack: [
    { name: 'Python', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjwEIbuQPlWPW5_cUi9WDT6taflpdQTYw9nVMdw7GFGwBUkFqeZlZcfqwx3hlGXZfnB6tw4uiFUPNlfpDaTVDKD8QU0gaUjqdOGKEl_gpJ0VNdWHrQ264wDweKlk4kaHPLPbR96vdY5NYg3tpYTGMv61CV_Cad337pYLfrtDctfBhNoCTZ4PnuUBX7b1QbusGrFtNNVqJcmLllI-RwiRtegvup8Dn903niGmunlb1eSeuk_xHHPRsmS-RJWB2xfM8Ek_5PKHxQIyJ' },
    { name: 'TensorFlow', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_0pFW1uFIpi1DvrVcY69Yh_KT1oXnKlhhTLal6yu3uGWReoZLcJitYTiFLnhQ8fYgc2QqMCVAdsV6BPT0bfQaoyyfmib8ZJf1HImw5Y86GHJ6sOFnFjdi0MajxEN0k_9dgwvq4Cg5m6kvUhdKd6rkw0YBYGYExIsEjFI-PQcN8aFnoIxWEp_OURJrOpXQ1dCzA38l1Sy-S5pf1sL_ZVRy_lkd2_3XgIA2b7Zh1F-8mKw5PVKNlanA-fs8PHl-9SHC2zDKgInWuei' },
    { name: 'PyTorch', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsPfhewKjxJG7-0lb6U5eQG5Xe5adHydZnmrHgtvKeBmZ-d4OKxEK2QkezPjTnw_BVbLZVKt7B2dSSe4fc_9xmP8q3oVACqBfizSGNLBGzALR32m-EFxSkYNiCdZ-0iKS7QnMVxtyzTc_NuGZoA8Bw43rzl7_sZwe6uTGckGED5uXKckXTOWLFHgV9_UnwiMz4uGow-guJWdD_kXBuKsDQ2Wph133nnfvbjLSziQPMHf_O4actgzWJ0k6n6Y-XQu8HSyrDVSFJc8N' },
    { name: 'Docker', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV4jewRr7e2liP5lFZPXvhqdyX_mwpkAWzDEWWQKL7B4NpQi9_qdbvDbOYUZipN_kwFZy7Fgv_Rf3jHseXRWs3cy-5CG365qJsMmaUbjfM6vSCSr1t31zTQMEJeheu4go6RFd125L5KvxlH-qGRgHnQVEQWUKKsjmUFmT_FEzBREHZlNBfwSCQ1zUX7enSyBFfZmbn_RouQV8JVVD-SIe7Cqjp8Wb6fD1uyT4WxYqOOEJV39zkCzDwgVy6pLs0k5YAMhPr36lFBPEK' },
    { name: 'AWS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lBDef7e_NrMxm3BaY_4QpvjhmlCO0Mr_TxgN-iCSQjjN-2MXgmKsrio9kpZpYLKAJ1LeZqkmrIuGm86PTvpom3eYDHb_y6sxmNwusBD1dU0hX_rPo5R8KW-bti9yuK1NN2p3_3MiLujBN6m82nPqVOT0dF8l_o0Kkx1GzIVcusx4D9r73kRwPjYKYSk3YJVc7eR1rWJJklyLcBieFy71Xo3BuR4F1LA34CvQfsB3bnZT6s2-ZNtsBYVqSNDnx3eUhdI9lftGeEXe' }
  ]
}
