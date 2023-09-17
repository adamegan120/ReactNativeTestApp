import React, { FC } from 'react';
import { Text, View } from 'react-native';
import typesData from '../../assets/data/types';
import UberTypeRow from '../UberTypeRow/UberTypeRow';
import { Pressable } from 'react-native';

interface UberTypesProps {
  typeState: [string, React.Dispatch<React.SetStateAction<string>>];
  onSubmit: () => void;
}

const UberTypes: FC<UberTypesProps> = ({typeState,onSubmit}) => {
  const [selectedType, setSelectedType] = typeState;


  return (
    <View>
    {typesData.map((type) => (
      <UberTypeRow
        type={type}
        key={type.id}
        isSelected={type.type === selectedType}
        onPress={() => setSelectedType(type.type)}
      />
    ))}
  
    <Pressable onPress={onSubmit} style={{
      backgroundColor: 'black',
      padding: 10,
      margin: 10,
      alignItems: 'center',
    }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        Confirm Uber
      </Text>
    </Pressable>
  </View>
  );
};


export default UberTypes;
