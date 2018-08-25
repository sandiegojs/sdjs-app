import React from 'react';
import { Button } from 'react-native';
import ThankyouContainer from '../containers/DonateContainer/ThankyouContainer';

export default class DonateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: 'Thank You',
      headerLeft: <Button title="Events" onPress={ () => navigate('Events') } />
    };
  };
  render() {
    return <ThankyouContainer />;
  }
};
