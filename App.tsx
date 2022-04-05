import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { AppProvider } from './src/hooks';

import defaultTheme from './src/global/styles/themes/defaultTheme';

import { AppRoutes } from './src/routes/app.routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
};

export { App };
