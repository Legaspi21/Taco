import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const firstNameChanged = (text) => {
	return {
		type: FIRST_NAME_CHANGED,
		payload: text
	};
};

export const lastNameChanged = (text) => {
	return {
		type: LAST_NAME_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
	dispatch({ type: LOGIN_USER });

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			loginUserFail(dispatch);
			// Actions.registration();
		});
	};
};

export const createAccount = ({ first_name, last_name, email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => createUserSuccess(dispatch, user, first_name, last_name));
	};
};

const createUserSuccess = (dispatch, user, firstName, lastName) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user 
	});
	const { currentUser } = firebase.auth();
	// Set the display name for the user (needed for email to work)
	firebase.auth().onAuthStateChanged((newUser) => {
		newUser.updateProfile({
        displayName: firstName
    });
	});
	// Make a record in the database with users first and last name
	firebase.database().ref(`/users/${currentUser.uid}`)
		.push({ firstName, lastName })
			.then(() => {
				// Advance to main screen
				Actions.main({ type: 'reset' });
			});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user 
	});

	Actions.main();
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};
