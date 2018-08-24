import axios from 'axios';

export function updateEventsData() {
  return {
    type: 'UPDATE_EVENTS_DATA',
    payload:
      axios
        .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=8&key=7c1c22226a10175697e6e91e4870')
        .then(response => response.data)
        .catch(() => ({ error: true }))
  };
}

export function updateSelectedEvent(selectedEventId) {
  return {
    type: 'UPDATE_SELECETED_EVENT',
    payload: selectedEventId
  };
}

export function addLocationData(location) {
  return {
    type: 'ADD_LOCATION_DATA',
    payload: location
  };
}

export function setLocationError(errorMessage) {
  return {
    type: 'SET_LOCATION_ERROR',
    payload: errorMessage
  };
}

export function checkedInTrue(checkedInTrue) {
  return {
    type: 'CHECKED_IN_TRUE',
    payload: checkedInTrue
  };
}

export function checkedInFalse(checkedInFalse) {
  return {
    type: 'CHECKED_IN_FALSE',
    payload: checkedInFalse
  };
}

export function rsvpTrue(rsvpTrue) {
  return {
    type: 'RSVP_TRUE',
    payload: rsvpTrue
  };
}

export function rsvpFalse(rsvpFalse) {
  return {
    type: 'RSVP_FALSE',
    payload: rsvpFalse
  };
}

export function rsvpEventDetailsTrue(rsvpEventDetailsTrue) {
  return {
    type: 'RSVP_EVENT_DETAILS_TRUE',
    payload: rsvpEventDetailsTrue
  };
}

export function rsvpEventDetailsFalse(rsvpEventDetailsFalse) {
  return {
    type: 'RSVP_EVENT_DETAILS_FALSE',
    payload: rsvpEventDetailsFalse
  };
}

export function addAttendeeToEvent(eventObj, userId) {
  return {
    type: 'ADD_ATTENDEE_TO_EVENT',
    payload:
      axios
        .post('https://sdjs-app.now.sh/checkin', { eventObj, userId })
        .then(response => response.data)
        .catch(error => console.log(error))
  };
}

export function profileQuery(userId, token) {
  return {
    type: 'PROFILE_QUERY',
    payload:
      axios
        .get('https://sdjs-app.now.sh/api/users/' + userId, { headers: { Authorization: token } })
        .then(response => response.data)
        .catch(error => console.log(error))
  };
}

export function removeAttendee(attendeeId, token) {
  return {
    type: 'REMOVE_ATTENDEE',
    payload:
      axios
        .delete('https://sdjs-app.now.sh/api/attendees/' + attendeeId, { headers: { Authorization: token } })
        .then(response => response.data)
        .catch(error => console.log(error))
  };
}

export function addRSVPToEvent(eventObj, userId) {
  return {
    type: 'ADD_RSVP_TO_EVENT',
    payload:
      axios
        .post('https://sdjs-app.now.sh/rsvp', { eventObj, userId })
        .then(response => response.data)
        .catch(() => ({ error: true }))
  };
}

export function removeRSVPFromEvent(rsvpEventId, token) {
  return {
    type: 'REMOVE_RSVP_FROM_EVENT',
    payload:
      axios
        .delete('https://sdjs-app.now.sh/api/rsvps/' + rsvpEventId, { header: { Authorization: token } })
        .then(response => response.data)
        .catch(() => ({ error: true }))
  };
}

export function updateRSVPList(user, token) {
  return {
    type: 'UPDATE_RSVP_LIST',
    payload:
      axios
        .get('https://sdjs-app.now.sh/api/rsvps?filter[where][userId]=' + user, { headers: { Authorization: token } })
        .then(response => {
          return response.data;
        })
        .catch(() => ({ error: true }))
  };
}

export function updateEventDetailsRSVP(rsvp) {
  return {
    type: 'UPDATE_EVENT_DETAILS_RSVP',
    payload: rsvp
  };
}

export function updateEventDetailsRSVPEventId(eventDetailsRSVPEventId) {
  return {
    type: 'UPDATE_EVENT_DETAILS_RSVP_EVENT_ID',
    payload: eventDetailsRSVPEventId
  };
}
