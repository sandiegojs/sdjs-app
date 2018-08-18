import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, View, Alert, Image, ScrollView,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import {
  cardholderNameEntry, zipCodeEntry, cardNumberEntry, cardExpMonthEntry, cardExpYearEntry, cardCvcEntry, handleTransaction,
} from './donateActions';

class DonateContainer extends React.Component {
  constructor(props) {
    super(props);

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
    const { dispatch } = this.props;
    dispatch(cardNumberEntry(text));
  }

  handleCardExpMonth(text) {
    const { dispatch } = this.props;
    dispatch(cardExpMonthEntry(text));
  }

  handleCardExpYear(text) {
    const { dispatch } = this.props;
    dispatch(cardExpYearEntry(text));
  }

  handleCardCvc(text) {
    const { dispatch } = this.props;
    dispatch(cardCvcEntry(text));
  }

  handleZipCode(text) {
    const { dispatch } = this.props;
    dispatch(zipCodeEntry(text));
  }

  handleDonationSubmit(number) {
    const {
      dispatch, cardholderName, zipCode, cardNumber, expMonth, expYear, cvc,
    } = this.props;
    const { navigate } = this.props.navigation;
    const amount = number;
    if (cardholderName == '' || cardNumber == '' || zipCode == '' || expMonth == '' || expYear == '', cvc == '') {
      Alert.alert(
        'Form Error',
        'Complete all fields to submit', [{
          text: 'OK',
          onPress: null,
          style: 'cancel',
        }],
      );
    } else {
      const cardDetails = {
        'card[name]': cardholderName,
        'card[number]': cardNumber,
        'card[exp_month]': expMonth,
        'card[exp_year]': expYear,
        'card[cvc]': cvc,
        'card[address_zip]': zipCode,
      };
      dispatch(handleTransaction(cardDetails, amount, navigate));
    }
  }

  render() {
    const {
      cardholderName, zipCode, cardNumber, expMonth, expYear, cvc,
    } = this.props;
    return (
      <ScrollView>
        <View style={styles.imageview}>
          <Image
            source={require('../../assets/images/stripe-payment-logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.formContainer}>
          <FormLabel>CARDHOLDER NAME</FormLabel>
          <FormInput
            value={cardholderName}
            type='text'
            name='cardholder-name'
            class='field is-empty'
            placeholder=' Name That Appears On Card'
            icon={{ name: 'sign-in', type: 'font-awesome' }}
            containerStyle={{ width: "80%" }}
            onChangeText={this.handleCardholderName}
          />
          <FormLabel>CARD NUMBER</FormLabel>
          <FormInput
            value={cardNumber}
            type='number'
            class='field is-empty'
            maxLength={16}
            placeholder=' #### #### #### ####'
            keyboardType='numeric'
            containerStyle={{ width: "45%" }}
            onChangeText={this.handleCardNumber}
          />
          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <FormLabel>MM</FormLabel>
              <FormInput
                value={expMonth}
                type='number'
                class='field is-empty'
                maxLength={2}
                placeholder=" ##"
                keyboardType='numeric'
                containerStyle={{ width: "28%" }}
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
                placeholder=" ##"
                keyboardType='numeric'
                containerStyle={{ width: "28%", }}
                onChangeText={this.handleCardExpYear} />
            </View>
            <View style={styles.inputWrap}>
              <FormLabel>CVC</FormLabel>
              <FormInput
                value={cvc}
                type='number'
                class='field is-empty'
                maxLength={3}
                placeholder=" ###"
                keyboardType='numeric'
                containerStyle={{ width: "36%" }}
                onChangeText={this.handleCardCvc} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <FormLabel>ZIP CODE</FormLabel>
              <FormInput
                value={zipCode}
                type="number"
                maxLength={5}
                class='field is-empty'
                placeholder=' #####'
                keyboardType='numeric'
                containerStyle={{
                  width: "15%"
                }}
                onChangeText={this.handleZipCode}
              />
            </View>
          </View>
          <Button
            onPress={() => this.handleDonationSubmit(2500)}
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 24,
              marginBottom: 7,
              width: 300,
              height: 54,
            }}
            value={25}
            title='DONATE $25'
          />
          <Button
            onPress={() => this.handleDonationSubmit(1000)}
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 15,
              marginBottom: 7,
              width: 300,
              height: 54,
            }}
            value={10}
            title="DONATE $10"
          />
          <Button
            onPress={() => this.handleDonationSubmit(500)}
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 15,
              marginBottom: 15,
              width: 300,
              height: 54,
            }}
            value={5}
            title="DONATE $5"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    paddingBottom: 11,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageview: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'center',
    width: 100,
    height: 50
  },
});

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

export default connect(mapStoreToProps)(DonateContainer);
