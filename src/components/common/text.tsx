import { type ReactNode } from 'react'
import { type StyleProp, Text as RNText, type TextStyle } from 'react-native'

import { type TailwindColor, type TailwindSpace, tw } from '~/styles/tailwind'

type Props = {
  align?: 'center' | 'left' | 'right'
  children: ReactNode
  color?: TailwindColor
  lines?: number
  selectable?: boolean
  size?: TailwindSpace
  style?: StyleProp<TextStyle>
  variant?: 'body' | 'display'
  weight?: 'bold' | 'regular' | 'semibold'
}

export function Text({
  align = 'left',
  children,
  color = 'gray12',
  lines,
  selectable,
  size = 3,
  style,
  variant = 'body',
  weight = 'regular',
}: Props) {
  return (
    <RNText
      selectable={selectable}
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
