import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert } from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';
import { question1Entry, question2Entry, question3Entry, allAnswers} from './QuestionnaireActions';

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
        const { dispatch, question1, question2, question3, user } = this.props;
        const { navigate } = this.props.navigation;

        if (question1 === '' || question2 === '' || question3 === '') {
            Alert.alert(
                'Form Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            );
        } else {
            Alert.alert(
                'Success ',
                'Congratulations! You have Signup successfully!', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            )
            const answers = { question1, question2, question3 };
            dispatch(allAnswers(answers, user.id, user.token));
            navigate('Events');
        }
    }

    handleSkipButton(){
        Alert.alert(
            'Success ',
            'Congratulations! You have Signup successfully!', [{
                text: 'OK',
                onPress: null,
                style: 'cancel'
            }]
        )
        const { navigate } = this.props.navigation;
        navigate('Events');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FormLabel>Have you ever attended an SDJS meetup?</FormLabel>
                    <FormInput onChangeText={this.handleQuestion1Input} />
                    <FormLabel>How did you hear about SDJS?</FormLabel>
                    <FormInput onChangeText={this.handleQuestion2Input} />
                    <FormLabel>What would you like to learn?</FormLabel>
                    <FormInput onChangeText={this.handleQuestion3Input} />
                </View>
                <View style={{margin:10}}>
                <View style={styles.buttons}>
                    <Button
                        large
                        backgroundColor='#346abb'
                        style={styles.updateButton}
                        onPress={this.handleProfileUpdate}
                        onPress={this.handleFormSubmit}
                        title="Submit"
                    />
                    </View>
                    <View style={styles.buttons}>
                    <Button
                        large
                        backgroundColor='#346abb'
                        borderRadius={3}
                        style={styles.updateButton}
                        onPress={this.handleProfileUpdate}
                        onPress={this.handleSkipButton}
                        title="Skip"
                    />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 300
    },
    buttons: {
    marginVertical: 10
    }
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
