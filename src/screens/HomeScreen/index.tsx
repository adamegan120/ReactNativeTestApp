import React from 'react';
import {View, Text} from 'react-native';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import CovidMessage from '../../components/CovidMessage/CovidMessage';
import HomeMap from '../../components/HomeMap';

interface Props {
  name: string;
}
const HomeScreen: React.FC<Props> = ({name}) => {
  return (
    <View>
      <CovidMessage></CovidMessage>
      <HomeSearch></HomeSearch>
    </View>
  );
};

export default HomeScreen;
