export type HeroListResponse = {
  result: {
    data: {
      heroes: Array<{
        id: number
        name: string
        name_loc: string
        name_english_loc: string
        primary_attr: 0 | 1 | 2 | 3
        complexity: 1 | 2 | 3
      }>
    }
  }
}
