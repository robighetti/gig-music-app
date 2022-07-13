import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Agenda } from '../screens/Agenda';
import { Profile } from '../screens/Profile';
import { Cadastro } from '../screens/Cadastro';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.text,
        labelPosition: 'below-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 10,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Screen
        name="Home"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="supervised-user-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-business" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export { AppRoutes };
