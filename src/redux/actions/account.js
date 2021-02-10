import axios from 'axios';

import { 
	GET_ALL_MOVEMENTS,
	GET_ACCOUNT_BY_ID,
	GET_ALL_ACCOUNTS
} from '../constants/index'

import IP from './ip';

const getAccount = (account) => {
	return {
		type: GET_ACCOUNT_BY_ID,
		account
	};
};

const getMovements = (movement) => {
	return {
		type: GET_ALL_MOVEMENTS,
		movement
	};
};

const getAccounts = (account) => {
	return {
		type: GET_ALL_ACCOUNTS,
		account
	};
};

export const getOneAccount = (email) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`http://${IP}:3001/account/${email}`);
			dispatch(getAccount(res.data));
		} catch (err) {
			console.log(err);
		}
	};
};

export const getAllAccounts = (email) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`http://${IP}:3001/account/all/${email}`);
			dispatch(getAccounts(res.data));
		} catch (err) {
			console.log(err);
		}
	};
}

export const getAllMovements = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`http://${IP}:3001/movement/${id}`);
			dispatch(getMovements(res.data));
		} catch (err) {
			console.log(err);
		}
	};
};