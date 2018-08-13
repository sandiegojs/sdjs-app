import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import authenticateWithGithubAsync from './authenticateWithGithubAsync';
import {
    updateFirstNameInput,
    updateLastNameInput,
    updateEmailInput,
    updatePasswordInput,
    submitSignUp,
    thirdPartyLogin
} from './signupActions';

class SignupContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSignUpSubmission = this.handleSignUpSubmission.bind(this);
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

    handleSignUpSubmission() {
        const { dispatch, firstNameInput, lastNameInput, emailInput, passwordInput } = this.props;
        const { navigate } = this.props.navigation;

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

    // _authenticateWithGithubAsync = async () => {
    //     const { dispatch } = this.props;
    //     try {
    //         let user = await authenticateWithGithubAsync();
    //         const githubObj = {
    //             "first_name": user.name.split(' ')[0],
    //             "last_name": user.name.substr(user.name.indexOf(' ') + 1),
    //             "email": user.email,
    //             "password": user.id.toString()
    //         };
    //         dispatch(thirdPartyLogin(githubObj));
    //         this.setState({ githubToken: result });
    //     } catch (e) {
    //         this.setState({ error: JSON.stringify(e) });
    //     }
    // };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel>FIRST NAME </FormLabel>
                        <FormInput onChangeText={this.handleFirstNameInput} />
                        <FormLabel>LAST NAME</FormLabel>
                        <FormInput onChangeText={this.handleLastNameInput} />
                        <FormLabel>EMAIL</FormLabel>
                        <FormInput onChangeText={this.handleEmailInput} defaultValue={this.props.emailInput} />
                        <FormLabel>PASSWORD</FormLabel>
                        <FormInput onChangeText={this.handlePasswordInput} secureTextEntry={true} />
                    </View>
                    <View>
                    </View>
                    <Button style={styles.button}
                        onPress={this.handleSignUpSubmission}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'sign-in', type: 'font-awesome' }}
                        title='SIGN UP' />
                    {/* <View style={styles.socialButtonsContainer}>
                    <Button
                        onPress={this._authenticateWithGithubAsync}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'github', type: 'font-awesome' }}
                        title='GITHUB' />
                </View> */}
                </View>
                </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 300
    },
    button: {
        marginTop: 55,
        marginBottom: 20,
        width: 320
    },
    socialButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 350,
        paddingTop: 8,
        paddingHorizontal: 25
    },
    formContainer: {
        width: 350
        // padding: 50
    },
    switchToLogin: {
    }
});

function mapStoreToProps(store) {
    return {
        firstNameInput: store.userData.firstNameInput,
        lastNameInput: store.userData.lastNameInput,
        emailInput: store.userData.emailInput,
        passwordInput: store.userData.passwordInput,
		user: store.userData.user
    };
}

export default connect(mapStoreToProps)(SignupContainer);
