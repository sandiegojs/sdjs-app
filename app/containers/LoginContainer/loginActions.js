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

export function loadingScreen() {
    return {
        type: 'LOADING_SCREEN',
        payload: true
    }
}

export function loginEntry(loginObj, navigate) {
	const {email, password} = loginObj;

	return {
		type: 'LOGIN_ENTRY',
		payload: axios
			.post('https://sdjs-app.now.sh/api/users/login', {email, password})
			.then(response => {
				let userId = response.data.userId;
				let loginResponseObj = response.data;
				return axios
					.get('https://sdjs-app.now.sh/api/users/' + userId)
					.then(res => {
						let responseArray = [loginResponseObj, res.data];
						navigate('Events');
						return responseArray
					});
			})
			.catch(error => {
				alert(
					'Invalid Login',
					'Please submit a valid e-mail and password', [{
						text: 'OK',
					}]
				);
				console.log(error);
				console.log('invalid login');
				return Promise.resolve(error);
			})
	}
}
