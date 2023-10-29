import { Image, ImageBackground } from 'expo-image'
import { useState } from 'react'
import { type StyleProp, View, type ViewStyle } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { type useHero } from '~/hooks/hero'
import {
  getAttackTypeImage,
  getAttributeImage,
  getHeroRender,
} from '~/lib/image'
import { getPx, tw } from '~/styles/tailwind'

import { Button } from '../common/button'
import { Text } from '../common/text'

type Props = {
  hero: NonNullable<ReturnType<typeof useHero>['hero']>
  style?: StyleProp<ViewStyle>
}

export function HeroDetails({ hero, style }: Props) {
  const frame = useSafeAreaFrame()

  const [visible, setVisible] = useState(false)

  return (
    <View style={style}>
      <ImageBackground
        style={tw`h-[${getPx(frame.width)}] w-[${getPx(frame.width)}]`}
        source={getHeroRender(hero.slug)}
      >
        <View style={tw`flex-1 justify-between p-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Image
              style={tw`h-6 w-6`}
              source={getAttributeImage(hero.attribute)}
            />

            <Image
              style={tw`h-4 w-4`}
              source={getAttackTypeImage(hero.attributes.attack.type)}
            />
          </View>

          <View style={tw`gap-1`}>
            <Text size={8} variant="display" weight="bold">
              {hero.name}
            </Text>

            <Text weight="semibold" color="cyan11">
              {hero.description}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={tw`mx-4 mb-4 gap-4`}>
        <Text weight="semibold">{hero.hype}</Text>

        <Button onPress={() => setVisible((visible) => !visible)}>
          {visible ? 'Hide' : 'Show'} history
        </Button>

        {visible ? <Text>{hero.bio}</Text> : null}
      </View>
    </View>
  )
}
