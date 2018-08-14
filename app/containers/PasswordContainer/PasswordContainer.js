import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailResetPasswordEntry, resetPassword } from './passwordActions';
import { emailEntry } from '../SignupContainer/signupActions';

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

    handleResetPassword() {
        //logic needs fixing
        const { dispatch } = this.props;
        const { userEmail } = this.props;
        dispatch(resetPassword(userEmail));
    }

    render() {
        const { userEmail } = this.props; 
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormLabel>Enter your E-mail</FormLabel>
                    <FormInput defaultValue={userEmail} onChangeText={this.handleEmailForPassword} />
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
        userEmail: store.userData.userEmail,
    };
}

export default connect(mapStoreToProps)(PasswordContainer)
