import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import LogInScreen from '../../screens/LogInScreen';

export default class LogoutContainer extends Component {
  constructor(props){
    super(props);
  
  }
  _onPressButton() {
    Alert.alert("You've been log out!");
    
  }

  render() {
   // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Button
            onPress={this._onPressButton}
            title="Log out"
            style={styles.logoutButton}
            color="black"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  logoutButton: {
    margin: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
});
