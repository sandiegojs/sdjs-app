import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Button } from "react-native-elements";
import { connect } from 'react-redux';
import { Constants } from 'expo';
import {updateEmailInput, updatePasswordInput, submitLogout} from './LogoutActions';

class LogoutContainer extends React.Component {
  constructor(props){
    super(props);
    this._logout = this._logout.bind(this);
  }

_logout(){
  const { navigate } = this.props.navigation;
  const { dispatch } = this.props;
  dispatch(submitLogout());
  navigate('Login');
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Do you want to log out?
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={'#346abb'}
            onPress={
            this._logout}
            title="Yes"
            large
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={'#346abb'}
            onPress={() => this.props.navigation.goBack()}
            title="No"
            large
          />
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  buttonContainer: {
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 20,
    width: 320
  },
  text: {
    marginBottom:10,
    fontSize: 16,
  }
});

function mapStoreToProps(store) {
  return {};
}

export default connect(mapStoreToProps)(LogoutContainer);
