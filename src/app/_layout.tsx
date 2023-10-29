import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { QueryProvider } from '~/components/query'

export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loaded, error] = useFonts({
    'radiance-bold': require('../assets/fonts/radiance-bold.ttf'),
    'radiance-regular': require('../assets/fonts/radiance-regular.ttf'),
    'radiance-semibold': require('../assets/fonts/radiance-semibold.ttf'),
    'reaver-bold': require('../assets/fonts/reaver-bold.ttf'),
    'reaver-regular': require('../assets/fonts/reaver-regular.ttf'),
    'reaver-semibold': require('../assets/fonts/reaver-semibold.ttf'),
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
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryProvider>
  )
}
