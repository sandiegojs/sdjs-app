import React from 'react';
import {ScrollView, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {updateEmailInput, updatePasswordInput, submitLogin} from './loginActions';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
  }

  handleEmailInput(text) {
    const {dispatch} = this.props;
    dispatch(updateEmailInput(text));
  }

  handlePasswordInput(text) {
    const {dispatch} = this.props;
    dispatch(updatePasswordInput(text));
  }

  handleLoginSubmission() {
    const {dispatch, emailInput: email, passwordInput: password} = this.props;
    const {navigate} = this.props.navigation;
    dispatch(submitLogin({email, password}, navigate));
  }

  render() {
    const {email} = this.props;
    return (
      <ScrollView onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>EMAIL</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              defaultValue={email}
              onChangeText={this.handleEmailInput}
            />
            <FormLabel>PASSWORD</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              secureTextEntry={true}
              onChangeText={this.handlePasswordInput}
            />
          </View>
          <Button
            title='LOG IN'
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 321
            }}
            onPress={this.handleLoginSubmission}
            large
            icon={{name: 'sign-in', type: 'font-awesome'}}
          />
          <Button
            title='CREATE ACCOUNT'
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 24,
              marginBottom: 11,
              width: 313,
              height: 55
            }}
            onPress={() => this.props.navigation.navigate('Signup')}
          />
          <Button
            title='FORGOT PASSWORD?'
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 15,
              width: 313,
              height: 55
            }}
            onPress={() => this.props.navigation.navigate('Password')}
          />
        </View>
      </ScrollView>
    )
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
  formContainer: {
    paddingBottom: 20,
    width: 350,
    margin: 15
  }
});

function mapStoreToProps(store) {
  return {
    emailInput: store.userData.emailInput,
    passwordInput: store.userData.passwordInput
  };
}

export default connect(mapStoreToProps)(LoginContainer);