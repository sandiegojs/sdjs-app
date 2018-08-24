import axios from 'axios';
import { WebBrowser } from 'expo';

export function updateEmailInput(text) {
  return {
    type: 'UPDATE_EMAIL_INPUT',
    payload: text,
  };
}

export function updatePasswordInput(text) {
  return {
    type: 'UPDATE_PASSWORD_INPUT',
    payload: text,
  };
}

export function submitLogin(credentials, navigate) {
  const { email, password } = credentials;
  const ttl = 86400;

  return {
    type: 'SUBMIT_LOGIN',
    payload: axios
      .post('https://sdjs-app.now.sh/api/users/login', { email, password, ttl })
      .then(response => {
        const { id: token, userId: id } = response.data;
        navigate('Events');
        return { id, token };
      })
      .catch((error) => {
        alert(
          'Invalid Login',
          'Please submit a valid e-mail and password', [{
            text: 'OK',
          }],
        );
        console.log(error);
        console.log('invalid login');
        return Promise.resolve(error);
      }),
  };
}

export function thirdPartyLogin(navigate) {
 // const { result } = credentials;
  return { 
    type: 'THIRD_PARTY_LIGIN',
    payload: axios
    .get(async () => {
      let result = await WebBrowser.openBrowserAsync('http://a98a967b.ngrok.io/auth/meetup');
      return result
    })
    //axios
    //.get()
    //WebBrowser.openBrowserAsync('http://a98a967b.ngrok.io/auth/meetup')
  }
}