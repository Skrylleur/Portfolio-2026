import { normalizeAnswer, uniqueStrings } from './normalize'
import type { Direction, Theme, Word } from '../types'

export type Choice = {
  label: string
  correct: boolean
}

function shuffle<T>(items: T[], salt: number): T[] {
  const copy = [...items]
  let seed = (salt + 1) * 9973 + 1
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    const left = copy[i]
    const right = copy[j]
    if (left === undefined || right === undefined) continue
    copy[i] = right
    copy[j] = left
  }
  return copy
}

function answerTerms(word: Word, direction: Direction): string[] {
  return direction === 'fr_en' ? word.english : word.french
}

function answerLabel(word: Word, direction: Direction): string {
  return answerTerms(word, direction)[0] ?? ''
}

export function buildChoices(
  theme: Theme,
  word: Word,
  direction: Direction,
  salt: number,
): Choice[] {
  const correct = answerLabel(word, direction).trim()
  if (!correct) return []

  const accepted = new Set(answerTerms(word, direction).map((item) => normalizeAnswer(item)))
  const pool = uniqueStrings(
    theme.words
      .filter((entry) => entry.id !== word.id)
      .map((entry) => answerLabel(entry, direction)),
  ).filter((label) => !accepted.has(normalizeAnswer(label)))

  const distractors = shuffle(pool, salt).slice(0, 2)
  if (distractors.length < 2) return []

  return shuffle(
    [{ label: correct, correct: true }, ...distractors.map((label) => ({ label, correct: false }))],
    salt + 17,
  )
}
