'use client'

interface TipOfDayProps {
  tip: string
}

export default function TipOfDay({ tip }: TipOfDayProps) {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--sage-50)] to-[var(--teal-50)] border border-[var(--sage-200)] shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--sage-400)] to-[var(--sage-500)] flex items-center justify-center">
          <span className="text-sm">\uD83D\uDCA1</span>
        </div>
        <span className="text-xs font-semibold text-[var(--sage-600)] uppercase tracking-wide">Tip of the Day</span>
      </div>
      <p className="text-sm text-[var(--warm-600)] leading-relaxed">{tip}</p>
      <div className="mt-3 flex items-center gap-1.5">
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--sage-200)] to-transparent" />
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--sage-300)]" fill="currentColor">
          <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-l from-[var(--sage-200)] to-transparent" />
      </div>
    </div>
  )
}
