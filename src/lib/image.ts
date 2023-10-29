import { type getAttackType } from '~/hooks/hero'
import { type getAttribute } from '~/hooks/heroes'

export function getAttributeImage(attribute: ReturnType<typeof getAttribute>) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${attribute}.png`
}

export function getHeroImage(slug: string) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${slug}.png`
}

export function getHeroRender(slug: string) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${slug}.png`
}

export function getAttackTypeImage(type: ReturnType<typeof getAttackType>) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/${type}.svg`
}

export function getAbilityImage(slug: string) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${slug}.png`
}

export function getAbilityVideo(hero: string, slug: string) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${hero}/${slug}.mp4`
}

export function getAbilityUpgradeImage(type: 'shard' | 'scepter') {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_${type}.png`
}

export function getItemImage(slug: string) {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png`
}
