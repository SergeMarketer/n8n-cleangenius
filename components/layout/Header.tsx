'use client'

import { useState } from 'react'

interface HeaderProps {
  onMenuToggle?: () => void
  showMenuButton?: boolean
}

export default function Header({ onMenuToggle, showMenuButton = false }: HeaderProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-strong border-b border-[var(--warm-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-3 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-10 h-10">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] opacity-20 blur-md transition-all duration-300 ${isHovered ? 'scale-125 opacity-30' : 'scale-100'}`} />
              <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] flex items-center justify-center shadow-lg transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
                <svg viewBox="0 0 24 24" className={`w-6 h-6 text-white transition-transform duration-500 ${isHovered ? 'rotate-12' : ''}`} fill="currentColor">
                  <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                </svg>
                <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--sage-300)] transition-all duration-300 ${isHovered ? 'scale-110 opacity-100' : 'opacity-70'}`} />
                <div className={`absolute -bottom-0.5 -left-0.5 w-2 h-2 rounded-full bg-[var(--teal-200)] transition-all duration-300 delay-75 ${isHovered ? 'scale-110 opacity-100' : 'opacity-60'}`} />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-outfit font-bold text-xl tracking-tight text-[var(--warm-800)]">
                Clean<span className="text-[var(--teal-600)]">Genius</span>
              </h1>
              <span className="text-[10px] font-medium text-[var(--warm-500)] tracking-wide uppercase">AI Cleaning Coach</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--sage-50)] border border-[var(--sage-200)]">
              <div className="w-2 h-2 rounded-full bg-[var(--teal-500)] animate-pulse" />
              <span className="text-xs font-medium text-[var(--sage-600)]">Online</span>
            </div>
            {showMenuButton && (
              <button onClick={onMenuToggle} className="lg:hidden p-2 rounded-xl hover:bg-[var(--warm-200)] transition-colors" aria-label="Toggle sidebar">
                <svg className="w-6 h-6 text-[var(--warm-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
