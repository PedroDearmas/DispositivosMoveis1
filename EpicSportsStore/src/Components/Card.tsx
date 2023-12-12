import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { ICard } from './types'


const Card: React.FC<ICard> = ({ title, uri, preco }) => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View>
      <Text>{title}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: uri,
        }}
      />
      <Text>Valor: R${preco}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Quantidades no carrinho"
        keyboardType="numeric"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    height: 20,
    marginTop: 1,
    marginBottom: 10,
    marginRight: 50,
    borderWidth: 1,
    padding: 2,
  },
});
export default Card