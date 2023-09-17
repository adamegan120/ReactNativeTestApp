import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { DescriptionRow, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

interface DestinationSearchProps {}

const DestinationSearch: React.FC<DestinationSearchProps> = () => {
  const [originPlace, setOriginPlace] = useState<any>(null);
  const [destinationPlace, setDestinationPlace] = useState<any>(null);
  const apiKey = "AIzaSyAxLAXyoaqk6hOee5phhuZO1jjhbB3QzLw";

  // const navigation = useNavigation<any>();

  // const checkNavigation = () => {
  //   if (originPlace && destinationPlace) {
  //     navigation.navigate('SearchResults', {
  //       originPlace,
  //       destinationPlace,
  //     })as never;
  //   }
  // };



  // useEffect(() => {
  //   checkNavigation();
  // }, [originPlace, destinationPlace]);

  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data: any, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: apiKey,
            language: 'en',
          }}
          renderRow={(data: any) => <PlaceRow data={data} />}
          renderDescription={(description : DescriptionRow ) => description as any}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data: any, details = null) => {
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: apiKey,
            language: 'en',
          }}
          renderRow={(data: any) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;