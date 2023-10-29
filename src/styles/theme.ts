import { Theme } from '@react-navigation/native'
import { getColor } from './tailwind'

export const theme: Theme = {
  dark: true,
  colors: {
    background: getColor('gray1'),
    card: getColor('gray3'),
    text: getColor('gray12'),
    border: getColor('gray6'),
    primary: getColor('tomato9'),
    notification: getColor('tomato9'),
  },
}
