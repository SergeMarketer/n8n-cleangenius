'use client'

import { Message } from '@/types'
import { useMemo } from 'react'

interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const formattedTime = useMemo(() => {
    const date = new Date(message.timestamp)
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  }, [message.timestamp])

  const isUser = message.isUser

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slide-up`} style={{ animationDelay: '0.05s' }}>
      <div className={`flex flex-col max-w-[85%] sm:max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        {!isUser && (
          <div className="flex items-center gap-2 mb-1.5 ml-1">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[var(--teal-700)]">CleanGenius</span>
          </div>
        )}
        <div className={`relative px-4 py-3 shadow-sm ${isUser ? 'bubble-user bg-gradient-to-br from-[var(--teal-500)] to-[var(--teal-600)] text-white' : 'bubble-coach bg-white border border-[var(--warm-200)] text-[var(--warm-700)]'}`}>
          {!isUser && <div className="absolute -left-1 top-3 w-2 h-2 rounded-full bg-[var(--teal-100)] opacity-60" />}
          <p className={`text-sm leading-relaxed whitespace-pre-wrap ${isUser ? 'font-medium' : ''}`}>{message.text}</p>
          {isUser && <div className="absolute inset-0 bubble-user bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />}
        </div>
        <span className={`mt-1 text-[10px] text-[var(--warm-400)] px-1 ${isUser ? 'mr-1' : 'ml-1'}`}>{formattedTime}</span>
      </div>
    </div>
  )
}
