import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function Home() {
  const [value, setValue] = useState('inicio');

  return (
    <ScrollView contentContainerStyle={{padding: 20,backgroundColor: '#fff',paddingTop: 20,}}>
      <Text style={{fontSize: 26,fontWeight: 'bold', marginBottom: 20,}} >
        Home
      </Text>

      <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginBottom: 20, }}>
        <Button
          mode={value === 'inicio' ? 'contained' : 'outlined'}
          onPress={() => setValue('inicio')}
          style={{ flex: 1, marginHorizontal: 4, borderColor: '#dc8fbeff',backgroundColor: value === 'inicio' ?
           '#dc8fbeff' : 'transparent'}}
          labelStyle={{ color: value === 'inicio' ? 'white' : '#dc8fbeff',}}
        >
          Inicio
        </Button>

        <Button 
         mode={value === 'buscar' ? 'contained' : 'outlined'}
         onPress={() => setValue('buscar')}
         style={{flex: 1,marginHorizontal: 4, borderColor: '#dc8fbeff', backgroundColor: value === 'buscar' ? 
          '#dc8fbeff' : 'transparent'}}
          labelStyle={{ color: value === 'buscar' ? 'white' : '#dc8fbeff',}}
        >
         Buscar
        </Button>
      </View>

      <Image
        source={require('../images/Manicurista.png')}
        style={{width: '100%',height: 250,marginBottom: 24,}}
        resizeMode="contain"
      />

      <View
        style={{backgroundColor: '#f5f5f5',padding: 16,borderRadius: 12,marginBottom: 20,shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4,elevation: 2}}
      >
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>
         Manicure profesional
        </Text>
        <Text style={{ fontSize: 14,color: '#555',marginBottom: 8}}>
          Servicio de manicure con técnicas modernas, decoración personalizada y productos de alta calidad para el cuidado de tus manos.
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Button mode="text" onPress={() => {}} labelStyle={{ color: '#dc8fbeff' }}>
            Ver más
          </Button>
        </View>
      </View>

      <View
        style={{backgroundColor: '#f5f5f5',padding: 16, borderRadius: 12,marginBottom: 20,shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },shadowOpacity: 0.2, shadowRadius: 4, elevation: 2
        }}
      >
        <Text
          style={{ fontSize: 18,fontWeight: 'bold',marginBottom: 8}}
        >
          Spa de uñas
        </Text>
        <Text
          style={{fontSize: 14,color: '#555',marginBottom: 8}}
        >
          Relájate y disfruta de tratamientos de spa para uñas, hidratación profunda, exfoliación y masajes para una experiencia completa de belleza.
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Button
            mode="text"
            onPress={() => {}}
            labelStyle={{ color: '#dc8fbeff' }}
          >
            Ver más
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}