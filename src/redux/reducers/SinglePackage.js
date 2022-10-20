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
				package_id: '',
				package_name: '',
				package_description: '',
				package_price: '',
				package_image: '',
				package_date: '',
			},
		],
	},
	error: null,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_SINGLE_PACKAGE_REQUEST':
			return { ...state, loading: true };
		case 'GET_SINGLE_PACKAGE_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'GET_SINGLE_PACKAGE_SUCCESS':
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
export default Fetch;
