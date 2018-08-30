import { userData as defaultState } from '../../Defaults';

export default function LogoutReducer(state = defaultState, action) {
  // eslint-disable-next-line no-unused-vars
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
