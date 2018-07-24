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
        .post('https://cfd02d1f.ngrok.io/signup', signUpObj)
        .then( response => {
            var statusCode = RegExp('422*');
            signUpRes = response.data;
            // Must force error with if statement b/c Loopback does not send a failing res.status for repeat emails
            if (statusCode.test(signUpRes)){
                console.log(statusCode.test(signUpRes))
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
        .post('https://cfd02d1f.ngrok.io/api/users/login', { email, password })
        .then( response => {
            let userId = response.data.userId;
            let loginResponseObj = response.data;
            return axios
                .get('https://cfd02d1f.ngrok.io/api/users/' + userId)
                .then(res => {
                    let responseArray = [loginResponseObj, res.data];
                    navigate('Events')
                    return responseArray
                });
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
        .post('https://cfd02d1f.ngrok.io/loginthirdparty', loginObj)
        .then( response => response.data)
        .catch(error => {
            console.log("this one", error)
        })
    }
}
