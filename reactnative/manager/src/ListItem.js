import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CardSection} from './common';

class ListItem extends Component {
  constructor() {
    super();
    this.employeeSelectHandler = this.employeeSelectHandler.bind(this);
  }

  employeeSelectHandler() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {titleStyle} = styles;
    const {name} = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.employeeSelectHandler}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fonstSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
