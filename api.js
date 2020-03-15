import {YELP_API_KEY, GOOGLE_API_KEY} from './keys'

export const fetchLocation = () => {
  const requestOptions = {method: 'POST'};

  return fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({...this.state, 
        locationLoading: false,
        location: responseJson
      })
  })
  .catch((error) =>{
    console.error(error);
  });
}

export const fetchData = (lat, lng) => {
  const requestOptions = {headers: {
    "Authorization":`${YELP_API_KEY}`,
    "Access-Control-Allow-Origin":"http://192.168.1.8:19006/"
  }};

  return fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=outdoor-space&latitude=${lat}&longitude=${lng}`, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({...this.state,
        dataLoading: false,
        dataSource: responseJson,
    }, function(){
    });

  })
  .catch((error) =>{
    console.error(error);
  });

}