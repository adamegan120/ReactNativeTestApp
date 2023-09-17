import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface CovidMessageProps {}


const CovidMessage: FC<CovidMessageProps> = () => (
  <View style={styles.container}>
  <Text style={styles.title}>Travel Only If necessary</Text>
  <Text style={styles.text}>Upgrading this package,Upgrading this package ,Upgrading this package </Text>
  <Text style={styles.learnMore}>LearnMore</Text>
  </View>

);

export default CovidMessage;
