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
};

export const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_PACKAGE_REQUEST':
			return { ...state, loading: true };
		case 'ADD_PACKAGE_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};

		case 'ADD_PACKAGE_SUCCESS':
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
export const FetchDeletePackage = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_PACKAGE_REQUEST':
			return { ...state, loading: true };
		case 'ADD_PACKAGE_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};

		case 'ADD_PACKAGE_SUCCESS':
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
export const FetchEditPackage = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'EDIT_PACKAGE_REQUEST':
			return { ...state, loading: true };
		case 'EDIT_PACKAGE_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};

		case 'EDIT_PACKAGE_SUCCESS':
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
