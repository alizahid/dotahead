import { View } from 'react-native'

import { Text } from '~/components/text'
import { tw } from '~/styles/tailwind'

export default function Screen() {
  return (
    <View style={tw`flex-1`}>
      <Text>Tab One</Text>
    </View>
  )
}
