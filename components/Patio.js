import React from 'react';
import Home from './Home'
import Loading from './Loading'
import AccordianList from './AccordianList'
import {YELP_API_KEY, GOOGLE_API_KEY} from '../keys'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class Patio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPress: false,
      dataLoading: true,
      location: {},
      dataSource: {}
    }
    this.fetchLocation = this.fetchLocation.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.pressHandler = this.pressHandler.bind(this)
  }

  fetchLocation() {
    const requestOptions = {method: 'POST'};
  
    return fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({...this.state,
          location: responseJson.location
        })
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  fetchData(lat, lng){
    const requestOptions = {headers: {
      "Authorization":`${YELP_API_KEY}`,
      "Access-Control-Allow-Origin":"http://192.168.1.8:19006/"
    }};
  
    return fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=outdoor_seating&latitude=${lat}&longitude=${lng}&sort_by=distance&limit=10&open_now=true&categories=bars,restaurants`, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({...this.state,
          dataSource: responseJson,
          dataLoading: !this.state.dataLoading,
      }, function(){
      });
  
    })
    .catch((error) =>{
      console.error(error);
    });
  
  }

  pressHandler(){
    this.setState({...this.state, searchPress: !this.state.searchPress})
    this.fetchData(this.state.location.lat, this.state.location.lng)
  }

  componentDidMount(){
    this.fetchLocation()
  }

  render() {
    let search = <Home />;

    if (this.state.searchPress && this.state.dataLoading){
      search = <Loading />
    }

    if (this.state.searchPress && !this.state.dataLoading){
      search = <AccordianList businesses={this.state.dataSource.businesses} />
    }

    return (
      <View style={styles.container}>
        {search}
        <TouchableOpacity onPress={this.pressHandler}>
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
    flex: 1,
    width: '100%',
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intro: {
    color: '#03F5CD',
    fontSize: 25,
    marginVertical: 50,
    textAlign: 'center'
  },
  button: {
    marginBottom: 50,
    marginTop: 25,
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20
  }
});