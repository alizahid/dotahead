import { type BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { ImageBackground } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import background from '~/assets/images/nav-background.jpg'
import { tw } from '~/styles/tailwind'

import { Text } from '../common/text'

export function Header({ navigation, options }: BottomTabHeaderProps) {
  const insets = useSafeAreaInsets()

  return (
    <ImageBackground
      source={background}
      style={tw`flex-row justify-center pt-[${insets.top}px] w-full`}
    >
      <Text variant="display" weight="bold" style={tw`p-3`}>
        {options.title}
      </Text>
    </ImageBackground>
  )
}
