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

export function addAttendeeToEvent(eventObj, userId, first_name, last_name, email, attendeeInfo) {
    let baseUrl = 'https://cfd02d1f.ngrok.io';
    console.log('add attendee action log', eventObj);
    console.log(eventObj.meetup_id);
    return {
        type: 'ADD_ATTENDEE_TO_EVENT',
        payload:
        axios
            // .post('https://cfd02d1f.ngrok.io/checkin', { eventObj, userId, first_name, last_name, email })
            .get(baseUrl + '/api/events?filter[where][meetup_id]=' + eventObj.meetup_id)//1049303
            .then(response => {
                console.log(eventObj.meetup_id);
                console.log(eventObj.last_name);
                console.log(userId);
                //if no event exist create event through users/{id}/events
                if (!!response.data && !response.data.length) {
                    axios
                        .post(baseUrl + '/api/users/' + userId + '/events', eventObj)
                        .then(response => response.data.id)
                        .catch(error => console.log("error on post event/attendee", error))
                    //else create attendee
                } else {
                    var attendeeObj = {
                        ...attendeeInfo,
                        "eventId": response.data[0].id,
                        "userId": userId
                    }
                    console.log('attendeeObj logged', attendeeObj);
                    var attendeeInfo = {
                        'first_name': first_name,
                        'last_name': last_name,
                        'email': email
                    }
                    axios
                        .post(baseUrl + '/api/attendees', attendeeObj)
                        .then(response => {
                            console.log("post data", response.data)
                            res.send(response.data.id)
                        })
                        .catch(error => console.log("error on post attendee", error))
                }
                return response.data;
            })


            // .then(response => {
            //     console.log('add attendee action log', response.data);
            //     return response.data;
            // })
            // .catch(error => console.log(error))
    }
}

export function profileQuery(userId) {
    return {
        type: 'PROFILE_QUERY',
        payload:
        axios
            .get('https://cfd02d1f.ngrok.io/api/users/' + userId)
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
            .delete('https://cfd02d1f.ngrok.io/api/attendees/' + attendeeId)
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
            .post('https://cfd02d1f.ngrok.io/rsvp', { eventObj, userId })
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
            .delete('https://cfd02d1f.ngrok.io/api/rsvps/' + rsvpEventId)
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
            .get('https://cfd02d1f.ngrok.io/api/rsvps?filter[where][userId]=' + user)
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
