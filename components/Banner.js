import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { images, icons, products, COLORS, FONTS, SIZES } from '../constants';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <ImageBackground
        source={require('../assets/images/fruit-app-banner.png')}
        imageStyle={{ borderRadius: 15 }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 120,
    margin: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  image: { height: 120, resizeMode: 'stretch' }
});

export default Banner;
