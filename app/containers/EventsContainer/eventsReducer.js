const defaultState = {
    eventsData:'',
    selectedEvent: '',
    locationError:'',
    checkedIn: false,
    attendeeId: '',
    profileData: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      bio: "",
      url: "",
      location: "",
      company: "",
      tokens: [
        
      ],
      photo: ""
    }
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
        }
      };
      case 'SET_LOCATION_ERROR': {
        return {
          ...state,
          locationError: payload
        };
      }
      case 'CHECKED_IN_TRUE': {
        return {
          ...state,
          checkedIn: payload
        };
      }
      case 'CHECKED_IN_FALSE': {
        return {
          ...state,
          checkedIn: payload
        };
      }
      case 'ADD_ATTENDEE_TO_EVENT_FULFILLED': {
        return {
          ...state,
          attendeeId: payload
        };
      }
      case 'PROFILE_QUERY_FULFILLED': {
        return {
          ...state,
          profileData: payload
        }
      }
      default: {
        return state;
      }
    }
  };