import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput, StatusBar } from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import RootNavigation from '../tabNavigation/RootNavigation';



export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);



    }
  static navigationOptions = {
    title: 'Events',
    headerLeft: null
  };



   
  render() {
    const { navigate } = this.props.navigation;
   
    return (
      <View>
        <Button
          title="Go to Profile Screen"
          onPress={() =>
            navigate('Profile')
          }
        />
        <EventsContainer navigation={this.props.navigation}/>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
