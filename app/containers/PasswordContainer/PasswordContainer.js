import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {emailResetPasswordEntry, resetPassword} from './passwordActions';

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

        const {dispatch, emailInput} = this.props;
        const {navigate } = this.props.navigation;
        dispatch(resetPassword(emailInput, navigate));
    }

    render() {
        const { emailInput } = this.props;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.formContainer}>
                            <FormLabel>Enter your E-mail</FormLabel>
                            <FormInput
                                containerStyle={{
                                    margin: 5,
                                    borderBottomColor: 'black'
                                }}
                                defaultValue={emailInput}
                                onChangeText={this.updateEmailInput}
                            />
                        </View>
                        <Button
                            title='RESET PASSWORD'
                            buttonStyle={{
                                backgroundColor: '#346abb',
                                borderRadius: 7,
                                marginTop: 7,
                                marginBottom: 25,
                                width: 311
                            }}
                            onPress={this.submitResetPasswordRequest}
                        />
                        <View style={styles.loginTextCont}>
                        <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Login')}
                        >
                        <Text style={styles.textButton}>{'Return to Login'}</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginVertical: 25,
        flexDirection: 'row',
    },
    textButton:{
        fontSize: 16,
        fontWeight: '500'
    }
});

function mapStoreToProps(store) {
    return {
      emailInput: store.passwordData.emailInput
    };
}

export default connect(mapStoreToProps)(PasswordContainer)
