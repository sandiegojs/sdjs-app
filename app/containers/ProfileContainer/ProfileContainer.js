import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { List, ListItem, FormLabel, FormInput, Button } from "react-native-elements";
import { firstNameUpdate, lastNameUpdate, emailUpdate } from './profileActions'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
        this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this);
        this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    }

    handleFirstNameUpdate(firstName) {
        const { dispatch } = this.props;
        dispatch(firstNameUpdate(firstName))
    }

    handleLastNameUpdate(lastName) {
        const { dispatch } = this.props;
        dispatch(lastNameUpdate(lastName))
    }

    handleEmailUpdate(email) {
        const { dispatch } = this.props;
        dispatch(emailUpdate(email))
        console.log("email",email)
    }

    render() {
        const { profileData } = this.props;
        const firstName = profileData.first_name;
        console.log("profileData", profileData.last_name)
        return (
            <View>
                <FormLabel>First Name</FormLabel>
                <FormInput
                    defaultValue={profileData.first_name}
                    onChangeText={this.handleFirstNameUpdate}
                />
                <FormLabel>Last Name</FormLabel>
                <FormInput
                    defaultValue={profileData.last_name}
                    onChangeText={this.handleLastNameUpdate}
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                    defaultValue={profileData.email}
                    onChangeText={this.handleEmailUpdate}
                />
                <FormLabel>Bio</FormLabel>
                <FormInput
                    defaultValue={profileData.bio}
                    onChangeText={this.handleBioUpdate}
                />
                <FormLabel>Company</FormLabel>
                <FormInput
                    defaultValue={profileData.company}
                    onChangeText={this.handleCompanyUpdate}
                />
                <FormLabel>Website</FormLabel>
                <FormInput
                    defaultValue={profileData.url}
                    onChangeText={this.handleUrlUpdate}
                />
                <FormLabel>Location</FormLabel>
                <FormInput
                    defaultValue={profileData.location}
                    onChangeText={this.handleLocationUpdate}
                    style={styles.bottomInput}
                />
                <Button
                    large
                    backgroundColor='#346abb'
                    borderRadius={3}
                    style={styles.updateButton}
                    title="UPDATE" />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    updateButton: {
        marginTop: 30
    }
})

function mapStoreToProps(store) {
    return {
        firstName: store.loginData.firstName,
        lastName: store.loginData.lastName,
        email: store.loginData.email,
        profileData: store.eventsData.profileData


    };
}

export default connect(mapStoreToProps)(ProfileContainer)