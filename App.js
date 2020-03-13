import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/home'
import Results from './components/Results'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Home />
    //   <Result />
    //   <TouchableOpacity
    //     onPress={() => alert('Hello, world!')}
    //     style={styles.button}>
    //     <Text style={styles.buttonText}>Search!</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 33,
//     backgroundColor: '#050505',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   intro: {
//     color: '#15E6FD',
//     fontSize: 25,
//     marginHorizontal: 20,
//     textAlign: 'center'
//   },
//   button: {
//     backgroundColor: '#15E6FD',
//     padding: 20,
//     borderRadius: 5
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#050505',
//   }, 
// });
