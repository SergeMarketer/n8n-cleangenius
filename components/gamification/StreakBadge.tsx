'use client'

interface StreakBadgeProps {
  streak: number
}

export default function StreakBadge({ streak }: StreakBadgeProps) {
  const isHotStreak = streak >= 7
  const isWarming = streak >= 3

  return (
    <div className={`p-4 rounded-2xl border shadow-sm ${isHotStreak ? 'bg-gradient-to-br from-[var(--coral-400)]/10 to-[var(--gold-400)]/10 border-[var(--coral-400)]/30' : 'bg-white border-[var(--warm-200)]'}`}>
      <div className="flex items-center gap-3">
        <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center ${isHotStreak ? 'bg-gradient-to-br from-[var(--coral-400)] to-[var(--gold-400)]' : isWarming ? 'bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-500)]' : 'bg-[var(--warm-200)]'}`}>
          <span className={`text-xl ${isHotStreak ? 'animate-float' : ''}`}>{isHotStreak ? '\uD83D\uDD25' : isWarming ? '\u2728' : '\uD83D\uDCAB'}</span>
          {isHotStreak && (
            <>
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" style={{ animation: 'bubble-rise 1s ease-out infinite' }} />
              <div className="absolute -top-0.5 right-0 w-1 h-1 rounded-full bg-[var(--coral-400)]" style={{ animation: 'bubble-rise 1.2s ease-out infinite', animationDelay: '0.3s' }} />
            </>
          )}
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium text-[var(--warm-400)] uppercase tracking-wide">Daily Streak</span>
          <div className="flex items-baseline gap-1.5">
            <span className={`font-outfit font-bold text-2xl ${isHotStreak ? 'text-[var(--coral-500)]' : 'text-[var(--warm-800)]'}`}>{streak}</span>
            <span className="text-sm text-[var(--warm-500)]">{streak === 1 ? 'day' : 'days'}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-[var(--warm-100)]">
        <p className="text-xs text-[var(--warm-500)]">
          {isHotStreak ? "You're on fire! Keep the momentum going! \uD83D\uDD25" : isWarming ? 'Great progress! A few more days to ignite your streak!' : streak > 0 ? 'Come back tomorrow to build your streak!' : 'Start your streak by chatting today!'}
        </p>
      </div>
    </div>
  )
}
