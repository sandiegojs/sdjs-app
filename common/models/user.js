'use strict';

const config = require('../../server/config.json');
const senderAddress = 'noreply@sdjs.com';

module.exports = function(User) {
  //send password reset link when requested
  User.on('resetPasswordRequest', function(info) {
    const url = 'http://' + config.host + ':' + config.port + '/reset-password';
    const html = 'Click <a href="' + url + '?access_token=' +
      info.accessToken.id + '">here</a> to reset your password';
  });
};
