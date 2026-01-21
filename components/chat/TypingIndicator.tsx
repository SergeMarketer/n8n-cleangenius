'use client'

interface TypingIndicatorProps {
  isVisible: boolean
}

export default function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex flex-col items-start max-w-[85%]">
        <div className="flex items-center gap-2 mb-1.5 ml-1">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white animate-sparkle" fill="currentColor">
              <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-[var(--teal-700)]">CleanGenius</span>
        </div>
        <div className="bubble-coach bg-white border border-[var(--warm-200)] px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--teal-400)]" style={{ animation: 'bubble-rise 1.4s ease-in-out infinite', animationDelay: '0s' }} />
              <div className="w-2 h-2" style={{ animation: 'sparkle 1.2s ease-in-out infinite', animationDelay: '0.2s' }}>
                <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--sage-400)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
              </div>
              <div className="w-3 h-3 rounded-full bg-[var(--teal-300)]" style={{ animation: 'bubble-rise 1.4s ease-in-out infinite', animationDelay: '0.3s' }} />
              <div className="w-1.5 h-1.5" style={{ animation: 'sparkle 1.2s ease-in-out infinite', animationDelay: '0.5s' }}>
                <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--teal-400)]" fill="currentColor"><path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" /></svg>
              </div>
              <div className="w-2 h-2 rounded-full bg-[var(--sage-300)]" style={{ animation: 'bubble-rise 1.4s ease-in-out infinite', animationDelay: '0.6s' }} />
            </div>
            <span className="text-xs text-[var(--warm-400)] italic">thinking...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
