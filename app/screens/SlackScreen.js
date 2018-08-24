import React from 'react';
import SlackContainer from '../containers/SlackContainer/SlackContainer';

export default class SlackScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Slack',
    headerTitle: 'Join us on Slack',
    headerLeft: null,
  };

  render() {
    return (
      <SlackContainer />
    );
  }
};
