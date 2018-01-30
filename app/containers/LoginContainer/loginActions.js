import axios from 'axios';

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
export function signUpEntry(signUpObj) {
    
    return {
        type: 'SIGN_UP_ENTRY',
        payload: axios
        .post('https://sdci-backend.herokuapp.com/signup', signUpObj)
        .then( response => response.data)
        .catch(error => {
            
        })
    }
}

export function googleEntry(googleResult) {
    return {
        type: 'GOOGLE_ENTRY',
        payload: axios
        .post('https://sdci-backend.herokuapp.com/signup', googleResult)
        .then(response => response.data)
        .catch(error => {
        })
    }
}