import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import SignupReducer from './containers/SignupContainer/signupReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer';
<<<<<<< HEAD
import LoginReducer from './containers/LoginContainer/loginReducer'
import DonateReducer from './containers/DonateContainer/donateReducer'

=======
import LoginReducer from './containers/LoginContainer/loginReducer';
import PasswordReducer from './containers/PasswordContainer/passwordReducer';
>>>>>>> 8835b92e92d840ad4ad4fa0572b5540c66b2effe

const rootReducer = combineReducers({
    eventsData: EventsReducer,
    signupData: SignupReducer,
    result: SignupReducer,
    profileUpdate: ProfileReducer,
    loginData: LoginReducer,
<<<<<<< HEAD
    donateData: DonateReducer
    
=======
    // store: PasswordReducer
>>>>>>> 8835b92e92d840ad4ad4fa0572b5540c66b2effe
});

export default rootReducer;