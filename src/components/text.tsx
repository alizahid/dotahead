import { ReactNode } from 'react'
import { Text as RNText } from 'react-native'

type Props = {
  children: ReactNode
}

export function Text({ children }: Props) {
  return <RNText>{children}</RNText>
}
