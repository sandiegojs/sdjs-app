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
            .post('https://sdci-backend.herokuapp.com/checkin', { eventObj, userId })
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

export function profileQuery(userId) {
    return {
        type: 'PROFILE_QUERY',
        payload:
        axios
            .get('https://sdci-backend.herokuapp.com/api/users/' + userId)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export function removeAttendee(attendeeId) {
    return {
        type: 'REMOVE_ATTENDEE',
        payload:
        axios
            .delete('https://sdci-backend.herokuapp.com/api/attendees/' + attendeeId)
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

export function addRSVPToEvent(eventObj, userId) {
    console.log("eventObj actions", eventObj);
    console.log("userId actions", userId);
    return {
        type: 'ADD_RSVP_TO_EVENT',
        payload:
        axios
            .post('https://sdci-backend.herokuapp.com/rsvp', { eventObj, userId })
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
export function removeRSVPFromEvent(rsvpEventId) {
    console.log('rsvpEventId in actions', rsvpEventId)
    return {
        type: 'REMOVE_RSVP_FROM_EVENT',
        payload:
        axios
            .delete('https://sdci-backend.herokuapp.com/api/rsvps/' + rsvpEventId)
            .then(response => {
                console.log('deleted data rsvp', response.data)
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


export function updateRSVPList(user) {

    return {
        type: 'UPDATE_RSVP_LIST',
        payload:
        axios
            .get('https://sdci-backend.herokuapp.com/api/rsvps?filter[where][userId]=' + user)
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

//?filter[where][and][0][userId]=[where][and][1][eventId]=

// export function updateCheckedInStatus(userId, eventId) {
// console.log("update checked in status")
//     return {
//         type: 'UPDATE_CHECKED_IN_STATUS',
//         payload:
//         axios
//             .get('https://sdci-backend.herokuapp.com/api/attendees?filter[where][and][0][userId]=' + userId + '&filter[where][and][1][eventId]=' + eventId)
//             .then(response => {

//                 if (!!response.data && !response.data.length) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             })
//             .catch(error => {
//                 const errorSearch = {
//                     error: true
//                 }

//                 return errorSearch;
//             })


//     }
// }
