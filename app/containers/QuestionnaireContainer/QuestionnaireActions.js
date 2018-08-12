import { bindActionCreators } from 'redux';
import axios from 'axios';

export function question1Entry(text) {

    return {
        type: "QUESTION_1_ENTRY",
        patload: text
    }
}

export function question2Entry(text) {

    return {
        type: 'QUESTION_2_ENTRY',
        payload: text
    }
}

export function question3Entry(text) {

    return {
        type: 'QUESTION_3_ENTRY',
        payload: text
    }
}

export function allAnswers(answers, navigate) {
    return {
        type: 'QUESTIONNAIRE_ENTRY',
        payload: axios
            .put('https://sdjs-app.now.sh/questionnaire', answers)
            .then(response => {
                var statusCode = RegExp('442*');
                QuestionnaireRes = response.data
                if (statusCode.test(QuestionnaireRes)) {
                    let error = {error: 'invalid'}
                    throw error
                }
                else{
                    navigate('Events');
                    return answers;
                }
            })
    }
}