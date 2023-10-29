import { useQuery } from '@tanstack/react-query'
import { useLanguage } from './language'
import { HeroListResponse } from '~/types/dota'

export function useHeroes() {
  const { language } = useLanguage()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['heroes', language],
    async queryFn() {
      const response = await fetch(
        `https://www.dota2.com/datafeed/herolist?language=${language}`
      )

      const json = (await response.json()) as HeroListResponse

      return json.result.data.heroes.map((hero) => ({
        name: hero.name_loc,
        id: hero.id,
        slug: hero.name,
        complexity: getComplexity(hero.complexity),
        attribute: getAttribute(hero.primary_attr),
      }))
    },
  })

  return {
    heroes: data,
    loading: isLoading,
    refetch,
  }
}

function getAttribute(
  name: HeroListResponse['result']['data']['heroes'][number]['primary_attr']
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
  name: HeroListResponse['result']['data']['heroes'][number]['complexity']
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
