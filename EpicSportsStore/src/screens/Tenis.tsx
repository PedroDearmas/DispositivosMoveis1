import { View, Text, Pressable, Image, StatusBar, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../Components/Card'
import { ICard } from '../Components/types';
import * as Speech from 'expo-speech';

const DATA = [
    {
        id: '1',
        title: 'Tênis Nike Revolution 6',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/96831431.jpg',
        preco: 259.99
    },
    {
        id: '2',
        title: 'Tênis adidas Pureboost 23',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M0YLYC04.jpg',
        preco: 579.99
    },
    {
        id: '3',
        title: 'Chuteira Futsal Umbro Pro 5 Bump',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M122W434.jpg',
        preco: 649.99
    },
    {
        id: '4',
        title: 'Chuteira Futsal Joma Top Flex Rebond',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/M0YW8N9O.jpg',
        preco: 699.99
    },
    {
        id: '5',
        title: 'Chuteira de Campo Nike Phantom',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/9792522V.jpg',
        preco: 349.99
    },
];



const Tenis = ({ navigation }) => {
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

export default Tenis