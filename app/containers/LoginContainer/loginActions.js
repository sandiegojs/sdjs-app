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
        .post('https://sdci-backend.herokuapp.com/api/users', signUpObj)
        .then( response => {
            console.log(response)
            return response.data;
        })
        .catch(error => {
            console.log("Turtle", error)
        })
    }
}