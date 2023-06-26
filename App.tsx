import React from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider} from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'; 

import theme from './src/global/styles/theme';

import { AuthContextProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';
import { useAuth } from './src/hooks/useAuth';

export default function App() {
  const {loadingUser} = useAuth()

  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded && !loadingUser){
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style='light'/>
        <AuthContextProvider>
          <Routes/>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}