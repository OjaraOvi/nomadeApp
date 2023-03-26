// @ts-ignore
import * as Location from 'expo-location';
import { View, Button, Alert, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { MapPreview } from '../../components/index';

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No hay permisos para acceder a la ubicación');
      return false;
    }
    return true;
  };
  const onHandlerGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <MapPreview location={pickedLocation} style={styles.preview}>
          <Text>No hay ubicacion seleccionada</Text>
        </MapPreview>
        <Button title="Selecionar ubicación" onPress={onHandlerGetLocation} />
        <Button title="Selecionar desde mapa" onPress={() => null} />
      </View>
    </ScrollView>
  );
};

export default LocationSelector;
