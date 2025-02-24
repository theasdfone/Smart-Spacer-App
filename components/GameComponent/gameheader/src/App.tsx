import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ClosetScreen from './src/screens/ClosetScreen';
import JournalScreen from './src/screens/JournalScreen';
import FoodScreen from './src/screens/FoodScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Closet" component={ClosetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Journal" component={JournalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Food" component={FoodScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;