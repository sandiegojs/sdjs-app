import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ThankyouContainer from '../containers/DonateContainer/ThankyouContainer'

export default class DonateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    return {
      headerTitle: 'Thank You',
      headerLeft: <Button title="Events" onPress={() => navigate('Events')} />
    }
  }
  render() {
    return (
      <ThankyouContainer/>
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