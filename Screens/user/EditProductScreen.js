/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import * as productActions from '../../store/actions/product';

export default function EditProductScreen({navigation, route}) {
  const prodId = route.params?.productId;
  const editedPro = useSelector(state =>
    state.product.userProduct.find(prod => prod.id === prodId),
  );
  const dispatch = useDispatch();
  console.log('arjun', prodId);
  const [title, setTitle] = useState(editedPro ? editedPro.title : '');
  const [imageUrl, setImageUrl] = useState(editedPro ? editedPro.imageUrl : '');
  const [Price, setPrice] = useState('');
  const [description, setDiscription] = useState(
    editedPro ? editedPro.description : '',
  );
  const submitHandle = useCallback(() => {
    console.log('submited');
    if (editedPro) {
      dispatch(
        productActions.updateProduct(prodId, title, description, imageUrl),
      );
    } else {
      dispatch(
        productActions.createProduct(title, description, imageUrl, Price),
      );
    }
    navigation.goBack();
  }, [dispatch, prodId, title, description, imageUrl, Price, navigation]);
  useEffect(() => {
    navigation.setParams({submit: submitHandle});
  }, [submitHandle]);
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={txt => setTitle(txt)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>ImageUrl</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={txt => setImageUrl(txt)}
          />
        </View>
        {editedPro ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={Price}
              onChangeText={txt => setPrice(txt)}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={txt => setDiscription(txt)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 16,
    marginVertical: 5,
    paddingTop: 5,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
