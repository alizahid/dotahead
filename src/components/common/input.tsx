import { forwardRef, useState } from 'react'
import {
  type StyleProp,
  TextInput,
  type TextInputProps,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native'

import { getColor, tw } from '~/styles/tailwind'

import { Text } from './text'

type Props = Pick<
  TextInputProps,
  | 'autoCapitalize'
  | 'autoComplete'
  | 'autoCorrect'
  | 'autoFocus'
  | 'editable'
  | 'keyboardType'
  | 'multiline'
  | 'onBlur'
  | 'onFocus'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'value'
> & {
  error?: string
  hint?: string
  label?: string
  onChange?: (value: string) => void
  style?: StyleProp<ViewStyle>
  styleInput?: StyleProp<TextStyle>
}

export const Input = forwardRef<TextInput, Props>(
  (
    {
      autoCapitalize,
      autoComplete,
      autoCorrect,
      autoFocus,
      editable = true,
      error,
      hint,
      keyboardType,
      label,
      multiline,
      onBlur,
      onChange,
      onFocus,
      onSubmitEditing,
      placeholder,
      returnKeyType,
      secureTextEntry,
      style,
      styleInput,
      value,
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)

    return (
      <View style={[tw`gap-1`, style]}>
        {label ? (
          <Text color="gray11" size={2} weight="semibold">
            {label}
          </Text>
        ) : null}

        <TextInput
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          editable={editable}
          keyboardType={keyboardType}
          multiline={multiline}
          onBlur={(event) => {
            setFocused(false)

            onBlur?.(event)
          }}
          onChangeText={onChange}
          onFocus={(event) => {
            setFocused(true)

            onFocus?.(event)
          }}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={getColor('gray9')}
          ref={ref}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          selectionColor={getColor('cyan9')}
          style={[
            tw.style(
              'rounded-4 border border-gray7 bg-gray2/80 px-3 font-body-regular text-3 leading-tight text-gray12',
              multiline ? 'h-[6rem] py-3' : 'pt-0.5 h-7 pb-0',
              error && 'border-red-7',
              focused && (error ? 'border-red8' : 'border-cyan8'),
            ),
            styleInput,
          ]}
          textAlignVertical={multiline ? 'top' : 'center'}
          value={value}
        />

        {hint ? (
          <Text color="gray11" size={2}>
            {hint}
          </Text>
        ) : null}

        {error ? (
          <Text color="red11" size={2}>
            {error}
          </Text>
        ) : null}
      </View>
    )
  },
)
