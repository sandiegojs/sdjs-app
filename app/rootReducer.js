import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import SignupReducer from './containers/SignupContainer/signupReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';
import PasswordReducer from './containers/PasswordContainer/passwordReducer';

const rootReducer = combineReducers({
    eventsData: EventsReducer,
    signupData: SignupReducer,
    result: SignupReducer,
    profileUpdate: ProfileReducer,
    loginData: LoginReducer,
    // store: PasswordReducer
});

export default rootReducer;