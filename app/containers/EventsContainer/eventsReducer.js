const defaultState = {
    text:'Its working',
  };
  
  export default function EventsReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'UPDATE_EVENTS_TEXT_INPUT': {
        return {
          ...state,
          text: payload
        };
      }
      default: {
        return state;
      }
    }
  }