/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from '../../component/shop/ProductItem';
import * as productActions from '../../store/actions/product';

export default function UserProductScreen() {
  const userProduct = useSelector(state => state.product.userProduct);
  const dispatch = useDispatch();
  console.log('userProduct', userProduct);
  return (
    <FlatList
      data={userProduct}
      keyExtractor={item => item.id}
      renderItem={itemdata => (
        <ProductItem items={itemdata.item} onSelect={() => {}}>
          <Button title="Edit" onPress={() => {}} color="#C2185B" />
          <Button
            title="Delete"
            onPress={() =>
              dispatch(productActions.deleteProduct(itemdata.item.id))
            }
            color="#FDDE55"
          />
        </ProductItem>
      )}
    />
  );
}

const styles = StyleSheet.create({});
