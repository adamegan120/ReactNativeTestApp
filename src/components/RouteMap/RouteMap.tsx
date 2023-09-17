import React, { FC } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const apiKey = "AIzaSyAxLAXyoaqk6hOee5phhuZO1jjhbB3QzLw";

interface RouteMapProps {}

const originLoc = {
  latitude: 28.450627,
  longitude: -16.263045,
};

const destinationLoc = {
  latitude: 28.450127,
  longitude: -16.269045,
};

const RouteMap: FC<RouteMapProps> = () => (
  <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={apiKey}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />
    </MapView>
);

export default RouteMap;
