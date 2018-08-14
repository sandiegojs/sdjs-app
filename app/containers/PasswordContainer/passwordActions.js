import axios from 'axios';

export function emailResetPasswordEntry(text) {
    return {
        type: 'EMAIL_RESET_PASSWORD_ENTRY',
        payload: text
    }
}

<<<<<<< Updated upstream
export function resetPassword(passObj) {
    const email = passObj;
    return {
        type: 'RESET_PASSWORD',
        payload: axios
            .post('https://sdjs-app.now.sh/api/users/reset', { email })
            .then(response => {
                alert('An email has been sent to'+' '+ email+ '.')
                // return 
                
                // loopback.Email.send({
                //     to: email,
                //     from: email,
                //     subject: "subject",
                //     text: "this definitely works",
                //     html: "html <b>message</b>"
                // },
                //     function (err, result) {
                //         if (err) {
                //             console.log('Upppss something crash', err);
                //             return;
                //         }
                //         console.log(result);
                //     })
            })
            .catch(error => {
                alert('This account does not exist. Please try again.')
                console.log(error);
            })
    }
<<<<<<< HEAD
}
=======

=======

    // return {
    //     type: 'RESET_PASSWORD',
    //     payload: axios
    //     .post('https://sdjs-app.now.sh/users/reset', passObj)
    //     .then( res => {
    //         //doesn't work
    //         alert(
    //             'An e-mail has been sent, please check your e-mail', 
    //             [{
    //                 text: 'OK',
    //             }]
    //         )
    //         // let userInfo = {
    //         //     userEmail: passObj.email,
    //         //     id: response.data.id
    //         // }
    //         return userInfo
    //     })
    //     .catch(error => {
    //         alert('This account does not exist. Please try again.')
    //         console.log(error);
    //     })
    // }
>>>>>>> Stashed changes
}
>>>>>>> reset password setup-updated
