import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailResetPasswordEntry, resetPassword } from './passwordActions';

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
        //logic needs fixing
        const { dispatch, emailInput } = this.props;
        const { navigate } = this.props.navigation;
        dispatch(resetPassword(emailInput, navigate));
    }

    render() {
        const { emailInput } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <FormLabel>Enter your E-mail</FormLabel>
                    <FormInput defaultValue={emailInput} onChangeText={this.updateEmailInput} />
                </View>
                <Button
                    title='RESET PASSWORD'
                    style={styles.button}
                    backgroundColor={'#346abb'}
                    onPress={this.submitResetPasswordRequest}
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
});

function mapStoreToProps(store) {
    return {
      emailInput: store.passwordData.emailInput
    };
}

export default connect(mapStoreToProps)(PasswordContainer)
