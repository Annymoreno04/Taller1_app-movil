import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function FormularioRegistro() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30 }}>Registro</Text>

        <Text variant="titleMedium" style={{marginBottom: 7}}>Nombre</Text>
        <TextInput
          left={<TextInput.Icon icon="account" color="#c898b6" />}
          style={{ marginBottom: 10, backgroundColor: 'white' }}
          autoCapitalize="none"
          mode='outlined'
          theme={{ roundness: 25 }}
        />

        <Text variant="titleMedium" style={{marginBottom: 7}}>Correo electrónico</Text>
        <TextInput
          left={<TextInput.Icon icon="email" color="#c898b6" />}
          style={{ marginBottom: 10, backgroundColor: 'white' }}
          autoCapitalize="none"
          mode='outlined'
          theme={{ roundness: 25 }}
        />

        <Text variant="titleMedium" style={{marginBottom: 7}}>Contraseña</Text>
        <TextInput
          left={<TextInput.Icon icon="lock" color="#c898b6" />}
          right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
          value={password}
          onChangeText={setPassword}
          style={{ marginBottom: 10, backgroundColor: 'white' }}
          autoCapitalize="none"
          mode='outlined'
          theme={{ roundness: 25 }}
          secureTextEntry={!showPassword}
        />

        <Text variant="titleMedium" style={{marginBottom: 7}}>Confirmar contraseña</Text>
        <TextInput
          left={<TextInput.Icon icon="lock" color="#c898b6" />}
          right={<TextInput.Icon icon={showConfirmPassword ? "eye-off" : "eye"} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={{ backgroundColor: 'white' }}
          autoCapitalize="none"
          mode='outlined'
          theme={{ roundness: 25 }}
          secureTextEntry={!showConfirmPassword}
        />

        <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 30, marginTop: 20, paddingVertical: 5 }} labelStyle={{ fontSize: 18 }}>
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
}
