import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import IfsulMaps from "./Ifsul";
import IdealMaps from "./Ideal";
import UnipampaMaps from "./Unipampa";

function IfsulMa() {
  return <IfsulMaps></IfsulMaps>;
}

function IdealMa() {
  return <IdealMaps></IdealMaps>;
}
function UnipampaMa() {
  return <UnipampaMaps></UnipampaMaps>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Ifsul"
          component={IfsulMa}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="black" />,
          }}
        />
        <Tab.Screen
          name="Ideal"
          component={IdealMa}
          options={{
            tabBarIcon: () => <Icon name="settings" size={30} color="black" />,
          }}
        />
        <Tab.Screen
          name="Unipampa"
          component={UnipampaMa}
          options={{
            tabBarIcon: () => (
              <Icon name="calculator" size={30} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
