/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import ProductOverviewScreen from '../Screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../Screens/shop/ProductDetailScreen';
import React from 'react';
const Stack = createNativeStackNavigator();

const Productnavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductOverview"
    screenOptions={{
      headerStyle: {backgroundColor: '#C2185B'},
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
      options={({route}) => ({title: route.params.productTitle})}
    />
  </Stack.Navigator>
);
export default Productnavigator;
