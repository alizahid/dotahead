import {
  ActivityIndicator,
  type ActivityIndicatorProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

import { getColor } from '~/styles/tailwind'

type Props = {
  size?: ActivityIndicatorProps['size']
  style?: StyleProp<ViewStyle>
}

export function Spinner({ size = 'large', style }: Props) {
  return (
    <ActivityIndicator color={getColor('tomato9')} style={style} size={size} />
  )
}
