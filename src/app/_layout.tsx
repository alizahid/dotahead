import { ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'

import { Header } from '~/components/navigation/header'
import { QueryProvider } from '~/components/providers/query'
import { theme } from '~/styles/theme'

export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loaded, error] = useFonts({
    'radiance-bold': require('../assets/fonts/radiance-bold.otf'),
    'radiance-regular': require('../assets/fonts/radiance-regular.otf'),
    'radiance-semibold': require('../assets/fonts/radiance-semibold.otf'),
    'reaver-bold': require('../assets/fonts/reaver-bold.otf'),
    'reaver-regular': require('../assets/fonts/reaver-regular.otf'),
    'reaver-semibold': require('../assets/fonts/reaver-semibold.otf'),
  })

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <Navigation />
}

function Navigation() {
  return (
    <QueryProvider>
      <StatusBar style="light" />

      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            header: (props) => <Header {...props} />,
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="heroes/[id]"
            options={{
              title: 'Loading',
            }}
          />
        </Stack>
      </ThemeProvider>
    </QueryProvider>
  )
}
