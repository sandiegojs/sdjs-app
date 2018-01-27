const defaultState = {
    eventsData:'',
    selectedEvent: ''
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

      case 'UPDATE_SELECETED_EVENT': {
        return {
          ...state,
          selectedEvent: payload
        };
      }
      default: {
        return state;
      }
    }
  };