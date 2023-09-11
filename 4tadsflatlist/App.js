import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    nome: "Diego",
    idade: 29,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    nome: "Jenifer",
    idade: 26,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    nome: "Endrio",
    idade: 24,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d767",
    title: "Fourth Item",
    nome: "Pedro",
    idade: 20,
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={meuestilo.item}>
      <Text style={meuestilo.id}>{item.id}</Text>
      <Text style={meuestilo.title}>{item.title}</Text>
      <Text style={[meuestilo.title, meuestilo.cor]}>{item.nome}</Text>
      <Text style={[meuestilo.title, meuestilo.cor]}>{item.idade}</Text>
    </View>
  );

  return (
    <SafeAreaView style={meuestilo.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        // item é o banco de dados segmentado por id
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "blue",
  },
  cor: {
    color: "red",
  },
});

export default App;
