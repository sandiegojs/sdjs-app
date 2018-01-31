import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SurveyContainer from '../containers/SurveyContainer/SurveyContainer';

export default class SurveyScreen extends React.Component {
  static navigationOptions = {
    title: 'Survey',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SurveyContainer />
    );
  }
};