import axios from 'axios';
import { backendUrl } from '../../Defaults';

export function emailResetPasswordEntry(text) {
  return {
    type: 'EMAIL_RESET_PASSWORD_ENTRY',
    payload: text
  };
}

export function resetPassword(email, navigate) {
  return {
    type: 'RESET_PASSWORD',
    payload: axios
      .post(`${backendUrl}/api/users/reset`, { email })
      .then(() => {
        alert(`${'An email has been sent to' + ' '}${email}.`);
        navigate('Login');
      })
      .catch((error) => {
        alert('This account does not exist. Please try again.');
        console.log(error);
      })
  };
}
