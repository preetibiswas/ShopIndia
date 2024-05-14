/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import ProductItem from '../../component/shop/ProductItem';

export default function ProductOverviewScreen() {
  const product = useSelector(state => state.product.availableProduct);
  return (
    <FlatList
      data={product}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          items={itemData.item}
          onViewDetail={() => {}}
          onAddCart={() => {}}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
