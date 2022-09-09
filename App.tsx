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
import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  //se o fonts loaded for false
  if(!fontsLoaded){
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style='light'/>
        <CategorySelect/>
      </ThemeProvider>
    </>
  )
}