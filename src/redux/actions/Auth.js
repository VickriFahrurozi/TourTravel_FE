/** @format */

import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
const LoginRequest = () => {
	return {
		type: 'LOGIN_REQUEST',
	};
};

const LoginSuccess = (data) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: data,
	};
};

const LoginError = (error) => {
	return {
		type: 'LOGIN_ERROR',
		payload: error.response.data.message,
	};
};

export const AuthLogout = () => {
	Swal.fire({
		icon: 'success',
		title: '',
		text: 'Logout Success',
	});
	return {
		type: 'AUTH_LOGOUT',
	};
};

export const AuthLogin = (formData) => {
	return (dispatch) => {
		dispatch(LoginRequest());
		axios({
			method: 'POST',
			url: 'http://localhost:7777/api/v1/auth/Login',
			data: {
				email: formData.email,
				password: formData.password,
			},
		})
			.then((res) => {
				dispatch(LoginSuccess(res.data.data));
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Login Success',
				});
			})
			.catch((err) => {
				dispatch(LoginError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};

const RegisterRequest = () => {
	return {
		type: 'REGISTER_REQUEST',
	};
};

const RegisterSuccess = (data) => {
	return {
		type: 'REGISTER_SUCCESS',
		payload: data,
	};
};

const RegisterError = (error) => {
	return {
		type: 'REGISTER_ERROR',
		payload: error.response.data.message,
	};
};

export const AuthRegister = (formData) => {
	return (dispatch) => {
		dispatch(RegisterRequest());
		axios({
			method: 'POST',
			url: 'http://localhost:7777/api/v1/auth/register',
			data: {
				name: formData.name,
				email: formData.email,
				address: formData.address,
				phone_number: formData.phone_number,
				password: formData.password,
				confirmpassword: formData.confirmpassword,
			},
		})
			.then((res) => {
				dispatch(RegisterSuccess(res.data));
				Swal.fire({
					icon: 'success',
					title: '',
					text: 'Register Success',
				});
			})
			.catch((err) => {
				dispatch(RegisterError(err));
				Swal.fire({
					icon: 'error',
					title: '',
					text: err.response.data.message,
				});
			});
	};
};
