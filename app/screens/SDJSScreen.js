import React from 'react';
import SDJSContainer from '../containers/SDJSContainer/SDJSContainer';

export default class SDJSScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '.Org',
    headerTitle: 'Visit Us',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SDJSContainer />
    );
  }
};
