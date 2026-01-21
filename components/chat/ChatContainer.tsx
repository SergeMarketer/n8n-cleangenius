'use client'

import { useState, useCallback } from 'react'
import { useChat } from '@/hooks/useChat'
import { useGamification } from '@/hooks/useGamification'
import { Message } from '@/types'
import Header from '@/components/layout/Header'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import SuggestedPrompts from './SuggestedPrompts'
import Sidebar from '@/components/gamification/Sidebar'
import AchievementToast from '@/components/gamification/AchievementToast'
import IntroModal from '@/components/ui/IntroModal'

export default function ChatContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { gameState, sessionId, messages: persistedMessages, tipOfTheDay, incrementMessageCount, addMessage, clearLastAchievement, markIntroSeen, isInitialized } = useGamification()

  const handleMessageSent = useCallback(() => incrementMessageCount(), [incrementMessageCount])
  const handleMessageReceived = useCallback((message: Message) => addMessage(message), [addMessage])

  const { messages, isLoading, send } = useChat({
    sessionId,
    initialMessages: persistedMessages,
    onMessageSent: handleMessageSent,
    onMessageReceived: handleMessageReceived,
  })

  const handlePromptSelect = useCallback((prompt: string) => send(prompt), [send])
  const showSuggestedPrompts = messages.length === 0 && !isLoading

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--teal-400)] to-[var(--teal-600)] flex items-center justify-center animate-pulse">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
              <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
            </svg>
          </div>
          <span className="text-sm text-[var(--warm-500)]">Loading CleanGenius...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} showMenuButton={true} />
      <div className="flex-1 flex pt-16">
        <main className="flex-1 flex flex-col min-w-0 lg:mr-80">
          <div className="flex-1 flex flex-col relative overflow-hidden">
            {showSuggestedPrompts ? (
              <div className="flex-1 flex flex-col justify-center">
                <SuggestedPrompts onSelect={handlePromptSelect} isVisible={showSuggestedPrompts} />
              </div>
            ) : (
              <MessageList messages={messages} isLoading={isLoading} />
            )}
          </div>
          <ChatInput onSend={send} isLoading={isLoading} />
        </main>
        <Sidebar gameState={gameState} tipOfTheDay={tipOfTheDay} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <AchievementToast achievement={gameState.lastAchievement} onDismiss={clearLastAchievement} />
      <IntroModal isOpen={!gameState.hasSeenIntro} onClose={markIntroSeen} />
    </div>
  )
}
