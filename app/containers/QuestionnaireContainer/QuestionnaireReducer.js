

const defaultState = {
    question1: '',
    question2: '',
    question3: '',
}

export default function questionnaireReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'QUESTION_1_ENTRY': {
            return {
                ...state,
                question1: payload
            }
        }
        case 'QUESTION_2_ENTRY': {
            return {
                ...state,
                question2: payload
            }
        }
        case 'QUESTION_3_ENTRY': {
            return {
                ...state,
                question3: payload
            }
        }
        case 'QUESTIONNAIRE_ENTRY_PENDING': {
            return{
                ...state,
            }
        }
        case 'QUESTIONNAIRE_ENTRY_FULFILLED': {
            return {
                ...state,
                id: payload.id,
                answers: {
                    answer1: payload.answer1,
                    answer2: payload.answer2,
                    answer3: payload.answer3,

                }
            }
        }
        case 'QUESTIONNAIRE_ENTRY_REJECTED': {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}