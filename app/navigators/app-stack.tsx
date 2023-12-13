import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, QrScreen, SuccessScreen} from '@screens';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home-screen" component={HomeScreen} />
        <Stack.Screen name="qr-screen" component={QrScreen} />
        <Stack.Screen name="success-screen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
