'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { useState } from 'react'
import { socialLinks } from '@/config/social.config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现表单提交逻辑
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background-dark text-black">
      <Navigation />
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* 主要内容 */}
      <main className="mt-8 flex flex-col gap-8 mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-black mb-4">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to send me a message or connect with me on social media.
          </p>
        </div>

        {/* 联系表单和联系方式 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 发送消息表单 */}
          <div className="lg:col-span-2 border border-white/10 rounded-xl bg-white/5 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name 和 Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-black font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white/20 text-black font-bold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 联系方式和社交媒体 */}
          <div className="flex flex-col gap-6">
            {/* Contact Details */}
            <div className="border border-white/10 rounded-xl bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Contact Details</h3>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">mail</span>
                <span className="text-slate-300 font-medium">johndoe.ai.dev@email.com</span>
              </div>
            </div>

            {/* Follow Me */}
            <div className="border border-white/10 rounded-xl bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Follow Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-black hover:bg-white/25 transition-colors border border-white/30"
                    title={social.name}
                  >
                    <span className="material-symbols-outlined">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-slate-400 font-medium">
        <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
