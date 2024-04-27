import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Personal from '../Screens/Personal';
import Business from '../Screens/Business';

const Tab = createBottomTabNavigator();

const BottomRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Tab.Screen name="Personal" component={Personal} />
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="News" component={Home} />
    </Tab.Navigator>
  )
}

export default BottomRoute