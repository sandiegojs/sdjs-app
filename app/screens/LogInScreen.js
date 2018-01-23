import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Events Screen"
        onPress={() =>
          navigate('Events')
        }
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});