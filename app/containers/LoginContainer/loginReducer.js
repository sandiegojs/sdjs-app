const defaultState = {
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " ",
    user: ""
}

export default function loginReducer (state = defaultState, action){
    const {type, payload} = action;

    switch(type) {

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
        case 'SIGN_UP_ENTRY_FULFILLED': {
            return {
                ...state,
                user: payload
            }
        }
        case 'GOOGLE_ENTRY_FULFILLED': {
            return {
                ...state,
                googleResult: payload
            }
        }
        default: {
            return state;
        }
    }
}