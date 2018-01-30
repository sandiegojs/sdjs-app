import axios from 'axios';

export function updateEventsData(search) {

    return {
        type: 'UPDATE_EVENTS_DATA',
        payload:
        axios
            .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=6&key=7c1c22226a10175697e6e91e4870')
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
// export function addAttendeeToEvent(eventObj, userId) {
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

export function addAttendeeToEvent(eventObj, userId) {
    console.log("userId", userId)
    return {
        type: 'ADD_ATTENDEE_TO_EVENT',
        payload:
        axios
            .get('https://sdci-backend.herokuapp.com/api/events?filter[where][meetup_id]='+ eventObj.meetup_id)//1049303
            .then(response => {
                //if no event exist create event
                if (response.data[0] === undefined) {
                    console.log("inside if statement in post")
                    axios
                    .post('https://sdci-backend.herokuapp.com/api/users/'+ '5a70c7adc7f6050014b20c09' +'/events', eventObj )//5a70c7adc7f6050014b20c09  change to userId
                    .then(response =>{
                        console.log('created event', response.data);
                        return response.data
                    })
                    .catch(error => console.log("error on post event", error))
                    //else create attendee
                } else {
                    console.log('Matching Event found')
                    attendeeObj = {
                        'eventId': response.data[0].id,
                        'userId': '5a70c0505d0ddece4381d2d7',//changeto userId
                    }
                    axios
                        .post('https://sdci-backend.herokuapp.com/api/attendees', attendeeObj)
                        .then(response => {
                            console.log("post data", response.data)
                            return response.data;
                        })
                        .catch(error => console.log("error on post attendee", error))
                     }
                })
            .catch(error => {
                const errorSearch = {
                    error: true
                }
                console.log('get failed', error)
                return errorSearch;
            })
    }
}
