import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  navigate
} from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import RootNavigator from '../tabNavigation/MainTabNavigator';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'San Diego JS',
    tabBarLabel: 'Events',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const { user } = this.props;
    return (
      <View>
        <EventsContainer navigation={this.props.navigation} />
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}
          <RootNavigator navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
