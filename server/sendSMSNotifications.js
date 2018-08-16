const axios = require('axios')
const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

module.exports = function(body){
const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);
axios.get('http://f5f990cc.ngrok.io/api/users', {header: {authorzation: 'I2Ai4PEIJjqk7Mz4u7HbgrRrXNZ3Do8P1HFJVvBa7z5ouKMEx1vaGPgUGdKzvORM'}})
    .then(response => {
        userData = response.data
        binding = userData.map(makeUser)

        notification = service.notification
            .create({
                toBinding: binding,
                body: body
            })
            .then(() => {
                console.log(notification);
            })
            .catch((err) => {
             console.error(err)
            })
    })
}

function makeUser(element) {
    return JSON.stringify({
        binding_type: 'sms',
        address: element.phone,
        identity: element.id
    });
}

