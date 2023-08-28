import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>!! É o Inter !!</Text>
      <Text style={styles.textonome}>Pedro Araujo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 40,
    color: "white",
  },
  textonome: {
    fontSize: 40,
    color: "black",
  },
});
