import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Text,
  View,
} from "react-native";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    nome: "Ifsul",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Instituto_Federal_Sul-rio-grandense_-_Marca_Vertical_2015.svg/800px-Instituto_Federal_Sul-rio-grandense_-_Marca_Vertical_2015.svg.png",
  },
  {
    id: "2",
    nome: "Unipampa",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSkGyjFFl45SWAWC5m8_D5jnhJqVRmx50IA&usqp=CAU",
  },
  {
    id: "3",
    nome: "Ideau",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Yzd23sSht7BhsaKpw4qLCOr_DvLPQ2-xdJ47GQsNKo_931RLuFbMCOgXUnhJzm_ugvc&usqp=CAU",
  },
];

export default function App() {
  const navigation = useNavigation();

  const AcaoDoClique = (item) => {
    if (item.id == "1") {
      Speech.speak(
        "Você clicou em Ifsul ",
        { language: "pt-BR" },
        navigation.navigate("Ifsul")
      );
    } else if (item.id == "2") {
      Speech.speak(
        "Você clicou em Unipampa",
        { language: "pt-BR" },
        navigation.navigate("Unipampa")
      );
    } else {
      Speech.speak(
        "Você clicou em Ideau",
        { language: "pt-BR" },
        navigation.navigate("Ideau")
      );
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#fff" : "" },
            styles.title,
          ]}
          onPress={() => {
            AcaoDoClique(item);
          }}
        >
          <View style={styles.alinhamentoLinha}>
            <Image style={styles.image} source={{ uri: item.imageUri }} />
            <View style={styles.alinhamentoColuna}>
              <Text style={styles.itemStyle}>{item.nome} </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItemNovo}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 130,
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
