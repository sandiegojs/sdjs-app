import axios from 'axios';

export function profileInit(id, token) {
  return {
    type: 'PROFILE_INIT',
    payload: axios
      .get('https://7f29f798.ngrok.io/api/users/' + id, {headers: {Authorization: token}})
      .then(r => r.data)
  }
}

export function profileUpdate(newProfileData, id, token) {
  return {
    type: 'PROFILE_UPDATE',
    payload: axios
      .patch('https://7f29f798.ngrok.io/api/users/' + id, newProfileData, {headers: {Authorization: token}})
      .then(r => r.data)
  }
}

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
