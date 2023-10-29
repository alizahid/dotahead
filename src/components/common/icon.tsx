import { type StyleProp, type ViewStyle } from 'react-native'
import { Path, Svg } from 'react-native-svg'

import {
  getColor,
  getSpace,
  type TailwindColor,
  type TailwindSpace,
} from '~/styles/tailwind'

export type IconName = keyof typeof icons

type Props = {
  color?: TailwindColor
  name: IconName
  size?: TailwindSpace
  style?: StyleProp<ViewStyle>
}

export function Icon({ color = 'gray12', name, size = 4, style }: Props) {
  const height = getSpace(size)

  return (
    <Svg
      width={height}
      height={height}
      viewBox="0 0 48 48"
      style={style}
      fill={getColor(color)}
    >
      {icons[name]}
    </Svg>
  )
}

const icons = {
  arrow: (
    <Path d="M 45.699219 0.8125 C 45.569734 0.81140625 45.439297 0.825875 45.310547 0.859375 L 35.740234 3.3417969 C 35.219234 3.4767969 34.810922 3.8813906 34.669922 4.4003906 C 34.527922 4.9203906 34.675641 5.4754688 35.056641 5.8554688 L 37.539062 8.3398438 L 14.841797 31.037109 L 10.136719 28.685547 C 9.5617188 28.398547 8.8622969 28.509797 8.4042969 28.966797 L 1.3144531 36.056641 C 0.97345313 36.397641 0.81753125 36.881422 0.89453125 37.357422 C 0.97153125 37.833422 1.2730781 38.242984 1.7050781 38.458984 L 5.515625 40.363281 L 4.859375 41.019531 A 1.50015 1.50015 0 1 0 6.9804688 43.140625 L 7.6367188 42.484375 L 9.5429688 46.296875 C 9.7589687 46.728875 10.168531 47.027469 10.644531 47.105469 C 10.724531 47.118469 10.804766 47.126953 10.884766 47.126953 C 11.279766 47.126953 11.661312 46.9705 11.945312 46.6875 L 19.035156 39.597656 C 19.492156 39.141656 19.605406 38.442234 19.316406 37.865234 L 16.962891 33.158203 L 39.660156 10.460938 L 42.146484 12.945312 C 42.431484 13.230313 42.814031 13.384766 43.207031 13.384766 C 43.339031 13.384766 43.470562 13.365078 43.601562 13.330078 C 44.120562 13.188078 44.525156 12.780766 44.660156 12.259766 L 47.140625 2.6894531 C 47.271625 2.1754531 47.124047 1.6279531 46.748047 1.2519531 C 46.466047 0.96995312 46.087672 0.81578125 45.699219 0.8125 z" />
  ),
  clock: (
    <Path d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M31.5,27h-8c-0.8,0-1.5-0.7-1.5-1.5v-12c0-0.8,0.7-1.5,1.5-1.5	s1.5,0.7,1.5,1.5V24h6.5c0.8,0,1.5,0.7,1.5,1.5S32.3,27,31.5,27z" />
  ),
  left: (
    <Path d="M20.586,39.414C20.977,39.805,21.488,40,22,40s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L12.828,26H40 c1.104,0,2-0.896,2-2s-0.896-2-2-2H12.828l10.586-10.586c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0l-14,14 c-0.781,0.781-0.781,2.047,0,2.828L20.586,39.414z" />
  ),
  magic: (
    <Path d="M 9.4765625 4.9785156 A 1.50015 1.50015 0 0 0 8 6.5 L 8 8 L 6.5 8 A 1.50015 1.50015 0 1 0 6.5 11 L 8 11 L 8 12.5 A 1.50015 1.50015 0 1 0 11 12.5 L 11 11 L 12.5 11 A 1.50015 1.50015 0 1 0 12.5 8 L 11 8 L 11 6.5 A 1.50015 1.50015 0 0 0 9.4765625 4.9785156 z M 33.476562 8.9785156 A 1.50015 1.50015 0 0 0 32 10.5 L 32 12 L 30.5 12 A 1.50015 1.50015 0 1 0 30.5 15 L 32 15 L 32 16.5 A 1.50015 1.50015 0 1 0 35 16.5 L 35 15 L 36.5 15 A 1.50015 1.50015 0 1 0 36.5 12 L 35 12 L 35 10.5 A 1.50015 1.50015 0 0 0 33.476562 8.9785156 z M 17.060547 15.060547 C 16.290547 15.060547 15.519453 15.359453 14.939453 15.939453 C 13.769453 17.109453 13.769453 19.009453 14.939453 20.189453 L 17.859375 23.109375 L 22.050781 18.810547 L 19.189453 15.939453 C 18.599453 15.359453 17.830547 15.060547 17.060547 15.060547 z M 24.179688 20.929688 L 19.990234 25.230469 L 37.810547 43.050781 C 38.400547 43.640781 39.159688 43.929688 39.929688 43.929688 C 40.699688 43.929687 41.460781 43.640781 42.050781 43.050781 C 43.220781 41.880781 43.220781 39.980547 42.050781 38.810547 L 24.179688 20.929688 z M 13.476562 29.978516 A 1.50015 1.50015 0 0 0 12 31.5 L 12 33 L 10.5 33 A 1.50015 1.50015 0 1 0 10.5 36 L 12 36 L 12 37.5 A 1.50015 1.50015 0 1 0 15 37.5 L 15 36 L 16.5 36 A 1.50015 1.50015 0 1 0 16.5 33 L 15 33 L 15 31.5 A 1.50015 1.50015 0 0 0 13.476562 29.978516 z" />
  ),
  range: (
    <Path d="M 39.960938 5.9804688 A 2.0002 2.0002 0 0 0 39.740234 6 L 30 6 A 2.0002 2.0002 0 1 0 30 10 L 35.171875 10 L 10 35.171875 L 10 30 A 2.0002 2.0002 0 1 0 6 30 L 6 39.753906 A 2.0002 2.0002 0 0 0 8.2597656 42 L 18 42 A 2.0002 2.0002 0 1 0 18 38 L 12.828125 38 L 38 12.828125 L 38 18 A 2.0002 2.0002 0 1 0 42 18 L 42 8.2460938 A 2.0002 2.0002 0 0 0 39.960938 5.9804688 z" />
  ),
  reload: (
    <Path d="M 23.5 6 C 17.814884 6 12.731287 8.6575283 9.4375 12.785156 A 2.0002 2.0002 0 1 0 12.5625 15.279297 C 15.130713 12.060925 19.057116 10 23.5 10 C 30.581147 10 36.38613 15.209527 37.345703 22.017578 L 36.414062 21.085938 A 2.0002 2.0002 0 0 0 34.978516 20.480469 A 2.0002 2.0002 0 0 0 33.585938 23.914062 L 38.085938 28.414062 A 2.0002 2.0002 0 0 0 40.914062 28.414062 L 45.414062 23.914062 A 2.0002 2.0002 0 1 0 42.585938 21.085938 L 41.412109 22.259766 C 40.531872 13.154752 32.830228 6 23.5 6 z M 8.4707031 19 A 2.0002 2.0002 0 0 0 7.0859375 19.585938 L 2.5859375 24.085938 A 2.0002 2.0002 0 1 0 5.4140625 26.914062 L 6.5917969 25.736328 C 7.4981543 34.814649 15.188913 41.939453 24.5 41.939453 C 30.168529 41.939453 35.241107 39.298011 38.535156 35.191406 A 2.0002 2.0002 0 1 0 35.414062 32.689453 C 32.846112 35.890849 28.929471 37.939453 24.5 37.939453 C 17.444049 37.939453 11.656598 32.766548 10.666016 25.994141 L 11.585938 26.914062 A 2.0002 2.0002 0 1 0 14.414062 24.085938 L 9.9140625 19.585938 A 2.0002 2.0002 0 0 0 8.4707031 19 z" />
  ),
  shield: (
    <Path d="M38.823,10.943c-5.123-0.534-9.622-3.342-11.847-4.968c-1.779-1.301-4.172-1.301-5.951,0 c-2.226,1.626-6.724,4.434-11.847,4.968c-1.857,0.193-3.25,1.798-3.171,3.652c0.818,19.139,12.832,26.314,16.495,28.058 c0.476,0.227,0.988,0.34,1.499,0.34s1.023-0.114,1.499-0.34c3.663-1.744,15.677-8.919,16.495-28.058 C42.073,12.741,40.68,11.136,38.823,10.943z" />
  ),
  shoe: (
    <Path d="M34.5,20h-0.379l-5.561,5.561C28.268,25.854,27.884,26,27.5,26s-0.768-0.146-1.061-0.439c-0.586-0.586-0.586-1.535,0-2.121	l3.496-3.496c-0.799-0.131-1.502-0.531-2.023-1.107l-4.436,3.803C23.193,22.881,22.846,23,22.501,23	c-0.423,0-0.843-0.178-1.14-0.523c-0.539-0.629-0.467-1.576,0.162-2.115L27,15.667V12.5c0-1.93-1.57-3.5-3.5-3.5h-2	c-3.72,0-6.62,3.369-7.329,6.879l-6.222-0.541c-1.268-0.13-2.526,0.289-3.468,1.141C3.54,17.33,3,18.546,3,19.815V30.5	c0,0.013,0.003,0.024,0.004,0.037C3.003,30.55,3,30.562,3,30.574v2.815c0,3.327,2.542,5.486,6.478,5.5l29,0.093	c0.013,0,0.025,0,0.038,0c2.119,0,3.853-0.612,5.017-1.771C44.492,36.254,45,34.965,45,33.482V30.5C45,24.71,40.29,20,34.5,20z M6,19.815c0-0.43,0.175-0.824,0.493-1.112s0.734-0.417,1.176-0.379l6.018,0.523c-0.134,0.242-0.311,0.461-0.533,0.663	C11.462,21.045,7.706,21.145,6,21.035V19.815z M41.415,35.086C40.834,35.664,40.29,36,39,36c-0.009,0-30,0-30,0	c-1.591-0.006-3-0.555-3-2.61v-2.815c0-0.012-0.003-0.023-0.003-0.034c2.092,0.092,4.165,0.455,6.175,1.117	C16.893,33.212,21.574,34,26.087,34H41.5c0.159,0,0.311-0.026,0.465-0.047C41.894,34.415,41.713,34.789,41.415,35.086z" />
  ),
  sword: (
    <Path d="M 41.505859 4.0175781 C 41.291234 4.0149219 41.075125 4.04025 40.859375 4.09375 L 33.330078 5.9785156 C 32.386078 6.2135156 31.5595 6.7334219 30.9375 7.4824219 L 16.203125 25.253906 L 22.746094 31.796875 L 40.550781 17.064453 C 41.296781 16.447453 41.835406 15.589437 42.066406 14.648438 L 43.908203 7.1289062 C 44.119203 6.2669063 43.869234 5.3789531 43.240234 4.7519531 C 42.768484 4.2824531 42.149734 4.0255469 41.505859 4.0175781 z M 11.5 24 C 11.11625 24 10.732453 24.146453 10.439453 24.439453 C 9.8534531 25.024453 9.8534531 25.975547 10.439453 26.560547 L 13.310547 29.431641 L 8.4921875 34.544922 L 13.455078 39.507812 L 18.568359 34.689453 L 21.439453 37.560547 C 21.732453 37.853547 22.116 38 22.5 38 C 22.884 38 23.268547 37.853547 23.560547 37.560547 C 24.146547 36.975547 24.146547 36.024453 23.560547 35.439453 L 12.560547 24.439453 C 12.267547 24.146453 11.88375 24 11.5 24 z M 5.5 35 C 5.11625 35 4.7324531 35.146453 4.4394531 35.439453 C 3.8534531 36.024453 3.8534531 36.975547 4.4394531 37.560547 L 10.439453 43.560547 C 10.732453 43.853547 11.116 44 11.5 44 C 11.884 44 12.268547 43.853547 12.560547 43.560547 C 13.146547 42.975547 13.146547 42.024453 12.560547 41.439453 L 6.5605469 35.439453 C 6.2675469 35.146453 5.88375 35 5.5 35 z" />
  ),
  vision: (
    <Path d="M 23.986328 9 C 12.666705 9 2.6928719 16.845918 0.046875 27.126953 A 1.5002454 1.5002454 0 0 0 2.953125 27.873047 C 5.2331281 19.014082 14.065951 12 23.986328 12 C 33.906705 12 42.767507 19.01655 45.046875 27.873047 A 1.5002454 1.5002454 0 0 0 47.953125 27.126953 C 45.306493 16.84345 35.305951 9 23.986328 9 z M 24.001953 17 C 18.681885 17 14.337891 21.343999 14.337891 26.664062 C 14.337891 31.984127 18.681885 36.330078 24.001953 36.330078 C 29.322021 36.330078 33.667969 31.984126 33.667969 26.664062 C 33.667969 21.343999 29.322021 17 24.001953 17 z" />
  ),
}
