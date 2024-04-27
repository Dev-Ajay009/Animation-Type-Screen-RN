import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import Home from '../Screens/Home';
import BottomRoute from './BottomRoute';
import NewDetails from '../Screens/NewDetails';
import ProfilePage from '../Screens/ProfilePage';

const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="BottomRoute" component={BottomRoute} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="NewDetails" component={NewDetails}/>
    <Stack.Screen name="ProfilePage" component={ProfilePage}/>

  </Stack.Navigator>
  )
}

export default AuthRoute