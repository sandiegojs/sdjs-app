var axios = require('axios');
var userAuth = null;

module.exports = function (app) {

    app.post('/signup', (req, res) => {
        let baseUrl = app.get('url').replace(/\/$/, '');
        const { first_name, last_name, email, password } = req.body;
        //Create a new user
        axios
            .post(baseUrl + '/api/users', { first_name, last_name, email, password })
            .then(response => {

                //Once user has signed up successfully, log them in
                axios.post(baseUrl + '/api/users/login', { email, password })
                    .then(r => res.json({
                        token: r.data.id,
                        id: r.data.userId
                    }))
                    .catch(e => res.send(e.message))
            })
            .catch(error => res.send(error.message));
    });

    // app.post('/checkin', (req, res) => {
    //     let baseUrl = app.get('url').replace(/\/$/, '');
    //     const { eventObj, userId, first_name, last_name, email } = req.body;
    //     console.log('routes checkin !!! log start', req.body);
    //     console.log(eventObj);
    //     //Create a new user
    //     axios
    //         .get(baseUrl + '/api/events?filter[where][meetup_id]=' + eventObj.meetup_id)//1049303
    //         .then(response => {
    //             //if no event exist create event through users/{id}/events
    //             if (!!response.data && !response.data.length) {
    //                 axios
    //                     .post(baseUrl + '/api/users/' + userId + '/events', eventObj)//5a70c7adc7f6050014b20c09  change to userId
    //                     .then(response => {
    //                         res.send(response.data.id)
    //                     })
    //                     .catch(error => console.log("error on post event/attendee", error))
    //                 //else create attendee
    //             } else {
    //                 var attendeeObj = {
    //                     "eventId": response.data[0].id,
    //                     "userId": userId,//changeto userId
    //                     "first_name": first_name,
    //                     "last_name": last_name,
    //                     "email": email
    //                 }
    //                 console.log('attendeeObj logged', attendeeObj);
    //                 var attendeeInfo = {
    //                     'first_name': first_name,
    //                     'last_name': last_name,
    //                     'email': email
    //                 }
    //                 axios
    //                     .post(baseUrl + '/api/attendees', attendeeObj)
    //                     .then(response => {
    //                         console.log("post data", response.data)
    //                         res.send(response.data.id)
    //                     })
    //                     .catch(error => console.log("error on post attendee", error))
    //             }
    //             return response.data;
    //         })
    //         .catch(e => res.send(e.message))
    // });

    app.delete('/deleteattendee', (req, res) => {
        let baseUrl = app.get('url').replace(/\/$/, '');
        console.log(baseUrl);

        const { attendeeId } = req.body;
        console.log(attendeeId);
        //Create a new user
        axios
            .delete(baseUrl + '/api/users', { attendeeId })
            .then(response => {

                res.send(response.data);
            })
            .catch(error => res.send(error.message));
    });

    app.post('/loginthirdparty', (req, res) => {
        let baseUrl = app.get('url').replace(/\/$/, '');
        const { email, password, first_name, last_name } = req.body;

        axios.get(baseUrl + '/api/users?filter[where][email]=' + email)
            .then(r => {
                if (!!r.data && !r.data.length) {
                    axios.post(baseUrl + '/signup', { first_name, last_name, email, password })
                        .then(r => res.json({
                            token: r.data.token,
                            id: r.data.id
                        }))
                        .catch(e => res.send(e.message))
                } else {
                    axios.post(baseUrl + '/login', { email, password })
                        .then(r => res.json({
                            token: r.data.token,
                            id: r.data.id
                        }))
                        .catch(e => res.send(e.message))
                }
            })
            .catch(e => res.send(e.message))

    })
    app.post('/rsvp', (req, res) => {
        let baseUrl = app.get('url').replace(/\/$/, '');
        const { eventObj, userId } = req.body;

        console.log("eventObj", eventObj);
        console.log("userId", userId);
        //Create a new user
        axios
            .get(baseUrl + '/api/events?filter[where][meetup_id]=' + eventObj.meetup_id)
            .then(response => {
                //if no event exist create event through api/events
                if (!!response.data && !response.data.length) {
                    console.log("inside if statement in post rsvp")
                    axios
                        .post(baseUrl + '/api/events', eventObj)
                        .then(response => {
                            var rsvpObj = {
                                'eventId': response.data.id,
                                'userId': userId,
                                'meetup_id': response.data.meetup_id
                            }
                            console.log("rsvpObj in if statement server", rsvpObj)
                            axios
                                .post(baseUrl + '/api/rsvps', rsvpObj)
                                .then(response => {
                                    console.log("post rsvp data if statement from server", response.data)
                                    res.send(response.data.id)
                                })
                                .catch(error => console.log("error on post attendee", error))
                        })
                        .catch(error => console.log("error on post event/attendee", error))
                    //else create attendee
                } else {
                    console.log('Matching Event found')
                    var rsvpObj = {
                        'eventId': response.data[0].id,
                        'userId': userId,
                        'meetup_id': response.data[0].meetup_id
                    }
                    axios
                        .post(baseUrl + '/api/rsvps', rsvpObj)
                        .then(response => {
                            console.log("post rsvp data else", response.data)
                            res.send(response.data.id)
                        })
                        .catch(error => console.log("error on post attendee", error))
                }
                return response.data;
            })
            .catch(e => res.send(e.message))
    });

}