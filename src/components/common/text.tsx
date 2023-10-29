import { ReactNode } from 'react'
import { Text as RNText, StyleProp, TextStyle } from 'react-native'
import { TailwindColor, TailwindSpace, tw } from '~/styles/tailwind'

type Props = {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
  color?: TailwindColor
  lines?: number
  size?: TailwindSpace
  style?: StyleProp<TextStyle>
  variant?: 'body' | 'display'
  weight?: 'regular' | 'semibold' | 'bold'
}

export function Text({
  align = 'left',
  children,
  color = 'gray12',
  lines,
  size = 3,
  style,
  variant = 'body',
  weight = 'regular',
}: Props) {
  return (
    <RNText
      numberOfLines={lines}
      style={[
        tw`font-${variant}-${weight} text-${size} text-${color} text-${align}`,
        style,
      ]}
    >
      {children}
    </RNText>
  )
}
