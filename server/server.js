'use strict';
var bodyParser = require('body-parser');
var loopback = require('loopback');
var boot = require('loopback-boot');
var axios = require('axios')

var app = module.exports = loopback();

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  
  const { first_name, last_name, email, password } = req.body;
console.log("server-side-req.body",req.body)
  const signUpObj = {
    "first_name": firstName,
    "last_name": lastName,
    "email": email,
    "password": password
} 
console.log("server-side-signUpObj",signUpObj)
  const signUpData = axios
    .post('api/users', signUpObj, {
      headers: {
        'Content-type' : 'application/json'
      }
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
    res.send(signUpData)
});



// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
