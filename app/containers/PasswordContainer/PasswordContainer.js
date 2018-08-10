import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailResetPasswordEntry, resetPassword } from './passwordActions';

class PasswordContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleEmailForPassword = this.handleEmailForPassword.bind(this);
        this.handleResetPassword = this.handleResetPassword.bind(this);
    }

    handleEmailForPassword(text) {
        const { dispatch } = this.props;
        dispatch(emailResetPasswordEntry(text));
    }

    handleResetPassword(userInfo) {
        //logic needs fixing
        const { dispatch, userEmail } = this.props;
        if (userInfo == '')
            Alert.alert(
                'An e-mail has been sent',
                'Please check your e-mail', [{
                    text: 'OK'
                }]
            )
        dispatch(resetPassword(userInfo));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormLabel>Enter your E-mail</FormLabel>
                    <FormInput onChangeText={this.handleEmailForPassword} />
                </View>
                <Button
                    title='RESET PASSWORD'
                    style={styles.button}
                    backgroundColor={'#346abb'}
                    onPress={this.handleResetPassword}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 50
    },
    formContainer: {
        paddingBottom: 20,
        width: 350
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        width: 320
    }
})

function mapStoreToProps(store) {
    return {
        userEmail: store.signupData.userEmail
    };
}

export default connect(mapStoreToProps)(PasswordContainer)