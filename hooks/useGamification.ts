'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { LEVELS, STORAGE_KEY, TIPS_OF_THE_DAY } from '@/lib/constants'
import { LevelInfo, Achievement, GameState, PersistedState, Message } from '@/types'
import { generateSessionId } from '@/lib/api'

function calculateLevel(messageCount: number): LevelInfo {
  let currentLevel = LEVELS[0]
  for (const level of LEVELS) {
    if (messageCount >= level.messagesRequired) {
      currentLevel = level
    } else {
      break
    }
  }
  const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1)
  const isMastered = !nextLevel
  let progressToNext = 100
  let messagesToNextLevel = 0
  if (nextLevel) {
    const progressRange = nextLevel.messagesRequired - currentLevel.messagesRequired
    const currentProgress = messageCount - currentLevel.messagesRequired
    progressToNext = Math.min((currentProgress / progressRange) * 100, 100)
    messagesToNextLevel = nextLevel.messagesRequired - messageCount
  }
  return { ...currentLevel, progressToNext, messagesToNextLevel, isMastered }
}

function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0]
}

function calculateStreak(lastActiveDate: string | null): number {
  if (!lastActiveDate) return 1
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const lastActive = new Date(lastActiveDate)
  lastActive.setHours(0, 0, 0, 0)
  const diffTime = today.getTime() - lastActive.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return -1
  if (diffDays === 1) return 1
  return 0
}

const initialPersistedState: PersistedState = {
  sessionId: '',
  messageCount: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  messages: [],
  lastVisit: '',
  hasSeenIntro: false,
}

export function useGamification() {
  const [persistedState, setPersistedState] = useLocalStorage<PersistedState>(STORAGE_KEY, initialPersistedState)
  const [lastAchievement, setLastAchievement] = useState<Achievement | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!persistedState.sessionId) {
      setPersistedState(prev => ({ ...prev, sessionId: generateSessionId() }))
    }
    setIsInitialized(true)
  }, [persistedState.sessionId, setPersistedState])

  useEffect(() => {
    if (!isInitialized) return
    const streakUpdate = calculateStreak(persistedState.lastActiveDate)
    if (streakUpdate !== -1) {
      setPersistedState(prev => ({
        ...prev,
        streak: streakUpdate === 0 ? 1 : prev.streak + 1,
        lastActiveDate: getTodayDateString(),
      }))
    }
  }, [isInitialized]) // eslint-disable-line react-hooks/exhaustive-deps

  const currentLevel = useMemo(() => calculateLevel(persistedState.messageCount), [persistedState.messageCount])

  const tipOfTheDay = useMemo(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    return TIPS_OF_THE_DAY[dayOfYear % TIPS_OF_THE_DAY.length]
  }, [])

  const incrementMessageCount = useCallback(() => {
    setPersistedState(prev => {
      const newCount = prev.messageCount + 1
      const oldLevel = calculateLevel(prev.messageCount)
      const newLevel = calculateLevel(newCount)
      if (newLevel.level > oldLevel.level) {
        const achievement: Achievement = {
          id: `level-${newLevel.level}-${Date.now()}`,
          title: `Level ${newLevel.level} Reached!`,
          description: `You're now a ${newLevel.title}!`,
          icon: newLevel.icon,
          earnedAt: new Date(),
        }
        setTimeout(() => setLastAchievement(achievement), 0)
      }
      return { ...prev, messageCount: newCount, level: newLevel.level, lastActiveDate: getTodayDateString() }
    })
  }, [setPersistedState])

  const addMessage = useCallback((message: Message) => {
    setPersistedState(prev => ({ ...prev, messages: [...prev.messages, message].slice(-50) }))
  }, [setPersistedState])

  const clearLastAchievement = useCallback(() => setLastAchievement(null), [])

  const markIntroSeen = useCallback(() => {
    setPersistedState(prev => ({ ...prev, hasSeenIntro: true }))
  }, [setPersistedState])

  const gameState: GameState = {
    messageCount: persistedState.messageCount,
    currentLevel,
    streak: persistedState.streak,
    lastActiveDate: persistedState.lastActiveDate,
    achievements: [],
    lastAchievement,
    hasSeenIntro: persistedState.hasSeenIntro,
  }

  return {
    gameState,
    sessionId: persistedState.sessionId,
    messages: persistedState.messages,
    tipOfTheDay,
    incrementMessageCount,
    addMessage,
    clearLastAchievement,
    markIntroSeen,
    isInitialized,
  }
}
