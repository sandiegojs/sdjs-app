'use strict';

module.exports = User => {
  //send password reset link when requested
  User.on('resetPasswordRequest', info => {
    const url = User.app.get('url').replace(/\/$/, '') + '/reset-password';
    const html = 'Click <a href="' + url + '?access_token=' +
      info.accessToken.id + '">here</a> to reset your password';
    const email = {
      to: info.email,
      from: 'noreply@sdjs.com',
      subject: 'SDJS App Password Reset',
      html: html,
      text: 'a'
    };

    // loopback-connector-sendgrid REQUIRES a text field with a non-empty string, or it will
    // throw an error and fail to send
    User.app.models.Email.send(email, err => {
      if (err) return console.log(err.response.body.errors);
      console.log('> sending password reset email to:', info.email);
    });
  });

  //render UI page after successful password reset
  User.afterRemote('setPassword', function(context) {
    context.res.render('response', {
      title: 'Password reset success',
      content: 'Your password has been reset successfully'
    });
  });
};
