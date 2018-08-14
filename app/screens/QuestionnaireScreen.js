import React from 'react';
import QuestionnaireContainer from '../containers/QuestionnaireContainer/QuestionnaireContainer'

export default class QuestionnaireScreen extends React.Component {
    static navigationOptions = {
        title: 'Questionnaire',
        headerLeft: null,
    };

    render() {
        const{ navigate } = this.props.navigation;
        return (
            <QuestionnaireContainer navigation={this.props.navigation}/>
        );
    }
};