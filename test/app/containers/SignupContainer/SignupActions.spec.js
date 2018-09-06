const expect = require('chai').expect;
const SignupActions = require('../../../../app/containers/SignupContainer/SignupActions');

describe('Signup Actions', () => {
  it('checks for existance of first name input', () => {
    expect(SignupActions.updateFirstNameInput).to.exist;
  });
  it('checks for existance of last name input', () => {
    expect(SignupActions.updateLastNameInput).to.exist;
  });
  it('checks for existance of email input', () => {
    expect(SignupActions.updateEmailInput).to.exist;
  });
  it('checks for existance of password input', () => {
    expect(SignupActions.updatePasswordInput).to.exist;
  });
  it('checks for existance of signup', () => {
    expect(SignupActions.submitSignUp).to.exist;
  });
});
