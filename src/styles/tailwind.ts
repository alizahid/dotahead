import type radix from '@radix-ui/colors'
import { sum } from 'lodash'
import { create } from 'twrnc'

export type TailwindColor =
  | keyof typeof radix.cyanDark
  | keyof typeof radix.grayDark
  | keyof typeof radix.tomatoDark
  | keyof typeof radix.redDark
  | keyof typeof radix.greenDark

export type TailwindSpace = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export const tw = create(require('../../tailwind.config'))

export function getColor(name: TailwindColor) {
  return tw.color(name) ?? 'magenta'
}

export const getSpace = (name: TailwindSpace) => {
  const { marginTop } = tw.style(`mt-${name}`)

  return Number(marginTop) ?? 0
}

export const getSpacePx = (name: TailwindSpace, plus = 0) => {
  const { marginTop } = tw.style(`mt-${name}`)

  return `${(Number(marginTop) ?? 0) + plus}px`
}

export const getPx = (...numbers: Array<number>) => {
  return `${sum(numbers)}px`
}
