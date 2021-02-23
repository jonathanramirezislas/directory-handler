import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/globalstyle';
import axios from 'axios';
import {connection} from './../shared/shared';

export const DetallesCliente = ({navigation, route}) => {
  const {setConsultarAPI} = route.params;
  const {nombre, telefono, correo, empresa, id} = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text: 'Si, Eliminar', onPress: () => eliminarContacto()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };

  const eliminarContacto = async () => {
    // console.log(url);
    try {
      await axios.delete(connection + `/${id}`);
    } catch (error) {
      console.log(error);
    }
    // Redireccionar
    navigation.navigate('Inicio');
    // volver a consultar la api
    setConsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo}</Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Teléfono: <Subheading>{telefono}</Subheading>{' '}
      </Text>

      <Button
        style={styles.boton}
        mode="contained"
        icon="cancel"
        onPress={() => mostrarConfirmacion()}>
        Eliminar Cliente
      </Button>

      <FAB
        icon="pencil"
        style={globalStyles.fab}
        onPress={() =>
          navigation.navigate('NuevoCliente', {
            cliente: route.params.item,
            setConsultarAPI,
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});
