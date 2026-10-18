import { isDue } from './srs'
import type { Direction, QueueItem, StudyDirection, Theme } from '../types'

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const left = copy[i]
    const right = copy[j]
    if (left === undefined || right === undefined) continue
    copy[i] = right
    copy[j] = left
  }
  return copy
}

function directionsFor(study: StudyDirection): Direction[] {
  if (study === 'mixed') return ['fr_en', 'en_fr']
  return [study]
}

export function countStudyCards(theme: Theme, study: StudyDirection): number {
  return theme.words.length * directionsFor(study).length
}

export function sessionLength(
  theme: Theme,
  study: StudyDirection,
  size: 10 | 20 | 'all',
): number {
  const total = countStudyCards(theme, study)
  if (size === 'all') return total
  return Math.min(size, total)
}

export function countDueCards(theme: Theme, now = Date.now()): number {
  let count = 0
  for (const word of theme.words) {
    if (isDue(word.srs.fr_en, now)) count += 1
    if (isDue(word.srs.en_fr, now)) count += 1
  }
  return count
}

export function buildQueue(
  theme: Theme,
  study: StudyDirection,
  size: number,
  now = Date.now(),
): QueueItem[] {
  const dirs = directionsFor(study)
  const due: QueueItem[] = []
  const later: QueueItem[] = []

  for (const word of theme.words) {
    for (const direction of dirs) {
      const item = { wordId: word.id, direction }
      if (isDue(word.srs[direction], now)) due.push(item)
      else later.push(item)
    }
  }

  later.sort((a, b) => {
    const wordA = theme.words.find((word) => word.id === a.wordId)!
    const wordB = theme.words.find((word) => word.id === b.wordId)!
    return wordA.srs[a.direction].dueAt - wordB.srs[b.direction].dueAt
  })

  return [...shuffle(due), ...later].slice(0, size)
}
