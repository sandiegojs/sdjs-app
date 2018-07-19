import { loadingScreen } from "../LoginContainer/loginActions";

const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: null,
    id: null,
    user: null
}

export default function signupReducer(state = defaultState, action) {
    const { type, payload } = action;
 
    switch (type) {

        case 'FIRST_NAME_ENTRY': {
            return {
                ...state,
                firstName: payload
            }
        }
        case 'LAST_NAME_ENTRY': {
            return {
                ...state,
                lastName: payload
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
            }
        }
        case 'SIGN_UP_ENTRY_REJECTED': {
            return {
                ...state,
            }
        }
        case 'SIGN_UP_ENTRY_REJECTED': {
            return {
                ...state
            }
        }
        case 'LOGIN_ENTRY_PENDING': {
            return {
                ...state,
                loadingScreen: true
            }
        }
        case 'LOGIN_ENTRY_FULFILLED': {
            const loginInfo = payload;
            return {
              
                ...state,
                user: payload,
                token: loginInfo.id,
                id: loginInfo.userId,
                loadingScreen: false
            }
        }
        case 'LOGIN_ENTRY_REJECTED': {
            return {
                ...state,
                loadingScreen: false
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