import { View } from 'react-native'

import { tw } from '~/styles/tailwind'

import { Spinner } from './spinner'

export function Loading() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Spinner />
    </View>
  )
}
