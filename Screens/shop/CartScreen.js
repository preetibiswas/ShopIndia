/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../component/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/order';

export default function CartScreen() {
  const dispatch = useDispatch();
  const cartTotalAmt = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItem = [];
    for (const key in state.cart.items) {
      transformedCartItem.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItem;
  });
  console.log('aarush', cartItems);

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summryTxt}>
          Total:<Text style={styles.amount}>${cartTotalAmt.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() =>
            dispatch(orderActions.addorder(cartItems, cartTotalAmt))
          }
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.productId}
          renderItem={itemdata => (
            <CartItem
              quantity={itemdata.item.quantity}
              title={itemdata.item.productTitle}
              amount={itemdata.item.sum}
              onRemove={() => {
                dispatch(cartActions.removetocart(itemdata.item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  summryTxt: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 18,
  },
  amount: {
    color: '#C2185B',
  },
});
