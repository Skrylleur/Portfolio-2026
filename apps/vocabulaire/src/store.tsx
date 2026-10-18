import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { AppData, Direction, SessionRecord, Word } from './types'
import type { CsvRow } from './lib/csv'
import {
  addWord as addWordToStore,
  applyReview,
  createTheme as createThemeInStore,
  deleteTheme as deleteThemeInStore,
  deleteThemes as deleteThemesInStore,
  deleteWord as deleteWordInStore,
  importRows,
  updateWord as updateWordInStore,
  loadData,
  mergeThemes as mergeThemesInStore,
  parseBackup,
  recordSession as recordSessionInStore,
  renameTheme as renameThemeInStore,
  saveData,
  setThemesArchived as setThemesArchivedInStore,
} from './lib/storage'

type StoreContextValue = {
  data: AppData
  createTheme: (name: string) => string | null
  renameTheme: (id: string, name: string) => void
  deleteTheme: (id: string) => void
  deleteThemes: (ids: string[]) => void
  mergeThemes: (ids: string[], options: { name: string; keepOriginals: boolean }) => string | null
  setThemesArchived: (ids: string[], archived: boolean) => void
  addWord: (themeId: string, french: string[], english: string[]) => void
  updateWord: (themeId: string, wordId: string, french: string[], english: string[]) => void
  deleteWord: (themeId: string, wordId: string) => void
  importWords: (themeId: string, rows: CsvRow[]) => void
  review: (
    themeId: string,
    wordId: string,
    direction: Direction,
    nextCard: Word['srs'][Direction],
  ) => void
  recordSession: (themeId: string, entry: Omit<SessionRecord, 'id' | 'at'>) => void
  replaceData: (next: AppData) => void
  importBackup: (raw: string) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadData())

  const value = useMemo<StoreContextValue>(() => {
    const commit = (updater: (current: AppData) => AppData): AppData => {
      let next = data
      setData((current) => {
        next = updater(current)
        saveData(next)
        return next
      })
      return next
    }

    return {
      data,
      createTheme: (name) => {
        const trimmed = name.trim()
        if (!trimmed) return null
        const next = commit((current) => createThemeInStore(current, trimmed))
        return next.themes[0]?.id ?? null
      },
      renameTheme: (id, name) => {
        commit((current) => renameThemeInStore(current, id, name))
      },
      deleteTheme: (id) => {
        commit((current) => deleteThemeInStore(current, id))
      },
      deleteThemes: (ids) => {
        commit((current) => deleteThemesInStore(current, ids))
      },
      setThemesArchived: (ids, archived) => {
        commit((current) => setThemesArchivedInStore(current, ids, archived))
      },
      mergeThemes: (ids, options) => {
        let createdId: string | null = null
        commit((current) => {
          const result = mergeThemesInStore(current, ids, options)
          createdId = result.id
          return result.data
        })
        return createdId
      },
      addWord: (themeId, french, english) => {
        commit((current) => addWordToStore(current, themeId, french, english))
      },
      updateWord: (themeId, wordId, french, english) => {
        commit((current) => updateWordInStore(current, themeId, wordId, french, english))
      },
      deleteWord: (themeId, wordId) => {
        commit((current) => deleteWordInStore(current, themeId, wordId))
      },
      importWords: (themeId, rows) => {
        commit((current) => importRows(current, themeId, rows))
      },
      review: (themeId, wordId, direction, nextCard) => {
        commit((current) => applyReview(current, themeId, wordId, direction, nextCard))
      },
      recordSession: (themeId, entry) => {
        commit((current) => recordSessionInStore(current, themeId, entry))
      },
      replaceData: (next) => {
        commit(() => next)
      },
      importBackup: (raw) => {
        commit(() => parseBackup(raw))
      },
    }
  }, [data])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): StoreContextValue {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('StoreProvider manquant')
  return ctx
}
