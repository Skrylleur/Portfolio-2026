import type { SessionRecord } from '../types'

type Attempt = {
  item: { wordId: string; direction: string }
  correct: boolean
}

export function firstPassStats(results: Attempt[]): {
  correct: number
  total: number
  retries: number
} {
  const seen = new Set<string>()
  let correct = 0
  let total = 0
  let retries = 0
  for (const result of results) {
    const key = `${result.item.wordId}:${result.item.direction}`
    if (seen.has(key)) {
      retries += 1
      continue
    }
    seen.add(key)
    total += 1
    if (result.correct) correct += 1
  }
  return { correct, total, retries }
}

export function scoreOf(session: SessionRecord): number {
  if (session.total <= 0) return 0
  return session.correct / session.total
}

export function formatScore(session: Pick<SessionRecord, 'correct' | 'total'>): string {
  return `${session.correct} sur ${session.total}`
}

export function sessionKindLabel(session: SessionRecord): string {
  const mode =
    session.mode === 'type' ? 'Saisie' : session.mode === 'choice' ? '3 cartes' : 'Cartes'
  if (session.direction === 'fr_en') return `${mode} · FR → EN`
  if (session.direction === 'en_fr') return `${mode} · EN → FR`
  return `${mode} · mélange`
}

export function formatSessionWhen(at: number, now = Date.now()): string {
  const delta = now - at
  if (delta < 60_000) return 'À l’instant'
  if (delta < 3_600_000) {
    const minutes = Math.max(1, Math.round(delta / 60_000))
    return `Il y a ${minutes} min`
  }
  const startOfToday = new Date(now)
  startOfToday.setHours(0, 0, 0, 0)
  if (at >= startOfToday.getTime()) {
    return `Aujourd’hui, ${timeOf(at)}`
  }
  const startOfYesterday = startOfToday.getTime() - 86_400_000
  if (at >= startOfYesterday) {
    return `Hier, ${timeOf(at)}`
  }
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(at)
}

function timeOf(at: number): string {
  return new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(at)
}

export function closingMessage(sessions: SessionRecord[]): { headline: string; note: string } {
  const current = sessions[0]
  if (!current || current.total === 0) {
    return {
      headline: 'Session posée',
      note: 'Tu es passé par les mots. C’est déjà le bon geste.',
    }
  }

  const rate = scoreOf(current)
  const previous = sessions[1]
  const earlier = sessions.slice(1, 4)
  const previousRate = previous ? scoreOf(previous) : null
  const average =
    earlier.length > 0
      ? earlier.reduce((sum, session) => sum + scoreOf(session), 0) / earlier.length
      : null
  const delta = previousRate === null ? null : rate - previousRate
  const count = sessions.length

  if (count === 1) {
    if (rate >= 0.85) {
      return {
        headline: 'Premier passage déjà fluide',
        note: 'Tu as une belle base. Un retour plus tard suffira à la garder vivante.',
      }
    }
    return {
      headline: 'Premier passage, c’est posé',
      note: 'Les mots ont besoin de plusieurs visites. Rien d’urgent : le suivant fera le travail.',
    }
  }

  if (rate === 1) {
    return {
      headline: 'Tout est passé',
      note:
        count >= 4
          ? 'Cette clarté vient des sessions d’avant, pas d’un effort forcé.'
          : 'Un petit tour plus tard gardera ça léger, sans en faire trop.',
    }
  }

  if (rate >= 0.85) {
    return {
      headline: 'C’est bien ancré',
      note:
        delta !== null && delta > 0.04
          ? 'Plus souple qu’au passage d’avant. Tu peux laisser reposer.'
          : 'Ces mots tiennent. Continuer un peu, de temps en temps, suffit.',
    }
  }

  if (delta !== null && delta >= 0.12) {
    return {
      headline: 'Ça s’installe',
      note: 'Le geste est le même, et les réponses viennent plus facilement. C’est exactement ça.',
    }
  }

  if (delta !== null && delta >= 0.04) {
    return {
      headline: 'Un cran plus clair',
      note: 'Pas besoin d’un grand saut : cette petite avance se cumule très bien.',
    }
  }

  if (average !== null && rate >= average - 0.03 && count >= 3) {
    return {
      headline: 'Tu tiens le rythme',
      note: `${count} sessions sur ce thème. La régularité compte plus que le score du jour.`,
    }
  }

  if (delta !== null && delta <= -0.12) {
    return {
      headline: 'Session utile',
      note: 'Les cartes du jour n’étaient peut-être pas les mêmes. Voir ce qui n’est pas encore ancré, c’est déjà avancer.',
    }
  }

  if (delta !== null && delta < -0.03) {
    return {
      headline: 'Le cerveau trie',
      note: 'Un passage plus hésitant arrive souvent juste avant que ça se cale. Revenir demain suffit.',
    }
  }

  if (current.retries > 0) {
    return {
      headline: 'Tu as repris ce qui résistait',
      note: 'Revoir un mot dans la même session, sans se juger, c’est une très bonne habitude.',
    }
  }

  if (rate >= 0.55) {
    return {
      headline: 'En bonne voie',
      note: 'Une partie tient déjà. Le reste reviendra, un peu à la fois.',
    }
  }

  return {
    headline: 'Les mots ont été vus',
    note: 'C’est le seul objectif d’aujourd’hui. La mémorisation se fait sur plusieurs passages, tout doucement.',
  }
}

export function trendLabel(sessions: SessionRecord[]): string | null {
  if (sessions.length < 2) return null
  const recent = sessions.slice(0, 3).map(scoreOf)
  const older = sessions.slice(3, 6).map(scoreOf)
  const recentAvg = recent.reduce((sum, value) => sum + value, 0) / recent.length
  if (older.length === 0) {
    const delta = scoreOf(sessions[0]) - scoreOf(sessions[1])
    if (delta >= 0.05) return 'Un peu plus fluide'
    if (delta <= -0.05) return 'Les cartes changent, c’est normal'
    return 'Rythme régulier'
  }
  const olderAvg = older.reduce((sum, value) => sum + value, 0) / older.length
  const delta = recentAvg - olderAvg
  if (delta >= 0.06) return 'Tendance plus claire'
  if (delta <= -0.06) return 'Période de tri, sans gravité'
  return 'Belle constance'
}
