import React from 'react';
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
      <DonateContainer navigation={this.props.navigation} />
    );
  }
};
