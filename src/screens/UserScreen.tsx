import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { Form } from '../components/Form';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Form value={""} label={""} onChangeText={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})