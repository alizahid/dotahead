import { Tabs } from 'expo-router'
import { Header } from '~/components/navigation/stack-header'
import { TabBar } from '~/components/navigation/tab-bar'

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Heroes',
        }}
      />

      <Tabs.Screen
        name="items"
        options={{
          title: 'Items',
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
        }}
      />
    </Tabs>
  )
}
