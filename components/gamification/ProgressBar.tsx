'use client'

import { LevelInfo } from '@/types'
import { LEVELS } from '@/lib/constants'

interface ProgressBarProps {
  levelInfo: LevelInfo
}

export default function ProgressBar({ levelInfo }: ProgressBarProps) {
  const { level, progressToNext, messagesToNextLevel, isMastered } = levelInfo
  const nextLevel = LEVELS.find(l => l.level === level + 1)

  return (
    <div className="p-4 rounded-2xl bg-white border border-[var(--warm-200)] shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-[var(--warm-500)]">{isMastered ? 'Max Level Reached!' : 'Progress to Next Level'}</span>
        {!isMastered && nextLevel && <span className="text-xs font-medium text-[var(--teal-600)]">{messagesToNextLevel} to go</span>}
      </div>
      <div className="relative h-3 rounded-full bg-[var(--warm-100)] overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out ${isMastered ? 'bg-gradient-to-r from-[var(--gold-400)] to-[var(--teal-500)]' : 'bg-gradient-to-r from-[var(--teal-400)] to-[var(--teal-500)]'}`}
          style={{ width: `${progressToNext}%` }}
        />
        <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)', backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
        {progressToNext > 20 && <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" style={{ left: '20%' }} />}
        {progressToNext > 50 && <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" style={{ left: '50%' }} />}
        {progressToNext > 80 && <div className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/50" style={{ left: '80%' }} />}
      </div>
      {!isMastered && nextLevel && (
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">{levelInfo.icon}</span>
            <span className="text-xs font-medium text-[var(--warm-600)]">Level {level}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-[var(--teal-600)]">Level {nextLevel.level}</span>
            <span className="text-lg">{nextLevel.icon}</span>
          </div>
        </div>
      )}
      {isMastered && (
        <div className="mt-3 text-center">
          <span className="text-xs text-[var(--teal-600)] font-medium">You&apos;ve mastered the art of clean! Keep chatting to maintain your streak.</span>
        </div>
      )}
    </div>
  )
}
