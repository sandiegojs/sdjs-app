import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, Button } from 'react-native-elements';
import { updateEmailInput, updatePasswordInput, submitLogin } from './loginActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
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
    dispatch(submitLogin({ email, password }, navigate, dispatch));
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={ true }
        enableAutoAutomaticScroll={ (Platform.OS === 'ios') }
        extraHeight={ 130 } extraScrollHeight={ 130 }
        keyboardShouldPersistTaps={ 'handled' }
      >
        <View style={ styles.container }>
          <View style={ styles.formContainer }>
            <FormLabel>
              EMAIL
            </FormLabel>
            <TextInput
              accessibilityLabel='emailInput'
              style={ styles.input }
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={ false }
              keyboardType='email-address'
              onChangeText={ this.handleEmailInput }
            />
            <FormLabel>
              PASSWORD
            </FormLabel>
            <TextInput
              accessibilityLabel='passwordInput'
              style={ styles.input }
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={ false }
              secureTextEntry
              onChangeText={ this.handlePasswordInput }
            />
          </View>
          <Button
            accessibilityLabel='loginButton'
            title="LOG IN"
            buttonStyle={ {
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 321
            } }
            onPress={ this.handleLoginSubmission }
            large
            icon={ { name: 'sign-in', type: 'font-awesome' } }
          />
          <View style={ styles.resetTextCont }>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Password') }>
              <Text style={ styles.resetTextButton }>{ 'Forgot Password?' }</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.signupTextCont }>
            <Text style={ styles.signupText }>{ 'Don\'t have an account?' }</Text>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Signup') }>
              <Text style={ styles.signupTextButton }>{ ' Signup' }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    ...Platform.select({
      ios: {
        paddingTop: 80
      }
    })
  },
  formContainer: {
    paddingBottom: 20,
    width: 350,
    margin: 15
  },
  resetTextCont: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 18,
    marginBottom: 15,
    marginTop: 20
  },
  resetTextButton: {
    fontSize: 16,
    fontWeight: '500'
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        height: 350
      },
      android: {
        height: 150
      }
    })
  },
  signupText: {
    fontSize: 16
  },
  signupTextButton: {
    fontSize: 16,
    fontWeight: '500'
  },
  input: {
    margin: 11,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    paddingLeft: 4,
    paddingTop: 3,
    paddingBottom: 3,
    borderBottomColor: '#7f8c8d',
    fontSize: 18
  }
});

function mapStoreToProps(store) {
  return {
    emailInput: store.userData.emailInput,
    passwordInput: store.userData.passwordInput
  };
}

export default connect(mapStoreToProps)(LoginContainer);
