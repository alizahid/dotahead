import { useQuery } from '@tanstack/react-query'

export function useLanguage() {
  const { data } = useQuery({
    queryKey: ['language'],
    queryFn() {
      return 'english'
    },
  })

  return {
    language: data,
  }
}
