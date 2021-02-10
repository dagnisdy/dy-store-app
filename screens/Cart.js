import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native';
import { icons, products, categories, COLORS, FONTS, SIZES } from '../constants';

export const Cart = ({ route, navigation }) => {
  const { selectedItem, selectedQuantity } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ ...FONTS.h1 }}>I am cart!</Text>
      <Text style={{ ...FONTS.h1 }}>{String(selectedItem.name)}</Text>
      <Text style={{ ...FONTS.h1 }}>{String(selectedQuantity)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default Cart;
