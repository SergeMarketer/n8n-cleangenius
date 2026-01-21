export interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export interface ChatState {
  messages: Message[]
  isLoading: boolean
  error: string | null
  sessionId: string
}

export interface LevelDefinition {
  level: number
  title: string
  messagesRequired: number
  icon: string
}

export interface LevelInfo extends LevelDefinition {
  progressToNext: number
  messagesToNextLevel: number
  isMastered: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earnedAt: Date
}

export interface GameState {
  messageCount: number
  currentLevel: LevelInfo
  streak: number
  lastActiveDate: string | null
  achievements: Achievement[]
  lastAchievement: Achievement | null
  hasSeenIntro: boolean
}

export interface PersistedState {
  sessionId: string
  messageCount: number
  level: number
  streak: number
  lastActiveDate: string | null
  messages: Message[]
  lastVisit: string
  hasSeenIntro: boolean
}

export interface ChatRequest {
  message: string
  sessionId: string
}

export interface ChatResponse {
  response: string
  sessionId: string
}
