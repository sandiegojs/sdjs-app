import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { List, ListItem, FormLabel, FormInput } from "react-native-elements";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FormLabel>First Name</FormLabel>
                <FormInput
                defaultValue="Clay" />
            </View>
        )
    }

}

function mapStoreToProps(store) {
    return {
        firstName: store.loginData.firstName,
        lastName: store.loginData.lastName,
        email: store.loginData.email,
        user: store.loginData.user

    };
}

export default connect(mapStoreToProps)(ProfileContainer)