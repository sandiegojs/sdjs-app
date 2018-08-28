import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Platform
} from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import { emailResetPasswordEntry, resetPassword } from './passwordActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class PasswordContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateEmailInput = this.updateEmailInput.bind(this);
    this.submitResetPasswordRequest = this.submitResetPasswordRequest.bind(this);
  }

  updateEmailInput(text) {
    const { dispatch } = this.props;
    dispatch(emailResetPasswordEntry(text));
  }

  submitResetPasswordRequest() {
    const { dispatch, emailInput } = this.props;
    const { navigate } = this.props.navigation;
    dispatch(resetPassword(emailInput, navigate));
  }

  render() {
    const { emailInput } = this.props;
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
              Enter your E-mail
            </FormLabel>
            <TextInput
              style={ styles.input }
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={ false }
              defaultValue={ emailInput }
              onChangeText={ this.updateEmailInput }
            />
          </View>
          <Button
            title="RESET PASSWORD"
            buttonStyle={ {
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 311
            } }
            onPress={ this.submitResetPasswordRequest }
          />
          <View style={ styles.loginTextCont }>
            <TouchableOpacity
              onPress={ () => this.props.navigation.navigate('Login') }
            >
              <Text style={ styles.textButton }>
                Return to Login
              </Text>
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
    alignItems: 'center',
    padding: 30
  },
  formContainer: {
    paddingBottom: 20,
    width: 350,
    margin: 15
  },
  loginTextCont: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 25,
    flexDirection: 'row'
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
    emailInput: store.passwordData.emailInput
  };
}

export default connect(mapStoreToProps)(PasswordContainer);
