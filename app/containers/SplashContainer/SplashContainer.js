import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { profileInit } from '../ProfileContainer/profileActions';

class SplashContainer extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;
    AsyncStorage.multiGet(['token', 'id', 'ttl', 'created']).then(response => {
      const token = response[0][1];
      const id = response[1][1];
      const ttl = response[2][1];
      const created = response[3][1];

      // if token exists and token was created less milliseconds ago than ttl
      if (token && (new Date().getTime() - new Date(created).getTime() < ttl)) {
        dispatch(profileInit(id, token));
        navigate('Events');
        return response.data;
      } else {
        return navigate('Login');
      }
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
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
  }
});

// eslint-disable-next-line no-unused-vars
function mapStoreToProps(store) {
  return {};
}

export default connect(mapStoreToProps)(SplashContainer);
