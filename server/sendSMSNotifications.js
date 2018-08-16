const axios = require('axios');
const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);


module.exports = function(body) {
    return axios.get('https://sdjs-app.now.sh/api/users', { header: { authorzation: 'I2Ai4PEIJjqk7Mz4u7HbgrRrXNZ3Do8P1HFJVvBa7z5ouKMEx1vaGPgUGdKzvORM' } })
        .then(response => {
            const binding = response.data.map((element) => {
                return JSON.stringify({
                    binding_type: 'sms',
                    address: '+1' + element.phone,
                    identity: element.id
                });
            });
            service.notifications
                .create({
                    body: body,
                    toBinding: binding
                })
                .catch((err) => {
                    console.error(err)
                });
        });
}
