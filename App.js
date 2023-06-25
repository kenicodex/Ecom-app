import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home';
import Signup from './Screens/AuthScreens/Signup';
import { StyleSheet } from 'react-native';
import Login from './Screens/AuthScreens/Login';
import ForgotPassword from './Screens/AuthScreens/ForgotPassword';
import VisualSearch from './Screens/VisualSearch';
import MainPage from './Screens/Main';
import Shop from './Screens/Shop';

import { navigationRef } from './RootNavigate';

// export function navigate(name, params) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      {/* <StatusBar style='dark' ÷ /> */}
      <NavigationContainer ref={navigationRef} >

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Welcome" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="VisualSearch" component={VisualSearch} />
          <Stack.Screen name="Home" component={MainPage} />
          <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>

      </NavigationContainer >
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    // marginTop: 50,
    backgroundColor: 'inherit'
  }
})
