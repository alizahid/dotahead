import { FlashList } from '@shopify/flash-list'
import { useFocusEffect, useNavigation } from 'expo-router'
import { useState } from 'react'

import { Page } from '~/components/common/page'
import { RefreshControl } from '~/components/common/refresh-control'
import { Spinner } from '~/components/common/spinner'
import { Text } from '~/components/common/text'
import { HeroCard } from '~/components/heroes/card'
import { HeroFilters } from '~/components/heroes/filters'
import { HeaderButton } from '~/components/navigation/button'
import { useHeroes } from '~/hooks/heroes'
import { tw } from '~/styles/tailwind'

export default function Screen() {
  const navigation = useNavigation()

  const { heroes, loading, refetch } = useHeroes()

  const [visible, setVisible] = useState(false)

  useFocusEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          icon="filter"
          onPress={() => setVisible((visible) => !visible)}
        />
      ),
    })
  })

  return (
    <Page>
      {visible ? <HeroFilters /> : null}

      <FlashList
        numColumns={2}
        ListEmptyComponent={
          loading ? (
            <Spinner style={tw`m-4`} />
          ) : (
            <Text style={tw`m-4`}>No heroes match your filters</Text>
          )
        }
        data={heroes}
        refreshControl={<RefreshControl onRefresh={refetch} />}
        contentContainerStyle={tw`py-2`}
        indicatorStyle="white"
        estimatedItemSize={140}
        renderItem={({ index, item }) => (
          <HeroCard
            style={tw.style(
              'my-2',
              index % 2 === 0 ? 'ml-4 mr-2' : 'ml-2 mr-4',
            )}
            hero={item}
          />
        )}
      />
    </Page>
  )
}
