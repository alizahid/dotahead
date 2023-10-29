import { ImageBackground } from 'expo-image'
import { type ReactNode } from 'react'
import { type StyleProp, type ViewStyle } from 'react-native'

import background from '~/assets/images/page-background.jpg'
import { tw } from '~/styles/tailwind'

type Props = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export function Page({ children, style }: Props) {
  return (
    <ImageBackground source={background} style={[tw`flex-1`, style]}>
      {children}
    </ImageBackground>
  )
}
