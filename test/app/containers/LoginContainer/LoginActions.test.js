const expect = require('chai').expect;
const LoginActions = require('../../../../app/containers/LoginContainer/LoginActions');

describe('Login Actions', () => {
  it('checks for existance of email input', () => {
    expect(LoginActions.updateEmailInput).to.exist;
  });
  it('checks for existance of email input', () => {
    expect(LoginActions.updatePasswordInput).to.exist;
  });
  it('checks for existance of email input', () => {
    expect(LoginActions.submitLogin).to.exist;
  });
});
