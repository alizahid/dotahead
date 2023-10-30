import { tw } from '~/styles/tailwind'

import { Icon, type IconName } from '../common/icon'
import { Pressable } from '../common/pressable'

type Props = {
  icon: IconName
  onPress?: () => void
}

export function HeaderButton({ icon, onPress }: Props) {
  return (
    <Pressable
      style={tw`h-7 w-7 items-center justify-center`}
      onPress={onPress}
    >
      <Icon name={icon} />
    </Pressable>
  )
}
