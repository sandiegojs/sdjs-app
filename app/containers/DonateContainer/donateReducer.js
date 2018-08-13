const defaultState = {
  cardholderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvc: '',
  zipCode: ''
}

export default function donateReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
      case 'CARD_NAME_ENTRY': {
          return {
              ...state,
              cardholderName: payload
          }
      }
      case 'PHONE_NUM_ENTRY': {
          return {
              ...state,
              phoneNumber: payload
          }
      }
      case 'ZIP_CODE_ENTRY': {
          return {
              ...state,
              zipCode: payload
          }
      }
      case 'CARD_NUM_ENTRY': {
          return {
              ...state,
              cardNumber: payload
          }
      }
      case 'CARD_EXPMONTH_ENTRY': {
          return {
              ...state,
              expMonth: payload
          }
      }
      case 'CARD_EXPYEAR_ENTRY': {
          return {
              ...state,
              expYear: payload
          }
      }
      case 'CARD_CVC_ENTRY': {
          return {
              ...state,
              cvc: payload
          }
      }
      case 'HANDLE_TRANSACTION_FULFILLED': {
          console.log(payload);
          if ( payload === undefined ) {
            return {
                ...state,
                cardNumber: '',
                expMonth: '',
                expYear: '',
                cvc: '', 
            }
        } else {
          return {
              ...state,
              cardholderName: '',
              cardNumber: '',
              expMonth: '',
              expYear: '',
              cvc: '',
              zipCode: ''
          }
        }
      }
      default: {
          return state;
      }
  }
}