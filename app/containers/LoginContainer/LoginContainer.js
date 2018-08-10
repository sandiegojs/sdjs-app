import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Linking} from 'react-native';
import { FormLabel, FormInput, Button, Icon, FormValidationMessage } from 'react-native-elements';
import authenticateWithGithubAsync from '../SignupContainer/authenticateWithGithubAsync';
import { emailLoginEntry, passwordLoginEntry, loginEntry, loadingScreen } from './loginActions';
import { thirdPartyLogin } from '../SignupContainer/signupActions';

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
        const { dispatch, loginEmail, loginPassword } = this.props;
        const { navigate } = this.props.navigation;
        dispatch(loginEntry({loginEmail, loginPassword}, navigate));
    }

    render() {
        const { user, loadingScreen, loginEmail } = this.props;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                    <View style={{ paddingTop: 30 }}>
                        <Button
                            title='CREATE ACCOUNT'
                            style={styles.button}
                            borderRadius={3}
                            backgroundColor={'#346abb'}
                            onPress={() => this.props.navigation.navigate('Signup')}
                        />
                    </View>
                    <View>
                        <Button
                            title='FORGOT PASSWORD?'
                            style={styles.button}
                            backgroundColor={'#346abb'}
                            onPress={() => this.props.navigation.navigate('Password')}
                        />
                    </View>
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
        borderRadius: 8,
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
        paddingBottom: 20,
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
