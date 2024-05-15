import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import productReducer from './store/reducers/product';
import {Provider} from 'react-redux';
import ProductOverviewScreen from './Screens/shop/ProductOverviewScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Productnavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Productnavigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
