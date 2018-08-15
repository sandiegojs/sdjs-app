import axios from 'axios';

export function updateEventsData() {

    return {
        type: 'UPDATE_EVENTS_DATA',
        payload:
        axios
            .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=8&key=7c1c22226a10175697e6e91e4870')
            .then(response => {

                return response.data;
            })
            .catch(error => {
                const errorSearch = {
                    error: true
                }

                return errorSearch;
            })
    }
}

export function updateSelectedEvent(selectedEventId) {
    return {
        type: 'UPDATE_SELECETED_EVENT',
        payload: selectedEventId
    }
}

export function addLocationData(location) {
    return {
        type: 'ADD_LOCATION_DATA',
        payload: location
    }
}

export function setLocationError(errorMessage) {
    return {
        type: 'SET_LOCATION_ERROR',
        payload: errorMessage
    }
}

export function checkedInTrue(checkedInTrue) {
    return {
        type: 'CHECKED_IN_TRUE',
        payload: true
    }
}

export function checkedInFalse(checkedInFalse) {
    return {
        type: 'CHECKED_IN_FALSE',
        payload: false
    }
}

export function rsvpTrue(rsvpTrue) {
    return {
        type: 'RSVP_TRUE',
        payload: true
    }
}

export function rsvpFalse(rsvpFalse) {
    return {
        type: 'RSVP_FALSE',
        payload: false
    }
}

export function rsvpEventDetailsTrue(rsvpEventDetailsTrue) {
    return {
        type: 'RSVP_EVENT_DETAILS_TRUE',
        payload: true
    }
}

export function rsvpEventDetailsFalse(rsvpEventDetailsFalse) {
    return {
        type: 'RSVP_EVENT_DETAILS_FALSE',
        payload: false
    }
}

export function addAttendeeToEvent(eventObj, userId) {
    return {
        type: 'ADD_ATTENDEE_TO_EVENT',
        payload:
        axios
            .post('http://0787dded.ngrok.io/checkin', { eventObj, userId })
            .then(response => {
                return response.data;
            })
            .catch(error => console.log(error))
    }
}

export function profileQuery(userId, token) {
    return {
        type: 'PROFILE_QUERY',
        payload:
        axios
            .get('http://0787dded.ngrok.io/api/users/' + userId, {headers: {Authorization: token}})
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function removeAttendee(attendeeId, token) {
    return {
        type: 'REMOVE_ATTENDEE',
        payload:
        axios
            .delete('http://0787dded.ngrok.io/api/attendees/' + attendeeId, {headers: {Authorization: token}})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function addRSVPToEvent(eventObj, userId) {
    return {
        type: 'ADD_RSVP_TO_EVENT',
        payload:
        axios
            .post('http://0787dded.ngrok.io/rsvp', { eventObj, userId })
            .then(response => {
                console.log('returned data', response.data)
                return response.data;
            })
            .catch(error => {
                const errorSearch = {
                    error: true
                }

                return errorSearch;
            })
    }
}

export function removeRSVPFromEvent(rsvpEventId, token) {
    return {
        type: 'REMOVE_RSVP_FROM_EVENT',
        payload:
        axios
            .delete('http://0787dded.ngrok.io/api/rsvps/' + rsvpEventId, {header: {Authorization: token}})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                const errorSearch = {
                    error: true
                }

                return errorSearch;
            })
    }
}

export function updateRSVPList(user, token) {
    return {
        type: 'UPDATE_RSVP_LIST',
        payload:
        axios
            .get('http://0787dded.ngrok.io/api/rsvps?filter[where][userId]=' + user, {headers: {Authorization: token}})
            .then(response => {

                return response.data;
            })
            .catch(error => {
                const errorSearch = {
                    error: true
                }
                return errorSearch;
            })
    }
}

export function updateEventDetailsRSVP(rsvp) {
    return {
        type: 'UPDATE_EVENT_DETAILS_RSVP',
        payload: rsvp
    }
}

export function updateEventDetailsRSVPEventId(eventDetailsRSVPEventId) {
    return {
        type: 'UPDATE_EVENT_DETAILS_RSVP_EVENT_ID',
        payload: eventDetailsRSVPEventId
    }
}
