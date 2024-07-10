import React from 'react';
import { Image, View, StyleSheet }  from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, TenorSans_400Regular } from '@expo-google-fonts/tenor-sans';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = () => (

  <Stack.Navigator>
  <Stack.Screen
    name="Home" 
      component={HomeScreen} 
      options={{
        headerTitle: 'OUR STORY', // or any other title you want
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'Tenor Sans', // Replace with your custom font
          fontSize: 30,
          fontWeight: 'SemiBold',
          color: '#000000', // Change to your desired color
        },
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <Image
              style={styles.headerImage}
              source={require('../assets/Listview.png')}
              resizeMode="contain"
            />
            <Image
              style={styles.headerImage}
              source={require('../assets/Filter.png')}
              resizeMode="contain"
            />
          </View>
        ),
      }}
    />
    <Stack.Screen 
      name="ProductDetail" 
      component={ProductDetailScreen} 
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/shoppingBag.png')}
              style={{width: size, height: size, tintColor: focused ? '#007AFF' : '#999'}}
            />
          ),
        }}
        />
    </Drawer.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Add some right margin
  },
  headerImage: {
    width: 30,
    height: 30,
    marginLeft: 15, // Space between images
  },
});

export default AppNavigator;