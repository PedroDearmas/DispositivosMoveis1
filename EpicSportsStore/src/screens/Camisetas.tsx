import { View, Text, Pressable, Image, StatusBar, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../Components/Card'
import { ICard } from '../Components/types';
import * as Speech from 'expo-speech';
import Confirmação from './Confirmacao';

const DATA = [
    {
        id: '1',
        title: 'Camiseta da Seleção Brasil',
        uri: 'https://images.tcdn.com.br/img/img_prod/1050340/camisa_i_selecao_brasileira_22_23_versao_fan_2169_1_23a746b83aa942fe995182dc95d48c04.jpg',
        preco: 119.99
    },
    {
        id: '2',
        title: 'Camiseta da Seleção Uruguai',
        uri: 'https://images.tcdn.com.br/img/img_prod/1050340/camisa_selecao_uruguai_22_23_versao_fan_513_1_21602f5c86d210cffc898186f7dc6f07.jpg',
        preco: 119.99
    },
    {
        id: '3',
        title: 'Camiseta da Seleção Argentina',
        uri: 'https://images.tcdn.com.br/img/img_prod/1050340/camisa_selecao_argentina_22_23_versao_fan_501_1_246f155e695efb5f7afeb5a46e04ca07.jpg',
        preco: 199.99
    },
    {
        id: '4',
        title: 'Camiseta da Seleção Portugal',
        uri: 'https://images.tcdn.com.br/img/img_prod/1050340/camisa_i_e_ii_selecao_portugal_22_23_versao_fan_527_1_e1f1ce71f75b4a129ed496ffffc71fbe.jpg',
        preco: 199.99
    },
    {
        id: '5',
        title: 'Camiseta da Seleção Alemanha',
        uri: 'https://images.tcdn.com.br/img/img_prod/1050340/camisa_retro_selecao_alemanha_1990_1933_1_2d52392f291dd9bddb140935865fdce6.jpg',
        preco: 199.99
    },
];



const Camisetas = ({ navigation }) => {
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

export default Camisetas