import React from 'react';
import { useTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';

const { Navigator, Screen } = createStackNavigator();

const LoginRoute: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export { LoginRoute };
