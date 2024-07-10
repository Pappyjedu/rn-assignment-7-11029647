import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    
      <View style={styles.headercontainer}>
      <Image source={require('../assets/Logo.png')} style={styles.centerImage} />
        <Image source={require('../assets/Search.png')} style={styles.headerImage} />
      </View>
    
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 20,
    height: 20,
    marginLeft: 150,
  },
  centerImage: {
    alignSelf: 'center',
    marginLeft: 150,
  },
});

export default Header;
