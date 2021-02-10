/***
 * Sample React Native DY App
 ***/

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
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

const App = () => {
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
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log('Pressed')}
              >
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
