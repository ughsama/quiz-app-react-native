import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/HomeScreen/Home';
import Routes from './src/navigation/Route';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
