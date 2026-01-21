'use client'

import { GameState } from '@/types'
import LevelBadge from './LevelBadge'
import ProgressBar from './ProgressBar'
import MessageCounter from './MessageCounter'
import StreakBadge from './StreakBadge'
import TipOfDay from './TipOfDay'

interface SidebarProps {
  gameState: GameState
  tipOfTheDay: string
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ gameState, tipOfTheDay, isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] lg:sticky lg:top-16 lg:w-auto lg:max-w-none bg-gradient-to-b from-[var(--cream-50)] to-[var(--sage-50)] border-l border-[var(--warm-200)] overflow-y-auto scrollbar-hide z-40 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
      >
        <div className="lg:hidden sticky top-0 flex justify-between items-center p-4 bg-[var(--cream-50)]/90 backdrop-blur-sm border-b border-[var(--warm-200)]">
          <span className="font-outfit font-semibold text-[var(--warm-800)]">Your Progress</span>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-[var(--warm-200)] transition-colors" aria-label="Close sidebar">
            <svg className="w-5 h-5 text-[var(--warm-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="animate-slide-in-right" style={{ animationDelay: '0s' }}><LevelBadge levelInfo={gameState.currentLevel} /></div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.05s' }}><ProgressBar levelInfo={gameState.currentLevel} /></div>
          <div className="grid grid-cols-1 gap-3">
            <div className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}><MessageCounter count={gameState.messageCount} /></div>
            <div className="animate-slide-in-right" style={{ animationDelay: '0.15s' }}><StreakBadge streak={gameState.streak} /></div>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}><TipOfDay tip={tipOfTheDay} /></div>
          <div className="pt-4 text-center animate-slide-in-right" style={{ animationDelay: '0.25s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-[var(--warm-200)]">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--teal-500)]" fill="currentColor">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <span className="text-[10px] font-medium text-[var(--warm-500)]">Powered by CleanGenius AI</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
