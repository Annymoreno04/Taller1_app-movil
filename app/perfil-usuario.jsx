import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, List, Button, Avatar } from 'react-native-paper';


export default function PerfilUsuario() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Avatar.Image size={150} source={require('../images/profile1.jpg')} style={{ backgroundColor: '#e3eaf1', marginBottom: 20 }} />
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 2 }}>Emilsen Moreno</Text>
        <Text style={{ color: '#607080', marginBottom: 30 }}>emilsenmoreno@gmail.com</Text>

        <View style={{ width: '100%', gap: 10, marginBottom: 20 }}>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, backgroundColor: 'white' }}>
            <List.Item title="Editar perfil" left={props => <List.Icon {...props} icon="pencil" color="#607080" />} />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius:24, backgroundColor: 'white' }}>
            <List.Item title="Notificaciones" left={props => <List.Icon {...props} icon="bell" color="#607080" />} />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, backgroundColor: 'white' }}>
            <List.Item title="Configuración" left={props => <List.Icon {...props} icon="cog" color="#607080" />} />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, backgroundColor: 'white' }}>
            <List.Item title="Ayuda" left={props => <List.Icon {...props} icon="help-circle" color="#607080" />} />
          </View>
        </View>

        <Button mode="text" style={{ marginTop: 10 }} labelStyle={{ color: '#dc8fbeff', fontWeight: 'bold', fontSize: 16 }}>
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}
