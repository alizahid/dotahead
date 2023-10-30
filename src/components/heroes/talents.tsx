import { chunk } from 'lodash'
import { type StyleProp, View, type ViewStyle } from 'react-native'

import { type useHero } from '~/hooks/hero'
import { tw } from '~/styles/tailwind'

import { Text } from '../common/text'

type Props = {
  hero: NonNullable<ReturnType<typeof useHero>['hero']>
  style?: StyleProp<ViewStyle>
}

export function HeroTalents({ hero, style }: Props) {
  const labels = [25, 20, 15, 10]

  return (
    <View style={[tw`gap-4 p-4`, style]}>
      <Text variant="display" weight="bold" size={6}>
        Talents
      </Text>

      {chunk(hero.talents, 2).map(([left, right], index) => (
        <View style={tw`h-7 flex-row items-center gap-4`} key={index}>
          <Text lines={2} style={tw`flex-1`} size={2} align="right">
            {left.name}
          </Text>

          <View
            style={tw`h-6 w-6 items-center justify-center rounded-6 bg-gray1`}
          >
            <Text color="tomato11" leading="tight">
              {labels[index]}
            </Text>
          </View>

          <Text lines={2} style={tw`flex-1`} size={2}>
            {right.name}
          </Text>
        </View>
      ))}
    </View>
  )
}
