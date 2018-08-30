import axios from 'axios';
import { profileInit } from '../ProfileContainer/profileActions';
import { backendUrl } from '../../Defaults';
import { AsyncStorage } from 'react-native';

export function updateFirstNameInput(text) {
  return {
    type: 'UPDATE_FIRST_NAME_INPUT',
    payload: text
  };
}

export function updateLastNameInput(text) {
  return {
    type: 'UPDATE_LAST_NAME_INPUT',
    payload: text
  };
}

export function updateEmailInput(text) {
  return {
    type: 'UPDATE_EMAIL_INPUT',
    payload: text
  };
}

export function updatePasswordInput(text) {
  return {
    type: 'UPDATE_PASSWORD_INPUT',
    payload: text
  };
}

export function updateConfirmPasswordInput(text) {
  return {
    type: 'UPDATE_CONFIRM_PASSWORD_INPUT',
    payload: text
  };
}

export function submitSignUp(credentials, navigate, dispatch) {
  return {
    type: 'SUBMIT_SIGN_UP',
    payload: axios
      .post(`${backendUrl}/api/users`, credentials)
      .then(response => {
        const statusCode = RegExp('422*');
        const signUpRes = response.data;
        // Must force error with if statement b/c Loopback does not send a failing res.status for repeat emails
        if (statusCode.test(signUpRes)) {
          console.log(statusCode.test(signUpRes));
          throw { error: 'invalid' };
        } else {
          navigate('Questionnaire');
          const { email, password } = credentials;
          const ttl = 1209600;

          return axios
            .post(`${backendUrl}/api/users/login`, { email, password, ttl })
            .then(r => {
              const { id: token, userId: id, ttl, created } = r.data;
              AsyncStorage.multiSet([
                ['token', token],
                ['id', id],
                ['ttl', ttl],
                ['created', created]
              ]);
              dispatch(profileInit(id, token));
              return { id, token };
            });
        }
      })
      .catch(error => {
        console.log(error.message);
        alert('An account exists for this email address. Please try again.');
      })
  };
}
