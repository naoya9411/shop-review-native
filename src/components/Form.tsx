import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
};

export const Form: React.FC<Props> = ({
  value,
  onChangeText,
  label,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  label: {

  },
  input: {

  }
});