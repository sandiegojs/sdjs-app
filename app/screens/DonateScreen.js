import React from 'react';
import DonateContainer from '../containers/DonateContainer/DonateContainer';

export default class DonateScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
    tabBarLabel: 'Donate',
    headerLeft: null
  };
  render() {
    return <DonateContainer navigation={ this.props.navigation } />;
  }
};
