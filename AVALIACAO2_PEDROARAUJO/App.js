import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AceguaMaps from "./Acegua";
import MeloMaps from "./Melo";
import BageMaps from "./Bage";

function AceguaMa() {
  return <AceguaMaps></AceguaMaps>;
}

function MeloMa() {
  return <MeloMaps></MeloMaps>;
}
function BageMa() {
  return <BageMaps></BageMaps>;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Acegua">
        <Drawer.Screen name="Acegua" component={AceguaMa} />
        <Drawer.Screen name="Bage" component={BageMa} />
        <Drawer.Screen name="Melo" component={MeloMa} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
