import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("30");
  const [valor2, setValor2] = useState("30");
  let resultado = 0;

  const soma = () => {
    resultado = valor1 + valor2;
    alert("O resultado é;" + resultado);
  };

  return (
    <View style={styles.container}>
      <Text></Text>
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
});
