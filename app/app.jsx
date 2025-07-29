import { View } from 'react-native';
import { ScrollView } from 'react-native';

import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import { useState } from 'react';
import { router, Stack } from 'expo-router';
import { List } from 'react-native-paper';

export default function App() {


  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f9f8ff',
        },
      }} />

      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Autor"
            left={props => <List.Icon {...props} icon="account-circle" color='#dc8fbeff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("autor")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Inicio de sesión"
            left={props => <List.Icon {...props} icon="lock" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("inicio-sesion")}
          />


          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Pantalla principal"
            left={props => <List.Icon {...props} icon="home" color='#7ca9f3' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("pantalla-principal")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Lista de elementos"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#f36e9c' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-elementos")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Detalle de elemento"
            left={props => <List.Icon {...props} icon="account" color='#a18cf0' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("detalle-elemento")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Formulario de registro"
            left={props => <List.Icon {...props} icon="cog" color='#bdbdbd' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("formulario-registro")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Configuración"
            left={props => <List.Icon {...props} icon="account" color='#bdbdbd' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("configuracion")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Perfil de usuario"
            left={props => <List.Icon {...props} icon="account" color='#bdbdbd' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("perfil-usuario")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 24, marginBottom: 10 }}
            title="Lista de servicios"
            left={props => <List.Icon {...props} icon="book" color='#7ca9f3' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-servicios")}
          />


        </View>
      </ScrollView>
    </>
  );

}
