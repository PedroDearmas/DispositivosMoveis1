import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Confirmacao = () => {
  return (
    <View>
      <Text style={meuestilo.titulo}>
        Volte Sempre
      </Text>
      <Text style={meuestilo.texto}>
        Caro Cliente, Agradecemos
      </Text>
      <Text style={meuestilo.texto}>
        pela sua compra! Seu apoio é muito importante para nós.
        Esperamos que você aproveite seus produtos.
        Atenciosamente,
        Epic Sports Store</Text>
    </View >
  )
}
const meuestilo = StyleSheet.create({
  texto: {
    textalign: 'center',
    padding: 50,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 20
  },
  titulo: {
    textalign: 'center',
    padding: 50,
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 40
  }
});

export default Confirmacao