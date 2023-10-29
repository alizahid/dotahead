import { FlashList } from '@shopify/flash-list'

import { Loading } from '~/components/common/loading'
import { Page } from '~/components/common/page'
import { RefreshControl } from '~/components/common/refresh-control'
import { Spinner } from '~/components/common/spinner'
import { HeroCard } from '~/components/heroes/card'
import { useHeroes } from '~/hooks/heroes'
import { tw } from '~/styles/tailwind'

export default function Screen() {
  const { heroes, loading, refetch } = useHeroes()

  if (loading) {
    return <Loading />
  }

  return (
    <Page>
      <FlashList
        numColumns={2}
        ListEmptyComponent={<Spinner />}
        data={heroes}
        refreshControl={<RefreshControl onRefresh={refetch} />}
        contentContainerStyle={tw`py-2`}
        indicatorStyle="white"
        estimatedItemSize={140}
        renderItem={({ item, index }) => (
          <HeroCard
            style={tw.style(
              'my-2',
              index % 2 === 0 ? 'ml-4 mr-2' : 'ml-2 mr-4'
            )}
            hero={item}
          />
        )}
      />
    </Page>
  )
}
