import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { type ReactNode } from 'react'

import { filtersQueryKey } from '~/hooks/filters'

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
        dehydrateOptions: {
          shouldDehydrateQuery(query) {
            return query.queryKey[0] !== filtersQueryKey
          },
        },
        persister,
      }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}
