/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from '../../component/shop/ProductItem';

export default function UserProductScreen() {
  const userProduct = useSelector(state => state.product.userProduct);
  console.log('userProduct', userProduct);
  return (
    <FlatList
      data={userProduct}
      keyExtractor={item => item.id}
      renderItem={itemdata => (
        <ProductItem items={itemdata.item} onSelect={() => {}}>
          <Button title="Edit" onPress={() => {}} color="#C2185B" />
          <Button title="Delete" onPress={() => {}} color="#FDDE55" />
        </ProductItem>
      )}
    />
  );
}

const styles = StyleSheet.create({});
