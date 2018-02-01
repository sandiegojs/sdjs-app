import axios from 'axios';

export function updateEventsData(search) {

    return {
        type: 'UPDATE_EVENTS_DATA',
        payload:
<<<<<<< HEAD
            axios
                .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=6&key=7c1c22226a10175697e6e91e4870')
                .then(response => {
=======
        axios
            .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=8&key=7c1c22226a10175697e6e91e4870')
            .then(response => {
>>>>>>> added styles to buttons

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

export function addAttendeeToEvent(eventObj, userId) {
    console.log("eventObj actions", eventObj);
    console.log("userId actions", userId);
    return {
        type: 'ADD_ATTENDEE_TO_EVENT',
        payload:
<<<<<<< HEAD
            axios
                .post('https://sdci-backend.herokuapp.com/checkin', { eventObj, userId })
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
                    // console.log('deleted data', response.data)
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






// export function addAttendeeToEvent(eventObj, userId) {
=======
        axios
            .post('https://sdci-backend.herokuapp.com/checkin', {eventObj, userId})
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

// export function addAttendeeToEvent(eventObj, userId) {
//     console.log("actions");
//     console.log("eventsObj", eventObj);
//     console.log("userId", userId);
//     return {
//         type: 'ADD_ATTENDEE_TO_EVENT',
//         payload:
//         axios
//             .get('https://sdci-backend.herokuapp.com/api/events?filter[where][meetup_id]='+ eventObj.meetup_id)//1049303
//             .then(response => {
//                 //if no event exist create event through users/{id}/events
//                 if (!!response.data && !response.data.length) {
//                     console.log("inside if statement in post")
//                     axios
//                         .post('https://sdci-backend.herokuapp.com/api/users/' + userId + '/events', eventObj)//5a70c7adc7f6050014b20c09  change to userId
//                         .then(response => {
//                             return response.data.id
//                         })
//                         .catch(error => console.log("error on post event/attendee", error))
//                     //else create attendee
//                 } else {
//                     console.log('Matching Event found')
//                     var attendeeObj = {
//                         'eventId': response.data[0].id,
//                         'userId': userId//changeto userId
//                     }
//                     axios
//                         .post('https://sdci-backend.herokuapp.com/api/attendees', attendeeObj)
//                         .then(response => {
//                             console.log("post data", response.data.id)
//                             return response.data.id
//                         })
//                         .catch(error => console.log("error on post attendee", error))
//                 }
//                 console.log("final return", response.data)
//                 return response.data
//             })
//             .catch(e => console.log(e.message))
//     }
// }



// export function removeAttendee(attendeeId) {
>>>>>>> added styles to buttons
//     return {
//         type: 'ADD_ATTENDEE_TO_EVENT',
//         payload:
//         axios
//             .post('https://sdci-backend.herokuapp.com/addattendeetoevent', eventObj, userId)
//             .then(response => {

//                 return response.data;
//             })
//             .catch(error => {
//                 const errorSearch = {
//                     error: true
//                 }

//                 return errorSearch;
//             })
//     }
// }
<<<<<<< HEAD
=======

export function removeAttendee(attendeeId) {
    console.log('attendeeId',attendeeId)
    return {
        type: 'REMOVE_ATTENDEE',
        payload:
        axios
            .delete('https://sdci-backend.herokuapp.com/api/attendees/' + attendeeId)
            .then(response => {
                console.log('deleted data', response.data)
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
>>>>>>> added styles to buttons
