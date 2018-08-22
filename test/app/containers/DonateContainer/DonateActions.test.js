import 'babel-polyfill'

const expect = require('chai').expect;
const DonateActions = require ('../../../../app/containers/DonateContainer/DonateActions')


describe('Donate Actions', () => {
    it('should take card holder name entry', () => {
        expect(DonateActions.cardholderNameEntry).to.exist;
    });
    it('should take zip code entry ', () => {
        expect(DonateActions.zipCodeEntry).to.exist;
    });
    it('should take card number entry', () => {
        expect(DonateActions.cardNumberEntry).to.exist;
    });
    it('should take card expiration month entry', () => {
        expect(DonateActions.cardExpMonthEntry).to.exist;
    });
    it('should take card expiration year entry', () => {
        expect(DonateActions.cardExpYearEntry).to.exist;
    });
    it('should take card cvc entry', () => {
        expect(DonateActions.cardCvcEntry).to.exist;
    });
    it('should handle transaction', () => {
        expect(DonateActions.handleTransaction).to.exist;
    });
})