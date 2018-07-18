
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';
import { FormLabel, FormInput, Button, Icon, FormValidationMessage } from 'react-native-elements';
import authenticateWithGithubAsync from '../SignupContainer/authenticateWithGithubAsync';
import { emailLoginEntry, passwordLoginEntry } from './loginActions';
import { loginEntry, thirdPartyLogin } from '../SignupContainer/signupActions';
import { loadingScreen } from '../LoginContainer/loginActions';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLoginEmailInput = this.handleLoginEmailInput.bind(this);
        this.handleLoginPasswordInput = this.handleLoginPasswordInput.bind(this);
        this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
    }

    handleLoginEmailInput(text) {
        const { dispatch } = this.props;
        dispatch(emailLoginEntry(text));
    }

    handleLoginPasswordInput(text) {
        const { dispatch } = this.props;
        dispatch(passwordLoginEntry(text));
    }

    handleLoginSubmission() {
        const { dispatch } = this.props;
        const { loginEmail, loginPassword, user } = this.props;
        const { navigate } = this.props.navigation;

        const loginObj = {
            "email": loginEmail,
            "password": loginPassword,
        }

        dispatch(loginEntry(loginObj, navigate));
    }

    _authenticateWithGithubAsync = async () => {
        const { dispatch } = this.props;
        try {
            let user = await authenticateWithGithubAsync();
            const githubObj = {
                "first_name": user.name.split(' ')[0],
                "last_name": user.name.substr(user.name.indexOf(' ') + 1),
                "email": user.email,
                "password": user.id.toString()
            }
            dispatch(thirdPartyLogin(githubObj));
            this.setState({ githubToken: result });
        } catch (e) {
            this.setState({ error: JSON.stringify(e) });
        }
    }

    signInWithGoogleAsync = async () => {
        const { dispatch } = this.props;
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: '283233290300-1oc4f8ovd34f6gju3p7aktr0bqsi4jhh.apps.googleusercontent.com',
                iosClientId: '283233290300-rr1pffml6mfnacp9amsrhokemmc5nras.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                let googleResult = result
                dispatch(loadingScreen());
                const googleObj = {
                    "first_name": googleResult.user.givenName,
                    "last_name": googleResult.user.familyName,
                    "email": googleResult.user.email,
                    "password": googleResult.user.id
                }

                dispatch(thirdPartyLogin(googleObj));
                console.log('done')

            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        const { user, loadingScreen, loginEmail, loginPassword } = this.props;   
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormLabel>EMAIL</FormLabel>
                    <FormInput
                        defaultValue={loginEmail}
                        onChangeText={this.handleLoginEmailInput} />
                    <FormLabel>PASSWORD</FormLabel>
                    <FormInput
                        secureTextEntry={true}
                        onChangeText={this.handleLoginPasswordInput} />
                </View>
                <Button style={styles.button}
                    onPress={this.handleLoginSubmission}
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    large
                    icon={{ name: 'sign-in', type: 'font-awesome' }}
                    title='LOG IN' />
                {/* <View style={styles.socialButtonsContainer}>
                    <Button
                        onPress={this._authenticateWithGithubAsync}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'github', type: 'font-awesome' }}
                        title='GITHUB' />
                    <Button
                        onPress={this.signInWithGoogleAsync}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'google-plus', type: 'font-awesome' }}
                        title='GOOGLE' />
                </View> */}
                <View style={{paddingTop: 30}}>
                    <Button
                        title='CREATE ACCOUNT'
                        style={styles.button}
                        backgroundColor={'#346abb'}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    />
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
        paddingTop: 30
    },
    button: {
        marginTop: 30,
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
    },
    formMessage: {
        height: 200,
        width: 200
    }
});

function mapStoreToProps(store) {
    return {
        loginEmail: store.loginData.loginEmail,
        loginPassword: store.loginData.loginPassword,
        loginUser: store.loginData.loginUser,
        user: store.signupData.user,
        loadingScreen: store.loginData.loadingScreen,
        token: store.signupData.token,
        id: store.signupData.id
    };
}

export default connect(mapStoreToProps)(LoginContainer)
