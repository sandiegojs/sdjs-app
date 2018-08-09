import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SDJSContainer from '../containers/SDJSContainer/SDJSContainer';
import LogOutContainer from '../containers/LogoutContainer/LogoutContainer';

export default class SDJSScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '.Org',
    headerTitle:'Visit Us',
    headerLeft: null,
    headerRight: <LogOutContainer />,
    
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SDJSContainer />
    );
  }
};