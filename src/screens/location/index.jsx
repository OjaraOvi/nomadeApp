// @ts-ignore
import * as Location from 'expo-location';
import { View, Button, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { MapPreview } from '../../components/index';
import { insertPlace } from '../../db/index';

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
      timeout: 2000,
    });
    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

  const onHandleSaveLocation = async () => {
    await insertPlace('prueba', 'prueba', 'prueba');
  };

  const Footer = () =>
    pickedLocation && (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onHandleSaveLocation}>
          <Text style={styles.buttonConfirmText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    );
  return (
    <ScrollView style={styles.container}>
      <View>
        <MapPreview location={pickedLocation} style={styles.preview}>
          <Text>No hay ubicacion seleccionada</Text>
        </MapPreview>
        <Button title="Selecionar ubicación" onPress={onHandlerGetLocation} />
      </View>

      <Footer />
    </ScrollView>
  );
};

export default LocationSelector;
