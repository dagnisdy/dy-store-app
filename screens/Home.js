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
import { Svg, Polygon } from 'react-native-svg';
import { BlurView } from 'expo-blur';

import { images, icons, products, categories, COLORS, FONTS, SIZES } from '../constants';
import Banner from '../components/Banner';

const Home = ({ navigation }) => {
  const [showAddToBagModal, setShowAddToBagModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedQuantity, setSelectedQuantity] = React.useState('1');

  function renderCategoryItems(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    } else {
      trendingStyle = {};
    }

    return (
      <TouchableOpacity
        style={{
          height: 170,
          width: 160,
          justifyContent: 'center',
          marginHorizontal: SIZES.base / 2,
          ...trendingStyle
        }}
        onPress={() =>
          navigation.navigate('ProductListPage', {
            cat: item.id
          })
        }
      >
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base * 6,
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: 9,
              backgroundColor: item.bgColor
            },
            styles.trendingShadow
          ]}
        >
          <Text style={{ color: COLORS.white, width: '80%', ...FONTS.h1 }}>{item.name}</Text>
        </View>
        <View
          style={{
            elevation: 999,
            position: 'absolute',
            top: -40,
            right: 0,
            width: '85%',
            height: 110
          }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 200
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  function renderAllProducts(item, index) {
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}
      >
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

  function renderQuantity() {
    return selectedItem.quantity.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            width: 35,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 3,
            marginBottom: 10,
            backgroundColor: selectedItem.quantity[index] == selectedQuantity ? COLORS.white : null,
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5
          }}
          onPress={() => {
            setSelectedQuantity(item);
          }}
        >
          <Text
            style={{
              color: selectedItem.quantity[index] == selectedQuantity ? COLORS.black : COLORS.white,
              ...FONTS.body4
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  const featuredProducts = products.filter((p) => p.featured === true);

  return (
    <View style={styles.container}>
      <View style={{ height: 190, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderCategoryItems(item, index)}
        />
      </View>

      <Banner />

      <View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            marginTop: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white
          },
          styles.recentContainerShadow
        ]}
      >
        <View style={{ width: 50, marginLeft: SIZES.base }}>
          <Image
            source={images.allProducts}
            resizeMode="contain"
            style={{
              width: '140%',
              height: '100%',
              opacity: 0.5,
              marginLeft: -SIZES.padding
            }}
          />
        </View>
        <View style={{ flex: 1, paddingTop: SIZES.padding * 2, paddingLeft: SIZES.padding }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={featuredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderAllProducts(item, index)}
          />
        </View>
      </View>
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddToBagModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <BlurView
            intensity={70}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            tint="light"
          >
            {/* Button to close modal */}
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                setSelectedItem(null);
                setSelectedQuantity('1');
                setShowAddToBagModal(false);
              }}
            ></TouchableOpacity>

            {/* Modal content */}
            <View
              style={{
                justifyContent: 'center',
                width: '85%',
                backgroundColor: selectedItem.bgColor
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: '90%',
                    height: 260,
                    top: -120,
                    marginBottom: -120
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: -1 * SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1
                }}
              >
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1
                }}
              >
                € {selectedItem.price} / kg
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding
                }}
              >
                <View>
                  <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Quantity (KG)</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginLeft: SIZES.radius
                  }}
                >
                  {renderQuantity()}
                </View>
              </View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)'
                }}
                onPress={() => {
                  setSelectedItem(null);
                  setSelectedQuantity('');
                  setShowAddToBagModal(false);
                  setTimeout(
                    () =>
                      navigation.navigate('Cart', {
                        selectedItem: selectedItem,
                        selectedQuantity: selectedQuantity
                      }),
                    300
                  );
                }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 8
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  recentContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default Home;
