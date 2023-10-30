import { Page } from '~/components/common/page'
import { Text } from '~/components/common/text'
import { tw } from '~/styles/tailwind'

export default function Screen() {
  return (
    <Page style={tw`items-center justify-center p-4`}>
      <Text>Coming soon!</Text>
    </Page>
  )
}
