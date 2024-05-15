/* eslint-disable prettier/prettier */
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import * as cartAction from '../../store/actions/cart';

export default function ProductDetailScreen({route}) {
  const SelectedProduct = useSelector(state =>
    state.product.availableProduct.find(
      prod => prod.id === route.params.productId,
    ),
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image source={{uri: SelectedProduct.imageUrl}} style={styles.image} />
      <View style={styles.action}>
        <Button
          title="Add to Cart"
          color="#C2185B"
          onPress={() => dispatch(cartAction.addtoCart(SelectedProduct))}
        />
      </View>
      <Text style={styles.price}>${SelectedProduct.Price.toFixed(2)}</Text>
      <Text style={styles.description}>{SelectedProduct.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  action: {
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
});
