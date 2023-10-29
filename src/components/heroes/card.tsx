import { Image, ImageBackground } from 'expo-image'
import { useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import background from '~/assets/images/card-background.jpg'
import { useHeroes } from '~/hooks/heroes'
import { tw } from '~/styles/tailwind'

import { Pressable } from '../common/pressable'
import { Text } from '../common/text'

const ratio = 144 / 256

type Props = {
  hero: NonNullable<ReturnType<typeof useHeroes>['heroes']>[number]
  style?: StyleProp<ViewStyle>
}

export function HeroCard({ hero, style }: Props) {
  const [width, setWidth] = useState(0)

  return (
    <Pressable
      onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      style={[tw`flex-1`, style]}
    >
      <ImageBackground
        style={tw`rounded-4 overflow-hidden`}
        source={background}
      >
        <Image
          style={{
            height: width * ratio,
            width,
          }}
          source={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.slug.substring(
            14
          )}.png`}
        />

        <View style={tw`absolute m-2 bg-gray1 rounded-9`}>
          <Image
            style={tw`h-5 w-5`}
            source={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${hero.attribute}.png`}
          />
        </View>

        <Text style={tw`mx-2 my-1`} weight="semibold">
          {hero.name}
        </Text>
      </ImageBackground>
    </Pressable>
  )
}
