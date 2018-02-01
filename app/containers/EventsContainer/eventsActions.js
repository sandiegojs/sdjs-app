import axios from 'axios';

export function updateEventsData(search) {

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

export function addAttendeeToEvent(eventObj, userId) {
    console.log("eventObj actions", eventObj);
    console.log("userId actions", userId);
    return {
        type: 'ADD_ATTENDEE_TO_EVENT',
        payload:
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
