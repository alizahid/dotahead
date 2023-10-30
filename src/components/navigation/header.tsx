import { type BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { type NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import background from '~/assets/images/nav-background.jpg'
import { getPx, tw } from '~/styles/tailwind'

import { Text } from '../common/text'
import { HeaderButton } from './button'

type Props = BottomTabHeaderProps | NativeStackHeaderProps

export function Header({ navigation, options, ...props }: Props) {
  const insets = useSafeAreaInsets()

  const back = 'back' in props

  return (
    <View style={tw`bg-gray1 pt-[${getPx(insets.top)}]`}>
      <Image
        pointerEvents="none"
        style={tw`absolute inset-0`}
        source={background}
      />

      <View style={tw`h-7 items-center justify-center`}>
        {options.headerLeft ?? back ? (
          <View style={tw`absolute bottom-0 left-0 flex-row`}>
            {back ? (
              <HeaderButton icon="left" onPress={() => navigation.goBack()} />
            ) : null}

            {options.headerLeft?.({
              canGoBack: navigation.canGoBack(),
            })}
          </View>
        ) : null}

        {options.title ? <Text weight="bold">{options.title}</Text> : null}

        {options.headerRight ? (
          <View style={tw`absolute bottom-0 right-0 flex-row`}>
            {options.headerRight({
              canGoBack: navigation.canGoBack(),
            })}
          </View>
        ) : null}
      </View>
    </View>
  )
}
