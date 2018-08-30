import React from 'react';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Button, CheckBox, FormLabel } from 'react-native-elements';
import {
  submitSignUp,
  updateConfirmPasswordInput,
  updateEmailInput,
  updateFirstNameInput,
  updateLastNameInput,
  updatePasswordInput
} from './signupActions';

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSignUpSubmission = this.handleSignUpSubmission.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
  }

  handleFirstNameInput(text) {
    const { dispatch } = this.props;
    dispatch(updateFirstNameInput(text));
  }

  handleLastNameInput(text) {
    const { dispatch } = this.props;
    dispatch(updateLastNameInput(text));
  }

  handleEmailInput(text) {
    const { dispatch } = this.props;
    dispatch(updateEmailInput(text));
  }

  handlePasswordInput(text) {
    const { dispatch } = this.props;
    dispatch(updatePasswordInput(text));
  }

  handleConfirmPasswordInput(text) {
    const { dispatch } = this.props;
    dispatch(updateConfirmPasswordInput(text));
  }

  handleChecked(checked) {
    this.setState(checked);
  }

  handleSignUpSubmission() {
    const { dispatch, firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput } = this.props;
    const { navigate } = this.props.navigation;

    if (this.state.checked === false) {
      Alert.alert(
        'Form Error',
        "Please check that you've read the Privacy Policy", [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      );
    } else {
      if (passwordInput !== confirmPasswordInput) {
        Alert.alert(
          'Form Error',
          'Passwords must match', [{
            text: 'OK',
            onPress: null,
            style: 'cancel'
          }]
        );
      } else {
        if (firstNameInput === '' || lastNameInput === '' || emailInput === '' || passwordInput === '') {
          Alert.alert(
            'Form Error',
            'Complete all fields to submit', [{
              text: 'OK',
              onPress: null,
              style: 'cancel'
            }]
          );
        } else {
          const credentials = {
            email: emailInput,
            password: passwordInput,
            firstName: firstNameInput,
            lastName: lastNameInput
          };
          dispatch(submitSignUp(credentials, navigate, dispatch));
        }
      }
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={ true }
        enableAutoAutomaticScroll={ (Platform.OS === 'ios') }
        extraHeight={ 130 } extraScrollHeight={ 100 }
        keyboardShouldPersistTaps={ 'handled' }
      >
        <View style={ styles.container }>
          <View style={ styles.formContainer }>
            <FormLabel>FIRST NAME</FormLabel>
            <TextInput
              style={ styles.input }
              underlineColorAndroid='#ecf0f1'
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={ false }
              onChangeText={ this.handleFirstNameInput }
            />
            <FormLabel>LAST NAME</FormLabel>
            <TextInput
              style={ styles.input }
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={ false }
              onChangeText={ this.handleLastNameInput }
            />
            <FormLabel>EMAIL</FormLabel>
            <TextInput
              style={ styles.input }
              textContentType='name'
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={ false }
              onChangeText={ this.handleEmailInput }
            />
            <FormLabel>PASSWORD</FormLabel>
            <TextInput
              style={ styles.input }
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={ false }
              secureTextEntry={ true }
              onChangeText={ this.handlePasswordInput }
            />
            <FormLabel>CONFIRM PASSWORD</FormLabel>
            <TextInput
              style={ styles.input }
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={ false }
              secureTextEntry={ true }
              onChangeText={ this.handleConfirmPasswordInput }
            />
            <TouchableOpacity
              onPress={ async() => {
                return await WebBrowser.openBrowserAsync('https://www.freeprivacypolicy.com/privacy/view/2a457560dcd4e317d6be72a2727c35f5');
              } }
            >
              <Text
                style={ {
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center'
                } }
              >
                { 'Privacy Policy' }
              </Text>
            </TouchableOpacity>
            <CheckBox
              containerStyle={ {
                backgroundColor: '#ecf0f1'
              } }
              center
              title="I Agree I've Read the Privacy Policy"
              checkedColor='#346abb'
              onPress={ () => this.handleChecked({ checked: !this.state.checked }) }
              checked={ this.state.checked }
            />
            <Button
              buttonStyle={ {
                backgroundColor: '#346abb',
                borderRadius: 7,
                marginTop: 7,
                marginBottom: 25,
                alignSelf: 'center',
                width: 300,
                height: 55
              } }
              onPress={ this.handleSignUpSubmission }
              large
              icon={ { name: 'sign-in', type: 'font-awesome' } }
              title='SIGN UP'
            />
            <View style={ styles.loginTextCont }>
              <Text style={ styles.text }>{ 'Already have an account?' }</Text>
              <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('Login') }
              >
                <Text style={ styles.textButton }> { 'Login' }</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 10
  },
  formContainer: {
    paddingBottom: 20,
    backgroundColor: '#ecf0f1',
    width: 350,
    margin: 15
  },
  loginTextCont: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row'
  },
  text: {
    fontSize: 16
  },
  textButton: {
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
    firstNameInput: store.userData.firstNameInput,
    lastNameInput: store.userData.lastNameInput,
    emailInput: store.userData.emailInput,
    passwordInput: store.userData.passwordInput,
    confirmPasswordInput: store.userData.confirmPasswordInput
  };
}

export default connect(mapStoreToProps)(SignupContainer);
