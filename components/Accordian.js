import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet} from "react-native";

export default class Accordian extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      expanded : false
    }
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand(){
    this.setState({expanded : !this.state.expanded})
  }

  render() {
    const { item } = this.props

    let imageUrl = {uri: `${item.image_url}`}

    return (
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
          <Text style={styles.name}>{item.name}</Text>
          {
            this.state.expanded ? <Text style={styles.icon}>-</Text> :
            <Text style={styles.icon}>+</Text>
          }
        </TouchableOpacity>
        <View style={styles.parentHr}/>
        {
          this.state.expanded &&
          <View style={styles.child}>
            <View style={styles.details}>
              <Text style={styles.info}>{item.location.address1}</Text>
              <Text style={styles.info}>{item.display_phone}</Text>
              <Text style={styles.info}>Price: {item.price}</Text>
              <Text style={styles.info}>Rating: {item.rating} out of 5</Text>
            </View> 
            <Image source={imageUrl} style={{height: 150, width: 150, margin: 5}} />   
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    name:{
      fontSize: 18,
      fontWeight:'bold',
      color: '#050505',
      textAlign: 'center'
    },
    icon: {
      fontSize: 24,
      fontWeight:'bold',
      color: '#050505',
      textAlign: 'center'
    },
    info: {
      fontSize: 16,
      color: '#050505'
    },
    row:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: '100%',
      height: 40,
      backgroundColor: '#05BAC5',
      marginTop: 12,
      paddingHorizontal: 10
    },
    parentHr:{
      flex: 1, 
      height:5
    },
    child:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      backgroundColor: "#12D5EB"
    },
    details: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "flex-start"
    }
    
});