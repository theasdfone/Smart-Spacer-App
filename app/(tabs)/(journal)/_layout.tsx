import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name ="journal" 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name ="journalsurvey" 
        options={{
          headerShown: false,
        }}/>
      </Stack>
  );
}
