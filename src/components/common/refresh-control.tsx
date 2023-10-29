import { useCallback, useState } from 'react'
import { RefreshControl as RNRefreshControl } from 'react-native'

import { getColor } from '~/styles/tailwind'

type Props = {
  onRefresh: () => Promise<unknown>
}

export function RefreshControl({ onRefresh }: Props) {
  const [refreshing, setRefreshing] = useState(false)

  const refresh = useCallback(async () => {
    if (!onRefresh) {
      return
    }

    setRefreshing(true)

    await onRefresh()

    setRefreshing(false)
  }, [onRefresh])

  const color = getColor('tomato10')

  return (
    <RNRefreshControl
      colors={[color]}
      onRefresh={refresh}
      refreshing={refreshing}
      tintColor={color}
    />
  )
}
