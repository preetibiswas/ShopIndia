import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import productReducer from './store/reducers/product';
import {Provider} from 'react-redux';
import ProductOverviewScreen from './Screens/shop/ProductOverviewScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const rootReducer = combineReducers({
  product: productReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <ProductOverviewScreen />
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
