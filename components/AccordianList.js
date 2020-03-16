import React from 'react';
import { StyleSheet, View } from 'react-native';
import Accordian from './Accordian'


export default function AccordianList (props) {

  return (
    <View style={styles.container}>
      { 
      props.businesses.map(item => {
        return <View key={item.id} style={{width: '100%', margin: 0}}><Accordian item={item} currentLocation={props.currentLocation}/></View>
      }) 
      }
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0
  }
});