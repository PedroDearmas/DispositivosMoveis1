import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  let resultado = 0;

  const soma = () => {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    alert("O resultado é " + resultado);
  };
  const subtrair = () => {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    alert("O resultado é " + resultado);
  };
  const dividir = () => {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    alert("O resultado é " + resultado);
  };
  const multiplicar = () => {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    alert("O resultado é " + resultado);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Digite Valor 1"
        keyboardType="numeric"
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
      ></TextInput>

      <TextInput
        style={styles.inputs}
        placeholder="Digite Valor 2"
        keyboardType="numeric"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
      ></TextInput>

      <View style={styles.botao}>
        <Button title="Somar" onPress={soma}></Button>
        <Button title="Subtrair" onPress={subtrair}></Button>
        <Button title="Dividir" onPress={dividir}></Button>
        <Button title="Multiplicar" onPress={multiplicar}></Button>
      </View>

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
  },
  inputs: {
    marginBottom: "3%",
  },
  botao: {},
});
