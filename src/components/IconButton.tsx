import React from 'react';
import { StyleSheet, GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  iconName: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const SIZE = 56;

export const IconButton: React.FC<Props> = ({
  iconName,
  color = "#000",
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Feather name={iconName} color={color} size={32} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  }
});