var axios = require('axios');
var userAuth = null;

module.exports = function(app) {

    app.post('/signup', (req, res) => {
        var baseUrl = app.get('url').replace(/\/$/, '');

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
}