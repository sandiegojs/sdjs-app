const defaultState = {
  emailInput: ''
};

export default function PasswordReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'EMAIL_RESET_PASSWORD_ENTRY': {
      return {
        ...state,
        emailInput: payload
      };
    }

    default: {
      return state;
    }
  }
}
