import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dashboard } from './src/Components/screens/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <Dashboard/>
    </>
  )
}