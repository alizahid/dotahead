import { useQuery } from '@tanstack/react-query'

import { type HeroListResponse } from '~/types/dota'

import { useLanguage } from './language'

export function useHeroes() {
  const { language } = useLanguage()

  const { data, isLoading, refetch } = useQuery({
    async queryFn() {
      const response = await fetch(
        `https://www.dota2.com/datafeed/herolist?language=${language}`,
      )

      const json = (await response.json()) as HeroListResponse

      return json.result.data.heroes.map((hero) => ({
        attribute: getAttribute(hero.primary_attr),
        complexity: getComplexity(hero.complexity),
        id: hero.id,
        name: hero.name_loc,
        slug: hero.name,
      }))
    },
    queryKey: ['heroes', language],
  })

  return {
    heroes: data,
    loading: isLoading,
    refetch,
  }
}

function getAttribute(
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

function getComplexity(
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
