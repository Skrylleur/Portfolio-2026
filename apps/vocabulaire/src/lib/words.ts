import type { Direction, Word } from '../types'
import { normalizeAnswer, uniqueStrings } from './normalize'

export function asTerms(value: unknown): string[] {
  if (Array.isArray(value)) return uniqueStrings(value.map((item) => String(item)))
  if (typeof value === 'string') return uniqueStrings([value])
  return []
}

export function formatTerms(values: string[]): string {
  return values.join(' · ')
}

function senseKeys(values: string[]): Set<string> {
  return new Set(values.map((value) => normalizeAnswer(value)).filter(Boolean))
}

function setsOverlap(left: Set<string>, right: Set<string>): boolean {
  for (const key of right) {
    if (left.has(key)) return true
  }
  return false
}

export function sharesSense(
  left: Pick<Word, 'french' | 'english'>,
  right: Pick<Word, 'french' | 'english'>,
): boolean {
  return (
    setsOverlap(senseKeys(left.french), senseKeys(right.french)) ||
    setsOverlap(senseKeys(left.english), senseKeys(right.english))
  )
}

function cloneSrs(card: Word['srs'][Direction]): Word['srs'][Direction] {
  return { ...card }
}

function mergeSrs(
  left: Word['srs'][Direction],
  right: Word['srs'][Direction],
): Word['srs'][Direction] {
  if (left.repetitions !== right.repetitions) {
    return cloneSrs(left.repetitions > right.repetitions ? left : right)
  }
  const leftSeen = left.lastReviewedAt ?? 0
  const rightSeen = right.lastReviewedAt ?? 0
  return cloneSrs(leftSeen >= rightSeen ? left : right)
}

export function cloneWord(word: Word, id: string): Word {
  return {
    ...word,
    id,
    french: [...word.french],
    english: [...word.english],
    srs: {
      fr_en: cloneSrs(word.srs.fr_en),
      en_fr: cloneSrs(word.srs.en_fr),
    },
  }
}

export function combineWords(words: Word[]): Word {
  const keeper = words.reduce((best, word) => (word.createdAt < best.createdAt ? word : best))
  let french: string[] = []
  let english: string[] = []
  let srs = {
    fr_en: cloneSrs(keeper.srs.fr_en),
    en_fr: cloneSrs(keeper.srs.en_fr),
  }

  for (const word of words) {
    french = uniqueStrings([...french, ...word.french])
    english = uniqueStrings([...english, ...word.english])
    srs = {
      fr_en: mergeSrs(srs.fr_en, word.srs.fr_en),
      en_fr: mergeSrs(srs.en_fr, word.srs.en_fr),
    }
  }

  return {
    ...keeper,
    french,
    english,
    createdAt: keeper.createdAt,
    srs,
  }
}

export function foldWord(list: Word[], incoming: Word): Word[] {
  const overlapping = list.filter(
    (entry) => entry.id !== incoming.id && sharesSense(entry, incoming),
  )
  const drop = new Set(overlapping.map((entry) => entry.id))
  drop.add(incoming.id)
  const combined = overlapping.length === 0 ? incoming : combineWords([incoming, ...overlapping])
  const kept = list.filter((entry) => !drop.has(entry.id))
  const insertAt = list.findIndex((entry) => drop.has(entry.id))
  if (insertAt < 0) return [...kept, combined]
  const before = list.slice(0, insertAt).filter((entry) => !drop.has(entry.id)).length
  return [...kept.slice(0, before), combined, ...kept.slice(before)]
}

export function foldWords(words: Word[]): Word[] {
  return words.reduce<Word[]>((list, word) => foldWord(list, word), [])
}
