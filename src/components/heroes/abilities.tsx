import { Video } from 'expo-av'
import { Image } from 'expo-image'
import { useState } from 'react'
import { type StyleProp, View, type ViewStyle } from 'react-native'

import { type useHero } from '~/hooks/hero'
import {
  getAbilityImage,
  getAbilityUpgradeImage,
  getAbilityVideo,
  getItemImage,
} from '~/lib/image'
import { getPx, tw } from '~/styles/tailwind'

import { Text } from '../common/text'

const ratio = 756 / 1344

type Props = {
  hero: NonNullable<ReturnType<typeof useHero>['hero']>
  style?: StyleProp<ViewStyle>
}

export function HeroAbilities({ hero, style }: Props) {
  const [width, setWidth] = useState(0)

  return (
    <View style={[tw`gap-4 p-4`, style]}>
      <Text variant="display" weight="bold" size={6}>
        Abilities
      </Text>

      <View
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        style={tw`gap-6`}
      >
        {hero.abilities.map((ability) => (
          <View key={ability.id} style={tw`gap-4`}>
            <View style={tw`flex-row gap-4`}>
              <View style={tw`h-9 w-9 overflow-hidden rounded-4`}>
                <Image
                  style={tw`flex-1`}
                  source={getAbilityImage(ability.slug)}
                />

                {ability.upgrade === 'scepter' ? (
                  <Image
                    style={tw`absolute h-full w-full`}
                    source={getAbilityUpgradeImage('scepter')}
                  />
                ) : null}

                {ability.upgrade === 'shard' ? (
                  <Image
                    style={tw`absolute h-full w-full`}
                    source={getAbilityUpgradeImage('shard')}
                  />
                ) : null}
              </View>

              <View style={tw`flex-1 gap-4`}>
                <View style={tw`gap-1`}>
                  <Text size={4} weight="bold">
                    {ability.name}
                  </Text>

                  <Text size={2} color="gray11">
                    {ability.description}
                  </Text>
                </View>

                {ability.lore ? (
                  <Text style={tw`-mt-2`} size={2}>
                    {ability.lore}
                  </Text>
                ) : null}

                {ability.scepter ? (
                  <View style={tw`flex-row gap-2`}>
                    <Image
                      style={tw`h-6 w-6 rounded-2`}
                      source={getItemImage('item_ultimate_scepter')}
                    />

                    <Text style={tw`flex-1`} size={2}>
                      {ability.scepter}
                    </Text>
                  </View>
                ) : null}

                {ability.shard ? (
                  <View style={tw`flex-row gap-2`}>
                    <Image
                      style={tw`h-6 w-6 rounded-2`}
                      source={getItemImage('item_aghanims_shard')}
                    />

                    <Text style={tw`flex-1`} size={2}>
                      {ability.shard}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>

            <Video
              isMuted
              style={tw`rounded-4 bg-gray1 w-[${getPx(width)}] h-[${getPx(
                width * ratio,
              )}]`}
              shouldPlay
              isLooping
              source={{
                uri: getAbilityVideo(
                  hero.slug,
                  ability.source === 'scepter'
                    ? `${hero.slug}_aghanims_scepter`
                    : ability.source === 'shard'
                    ? `${hero.slug}_aghanims_shard`
                    : ability.slug,
                ),
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
