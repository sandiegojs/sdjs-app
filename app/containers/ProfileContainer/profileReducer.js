const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    url: '',
    location: '',
    company: ''
};

export default function ProfileReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
		case 'PROFILE_INIT_FULFILLED': {
			return {
				...state,
				...payload
			}
		}
        case 'FIRST_NAME_UPDATE': {
            return {
                ...state,
                firstName: payload
            }
        }
        case 'LAST_NAME_UPDATE': {
            return {
                ...state,
                lastName: payload
            }
        }
        case 'EMAIL_UPDATE': {
            return {
                ...state,
                email: payload
            }
        }
        case 'BIO_UPDATE': {
            return {
                ...state,
                bio: payload
            }
        }
        case 'COMPANY_UPDATE': {
            return {
                ...state,
                company: payload
            }
        }
        case 'URL_UPDATE': {
            return {
                ...state,
                url: payload
            }
        }
        case 'LOCATION_UPDATE': {
            return {
                ...state,
                location: payload
            }
        }
        default: {
            return state;
        }
    }
}
