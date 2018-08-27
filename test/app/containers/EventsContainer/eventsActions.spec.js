const expect = require('chai').expect;
const EventsActions = require('../../../../app/containers/EventsContainer/eventsActions');

describe('Events Actions', () => {
  it(' checks for existance location error', () => {
    expect(EventsActions.setLocationError).to.exist;
  });
  it('checks for existance of checked-true', () => {
    expect(EventsActions.checkedInTrue).to.exist;
  });
  it('checks for existance of checked-false', () => {
    expect(EventsActions.checkedInFalse).to.exist;
  });
});
