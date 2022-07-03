import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { LoginRoute } from './login.route';
import { AppRoutes } from './app.routes';
import { Dashboard } from '../screens/Dashboard';
import { Profile } from '../screens/Profile';
import { Agenda } from '../screens/Agenda';
import { Cadastro } from '../screens/Cadastro';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <Agenda />}
    </NavigationContainer>
  );
};

export { Routes };
