import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './MainTabNavigator';
import { AuthScreen } from '../screens/AuthScreen';
import { UserContext } from '../contexts/userContext';

export const AppNavigator = () => {
  // const { user } = useContext(UserContext);
  const user = 123;

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
}