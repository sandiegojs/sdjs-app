const defaultState = {
    userEmail: ''
}

export default function PasswordReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case 'EMAIL_RESET_PASSWORD_ENTRY': {
            return {
                ...state,
                userEmail: payload
            }
        }

        case 'RESET_PASSWORD_PENDING': {
            return {
                ...state
            }
        }

        case 'RESET_PASSWORD_FULFILLED': {
            return {
                ...state,
                userEmail: payload,
                id: payload.id
            }
        }

        case 'RESET_PASSWORD_REJECTED': {
            return {
                ...state
            }
        }
    }
}