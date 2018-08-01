import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { List, ListItem, FormLabel, FormInput, Button, Icon, Input, ButtonGroup, Card } from 'react-native-elements';
import { StackNavigator, TabBarBottom } from 'react-navigation';
import { cardholderNameEntry, zipCodeEntry, cardNumberEntry, cardExpMonthEntry, cardExpYearEntry, cardCvcEntry, handleTransaction } from './donateActions'

class DonateContainer extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
    };

    this.handleCardholderName = this.handleCardholderName.bind(this);
    this.handleZipCode = this.handleZipCode.bind(this);
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleCardExpMonth = this.handleCardExpMonth.bind(this);
    this.handleCardExpYear = this.handleCardExpYear.bind(this);
    this.handleCardCvc = this.handleCardCvc.bind(this);
    this.handleDonationSubmit = this.handleDonationSubmit.bind(this);
  }

  handleCardholderName(text) {
    const { dispatch } = this.props;
    dispatch(cardholderNameEntry(text));
  }

  handleCardNumber(text) {
    const { dispatch } = this.props
    dispatch(cardNumberEntry(text))
  }

  handleCardExpMonth(text) {
    const { dispatch } = this.props
    dispatch(cardExpMonthEntry(text))
  }

  handleCardExpYear(text) {
    const { dispatch } = this.props
    dispatch(cardExpYearEntry(text))
  }

  handleCardCvc(text) {
    const { dispatch } = this.props
    dispatch(cardCvcEntry(text))
  }

  handleZipCode(text) {
    const { dispatch } = this.props
    dispatch(zipCodeEntry(text))
  }

  handleDonationSubmit(number) {
    const { dispatch, cardholderName, zipCode, cardNumber, expMonth, expYear, cvc } = this.props;
    const { navigate } = this.props.navigation;
    let amount = number; 
    if (cardholderName == '' || cardNumber == '' || zipCode == '' || expMonth == '' || expYear == '', cvc == '') {
      Alert.alert(
        'Form Error',
        'Complete all fields to submit', [{
          text: 'OK',
          onPress: null,
          style: 'cancel'
        }]
      )
    } else {
      var cardDetails = {
        "card[name]": cardholderName,
        "card[number]": cardNumber,
        "card[exp_month]": expMonth,
        "card[exp_year]": expYear,
        "card[cvc]": cvc,
        "card[address_zip]": zipCode,
      };
      dispatch(handleTransaction(cardDetails, amount, navigate));
    }
  }

  render() {
    const { cardholderName, zipCode, cardNumber, expMonth, expYear, cvc  } = this.props;
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <View style={styles.imageview}>
          <Image
            source={require('../../assets/images/stripe-payment-logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.form}>
          {/* <FormLabel>Your donation to San Diego JS supports event etc...</FormLabel> */}
          <FormLabel>CARDHOLDER NAME</FormLabel>
          <FormInput
            value={cardholderName}
            type='text'
            name='cardholder-name'
            class='field is-empty'
            placeholder='SDJS'
            icon={{ name: 'sign-in', type: 'font-awesome' }}
            onChangeText={this.handleCardholderName}
          />
          <FormLabel>CARD NUMBER</FormLabel>
          <FormInput
            value={cardNumber}
            type='number'
            class='field is-empty'
            placeholder='1234 1234 1234 1234'
            keyboardType='numeric'
            onChangeText={this.handleCardNumber}
          />

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.inputWrap}>
                <FormLabel>MM</FormLabel>
                <FormInput
                  value={expMonth}
                  type='number'
                  class='field is-empty'
                  maxLength={2}
                  placeholder="12"
                  keyboardType='numeric'
                  onChangeText={this.handleCardExpMonth} />
              </View>

              <View style={styles.inputWrap}>
                <FormLabel>YY</FormLabel>
                <FormInput
                  value={expYear}
                  returnKeyType={"next"}
                  type='number'
                  class='field is-empty'
                  maxLength={2}
                  placeholder="22"
                  keyboardType='numeric'
                  onChangeText={this.handleCardExpYear} />
              </View>
            </View>

            <View style={styles.inputWrap}>
              <FormLabel>CVC</FormLabel>
              <FormInput
                value={cvc}
                type='number'
                class='field is-empty'
                maxLength={4}
                placeholder="123"
                keyboardType='numeric'
                onChangeText={this.handleCardCvc} />
            </View>
          </View>
          <FormLabel>ZIP CODE</FormLabel>
          <FormInput
            value={zipCode}
            type="number"
            class='field is-empty'
            placeholder='92104'
            onChangeText={this.handleZipCode}
          />
          <Button
            onPress={() => this.handleDonationSubmit(2500)}
            borderRadius={3}
            backgroundColor='#346abb'
            style={styles.updateButton}
            title='DONATE $25' />
          <Button
            onPress={() => this.handleDonationSubmit(1000)}
            borderRadius={3}
            backgroundColor='#346abb'
            style={styles.updateButton}
            value={10}
            title='DONATE $10' />
          <Button
            onPress={() => this.handleDonationSubmit(500)}
            borderRadius={3}
            backgroundColor='#346abb'
            style={styles.updateButton}
            value={5}
            title='DONATE $5' />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },

  row2: {
    flex: 2,
    flexDirection: "row"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
  },
  buttonrow: {
    flex: 1,
    flexDirection: "row"
  },
  updateButton: {
    marginTop: 30,
    marginRight: 5,
    marginLeft: 5,
  },
  imageview: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: "center",
    width: 100,
    height: 50,
  }
})

function mapStoreToProps(store) {
  return {
    cardholderName: store.donateData.cardholderName,
    cardNumber: store.donateData.cardNumber,
    zipCode: store.donateData.zipCode,
    expMonth: store.donateData.expMonth,
    expYear: store.donateData.expYear,
    cvc: store.donateData.cvc,
  };
}

export default connect(mapStoreToProps)(DonateContainer)