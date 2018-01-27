import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';

const rootReducer = combineReducers({
    eventsData: EventsReducer,
    loginData: LoginReducer,
    result: LoginReducer
    
});

export default rootReducer;