import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");

  const mostraN = () => {
    alert("Nome: " + nome);
  };

  return (
    <View style={meuestilo.container}>
      <View style={meuestilo.inputContainer}>
        <TextInput
          style={meuestilo.input}
          placeholder="Digite o Nome"
          onChangeText={(nome) => setNome(nome)}
          value={nome}
        ></TextInput>
      </View>

      <TouchableOpacity style={meuestilo.buttonContainer}>
        <Text
          onPress={mostraN}
          onLongPress={() => alert("clique simples da proxima vez")}
          style={[
            meuestilo.button,
            meuestilo.buttonOutline,
            meuestilo.buttonOutlineText,
            meuestilo.buttonText,
          ]}
        >
          Capturar
        </Text>
      </TouchableOpacity>

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
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
