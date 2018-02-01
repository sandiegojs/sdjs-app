const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    url: '',
    location: '',
    company: ''
}

export default function ProfileReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

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

        default: {
            return state;
        }
    }
}