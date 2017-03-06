import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	ACCOUNT_CREATION_SUCCESS,
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	first_name: '',
	last_name: '', 
	email: '',
	password: '', 
	user: null,
	error: null,
	loading: false 
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case FIRST_NAME_CHANGED: 
			return { ...state, first_name: action.payload };

		case LAST_NAME_CHANGED:
			return { ...state, last_name: action.payload };

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };

		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };

		case LOGIN_USER_FAIL:
			return { 
				...state, 
				error: 'login failed :( create an account or try again', 
				password: '', 
				loading: false 
			};
		case ACCOUNT_CREATION_SUCCESS:
			return INITIAL_STATE;

		default:
			return state;
	}
};
