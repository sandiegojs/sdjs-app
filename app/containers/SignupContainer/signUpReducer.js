const defaultState = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
	loadingScreen: false,
    user: {
    	firstName: '',
		lastName: '',
		email: '',
		url: '',
		bio: '',
		company: '',
		id: '',
		token: ''
	}
};

export default function signUpReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'UPDATE_FIRST_NAME': {
            return {
                ...state,
                firstNameInput: payload
            }
        }

        case 'UPDATE_LAST_NAME': {
            return {
                ...state,
                lastNameInput: payload
            }
        }

        case 'UPDATE_EMAIL': {
            return {
                ...state,
                emailInput: payload
            }
        }

        case 'UPDATE_PASSWORD': {
            return {
                ...state,
                passwordInput: payload
            }
        }

        case 'SIGN_UP_PENDING': {
            return {
                ...state,
            }
        }

        case 'SIGN_UP_FULFILLED': {
            return {
                ...state,
                user: payload,
                loadingScreen: false
            }
        }

        case 'SIGN_UP_REJECTED': {
            return {
                ...state,
            }
        }

        case 'THIRD_PARTY_LOGIN_FULFILLED': {
            return {
                ...state,
                user: payload,
            }
        }

        default: {
            return state;
        }
    }
}
