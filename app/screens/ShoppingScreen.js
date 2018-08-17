import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ShoppingContainer from '../containers/ShoppingContainer/ShoppingContainer';

export default class ShoppingScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Shop',
    headerTitle:'Shop online',
    headerLeft: null,
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ShoppingContainer />
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