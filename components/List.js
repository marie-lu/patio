import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

export default function List(props) {

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data.businesses} 
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>} 
      />
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
  text: {
    color: '#ffffff',
    fontSize: 25
  }
});