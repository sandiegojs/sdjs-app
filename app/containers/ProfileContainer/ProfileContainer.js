import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { List, ListItem, FormLabel, FormInput, Button } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import * as actions from './profileActions'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
        this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
        this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this);
        this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
        this.handleBioUpdate = this.handleBioUpdate.bind(this);
        this.handleCompanyUpdate = this.handleCompanyUpdate.bind(this);
        this.handleUrlUpdate = this.handleUrlUpdate.bind(this);
        this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
    }

    handleProfileUpdate(obj) {
        const { navigate } = this.props.navigation;
        const { dispatch, profileData, profileUpdate } = this.props;
        const newProfileData = { ...profileData, ...profileUpdate };
        dispatch(actions.profileUpdate(newProfileData));
        navigate('Events');

    }

    handleFirstNameUpdate(firstName) {
        const { dispatch } = this.props;
        dispatch(actions.firstNameUpdate(firstName))
    }

    handleLastNameUpdate(lastName) {
        const { dispatch } = this.props;
        dispatch(actions.lastNameUpdate(lastName))
    }

    handleEmailUpdate(email) {
        const { dispatch } = this.props;
        dispatch(actions.emailUpdate(email))
    }

    handleBioUpdate(bio) {
        const { dispatch } = this.props;
        dispatch(actions.bioUpdate(bio))
    }

    handleCompanyUpdate(company) {
        const { dispatch } = this.props;
        dispatch(actions.companyUpdate(company))
    }

    handleUrlUpdate(url) {
        const { dispatch } = this.props;
        dispatch(actions.urlUpdate(url))
        console.log("url", url)
    }

    handleLocationUpdate(location) {
        const { dispatch } = this.props;
        dispatch(actions.locationUpdate(location))
        console.log("location", location)
    }

    render() {
        const { profileData } = this.props;
        const { profileUpdate } = this.props;
        console.log("profileupdatedata", profileUpdate)
        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#fff' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
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
                    onPress={this.handleProfileUpdate}
                    title="UPDATE" />
            </KeyboardAwareScrollView>
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
        firstName: store.signupData.firstName,
        lastName: store.signupData.lastName,
        email: store.signupData.email,
        profileData: store.eventsData.profileData,
        profileUpdate: store.profileUpdate
    };
}

export default connect(mapStoreToProps)(ProfileContainer)