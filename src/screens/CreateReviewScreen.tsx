import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { IconButton } from '../components/IconButton';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({ navigation, route}: Props) => {
  const { shop } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton iconName="x" onPress={() => navigation.goBack()} />
      )
    })
  }, [shop])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Create Review Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});