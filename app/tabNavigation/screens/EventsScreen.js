import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';




export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);



    }
 static navigationOptions = {
    header: null,
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