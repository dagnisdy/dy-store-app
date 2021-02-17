/***
 * React Native Store DY App
 ***/

import React from 'react';
import { Image, TouchableOpacity, NativeModules, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// screens
import { Home } from './screens/';

import { images, icons, COLORS, FONTS, SIZES } from './constants';
import { Cart } from './screens/Cart';
import { ProductListPage } from './screens/ProductListPage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
};
const Stack = createStackNavigator();
const DYReact = NativeModules.DYReact;

const App = () => {
  const [dyState, setDyState] = React.useState({ image_containers: [], DYReturned: false });
  const secretKey = Platform.OS === 'ios' ? '134eeb7a94fea0edb30aff21' : '01073533e5d214f5fcce0165';

  DYReact.setSecret(secretKey, (dyState) => {
    console.log(`returned with state: ${dyState} `);
  });

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'DY FRUIT STORE',
            headerStyle: {
              //   backgroundColor: ''
            },
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity style={{ marginLeft: SIZES.padding }} onPress={onPress}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: SIZES.padding }} onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="ProductListPage"
          component={ProductListPage}
          options={{
            title: 'Product List'
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'MY CART'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
