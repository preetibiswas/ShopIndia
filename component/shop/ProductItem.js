/* eslint-disable prettier/prettier */
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProductItem({items, onViewDetail, onAddCart}) {
  return (
    <View style={styles.product}>
      <View style={styles.imageCon}>
        <Image
          source={{uri: items.imageUrl}}
          style={{width: '100%', height: '100%', objectFit: 'fill'}}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.price}>${items.Price}</Text>
      </View>
      <View style={styles.action}>
        <Button title="View Detail" onPress={onViewDetail} color="#C2185B" />
        <Button title="To cart" onPress={onAddCart} color="#FFC1O7" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCon: {
    width: '100%',
    height: '60%',
  },
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 10,
    margin: 5,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: 'tomato',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15.5%',
    paddingHorizontal: 20,
  },
});
