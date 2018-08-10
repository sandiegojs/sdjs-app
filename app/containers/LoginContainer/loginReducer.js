const defaultState = {
    email: '',
    password: '',
    loadingScreen: false,
    user: null,
	token: null,
	id: null,

};

export default function loginReducer (state = defaultState, action){
    const {type, payload} = action;
    switch(type) {

        case 'EMAIL_LOGIN_ENTRY': {
            return {
                ...state,
                email: payload
            }
        }

        case 'PASSWORD_LOGIN_ENTRY': {
            return {
                ...state,
                password: payload
            }
        }

        case 'LOADING_SCREEN': {
            return {
                ...state,
                loadingScreen: payload
            }
        }

		case 'LOGIN_ENTRY_FULFILLED': {
			const {id: token, userId: id} = payload[0];
			const {first_name, last_name, email, url, bio, company} = payload[1];

			return {
				...state,
				user: payload[0],
				token,
				id,
				first_name,
				last_name,
				email,
				url,
				bio,
				company,
				loadingScreen: false,
			}
		}

		case 'LOGIN_ENTRY_REJECTED': {
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
