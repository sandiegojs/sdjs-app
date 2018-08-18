import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, View, Alert, ScrollView
} from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';
import {
  question1Entry, question2Entry, question3Entry, allAnswers
} from './QuestionnaireActions';

class QuestionnaireContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleQuestion1Input = this.handleQuestion1Input.bind(this);
    this.handleQuestion2Input = this.handleQuestion2Input.bind(this);
    this.handleQuestion3Input = this.handleQuestion3Input.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSkipButton = this.handleSkipButton.bind(this);
  }

  handleQuestion1Input(text) {
    const { dispatch } = this.props;
    dispatch(question1Entry(text));
  }

  handleQuestion2Input(text) {
    const { dispatch } = this.props;
    dispatch(question2Entry(text));
  }

  handleQuestion3Input(text) {
    const { dispatch } = this.props;
    dispatch(question3Entry(text));
  }

  handleFormSubmit() {
    const {
      dispatch, question1, question2, question3, user,
    } = this.props;
    const { navigate } = this.props.navigation;

    if (question1 === '' || question2 === '' || question3 === '') {
      Alert.alert(
        'Form Error',
        'Complete all fields to submit', [{
          text: 'OK',
          onPress: null,
          style: 'cancel',
        }],
      );
    } else {
      Alert.alert(
        'Success ',
        'Congratulations! You have signed up successfully!', [{
          text: 'OK',
          onPress: null,
          style: 'cancel',
        }],
      );
      const answers = { question1, question2, question3 };
      dispatch(allAnswers(answers, user.id, user.token));
      navigate('Events');
    }
  }

  handleSkipButton() {
    Alert.alert(
      'Success ',
      'Congratulations! You have signed up successfully!', [{
        text: 'OK',
        onPress: null,
        style: 'cancel',
      }],
    );
    const { navigate } = this.props.navigation;
    navigate('Events');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <FormLabel>Have you ever attended an SDJS meetup?</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleQuestion1Input}
            />
            <FormLabel>How did you hear about SDJS?</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleQuestion2Input}
            />
            <FormLabel>What would you like to learn?</FormLabel>
            <FormInput
              containerStyle={{
                margin: 5,
                borderBottomColor: 'black'
              }}
              onChangeText={this.handleQuestion3Input}
            />
          </View>
          <Button
            large
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 300,
              height: 55
            }}
            onPress={this.handleFormSubmit}
            title="Submit"
          />
          <Button
            large
            buttonStyle={{
              backgroundColor: '#346abb',
              borderRadius: 7,
              marginTop: 7,
              marginBottom: 25,
              width: 300,
              height: 55
            }}
            onPress={this.handleSkipButton}
            title="Skip"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    padding: 30,
  },
  formContainer: {
    paddingBottom: 20,
    width: 350,
    margin: 15,
  },
});

function mapStoreToProps(store) {
  return {
    user: store.userData.user,
    question1: store.questionnaireData.question1,
    question2: store.questionnaireData.question2,
    question3: store.questionnaireData.question3,
  };
}

export default connect(mapStoreToProps)(QuestionnaireContainer);
