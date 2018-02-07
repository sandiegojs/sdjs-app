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
