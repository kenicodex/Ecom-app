import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home';
import Signup from './Screens/AuthScreens/Signup';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Login from './Screens/AuthScreens/Login';
import ForgotPassword from './Screens/AuthScreens/ForgotPassword';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <View style={styles.header}></View>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    backgroundColor:'inherit'
  }
})
