import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsContainer/eventsReducer';

const rootReducer = combineReducers({
    eventsData: EventsReducer,
    
});

export default rootReducer;