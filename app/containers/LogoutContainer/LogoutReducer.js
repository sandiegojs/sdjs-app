const defaultState = {
	firstNameInput: '',
	lastNameInput: '',
	emailInput: '',
	passwordInput: '',
	loadingScreen: false,
	user: {
		id: '',
		token: ''
	}
};

export default function LogoutReducer (state = defaultState, action) {
    const {type, payload} = action;
    switch(type) {

        case 'CLEAR_INPUT_FIELD':{
            return {
                ...state,
                emailInput: '',
                passwordInput: ''
            }
        }

        default: {
            return state;
        }
    }
}
