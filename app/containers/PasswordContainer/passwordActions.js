import axios from 'axios';

export function emailResetPasswordEntry(text) {
    return {
        type: 'EMAIL_RESET_PASSWORD_ENTRY',
        payload: text
    }
}

export function resetPassword(passObj) {
    return {
        type: 'RESET_PASSWORD',
        payload: axios
        .post('https://sdjs-app.now.sh/users/reset')
        .then( res => {
            //doesn't work
            alert(
                'An e-mail has been sent',
                'Please check your e-mail', [{
                    text: 'OK',
                }]
            )
            let userInfo = {
                userEmail: passObj.email,
                id: response.data.id
            }
            return userInfo
        })
        .catch(error => {
            alert(
                'An e-mail has been sent',
                'Please submit a valid e-mail', [{
                    text: 'OK',
                }]
            )
            console.log(error);
        })
    }
}
