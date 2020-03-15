import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";

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

    return (
      <View style={{width: '100%', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.parentHr}/>
        {
          this.state.expanded &&
          <View style={styles.child}>
            <Text style={styles.info}>{item.location.address1}</Text>    
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
    info: {
      fontSize: 16,
      color: '#050505'
    },
    row:{
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      height: 50,
      backgroundColor: '#2196F3',
      marginTop: 10
    },
    parentHr:{
      flex: 1, 
      height:5
    },
    child:{
      flex: 1,
      padding:15,
      backgroundColor: "#2196F3"
    }
    
});