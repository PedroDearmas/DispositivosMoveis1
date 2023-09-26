import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    title: "Vip",
    imageUri:
      "https://media.istockphoto.com/id/1451466346/pt/vetorial/round-vip-icon-crown-and-vip-logo-vector.jpg?s=170667a&w=0&k=20&c=BAlXrVdGyIcJHDrPefxMapMGj-osR301PLjt_ZVuT0I=",
    adulto: 10,
    crianca: 5,
  },
  {
    id: "2",
    title: "Top",
    imageUri:
      "https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/512px/1f51d.png",
    adulto: 20,
    crianca: 10,
  },
  {
    id: "3",
    title: "Open Bar",
    imageUri:
      "https://t4.ftcdn.net/jpg/02/73/98/21/360_F_273982110_lrwX2aeCKtZDsDoyDeTXxDa83f4n3Pce.jpg",
    adulto: 30,
    crianca: 20,
  },
];

export default function App() {
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  let resultadoAdulto = 0;
  let resultadoCrianca = 0;

  const soma = (item) => {
    resultadoAdulto = item.adulto * valor1;
    resultadoCrianca = item.crianca * valor2;
    if (resultadoAdulto > 0 || resultadoCrianca > 0) {
      alert(
        "O valor total dos ingressos para adultos foi de R$" +
          resultadoAdulto.toFixed(2) +
          " E o totoal dos ingressos para crianças foi de R$" +
          resultadoCrianca.toFixed(2)
      );
      Speech.speak(
        "O valor total dos ingressos para adultos foi de R$" +
          resultadoAdulto.toFixed(2) +
          " E o total dos ingressos para crianças foi de R$" +
          resultadoCrianca.toFixed(2),
        {
          language: "pt-BR",
        }
      );
    } else {
      alert(
        "Você não pediu nenhum ingresso, por favor selecione uma quantidade de ingressos!!"
      );
      Speech.speak(
        "Você não pediu nenhum ingresso, por favor selecione uma quantidade de ingressos!!",
        {
          language: "pt-BR",
        }
      );
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={meuestilo.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            meuestilo.title,
          ]}
          onLongPress={() => {
            soma(item);
          }}
          onPress={() => {
            soma(item);
          }}
        >
          <View style={meuestilo.detalheItem}>
            <Image
              source={{ uri: item.imageUri }}
              style={meuestilo.itemImage}
            />
            <Text style={meuestilo.title}>{item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={meuestilo.container}>
      <TextInput
        style={meuestilo.inputs}
        placeholder="Quantidade de ingressos para adultos"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1 === "" ? 0 : valor1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Quantidade de ingressos para crianças"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2 === "" ? 0 : valor2)}
        value={valor2}
      ></TextInput>

      <SafeAreaView style={meuestilo.safe}>
        <FlatList
          data={DATA}
          renderItem={renderItemNovo}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const meuestilo = StyleSheet.create({
  detalheItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 16,
  },
  safe: {
    flex: 3,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: "16px",
  },
  title: {
    fontSize: 20,
  },

  itemImage: {
    width: 32,
    height: 32,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
  },
  inputContainer: {
    width: "80%",
  },
  inputs: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    textDecorationColor: "white",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonSom: {
    backgroundColor: "black",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonSub: {
    backgroundColor: "gray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonMul: {
    backgroundColor: "brown",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonDiv: {
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
