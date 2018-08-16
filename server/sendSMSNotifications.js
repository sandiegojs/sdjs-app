const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

module.exports = function (body, userArray) {
    const binding = userArray.map((element) => {
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
}
