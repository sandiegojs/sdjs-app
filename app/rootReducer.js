import {combineReducers} from 'redux';
import reduceReducer from 'reduce-reducers';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import SignupReducer from './containers/SignupContainer/signupReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';
import PasswordReducer from './containers/PasswordContainer/passwordReducer';
import DonateReducer from './containers/DonateContainer/donateReducer';
import QuestionnaireReducer from './containers/QuestionnaireContainer/QuestionnaireReducer';
import LogoutReducer from './containers/LogoutContainer/LogoutReducer';

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

const signoutReducer = reduceReducer(LogoutReducer, LoginReducer, userDataDefaultState);

const rootReducer = combineReducers({
  eventsData: EventsReducer,
  signUpData: SignupReducer,
  userData: reduceReducer(SignupReducer, signoutReducer, userDataDefaultState),
  profileData: ProfileReducer,
  donateData: DonateReducer,
  questionnaireData: QuestionnaireReducer
});

export default rootReducer;
