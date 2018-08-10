const defaultState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    token: null,
    id: null,
    user: null
};

export default function signupReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'FIRST_NAME_ENTRY': {
            return {
                ...state,
                first_name: payload
            }
        }

        case 'LAST_NAME_ENTRY': {
            return {
                ...state,
                last_name: payload
            }
        }

        case 'EMAIL_ENTRY': {
            return {
                ...state,
                email: payload
            }
        }

        case 'PASSWORD_ENTRY': {
            return {
                ...state,
                password: payload
            }
        }

        case 'SIGN_UP_ENTRY_PENDING': {
            return {
                ...state,
            }
        }

        case 'SIGN_UP_ENTRY_FULFILLED': {
            return {
                ...state,
                user: payload,
                token: payload.token,
                id: payload.id,
                first_name: payload.first_name,
                last_name: payload.last_name,
                email: payload.email,
                loadingScreen: false,
                profileData:{
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    email: payload.email
                }
            }
        }

        case 'SIGN_UP_ENTRY_REJECTED': {
            return {
                ...state,
            }
        }

        case 'LOGIN_ENTRY_PENDING': {
            return {
                ...state,
                loadingScreen: true
            }
        }

        case 'THIRD_PARTY_LOGIN_FULFILLED': {
            return {
                ...state,
                user: payload,
            }
        }

        // case 'GOOGLE_ENTRY_FULFILLED': {
        //     return {
        //         ...state,
        //         googleResult: payload
        //     }
        // }
        default: {
            return state;
        }
    }
}
