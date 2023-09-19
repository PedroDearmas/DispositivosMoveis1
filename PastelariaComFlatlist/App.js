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
    title: "Dinheiro",
    imageUri:
      "https://static.vecteezy.com/system/resources/previews/019/049/680/non_2x/money-symbol-icon-png.png",
  },
  {
    id: "2",
    title: "Cartao",
    imageUri:
      "https://static.vecteezy.com/system/resources/previews/010/147/665/non_2x/credit-card-icon-sign-symbol-design-free-png.png",
  },
  {
    id: "3",
    title: "Pix",
    imageUri: "https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png",
  },
];

export default function App() {
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [valor3, setValor3] = useState(null);
  const [valor4, setValor4] = useState(null);
  const pastelcarn = 5.3;
  const pastelfran = 4.7;
  const pastelquei = 4.0;
  const pastelvent = 8.0;
  let resultado = 0;

  const soma = () => {
    resultado =
      parseFloat(valor1 ?? 0) * pastelcarn +
      parseFloat(valor2 ?? 0) * pastelfran +
      parseFloat(valor3 ?? 0) * pastelquei +
      parseFloat(valor4 ?? 0) * pastelvent;
    if (resultado > 0) {
      alert("O valor do pedido foi de R$" + resultado);
      Speech.speak("O valor do pedido foi de " + resultado + "reais", {
        language: "pt-BR",
      });
    } else {
      alert("Você não pediu nenhum pastel, deve pedir pelo menos um !!");
      Speech.speak("Você não pediu nenhum pastel, deve pedir pelo menos um", {
        language: "pt-BR",
      });
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
            soma();
          }}
          onPress={() => {
            soma();
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
        placeholder="Unidades do pastel de carne"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1 === "" ? 0 : valor1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Unidades do pastel de frango"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2 === "" ? 0 : valor2)}
        value={valor2}
      ></TextInput>
      <TextInput
        style={meuestilo.inputs}
        placeholder="Unidades do pastel de queijo"
        keyboardType="numeric"
        onChangeText={(valor3) => setValor3(valor3 === "" ? 0 : valor3)}
        value={valor3}
      ></TextInput>
      <TextInput
        style={meuestilo.inputs}
        placeholder="Unidades do pastel de vento"
        keyboardType="numeric"
        onChangeText={(valor4) => setValor4(valor4 === "" ? 0 : valor4)}
        value={valor4}
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
  },
  safe: {
    flex: 3,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
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
  input: {
    backgroundColor: "#A0A0A0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
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
