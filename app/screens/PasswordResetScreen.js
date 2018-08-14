import React from 'react';
import PasswordContainer from '../containers/PasswordContainer/PasswordContainer';

export default class PasswordResetScreen extends React.Component {
 static navigationOptions = {
     title: 'Reset Password',
     headerLeft: null,
 };

    render() {
        return (
            <PasswordContainer navigation={this.props.navigation} />
        );
    }
};