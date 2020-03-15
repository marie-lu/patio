import React from 'react';
import Home from './Home'
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';


export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationLoading: true,
      dataLoading: true,
      location: {},
      dataSource: {}
    }
  }

  componentDidMount(){
  }

  render() {

    if(this.state.locationLoading || this.state.dataLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#15E6FD" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Home />
        {/* {this.state.dataSource.businesses.map(business => {
          return <View><Text style={styles.intro}>{business.name}</Text></View>
        })} */}
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Search!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 33,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    color: '#15E6FD',
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