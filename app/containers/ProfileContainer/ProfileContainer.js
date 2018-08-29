import React from 'react';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TextInput
} from 'react-native';
import { Button, FormLabel } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <KeyboardAwareScrollView enableOnAndroid={true}
        enableAutoAutomaticScroll={(Platform.OS === 'ios')}
        extraHeight={130} extraScrollHeight={130}
      >
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>
              First Name
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={firstName}
              onChangeText={this.handleFirstNameUpdate}
            />
            <FormLabel>
              Last Name
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={lastName}
              onChangeText={this.handleLastNameUpdate}
            />
            <FormLabel>
              Email
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={email}
              keyboardType='email-address'
              onChangeText={this.handleEmailUpdate}
            />
            <FormLabel>
              Phone Number
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={phone}
              maxLength={10}
              type="number"
              keyboardType='numeric'
              onChangeText={this.handleNumberUpdate}
            />
            <FormLabel>
              Bio
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={bio}
              onChangeText={this.handleBioUpdate}
            />
            <FormLabel>
              Company
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={company}
              onChangeText={this.handleCompanyUpdate}
            />
            <FormLabel>
              Website
            </FormLabel>
            <TextInput
              style={styles.input}
              underlineColorAndroid='#ecf0f1'
              textContentType='name'
              autoCapitalize='none'
              autoCorrect={false}
              defaultValue={url}
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
      </KeyboardAwareScrollView>
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
  input: {
    margin: 11,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    paddingLeft: 4,
    paddingTop: 3,
    paddingBottom: 3,
    borderBottomColor: '#7f8c8d',
    fontSize: 18
  }
});

function mapStoreToProps(store) {
  return {
    user: store.userData.user,
    profileData: store.profileData
  };
}

export default connect(mapStoreToProps)(ProfileContainer);
