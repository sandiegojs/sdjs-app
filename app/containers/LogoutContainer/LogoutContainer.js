import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { connect } from 'react-redux';
import { Constants, WebBrowser } from 'expo';

class LogoutContainer extends React.Component {
  constructor(props){
    super(props);
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
            onPress={() => this.props.navigation.navigate('Login')}
            title="Yes"
            large
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={'#346abb'}
            onPress={() => this.props.navigation.navigate('Events')}
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
  return {

  };
}

export default connect(mapStoreToProps)(LogoutContainer);
