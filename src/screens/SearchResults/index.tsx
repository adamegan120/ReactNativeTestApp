import React, { useState } from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import CovidMessage from '../../components/CovidMessage/CovidMessage';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes/UberTypes';

interface Props {
}
const onSubmit = async () => {
   console.log("hi")
}

const SearchResults: React.FC<Props> = () => {
  
  const typeState = useState("InitalType");
  return (
    <View style={{display:'flex'}}>
      <View style={{height:Dimensions.get('window').height - 400}}>
      <HomeMap></HomeMap>
      </View>
   
  <View style={{height:300}}>
  <UberTypes typeState={typeState} onSubmit={onSubmit} />
  </View>
   
    </View>
  );
};

export default SearchResults;
