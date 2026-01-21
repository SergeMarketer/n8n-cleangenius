'use client'

import { useEffect, useState } from 'react'
import { Achievement } from '@/types'

interface AchievementToastProps {
  achievement: Achievement | null
  onDismiss: () => void
}

export default function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([])

  useEffect(() => {
    if (achievement) {
      setIsVisible(true)
      const colors = ['var(--teal-400)', 'var(--sage-400)', 'var(--gold-400)', 'var(--coral-400)']
      const newConfetti = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      setConfetti(newConfetti)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onDismiss, 300)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [achievement, onDismiss])

  if (!achievement) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((piece) => (
          <div key={piece.id} className="absolute w-2 h-2 rounded-full" style={{ left: `${piece.left}%`, top: '-10px', backgroundColor: piece.color, animation: 'confetti-fall 2s ease-out forwards', animationDelay: `${piece.delay}s` }} />
        ))}
      </div>
      <div className={`relative bg-white rounded-3xl shadow-2xl p-6 max-w-sm w-full border-2 border-[var(--teal-200)] pointer-events-auto ${isVisible ? 'animate-bounce-gentle' : 'scale-90 opacity-0'} transition-all duration-300`}>
        <button onClick={() => { setIsVisible(false); setTimeout(onDismiss, 300) }} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-[var(--warm-100)] transition-colors" aria-label="Close">
          <svg className="w-4 h-4 text-[var(--warm-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="text-center">
          <div className="relative inline-flex mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-400)] to-[var(--gold-400)] rounded-full opacity-30 blur-xl scale-150 animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] flex items-center justify-center shadow-xl">
              <span className="text-4xl">{achievement.icon}</span>
            </div>
            <div className="absolute -top-2 -right-2 animate-sparkle">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--gold-400)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
            </div>
            <div className="absolute -bottom-1 -left-3 animate-sparkle" style={{ animationDelay: '0.3s' }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--teal-300)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
            </div>
          </div>
          <h3 className="font-outfit font-bold text-xl text-[var(--warm-800)] mb-1">{achievement.title}</h3>
          <p className="text-sm text-[var(--warm-500)]">{achievement.description}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--teal-300)]" />
            <span className="text-lg">\uD83C\uDF89</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--teal-300)]" />
          </div>
        </div>
      </div>
    </div>
  )
}
