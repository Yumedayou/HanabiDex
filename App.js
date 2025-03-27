/*import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TailwindProvider } from 'nativewind';
import HomeScreen from './screens/HomeScreen'; // or wherever your mockup UI lives

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-white">
        <HomeScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
*/
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center bg-white">
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

//<Text className="text-2xl text-purple-500 font-bold">Hello Tailwind!</Text>