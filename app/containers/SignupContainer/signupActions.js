import axios from 'axios';

export function updateFirstNameInput(text) {
	return {
		type: 'UPDATE_FIRST_NAME',
		payload: text
	}
}

export function updateLastNameInput(text) {
	return {
		type: 'UPDATE_LAST_NAME',
		payload: text
	}
}

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

export function submitSignUp(credentials, navigate) {
	return {
		type: 'SIGN_UP',
		payload: axios
			.post('https://sdjs-app.now.sh/signup', credentials)
			.then(response => {
				const statusCode = RegExp('422*');
				const signUpRes = response.data;
				// Must force error with if statement b/c Loopback does not send a failing res.status for repeat emails
				if (statusCode.test(signUpRes)) {
					console.log(statusCode.test(signUpRes));
					throw {error: 'invalid'}
				}
				else {
					navigate('Questionnaire');
					return {...credentials, ...response.data};
				}
			})
			.catch(error => {
				console.log(error.message);
				alert('An account exists for this email address. Please try again.');
			})
	}
}

export function thirdPartyLogin(loginObj) {
	return {
		type: 'THIRD_PARTY_LOGIN',
		payload: axios
			.post('https://sdjs-app.now.sh/loginthirdparty', loginObj)
			.then(response => response.data)
			.catch(error => {
				console.log("this one", error);
			})
	};
}
