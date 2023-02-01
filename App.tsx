import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>    
    </>

    
  )
}