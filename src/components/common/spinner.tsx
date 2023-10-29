import { ActivityIndicator } from 'react-native'

import { getColor } from '~/styles/tailwind'

export function Spinner() {
  return <ActivityIndicator color={getColor('tomato9')} size="large" />
}
