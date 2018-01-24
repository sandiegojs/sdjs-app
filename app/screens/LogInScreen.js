import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import LoginContainer from '../containers/LoginContainer/LoginContainer'

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LoginContainer />
    );
  }
};

