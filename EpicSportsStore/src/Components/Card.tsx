import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ICard } from './types'

const Card: React.FC <ICard> = ({title, uri, preco, countItens, id}) => {
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
      <Text>Unidades no carrinho: {countItens(id)}</Text>
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
  });
export default Card