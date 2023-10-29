import { ImageBackground } from 'expo-image'
import { type ReactNode } from 'react'
import {
  ScrollView,
  type ScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

import background from '~/assets/images/page-background.jpg'
import { tw } from '~/styles/tailwind'

type Props = {
  children: ReactNode
  scroll?: ScrollViewProps
  style?: StyleProp<ViewStyle>
}

export function Page({ children, scroll, style }: Props) {
  if (scroll) {
    return (
      <ImageBackground source={background} style={tw`flex-1`}>
        <ScrollView
          scrollIndicatorInsets={{
            right: 1,
            top: 1,
          }}
          indicatorStyle="white"
          contentContainerStyle={style}
          {...scroll}
        >
          {children}
        </ScrollView>
      </ImageBackground>
    )
  }

  return (
    <ImageBackground source={background} style={[tw`flex-1`, style]}>
      {children}
    </ImageBackground>
  )
}
