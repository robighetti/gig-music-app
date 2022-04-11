import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { LoginRoute } from './login.route';
import { AppRoutes } from './app.routes';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <LoginRoute />}
    </NavigationContainer>
  );
};

export { Routes };
