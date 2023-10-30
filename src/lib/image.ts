import { type FilterAttributes } from '~/hooks/filters'
import { type getAttackType } from '~/hooks/hero'
import { type getAttribute } from '~/hooks/heroes'

const base = 'https://cdn.cloudflare.steamstatic.com/apps/dota2'

export function getAttributeImage(attribute: ReturnType<typeof getAttribute>) {
  return `${base}/images/dota_react/icons/hero_${attribute}.png`
}

export function getHeroImage(slug: string) {
  return `${base}/images/dota_react/heroes/${slug}.png`
}

export function getHeroRender(slug: string) {
  return `${base}/videos/dota_react/heroes/renders/${slug}.png`
}

export function getAttackTypeImage(type: ReturnType<typeof getAttackType>) {
  return `${base}/images/dota_react/icons/${type}.svg`
}

export function getAbilityImage(slug: string) {
  return `${base}/images/dota_react/abilities/${slug}.png`
}

export function getAbilityVideo(hero: string, slug: string) {
  return `${base}/videos/dota_react/abilities/${hero}/${slug}.mp4`
}

export function getAbilityUpgradeImage(type: 'shard' | 'scepter') {
  return `${base}/images/dota_react/heroes/stats/aghs_${type}.png`
}

export function getItemImage(slug: string) {
  return `${base}/images/dota_react/items/ultimate_scepter.png`
}

export function getFilterImage(
  name: 'complexity' | (typeof FilterAttributes)[number],
) {
  if (name === 'complexity') {
    return `${base}/images/dota_react/herogrid/filter-diamond.png`
  }

  const id = name.slice(0, 3)

  return `${base}/images/dota_react/herogrid/filter-${id}-active.png`
}
