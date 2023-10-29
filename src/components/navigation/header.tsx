import { type BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { type NativeStackHeaderProps } from '@react-navigation/native-stack'
import { ImageBackground } from 'expo-image'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import background from '~/assets/images/nav-background.jpg'
import { getSpacePx, tw } from '~/styles/tailwind'

import { Icon } from '../common/icon'
import { Pressable } from '../common/pressable'
import { Text } from '../common/text'

type Props = BottomTabHeaderProps | NativeStackHeaderProps

export function Header({ navigation, options, ...props }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <ImageBackground
      source={background}
      style={tw`pt-[${getSpacePx(0, insets.top)}]`}
    >
      <View style={tw`h-7 w-full flex-row items-center`}>
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
    </ImageBackground>
  )
}
