/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Platform} from 'react-native';
import ProductOverviewScreen from '../Screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../Screens/shop/ProductDetailScreen';
import React from 'react';
import CartScreen from '../Screens/shop/CartScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OrderScreen from '../Screens/shop/OrderScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProductScreen from '../Screens/user/UserProductScreen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const OrderNavigator = () => (
  <Stack.Navigator
    initialRouteName="orders"
    screenOptions={({navigation, route}) => ({
      headerStyle: {backgroundColor: '#C2185B'},
      headerTintColor: 'white',
      statusBarColor: '#C2185B',
      headerLeft: () => {
        return (
          <Icon
            name="menu"
            color="#fff"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
          />
        );
      },
      headerRight: () => (
        <Icon
          name="cart"
          onPress={() => navigation.navigate('Cart')}
          color="#fff"
          size={30}
        />
      ),
    })}
  >
    <Stack.Screen name="orders" component={OrderScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

// const Productnavigator = () => (
//   <Stack.Navigator
//     screenOptions={({navigation, route}) => ({
//       headerStyle: {backgroundColor: '#C2185B'},
//       statusBarColor: '#C2185B',
//       headerTintColor: 'white',
//       headerLeft: () => {
//         return (
//           <Icon
//             name="menu"
//             color="#fff"
//             size={30}
//             onPress={() => navigation.openDrawer()}
//             style={{marginLeft: 10}}
//           />
//         );
//       },
//       headerRight: () => (
//         <Icon
//           name="cart"
//           onPress={() => navigation.navigate('Cart')}
//           color="#fff"
//           size={30}
//         />
//       ),
//     })}
//   >
//     <Stack.Screen name="ProductOverview" component={ProductOverviewScreen} />
//     <Stack.Screen
//       name="ProductDetailScreen"
//       component={ProductDetailScreen}
//       options={({route}) => ({title: route.params.productTitle})}
//     />
//     <Stack.Screen name="Cart" component={CartScreen} />
//   </Stack.Navigator>
// );

const Productnavigator = () => (
  <Stack.Navigator
    screenOptions={({navigation, route}) => ({
      headerStyle: {backgroundColor: '#C2185B'},
      statusBarColor: '#C2185B',
      headerTintColor: 'white',
      headerLeft: () => (
        <>
          {navigation.canGoBack() && (
            <Icon
              name="arrow-left"
              color="#fff"
              size={30}
              onPress={() => navigation.goBack()}
              style={{marginLeft: 10}}
            />
          )}
          {!navigation.canGoBack() && (
            <Icon
              name="menu"
              color="#fff"
              size={30}
              onPress={() => navigation.openDrawer()}
              style={{marginLeft: 10}}
            />
          )}
        </>
      ),
      headerRight: () => (
        <Icon
          name="cart"
          onPress={() => navigation.navigate('Cart')}
          color="#fff"
          size={30}
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
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const Adminnavigator = () => (
  <Stack.Navigator
    screenOptions={({navigation, route}) => ({
      headerStyle: {backgroundColor: '#C2185B'},
      statusBarColor: '#C2185B',
      headerTintColor: 'white',
      headerLeft: () => {
        return (
          <Icon
            name="menu"
            color="#fff"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
          />
        );
      },
    })}
  >
    <Stack.Screen name="userProduct" component={UserProductScreen} />
  </Stack.Navigator>
);

const ShopNavigator = () => (
  <Drawer.Navigator screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Products" component={Productnavigator} />
    <Drawer.Screen name="order" component={OrderNavigator} />
    <Drawer.Screen name="admin" component={Adminnavigator} />
  </Drawer.Navigator>
);
export default ShopNavigator;
