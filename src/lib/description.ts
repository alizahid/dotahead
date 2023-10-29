import { convert } from 'html-to-text'

import { type HeroResponse } from '~/types/dota'

export function clean(data: string) {
  const next = data
    .replace(/\r\n/g, '')
    .replace(/\t/g, '')
    .replace(/%%/g, '%')
    .replace(/<br>/g, '\n')

  return convert(next, {
    preserveNewlines: true,
    wordwrap: false,
  })
}

export function fillAbility(
  key: 'desc_loc' | 'scepter_loc' | 'shard_loc',
  data: string,
  ability: HeroResponse['result']['data']['heroes'][0]['abilities'][number],
) {
  let next = data

  if (key === 'desc_loc') {
    next = ability.special_values.reduce(
      (data, value) =>
        data.replace(`%${value.name}%`, String(value.values_float[0])),
      data,
    )
  }

  if (key === 'scepter_loc') {
    next = ability.special_values.reduce((data, value) => {
      const regex = new RegExp(`%(bonus_|)${value.name}%`)

      return data.replace(regex, String(value.values_scepter[0]))
    }, data)
  }

  if (key === 'shard_loc') {
    next = ability.special_values.reduce((data, value) => {
      const regex = new RegExp(`%(bonus_|)${value.name}%`)

      return data.replace(regex, String(value.values_shard[0]))
    }, data)
  }

  return clean(next)
}

export function fillTalent(
  name: string,
  data: string,
  hero: HeroResponse['result']['data']['heroes'][0],
) {
  let next = data

  const bonus = hero.abilities
    .find((ability) =>
      ability.special_values.find((value) =>
        value.bonuses.find((bonus) => bonus.name === name),
      ),
    )
    ?.special_values.find((value) =>
      value.bonuses.find((bonus) => bonus.name === name),
    )
    ?.bonuses.find((bonus) => bonus.name === name)

  if (bonus) {
    next = next.replace(/{s:bonus_\w+}/, String(bonus.value))

    return clean(next)
  }

  const talent = hero.talents.find((talent) => talent.name === name)

  if (talent) {
    next = talent.special_values.reduce(
      (data, value) =>
        data
          .replace(`{s:${value.name}}`, String(value.values_float[0]))
          .replace(`{s:bonus_${value.name}}`, String(value.values_float[0])),
      data,
    )
  }

  return clean(next)
}
