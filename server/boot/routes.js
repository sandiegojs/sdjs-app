var axios = require('axios');
var userAuth = null;

module.exports = function(app) {

    app.post('/signup', (req, res) => {
        console.log('inside route');
        var baseUrl = app.get('url').replace(/\/$/, '');

        const { first_name, last_name, email, password } = req.body;

        const signUpObj = { first_name, last_name, email, password };

        console.log('data to signup', signUpObj);
        axios
          .post(baseUrl + '/api/users', signUpObj)
          .then(response => {
            console.log( 'user was posted');


            var signinObj = {
                email,
                password
            }

            console.log('user is about to sign in with: ',signinObj);

            axios.post(baseUrl + '/api/users/login', signinObj)
            .then(r => {
                console.log('user was logged in');
                res.send(r.data.id)
            })
            .catch(e => {
                console.log('error logging in');
                res.send(e.message)
            })
          })
          .catch(error => res.send(error.message));
    });
}