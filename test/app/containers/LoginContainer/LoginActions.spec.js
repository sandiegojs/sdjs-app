const expect = require('chai').expect;
const LoginActions = require('../../../../app/containers/LoginContainer/LoginActions');

describe('Login Actions', () => {
  it('email input function should exist', () => {
    expect(LoginActions.updateEmailInput).to.exist;
  });
  it('password function should exist', () => {
    expect(LoginActions.updatePasswordInput).to.exist;
  });
  it('submitLogin function should exist', () => {
    expect(LoginActions.submitLogin).to.exist;
  });
});
