import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Loading } from '~/components/common/loading'
import { Page } from '~/components/common/page'
import { RefreshControl } from '~/components/common/refresh-control'
import { HeroAbilities } from '~/components/heroes/abilities'
import { HeroAttributes } from '~/components/heroes/attributes'
import { HeroDetails } from '~/components/heroes/details'
import { HeroTalents } from '~/components/heroes/talents'
import { useHero } from '~/hooks/hero'
import { getSpacePx, tw } from '~/styles/tailwind'

type Params = {
  id: string
}

export default function Screen() {
  const insets = useSafeAreaInsets()

  const params = useLocalSearchParams<Params>()
  const navigation = useNavigation()

  const { hero, loading, refetch } = useHero(params.id)

  useEffect(() => {
    if (!hero) {
      return
    }

    navigation.setOptions({
      title: hero.name,
    })
  }, [hero, navigation])

  if (loading) {
    return <Loading />
  }

  if (!hero) {
    return <Redirect href="/" />
  }

  return (
    <Page
      scroll={{
        refreshControl: <RefreshControl onRefresh={refetch} />,
      }}
    >
      <HeroDetails hero={hero} />

      <HeroAttributes hero={hero} style={tw`mt-6`} />

      <HeroAbilities hero={hero} style={tw`mt-6`} />

      <HeroTalents
        hero={hero}
        style={tw`mt-6 mb-[${getSpacePx(6, insets.bottom)}]`}
      />
    </Page>
  )
}
