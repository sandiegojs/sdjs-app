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
        .post('https://sdjs-app.now.sh/signup', signUpObj)
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
            navigate('Questionnaire')
            let newUserInfo = {
                first_name: signUpObj.first_name,
                last_name: signUpObj.last_name,
                email: signUpObj.email,
                id: response.data.id,
                token: response.data.token
            };
            return newUserInfo
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
            let userId = response.data.userId;
            let loginResponseObj = response.data;
            return axios
                .get('https://sdjs-app.now.sh/api/users/' + userId)
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
        .post('https://sdjs-app.now.sh/loginthirdparty', loginObj)
        .then( response => response.data)
        .catch(error => {
            console.log("this one", error)
        })
    }
}
