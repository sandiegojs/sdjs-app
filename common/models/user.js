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
    });
  });

  //render UI page after successful password reset
  User.afterRemote('setPassword', function (context) {
    context.res.render('response', {
      title: 'Password reset success',
      content: 'Your password has been reset successfully'
    });
  });

  User.emailAll = function (req, res, callback) {
    if (!req.body)
      res.status(400).json({
        error: 'Invalid request.'
      });

    const {from, subject, html, text} = req.body;
    User.find().then(users => {
      users.map(user => user.email).forEach(email => {
        const msg = {
          to: email,
          from: from || 'noreply@sdjs.com',
          subject: subject || 'No Subject',
          html: html,
          text: text || 'a'
        };

        User.app.models.Email.send(msg, err => {
          if (err) return console.log(err.response.body.errors);
        });
      });
    })
      .catch(err => console.log(err));
    callback(null);
  };
};
