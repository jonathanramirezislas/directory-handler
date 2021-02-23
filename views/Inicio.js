import React,{useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connection} from './../shared/shared';
import globalStyles from '../styles/globalstyle';
import { List, Headline, Button} from 'react-native-paper';
import axios from 'axios';




export const Inicio = ({navigation}) => {
  const [clientes, setClientes] = useState([]);
  const [ consultarAPI, setConsultarAPI ] = useState(true);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get(connection);
        console.log('resultados',resultado)
        setClientes(resultado.data);
        setConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (consultarAPI) {
      obtenerClientesApi();
    }
  }, [consultarAPI]);

  return (
    <View>
        <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente", { setConsultarAPI}) }>
                Nuevo Cliente
        </Button>
      <Headline style={globalStyles.titulo}> { clientes.length > 0 ? "Clientes" : "Aún no hay Clientes" } </Headline>

      <FlatList
        data={clientes}
        keyExtractor={(cliente) => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {
                item,
                guardarConsultarAPI,
              })
            }
          />
        )}
      />
    </View>
  );
};
