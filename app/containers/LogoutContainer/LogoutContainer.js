import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { submitLogout } from './LogoutActions';
import { profileWipe } from '../ProfileContainer/profileActions';

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props;
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
            height: 55
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
            height: 55
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
  return {};
}

export default connect(mapStoreToProps)(LogoutContainer);
