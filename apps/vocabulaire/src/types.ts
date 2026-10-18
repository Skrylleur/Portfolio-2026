export type Direction = 'fr_en' | 'en_fr'
export type StudyDirection = Direction | 'mixed'
export type SessionMode = 'type' | 'flashcard' | 'choice'
export type SessionSize = 10 | 20 | 'all'

export type SrsCard = {
  ease: number
  interval: number
  repetitions: number
  dueAt: number
  lastReviewedAt: number | null
}

export type Word = {
  id: string
  french: string[]
  english: string[]
  srs: Record<Direction, SrsCard>
  createdAt: number
}

export type SessionRecord = {
  id: string
  at: number
  mode: SessionMode
  direction: StudyDirection
  size?: SessionSize
  correct: number
  total: number
  retries: number
}

export type Achievements = {
  bronze: boolean
  silver: boolean
  gold: boolean
}

export type Theme = {
  id: string
  name: string
  createdAt: number
  archivedAt: number | null
  words: Word[]
  sessions: SessionRecord[]
  achievements: Achievements
}

export type AppData = {
  version: 1
  themes: Theme[]
}

export type QueueItem = {
  wordId: string
  direction: Direction
}

export type SessionConfig = {
  themeId: string
  mode: SessionMode
  direction: StudyDirection
  size: SessionSize
}

export type Route =
  | { name: 'home' }
  | { name: 'theme'; id: string }
  | { name: 'session'; config: SessionConfig }
