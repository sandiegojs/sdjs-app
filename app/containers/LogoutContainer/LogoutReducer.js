import {userData as defaultState} from '../../DefaultStates';

export default function LogoutReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CLEAR_INPUT_FIELD': {
      return defaultState;
    }

    default: {
      return state;
    }
  }
}
