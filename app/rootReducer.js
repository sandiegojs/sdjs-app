import {combineReducers} from 'redux';
import reduceReducer from 'reduce-reducers';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import SignUpReducer from './containers/SignupContainer/signUpReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';
import PasswordReducer from './containers/PasswordContainer/passwordReducer';
import DonateReducer from './containers/DonateContainer/donateReducer'

const userDataDefaultState = {
  firstNameInput: '',
  lastNameInput: '',
  emailInput: '',
  passwordInput: '',
  loadingScreen: false,
  user: {
    id: '',
    token: ''
  }
};

const rootReducer = combineReducers({
  eventsData: EventsReducer,
  signUpData: SignUpReducer,
  userData: reduceReducer(SignUpReducer, LoginReducer, userDataDefaultState),
  profileUpdate: ProfileReducer,
  donateData: DonateReducer
  // store: PasswordReducer
});

export default rootReducer;
