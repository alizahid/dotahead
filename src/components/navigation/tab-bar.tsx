import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ImageBackground } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import background from '~/assets/images/nav-background.jpg'
import { getColor, getSpacePx, tw } from '~/styles/tailwind'

import { Pressable } from '../common/pressable'
import { Text } from '../common/text'

export function TabBar({ descriptors, navigation, state }: BottomTabBarProps) {
  const insets = useSafeAreaInsets()

  return (
    <ImageBackground
      source={background}
      style={tw`w-full flex-row justify-center gap-4`}
    >
      {state.routes.map((route, index) => (
        <Pressable
          key={route.key}
          style={tw`p-3 pb-[${getSpacePx(3, insets.bottom)}]`}
          onPress={() => navigation.navigate(route.name)}
        >
          <Text
            variant="display"
            weight="bold"
            size={2}
            style={{
              color: index === state.index ? '#31c8db' : getColor('gray12'),
            }}
          >
            {descriptors[route.key].options.title}
          </Text>
        </Pressable>
      ))}
    </ImageBackground>
  )
}
