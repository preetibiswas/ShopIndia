/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as cartAction from '../../store/actions/cart';

import ProductItem from '../../component/shop/ProductItem';

export default function ProductOverviewScreen({navigation}) {
  const product = useSelector(state => state.product.availableProduct);
  const userPro = useSelector(state => state.product.userProduct);
  const cart = useSelector(state => state.cart.items);
  console.log('AlllProduct', cart);
  console.log('userrrrrrrrrrrr', userPro);
  const selectItemHandler = (id, title) => {
    navigation.navigate('ProductDetailScreen', {
      productId: id,
      productTitle: title,
    });
  };

  const dispatch = useDispatch();
  return (
    <FlatList
      data={product}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          onSelect={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }
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
        >
          <Button
            title="View Detail"
            onPress={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
            color="#C2185B"
          />
          <Button
            title="To cart"
            onPress={() => {
              dispatch(cartAction.addtoCart(itemData.item));
            }}
            color="#FDDE55"
          />
        </ProductItem>
      )}
    />
  );
}

const styles = StyleSheet.create({});
