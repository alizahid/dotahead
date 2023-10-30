import { type ReactNode } from 'react'
import { type StyleProp, Text as RNText, type TextStyle } from 'react-native'

import { type TailwindColor, type TailwindSpace, tw } from '~/styles/tailwind'

type Props = {
  align?: 'center' | 'left' | 'right'
  children: ReactNode
  color?: TailwindColor
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  lines?: number
  selectable?: boolean
  size?: TailwindSpace
  style?: StyleProp<TextStyle>
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  variant?: 'body' | 'display'
  weight?: 'bold' | 'regular' | 'semibold'
}

export function Text({
  align = 'left',
  children,
  color = 'gray12',
  leading = 'normal',
  lines,
  selectable,
  size = 3,
  style,
  variant = 'body',
  weight = 'regular',
  tracking = variant === 'display' ? 'wider' : 'normal',
}: Props) {
  return (
    <RNText
      selectable={selectable}
      numberOfLines={lines}
      style={[
        tw`font-${variant}-${weight} text-${size} text-${color} text-${align} leading-${leading} tracking-${tracking}`,
        style,
      ]}
    >
      {children}
    </RNText>
  )
}
