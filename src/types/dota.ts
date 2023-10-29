export type HeroListResponse = {
  result: {
    data: {
      heroes: Array<{
        complexity: 1 | 2 | 3
        id: number
        name: string
        name_loc: string
        primary_attr: 0 | 1 | 2 | 3
      }>
    }
  }
}
export type HeroResponse = {
  result: {
    data: {
      heroes: [
        {
          abilities: Array<{
            ability_has_scepter: boolean
            ability_has_shard: boolean
            ability_is_granted_by_scepter: boolean
            ability_is_granted_by_shard: boolean
            desc_loc: string
            id: number
            lore_loc: string
            name: string
            name_loc: string
            notes_loc: Array<string>
            scepter_loc: string
            shard_loc: string
            special_values: Array<{
              bonuses: Array<{
                name: string
                value: number
              }>
              name: string
              values_float: [number]
              values_scepter: [number]
              values_shard: [number]
            }>
          }>
          agi_base: number
          agi_gain: number
          armor: number
          attack_capability: 1 | 2
          attack_range: number
          attack_rate: number
          bio_loc: string
          complexity: 1 | 2 | 3
          damage_max: number
          damage_min: number
          health_regen: number
          hype_loc: string
          id: number
          int_base: number
          int_gain: number
          magic_resistance: number
          mana_regen: number
          max_health: number
          max_mana: number
          movement_speed: number
          name: string
          name_loc: string
          npe_desc_loc: string
          primary_attr: 0 | 1 | 2 | 3
          projectile_speed: number
          role_levels: [
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
            0 | 1 | 2 | 3,
          ]
          sight_range_day: number
          sight_range_night: number
          str_base: number
          str_gain: number
          talents: Array<{
            desc_loc: string
            id: number
            lore_loc: string
            name: string
            name_loc: string
            notes_loc: Array<string>
            scepter_loc: string
            shard_loc: string
            special_values: Array<{
              bonuses: Array<{
                name: string
                value: number
              }>
              name: string
              values_float: [number]
              values_scepter: [number]
              values_shard: [number]
            }>
          }>
          turn_rate: number
        },
      ]
    }
  }
}
