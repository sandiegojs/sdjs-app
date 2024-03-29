import React from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import { submitLogout } from './LogoutActions';
import { profileWipe } from '../ProfileContainer/profileActions';
import { backendUrl } from '../../Defaults';

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const { navigate } = this.props.navigation;
    const { dispatch, user } = this.props;

    axios
      .post(`${backendUrl}/api/users/logout`, {}, { headers: { Authorization: user.token } })
      .then(response => response.data)
      .catch(err => console.log(err));

    AsyncStorage.multiRemove(['id', 'token', 'ttl', 'created']);
    dispatch(submitLogout());
    dispatch(profileWipe());
    navigate('Login');
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>
          You Want To Log Out?
        </Text>
        <Button
          buttonStyle={ {
            backgroundColor: '#346abb',
            borderRadius: 7,
            marginTop: 34,
            marginBottom: 24,
            width: 313,
            height: 55,
            paddingBottom: 3,
            paddingTop: 3
          } }
          onPress={ this.logout }
          title="Yes"
          large
        />
        <Button
          buttonStyle={ {
            backgroundColor: '#346abb',
            borderRadius: 7,
            marginTop: 24,
            marginBottom: 21,
            width: 313,
            height: 55,
            paddingBottom: 3,
            paddingTop: 3
          } }
          onPress={ () => this.props.navigation.goBack() }
          title="No"
          large
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    padding: 30
  },
  text: {
    marginBottom: 11,
    fontSize: 24
  }
});

// eslint-disable-next-line no-unused-vars
function mapStoreToProps(store) {
  return {
    user: store.userData.user
  };
}

export default connect(mapStoreToProps)(LogoutContainer);
