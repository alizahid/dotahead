import {
  Pressable as RNPressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

type Props = Pick<
  PressableProps,
  | 'children'
  | 'disabled'
  | 'hitSlop'
  | 'onLayout'
  | 'onLongPress'
  | 'onPress'
  | 'onPressIn'
  | 'onPressOut'
> & {
  style?: StyleProp<ViewStyle>
}

const PressableAnimated = Animated.createAnimatedComponent(RNPressable)

export function Pressable({
  children,
  disabled,
  hitSlop,
  onLongPress,
  onLayout,
  onPress,
  onPressIn,
  onPressOut,
  style,
}: Props) {
  const opacity = useSharedValue(1)

  const fadeIn = () => {
    opacity.value = withTiming(0.5, {
      duration: 100,
    })
  }

  const fadeOut = () => {
    opacity.value = withTiming(1, {
      duration: 100,
    })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <PressableAnimated
      disabled={disabled}
      hitSlop={hitSlop}
      onLongPress={onLongPress}
      onLayout={onLayout}
      onPress={onPress}
      onPressIn={(event) => {
        onPressIn?.(event)

        fadeIn()
      }}
      onPressOut={(event) => {
        onPressOut?.(event)

        fadeOut()
      }}
      style={[style, animatedStyle]}
    >
      {children}
    </PressableAnimated>
  )
}
