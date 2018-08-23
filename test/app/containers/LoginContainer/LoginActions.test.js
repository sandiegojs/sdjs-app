const expect = require('chai').expect;
const LoginActions = require('../../../../app/containers/LoginContainer/LoginActions');

describe('Login Actions', () => {
    it('should take users email address', () => {
        expect(LoginActions.updateEmailInput).to.exist;
    });
    it('should take users password', () => {
        expect(LoginActions.updatePasswordInput).to.exist;
    });
    it('should take users login submit', () => {
        expect(LoginActions.submitLogin).to.exist;
    });
})