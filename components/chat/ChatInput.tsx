'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
  placeholder?: string
}

export default function ChatInput({ onSend, isLoading, placeholder = 'Ask me anything about cleaning...' }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`
    }
  }, [message])

  useEffect(() => {
    if (!isLoading && textareaRef.current) textareaRef.current.focus()
  }, [isLoading])

  const handleSubmit = () => {
    const trimmed = message.trim()
    if (trimmed && !isLoading) {
      onSend(trimmed)
      setMessage('')
      if (textareaRef.current) textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const charCount = message.length
  const maxChars = 500
  const isNearLimit = charCount > maxChars * 0.8

  return (
    <div className="p-4 border-t border-[var(--warm-200)] bg-white/50">
      <div className="relative flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-white rounded-2xl border-2 border-[var(--warm-200)] text-[var(--warm-700)] text-sm placeholder:text-[var(--warm-400)] focus:outline-none focus:border-[var(--teal-400)] disabled:opacity-60 disabled:cursor-not-allowed resize-none transition-all duration-200"
            style={{ minHeight: '48px' }}
          />
          {charCount > 0 && (
            <span className={`absolute right-3 bottom-2 text-[10px] ${isNearLimit ? 'text-[var(--coral-500)]' : 'text-[var(--warm-400)]'}`}>
              {charCount}/{maxChars}
            </span>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading}
          className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--teal-500)] to-[var(--teal-600)] text-white shadow-lg shadow-[var(--teal-500)]/20 hover:shadow-xl hover:shadow-[var(--teal-500)]/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Send message"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <div className="relative">
              <svg viewBox="0 0 24 24" className="w-5 h-5 transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}
        </button>
      </div>
      <p className="mt-2 text-[10px] text-[var(--warm-400)] text-center">
        Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--warm-100)] text-[var(--warm-500)] font-mono">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 rounded bg-[var(--warm-100)] text-[var(--warm-500)] font-mono">Shift + Enter</kbd> for new line
      </p>
    </div>
  )
}
