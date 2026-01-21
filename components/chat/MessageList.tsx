'use client'

import { useEffect, useRef } from 'react'
import { Message } from '@/types'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

interface MessageListProps {
  messages: Message[]
  isLoading: boolean
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading])

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-hide">
      {messages.length === 0 && !isLoading && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[var(--teal-100)] blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[var(--sage-100)] blur-2xl" />
        </div>
      )}
      {messages.map((message) => <MessageBubble key={message.id} message={message} />)}
      <TypingIndicator isVisible={isLoading} />
      <div ref={bottomRef} />
    </div>
  )
}
