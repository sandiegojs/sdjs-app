import axios from 'axios';
import { bindActionCreators } from 'redux';

export function firstNameEntry(text) {

    return {
        type: 'FIRST_NAME_ENTRY',
        payload: text
    }
}

export function lastNameEntry(text) {

    return {
        type: 'LAST_NAME_ENTRY',
        payload: text
    }
}

export function emailEntry(text) {

    return {
        type: 'EMAIL_ENTRY',
        payload: text
    }
}

export function passwordEntry(text) {
    return {
        type: 'PASSWORD_ENTRY',
        payload: text
    }
}

export function signUpEntry(signUpObj, navigate) {
    return {
        type: 'SIGN_UP_ENTRY',
        payload: axios
        .post('https://sdci-backend.herokuapp.com/signup', signUpObj)
        .then( response => {
            // Must force error with if statement b/c Loopback does not send a failing res.status for repeat emails
            if (response.data === 'Request failed with status code 422' ){
                let error = {error: 'invalid'}
                throw error                      
            }
           else {
            navigate('Events')
            return response.data
           }
         
        })
        .catch(error => {
            alert('An account exists for this email address. Please try again.')
        })
    }
}

export function loginEntry(loginObj, navigate) {
    const email = loginObj.email;
    const password = loginObj.password;
    return {
        type: 'LOGIN_ENTRY',
        payload: axios
        .post('https://sdjs-app.now.sh/api/users/login', { email, password })
        .then( response => {
            navigate('Events')
            return response.data
        })
        .catch(error => {
            alert(
                'Invalid Login',
                'Please submit a valid e-mail and password', [{
                    text: 'OK',
                }]
            )
            console.log(error);
            console.log('invalid login');
            return Promise.resolve(error);
        })
    }
}

export function thirdPartyLogin(loginObj) {
    return {
        type: 'THIRD_PARTY_LOGIN',
        payload: axios
        .post('https://sdjs-app.now.sh/loginthirdparty', loginObj)
        .then( response => response.data)
        .catch(error => {
            console.log("this one", error)
        })
    }
}
