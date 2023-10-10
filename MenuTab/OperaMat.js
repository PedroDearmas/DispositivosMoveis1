import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
} from "react-native";
import * as Speech from "expo-speech";

export default function Apepe() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const soma = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    alert("O resultado é " + resultado);
    Speech.speak("O resultado da soma é " + resultado, {
      language: "pt-BR",
    });
  };
  const subtrair = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    alert("O resultado é " + resultado);
    Speech.speak("O resultado da subtração é " + resultado, {
      language: "pt-BR",
    });
  };
  const dividir = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    alert("O resultado é " + resultado);
    Speech.speak("O resultado da divisão é " + resultado, {
      language: "pt-BR",
    });
  };
  const multiplicar = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    alert("O resultado é " + resultado);
    Speech.speak("O resultado da multiplicação é " + resultado, {
      language: "pt-BR",
    });
  };

  return (
    <View style={meuestilo.container}>
      <TextInput
        style={meuestilo.inputs}
        placeholder="Digite Valor 1"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={meuestilo.inputs}
        placeholder="Digite Valor 2"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
      ></TextInput>

      <View style={meuestilo.buttonContainer}>
        <Pressable
          onPress={soma}
          onLongPress={() => alert("clique simples da proxima vez")}
          style={meuestilo.buttonSom}
        >
          <Text style={meuestilo.buttonText}>Somar</Text>
        </Pressable>

        <Pressable
          onPress={subtrair}
          onLongPress={() => alert("clique simples da proxima vez")}
          style={meuestilo.buttonSub}
        >
          <Text style={meuestilo.buttonText}>Subtrair</Text>
        </Pressable>

        <Pressable
          onPress={dividir}
          onLongPress={() => alert("clique simples da proxima vez")}
          style={meuestilo.buttonDiv}
        >
          <Text style={meuestilo.buttonText}>Dividir</Text>
        </Pressable>

        <Pressable
          onPress={multiplicar}
          onLongPress={() => alert("clique simples da proxima vez")}
          style={meuestilo.buttonMul}
        >
          <Text style={meuestilo.buttonText}>Multiplicar</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
