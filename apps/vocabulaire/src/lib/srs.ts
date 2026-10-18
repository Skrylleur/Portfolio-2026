import type { SrsCard } from '../types'

const DAY = 24 * 60 * 60 * 1000

export function newSrsCard(now = Date.now()): SrsCard {
  return {
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    dueAt: now,
    lastReviewedAt: null,
  }
}

export function isDue(card: SrsCard, now = Date.now()): boolean {
  return card.dueAt <= now
}

export function reviewCard(card: SrsCard, quality: number, now = Date.now()): SrsCard {
  const q = Math.min(5, Math.max(0, quality))
  let { ease, interval, repetitions } = card

  ease = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  if (ease < 1.3) ease = 1.3

  if (q < 3) {
    repetitions = 0
    interval = 1
  } else {
    repetitions += 1
    if (repetitions === 1) interval = 1
    else if (repetitions === 2) interval = 3
    else interval = Math.max(1, Math.round(interval * ease))
  }

  return {
    ease,
    interval,
    repetitions,
    dueAt: now + interval * DAY,
    lastReviewedAt: now,
  }
}

export function gradeFromTyping(correct: boolean): number {
  return correct ? 4 : 1
}
