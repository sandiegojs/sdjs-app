const defaultState = {
    loginEmail: '',
    loginPassword: '',
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
                loginEmail: payload
            }
        }

        case 'PASSWORD_LOGIN_ENTRY': {
            return {
                ...state,
                loginPassword: payload
            }
        }

        case 'LOADING_SCREEN': {
            return {
                ...state,
                loadingScreen: payload
            }
        }

		case 'LOGIN_ENTRY_FULFILLED': {
			return {
				...state,
				user: payload[0],
				token: payload[0].id,
				id: payload[0].userId,
				first_name: payload[1].first_name,
				last_name: payload[1].last_name,
				email: payload[1].email,
				url: payload[1].url,
				bio: payload[1].bio,
				company: payload[1].company,
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
