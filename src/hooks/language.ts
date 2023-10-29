import { useQuery } from '@tanstack/react-query'

export function useLanguage() {
  const { data } = useQuery({
    queryFn() {
      return 'english'
    },
    queryKey: ['language'],
  })

  return {
    language: data,
  }
}
