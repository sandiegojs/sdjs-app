const defaultState = {
    eventsData:'',
  };
  
  export default function EventsReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'UPDATE_EVENTS_DATA_FULFILLED': {
        return {
          ...state,
          eventsData: payload
        };
      }
      default: {
        return state;
      }
    }
  };