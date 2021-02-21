import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Inicio} from './views/Inicio';
import {DetallesCliente} from './views/DetallesCliente';
import {NuevoCliente} from './views/NuevoCliente';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio}>
            <Stack.Screen
              name="NuevoCliente"
              component={NuevoCliente}
              options={{title: 'Nuevo cliente'}}></Stack.Screen>
            <Stack.Screen
              name="DetallesCliente"
              component={DetallesCliente}
              options={{title: 'Detalles cliente'}}></Stack.Screen>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
