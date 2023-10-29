import { Page } from '~/components/common/page'
import { Text } from '~/components/common/text'
import { tw } from '~/styles/tailwind'

export default function Screen() {
  return (
    <Page style={tw`p-4`}>
      <Text>Items</Text>
    </Page>
  )
}
