import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { FormLabel, Button } from 'react-native-elements';
import { question1Entry, question2Entry, question3Entry } from './QuestionnaireActions';

class QuestionnaireContainer extends React.Component {
    constructor(props) {
        super(props)

        this.handleQuestion1Input = this.handleQuestion1Input.bind(this);
        this.handleQuestion2Input = this.handleQuestion2Input.bind(this);
        this.handleQuestion3Input = this.handleQuestion3Input.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
        const { dispatch, question1, question2, question3, id } = this.props;
        const { navigate } = this.props.navigation;

        if (question1 == '' || question2 == '' || question3 == '') {
            Alert.alert(
                'Form Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            )
        } else {
            const answers = {
                "answer1": question1,
                "answer2": question1,
                "answer3": question1,
                "id": id
            }
            dispatch(allAnswers(answers, navigate));
        }
    }
    render() {
        return (
            <View>
                <View>
                    <FormLabel>Have you ever attended an SDJS meetup?</FormLabel>
                    <TextInput onChangeText={this.handleQuestion1Input} />
                    <FormLabel>How did you hear about SDJS?</FormLabel>
                    <TextInput onChangeText={this.handleQuestion2Input} />
                    <FormLabel>What would you like to learn?</FormLabel>
                    <TetInput onChangeText={this.handleQuestion3Input} />
                </View>
                <View>
                    <Button
                        onPress={this.handleFormSubmit}
                    />
                </View>
            </View>
        )
    }
}

function mapStoreToProps(store) {
    return {
        id: store.signupData.id
    }
}

export default connect(mapStoreToProps)(QuestionnaireContainer)