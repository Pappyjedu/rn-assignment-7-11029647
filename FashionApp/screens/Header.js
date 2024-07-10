import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/Menu.png')} style={styles.headerImage} />
      <Image source={require('../assets/Logo.png')} style={styles.centerImage} />
      <View style={styles.rightImagesContainer}>
        <Image source={require('../assets/Search.png')} style={styles.headerImage} />
        <Image source={require('../assets/shoppingBag.png')} style={styles.headerImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: 20,
    height: 20,
    margin: 5,
  },
  centerImage: {
    margin: 5,
  },
  rightImagesContainer: {
    flexDirection: 'row',
  },
});

export default Header;
