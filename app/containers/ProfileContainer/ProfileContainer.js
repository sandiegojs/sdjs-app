import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem, FormLabel, FormInput, Button } from "react-native-elements";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { profileData } = this.props;
        console.log("profileData", profileData)
        return (
            <View>
                <FormLabel>First Name</FormLabel>
                <FormInput
                defaultValue="Clay" />
                <FormLabel>Last Name</FormLabel>
                <FormInput
                defaultValue="Knight" />
                <FormLabel>Email</FormLabel>
                <FormInput
                defaultValue="Clay@the861groupe.com" />
                <FormLabel>Bio</FormLabel>
                <FormInput
                defaultValue="Professional Cheese Muncher" />
                <FormLabel>Company</FormLabel>
                <FormInput
                defaultValue="Google" />
                <FormLabel>Website</FormLabel>
                <FormInput
                defaultValue="http://cheerios.com" />
                <FormLabel>Location</FormLabel>
                <FormInput
                defaultValue="North County"
                style={styles.bottomInput}
                />
                <Button
                large
                // raised
                backgroundColor='#346abb'
                borderRadius={3}
                style={styles.updateButton}
                title="UPDATE" />
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    updateButton: {
        marginTop: 30
    },
    bottomInput: {
        // marginBottom: 268
    }
})

//FIX HERE!!!!!!!!!!!
function mapStoreToProps(store) {
    return {
        firstName: store.loginData.firstName,
        lastName: store.loginData.lastName,
        email: store.loginData.email,
        profileData: store.eventsData.profileData

    };
}

export default connect(mapStoreToProps)(ProfileContainer)