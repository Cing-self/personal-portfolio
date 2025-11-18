/**
 * AI 项目配置
 * 首页 AI Projects Showcase 部分的数据
 */

export interface AIProject {
  id: string
  title: string
  icon: string // Material Symbols 图标名称
  desc: string
  href?: string // 可选的跳转链接
  src: string // 项目缩略图 URL
}

// 默认项目数据
export const defaultAIProjects: AIProject[] = [
  {
    id: '1',
    title: 'AI Generated Images',
    icon: 'image',
    desc: 'Exploring GANs to create surreal landscapes.',
    href: '/portfolio/ai-gallery',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N',
  },
  {
    id: '2',
    title: 'AI Animated Video',
    icon: 'smart_display',
    desc: 'Text-to-video synthesis for short stories.',
    href: '/portfolio/video-showcase',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
  },
  {
    id: '3',
    title: 'Image Recognition App',
    icon: 'phone_iphone',
    desc: 'A deep learning model identifying objects.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARaXQGn405Sku70YMjDhwIqK85SfHiL4Bdaj_XieW1Z7NVSnsmwgU-ET4z46eSeDoAgZg1hf_k0kpk7fpYqoDqZlTCXqWSH1mbyNwSffx0kgN5EfBLoZRuNUYPBVLnOqr6PESIcxEbc8Oipo4oZL2hA5ljtOi97fXrD4mRTA12Aa81Dt9M_KTJDc7KwzI5gpx8sK7JLhFBmEID4WijmqNKIYFBHrGFNC8G7FdEW8L9C7V6QaD9I_u8dGf5YtNDO94WsO7El9A9hht4',
  },
  {
    id: '4',
    title: 'AI Chat Mini-Program',
    icon: 'qr_code_2',
    desc: 'Integrated LLM for customer service.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCammeVyzQpTHVii75Pib5hOaqvBtxHdD2bKoRh3yfpLQYKwlA5onCzUo9kRobmFdSnOa79hbv9Yv_UUOxmnyv77PZUrKa1p2BunG62cMRqOadP8PKXEPHOFnHJxZjipJoZIK77RXDdBbHObUG2EfHANl1JHfEQHDEqKh9WUHY8LqKdxUstMXB8Sga3oj_W5XndIi4XkjBMqQv2iu_jFFw63ri-SoAR5R-wv_umVBpSjQxDBkx2ZR7pMkL_Qu9I-cWiPhC3yHQv_3he',
  },
  {
    id: '5',
    title: 'Sentiment Analysis Web',
    icon: 'language',
    desc: 'Web app to analyze text sentiment in real-time.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMgzzUoQ3GPytIJpi7DMuOGBm6k1eHIyKiAkTh-LqQ48iMdzj1_iL-3kVXBpUTqfbqzke_eeezZja6159em_JtSIu8Po3FAk4cveALX4jEci1n9a9QutiQx9Sng4zJvaU718PH5-PqdvHhDtRWXkfpq9vxwx3LkTwTCJKnvYCSGqtdc-tTBxYJUXyes7bz6ht36lmYJxIbQSGCkwWyXlFk6aVnwlaWkN1BNrOEaqqJRRqLDfwUcmc0ZR3Bg4PNKk_lhrKA0-sMmsS',
  },
  {
    id: '6',
    title: 'More Projects',
    icon: 'more_horiz',
    desc: 'View all my creative AI explorations.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuNRYQ8_jft-U2HzKo5sFI3SLiSZ5l0I_C4BpFKLIi2-KDeo4u_0G9KIkhkOuvheXV7RZ-OqKHwbQYnfMPQDCgzjVFS8uc7rmY8riLGRbZiVoO8UjYtxRRjyI_yYbwEcCuD4RDBUisQ7mOuZAY71PNdFnCFBa-Hf4ZOoz53NAO58kSsr2bSgS4Di_RX0s3wGSc5XRKMIUd1pHqcZuamJgkOZN-2F7xo4uE9dz_0f46p-jr4V1qkC_q8IMIZK-3DMj84JX_Gvz2_WqX',
  },
]
