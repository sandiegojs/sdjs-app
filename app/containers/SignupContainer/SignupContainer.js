import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements';
import {
    firstNameEntry,
    lastNameEntry,
    emailEntry,
    passwordEntry,
    signUpEntry
} from './signupActions';
import authenticateWithGithubAsync from './authenticateWithGithubAsync';

class SignupContainer extends React.Component {
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
            "password": password,
        }
        dispatch(signUpEntry(signUpObj));




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
            dispatch(signUpEntry(githubObj));
            console.log(githubObj)
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

                const googleObj = {
                    "first_name": googleResult.user.givenName,
                    "last_name": googleResult.user.familyName,
                    "email": googleResult.user.email,
                    "password": googleResult.user.id
                }
                // console.log("GoogleUser", googleObj)
                dispatch(signUpEntry(googleObj));
                console.log(googleObj)

            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        const { firstName, lastName, email, password, user } = this.props;
        const { navigate } = this.props.navigation;

        if (!!user) { navigate('Events') }
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormLabel>FIRST NAME </FormLabel>
                    <FormInput onChangeText={this.handleFirstNameInput} />
                    <FormLabel>LAST NAME</FormLabel>
                    <FormInput onChangeText={this.handleLastNameInput} />
                    <FormLabel>EMAIL</FormLabel>
                    <FormInput onChangeText={this.handleEmailInput} />
                    <FormLabel>PASSWORD</FormLabel>
                    <FormInput onChangeText={this.handlePasswordInput} />
                </View>
                <Button style={styles.button}
                    onPress={this.handleSignUpSubmission}
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    large
                    icon={{ name: 'sign-in', type: 'font-awesome' }}
                    title='SIGN UP' />
                <View style={styles.socialButtonsContainer}>
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
                </View>
                <View>
                    <Button 
                    title='Already a user? Log In Here'
                    style={styles.switchToLogin}
                    onPress={() => this.props.navigation.navigate('Login')}
                    transparent={true}
                    color='#346abb'

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
        marginTop: 55,
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
        firstName: store.signupData.firstName,
        lastName: store.signupData.lastName,
        email: store.signupData.email,
        password: store.signupData.password,
        user: store.signupData.user

    };
}

export default connect(mapStoreToProps)(SignupContainer)