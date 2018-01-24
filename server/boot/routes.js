var axios = require('axios');

module.exports = function(app) {

    app.post('/signup', (req, res) => {
        console.log('inside route');
        var baseUrl = app.get('url').replace(/\/$/, '');

        const { first_name, last_name, email, password } = req.body;
      
        const signUpObj = {
          "first_name": first_name,
          "last_name": last_name,
          "email": email,
          "password": password
        }
      
        axios
          .post(baseUrl + '/api/users', signUpObj)
          .then(response => {
            console.log( 'response', response);
            res.send(response.data);
          })
          .catch(error => {
            console.log('inside error', error);
            res.send(error.message);
          });
    });
}