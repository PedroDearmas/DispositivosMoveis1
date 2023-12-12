import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Camisetas from './src/screens/Camisetas';
import Calcoes from './src/screens/Calcoes';
import Tenis from './src/screens/Tenis';
import Acessorios from './src/screens/Acessorios';
import Confirmacao from './src/screens/Confirmacao';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camisetas" component={Camisetas} />
        <Drawer.Screen name="Calcoes" component={Calcoes} />
        <Drawer.Screen name="Tenis" component={Tenis} />
        <Drawer.Screen name="Acessorios" component={Acessorios} />
        <Drawer.Screen name="Agradecimento" component={Confirmacao}
          options={{
            drawerItemStyle: {
              display: 'none'
            }
          }} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

