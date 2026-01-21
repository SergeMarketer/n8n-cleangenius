'use client'

import { LevelInfo } from '@/types'

interface LevelBadgeProps {
  levelInfo: LevelInfo
}

export default function LevelBadge({ levelInfo }: LevelBadgeProps) {
  const { level, title, icon, isMastered } = levelInfo

  return (
    <div className="relative">
      {isMastered && <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--teal-400)] to-[var(--gold-400)] opacity-20 blur-xl animate-glow" />}
      <div className={`relative p-5 rounded-2xl bg-gradient-to-br from-white to-[var(--cream-100)] border border-[var(--warm-200)] shadow-sm ${isMastered ? 'ring-2 ring-[var(--teal-400)] ring-opacity-50' : ''}`}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isMastered ? 'bg-gradient-to-br from-[var(--gold-400)] to-[var(--teal-500)]' : 'bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)]'}`}>
              <span className="text-2xl">{icon}</span>
            </div>
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white shadow-sm ${isMastered ? 'bg-gradient-to-br from-[var(--gold-400)] to-[var(--coral-400)]' : 'bg-[var(--sage-500)]'}`}>
              {level}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[var(--warm-400)] uppercase tracking-wide">Level {level}</span>
              {isMastered && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--gold-400)] text-white">MASTERED</span>}
            </div>
            <h3 className="font-outfit font-semibold text-lg text-[var(--warm-800)] truncate">{title}</h3>
          </div>
        </div>
        {isMastered && (
          <>
            <div className="absolute top-2 right-2 w-2 h-2 animate-sparkle">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--gold-400)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
            </div>
            <div className="absolute bottom-3 right-4 w-1.5 h-1.5 animate-sparkle" style={{ animationDelay: '0.5s' }}>
              <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--teal-400)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
