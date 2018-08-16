import React from 'react';
import {ScrollView, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {StyleSheet, View, Alert, Text, TouchableOpacity} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
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
        const {dispatch} = this.props;
        dispatch(updateFirstNameInput(text));
    }

    handleLastNameInput(text) {
        const {dispatch} = this.props;
        dispatch(updateLastNameInput(text));
    }

    handleEmailInput(text) {
        const {dispatch} = this.props;
        dispatch(updateEmailInput(text));
    }

    handlePasswordInput(text) {
        const {dispatch} = this.props;
        dispatch(updatePasswordInput(text));
    }

    handleSignUpSubmission() {
        const {dispatch, firstNameInput, lastNameInput, emailInput, passwordInput} = this.props;
        const {navigate} = this.props.navigation;

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

    render() {
        return (
            <ScrollView onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel>FIRST NAME</FormLabel>
                        <FormInput
                            containerStyle={{
                                margin: 5,
                                borderBottomColor: 'black'
                            }}
                            onChangeText={this.handleFirstNameInput}
                        />
                        <FormLabel>LAST NAME</FormLabel>
                        <FormInput
                            containerStyle={{
                                margin: 5,
                                borderBottomColor: 'black'
                            }}
                            onChangeText={this.handleLastNameInput}
                        />
                        <FormLabel>EMAIL</FormLabel>
                        <FormInput
                            containerStyle={{
                                margin: 5,
                                borderBottomColor: 'black'
                            }}
                            onChangeText={this.handleEmailInput}
                            defaultValue={this.props.emailInput}
                        />
                        <FormLabel>PASSWORD</FormLabel>
                        <FormInput
                            containerStyle={{
                                margin: 5,
                                borderBottomColor: 'black'
                            }}
                            onChangeText={this.handlePasswordInput}
                            secureTextEntry={true}
                        />
                    </View>
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
                        icon={{name: 'sign-in', type: 'font-awesome'}}
                        title='SIGN UP'
                    />
                    <View style={styles.loginTextCont}>
                        <Text style={styles.text}>Already have an account?</Text>
                        <TouchableOpacity 
                         onPress={() => this.props.navigation.navigate('Login')}
                        >
                        <Text style={styles.textButton}> Login</Text>
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
        padding: 30
    },
    formContainer: {
        paddingBottom: 20,
        width: 350,
        margin: 15
    },
    loginTextCont:{
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical: 16,
        flexDirection: 'row',
    },
    text:{
        fontSize: 16
    },
    textButton:{
        fontSize: 16,
        fontWeight:'500'
    }
});

function mapStoreToProps(store) {
    return {
        firstNameInput: store.userData.firstNameInput,
        lastNameInput: store.userData.lastNameInput,
        emailInput: store.userData.emailInput,
        passwordInput: store.userData.passwordInput
    };
}

export default connect(mapStoreToProps)(SignupContainer);