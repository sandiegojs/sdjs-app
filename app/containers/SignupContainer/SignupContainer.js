import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';
import {
  updateFirstNameInput,
  updateLastNameInput,
  updateEmailInput,
  updatePasswordInput,
  submitSignUp
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

    handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=212&cid=5832&sid=front');
        this.setState({ result });
    };

  handleChecked(checked) {
    this.setState(checked);
  };

  handleSignUpSubmission() {
    const { dispatch, firstNameInput, lastNameInput, emailInput, passwordInput } = this.props;
    const { navigate } = this.props.navigation;

    if (this.state.checked === false) {
      Alert.alert(
        'Form Error',
        "Please check that you've read the Privacy Policy", [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      )
    } else {
      if (firstNameInput === '' || lastNameInput === '' || emailInput === '' || passwordInput === '') {
        Alert.alert(
          'Form Error',
          'Complete all fields to submit', [{
            text: 'OK',
            onPress: null,
            style: 'cancel'
          }]
        )
      } else {
        const credentials = {
          email: emailInput,
          password: passwordInput,
          firstName: firstNameInput,
          lastName: lastNameInput
        };
        dispatch(submitSignUp(credentials, navigate));
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>FIRST NAME</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleFirstNameInput}
              autoCorrect={false}
            />
            <FormLabel>LAST NAME</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleLastNameInput}
              autoCorrect={false}
            />
            <FormLabel>EMAIL</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleEmailInput}
              autoCorrect={false}
            />
            <FormLabel>PASSWORD</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handlePasswordInput}
              secureTextEntry={true}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity
            onPress={async () => {
              let result = await WebBrowser.openBrowserAsync('https://www.freeprivacypolicy.com/privacy/view/2a457560dcd4e317d6be72a2727c35f5');
              return result
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500'
              }}
            >
              {'Privacy Policy'}
            </Text>
          </TouchableOpacity>
          <CheckBox
            containerStyle={{
              backgroundColor: '#ecf0f1'
            }}
            center
            title="I Agree I've Read the Privacy Policy"
            checkedColor='#346abb'
            onPress={() => this.handleChecked({ checked: !this.state.checked })}
            checked={this.state.checked}
          />
          <Button
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 300,
              height: 55
            }}
            onPress={this.handleSignUpSubmission}
            large
            icon={{ name: 'sign-in', type: 'font-awesome' }}
            title='SIGN UP'
          />
          <View style={styles.loginTextCont}>
            <Text style={styles.text}>{'Already have an account?'}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.textButton}> {'Login'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
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
    width: 350,
    margin: 15
  },
  loginTextCont: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16
  },
  textButton: {
    fontSize: 16,
    fontWeight: '500'
  }
});

function mapStoreToProps(store) {
  return {
    firstNameInput: store.userData.firstNameInput,
    lastNameInput: store.userData.lastNameInput,
    emailInput: store.userData.emailInput,
    passwordInput: store.userData.passwordInput,
  };
}

export default connect(mapStoreToProps)(SignupContainer);
