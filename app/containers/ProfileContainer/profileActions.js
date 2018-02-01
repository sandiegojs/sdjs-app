import axios from 'axios';

export function firstNameUpdate(firstName) {
    return {
        type: 'FIRST_NAME_UPDATE',
        payload: firstName
    }
}

export function lastNameUpdate(lastName) {
    return {
        type: 'LAST_NAME_UPDATE',
        payload: lastName
    }
}

export function emailUpdate(email) {
    return {
        type: 'EMAIL_UPDATE',
        payload: email
    }
}