import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const CampoContrasena = () => {
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  return (
    <TextInput
      label="Contraseña"
      value={contrasena}
      onChangeText={setContrasena}
      left={<TextInput.Icon icon="lock" color="#c898b6" />}
      right={
        <TextInput.Icon
          icon={mostrarContrasena ? "eye-off" : "eye"}
          onPress={() => setMostrarContrasena(!mostrarContrasena)}
        />
      }
      secureTextEntry={!mostrarContrasena}
      style={{ marginBottom: 5, backgroundColor: 'white', borderRadius: 20 }}
      mode="outlined"
      theme={{ roundness: 20 }}
    />
  );
};

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>INICIAR SESIÓN</Text>

        <TextInput
          label="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          left={<TextInput.Icon icon="email" color='#c898b6'/>}
          style={{ marginBottom: 15, backgroundColor: 'white'}}
          autoCapitalize="none"
          mode='outlined'
          theme={{ roundness: 20 }}
        />
        <CampoContrasena />
        <Text style={{ color: '#a18cf0', textAlign: 'right', marginBottom: 20, marginTop: 5, fontSize: 13 }}>
          ¿Olvidaste tu contraseña?
        </Text>

        <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 30, marginBottom: 20, paddingVertical: 5 }} labelStyle={{ fontWeight: 'bold', fontSize: 18 }}>
          INICIAR SESIÓN
        </Button>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#bbb' }} />
        <Text style={{ marginHorizontal: 8, color: '#bbb', fontWeight:'bold' }}>O</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: '#bbb' }} />
        </View>

        <TextInput
          label="Iniciar sesión con Google"
          mode="outlined"
          disabled={true}
          left={<TextInput.Icon icon="google" />}
          style={{ backgroundColor: 'white' }}
          theme={{  roundness: 20,
            colors: { text: '#000' } }}
        />

        <TextInput
          label="Iniciar sesión con Apple"
          mode="outlined"
          disabled={true}
          left={<TextInput.Icon icon="apple" />}
          style={{ marginBottom: 5, backgroundColor: 'white' }}
          theme={{ roundness: 20,
             colors: { text: '#000' } }}
        />

      </View>
    </ScrollView>
  );
}


