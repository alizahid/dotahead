import { type ReactNode } from 'react'
import { type StyleProp, type ViewStyle } from 'react-native'

import { tw } from '~/styles/tailwind'

import { Pressable } from './pressable'
import { Text } from './text'

type Props = {
  children: ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  variant?: 'primary' | 'accent'
}

export function Button({
  children,
  onPress,
  style,
  variant = 'primary',
}: Props) {
  return (
    <Pressable
      style={[
        tw.style(
          'h-6 items-center justify-center rounded-3 px-3',
          variant === 'primary' && 'bg-tomato9',
          variant === 'accent' && 'bg-cyan9',
        ),
        style,
      ]}
      onPress={onPress}
    >
      <Text weight="semibold">{children}</Text>
    </Pressable>
  )
}
