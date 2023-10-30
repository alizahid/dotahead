import { useQuery } from '@tanstack/react-query'
import { sortBy } from 'lodash'

import { type HeroListResponse } from '~/types/dota'

import { type Filters, filtersQueryKey } from './filters'
import { useLanguage } from './language'

export function useHeroes() {
  const { language } = useLanguage()

  const { data: filters } = useQuery<Filters>({
    queryKey: [filtersQueryKey],
  })

  const { data, isLoading, refetch } = useQuery({
    async queryFn() {
      const response = await fetch(
        `https://www.dota2.com/datafeed/herolist?language=${language}`,
      )

      const json = (await response.json()) as HeroListResponse

      const heroes = sortBy(json.result.data.heroes, 'name_english_loc')

      return heroes.map((hero) => ({
        attribute: getAttribute(hero.primary_attr),
        complexity: getComplexity(hero.complexity),
        id: hero.id,
        name: hero.name_loc,
        slug: hero.name.substring(14),
      }))
    },
    queryKey: ['heroes', language],
  })

  let heroes = data

  if (filters?.name) {
    heroes = heroes?.filter((hero) =>
      hero.name.toLocaleLowerCase().includes(filters.name!),
    )
  }

  if (filters?.attribute) {
    heroes = heroes?.filter((hero) => hero.attribute === filters.attribute)
  }

  if (filters?.complexity) {
    heroes = heroes?.filter((hero) => hero.complexity === filters.complexity)
  }

  return {
    heroes,
    loading: isLoading,
    refetch,
  }
}

export function getAttribute(
  name: HeroListResponse['result']['data']['heroes'][number]['primary_attr'],
) {
  switch (name) {
    case 0:
      return 'strength' as const

    case 1:
      return 'agility' as const

    case 2:
      return 'intelligence' as const

    case 3:
      return 'universal' as const
  }
}

export function getComplexity(
  name: HeroListResponse['result']['data']['heroes'][number]['complexity'],
) {
  switch (name) {
    case 1:
      return 'low' as const

    case 2:
      return 'medium' as const

    case 3:
      return 'high' as const
  }
}
