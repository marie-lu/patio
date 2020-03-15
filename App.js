import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home'
import Results from './components/Results'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Results />
    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName="Home">
    //     <Tab.Screen
    //       name="Home"
    //       component={Home}
    //     />
    //     <Tab.Screen
    //       name="Results"
    //       component={Results}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  )
}