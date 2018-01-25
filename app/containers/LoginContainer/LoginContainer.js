import React from 'react';
import { AuthSession } from 'expo';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';
import { FormLabel, FormInput, Button, SocialIcon } from 'react-native-elements';
import {
    firstNameEntry,
    lastNameEntry,
    emailEntry,
    passwordEntry,
    signUpEntry
} from './loginActions';
import authenticateWithGithubAsync from './authenticateWithGithubAsync';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        state = {
            githubToken: null,
            redditToken: null,
            error: null,
          };

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSignUpSubmission = this.handleSignUpSubmission.bind(this);
    }



    // componentDidMount() {
    //     const { user } = this.props;
    //     const navigate  = this.props.navigation;
    //     if (!!user) {
    //         navigate('Events');
    //     }
    // }

    handleFirstNameInput(text) {
        const { dispatch } = this.props;
        dispatch(firstNameEntry(text));
    }

    handleLastNameInput(text) {
        const { dispatch } = this.props;
        dispatch(lastNameEntry(text));
    }

    handleEmailInput(text) {
        const { dispatch } = this.props;
        dispatch(emailEntry(text));
    }

    handlePasswordInput(text) {
        const { dispatch } = this.props;
        dispatch(passwordEntry(text));
    }
    handleSignUpSubmission() {
        const { dispatch } = this.props;
        const { firstName, lastName, email, password } = this.props;

        const signUpObj = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password
        }
        console.log(signUpObj);
        dispatch(signUpEntry(signUpObj));
        
_authenticateWithGithubAsync = async () => {
    try {
      let result = await authenticateWithGithubAsync();
      this.setState({githubToken: result});
    } catch(e) {
      this.setState({error: JSON.stringify(e)});
    }
  }


    }

    render() {
        const { firstName, lastName, email, password, user } = this.props;
        const { navigate } = this.props.navigation;

        if (!!user) { navigate('Events') }
        return (
            <View style={styles.container}>
                <FormLabel>FIRST NAME </FormLabel>
                <FormInput onChangeText={this.handleFirstNameInput} />
                <FormLabel>LAST NAME</FormLabel>
                <FormInput onChangeText={this.handleLastNameInput} />
                <FormLabel>EMAIL</FormLabel>
                <FormInput onChangeText={this.handleEmailInput} />
                <FormLabel>PASSWORD</FormLabel>
                <FormInput onChangeText={this.handlePasswordInput} />
                <Button style={styles.button} onPress={this.handleSignUpSubmission}
                    large
                    icon={{ name: 'anchor', type: 'font-awesome' }}
                    title='LOG IN' />
                <View>
                    <Button
                        onPress={this._authenticateWithGithubAsync}
                        large
                        icon={{ name: 'github', type: 'font-awesome' }}
                        title='GITHUB' />
                        <Button
                        large
                        icon={{ name: 'google-plus', type: 'font-awesome' }}
                        title='GOOGLE' />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 30
    },
    // form: {
    //   height: 40,
    //   width: 70,
    //   borderColor: 'black',
    //   borderWidth: 1
    // },
    button: {
        marginTop: 55,
        width: 305
    }
});

function mapStoreToProps(store) {
    return {
        firstName: store.loginData.firstName,
        lastName: store.loginData.lastName,
        email: store.loginData.email,
        password: store.loginData.password,
        user: store.loginData.user

    };
}

export default connect(mapStoreToProps)(LoginContainer)