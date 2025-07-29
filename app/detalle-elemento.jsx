
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, Button, Avatar } from 'react-native-paper';

import elementoImg from '../images/elemento1.png'; 

export default function DetalleElemento() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <View style={{ backgroundColor: '#dc8fbeff', borderRadius: 24, padding: 24, marginBottom: 24 }}>
          <Avatar.Image source={elementoImg} size={100} style={{ backgroundColor: 'transparent' }} />
        </View>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 0, textAlign: 'left', alignSelf: 'flex-start' }}>Lampara LED SUN C3 plus</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 12, alignSelf: 'flex-start' }}>$99.000</Text>
        <View style={{ alignSelf: 'flex-start', marginBottom: 24 }}>
          <Text style={{ color: '#222', textAlign: 'left', marginBottom: 8 }}>Lampara UV LED 54 watts.</Text>
          <Text style={{ color: '#222', textAlign: 'left', marginBottom: 8 }}>Secado extra rápido.</Text>
          <Text style={{ color: '#222', textAlign: 'left', marginBottom: 8 }}>Seca cualquier tipo de gel.</Text>
          <Text style={{ color: '#222', textAlign: 'left', marginBottom: 8 }}>Temporizador.</Text>
          <Text style={{ color: '#222', textAlign: 'left', marginBottom: 8 }}>Hermoso diseño.</Text>
        </View>
        <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 24, width: '100%' }} labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Acción
        </Button>
      </View>
    </ScrollView>
  );
}
