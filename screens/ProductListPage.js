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

export const ProductListPage = ({ route, navigation }) => {
  const { cat } = route.params;
  const filteredProducts = cat !== 'all' ? products.filter((p) => p.category === cat) : products;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center'
      }}
    >
      <Text
        style={{ paddingTop: 2 * SIZES.padding, marginBottom: -2 * SIZES.padding, ...FONTS.h1 }}
      >
        {cat === 'fruit' ? 'Shop Fruit' : cat === 'veggies' ? 'Shop Veggies' : 'Shop All'}
      </Text>
      <View style={styles.container}>
        <View style={{ flex: 1, paddingTop: SIZES.padding * 2, paddingLeft: SIZES.padding }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderAllProducts(item, index)}
          />
        </View>
      </View>
    </View>
  );
};

function renderAllProducts(item, index) {
  return (
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => {}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{
            width: 80,
            height: 70,
            marginVertical: -4
          }}
        />
      </View>
      <View style={{ flex: 3, marginLeft: SIZES.radius, justifyContent: 'center' }}>
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>€ {item.price} / kg</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default ProductListPage;
