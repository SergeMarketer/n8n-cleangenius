'use client'

import { useState, useCallback } from 'react'
import { sendMessage } from '@/lib/api'
import { Message } from '@/types'

interface UseChatProps {
  sessionId: string
  initialMessages: Message[]
  onMessageSent?: () => void
  onMessageReceived?: (message: Message) => void
}

export function useChat({ sessionId, initialMessages, onMessageSent, onMessageReceived }: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const send = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return
    setError(null)
    setIsLoading(true)

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    onMessageReceived?.(userMessage)
    onMessageSent?.()

    try {
      const response = await sendMessage({ message: text.trim(), sessionId })
      const coachMessage: Message = {
        id: `coach-${Date.now()}`,
        text: response.response,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, coachMessage])
      onMessageReceived?.(coachMessage)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      setError(errorMessage)
      const errorResponse: Message = {
        id: `error-${Date.now()}`,
        text: "Sorry, I couldn't process that request. Please try again.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorResponse])
      onMessageReceived?.(errorResponse)
    } finally {
      setIsLoading(false)
    }
  }, [sessionId, isLoading, onMessageSent, onMessageReceived])

  const clearError = useCallback(() => setError(null), [])

  return { messages, isLoading, error, send, clearError }
}
