import { View, Text, Pressable, Image, StatusBar, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../Components/Card'
import { ICard } from '../Components/types';
import * as Speech from 'expo-speech';

const DATA = [
    {
        id: '1',
        title: 'Bola de Futsal Penalty Rx 500',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M0VUC139.jpg',
        preco: 87.99
    },
    {
        id: '2',
        title: 'Meia Esportiva Antiderrapante',
        uri: 'https://http2.mlstatic.com/D_NQ_NP_606963-MLB50676504660_072022-O.webp',
        preco: 27.99
    },
    {
        id: '3',
        title: 'Caneleira de Futebol Nike',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/51943902.jpg',
        preco: 63.99
    },
    {
        id: '4',
        title: 'Joelheira de Compressão',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M0R0E402.jpg',
        preco: 98.99
    },
    {
        id: '5',
        title: 'Sacola Nike Brasilia 9.5',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M11TDR07.jpg',
        preco: 99.99
    },
];



const Acessorios = ({ navigation }) => {
    const renderItemNovo = ({ item }) => {
        return <View style={meuestilo.item} key={item.id}>
            <Pressable
            >
                <Card title={item.title} uri={item.uri} preco={item.preco} id={item.id} />
                <View style={{ flexDirection: 'row', gap: 15 }}></View>
            </Pressable>
        </View>
    }
    return (
        <SafeAreaView style={meuestilo.container}>
            <FlatList
                style={{ width: "100%" }}
                contentContainerStyle={{ alignItems: "center" }}
                data={DATA}
                renderItem={renderItemNovo}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <View>
                        <Button onPress={() => navigation.navigate('Home')} title="Home" />
                        <Text> </Text>
                        <Button onPress={() => {
                            Speech.speak("Caro Cliente,Agradecemos pela sua compra! Seu apoio é muito importante para nós.Esperamos que você aproveite seus produtos.Atenciosamente,Epic Sports Store",
                                { language: "pt-BR" });
                            navigation.navigate('Agradecimento')
                        }} title="Confirmar" />
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const meuestilo = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

    itemImage: {
        width: 180,
        height: 180,
        marginLeft: 10,
        marginRight: 15,
        backgroundColor: '#eee',
        borderRadius: 40,
        elevation: 2
    },
    botao: {
        marginTop: 10,
    },
});

export default Acessorios