import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/DrawerComponent';
import { CartProvider } from './screens/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </CartProvider>
    </SafeAreaProvider>
  );
}