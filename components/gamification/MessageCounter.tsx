'use client'

import { useEffect, useState } from 'react'

interface MessageCounterProps {
  count: number
}

export default function MessageCounter({ count }: MessageCounterProps) {
  const [displayCount, setDisplayCount] = useState(count)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (count !== displayCount) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayCount(count)
        setIsAnimating(false)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [count, displayCount])

  return (
    <div className="p-4 rounded-2xl bg-white border border-[var(--warm-200)] shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--sage-100)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--sage-600)]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium text-[var(--warm-400)] uppercase tracking-wide">Messages Sent</span>
          <div className="flex items-baseline gap-1">
            <span className={`font-outfit font-bold text-2xl text-[var(--warm-800)] ${isAnimating ? 'animate-bounce-gentle' : ''}`}>{displayCount}</span>
            {isAnimating && <span className="text-xs text-[var(--teal-500)] font-medium animate-fade-in">+1</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
