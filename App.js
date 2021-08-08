import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StarMapScreen from './screens/StarMap';
import DSPScreen from './screens/DailySpacePic';
import ContactScreen from './screens/ContactMe';
import SpaceCraft from './screens/SpaceCraft';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown:false
    }}>
      
      <Stack.Screen name ="Home" component={HomeScreen}/>
      <Stack.Screen name = "DSP" component = {DSPScreen}/>
      <Stack.Screen name = "StarMap" component = {StarMapScreen}/>
      <Stack.Screen name = "Contact" component = {ContactScreen}/>
      <Stack.Screen name ="SCScreen" component={SpaceCraft}/>

    </Stack.Navigator> 
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    fontSize: 20,
    color: 'white'
  }
});

export default App