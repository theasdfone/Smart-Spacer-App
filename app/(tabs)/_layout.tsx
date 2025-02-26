import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
      <Tabs 
      screenOptions={{
        tabBarStyle: {
          height: 70 + insets.bottom,
        }
      }}>
        <Tabs.Screen name ="index" options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}/>
        <Tabs.Screen name="journal" 
        options={{
          title: 'Journal',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />
        }}/>
        <Tabs.Screen name="graphs" 
        options={{
          title: 'Graphs',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} />
        }}/>
        <Tabs.Screen name="resources" 
        options={{
          title: 'Resources',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color}/>
        }}/>
      </Tabs>
  );
}
