import type { AppData, Direction, SessionRecord, Theme, Word } from '../types'
import {
  emptyAchievements,
  medalForSession,
  mergeAchievements,
  normalizeAchievements,
} from './achievements'
import { countStudyCards } from './queue'
import type { CsvRow } from './csv'
import { createId } from './id'
import { uniqueStrings } from './normalize'
import { newSrsCard } from './srs'
import { asTerms, cloneWord, foldWord, foldWords } from './words'

const STORAGE_KEY = 'vocabulaire-anglais-v1'

const MAX_SESSIONS = 40

const emptyData = (): AppData => ({ version: 1, themes: [] })

function migrateWord(word: Word): Word {
  return {
    ...word,
    french: asTerms(word.french),
    english: asTerms(word.english),
  }
}

function migrateTheme(theme: Theme): Theme {
  return {
    ...theme,
    words: Array.isArray(theme.words) ? theme.words.map(migrateWord) : [],
    sessions: Array.isArray(theme.sessions) ? theme.sessions : [],
    achievements: normalizeAchievements(theme.achievements),
    archivedAt: theme.archivedAt ?? null,
  }
}

export function migrateData(data: AppData): AppData {
  return {
    version: 1,
    themes: data.themes.map(migrateTheme),
  }
}

export function loadData(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyData()
    const parsed = JSON.parse(raw) as AppData
    if (parsed.version !== 1 || !Array.isArray(parsed.themes)) return emptyData()
    return migrateData(parsed)
  } catch {
    return emptyData()
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function createTheme(data: AppData, name: string): AppData {
  const theme: Theme = {
    id: createId(),
    name: name.trim(),
    createdAt: Date.now(),
    archivedAt: null,
    words: [],
    sessions: [],
    achievements: emptyAchievements(),
  }
  return { ...data, themes: [theme, ...data.themes] }
}

export function renameTheme(data: AppData, id: string, name: string): AppData {
  return {
    ...data,
    themes: data.themes.map((theme) =>
      theme.id === id ? { ...theme, name: name.trim() } : theme,
    ),
  }
}

export function deleteTheme(data: AppData, id: string): AppData {
  return deleteThemes(data, [id])
}

export function deleteThemes(data: AppData, ids: string[]): AppData {
  const remove = new Set(ids)
  return { ...data, themes: data.themes.filter((theme) => !remove.has(theme.id)) }
}

export function setThemesArchived(data: AppData, ids: string[], archived: boolean): AppData {
  const target = new Set(ids)
  const archivedAt = archived ? Date.now() : null
  return {
    ...data,
    themes: data.themes.map((theme) =>
      target.has(theme.id) ? { ...theme, archivedAt } : theme,
    ),
  }
}

export function mergeThemes(
  data: AppData,
  themeIds: string[],
  options: { name: string; keepOriginals: boolean },
): { data: AppData; id: string | null } {
  const ids = [...new Set(themeIds)]
  const sources = ids
    .map((id) => data.themes.find((theme) => theme.id === id))
    .filter((theme): theme is Theme => Boolean(theme))
  if (sources.length < 2) return { data, id: null }

  const words = foldWords(
    sources.flatMap((theme) => theme.words.map((word) => cloneWord(word, createId()))),
  )

  const name =
    options.name.trim() || sources.map((theme) => theme.name).join(' · ')
  const sessions = options.keepOriginals
    ? []
    : sources
        .flatMap((theme) => theme.sessions ?? [])
        .sort((left, right) => right.at - left.at)
        .slice(0, MAX_SESSIONS)

  const merged: Theme = {
    id: createId(),
    name,
    createdAt: Date.now(),
    archivedAt: null,
    words,
    sessions,
    achievements: options.keepOriginals
      ? emptyAchievements()
      : mergeAchievements(sources.map((theme) => normalizeAchievements(theme.achievements))),
  }

  const remaining = options.keepOriginals
    ? data.themes
    : data.themes.filter((theme) => !ids.includes(theme.id))

  return { data: { ...data, themes: [merged, ...remaining] }, id: merged.id }
}

function freshWord(french: string[], english: string[], now = Date.now()): Word {
  return {
    id: createId(),
    french,
    english,
    createdAt: now,
    srs: {
      fr_en: newSrsCard(now),
      en_fr: newSrsCard(now),
    },
  }
}

export function addWord(data: AppData, themeId: string, french: string[], english: string[]): AppData {
  const nextFrench = uniqueStrings(french)
  const nextEnglish = uniqueStrings(english)
  if (nextFrench.length === 0 || nextEnglish.length === 0) return data
  const now = Date.now()
  return {
    ...data,
    themes: data.themes.map((theme) =>
      theme.id === themeId
        ? { ...theme, words: foldWord(theme.words, freshWord(nextFrench, nextEnglish, now)) }
        : theme,
    ),
  }
}

export function deleteWord(data: AppData, themeId: string, wordId: string): AppData {
  return {
    ...data,
    themes: data.themes.map((theme) =>
      theme.id === themeId
        ? { ...theme, words: theme.words.filter((word) => word.id !== wordId) }
        : theme,
    ),
  }
}

export function updateWord(
  data: AppData,
  themeId: string,
  wordId: string,
  french: string[],
  english: string[],
): AppData {
  const nextFrench = uniqueStrings(french)
  const nextEnglish = uniqueStrings(english)
  if (nextFrench.length === 0 || nextEnglish.length === 0) return data

  return {
    ...data,
    themes: data.themes.map((theme) => {
      if (theme.id !== themeId) return theme
      const current = theme.words.find((word) => word.id === wordId)
      if (!current) return theme
      return {
        ...theme,
        words: foldWord(
          theme.words,
          { ...current, french: nextFrench, english: nextEnglish },
        ),
      }
    }),
  }
}

export function importRows(data: AppData, themeId: string, rows: CsvRow[]): AppData {
  const now = Date.now()
  return {
    ...data,
    themes: data.themes.map((theme) => {
      if (theme.id !== themeId) return theme
      let words = [...theme.words]
      for (const row of rows) {
        const french = asTerms(row.french)
        const english = uniqueStrings(row.english)
        if (french.length === 0 || english.length === 0) continue
        words = foldWord(words, freshWord(french, english, now))
      }
      return { ...theme, words }
    }),
  }
}

export function applyReview(
  data: AppData,
  themeId: string,
  wordId: string,
  direction: Direction,
  nextCard: Word['srs'][Direction],
): AppData {
  return {
    ...data,
    themes: data.themes.map((theme) =>
      theme.id === themeId
        ? {
            ...theme,
            words: theme.words.map((word) =>
              word.id === wordId
                ? { ...word, srs: { ...word.srs, [direction]: nextCard } }
                : word,
            ),
          }
        : theme,
    ),
  }
}

export function exportJson(data: AppData): string {
  return JSON.stringify(data, null, 2)
}

export function recordSession(
  data: AppData,
  themeId: string,
  entry: Omit<SessionRecord, 'id' | 'at'>,
): AppData {
  const record: SessionRecord = {
    ...entry,
    id: createId(),
    at: Date.now(),
  }
  return {
    ...data,
    themes: data.themes.map((theme) => {
      if (theme.id !== themeId) return theme
      const achievements = normalizeAchievements(theme.achievements)
      const medal = medalForSession(
        entry.size,
        entry.total,
        countStudyCards(theme, entry.direction),
      )
      return {
        ...theme,
        sessions: [record, ...(theme.sessions ?? [])].slice(0, MAX_SESSIONS),
        achievements: medal ? { ...achievements, [medal]: true } : achievements,
      }
    }),
  }
}

export function parseBackup(raw: string): AppData {
  const parsed = JSON.parse(raw) as AppData
  if (parsed.version !== 1 || !Array.isArray(parsed.themes)) {
    throw new Error('Fichier de sauvegarde invalide')
  }
  return migrateData(parsed)
}
