import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/globalstyle';

export const NuevoCliente = () => {
  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  // almacena el cliente en la BD
  const guardarCliente = async () => {
    // validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }

    // generar el cliente
    const cliente = {nombre, telefono, empresa, correo};
    console.log(cliente);

    // limpiar el form (opcional)
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Client's name"
        onChangeText={(texto) => setNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Client's phone"
        placeholder="13131414"
        onChangeText={(texto) => setTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Client's email"
        placeholder="correo@correo.com"
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Company"
        placeholder="Company"
        onChangeText={(texto) => setEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />
      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>
      <Portal>
        <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlerta(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});
