import React from 'react';
import Home from './Home'
import Loading from './Loading'
import {fetchData, fetchLocation} from '../api'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class Patio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationLoading: true,
      dataLoading: true,
      location: {},
      dataSource: {}
    }
    this.pressHandler = this.pressHandler.bind(this)
  }

  componentDidMount(){
    fetchLocation()
  }

  pressHandler() {

    fetchData()

    if(this.state.dataLoading) {
      return(
        <Loading />
      )
    }
    return(
      <View>
        {this.state.dataSource.businesses.map(business => {
          return <View><Text style={styles.intro}>{business.name}</Text></View>
        })}
      </View>
    )
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Home />
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