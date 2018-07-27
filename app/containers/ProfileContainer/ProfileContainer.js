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
        // this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
    }

    handleProfileUpdate(obj) {
        const { navigate } = this.props.navigation;
        const { dispatch, profileData, profileUpdate, id } = this.props;
        const newProfileData = { ...profileData, ...profileUpdate };
        dispatch(actions.profileUpdate(newProfileData, id));
        navigate('Events');

    }

    handleFirstNameUpdate(first_name) {
        const { dispatch } = this.props;
        dispatch(actions.firstNameUpdate(first_name))
    }

    handleLastNameUpdate(last_name) {
        const { dispatch } = this.props;
        dispatch(actions.lastNameUpdate(last_name))
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
    }

    // handleLocationUpdate(location) {
    //     const { dispatch } = this.props;
    //     dispatch(actions.locationUpdate(location))
    // }

    render() {
        const { profileData } = this.props;
        const { profileUpdate } = this.props;
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
                {/* <FormLabel>Location</FormLabel>
                <FormInput
                    defaultValue={profileData.location}
                    onChangeText={this.handleLocationUpdate}
                    style={styles.bottomInput}
                /> */}
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
        profileData: {
            first_name: store.signupData.first_name,
            last_name: store.signupData.last_name,
            email: store.signupData.email,
            bio: store.signupData.bio,
            company: store.signupData.company,
            url: store.signupData.url  
        },
        id: store.signupData.id,
        profileUpdate: store.profileUpdate
    };
}

export default connect(mapStoreToProps)(ProfileContainer)