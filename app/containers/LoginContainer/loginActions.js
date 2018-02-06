import axios from 'axios';


export function emailLoginEntry(text) {

    return {
        type: 'EMAIL_LOGIN_ENTRY',
        payload: text
    }
}

export function passwordLoginEntry(text) {

    return {
        type: 'PASSWORD_LOGIN_ENTRY',
        payload: text
    }
}
export function loginEntry(loginObj) {
    return {
        type: 'LOGIN_ENTRY',
        payload: axios
        .post('https://sdci-backend.herokuapp.com/login', loginObj)
        .then( response => response.data)
        .catch(error => {
            console.log(error)
        })
    }
}
export function thirdPartyLogin(loginObj) {
    return {
        type: 'THIRD_PARTY_LOGIN',
        payload: axios
        .post('https://sdci-backend.herokuapp.com/loginthirdparty', loginObj)
        .then( response => response.data)
        .catch(error => {
            console.log(error)
        })
    }
}