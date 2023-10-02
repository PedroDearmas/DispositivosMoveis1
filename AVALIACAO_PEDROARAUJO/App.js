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
    title: "À vista",
    imageUri: "https://cdn-icons-png.flaticon.com/512/552/552788.png",
    refri: 3.95,
    salgado: 4.83,
    sobremesa: 92.0,
  },
  {
    id: "2",
    title: "Prazo 30 Dias",
    imageUri: "https://cdn-icons-png.flaticon.com/512/11622/11622540.png",
    refri: 4.3,
    salgado: 5.25,
    sobremesa: 100.0,
  },
  {
    id: "3",
    title: "Prazo 60 Dias",
    imageUri: "https://cdn-icons-png.flaticon.com/512/6117/6117188.png",
    refri: 4.68,
    salgado: 5.72,
    sobremesa: 109.0,
  },
];

export default function App() {
  const [valor, setValor] = useState(null);
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [valor3, setValor3] = useState(null);
  let resultadoTotal = 0;

  const soma = (item) => {
    nome = valor;
    resultadoTotal =
      item.refri * parseFloat(valor1) +
      item.salgado * parseFloat(valor2) +
      item.sobremesa * parseFloat(valor3);
    if (nome === 0) {
      alert("Por favor preencha um nome para o comprador!!");
      Speech.speak("Por favor preencha um nome para o comprador!!", {
        language: "pt-BR",
      });
    } else if (resultadoTotal > 0) {
      alert(
        valor +
          ", o valor total da sua compra foi de R$" +
          resultadoTotal.toFixed(2)
      );
      Speech.speak(
        valor +
          ", o valor total da sua compra foi de R$" +
          resultadoTotal.toFixed(2),
        {
          language: "pt-BR",
        }
      );
    } else {
      alert(
        valor +
          ", você não pediu nada, por favor selecione pelo menos um item!!"
      );
      Speech.speak(
        valor +
          ", você não pediu nada, por favor selecione pelo menos um item!!",
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
        placeholder="Quantidade de refrigerantes"
        keyboardType="text"
        onChangeText={(valor) => setValor(valor === "" ? 0 : valor)}
        value={valor}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Por Favor, digite o nome do comprador aqui !!"
        keyboardType="text"
        onChangeText={(valor1) => setValor1(valor1 === "" ? 0 : valor1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Quantidade de salgadinhos"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2 === "" ? 0 : valor2)}
        value={valor2}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Quantidade de sobremesa em gramas (0.000)"
        keyboardType="numeric"
        onChangeText={(valor3) => setValor3(valor3 === "" ? 0 : valor3)}
        value={valor3}
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
    width: 210,
    height: 45,
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
    width: 210,
    height: 45,
  },
  title: {
    fontSize: 20,
  },

  itemImage: {
    width: 35,
    height: 35,
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
    width: 320,
    height: 45,
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
