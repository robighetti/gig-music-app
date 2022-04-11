import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { AppProvider } from './src/hooks';
import { Routes } from './src/routes';

import defaultTheme from './src/global/styles/themes/defaultTheme';

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
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export { App };
