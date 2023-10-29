import { type ReactNode } from 'react'
import { type StyleProp, type ViewStyle } from 'react-native'

import { tw } from '~/styles/tailwind'

import { Pressable } from './pressable'
import { Text } from './text'

type Props = {
  children: ReactNode
  onPress?: () => void

  style?: StyleProp<ViewStyle>
}

export function Button({ children, onPress, style }: Props) {
  return (
    <Pressable
      style={[
        tw`h-6 items-center justify-center rounded-3 bg-cyan9 px-3`,
        style,
      ]}
      onPress={onPress}
    >
      <Text weight="semibold">{children}</Text>
    </Pressable>
  )
}
