/** @format */

const initialState = {
	loading: false,
	data: {
		success: false,
		message: '',
		status: '',
		result: [
			{
				order_id: '',
				order_number: '',
				customer_id: '',
				order_total_price: '',
				order_status: '',
			},
		],
	},
	error: null,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_SINGLE_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'GET_SINGLE_ORDER_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'GET_SINGLE_ORDER_SUCCESS':
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
