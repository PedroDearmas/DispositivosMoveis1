import { View, Text, Pressable, Image, StatusBar, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../Components/Card'
import { ICard } from '../Components/types';
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';

const DATA = [
    {
        id: '1',
        title: 'Calção Umbro',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/88874702.jpg',
        preco: 54.99
    },
    {
        id: '2',
        title: 'Calção Nike',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/96291131.jpg',
        preco: 69.99
    },
    {
        id: '3',
        title: 'Calção Adidas',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/98392502A3.jpg',
        preco: 84.99
    },
    {
        id: '4',
        title: 'Calção Puma',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/98442302.jpg',
        preco: 84.99
    },
    {
        id: '5',
        title: 'Calção Kappa',
        uri: 'https://imgcentauro-a.akamaihd.net/768x768/84601102.jpg',
        preco: 51.90
    },
];



const Calcoes = ({ navigation }) => {
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

export default Calcoes