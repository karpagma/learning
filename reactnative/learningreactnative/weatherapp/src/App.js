import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Forecast from './Forecast';

const WEATHER_API_KEY = 'e221c17723a14e774c3a417c0a173b48';
const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }

  textChangeHandler = async event => {
    const zip = event.nativeEvent.text;
    this.setState({ zip });
    try {
      const result = await axios.get(
        `${WEATHER_API}?zip=${zip},IN&APPID=${WEATHER_API_KEY}`
      );
      this.setState({
        forecast: {
          main: result.data.weather[0].main,
          description: result.data.weather[0].description,
          temp: result.data.main.temp
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  renderForecast() {
    let content = null;
    if (this.state.forecast !== null) {
      content = <Forecast forecast={this.state.forecast} />;
    }
    return content;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./flowers.png')}
          resizeMode="cover"
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>Current weather for</Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            {this.renderForecast()}
          </View>
        </Image>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: 'column' },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: '#FFFFFF' }
});
