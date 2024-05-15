/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as cartAction from '../../store/actions/cart';

import ProductItem from '../../component/shop/ProductItem';

export default function ProductOverviewScreen({navigation}) {
  const product = useSelector(state => state.product.availableProduct);
  const cart = useSelector(state => state.cart.items);
  console.log('preeti biseas', cart);

  const dispatch = useDispatch();
  return (
    <FlatList
      data={product}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          items={itemData.item}
          onViewDetail={() =>
            navigation.navigate('ProductDetailScreen', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            })
          }
          onAddCart={() => {
            dispatch(cartAction.addtoCart(itemData.item));
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
