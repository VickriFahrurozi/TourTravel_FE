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
				order_id: '',
				order_number: '',
				order_total_price: '',
				order_status: '',
				created_at: '',
				package_id: '',
				quantity: '',
				total_price: '',
			},
		],
	},
	error: null,
};

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_ALL_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'GET_ALL_ORDER_ERROR':
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'GET_ALL_ORDER_SUCCESS':
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
