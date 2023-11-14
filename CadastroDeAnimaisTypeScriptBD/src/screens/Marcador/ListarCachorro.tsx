import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View, Text, Pressable, TouchableOpacity, KeyboardAvoidingView, Alert, Platform, AlertButton, Button, FlatList
} from 'react-native';
import { Cachorro } from '../../model/Cachorro';
import { CachorroService } from '../../servico/CachorroService';
import meuestilo from '../../../meustilo';
import { useFocusEffect } from '@react-navigation/native';

const ListarCachorro = () => {
    const [cachorro, setCachorro] = useState<Cachorro[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const navigation = useNavigation();

    const loadCachorro = async () => {
        setIsRefreshing(true);
        try {
            const result = await CachorroService.findAll();
            setCachorro(result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsRefreshing(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadCachorro();
            console.log("useFocus")
        }, [])
    );

    const deleteCachorro = (cachorro: Cachorro) => {
        const cancelBtn: AlertButton = { text: 'Cancelar' }
        const deleteBtn: AlertButton = {
            text: 'Apagar',
            onPress: () => {
                CachorroService.delete(cachorro).then(() => loadCachorro())
            }
        }

        Alert.alert(`Apagar Cachorro "${cachorro.nome}?"`, 'Essa ação não pode ser desfeita!', [deleteBtn, cancelBtn])
    }

    const editCachorro = (item: Cachorro) => {
        navigation.navigate('Manter Cachorro', {cachorro: item});
    }

    const render = ({ item }: { item: Cachorro }) => {
        return <View style={meuestilo.itemCard} key={item.id}>
            <Pressable
                style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, meuestilo.listItem]}
                onLongPress={() => deleteCachorro(item)}
                onPress={() => { editCachorro(item) }}
            >
                {/* <Image source={{ uri: item.imageUri }} style={meuestilo.itemImage} /> */}
                <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Raça: {item.raca}</Text>
                    <Text>Data Nascimento: {item.datanasc}</Text>
                </View>
            </Pressable>
        </View>
    }


    return (
        <KeyboardAvoidingView
            style={meuestilo.containerlistar}
            behavior="padding"
        >
            <FlatList
                data={cachorro}
                renderItem={render}
                keyExtractor={item => item.id.toString()}
                onRefresh={() => loadCachorro()}
                refreshing={isRefreshing}
            />
        </KeyboardAvoidingView>
    );
};
export default ListarCachorro

