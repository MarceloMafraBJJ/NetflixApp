import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../index';
import Search from '../Search';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);
