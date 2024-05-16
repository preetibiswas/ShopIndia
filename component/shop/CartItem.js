/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CartItem({quantity, title, amount, onRemove}) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.maintxt}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.maintxt}>{amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons size={23} color="red" name="trash" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'OpenSans-Bold',
    color: '#888',
    fontSize: 16,
  },
  maintxt: {
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
});
