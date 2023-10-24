import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IfsulMaps from "./Ifsul";
import IdealMaps from "./Ideal";
import UnipampaMaps from "./Unipampa";
import TodosMaps from "./Todos";
import Listas from "./Lista";

function IfsulMa() {
  return <IfsulMaps></IfsulMaps>;
}

function IdealMa() {
  return <IdealMaps></IdealMaps>;
}
function UnipampaMa() {
  return <UnipampaMaps></UnipampaMaps>;
}
function TodosMa() {
  return <TodosMaps></TodosMaps>;
}
function Lista() {
  return <Listas></Listas>;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Ifsul">
        <Drawer.Screen name="Ifsul" component={IfsulMa} />
        <Drawer.Screen name="Unipampa" component={UnipampaMa} />
        <Drawer.Screen name="Ideau" component={IdealMa} />
        <Drawer.Screen name="Todos" component={TodosMa} />
        <Drawer.Screen name="Listas" component={Lista} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
