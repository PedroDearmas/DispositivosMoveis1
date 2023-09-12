import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const App = () => {
  const CliqueSimples = (item) => {
    if (item.id == "1") {
      Speech.speak("Você clicou em 1", { language: "pt-BR" });
    } else {
      alert("Item clicado" + item.title);
    }
  };

  const CliqueLongo = (item) => {
    alert("Item clicado Longo" + item.title);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <TouchableOpacity
          style={styles.title}
          onLongPress={() => {
            CliqueLongo(item);
          }}
          onPress={() => {
            CliqueSimples(item);
          }}
        >
          <View>
            <Text style={styles.id}>Id: {item.id}</Text>
            <Text style={styles.title}>Title: {item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
