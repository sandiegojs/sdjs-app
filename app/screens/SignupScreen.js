import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import SignupContainer from '../containers/SignupContainer/SignupContainer';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
    headerLeft: null,
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SignupContainer navigation={this.props.navigation} />
    );
  }
};