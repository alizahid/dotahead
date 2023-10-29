import { Image } from 'expo-image'
import { chunk, upperFirst } from 'lodash'
import { type StyleProp, View, type ViewStyle } from 'react-native'

import { type useHero } from '~/hooks/hero'
import { getAttributeImage } from '~/lib/image'
import { tw } from '~/styles/tailwind'

import { Icon } from '../common/icon'
import { Text } from '../common/text'

type Props = {
  hero: NonNullable<ReturnType<typeof useHero>['hero']>
  style?: StyleProp<ViewStyle>
}

export function HeroAttributes({ hero, style }: Props) {
  const attributes = {
    attributes: ['strength', 'agility', 'intelligence'],
    pool: [
      {
        color: '#7af03c',
        key: 'health',
      },
      {
        color: '#73f5fe',
        key: 'mana',
      },
    ],
  } as const

  const stats = [
    {
      items: [
        {
          icon: 'sword',
          value: hero.attributes.attack.damage.join(' - '),
        },
        {
          icon: 'clock',
          value: hero.attributes.attack.rate,
        },
        {
          icon: 'range',
          value: hero.attributes.attack.range,
        },
        {
          icon: 'arrow',
          value: hero.attributes.attack.speed,
        },
      ],
      title: 'Attack',
    },
    {
      items: [
        {
          icon: 'shield',
          value: hero.attributes.defense.armor.toFixed(1),
        },
        {
          icon: 'magic',
          value: `${hero.attributes.defense.magic}%`,
        },
      ],
      title: 'Defense',
    },
    {
      items: [
        {
          icon: 'shoe',
          value: hero.attributes.mobility.speed,
        },
        {
          icon: 'reload',
          value: hero.attributes.mobility.turn,
        },
        {
          icon: 'vision',
          value: hero.attributes.mobility.vision.join(' / '),
        },
      ],
      title: 'Mobility',
    },
  ] as const

  return (
    <View style={[tw`gap-6 p-4`, style]}>
      <View style={tw`gap-4`}>
        <Text variant="display" weight="bold" size={6}>
          Attributes
        </Text>

        <View style={tw`flex-row gap-4`}>
          {attributes.pool.map((attribute) => (
            <View
              key={attribute.key}
              style={tw`flex-1 flex-row items-center justify-between rounded-2 bg-[${attribute.color}] px-2`}
            >
              <Text weight="semibold" color="gray1">
                {hero.attributes[attribute.key].base}
              </Text>

              <Text size={2} color="gray1">
                +{hero.attributes[attribute.key].gain}
              </Text>
            </View>
          ))}
        </View>

        <View style={tw`flex-row justify-between`}>
          {attributes.attributes.map((attribute) => (
            <View key={attribute} style={tw`flex-row items-center gap-2`}>
              <Image
                style={tw`h-5 w-5`}
                source={getAttributeImage(attribute)}
              />

              <Text weight="semibold">{hero.attributes[attribute].base}</Text>

              <Text size={2}>+{hero.attributes[attribute].gain}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={tw`gap-4`}>
        <Text variant="display" weight="bold" size={4}>
          Roles
        </Text>

        {chunk(hero.roles, 3).map((roles, index) => (
          <View key={index} style={tw`flex-row gap-4`}>
            {roles.map(([label, value]) => (
              <View style={tw`flex-1 gap-1`} key={label}>
                <Text size={2} weight="semibold">
                  {upperFirst(label)}
                </Text>

                <View style={tw`overflow-hidden rounded-1 bg-gray9`}>
                  <View
                    style={tw.style(
                      'h-2 bg-gray12',
                      value === 0 && 'w-0',
                      value === 1 && 'w-1/3',
                      value === 2 && 'w-2/3',
                      value === 3 && 'w-full',
                    )}
                  />
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>

      {stats.map((section) => (
        <View key={section.title} style={tw`gap-2`}>
          <Text variant="display" weight="bold" size={4}>
            {section.title}
          </Text>

          <View style={tw`flex-row gap-4`}>
            {section.items.map((item) => (
              <View key={item.icon} style={tw`flex-row items-center gap-2`}>
                <Icon name={item.icon} />

                <Text>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}
