import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer'


const rootReducer = combineReducers({
    eventsData: EventsReducer,
    loginData: LoginReducer,
    result: LoginReducer,
    profileUpdate: ProfileReducer
    
});

export default rootReducer;