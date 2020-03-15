import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function List(props) {
  return (
    <View>
      {props.dataSource.businesses.map(business => {
        return <View><Text style={styles.intro}>{business.name}</Text></View>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 33,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    marginVertical: 50,
    textAlign: 'center'
  },
  button: {
    marginBottom: 50,
    marginTop: 20,
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  }
});