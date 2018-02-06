const defaultState = {
    loginEmail: " ",
    loginPassword: " ",
    user: ""
}

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
        case 'LOGIN_ENTRY_FULFILLED': {
            return {
                ...state,
                user: payload
            }
        }
        default: {
            return state;
        }
    }
}