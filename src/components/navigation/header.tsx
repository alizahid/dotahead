import { type BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { type NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import background from '~/assets/images/nav-background.jpg'
import { getPx, tw } from '~/styles/tailwind'

import { Icon } from '../common/icon'
import { Pressable } from '../common/pressable'
import { Text } from '../common/text'

type Props = BottomTabHeaderProps | NativeStackHeaderProps

export function Header({ navigation, options, ...props }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View style={tw`bg-gray1 pt-[${getPx(insets.top)}]`}>
      <Image
        pointerEvents="none"
        style={tw`absolute inset-0`}
        source={background}
      />

      <View style={tw`h-7 flex-row items-center`}>
        <Text
          align="center"
          variant="display"
          size={2}
          weight="bold"
          style={tw`absolute w-full`}
        >
          {options.title}
        </Text>

        {'back' in props && (
          <Pressable
            style={tw`h-7 w-7 items-center justify-center`}
            onPress={() => navigation.goBack()}
          >
            <Icon name="left" size={5} />
          </Pressable>
        )}
      </View>
    </View>
  )
}
