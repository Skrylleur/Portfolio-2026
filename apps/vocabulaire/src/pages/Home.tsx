import { useRef, useState, type FormEvent } from 'react'
import { ThemeAchievement } from '../components/Achievements'
import { normalizeAchievements } from '../lib/achievements'
import { formatScore } from '../lib/progress'
import { CSV_PHOTO_PROMPT } from '../lib/prompt'
import { countDueCards } from '../lib/queue'
import { exportJson } from '../lib/storage'
import { useStore } from '../store'
import type { Theme } from '../types'

type HomeProps = {
  onOpenTheme: (id: string) => void
}

export function Home({ onOpenTheme }: HomeProps) {
  const { data, createTheme, renameTheme, deleteThemes, mergeThemes, setThemesArchived, importBackup } =
    useStore()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [renameValue, setRenameValue] = useState('')
  const [renaming, setRenaming] = useState(false)
  const [mergeName, setMergeName] = useState('')
  const [merging, setMerging] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [showArchived, setShowArchived] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const activeThemes = data.themes.filter((theme) => !theme.archivedAt)
  const archivedThemes = data.themes.filter((theme) => Boolean(theme.archivedAt))

  function onCreate(event: FormEvent) {
    event.preventDefault()
    const id = createTheme(name)
    if (!id) return
    setName('')
    onOpenTheme(id)
  }

  function onExport() {
    const blob = new Blob([exportJson(data)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'vocabulaire-anglais.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const selectedThemes = data.themes.filter((theme) => selected.includes(theme.id))

  function toggleSelected(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
    setRenaming(false)
    setMerging(false)
    setConfirmDelete(false)
  }

  function clearSelection() {
    setSelected([])
    setRenaming(false)
    setMerging(false)
    setConfirmDelete(false)
  }

  function startRename() {
    if (selectedThemes.length !== 1) return
    setRenameValue(selectedThemes[0].name)
    setRenaming(true)
    setMerging(false)
    setConfirmDelete(false)
  }

  function applyRename(event: FormEvent) {
    event.preventDefault()
    const theme = selectedThemes[0]
    if (!theme || !renameValue.trim()) return
    renameTheme(theme.id, renameValue)
    setRenaming(false)
  }

  function startMerge() {
    if (selectedThemes.length < 2) return
    setMergeName(selectedThemes.map((theme) => theme.name).join(' · '))
    setMerging(true)
    setRenaming(false)
    setConfirmDelete(false)
  }

  function applyMerge(keepOriginals: boolean) {
    const id = mergeThemes(selected, { name: mergeName, keepOriginals })
    clearSelection()
    if (id) onOpenTheme(id)
  }

  function applyDelete() {
    deleteThemes(selected)
    clearSelection()
  }

  function applyArchive(archived: boolean) {
    setThemesArchived(selected, archived)
    clearSelection()
    if (archived) setShowArchived(true)
  }

  async function onImportFile(file: File) {
    try {
      const text = await file.text()
      importBackup(text)
      setError('')
    } catch {
      setError('Impossible de lire cette sauvegarde.')
    }
  }

  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col gap-10 px-5 py-12">
      <header className="space-y-3">
        <p className="text-sm tracking-wide text-mute uppercase">Révision calme</p>
        <h1 className="font-serif text-4xl leading-tight font-normal text-ink">
          Vocabulaire anglais
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-mute">
          Crée un thème, importe tes listes, puis révise par petites sessions. Les mots reviennent
          au bon moment, sans pression.
        </p>
      </header>

      <form
        onSubmit={onCreate}
        className="flex flex-col gap-3 rounded-2xl bg-paper p-5 shadow-[0_1px_0_rgba(45,52,57,0.04)] sm:flex-row sm:items-end"
      >
        <label className="flex-1 space-y-2">
          <span className="text-sm text-mute">Nouveau thème</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="CC Anglais financier"
            className="w-full rounded-xl border border-line bg-cream px-4 py-3 outline-none focus:border-sage"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-sage px-5 py-3 text-paper transition-colors hover:bg-sage-dark"
        >
          Créer
        </button>
      </form>

      <section className="space-y-3 rounded-2xl bg-paper p-5 shadow-[0_1px_0_rgba(45,52,57,0.04)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-sm tracking-wide text-mute uppercase">Prompt photos → CSV</h2>
            <p className="max-w-lg text-sm leading-relaxed text-mute">
              Copie ce texte dans ChatGPT (ou un autre modèle), joins tes photos de cours, puis
              importe le CSV dans un thème.
            </p>
          </div>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(CSV_PHOTO_PROMPT)
                setCopied(true)
                window.setTimeout(() => setCopied(false), 1800)
              } catch {
                setError('Copie impossible : sélectionne le texte à la main.')
              }
            }}
            className="rounded-xl bg-sage-soft px-4 py-2 text-sm text-sage-dark transition-colors hover:bg-sage hover:text-paper"
          >
            {copied ? 'Copié' : 'Copier le prompt'}
          </button>
        </div>
        <pre className="max-h-56 overflow-auto whitespace-pre-wrap rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-ink">
          {CSV_PHOTO_PROMPT}
        </pre>
      </section>

      <section className="space-y-4">
        {data.themes.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line px-5 py-10 text-center text-mute">
            Aucun thème pour l’instant. Crée-en un, puis importe un CSV.
          </p>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {activeThemes.length > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    const activeIds = activeThemes.map((theme) => theme.id)
                    setSelected(selected.length === activeIds.length ? [] : activeIds)
                    setRenaming(false)
                    setMerging(false)
                    setConfirmDelete(false)
                  }}
                  className="text-mute hover:text-ink"
                >
                  {selected.length === activeThemes.length && activeThemes.length > 0
                    ? 'Tout désélectionner'
                    : 'Tout sélectionner'}
                </button>
              ) : null}
              {selected.length > 0 ? (
                <>
                  <span className="text-mute">
                    {selected.length} sélectionné{selected.length === 1 ? '' : 's'}
                  </span>
                  {selected.length === 1 ? (
                    <button type="button" onClick={startRename} className="text-sage hover:text-sage-dark">
                      Renommer
                    </button>
                  ) : (
                    <button type="button" onClick={startMerge} className="text-sage hover:text-sage-dark">
                      Fusionner
                    </button>
                  )}
                  {selectedThemes.some((theme) => !theme.archivedAt) ? (
                    <button
                      type="button"
                      onClick={() => applyArchive(true)}
                      className="text-mute hover:text-ink"
                    >
                      Archiver
                    </button>
                  ) : null}
                  {selectedThemes.some((theme) => theme.archivedAt) ? (
                    <button
                      type="button"
                      onClick={() => applyArchive(false)}
                      className="text-mute hover:text-ink"
                    >
                      Désarchiver
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => {
                      setConfirmDelete(true)
                      setRenaming(false)
                      setMerging(false)
                    }}
                    className="text-mute hover:text-rose"
                  >
                    Supprimer
                  </button>
                </>
              ) : (
                <span className="text-mute">
                  Coche un thème pour le renommer, l’archiver, le supprimer ou en fusionner plusieurs.
                </span>
              )}
            </div>

            {renaming && selectedThemes[0] ? (
              <form
                onSubmit={applyRename}
                className="flex flex-col gap-3 rounded-2xl bg-paper p-4 sm:flex-row sm:items-end"
              >
                <label className="flex-1 space-y-2">
                  <span className="text-sm text-mute">Nouveau nom</span>
                  <input
                    value={renameValue}
                    onChange={(event) => setRenameValue(event.target.value)}
                    autoFocus
                    className="w-full rounded-xl border border-line bg-cream px-4 py-3 outline-none focus:border-sage"
                  />
                </label>
                <button type="submit" className="rounded-xl bg-sage px-4 py-3 text-paper">
                  Enregistrer
                </button>
                <button type="button" onClick={() => setRenaming(false)} className="text-sm text-mute">
                  Annuler
                </button>
              </form>
            ) : null}

            {merging && selectedThemes.length >= 2 ? (
              <div className="space-y-4 rounded-2xl bg-paper p-4">
                <label className="block space-y-2">
                  <span className="text-sm text-mute">Nom de la fusion</span>
                  <input
                    value={mergeName}
                    onChange={(event) => setMergeName(event.target.value)}
                    className="w-full rounded-xl border border-line bg-cream px-4 py-3 outline-none focus:border-sage"
                  />
                </label>
                <p className="text-sm leading-relaxed text-mute">
                  Les cartes qui partagent un français ou un anglais seront réunies en une seule
                  carte, avec toutes les réponses acceptées. Tu peux remplacer les thèmes choisis,
                  ou créer une fusion et les garder tels quels.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => applyMerge(false)}
                    className="rounded-xl bg-sage px-4 py-3 text-paper hover:bg-sage-dark"
                  >
                    Fusionner et remplacer
                  </button>
                  <button
                    type="button"
                    onClick={() => applyMerge(true)}
                    className="rounded-xl border border-line px-4 py-3 hover:border-sage"
                  >
                    Créer la fusion et garder les originaux
                  </button>
                  <button type="button" onClick={() => setMerging(false)} className="text-sm text-mute">
                    Annuler
                  </button>
                </div>
              </div>
            ) : null}

            {confirmDelete ? (
              <p className="rounded-2xl bg-paper px-4 py-3 text-sm text-mute">
                Supprimer {selected.length} thème{selected.length === 1 ? '' : 's'} et leurs mots ?{' '}
                <button type="button" onClick={applyDelete} className="text-rose">
                  Oui, supprimer
                </button>
                {' · '}
                <button type="button" onClick={() => setConfirmDelete(false)}>
                  Annuler
                </button>
              </p>
            ) : null}

            {activeThemes.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-line px-5 py-8 text-center text-mute">
                Tous tes thèmes sont archivés. Déplie la liste en bas de page pour les retrouver.
              </p>
            ) : (
              <ul className="space-y-3">
                {activeThemes.map((theme) => (
                  <ThemeRow
                    key={theme.id}
                    theme={theme}
                    selected={selected.includes(theme.id)}
                    onToggle={() => toggleSelected(theme.id)}
                    onOpen={() => onOpenTheme(theme.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      {archivedThemes.length > 0 ? (
        <section className="mt-auto space-y-3 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => setShowArchived((open) => !open)}
            className="flex w-full items-center justify-between rounded-2xl bg-paper px-5 py-4 text-left"
            aria-expanded={showArchived}
          >
            <span className="font-serif text-xl text-ink">Thèmes archivés</span>
            <span className="text-sm text-mute">
              {archivedThemes.length}
              {' · '}
              {showArchived ? 'Replier' : 'Déplier'}
            </span>
          </button>
          {showArchived ? (
            <ul className="space-y-3">
              {archivedThemes.map((theme) => (
                <ThemeRow
                  key={theme.id}
                  theme={theme}
                  selected={selected.includes(theme.id)}
                  onToggle={() => toggleSelected(theme.id)}
                  onOpen={() => onOpenTheme(theme.id)}
                />
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      <footer className={`flex flex-wrap items-center gap-4 text-sm text-mute ${archivedThemes.length > 0 ? 'pt-2' : 'mt-auto border-t border-line pt-6'}`}>
        <button type="button" onClick={onExport} className="hover:text-ink">
          Exporter la sauvegarde
        </button>
        <button type="button" onClick={() => fileRef.current?.click()} className="hover:text-ink">
          Importer une sauvegarde
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0]
            if (file) void onImportFile(file)
            event.target.value = ''
          }}
        />
        {error ? <span className="text-rose">{error}</span> : null}
      </footer>
    </div>
  )
}

function ThemeRow({
  theme,
  selected,
  onToggle,
  onOpen,
}: {
  theme: Theme
  selected: boolean
  onToggle: () => void
  onOpen: () => void
}) {
  const due = countDueCards(theme)
  return (
    <li>
      <div
        className={`flex items-stretch gap-2 rounded-2xl bg-paper pr-2 transition-transform hover:-translate-y-px ${
          selected ? 'ring-1 ring-sage/40' : ''
        }`}
      >
        <label className="flex cursor-pointer items-center px-4">
          <input
            type="checkbox"
            checked={selected}
            onChange={onToggle}
            aria-label={`Sélectionner ${theme.name}`}
            className="size-4 accent-sage"
          />
        </label>
        <button
          type="button"
          onClick={onOpen}
          className="flex min-w-0 flex-1 items-center justify-between gap-4 py-4 pr-3 text-left"
        >
          <div className="min-w-0">
            <h2 className="font-serif text-xl text-ink">{theme.name}</h2>
            <p className="mt-1 text-sm text-mute">
              {theme.words.length} mot{theme.words.length === 1 ? '' : 's'}
              {theme.sessions?.[0] ? ` · dernière session ${formatScore(theme.sessions[0])}` : ''}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <ThemeAchievement achievements={normalizeAchievements(theme.achievements)} />
            <span
              className={`rounded-full px-3 py-1 text-sm ${
                due > 0 ? 'bg-sage-soft text-sage-dark' : 'bg-cream text-mute'
              }`}
            >
              {due > 0 ? `${due} à revoir` : 'À jour'}
            </span>
          </div>
        </button>
      </div>
    </li>
  )
}
