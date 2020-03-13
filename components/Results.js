import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Result() {
  return (
    <View>
      <Text style={styles.intro}>
      I'm some text!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    color: '#15E6FD',
    fontSize: 25,
    marginVertical: 50,
    textAlign: 'center'
  }
});
