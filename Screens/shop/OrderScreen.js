/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function OrderScreen() {
  const order = useSelector(state => state.order.orders);
  console.log('saurav', order);

  return (
    <FlatList
      data={order}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Text>{itemData.item.totalAmount?.toFixed(2)}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({});
