/* eslint-disable prettier/prettier */
import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from 'react-native-vector-icons';

export default function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={Ionicons}
      color={Platform.OS === 'android' ? 'White' : 'red'}
    />
  );
}

const styles = StyleSheet.create({});
