/** @format */

const initialState = {
	loading: false,
	data: {
		success: false,
		message: '',
		status: '',
		result: {},
	},
	error: null,
	isLogin: false,
};

export const FetchAddOrder = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'ADD_ORDER_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				isLogin: false,
			};
		case 'ADD_ORDER_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
				isLogin: true,
			};
		default:
			return state;
	}
};
export const FetchDeleteOrder = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'DELETE_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_ORDER_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				isLogin: false,
			};
		case 'DELETE_ORDER_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
				isLogin: true,
			};
		default:
			return state;
	}
};
export const FetchUpdateOrder = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'UPDATE_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_ORDER_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
				isLogin: false,
			};
		case 'UPDATE_ORDER_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
				isLogin: true,
			};
		default:
			return state;
	}
};
