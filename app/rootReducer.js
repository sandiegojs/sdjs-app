import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import EventsReducer from './containers/EventsContainer/eventsReducer';
import SignupReducer from './containers/SignupContainer/signupReducer';
import ProfileReducer from './containers/ProfileContainer/profileReducer';
import LoginReducer from './containers/LoginContainer/loginReducer';
import PasswordReducer from './containers/PasswordContainer/passwordReducer';
import QuestionnaireReducer from './containers/QuestionnaireContainer/QuestionnaireReducer';
import LogoutReducer from './containers/LogoutContainer/LogoutReducer';
import { userData as userDataDefault } from './Defaults';

const signoutReducer = reduceReducer(LogoutReducer, LoginReducer, userDataDefault);

const rootReducer = combineReducers({
  eventsData: EventsReducer,
  signUpData: SignupReducer,
  userData: reduceReducer(SignupReducer, signoutReducer, userDataDefault),
  profileData: ProfileReducer,
  questionnaireData: QuestionnaireReducer,
  passwordData: PasswordReducer
});

export default rootReducer;
