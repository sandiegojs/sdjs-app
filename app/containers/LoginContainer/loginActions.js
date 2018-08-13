import axios from 'axios';

export function updateEmailInput(text) {
    return {
        type: 'UPDATE_EMAIL',
        payload: text
    }
}

export function updatePasswordInput(text) {
    return {
        type: 'UPDATE_PASSWORD',
        payload: text
    }
}

export function loadingScreen() {
    return {
        type: 'UPDATE_LOADING_SCREEN',
        payload: true
    }
}

export function submitLogin(credentials, navigate) {
	const {email, password} = credentials;
	const ttl = 86400;

	return {
		type: 'SUBMIT_LOGIN',
		payload: axios
			.post('https://sdjs-app.now.sh/api/users/login', {email, password, ttl})
			.then(response => {
				const {id: token, userId: id} = response.data;
				return axios
					.get('https://sdjs-app.now.sh/api/users/' + id, {headers: {Authorization: token}})
					.then(response => {
						navigate('Events');
						return {...response.data, id, token};
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
