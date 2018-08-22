import {userData as defaultState} from '../../DefaultStates';

export default function loginReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_EMAIL_INPUT': {
      return {
        ...state,
        emailInput: payload,
      };
    }

    case 'UPDATE_PASSWORD_INPUT': {
      return {
        ...state,
        passwordInput: payload,
      };
    }

    case 'SUBMIT_LOGIN_FULFILLED': {
      return {
        ...state,
        user: payload,
      };
    }

    case 'SUBMIT_LOGIN_REJECTED': {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
