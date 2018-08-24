import React from 'react';
import axios from 'axios';
import { WebBrowser } from 'expo';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Platform, WebView} from 'react-native';
import {connect} from 'react-redux';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {updateEmailInput, updatePasswordInput, submitLogin, thirdPartyLogin} from './loginActions';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
    this.meetupLogin = this.meetupLogin.bind(this);
  }

  handleEmailInput(text) {
    const { dispatch } = this.props;
    dispatch(updateEmailInput(text));
  }

  handlePasswordInput(text) {
    const { dispatch } = this.props;
    dispatch(updatePasswordInput(text));
  }

  handleLoginSubmission() {
    const { dispatch, emailInput: email, passwordInput: password } = this.props;
    const { navigate } = this.props.navigation;
    dispatch(submitLogin({ email, password }, navigate));
  }

  meetupLogin() {
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;
    dispatch(thirdPartyLogin(navigate));
    }


  render() {
    const { email } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>
              EMAIL
            </FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black',
              }}
              defaultValue={email}
              onChangeText={this.handleEmailInput}
            />
            <FormLabel>
              PASSWORD
            </FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black',
              }}
              secureTextEntry
              onChangeText={this.handlePasswordInput}
            />
          </View>
          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 321,
            }}
            onPress={this.handleLoginSubmission}
            large
            icon={{ name: 'sign-in', type: 'font-awesome' }}
          />
          <TouchableOpacity
            onPress={
              this.meetupLogin
            }
          >
            <Text
              style={{
                marginBottom: 11,
                fontSize: 16,
                fontWeight: '500'
              }}
            >
              {'Meetup Log in'}
            </Text>
          </TouchableOpacity>
          <View style={styles.resetTextCont}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Password')}
            >
              <Text style={styles.resetTextButton}>{'Forgot Password?'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>{'Don\'t have an account?'}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              <Text style={styles.signupTextButton}>{' Signup'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  formContainer: {
    paddingBottom: 20,
    width: 350,
    margin: 15,
  },
  resetTextCont: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 18,
    marginBottom: 15,
    marginTop: 20,
  },
  resetTextButton: {
    fontSize: 16,
    fontWeight: '500',
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        height: 350,
      },
      android: {
        height: 150,
      },
    }),

  },
  signupText: {
    fontSize: 16,
  },
  signupTextButton: {
    fontSize: 16,
    fontWeight: '500',
  },
});

function mapStoreToProps(store) {
  return {
    emailInput: store.userData.emailInput,
    passwordInput: store.userData.passwordInput,
  };
}

export default connect(mapStoreToProps)(LoginContainer);
