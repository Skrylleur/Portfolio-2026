import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { SessionMedals, ThemeAchievement } from '../components/Achievements'
import { parseVocabularyCsv, type CsvRow } from '../lib/csv'
import { normalizeAchievements, suggestedSessionSize } from '../lib/achievements'
import {
  formatScore,
  formatSessionWhen,
  scoreOf,
  sessionKindLabel,
  trendLabel,
} from '../lib/progress'
import { countDueCards, countStudyCards } from '../lib/queue'
import { uniqueStrings } from '../lib/normalize'
import { formatTerms } from '../lib/words'
import { useStore } from '../store'
import type { SessionConfig, SessionMode, SessionSize, StudyDirection } from '../types'

type ThemePageProps = {
  id: string
  onBack: () => void
  onStart: (config: SessionConfig) => void
}

export function ThemePage({ id, onBack, onStart }: ThemePageProps) {
  const {
    data,
    renameTheme,
    deleteTheme,
    setThemesArchived,
    addWord,
    updateWord,
    deleteWord,
    importWords,
  } = useStore()
  const theme = data.themes.find((item) => item.id === id)
  const csvRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<CsvRow[] | null>(null)
  const [csvError, setCsvError] = useState('')
  const [french, setFrench] = useState('')
  const [english, setEnglish] = useState('')
  const [mode, setMode] = useState<SessionMode>('type')
  const [direction, setDirection] = useState<StudyDirection>('mixed')
  const [size, setSize] = useState<SessionSize>(() =>
    theme
      ? suggestedSessionSize(
          normalizeAchievements(theme.achievements),
          countStudyCards(theme, 'mixed'),
        )
      : 10,
  )
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editFrench, setEditFrench] = useState('')
  const [editEnglish, setEditEnglish] = useState('')

  const due = useMemo(() => (theme ? countDueCards(theme) : 0), [theme])
  const cardTotal = useMemo(
    () => (theme ? countStudyCards(theme, direction) : 0),
    [theme, direction],
  )
  const sessions = theme?.sessions ?? []

  useEffect(() => {
    if (!theme) return
    setSize(
      suggestedSessionSize(normalizeAchievements(theme.achievements), countStudyCards(theme, 'mixed')),
    )
  }, [id])

  useEffect(() => {
    if (size === 20 && cardTotal <= 20) setSize(cardTotal > 10 ? 10 : 'all')
    else if (size === 10 && cardTotal <= 10) setSize('all')
  }, [cardTotal, size])

  if (!theme) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-mute">Ce thème n’existe plus.</p>
        <button type="button" onClick={onBack} className="mt-4 text-sage">
          Retour
        </button>
      </div>
    )
  }

  async function onCsv(file: File) {
    const text = await file.text()
    const rows = parseVocabularyCsv(text)
    if (rows.length === 0) {
      setCsvError('Aucune ligne valide. Colonne 1 = français, suivantes = anglais.')
      setPreview(null)
      return
    }
    setCsvError('')
    setPreview(rows)
  }

  function onAdd(event: FormEvent) {
    event.preventDefault()
    const frenchTerms = uniqueStrings(french.split(/[,;/]/))
    const equivalents = uniqueStrings(english.split(/[,;]/))
    if (frenchTerms.length === 0 || equivalents.length === 0) return
    addWord(id, frenchTerms, equivalents)
    setFrench('')
    setEnglish('')
  }

  function startEdit(wordId: string, currentFrench: string[], currentEnglish: string[]) {
    setEditingId(wordId)
    setEditFrench(currentFrench.join(', '))
    setEditEnglish(currentEnglish.join(', '))
  }

  function cancelEdit() {
    setEditingId(null)
    setEditFrench('')
    setEditEnglish('')
  }

  function onSaveEdit(event: FormEvent) {
    event.preventDefault()
    if (!editingId) return
    const frenchTerms = uniqueStrings(editFrench.split(/[,;/]/))
    const equivalents = uniqueStrings(editEnglish.split(/[,;]/))
    if (frenchTerms.length === 0 || equivalents.length === 0) return
    updateWord(id, editingId, frenchTerms, equivalents)
    cancelEdit()
  }

  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col gap-8 px-5 py-10">
      <div>
        <button type="button" onClick={onBack} className="text-sm text-mute hover:text-ink">
          Accueil
        </button>
        <input
          value={theme.name}
          onChange={(event) => renameTheme(theme.id, event.target.value)}
          className="mt-3 w-full bg-transparent font-serif text-4xl text-ink outline-none"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-mute">
            {`${theme.words.length} mot${theme.words.length === 1 ? '' : 's'} · ${due} carte${due === 1 ? '' : 's'} à revoir aujourd’hui`}
          </p>
          <ThemeAchievement achievements={normalizeAchievements(theme.achievements)} />
        </div>
      </div>

      {theme.words.length > 0 ? (
        <section className="rounded-2xl bg-paper p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm tracking-wide text-mute uppercase">Session</h2>
            <SessionMedals achievements={normalizeAchievements(theme.achievements)} />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm">
              <span className="text-mute">Mode</span>
              <select
                value={mode}
                onChange={(event) => setMode(event.target.value as SessionMode)}
                className="w-full rounded-xl border border-line bg-cream px-3 py-2"
              >
                <option value="type">Saisie</option>
                <option value="flashcard">Cartes</option>
                <option value="choice">3 cartes</option>
              </select>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-mute">Sens</span>
              <select
                value={direction}
                onChange={(event) => setDirection(event.target.value as StudyDirection)}
                className="w-full rounded-xl border border-line bg-cream px-3 py-2"
              >
                <option value="mixed">Mélange</option>
                <option value="fr_en">FR → EN</option>
                <option value="en_fr">EN → FR</option>
              </select>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-mute">Durée</span>
              <select
                value={size}
                onChange={(event) => {
                  const value = event.target.value
                  setSize(value === 'all' ? 'all' : (Number(value) as 10 | 20))
                }}
                className="w-full rounded-xl border border-line bg-cream px-3 py-2"
              >
                {cardTotal > 10 ? <option value={10}>10 cartes</option> : null}
                {cardTotal > 20 ? <option value={20}>20 cartes</option> : null}
                <option value="all">{`${cardTotal} carte${cardTotal === 1 ? '' : 's'}`}</option>
              </select>
            </label>
          </div>
          {mode === 'choice' && theme.words.length < 3 ? (
            <p className="mt-4 text-sm text-mute">
              Le mode 3 cartes a besoin d’au moins trois mots pour proposer deux mauvaises pistes.
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onStart({ themeId: theme.id, mode, direction, size })}
              className="mt-5 rounded-xl bg-sage px-5 py-3 text-paper hover:bg-sage-dark"
            >
              Commencer
            </button>
          )}
        </section>
      ) : null}

      <section className="rounded-2xl bg-paper p-5">
        <h2 className="text-sm tracking-wide text-mute uppercase">Importer un CSV</h2>
        <p className="mt-2 text-sm leading-relaxed text-mute">
          Colonne 1 = français, colonnes suivantes = équivalents anglais. Séparateur virgule ou
          point-virgule. Un fichier d’exemple est disponible à la racine du projet.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => csvRef.current?.click()}
            className="rounded-xl border border-line px-4 py-2 hover:border-sage"
          >
            Choisir un fichier
          </button>
          <a
            href={`${import.meta.env.BASE_URL}exemple-anglais-financier.csv`}
            download
            className="px-2 py-2 text-sm text-sage"
          >
            Télécharger un exemple
          </a>
        </div>
        <input
          ref={csvRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0]
            if (file) void onCsv(file)
            event.target.value = ''
          }}
        />
        {csvError ? <p className="mt-3 text-sm text-rose">{csvError}</p> : null}
        {preview ? (
          <div className="mt-5 rounded-xl bg-cream p-4">
            <p className="text-sm text-ink">
              {`${preview.length} ligne${preview.length === 1 ? '' : 's'} prête${preview.length === 1 ? '' : 's'} à importer. Les doublons seront fusionnés.`}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-mute">
              {preview.slice(0, 4).map((row) => (
                <li key={row.french}>
                  <span className="text-ink">{row.french}</span>
                  {' — '}
                  {row.english.join(', ')}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  importWords(theme.id, preview)
                  setPreview(null)
                }}
                className="rounded-xl bg-sage px-4 py-2 text-paper"
              >
                Confirmer
              </button>
              <button type="button" onClick={() => setPreview(null)} className="text-mute">
                Annuler
              </button>
            </div>
          </div>
        ) : null}
      </section>

      <section className="rounded-2xl bg-paper p-5">
        <h2 className="text-sm tracking-wide text-mute uppercase">Ajouter un mot</h2>
        <form onSubmit={onAdd} className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
          <input
            value={french}
            onChange={(event) => setFrench(event.target.value)}
            placeholder="Français, séparés par des virgules"
            className="rounded-xl border border-line bg-cream px-4 py-3 outline-none focus:border-sage"
          />
          <input
            value={english}
            onChange={(event) => setEnglish(event.target.value)}
            placeholder="Anglais, séparés par des virgules"
            className="rounded-xl border border-line bg-cream px-4 py-3 outline-none focus:border-sage"
          />
          <button type="submit" className="rounded-xl bg-sage px-4 py-3 text-paper">
            Ajouter
          </button>
        </form>
      </section>

      {sessions.length > 0 ? (
        <section className="rounded-2xl bg-paper p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-sm tracking-wide text-mute uppercase">Historique</h2>
              <p className="mt-2 text-sm text-mute">
                {sessions.length} session{sessions.length === 1 ? '' : 's'}
                {trendLabel(sessions) ? ` · ${trendLabel(sessions)}` : ''}
              </p>
            </div>
            <div className="flex h-12 items-end gap-1.5" aria-hidden>
              {[...sessions]
                .slice(0, 10)
                .reverse()
                .map((session) => (
                  <div
                    key={session.id}
                    className="w-2.5 rounded-full bg-sage/55"
                    style={{ height: `${Math.max(18, Math.round(scoreOf(session) * 48))}px` }}
                  />
                ))}
            </div>
          </div>
          <ul className="mt-5 divide-y divide-line">
            {sessions.slice(0, 8).map((session) => (
              <li key={session.id} className="flex items-baseline justify-between gap-4 py-3">
                <div>
                  <p className="text-ink">{formatScore(session)}</p>
                  <p className="mt-1 text-sm text-mute">{sessionKindLabel(session)}</p>
                </div>
                <p className="text-sm text-mute">{formatSessionWhen(session.at)}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-sm tracking-wide text-mute uppercase">Liste</h2>
        {theme.words.length === 0 ? (
          <p className="text-sm text-mute">Importe un CSV ou ajoute un premier mot.</p>
        ) : (
          <ul className="divide-y divide-line overflow-hidden rounded-2xl bg-paper">
            {theme.words.map((word) => (
              <li key={word.id} className="px-5 py-3">
                {editingId === word.id ? (
                  <form onSubmit={onSaveEdit} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto_auto]">
                    <input
                      value={editFrench}
                      onChange={(event) => setEditFrench(event.target.value)}
                      aria-label="Français"
                      autoFocus
                      className="rounded-xl border border-line bg-cream px-3 py-2 outline-none focus:border-sage"
                    />
                    <input
                      value={editEnglish}
                      onChange={(event) => setEditEnglish(event.target.value)}
                      aria-label="Anglais, séparés par des virgules"
                      className="rounded-xl border border-line bg-cream px-3 py-2 outline-none focus:border-sage"
                    />
                    <button type="submit" className="rounded-xl bg-sage px-4 py-2 text-paper">
                      Enregistrer
                    </button>
                    <button type="button" onClick={cancelEdit} className="text-sm text-mute">
                      Annuler
                    </button>
                  </form>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-ink">{formatTerms(word.french)}</p>
                      <p className="text-sm text-mute">{formatTerms(word.english)}</p>
                    </div>
                    <div className="flex shrink-0 gap-3">
                      <button
                        type="button"
                        onClick={() => startEdit(word.id, word.french, word.english)}
                        className="text-sm text-mute hover:text-ink"
                      >
                        Modifier
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteWord(theme.id, word.id)}
                        className="text-sm text-mute hover:text-rose"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="flex flex-wrap items-center gap-4 pb-8 text-sm">
        <button
          type="button"
          onClick={() => {
            setThemesArchived([theme.id], !theme.archivedAt)
            if (!theme.archivedAt) onBack()
          }}
          className="text-mute hover:text-ink"
        >
          {theme.archivedAt ? 'Désarchiver' : 'Archiver'}
        </button>
        {confirmDelete ? (
          <p className="text-mute">
            Supprimer ce thème et tous ses mots ?{' '}
            <button
              type="button"
              className="text-rose"
              onClick={() => {
                deleteTheme(theme.id)
                onBack()
              }}
            >
              Oui, supprimer
            </button>
            {' · '}
            <button type="button" onClick={() => setConfirmDelete(false)}>
              Annuler
            </button>
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmDelete(true)}
            className="text-mute hover:text-rose"
          >
            Supprimer le thème
          </button>
        )}
      </div>
    </div>
  )
}
