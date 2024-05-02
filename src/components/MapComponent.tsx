// MapsComponent.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface MapsComponentProps {
  userLocation: {
    latitude: number;
    longitude: number;
  } | null; // Make userLocation prop nullable
}

const DESTINATION_LATITUDE = 0; // Replace with actual destination latitude
const DESTINATION_LONGITUDE = 0; // Replace with actual destination longitude
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key

const MapsComponent: React.FC<MapsComponentProps> = ({userLocation}) => {
  if (!userLocation) {
    return null; // Return null if userLocation is not defined
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={userLocation}
          destination={{
            latitude: DESTINATION_LATITUDE,
            longitude: DESTINATION_LONGITUDE,
          }}
          strokeWidth={3}
          strokeColor="blue"
          apikey={API_KEY} // Add the apikey prop here
        />
        <Marker coordinate={userLocation} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsComponent;
