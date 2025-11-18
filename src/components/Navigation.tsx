'use client'

import Link from 'next/link'
import { useState } from 'react'
import { socialLinks } from '@/config/social.config'
import { defaultSiteConfig } from '@/config/site.config'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = defaultSiteConfig.navigation

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const displayedSocials = socialLinks.slice(0, 3)
  const hiddenSocials = socialLinks.slice(3)
  const hasDropdown = hiddenSocials.length > 0

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl flex items-center justify-between whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="size-5 text-white/70">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-wide text-black" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>John Doe</h2>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          item.href.startsWith('#') ? (
            <a
              key={item.label}
              href={item.href}
              className="text-black hover:text-gray-700 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="text-black hover:text-gray-700 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          )
        ))}
      </nav>

      {/* 社交媒体按钮 */}
      <div className="hidden md:flex items-center gap-3 relative">
        {/* 显示前三个社交媒体 */}
        {displayedSocials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-black hover:bg-white/20 transition-colors border border-white/20"
            title={social.name}
          >
            <span className="material-symbols-outlined text-lg">{social.icon}</span>
          </a>
        ))}

        {/* 下拉菜单按钮 */}
        {hasDropdown && (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-black hover:bg-white/20 transition-colors border border-white/20"
              title="More"
            >
              <span className="material-symbols-outlined text-lg">more_horiz</span>
            </button>

            {/* 下拉菜单内容 */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg py-2 min-w-max">
                {hiddenSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center gap-3 px-4 py-2 text-black hover:text-gray-700 hover:bg-white/20 transition-colors"
                    title={social.name}
                  >
                    <span className="material-symbols-outlined text-lg">{social.icon}</span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
