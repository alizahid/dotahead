import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { z } from 'zod'

import { queryClient } from '~/lib/query'

export const FilterAttributes = [
  'strength',
  'agility',
  'intelligence',
  'universal',
] as const

export const FilterComplexities = ['low', 'medium', 'high'] as const

export const FiltersSchema = z.object({
  attribute: z.enum(FilterAttributes).optional(),
  complexity: z.enum(FilterComplexities).optional(),
  name: z.string().optional(),
})

export type Filters = z.infer<typeof FiltersSchema>

export const filtersQueryKey = 'filters'

export function useFilters() {
  const { data } = useQuery<Filters>({
    queryKey: [filtersQueryKey],
  })

  const update = useCallback((filters: Partial<Filters>) => {
    queryClient.setQueryData<Filters>([filtersQueryKey], (previous) => ({
      ...previous,
      ...filters,
    }))
  }, [])

  const clear = useCallback(() => {
    queryClient.setQueryData<Filters>([filtersQueryKey], {})
  }, [])

  return {
    clear,
    filters: data,
    update,
  }
}
