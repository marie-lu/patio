import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import patio from '../assets/patio.jpg'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>
      Find the nearest bar with outdoor seating!
      </Text>
      <Image source={patio} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
    alignSelf: "center"
  },
  intro: {
    color: '#15E6FD',
    fontSize: 25,
    marginTop: 100,
    marginHorizontal: 20,
    textAlign: 'center'
  }
});
