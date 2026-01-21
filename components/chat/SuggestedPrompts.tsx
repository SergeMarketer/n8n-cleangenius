'use client'

import { SUGGESTED_PROMPTS } from '@/lib/constants'

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void
  isVisible: boolean
}

export default function SuggestedPrompts({ onSelect, isVisible }: SuggestedPromptsProps) {
  if (!isVisible) return null

  return (
    <div className="px-4 pb-4 animate-fade-in">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--teal-100)] to-[var(--sage-100)] mb-4">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--teal-600)]" fill="currentColor">
            <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
          </svg>
        </div>
        <h2 className="font-outfit font-bold text-3xl text-[var(--warm-800)] mb-3">Ready to get sparkling?</h2>
        <p className="text-lg text-[var(--warm-600)] max-w-md mx-auto leading-relaxed">
          I&apos;m your AI cleaning coach! Ask me anything about keeping your space fresh and tidy.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[var(--warm-500)] uppercase tracking-wide mb-4 text-center">Try asking about</p>
        <div className="flex flex-wrap justify-center gap-2">
          {SUGGESTED_PROMPTS.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onSelect(prompt)}
              className="group relative px-4 py-2.5 rounded-2xl bg-white border border-[var(--warm-200)] text-sm text-[var(--warm-600)] hover:border-[var(--teal-300)] hover:bg-[var(--teal-50)] hover:text-[var(--teal-700)] transition-all duration-200 shadow-sm hover:shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--teal-400)]" fill="currentColor">
                  <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                </svg>
              </span>
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
