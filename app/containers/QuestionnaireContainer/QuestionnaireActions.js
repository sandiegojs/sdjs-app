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

export function allAnswers(answers, id) {
    
    return {
        type: 'QUESTIONNAIRE_ENTRY',
        payload: axios
            .patch('https://sdjs-app.now.sh/api/users/' + id, answers)
            .then(response => response.data)
    }
}