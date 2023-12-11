import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import MapView, { Marker } from 'react-native-maps';



const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bem-vindo à Loja de Artigos Esportivos Epic Sport Store</Text>
            <Text style={styles.description}>
                Encontre os melhores produtos esportivos para suas atividades favoritas.
                Temos uma ampla variedade de equipamentos de alta qualidade para atender às suas necessidades.
            </Text>
            <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.8756117,
          longitude: -54.1636997,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude:-31.8756117,
              longitude: -54.1636997, }}
            title={"Epic Sport Store"}
            description={"Venha conhecer um pouco dos nossos produtos pessoalmente!!"}
          ></Marker>
          
        </MapView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    map: {
        width: '110%',
        height: '50%',
      },
});

export default Home;