/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import OrderItem from '../../component/shop/OrderItem';

export default function OrderScreen() {
  const order = useSelector(state => state.order.orders);
  console.log('saurav', order);

  return (
    <FlatList
      data={order}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
