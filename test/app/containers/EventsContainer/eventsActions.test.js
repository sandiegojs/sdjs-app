const expect = require('chai').expect;
const EventsActions = require('../../../../app/containers/EventsContainer/eventsActions')

describe('Events Actions', () => {
    it('Sets location error', () => {
        expect(EventsActions.setLocationError).to.exist;
    });
    it('it checks if input is true', () => {
        expect(EventsActions.checkedInTrue).to.exist;
    });
    it('it checks if input is false', () => {
        expect(EventsActions.checkedInFalse).to.exist;
    });
})