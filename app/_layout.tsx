import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";

export default function RootLayout() {
  const doesUserExist = AsyncStorage.getItem("user");

  return (
      <Stack initialRouteName={doesUserExist == null ? "loginpage" : "(tabs)"}>
        <Stack.Screen name ="index" 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name ="loginpage" 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name ="(tabs)" 
        options={{
          headerShown: false,
        }}/>
      </Stack>
  );
}
