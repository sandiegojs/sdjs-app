
'use strict';
var bodyParser = require('body-parser');
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var DataSource = require('loopback-datasource-juggler').DataSource;
var dsSendGrid = new DataSource('loopback-connector-sendgrid', {
  api_key:'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'
});
loopback.Email.attachTo(dsSendGrid);


app.use(bodyParser.json());

app.start = function () {
  // start the web server
  return app.listen(function () {
   
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log(`Server is running on port :: ${baseUrl}`);
      }
    });
  }
  

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();     

});
