/** @format */

import axios from 'axios';

const GetAllAccountRequest = () => {
	return {
		type: 'GET_ALL_ACCOUNT_REQUEST',
	};
};

const GetAllAccountSuccess = (data) => {
	return {
		type: 'GET_ALL_ACCOUNT_SUCCESS',
		payload: data,
	};
};

const GetAllAccountError = (error) => {
	return {
		type: 'GET_ALL_ACCOUNT_ERROR',
		payload: error.response.data.message,
	};
};
const DeleteAccountRequest = () => {
	return {
		type: 'DELETE_ACCOUNT_REQUEST',
	};
};

const DeleteAccountSuccess = (data) => {
	return {
		type: 'DELETE_ACCOUNT_SUCCESS',
		payload: data,
	};
};

const DeleteAccountError = (error) => {
	return {
		type: 'DELETE_ACCOUNT_ERROR',
		payload: error.response.data.message,
	};
};

export const DeleteAccount = (account_id, token) => {
	return (dispatch) => {
		dispatch(DeleteAccountRequest());
		axios({
			method: 'DELETE',
			url: `http://localhost:7777/api/v1/account?account_id=${account_id}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(DeleteAccountSuccess(res.data));
			})
			.catch((err) => {
				dispatch(DeleteAccountError(err));
			});
	};
};
export const GetAllAccount = (data, token) => {
	return (dispatch) => {
		dispatch(GetAllAccountRequest());
		axios({
			method: 'GET',
			url: `http://localhost:7777/api/v1/account?limit=${data.limit}&page=${data.page}&order_by=${data.order_by}&sort=${data.sort}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(GetAllAccountSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetAllAccountError(err));
			});
	};
};
