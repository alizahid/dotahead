import { type Theme } from '@react-navigation/native'

import { getColor } from './tailwind'

export const theme: Theme = {
  colors: {
    background: getColor('gray1'),
    border: getColor('gray6'),
    card: getColor('gray3'),
    notification: getColor('tomato9'),
    primary: getColor('tomato9'),
    text: getColor('gray12'),
  },
  dark: true,
}
