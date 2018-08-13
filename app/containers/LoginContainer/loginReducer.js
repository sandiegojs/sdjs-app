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

export default function loginReducer (state = defaultState, action) {
    const {type, payload} = action;
    switch(type) {

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

        case 'UPDATE_LOADING_SCREEN': {
            return {
                ...state,
                loadingScreen: payload
            }
        }

		case 'SUBMIT_LOGIN_FULFILLED': {
			return {
				...state,
				user: payload,
				loadingScreen: false,
			}
		}

		case 'SUBMIT_LOGIN_REJECTED': {
			return {
				...state,
				loadingScreen: false
			}
		}

        default: {
            return state;
        }
    }
}
