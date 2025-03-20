import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
      <Tabs 
      screenOptions={{
        tabBarStyle: {
          height: 70 + insets.bottom,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#119DA4"
      }}>
        <Tabs.Screen name ="index" options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="home" color={focused ? "#119DA4" : color} />
        }}/>
        <Tabs.Screen name="(journal)" 
        options={{
          title: 'Journal',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="edit" color={focused ? "#119DA4" : color} />
        }}/>
        <Tabs.Screen name="graphs" 
        options={{
          title: 'Graphs',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="line-chart" color={focused ? "#119DA4" : color} />
        }}/>
        <Tabs.Screen name="resources" 
        options={{
          title: 'Resources',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="book" color={focused ? "#119DA4" : color}/>
        }}/>
        <Tabs.Screen name="account" 
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="user" color={focused ? "#119DA4" : color}/>
        }}/>
      </Tabs>
  );
}
