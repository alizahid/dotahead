import { Image, ImageBackground } from 'expo-image'
import { Link } from 'expo-router'
import { useState } from 'react'
import { type StyleProp, View, type ViewStyle } from 'react-native'

import background from '~/assets/images/card-background.jpg'
import { type useHeroes } from '~/hooks/heroes'
import { getAttributeImage, getHeroImage } from '~/lib/image'
import { getPx, tw } from '~/styles/tailwind'

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
    <Link asChild href={`/heroes/${hero.id}`} style={[tw`flex-1`, style]}>
      <Pressable onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
        <ImageBackground
          style={tw`overflow-hidden rounded-4`}
          source={background}
        >
          <Image
            style={tw`w-[${getPx(width)}] h-[${getPx(width * ratio)}]`}
            source={getHeroImage(hero.slug)}
          />

          <View style={tw`rounded-9 absolute m-2 bg-gray1`}>
            <Image
              style={tw`h-5 w-5`}
              source={getAttributeImage(hero.attribute)}
            />
          </View>

          <Text style={tw`mx-2 my-1`} weight="semibold">
            {hero.name}
          </Text>
        </ImageBackground>
      </Pressable>
    </Link>
  )
}
