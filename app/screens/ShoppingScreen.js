import React from 'react';
import ShoppingContainer from '../containers/ShoppingContainer/ShoppingContainer';

export default class ShoppingScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Shop',
    headerTitle: 'Shop online',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ShoppingContainer />
    );
  }
};
