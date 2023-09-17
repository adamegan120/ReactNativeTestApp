import React from "react";
import { View, Text, TextStyle, ViewStyle } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles';

interface PlaceData {
  description?: string;
  vicinity?: string;
}

interface PlaceRowProps {
  data: PlaceData;
}

interface IconProps {
  iconName: string;
  color: string;
}

const PlaceIcon: React.FC<IconProps> = ({ iconName, color }) => (
  <View style={styles.iconContainer}>
    <Entypo name={iconName} size={20} color={color} />
  </View>
);

const PlaceRow: React.FC<PlaceRowProps> = ({ data }) => {
  const isHome = data.description === 'Home';
  const iconProps: IconProps = {
    iconName: isHome ? 'home' : 'location-pin',
    color: 'white',
  };

  return (
    <View style={styles.row}>
      <PlaceIcon {...iconProps} />
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;