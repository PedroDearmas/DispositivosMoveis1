import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Pressable, FlatList, StatusBar, Image, Text } from "react-native";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    nome: "Aceguá",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtsW7O6sbsEu4EdRvwGi5BLmU9mm3xM-urxmyWL2qmWamwN4CXkz1_Boc4wI1DMp4yOw&usqp=CAU",
  },
  {
    id: "2",
    nome: "4981 habitantes",
    imageUri: "https://cdn-icons-png.flaticon.com/512/649/649204.png",
  },
  {
    id: "3",
    nome: "PIB R$264485,44",
    imageUri:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/9200890-design-de-logotipo-pib-letra-com-forma-poligono-pib-poligono-e-formato-cubo-design-pib-hexagon-logo-modelo-branco-e-cores-preto-pib-monograma-logotipo-de-negocios-e-imoveis-vetor.jpg",
  },
];

export default function AceguaMa() {
  const navigation = useNavigation();
  const AcaoDoClique = (item) => {
    if (item.id == "1") {
      Speech.speak("Aceguá", { language: "pt-BR" });
    } else if (item.id == "2") {
      Speech.speak("4981 habitantes ", { language: "pt-BR" });
    } else {
      Speech.speak("PIB R$264485,44", { language: "pt-BR" });
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styless.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#fff" : "" },
            styless.title,
          ]}
          onPress={() => {
            AcaoDoClique(item);
          }}
        >
          <View style={styless.alinhamentoLinha}>
            <Image style={styless.image} source={{ uri: item.imageUri }} />
            <View style={styless.alinhamentoColuna}>
              <Text style={styless.itemStyle}>{item.nome} </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -31.870099,
          longitude: -54.161762,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.870099,
            longitude: -54.161762,
          }}
          title={"Aceguá"}
          description={"Cidade"}
        ></Marker>
      </MapView>
      <View style={styless.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItemNovo}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "50%",
  },
});

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },

  itemStyle: {
    fontSize: 16,
    padding: 5,
    marginLeft: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  alinhamentoLinha: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  alinhamentoColuna: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  image: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
});
