import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import LoginContainer from '../containers/LoginContainer/LoginContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
    headerLeft: null,
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LoginContainer navigation={this.props.navigation} />
    );
  }
};