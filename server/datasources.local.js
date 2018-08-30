/* eslint-disable camelcase */
module.exports = {
  MongoDB: {
    url: process.env.MONGO_URI,
    name: 'MongoDB',
    connector: 'loopback-connector-mongodb'
  },
  sendgrid: {
    connector: 'loopback-connector-sendgrid',
    api_key: process.env.SENDGRID_API_KEY
  }
};
