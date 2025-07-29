
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, Searchbar, Button, Avatar } from 'react-native-paper';

const items = [
  {
    id: 1,
    title: 'Lampara LED SUN C3 plus',
    description: '$99.000',
    image: require('../images/elemento1.png'),
  },
  {
    id: 2,
    title: 'Masglo - Ejecutiva 13,5 mg',
    description: '$9.990',
    image: require('../images/elemento2.png'),
  },
  {
    id: 3,
    title: 'Caja Mini piedras x 6',
    description: '$10.500',
    image: require('../images/elemento3.png'),
  },
  {
    id: 4,
    title: 'Caja Foil marmoleado',
    description: '$19.990',
    image: require('../images/elemento4.png'),
  },
  {
    id: 5,
    title: 'Caja Organizadora',
    description: '$17.000',
    image: require('../images/elemento5.png'),
  },
  {
    id: 6,
    title: 'Polvo acrílico',
    description: '$13.900',
    image: require('../images/elemento6.png'),
  },
];

export default function ListaElementos() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Searchbar style={{ marginBottom: 16 }} placeholder="Buscar" />

        {items.map(item => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginBottom: 16, padding: 12, elevation: 2 }}>
            <Avatar.Image source={item.image} size={100} style={{ backgroundColor: '#3b5998', marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text variant="bodySmall" style={{ color: '#444' }}>{item.description}</Text>
            </View>
            <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 24, marginLeft: 8, marginTop: 20}} labelStyle={{ color: 'white' }}>
              Ver detalle
            </Button>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
