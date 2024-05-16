/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Platform} from 'react-native';
import ProductOverviewScreen from '../Screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../Screens/shop/ProductDetailScreen';
import React from 'react';
import CartScreen from '../Screens/shop/CartScreen';

const Stack = createNativeStackNavigator();

const Productnavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductOverview"
    // screenOptions={{
    //   headerStyle: {backgroundColor: '#C2185B'},
    //   headerTintColor: 'white',
    // }}
    screenOptions={({navigation, route}) => ({
      headerStyle: {backgroundColor: '#C2185B'},
      headerTintColor: 'white',
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('CartScreen')}
          title="cart"
        />
      ),
    })}
  >
    <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
    <Stack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
      options={({route}) => ({title: route.params.productTitle})}
    />
    <Stack.Screen name="CartScreen" component={CartScreen} />
  </Stack.Navigator>
);
export default Productnavigator;
