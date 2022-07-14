import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/Components/screens/Dashboard';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style='dark'/>
        <Dashboard/>
      </ThemeProvider>
    </>
  )
}