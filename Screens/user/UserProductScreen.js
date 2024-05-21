/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from '../../component/shop/ProductItem';
import * as productActions from '../../store/actions/product';

export default function UserProductScreen({navigation}) {
  const userProduct = useSelector(state => state.product.userProduct);
  const dispatch = useDispatch();
  console.log('userProduct', userProduct);
  const editProductHandler = id => {
    navigation.navigate('EditProduct', {productId: id});
  };
  const deleteHandler = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item', [
      {text: 'NO', styles: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productActions.deleteProduct(id));
        },
      },
    ]);
  };
  return (
    <FlatList
      data={userProduct}
      keyExtractor={item => item.id}
      renderItem={itemdata => (
        <ProductItem
          items={itemdata.item}
          onSelect={() => editProductHandler(itemdata.item.id)}
        >
          <Button
            title="Edit"
            onPress={() => editProductHandler(itemdata.item.id)}
            color="#C2185B"
          />
          <Button
            title="Delete"
            onPress={deleteHandler.bind(this, itemdata.item.id)}
            //             onPress={() =>
            //               dispatch(productActions.deleteProduct(itemdata.item.id))
            // }

            color="#FDDE55"
          />
        </ProductItem>
      )}
    />
  );
}

const styles = StyleSheet.create({});
