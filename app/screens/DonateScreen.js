import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DonateContainer from '../containers/DonateContainer/DonateContainer'

export default class DonateScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
    tabBarLabel: 'Donate',
    headerLeft: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <DonateContainer navigation={this.props.navigation}/>
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