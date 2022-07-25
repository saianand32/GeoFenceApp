import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

import GetLocation from 'react-native-get-location';
import axios from 'axios';
let strGlobal = "";
const url = 'https://9733-210-212-203-67.in.ngrok.io/livelocationtemp/live'



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  location: {
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginBottom: 8,
  },
});

export default class App extends Component {
  state = {
    location: null,
    loading: false,
    str: strGlobal
  };



  _requestLocation = async(teste = '') => {
    this.setState({loading: true, location: null,str: strGlobal});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(async location => {
        this.setState({
          location,
          loading: false,
          str: strGlobal
        });

        try {
 
          let temp = this.state
          let obj = (JSON.parse(JSON.stringify(temp.location)))
          let livelati = obj.latitude.toString();
          let livelongi = obj.longitude.toString();
          let resp = await axios.post(url,{livelat:livelati,livelon:livelongi});
        
        } catch (error) {
          console.log(error)
        }
        
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
          str: strGlobal
        });
      });

      setTimeout(() => {
        this._requestLocation(teste = '')
      }, 3000);
  };

  // http://10.0.2.2:3001/user/register
  
  _getApireq=async()=>{
    try {
      const resp = await axios.post(url);
      // const resp = await axios.get('http://192.168.141.19:8000/livelocation/live');
      // console.log(resp.data);
      let temp = this.state
      temp.str = resp.data
      this.setState(temp)
    } catch (error) {
      console.log(error)
    }
   
  }

  functionCombined() {
    this._requestLocation;
    this.onSendData();
}

  render() {
    const {location, loading, str} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To send location, press the button:
        </Text>
        <View style={styles.button}>
          <Button
            disabled={loading}
            title="Send Location"
            onPress={this._requestLocation}
            // onPress={this.functionCombined}
          />
          <Text>{str}</Text>
          {/* <Button
            title="get Saishwar"
            onPress={this._getApireq}
            // onPress={this.functionCombined}
          /> */}
        </View>
        {loading ? <ActivityIndicator /> : null}
        {location ? (
          <Text style={styles.location}>{JSON.stringify(location, 0, 2)}</Text>
        ) : null}
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}