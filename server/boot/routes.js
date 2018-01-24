module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/ping', function(req, res) {
      res.send('pong');
    });

    app.post('/signup', (req, res) => {
        console.log('inside route');
        const { first_name, last_name, email, password } = req.body;
      
        const signUpObj = {
          "first_name": first_name,
          "last_name": last_name,
          "email": email,
          "password": password
        }
      
        axios
          .post('/api/users', signUpObj)
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