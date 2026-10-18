import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { SessionMedals } from '../components/Achievements'
import { medalForSession, medalLabel, normalizeAchievements } from '../lib/achievements'
import { buildChoices, type Choice } from '../lib/choices'
import { answersMatch } from '../lib/normalize'
import { formatTerms } from '../lib/words'
import { closingMessage, firstPassStats, formatScore } from '../lib/progress'
import { buildQueue, countStudyCards, sessionLength } from '../lib/queue'
import { gradeFromTyping, reviewCard } from '../lib/srs'
import { useStore } from '../store'
import type { QueueItem, SessionConfig, Word } from '../types'

type SessionPageProps = {
  config: SessionConfig
  onExit: () => void
}

type Result = {
  item: QueueItem
  correct: boolean
}

function promptOf(word: Word, item: QueueItem): string {
  if (item.direction === 'fr_en') return formatTerms(word.french)
  return formatTerms(word.english)
}

function acceptedOf(word: Word, item: QueueItem): string[] {
  if (item.direction === 'fr_en') return word.english
  return word.french
}

function directionLabel(direction: QueueItem['direction']): string {
  return direction === 'fr_en' ? 'FR → EN' : 'EN → FR'
}

export function SessionPage({ config, onExit }: SessionPageProps) {
  const { data, review, recordSession } = useStore()
  const theme = data.themes.find((item) => item.id === config.themeId)
  const [queue, setQueue] = useState<QueueItem[]>(() => {
    const current = data.themes.find((item) => item.id === config.themeId)
    return current
      ? buildQueue(current, config.direction, sessionLength(current, config.direction, config.size))
      : []
  })
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [typed, setTyped] = useState('')
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [results, setResults] = useState<Result[]>([])
  const [requeued, setRequeued] = useState<Set<string>>(new Set())
  const [picked, setPicked] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const startAchievements = useRef(normalizeAchievements(theme?.achievements))

  const item = queue[index]
  const word = useMemo(
    () => theme?.words.find((entry) => entry.id === item?.wordId),
    [theme, item],
  )
  const choices = useMemo(() => {
    if (config.mode !== 'choice' || !theme || !word || !item) return []
    return buildChoices(theme, word, item.direction, index)
  }, [config.mode, theme, word, item, index])

  if (!theme) {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center">
        <p className="text-mute">Thème introuvable.</p>
        <button type="button" onClick={onExit} className="mt-4 text-sage">
          Retour
        </button>
      </div>
    )
  }

  if (queue.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center">
        <p className="font-serif text-3xl">Rien à réviser</p>
        <p className="mt-3 text-mute">Ajoute des mots à ce thème, puis relance une session.</p>
        <button type="button" onClick={onExit} className="mt-6 text-sage">
          Retour au thème
        </button>
      </div>
    )
  }

  const finished = index >= queue.length

  function keyOf(entry: QueueItem): string {
    return `${entry.wordId}:${entry.direction}`
  }

  function commit(quality: number, wasCorrect: boolean) {
    if (!word || !item) return
    review(config.themeId, word.id, item.direction, reviewCard(word.srs[item.direction], quality))
    const nextResults = [...results, { item, correct: wasCorrect }]
    setResults(nextResults)

    let nextQueue = queue
    const shouldRequeue = !wasCorrect && !requeued.has(keyOf(item))
    if (shouldRequeue) {
      setRequeued((current) => new Set(current).add(keyOf(item)))
      nextQueue = [...queue, item]
      setQueue(nextQueue)
    }

    const nextIndex = index + 1
    if (nextIndex >= nextQueue.length) {
      const stats = firstPassStats(nextResults)
      recordSession(config.themeId, {
        mode: config.mode,
        direction: config.direction,
        size: config.size,
        ...stats,
      })
    }

    setTyped('')
    setCorrect(null)
    setRevealed(false)
    setPicked(null)
    setIndex(nextIndex)
  }

  function pickChoice(choice: Choice) {
    if (revealed) return
    setPicked(choice.label)
    setCorrect(choice.correct)
    setRevealed(true)
  }

  function verifyOrContinue() {
    if (!word || !item) return
    if (correct !== null) {
      commit(gradeFromTyping(Boolean(correct)), Boolean(correct))
      return
    }
    const ok = answersMatch(typed, acceptedOf(word, item))
    setCorrect(ok)
    setRevealed(true)
  }

  function onType(event: FormEvent) {
    event.preventDefault()
    verifyOrContinue()
  }

  function onAnswerKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter') return
    event.preventDefault()
    verifyOrContinue()
  }

  useEffect(() => {
    if (config.mode !== 'type') return
    inputRef.current?.focus()
  }, [config.mode, index, revealed])

  useEffect(() => {
    if (config.mode !== 'choice' || revealed) return
    function onKey(event: globalThis.KeyboardEvent) {
      const number = Number(event.key)
      if (number >= 1 && number <= choices.length) {
        event.preventDefault()
        pickChoice(choices[number - 1])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [config.mode, revealed, choices])

  if (finished) {
    const stats = firstPassStats(results)
    const copy = closingMessage(theme.sessions)
    const previous = theme.sessions[1]
    const achievements = normalizeAchievements(theme.achievements)
    const available = countStudyCards(theme, config.direction)
    const medal = medalForSession(config.size, stats.total, available)
    const justUnlocked = Boolean(medal && achievements[medal] && !startAchievements.current[medal])
    return (
      <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center px-5 py-16">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm tracking-wide text-mute uppercase">Session terminée</p>
          <SessionMedals achievements={achievements} />
        </div>
        <h1 className="mt-3 font-serif text-4xl">{copy.headline}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          {formatScore(stats)}
          {stats.retries > 0
            ? ` · ${stats.retries} reprise${stats.retries === 1 ? '' : 's'} dans la session`
            : ''}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mute">{copy.note}</p>
        {justUnlocked && medal ? (
          <p className="mt-4 text-sm text-mute">
            Médaille {medalLabel(medal)} obtenue
            {config.size === 'all'
              ? ` pour tout le thème (${available} cartes).`
              : ` pour une session de ${config.size} cartes.`}
            {achievements.bronze && achievements.silver && achievements.gold
              ? ' Les trois durées sont validées : le trophée est débloqué sur le thème.'
              : ''}
          </p>
        ) : previous ? (
          <p className="mt-4 text-sm text-mute">
            Passage précédent : {formatScore(previous)}
          </p>
        ) : (
          <p className="mt-4 text-sm text-mute">{theme.name}</p>
        )}
        <button
          type="button"
          onClick={onExit}
          className="mt-8 self-start rounded-xl bg-sage px-5 py-3 text-paper"
        >
          Retour au thème
        </button>
      </div>
    )
  }

  if (!word || !item) return null

  const accepted = acceptedOf(word, item)

  return (
    <div className="mx-auto flex min-h-full max-w-xl flex-col px-5 py-10">
      <div className="flex items-center justify-between gap-3 text-sm text-mute">
        <button type="button" onClick={onExit} className="hover:text-ink">
          Quitter
        </button>
        <div className="flex items-center gap-3">
          <SessionMedals achievements={normalizeAchievements(theme.achievements)} />
          <span>
            {index + 1} / {queue.length}
          </span>
        </div>
      </div>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-sage transition-all"
          style={{ width: `${(index / queue.length) * 100}%` }}
        />
      </div>

      <p className="mt-8 text-xs tracking-[0.16em] text-mute uppercase">
        {directionLabel(item.direction)}
      </p>
      <p className="mt-6 font-serif text-4xl leading-snug text-ink">{promptOf(word, item)}</p>

      {config.mode === 'type' ? (
        <form id="answer-form" onSubmit={onType} className="mt-10 space-y-4">
          <input
            ref={inputRef}
            autoFocus
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            readOnly={revealed}
            onKeyDown={onAnswerKey}
            placeholder="Ta réponse"
            className="w-full rounded-2xl border border-line bg-paper px-4 py-4 outline-none focus:border-sage read-only:opacity-70"
          />
          {!revealed ? (
            <button type="submit" className="rounded-xl bg-sage px-5 py-3 text-paper">
              Vérifier
            </button>
          ) : null}
        </form>
      ) : null}

      {config.mode === 'choice' ? (
        <div className="mt-10 grid gap-3">
          {choices.length === 0 ? (
            <p className="text-sm text-mute">
              Pas assez de mots distincts pour proposer trois cartes.
            </p>
          ) : (
            choices.map((choice, choiceIndex) => {
              const isPicked = picked === choice.label
              const style = revealed
                ? choice.correct
                  ? 'border-sage bg-sage-soft'
                  : isPicked
                    ? 'border-rose bg-rose-soft'
                    : 'border-line bg-paper opacity-70'
                : 'border-line bg-paper hover:border-sage'
              return (
                <button
                  key={choice.label}
                  type="button"
                  disabled={revealed}
                  onClick={() => pickChoice(choice)}
                  className={`flex items-start gap-4 rounded-2xl border px-4 py-4 text-left ${style}`}
                >
                  <span className="mt-1 w-4 text-sm text-mute">{choiceIndex + 1}</span>
                  <span className="font-serif text-xl leading-snug">{choice.label}</span>
                </button>
              )
            })
          )}
        </div>
      ) : null}

      {config.mode === 'flashcard' ? (
        <div className="mt-10">
          {!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="rounded-xl bg-sage px-5 py-3 text-paper"
            >
              Afficher la réponse
            </button>
          ) : null}
        </div>
      ) : null}

      {revealed && config.mode !== 'choice' ? (
        <div
          className={`mt-8 rounded-2xl p-5 ${
            config.mode === 'type'
              ? correct
                ? 'bg-sage-soft'
                : 'bg-rose-soft'
              : 'bg-paper'
          }`}
        >
          {config.mode === 'type' ? (
            <p className="text-sm">{correct ? 'Juste' : 'À revoir'}</p>
          ) : null}
          <p className="mt-2 font-serif text-2xl">{formatTerms(accepted)}</p>
        </div>
      ) : null}

      {revealed && config.mode === 'choice' && accepted.length > 1 ? (
        <p className="mt-4 text-sm text-mute">Aussi : {formatTerms(accepted.slice(1))}</p>
      ) : null}

      {revealed && (config.mode === 'type' || config.mode === 'choice') ? (
        <button
          type={config.mode === 'type' ? 'submit' : 'button'}
          form={config.mode === 'type' ? 'answer-form' : undefined}
          autoFocus={config.mode === 'choice'}
          onClick={
            config.mode === 'choice'
              ? () => commit(gradeFromTyping(Boolean(correct)), Boolean(correct))
              : undefined
          }
          className="mt-6 self-start rounded-xl bg-sage px-5 py-3 text-paper"
        >
          Continuer
          <span className="ml-2 text-sm text-paper/70">Entrée</span>
        </button>
      ) : null}

      {revealed && config.mode === 'flashcard' ? (
        <div className="mt-6 grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => commit(1, false)}
            className="rounded-xl bg-rose-soft px-3 py-3 text-rose"
          >
            Oublié
          </button>
          <button
            type="button"
            onClick={() => commit(3, false)}
            className="rounded-xl bg-cream px-3 py-3 text-ink"
          >
            Presque
          </button>
          <button
            type="button"
            onClick={() => commit(5, true)}
            className="rounded-xl bg-sage-soft px-3 py-3 text-sage-dark"
          >
            Je savais
          </button>
        </div>
      ) : null}
    </div>
  )
}
