import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Typo } from './Texts';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { navigate } from '../RootNavigate';
// import { navigate } from '../RootNavigate';

// const navigationRef = createNavigationContainerRef()

const BOTTOM_APPBAR_HEIGHT = 80;

const App_Bar = ({ }) => {
  const { navigate, } = useNavigation()
  const { name } = useRoute()


  const { bottom } = useSafeAreaInsets();
  const theme = useTheme(); 9
  const routes = [
    { name: 'Home', link: '', icon: 'home' },
    { name: 'Shop', link: '', icon: 'cart' },
    { name: 'Bag', link: '', icon: 'home' },
    { name: 'Favorite', link: '', icon: 'heart' },
    { name: 'Profile', link: '', icon: 'profile' },
  ]

  return (
    <>
      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
            borderTopLeftRadius: 20, borderTopRightRadius: 20,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        {
          routes.map((item, i) => (
            <View style={{ display: 'flex', alignItems: 'center', height: 70 }} key={item.name}>
              <Appbar.Action size={30} icon={item.icon} onPress={() => navigate(item.name)} color={name === item.name ? '#DB3022' : 'white'} />
              <Typo>{item.name}</Typo>
            </View>)
          )
        }
      </Appbar>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default App_Bar;

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../Screens/Home';
// import Shop from '../Screens/Shop';

// const Tab = createBottomTabNavigator();

// export default function App_Bar() {
//   return (
//     <Tab.Navigator sceneContainerStyle={{position:'absolute', zIndex:'3'}}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Settings" component={Shop} />
//     </Tab.Navigator>
//   );
// }