import { useQuery } from '@tanstack/react-query'

import { clean, fillAbility, fillTalent } from '~/lib/description'
import { type HeroResponse } from '~/types/dota'

import { getAttribute, getComplexity } from './heroes'
import { useLanguage } from './language'

export function useHero(id: string) {
  const { language } = useLanguage()

  const { data, isLoading, refetch } = useQuery({
    async queryFn() {
      const response = await fetch(
        `https://www.dota2.com/datafeed/herodata?language=${language}&hero_id=${id}`,
      )

      const json = (await response.json()) as HeroResponse

      const hero = json.result.data.heroes.at(0)

      if (!hero) {
        return null
      }

      return {
        abilities: hero.abilities.map((ability) => ({
          description:
            ability.desc_loc.length > 0
              ? fillAbility('desc_loc', ability.desc_loc, ability)
              : null,
          id: ability.id,
          lore: ability.lore_loc || null,
          name: ability.name_loc,
          scepter:
            ability.scepter_loc.length > 0
              ? fillAbility('scepter_loc', ability.scepter_loc, ability)
              : null,
          shard:
            ability.shard_loc.length > 0
              ? fillAbility('shard_loc', ability.shard_loc, ability)
              : null,
          slug: ability.name,
          source: (ability.ability_is_granted_by_scepter
            ? 'scepter'
            : ability.ability_is_granted_by_shard
            ? 'shard'
            : null) as 'scepter' | 'shard' | null,
          upgrade: (ability.ability_has_scepter
            ? 'scepter'
            : ability.ability_has_shard
            ? 'shard'
            : null) as 'scepter' | 'shard' | null,
        })),
        attribute: getAttribute(hero.primary_attr),
        attributes: {
          agility: {
            base: hero.agi_base,
            gain: hero.agi_gain,
          },
          attack: {
            damage: [
              Math.round(
                hero.primary_attr === 3
                  ? (hero.str_base + hero.agi_base + hero.int_base) * 0.7 +
                      hero.damage_min
                  : hero.damage_min,
              ),
              Math.round(
                hero.primary_attr === 3
                  ? (hero.str_base + hero.agi_base + hero.int_base) * 0.7 +
                      hero.damage_max
                  : hero.damage_max,
              ),
            ] as [min: number, max: number],
            range: hero.attack_range,
            rate: hero.attack_rate,
            speed: hero.projectile_speed,
            type: getAttackType(hero.attack_capability),
          },
          defense: {
            armor: hero.armor,
            magic: hero.magic_resistance,
          },
          health: {
            base: hero.max_health,
            gain: hero.health_regen,
          },
          intelligence: {
            base: hero.int_base,
            gain: hero.int_gain,
          },
          mana: {
            base: hero.max_mana,
            gain: hero.mana_regen,
          },
          mobility: {
            speed: hero.movement_speed,
            turn: hero.turn_rate,
            vision: [hero.sight_range_day, hero.sight_range_night] as [
              day: number,
              night: number,
            ],
          },
          strength: {
            base: hero.str_base,
            gain: hero.str_gain,
          },
        },
        bio: clean(hero.bio_loc),
        complexity: getComplexity(hero.complexity),
        description: clean(hero.npe_desc_loc),
        hype: clean(hero.hype_loc),
        id: hero.id,
        name: hero.name_loc,
        roles: getRoles(hero.role_levels),
        slug: hero.name.substring(14),
        talents: hero.talents.reverse().map((talent) => ({
          id: talent.id,
          name: fillTalent(talent.name, talent.name_loc, hero),
          slug: talent.name,
        })),
      }
    },
    queryKey: ['hero', id, language],
  })

  return {
    hero: data,
    loading: isLoading,
    refetch,
  }
}

export function getAttackType(
  name: HeroResponse['result']['data']['heroes'][number]['attack_capability'],
) {
  switch (name) {
    case 1:
      return 'melee' as const

    case 2:
      return 'ranged' as const
  }
}

export function getRoles([
  carry,
  support,
  nuker,
  disabler,
  jungler,
  durable,
  escape,
  pusher,
  initiator,
]: HeroResponse['result']['data']['heroes'][number]['role_levels']) {
  return [
    ['Carry', carry],
    ['Support', support],
    ['Nuker', nuker],
    ['Disabler', disabler],
    ['Jungler', jungler],
    ['Durable', durable],
    ['Escape', escape],
    ['Pusher', pusher],
    ['Initiator', initiator],
  ] as const
}
