export interface SocialLink {
  name: string
  icon: string
  url: string
  handle?: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'code',
    url: '#',
    handle: '@johndoe'
  },
  {
    name: 'LinkedIn',
    icon: 'business_center',
    url: '#',
    handle: 'in/johndoe'
  },
  {
    name: 'Twitter',
    icon: 'share',
    url: '#',
    handle: '@johndoe_ai'
  },
  {
    name: 'Instagram',
    icon: 'image',
    url: '#',
    handle: '@johndoe'
  },
  {
    name: 'Discord',
    icon: 'forum',
    url: '#',
    handle: 'johndoe#1234'
  },
  {
    name: 'YouTube',
    icon: 'play_circle',
    url: '#',
    handle: '@johndoe'
  }
]
