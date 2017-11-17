import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const Forecast = ({ forecast }) => {
  const { main, description, temp } = forecast;
  const { container, mainText, bigText } = styles;
  return (
    <View style={container}>
      <Text style={bigText}>{main}</Text>
      <Text style={mainText}>{description}</Text>
      <Text style={bigText}>{temp}°F</Text>
    </View>
  );
};

const styles = {
  container: { height: 130 },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
};

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired
};

export default Forecast;
