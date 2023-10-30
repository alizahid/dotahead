import { Image, ImageBackground } from 'expo-image'
import { range } from 'lodash'
import { useEffect, useState } from 'react'
import { type StyleProp, View, type ViewStyle } from 'react-native'

import background from '~/assets/images/card-background.jpg'
import {
  FilterAttributes,
  FilterComplexities,
  useFilters,
} from '~/hooks/filters'
import { getFilterImage } from '~/lib/image'
import { tw } from '~/styles/tailwind'

import { Button } from '../common/button'
import { Input } from '../common/input'
import { Pressable } from '../common/pressable'
import { Text } from '../common/text'

type Props = {
  style?: StyleProp<ViewStyle>
}

export function HeroFilters({ style }: Props) {
  const { clear, filters, update } = useFilters()

  const [name, setName] = useState(filters?.name ?? '')

  useEffect(() => {
    update({
      name: name.length > 0 ? name : undefined,
    })
  }, [name, update])

  return (
    <ImageBackground style={[tw`gap-4 p-4`, style]} source={background}>
      <View style={tw`gap-4`}>
        <Input
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={setName}
          placeholder="Hero name"
        />

        <View style={tw`flex-row items-center`}>
          <Text style={tw`mr-4`} weight="semibold">
            Attribute
          </Text>

          {FilterAttributes.map((item) => (
            <Pressable
              key={item}
              onPress={() =>
                update({
                  attribute: filters?.attribute === item ? undefined : item,
                })
              }
            >
              <Image
                style={{
                  height: 34,
                  opacity: item === filters?.attribute ? 1 : 0.5,
                  width: 44,
                }}
                source={getFilterImage(item)}
              />
            </Pressable>
          ))}
        </View>

        <View style={tw`flex-row items-center`}>
          <Text style={tw`mr-4`} weight="semibold">
            Complexity
          </Text>

          {range(3).map((index) => {
            const selected = FilterComplexities.findIndex(
              (item) => item === filters?.complexity,
            )

            const next = FilterComplexities.at(index)
            const complexity = next === filters?.complexity ? undefined : next

            return (
              <Pressable
                key={index}
                onPress={() =>
                  update({
                    complexity,
                  })
                }
              >
                <Image
                  style={{
                    height: 34,
                    opacity: selected >= index ? 1 : 0.5,
                    width: 44,
                  }}
                  source={getFilterImage('complexity')}
                />
              </Pressable>
            )
          })}
        </View>
      </View>

      <View style={tw`flex-row gap-4`}>
        <Button onPress={() => clear()} style={tw`ml-auto`} variant="accent">
          Clear
        </Button>
      </View>
    </ImageBackground>
  )
}
