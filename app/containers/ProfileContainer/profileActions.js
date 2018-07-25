import axios from 'axios';

export function profileUpdate(newProfileData) {
    return {
        type: 'PROFILE_UPDATE',
        payload: axios
                    .patch('https://6ea98c01.ngrok.io/api/users/' + newProfileData.id, newProfileData)
                    .then(r => r.data)

    }
}

export function firstNameUpdate(first_name) {
    return {
        type: 'FIRST_NAME_UPDATE',
        payload: first_name
    }
}

export function lastNameUpdate(last_name) {
    return {
        type: 'LAST_NAME_UPDATE',
        payload: last_name
    }
}

export function emailUpdate(email) {
    return {
        type: 'EMAIL_UPDATE',
        payload: email
    }
}

export function bioUpdate(bio) {
    return {
        type: 'BIO_UPDATE',
        payload: bio
    }
}

export function companyUpdate(company) {
    return {
        type: 'COMPANY_UPDATE',
        payload: company
    }
}

export function urlUpdate(url) {
    return {
        type: 'URL_UPDATE',
        payload: url
    }
}

export function locationUpdate(location) {
    return {
        type: 'LOCATION_UPDATE',
        payload: location
    }
}