import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common';
import * as actions from './actions';

class ListItem extends Component {
  constructor() {
    super();
    this.selectLibraryHandler = this.selectLibraryHandler.bind(this);
  }

  componentWillMount() {
    LayoutAnimation.spring();
  }

  selectLibraryHandler() {
    const {id, title} = this.props.library;
    this.props.selectLibrary(id);
  }

  renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      );
    }

    return null;
  }

  render() {
    const {titleStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={this.selectLibraryHandler}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded: expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
