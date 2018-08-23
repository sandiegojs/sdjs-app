const expect = require('chai').expect;
const SignupActions = require('../../../../app/containers/SignupContainer/SignupActions')

describe('Signup Actions', () => {
    it('should update users first name', () => {
        expect(SignupActions.updateFirstNameInput).to.exist;
    });
    it('should update users last name', () => {
        expect(SignupActions.updateLastNameInput).to.exist;
    });
    it('should update user email input', () => {
        expect(SignupActions.updateEmailInput).to.exist;
    });
    it('should update users password', () => {
        expect(SignupActions.updatePasswordInput).to.exist;
    });
    it('should submit user signup', () => {
        expect(SignupActions.submitSignUp).to.exist;
    });
})