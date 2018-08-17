module.exports = {
  MongoDB: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGODB_PORT,
    url: process.env.MONGO_URI,
    database: process.env.MONGODB_DATABASE,
    password: process.env.MONGODB_PW,
    name: 'MongoDB',
    user: process.env.MONGODB_USER,
    connector: 'loopback-connector-mongodb',
    file: 'db.json'
  }
};
