import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Camisetas from './src/screens/Camisetas';
import Home from './src/screens/Home';
import Calções from './src/screens/Calções';
import Tênis from './src/screens/Tênis';
import Acessórios from './src/screens/Acessórios';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camisetas" component={Camisetas} />
        <Drawer.Screen name="Calções" component={Calções} />
        <Drawer.Screen name="Tênis" component={Tênis} />
        <Drawer.Screen name="Acessórios" component={Acessórios} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

