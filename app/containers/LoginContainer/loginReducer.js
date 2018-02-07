const defaultState = {
    loginEmail: " ",
    loginPassword: " ",

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
        default: {
            return state;
        }
    }
}