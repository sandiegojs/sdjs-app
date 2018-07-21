const defaultState = {
  eventsData: '',
  selectedEvent: '',
  locationError: false,
  checkedIn: false,
  checkedInStatus: null,
  rsvp: false,
  eventDetailsRSVP: false,
  eventDetailsRSVPEventId: '',
  attendeeId: '',
  rsvpEventId: '',
  userRSVPs: [],
  profileData: {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    bio: '',
    url: '',
    location: '',
    company: '',
    tokens: [],
    photo: ''
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
      };
    }
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
    case 'RSVP_TRUE': {
      return {
        ...state,
        rsvp: payload
      };
    }
    case 'RSVP_FALSE': {
      return {
        ...state,
        rsvp: payload
      };
    }
    case 'RSVP_EVENT_DETAILS_TRUE': {
      return {
        ...state,
        eventDetailsRSVP: payload
      };
    }
    case 'RSVP_EVENT_DETAILS_FALSE': {
      return {
        ...state,
        eventDetailsRSVP: payload
      };
    }
    case 'ADD_ATTENDEE_TO_EVENT_FULFILLED': {
      console.log('add attendee reducer log fired, g!!');
      console.log(payload);
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
    case 'UPDATE_RSVP_LIST_FULFILLED': {
      return {
        ...state,
        userRSVPs: payload
      }
    }
    case 'UPDATE_EVENT_DETAILS_RSVP': {
      return {
        ...state,
        eventDetailsRSVP: payload
      }
    }
    case 'UPDATE_EVENT_DETAILS_RSVP_EVENT_ID': {
      return {
        ...state,
        eventDetailsRSVPEventId: payload
      }
    }
    case 'UPDATE_CHECKED_IN_STATUS': {
      return {
        ...state,
        checkedInStatus: payload
      }
    }
    case 'ADD_RSVP_TO_EVENT_FULFILLED': {
      return {
        ...state,
        rsvpEventId: payload
      }
    }
    case 'REMOVE_RSVP_FROM_EVENT': {
      return {
        ...state,
        rsvp: false
      }
    }
    default: {
      return state;
    }
  }
};