import { View, Text, LogBox } from 'react-native'
import React from 'react'

import AuthRoute from './src/Routes/AuthRoute'
import { NavigationContainer } from '@react-navigation/native'
LogBox.ignoreAllLogs()
const App = () => {
  return (
    <NavigationContainer>
       <AuthRoute />
    </NavigationContainer>
  )
}

export default App