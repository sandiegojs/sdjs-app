import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer'



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
      </View>
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
