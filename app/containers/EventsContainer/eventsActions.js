import axios from 'axios';

export function updateEventsData(search) {

    //https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=5&key=7c1c22226a10175697e6e91e4870
    //https://sdci-backend.herokuapp.com/api/users'

   return {
       type: 'UPDATE_EVENTS_DATA',
       payload:
       axios
           .get('https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=5&key=7c1c22226a10175697e6e91e4870')
           .then(response => {
               console.log(response.data)
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

export function updateEventsTextInput(text) {
    
        return {
            type: 'UPDATE_EVENTS_TEXT_INPUT',
            payload: text
        }
    };