/** @format */

const initialState = {
	loading: false,
	data: {
		success: false,
		message: '',
		status: '',
		totalPage: '',
		totalRow: '',
		totaldata: '',
		result: [
			{
				account_id: '',
				account_email: '',
				account_password: '',
				account_role: '',
				customer_id: '',
				customer_name: '',
				customer_email: '',
				customer_phone_number: '',
				customer_address: '',
			},
		],
	},
	error: null,
};

const initialStateBasic = {
	loading: false,
	data: {
		success: false,
		message: '',
		status: '',
		result: {},
	},
	error: null,
};

export const FetchGetAccount = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_ALL_ACCOUNT_REQUEST':
			return { ...state, loading: true };
		case 'GET_ALL_ACCOUNT_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'GET_ALL_ACCOUNT_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};
		default:
			return state;
	}
};
export const FetchDeleteAccount = (state = initialStateBasic, action = {}) => {
	switch (action.type) {
		case 'GET_ALL_ACCOUNT_REQUEST':
			return { ...state, loading: true };
		case 'GET_ALL_ACCOUNT_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'GET_ALL_ACCOUNT_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};
		default:
			return state;
	}
};
