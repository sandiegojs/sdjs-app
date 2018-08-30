import axios from 'axios';
import { profileInit } from '../ProfileContainer/profileActions';
import { backendUrl } from '../../Defaults';

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

export function submitLogin(credentials, navigate, dispatch) {
  const { email, password } = credentials;
  const ttl = 86400;

  return {
    type: 'SUBMIT_LOGIN',
    payload: axios
      .post(`${backendUrl}/api/users/login`, { email, password, ttl })
      .then(response => {
        const { id: token, userId: id } = response.data;
        dispatch(profileInit(id, token));
        navigate('Splash');
        return { id, token };
      })
      .catch((error) => {
        alert(
          'Invalid Login',
          'Please submit a valid e-mail and password', [{
            text: 'OK'
          }]
        );
        console.log(error);
        console.log('invalid login');
        return Promise.resolve(error);
      })
  };
}
