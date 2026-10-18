import type { Achievements, SessionSize } from '../types'

export const emptyAchievements = (): Achievements => ({
  bronze: false,
  silver: false,
  gold: false,
})

export function normalizeAchievements(value: Achievements | undefined): Achievements {
  return {
    bronze: Boolean(value?.bronze),
    silver: Boolean(value?.silver),
    gold: Boolean(value?.gold),
  }
}

export function mergeAchievements(list: Achievements[]): Achievements {
  return {
    bronze: list.some((item) => item.bronze),
    silver: list.some((item) => item.silver),
    gold: list.some((item) => item.gold),
  }
}

export function medalForSession(
  size: SessionSize | undefined,
  completed: number,
  available: number,
): keyof Achievements | null {
  if (!size || completed <= 0 || available <= 0) return null
  if (size === 'all' && completed >= available) return 'gold'
  if (size === 20 && completed >= 20 && available > 20) return 'silver'
  if (size === 10 && completed >= 10 && available > 10) return 'bronze'
  return null
}

export function medalCount(achievements: Achievements): number {
  return Number(achievements.bronze) + Number(achievements.silver) + Number(achievements.gold)
}

export function hasTrophy(achievements: Achievements): boolean {
  return achievements.bronze && achievements.silver && achievements.gold
}

export function medalLabel(kind: keyof Achievements): string {
  if (kind === 'bronze') return 'bronze'
  if (kind === 'silver') return 'argent'
  return 'or'
}

export function suggestedSessionSize(
  achievements: Achievements,
  available: number,
): SessionSize {
  let preferred: SessionSize = 10
  if (achievements.bronze && achievements.silver) preferred = 'all'
  else if (achievements.bronze) preferred = 20

  if (preferred === 20 && available <= 20) preferred = available > 10 ? 10 : 'all'
  if (preferred === 10 && available <= 10) preferred = 'all'
  return preferred
}
