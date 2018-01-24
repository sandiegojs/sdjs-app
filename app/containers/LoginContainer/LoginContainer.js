import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import {
    firstNameEntry,
    lastNameEntry,
    emailEntry,
    passwordEntry,
    signUpEntry
} from './loginActions';

class LoginContainer extends React.Component {
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
    handleSignUpSubmission(){
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

    
    }

    render() {
        const { firstName, lastName, email, password } = this.props;
        console.log(password)
        return (
            <View style={styles.container}>
                <FormLabel>FIRST NAME </FormLabel>
                <FormInput onChangeText={this.handleFirstNameInput}/>
                <FormLabel>LAST NAME</FormLabel>
                <FormInput onChangeText={this.handleLastNameInput}/>
                <FormLabel>EMAIL</FormLabel>
                <FormInput onChangeText={this.handleEmailInput}/>
                <FormLabel>PASSWORD</FormLabel>
                <FormInput onChangeText={this.handlePasswordInput}/>
                <Button style={styles.button} onPress={this.handleSignUpSubmission}
                    large
                    icon={{ name: 'anchor', type: 'font-awesome' }}
                    title='LOG IN' />
                {/* </View> */}
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
        password: store.loginData.password

    };
}

export default connect(mapStoreToProps)(LoginContainer)