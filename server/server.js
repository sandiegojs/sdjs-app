'use strict';
require('dotenv').config();
const bodyParser = require('body-parser');
const loopback = require('loopback');
const boot = require('loopback-boot');
const path = require('path');
const app = module.exports = loopback();

const DataSource = require('loopback-datasource-juggler').DataSource;
const dsSendGrid = new DataSource('loopback-connector-sendgrid', {
  api_key: process.env.SENDGRID_API_KEY
});
loopback.Email.attachTo(dsSendGrid);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.start = function () {

  return app.listen(function () {

    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    if (app.get('loopback-component-explorer')) {
      console.log(`Server is running on port :: ${baseUrl}`);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {

  if (err) throw err;
  if (require.main === module)
    app.start();
});
