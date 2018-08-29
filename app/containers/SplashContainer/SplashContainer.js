import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

class SplashContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Events');
    }, 3000);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss } accessible={ false }>
        <View accessibilityLabel='splashScreen' style={ styles.container }>
          <View style={ styles.logoContainer }>
            <Image
              style={ styles.logo }
              source={ require('../../assets/images/sandiegojs.png') }
            />
            <Text style={ styles.text }>Speak</Text>
            <Text style={ styles.text }>Connect</Text>
            <Text style={ styles.text }>Learn</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1c40f'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 2,
    justifyContent: 'center',
    marginBottom: 80
  },
  logo: {
    width: '50%',
    height: '10%'
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  }
});

// eslint-disable-next-line no-unused-vars
function mapStoreToProps(store) {
  return {};
}

export default connect(mapStoreToProps)(SplashContainer);

