import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { type ReactNode } from 'react'

import { queryClient } from '../../lib/query'

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
})

type Props = {
  children: ReactNode
}

export function QueryProvider({ children }: Props) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}

// https://www.dota2.com/datafeed/herolist?language=english
// https://www.dota2.com/datafeed/herodata?language=english&hero_id=73

/// https://www.dota2.com/datafeed/itemlist?language=english
/// https://www.dota2.com/datafeed/itemdata?language=english&item_id=600

// react-native-render-html

// https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png
// https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png

// https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png

// https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_enfeeble.png
// https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.mp4
