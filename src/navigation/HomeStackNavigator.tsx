import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
import { RootStackParamList } from "../types/navigation";
import { CreateReviewScreen } from "../screens/CreateReviewScreen";

const MainStack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => (
  <MainStack.Navigator
    screenOptions={{
      headerTintColor: "#000",
    }}
  >
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Shop" component={ShopScreen} />
  </MainStack.Navigator>
);

export const HomeStackNavigator = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={MainStackNavigator}
      options={{headerShown: false}}
    />
    <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
  </RootStack.Navigator>
);