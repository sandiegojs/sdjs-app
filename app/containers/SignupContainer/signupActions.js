import axios from 'axios';

export function firstNameEntry(text) {

	return {
		type: 'FIRST_NAME_ENTRY',
		payload: text
	}
}

export function lastNameEntry(text) {

	return {
		type: 'LAST_NAME_ENTRY',
		payload: text
	}
}

export function emailEntry(text) {

	return {
		type: 'EMAIL_ENTRY',
		payload: text
	}
}

export function passwordEntry(text) {
	return {
		type: 'PASSWORD_ENTRY',
		payload: text
	}
}

export function signUpEntry(signUpObj, navigate) {
	return {
		type: 'SIGN_UP_ENTRY',
		payload: axios
			.post('https://sdjs-app.now.sh/signup', signUpObj)
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
					return {
						first_name: signUpObj.first_name,
						last_name: signUpObj.last_name,
						email: signUpObj.email,
						id: response.data.id,
						token: response.data.token
					}
				}

			})
			.catch(error => {
				console.log(error.message);
				alert('An account exists for this email address. Please try again.')
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
				console.log("this one", error)
			})
	}
}
