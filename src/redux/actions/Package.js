/** @format */

import axios from 'axios';
import Swal from 'sweetalert2';
const GetAllPackageRequest = () => {
	return {
		type: 'GET_ALL_PACKAGE_REQUEST',
	};
};

const GetAllPackageSuccess = (data) => {
	return {
		type: 'GET_ALL_PACKAGE_SUCCESS',
		payload: data,
	};
};

const GetAllPackageError = (error) => {
	return {
		type: 'GET_ALL_PACKAGE_ERROR',
		payload: error.response.data.message,
	};
};
const GetSinglePackageRequest = () => {
	return {
		type: 'GET_SINGLE_PACKAGE_REQUEST',
	};
};

const GetSinglePackageSuccess = (data) => {
	return {
		type: 'GET_SINGLE_PACKAGE_SUCCESS',
		payload: data,
	};
};

const GetSinglePackageError = (error) => {
	return {
		type: 'GET_SINGLE_PACKAGE_ERROR',
		payload: error.response.data.message,
	};
};
const AddPackageRequest = () => {
	return {
		type: 'ADD_PACKAGE_REQUEST',
	};
};

const AddPackageSuccess = (data) => {
	return {
		type: 'ADD_PACKAGE_SUCCESS',
		payload: data,
	};
};

const AddPackageError = (error) => {
	return {
		type: 'ADD_PACKAGE_ERROR',
		payload: error.response.data.message,
	};
};
const DeletePackageRequest = () => {
	return {
		type: 'DELETE_PACKAGE_REQUEST',
	};
};

const DeletePackageSuccess = (data) => {
	return {
		type: 'DELETE_PACKAGE_SUCCESS',
		payload: data,
	};
};

const DeletePackageError = (error) => {
	return {
		type: 'DELETE_PACKAGE_ERROR',
		payload: error.response.data.message,
	};
};
const EditPackageRequest = () => {
	return {
		type: 'EDIT_PACKAGE_REQUEST',
	};
};

const EditPackageSuccess = (data) => {
	return {
		type: 'EDIT_PACKAGE_SUCCESS',
		payload: data,
	};
};

const EditPackageError = (error) => {
	return {
		type: 'EDIT_PACKAGE_ERROR',
		payload: error.response.data.message,
	};
};

export const GetAllPackage = (data, page) => {
	return (dispatch) => {
		dispatch(GetAllPackageRequest());
		axios({
			method: 'GET',
			url: `http://localhost:7777/api/v1/package?limit=${data.limit}&page=${page}&order_by=${data.order_by}&sort=${data.sort}`,
		})
			.then((res) => {
				dispatch(GetAllPackageSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetAllPackageError(err));
			});
	};
};
export const GetSinglePackage = (id) => {
	return (dispatch) => {
		dispatch(GetSinglePackageRequest());
		axios({
			method: 'GET',
			url: `http://localhost:7777/api/v1/package/id?package_id=${id}`,
		})
			.then((res) => {
				dispatch(GetSinglePackageSuccess(res.data));
			})
			.catch((err) => {
				dispatch(GetSinglePackageError(err));
			});
	};
};
export const DeletePackage = (package_id, token) => {
	return (dispatch) => {
		dispatch(DeletePackageRequest());
		axios({
			method: 'DELETE',
			url: `http://localhost:7777/api/v1/package?package_id=${package_id}`,
			// {
			// 	package_name: data.package_name,
			// 	package_image: data.package_image,
			// 	package_description: data.package_description,
			// 	package_price: data.package_price,
			// 	package_date: data.package_date,
			// }
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(DeletePackageSuccess(res.data));
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Success',
				});
				window.location.reload();
			})
			.catch((err) => {
				dispatch(DeletePackageError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};
export const AddPackage = (data, token) => {
	console.log(data, 'INI FORM DATANYA');
	return (dispatch) => {
		dispatch(AddPackageRequest());
		axios({
			method: 'POST',
			url: `http://localhost:7777/api/v1/package`,
			data: data,
			// {
			// 	package_name: data.package_name,
			// 	package_image: data.package_image,
			// 	package_description: data.package_description,
			// 	package_price: data.package_price,
			// 	package_date: data.package_date,
			// }
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(AddPackageSuccess(res.data));
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Success',
				});
				window.location.reload();
			})
			.catch((err) => {
				dispatch(AddPackageError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};
export const EditPackage = (data, token, package_id) => {
	return (dispatch) => {
		dispatch(EditPackageRequest());
		axios({
			method: 'PATCH',
			url: `http://localhost:7777/api/v1/package?package_id=${package_id}`,
			data: data,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				dispatch(EditPackageSuccess(res.data));
				console.log(res.data, 'ini res datanya');
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Success',
				});
				window.location.reload();
			})
			.catch((err) => {
				dispatch(EditPackageError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};
