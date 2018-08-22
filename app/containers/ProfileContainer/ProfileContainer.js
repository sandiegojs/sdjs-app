import React from 'react';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import SwitchToggle from 'react-native-switch-toggle';
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
    this.handleNumberUpdate = this.handleNumberUpdate.bind(this);
    this.handleEmailToggle = this.handleEmailToggle.bind(this);
    this.handlePhoneToggle = this.handlePhoneToggle.bind(this);
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

  handleNumberUpdate(phone) {
    const { dispatch } = this.props;
    dispatch(actions.numberUpdate(phone));
  }

  handleEmailToggle(allowEmails) {
    const { dispatch } = this.props;
    dispatch(actions.toggleEmails(allowEmails));
  };

  handlePhoneToggle(allowSMS) {
    const { dispatch } = this.props;
    dispatch(actions.toggleSMS(allowSMS));
  };

  render() {
    const { firstName, lastName, email, bio, company, url, phone, allowEmails, allowSMS } = this.props.profileData;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>
              First Name
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={firstName}
              autoCorrect={false}
              returnKeyType={"next"}
              onChangeText={this.handleFirstNameUpdate}
            />
            <FormLabel>
              Last Name
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={lastName}
              autoCorrect={false}
              returnKeyType={"next"}
              onChangeText={this.handleLastNameUpdate}
            />
            <FormLabel>
              Email
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={email}
              autoCorrect={false}
              returnKeyType={"next"}
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={this.handleEmailUpdate}
            />
            <FormLabel>
              Phone Number
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={phone}
              autoCorrect={false}
              maxLength={10}
              type="number"
              keyboardType='numeric'
              returnKeyType={"next"}
              onChangeText={this.handleNumberUpdate}
            />
            <FormLabel>
              Bio
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={bio}
              autoCorrect={false}
              returnKeyType={"next"}
              onChangeText={this.handleBioUpdate}
            />
            <FormLabel>
              Company
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black'
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={company}
              autoCorrect={false}
              returnKeyType={"next"}
              onChangeText={this.handleCompanyUpdate}
            />
            <FormLabel>
              Website
            </FormLabel>
            <FormInput
              containerStyle={{
                borderBottomColor: 'black',
                marginBottom: 25,
              }}
              inputStyle={{ paddingLeft: 4 }}
              defaultValue={url}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={this.handleUrlUpdate}
            />
            <Text style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '500',
              marginBottom: 21
              }}
            >
              I Want To Recieve SDJS Notifications
            </Text>
              <View style={styles.row}>
                <View style={styles.inputWrap}>
                  <Text>Phone Notifications</Text>
                  <SwitchToggle
                    containerStyle={{
                      marginBottom: 16,
                      width: 55,
                      height: 26,
                      borderRadius: 18,
                      padding: 5,
                    }}
                    backgroundColorOn='#346abb'
                    backgroundColorOff='#e5e1e0'
                    circleColorOff='white'
                    circleColorOn='white'
                    circleStyle={{
                      width: 15,
                      height: 15,
                      borderRadius: 7
                    }}
                    duration={200}
                    switchOn={allowSMS}
                    onPress={() => this.handlePhoneToggle(!allowSMS)}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <Text>Email Notifications</Text>
                  <SwitchToggle
                    containerStyle={{
                      marginBottom: 16,
                      width: 55,
                      height: 26,
                      borderRadius: 18,
                      padding: 5,
                    }}
                    backgroundColorOn='#346abb'
                    backgroundColorOff='#e5e1e0'
                    circleColorOff='white'
                    circleColorOn='white'
                    circleStyle={{
                      width: 15,
                      height: 15,
                      borderRadius: 7
                    }}
                    duration={200}
                    switchOn={allowEmails}
                    onPress={() => this.handleEmailToggle(!allowEmails)}
                  />
                </View>
              </View>
            <Button
              large
              buttonStyle={{
                backgroundColor: '#346abb',
                borderRadius: 7,
                marginTop: 25,
                marginBottom: 21,
                width: 300,
                height: 55,
              }}
              onPress={this.handleProfileUpdate}
              title="UPDATE"
            />
          </View>
          <TouchableOpacity
            onPress={async () => {
              return await WebBrowser.openBrowserAsync('https://www.freeprivacypolicy.com/privacy/view/2a457560dcd4e317d6be72a2727c35f5')
            }}
          >
            <Text
              style={{
                marginBottom: 11,
                fontSize: 16,
                fontWeight: '500'
              }}
            >
              {'Privacy Policy'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10
  },
  formContainer: {
    width: 333
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function mapStoreToProps(store) {
  return {
    user: store.userData.user,
    profileData: store.profileData
  };
}

export default connect(mapStoreToProps)(ProfileContainer);
