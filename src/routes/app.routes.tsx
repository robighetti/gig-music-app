import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
};

export { AppRoutes };
