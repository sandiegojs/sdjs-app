import axios from 'axios';
import { profileInit } from '../ProfileContainer/profileActions';
import { backendUrl } from '../../Defaults';
import { AsyncStorage } from 'react-native';

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

export function updateUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user
  };
}

export function submitLogin(credentials, navigate, dispatch) {
  const { email, password } = credentials;
  const ttl = 1209600;

  return {
    type: 'SUBMIT_LOGIN',
    payload: axios
      .post(`${backendUrl}/api/users/login`, { email, password, ttl })
      .then(response => {
        const { id: token, userId: id, ttl, created } = response.data;
        dispatch(profileInit(id, token));
        navigate('Events');
        AsyncStorage.multiSet([
          ['token', token],
          ['id', id],
          ['ttl', ttl.toString()],
          ['created', created]
        ]);
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
