import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, View, ScrollView, Keyboard,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import * as actions from './profileActions';

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
    this.handleSMSNumber = this.handleSMSNumber.bind(this);
    this.handleSMS = this.handleSMS.bind(this);
  }

  componentWillMount() {
    const { dispatch, user } = this.props;
    dispatch(actions.profileInit(user.id, user.token));
  }

  handleProfileUpdate() {
    const { navigate } = this.props.navigation;
    const { dispatch, user, profileData } = this.props;
    dispatch(actions.profileUpdate(profileData, user.id, user.token));
    navigate('Events');
  }

  handleFirstNameUpdate(firstName) {
    const { dispatch } = this.props;
    dispatch(actions.firstNameUpdate(firstName));
  }

  handleLastNameUpdate(lastName) {
    const { dispatch } = this.props;
    dispatch(actions.lastNameUpdate(lastName));
  }

  handleEmailUpdate(email) {
    const { dispatch } = this.props;
    dispatch(actions.emailUpdate(email));
  }

  handleBioUpdate(bio) {
    const { dispatch } = this.props;
    dispatch(actions.bioUpdate(bio));
  }

  handleCompanyUpdate(company) {
    const { dispatch } = this.props;
    dispatch(actions.companyUpdate(company));
  }

  handleUrlUpdate(url) {
    const { dispatch } = this.props;
    dispatch(actions.urlUpdate(url));
  }

  handleSMSNumber(phone) {
    const { dispatch } = this.props;
    dispatch(actions.notificationNumber(phone));
  }

  handleSMS() {
    const { dispatch, user, profileData } = this.props;
    dispatch(actions.SMSNotifications(profileData.phone, user.id, user.token));
  }

  render() {
    const {
      firstName, lastName, email, bio, company, url,
    } = this.props.profileData;
    return (
      <ScrollView onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>
First Name
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={firstName}
              onChangeText={this.handleFirstNameUpdate}
            />
            <FormLabel>
Last Name
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={lastName}
              onChangeText={this.handleLastNameUpdate}
            />
            <FormLabel>
Email
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={email}
              onChangeText={this.handleEmailUpdate}
            />
            <FormLabel>
Bio
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={bio}
              onChangeText={this.handleBioUpdate}
            />
            <FormLabel>
Company
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={company}
              onChangeText={this.handleCompanyUpdate}
            />
            <FormLabel>
Website
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
              }}
              defaultValue={url}
              onChangeText={this.handleUrlUpdate}
            />
            <Button
              large
              buttonStyle={{
                backgroundColor: '#346abb',
                borderRadius: 7,
                marginTop: 24,
                width: 300,
                height: 55,
              }}
              onPress={this.handleProfileUpdate}
              title="UPDATE"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>
Would you like to recieve text notifications from SDJS?
            </FormLabel>
            <FormInput
              placeholder="please enter your phone number"
              onChangeText={this.handleSMSNumber}
            />
            <Button
              large
              buttonStyle={{
                backgroundColor: '#346abb',
                borderRadius: 7,
                marginTop: 24,
                width: 300,
                height: 55,
              }}
              onPress={this.handleSMS}
              title="Sign Up"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 30,
  },
  formContainer: {
    width: 333,
  },
});

function mapStoreToProps(store) {
  return {
    user: store.userData.user,
    profileData: store.profileData,
  };
}

export default connect(mapStoreToProps)(ProfileContainer);
