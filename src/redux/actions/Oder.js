/** @format */

import axios from 'axios';
import Swal from 'sweetalert2';

const AddOrderRequest = () => {
	return {
		type: 'ADD_ORDER_REQUEST',
	};
};

const AddOrderSuccess = (data) => {
	return {
		type: 'ADD_ORDER_SUCCESS',
		payload: data,
	};
};

const AddOrderError = (error) => {
	return {
		type: 'ADD_ORDER_ERROR',
		payload: error.response.data.message,
	};
};
const GetSingleOrderRequest = () => {
	return {
		type: 'GET_SINGLE_ORDER_REQUEST',
	};
};

const GetSingleOrderSuccess = (data) => {
	return {
		type: 'GET_SINGLE_ORDER_SUCCESS',
		payload: data,
	};
};

const GetSingleOrderError = (error) => {
	return {
		type: 'GET_SINGLE_ORDER_ERROR',
		payload: error.response.data.message,
	};
};
const GetAllOrderRequest = () => {
	return {
		type: 'GET_ALL_ORDER_REQUEST',
	};
};

const GetAllOrderSuccess = (data) => {
	return {
		type: 'GET_ALL_ORDER_SUCCESS',
		payload: data,
	};
};

const GetAllOrderError = (error) => {
	return {
		type: 'GET_ALL_ORDER_ERROR',
		payload: error.response.data.message,
	};
};
const DeleteOrderRequest = () => {
	return {
		type: 'DELETE_ORDER_REQUEST',
	};
};

const DeleteOrderSuccess = (data) => {
	return {
		type: 'DELETE_ORDER_SUCCESS',
		payload: data,
	};
};

const DeleteOrderError = (error) => {
	return {
		type: 'DELETE_ORDER_ERROR',
		payload: error.response.data.message,
	};
};
const UpdateOrderRequest = () => {
	return {
		type: 'UPDATE_ORDER_REQUEST',
	};
};

const UpdateOrderSuccess = (data) => {
	return {
		type: 'UPDATE_ORDER_SUCCESS',
		payload: data,
	};
};

const UpdateOrderError = (error) => {
	return {
		type: 'UPDATE_ORDER_ERROR',
		payload: error.response.data.message,
	};
};

export const AddOrder = (data) => {
	console.log(data.token, 'ini token yang dikirim');
	return (dispatch) => {
		dispatch(AddOrderRequest());
		axios({
			method: 'POST',
			url: `http://localhost:7777/api/v1/order`,
			data: {
				customer_id: data.customer_id,
				package_id: data.package_id,
				quantity: data.quantity,
				price: data.price,
			},
			headers: {
				token: data.token,
			},
		})
			.then((res) => {
				dispatch(AddOrderSuccess(res.data));
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Order Success',
				});
			})
			.catch((err) => {
				dispatch(AddOrderError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};
export const GetSingleOrder = (data, token) => {
	console.log(data.token, 'ini token yang dikirim');
	return (dispatch) => {
		dispatch(GetSingleOrderRequest());
		axios({
			method: 'GET',
			url: `http://localhost:7777/api/v1/order/id?customer_id=${data}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(GetSingleOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetSingleOrderError(err));
			});
	};
};
export const DeleteOrder = (order_id, token) => {
	return (dispatch) => {
		dispatch(DeleteOrderRequest());
		axios({
			method: 'DELETE',
			url: `http://localhost:7777/api/v1/order?order_id=${order_id}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(DeleteOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(DeleteOrderError(err));
			});
	};
};
export const UpdateOrder = (order_id, status, token) => {
	return (dispatch) => {
		dispatch(UpdateOrderRequest());
		axios({
			method: 'PATCH',
			url: `http://localhost:7777/api/v1/order?order_id=${order_id}`,
			data: {
				order_status: status,
			},
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(UpdateOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(UpdateOrderError(err));
			});
	};
};
export const GetAllOrder = (data, token) => {
	return (dispatch) => {
		dispatch(GetAllOrderRequest());
		axios({
			method: 'GET',
			url: `http://localhost:7777/api/v1/order?limit=${data.limit}&page=${data.page}&order_by=${data.order_by}&sort=${data.sort}`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(GetAllOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetAllOrderError(err));
			});
	};
};
