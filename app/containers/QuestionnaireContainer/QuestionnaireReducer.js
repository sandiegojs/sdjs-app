import { questionnaireData as defaultState } from '../../DefaultStates';

export default function questionnaireReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'QUESTION_1_ENTRY': {
      return {
        ...state,
        question1: payload
      };
    }
    case 'QUESTION_2_ENTRY': {
      return {
        ...state,
        question2: payload
      };
    }
    case 'QUESTION_3_ENTRY': {
      return {
        ...state,
        question3: payload
      };
    }
    default: {
      return state;
    }
  }
}
