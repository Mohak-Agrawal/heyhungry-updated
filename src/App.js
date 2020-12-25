import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import AuthStack from './routes/AuthStack'
import AppStack from './routes/AppStack'
import SplashScreen from './screens/SplashScreen/SplashScreen'

const App = () => {
  return (

      <SplashScreen/>
  )
}

export default App
