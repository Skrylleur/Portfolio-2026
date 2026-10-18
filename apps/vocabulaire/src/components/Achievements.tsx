import { hasTrophy, medalCount, medalLabel } from '../lib/achievements'
import type { Achievements } from '../types'

type MedalKind = keyof Achievements

const fills: Record<MedalKind, string> = {
  bronze: '#b08d57',
  silver: '#8f99a4',
  gold: '#c4a35a',
}

function MedalIcon({ kind, earned, size = 22 }: { kind: MedalKind; earned: boolean; size?: number }) {
  const fill = earned ? fills[kind] : '#e4ddd2'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={!earned}
      className={earned ? '' : 'opacity-70'}
    >
      <circle cx="12" cy="13" r="7.2" fill={fill} />
      <circle cx="12" cy="13" r="5.1" fill={earned ? '#fbf8f2' : '#f4efe6'} opacity="0.35" />
      <path d="M8 4.5 12 7l4-2.5-1.2 3.6H9.2L8 4.5Z" fill={fill} />
    </svg>
  )
}

function TrophyIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#c4a35a"
        d="M7 4h10v3.2c2.2.4 3.5 1.8 3.5 3.6 0 2.4-2.3 4-5.2 4.3L14.6 18h2.2v2H7.2v-2h2.2l-.7-2.9C5.8 14.8 3.5 13.2 3.5 10.8c0-1.8 1.3-3.2 3.5-3.6V4Zm1.8 1.7v1.7c-1.3.2-2 .9-2 1.7 0 1.2 1.3 2.2 3.2 2.4V8.8c0-1.1.6-1.8 2-1.8s2 .7 2 1.8v2.7c1.9-.2 3.2-1.2 3.2-2.4 0-.8-.7-1.5-2-1.7V5.7H8.8Z"
      />
    </svg>
  )
}

export function SessionMedals({ achievements }: { achievements: Achievements }) {
  const earned = (['bronze', 'silver', 'gold'] as const).filter((kind) => achievements[kind])
  if (earned.length === 0) return null
  return (
    <div className="flex items-center gap-1" aria-label="Médailles obtenues">
      {earned.map((kind) => (
        <span key={kind} title={`Médaille ${medalLabel(kind)}`}>
          <MedalIcon kind={kind} earned />
        </span>
      ))}
    </div>
  )
}

export function ThemeAchievement({ achievements }: { achievements: Achievements }) {
  if (hasTrophy(achievements)) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-mute" title="Les trois durées sont validées">
        <TrophyIcon />
        <span>Trophée</span>
      </span>
    )
  }

  const count = medalCount(achievements)
  return (
    <span
      className="inline-flex items-center gap-1.5 text-sm text-mute"
      title="Progression : 10 cartes, 20 cartes, puis tout le thème"
    >
      <span className="flex items-center">
        <MedalIcon kind="bronze" earned={achievements.bronze} size={18} />
        <MedalIcon kind="silver" earned={achievements.silver} size={18} />
        <MedalIcon kind="gold" earned={achievements.gold} size={18} />
      </span>
      <span>
        {count} / 3
      </span>
    </span>
  )
}
