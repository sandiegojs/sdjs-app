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
