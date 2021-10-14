import React from 'react';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import { Details } from './src/screens/Details';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';

type StackNavigationProps = {
  Home: String;
  Details: String;
};

const Stack = createNativeStackNavigator<StackNavigationProps>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            animation: 'slide_from_left',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
